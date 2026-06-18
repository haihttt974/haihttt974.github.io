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

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
    ?? builder.Configuration["DATABASE_URL"]
    ?? "Host=localhost;Port=5432;Database=portfolio_cms;Username=postgres;Password=postgres";
connectionString = NormalizePostgresConnectionString(connectionString);

builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(connectionString));

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
        var origins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>() ?? ["http://localhost:8080", "http://localhost:5173"];
        policy.WithOrigins(origins).AllowAnyHeader().AllowAnyMethod();
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

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("Frontend");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapGet("/health", () => Results.Ok(new { status = "ok", service = "portfolio-cms" }));

if (app.Configuration.GetValue("Database:AutoMigrate", true))
{
    using var scope = app.Services.CreateScope();
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    await db.Database.MigrateAsync();
    await scope.ServiceProvider.GetRequiredService<DataSeeder>().SeedAsync();
}

app.Run();

static string NormalizePostgresConnectionString(string value)
{
    if (!value.StartsWith("postgres://", StringComparison.OrdinalIgnoreCase) &&
        !value.StartsWith("postgresql://", StringComparison.OrdinalIgnoreCase))
    {
        return value;
    }

    var uri = new Uri(value);
    var userInfo = uri.UserInfo.Split(':', 2);

    return new NpgsqlConnectionStringBuilder
    {
        Host = uri.Host,
        Port = uri.Port > 0 ? uri.Port : 5432,
        Database = uri.AbsolutePath.TrimStart('/'),
        Username = Uri.UnescapeDataString(userInfo.ElementAtOrDefault(0) ?? ""),
        Password = Uri.UnescapeDataString(userInfo.ElementAtOrDefault(1) ?? ""),
        SslMode = SslMode.Require
    }.ConnectionString;
}
