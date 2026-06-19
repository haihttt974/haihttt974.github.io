using System.Text;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Npgsql;
using PortfolioCms.Data;
using PortfolioCms.Service;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection("Jwt"));
builder.Services.Configure<CloudinaryOptions>(builder.Configuration.GetSection("Cloudinary"));

var databaseProvider = builder.Configuration["Database:Provider"] ?? "Postgres";
var useInMemoryDatabase = builder.Environment.IsDevelopment() &&
    databaseProvider.Equals("InMemory", StringComparison.OrdinalIgnoreCase);
var useSqliteDatabase = builder.Environment.IsDevelopment() &&
    databaseProvider.Equals("Sqlite", StringComparison.OrdinalIgnoreCase);
var connectionString = ResolvePostgresConnectionString(builder.Configuration);
var sqliteConnectionString = builder.Configuration.GetConnectionString("SqliteConnection") ?? "Data Source=portfolio_cms_dev.db";

builder.Services.AddDbContext<AppDbContext>(options =>
{
    if (useInMemoryDatabase)
    {
        options.UseInMemoryDatabase("portfolio_cms_dev");
        return;
    }

    if (useSqliteDatabase)
    {
        options.UseSqlite(sqliteConnectionString);
        return;
    }

    options.UseNpgsql(connectionString, npgsqlOptions =>
    {
        npgsqlOptions.EnableRetryOnFailure(
            maxRetryCount: 5,
            maxRetryDelay: TimeSpan.FromSeconds(10),
            errorCodesToAdd: null);
    });
});

var jwtOptions = builder.Configuration.GetSection("Jwt").Get<JwtOptions>() ?? new JwtOptions();
var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOptions.Secret));

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateIssuerSigningKey = true,
            ValidateLifetime = true,
            ValidIssuer = jwtOptions.Issuer,
            ValidAudience = jwtOptions.Audience,
            IssuerSigningKey = signingKey,
            ClockSkew = TimeSpan.FromMinutes(1)
        };
    });

builder.Services.AddAuthorization();
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        var configuredOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>() ?? [];
        var fallbackOrigins = new[]
        {
            "http://localhost:8080",
            "http://127.0.0.1:8080",
            "http://localhost:5173",
            "http://127.0.0.1:5173",
        };

        policy
            .SetIsOriginAllowed(origin =>
            {
                if (!Uri.TryCreate(origin, UriKind.Absolute, out var uri))
                {
                    return false;
                }

                if (configuredOrigins.Contains(origin, StringComparer.OrdinalIgnoreCase) ||
                    fallbackOrigins.Contains(origin, StringComparer.OrdinalIgnoreCase))
                {
                    return true;
                }

                var host = uri.Host.ToLowerInvariant();
                return host.EndsWith(".github.io", StringComparison.OrdinalIgnoreCase) ||
                       host is "haiit.dev" or "www.haiit.dev";
            })
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddHttpClient<CloudinaryMediaService>();
builder.Services.AddScoped<PasswordHasher>();
builder.Services.AddScoped<SlugService>();
builder.Services.AddScoped<JwtTokenService>();
builder.Services.AddScoped<DataSeeder>();
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
});
builder.Services.AddOpenApi();

var app = builder.Build();

app.MapOpenApi();
app.MapGet("/swagger", () => Results.Redirect("/openapi/v1.json", permanent: false));

app.UseCors("Frontend");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapGet("/", (IHostEnvironment environment) => Results.Ok(new
{
    status = "ok",
    service = "portfolio-cms",
    environment = environment.EnvironmentName
}));
app.MapGet("/health", () => Results.Ok(new { status = "ok", service = "portfolio-cms" }));
app.MapGet("/health/database", async (AppDbContext db, IConfiguration configuration) =>
{
    var provider = configuration["Database:Provider"] ?? "Postgres";
    var canConnect = await db.Database.CanConnectAsync();

    if (provider.Equals("Sqlite", StringComparison.OrdinalIgnoreCase))
    {
        return Results.Ok(new
        {
            status = canConnect ? "ok" : "unavailable",
            provider = db.Database.ProviderName,
            dataSource = configuration.GetConnectionString("SqliteConnection") ?? "Data Source=portfolio_cms_dev.db"
        });
    }

    var connectionBuilder = new NpgsqlConnectionStringBuilder(ResolvePostgresConnectionString(configuration));

    return Results.Ok(new
    {
        status = canConnect ? "ok" : "unavailable",
        provider = db.Database.ProviderName,
        host = connectionBuilder.Host,
        database = connectionBuilder.Database,
        username = connectionBuilder.Username
    });
});
app.MapGet("/routes", (IEnumerable<EndpointDataSource> endpointSources) =>
{
    var routes = endpointSources
        .SelectMany(source => source.Endpoints)
        .OfType<RouteEndpoint>()
        .Select(endpoint =>
        {
            var httpMethods = endpoint.Metadata.GetMetadata<HttpMethodMetadata>()?.HttpMethods;
            var authorize = endpoint.Metadata.GetOrderedMetadata<Microsoft.AspNetCore.Authorization.IAuthorizeData>();

            return new
            {
                pattern = endpoint.RoutePattern.RawText,
                methods = httpMethods?.OrderBy(method => method).ToArray() ?? [],
                displayName = endpoint.DisplayName,
                requiresAuthorization = authorize.Count > 0
            };
        })
        .OrderBy(route => route.pattern)
        .ThenBy(route => string.Join(",", route.methods))
        .ToArray();

    return Results.Ok(routes);
});

await InitializeDatabaseAsync(app, useInMemoryDatabase || useSqliteDatabase);

app.Run();

static string ResolvePostgresConnectionString(IConfiguration configuration)
{
    var databaseUrl = configuration["DATABASE_URL"];
    if (!string.IsNullOrWhiteSpace(databaseUrl))
    {
        return NormalizePostgresConnectionString(databaseUrl);
    }

    var configuredConnectionString = configuration.GetConnectionString("DefaultConnection");
    if (!string.IsNullOrWhiteSpace(configuredConnectionString))
    {
        return NormalizePostgresConnectionString(configuredConnectionString);
    }

    return "Host=localhost;Port=5432;Database=portfolio_cms;Username=postgres;Password=postgres";
}

static string NormalizePostgresConnectionString(string value)
{
    if (!value.StartsWith("postgres://", StringComparison.OrdinalIgnoreCase) &&
        !value.StartsWith("postgresql://", StringComparison.OrdinalIgnoreCase))
    {
        return value;
    }

    var uri = new Uri(value);
    var userInfo = uri.UserInfo.Split(':', 2);
    var database = Uri.UnescapeDataString(uri.AbsolutePath.TrimStart('/'));

    var builder = new NpgsqlConnectionStringBuilder
    {
        Host = uri.Host,
        Port = uri.Port > 0 ? uri.Port : 5432,
        Database = database,
        Username = Uri.UnescapeDataString(userInfo.ElementAtOrDefault(0) ?? ""),
        Password = Uri.UnescapeDataString(userInfo.ElementAtOrDefault(1) ?? ""),
        SslMode = SslMode.Require
    };
    builder["Trust Server Certificate"] = true;

    return builder.ConnectionString;
}

static async Task InitializeDatabaseAsync(WebApplication app, bool useInMemoryDatabase)
{
    if (!app.Configuration.GetValue("Database:AutoMigrate", true))
    {
        return;
    }

    using var scope = app.Services.CreateScope();
    var logger = scope.ServiceProvider.GetRequiredService<ILoggerFactory>().CreateLogger("DatabaseInitialization");

    try
    {
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        if (useInMemoryDatabase)
        {
            await db.Database.EnsureCreatedAsync();
        }
        else
        {
            await db.Database.MigrateAsync();
        }

        await scope.ServiceProvider.GetRequiredService<DataSeeder>().SeedAsync();
        logger.LogInformation("Database migration and seeding completed.");
    }
    catch (Exception ex) when (!app.Environment.IsDevelopment())
    {
        logger.LogError(ex, "Database migration or seeding failed. The app will keep running so Render health checks can succeed.");
    }
}
