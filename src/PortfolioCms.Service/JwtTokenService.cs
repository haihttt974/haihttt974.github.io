using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PortfolioCms.Common.Domain;

namespace PortfolioCms.Service;

public sealed class JwtOptions
{
    public string Issuer { get; set; } = "portfolio-cms";
    public string Audience { get; set; } = "portfolio-admin";
    public string Secret { get; set; } = "replace-this-secret-with-at-least-32-characters";
    public int ExpireMinutes { get; set; } = 720;
}

public sealed class JwtTokenService(IOptions<JwtOptions> options)
{
    private readonly JwtOptions _options = options.Value;

    public (string Token, DateTimeOffset ExpiresAt) CreateToken(User user)
    {
        var expiresAt = DateTimeOffset.UtcNow.AddMinutes(_options.ExpireMinutes);
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            new Claim(JwtRegisteredClaimNames.UniqueName, user.Username),
            new Claim(ClaimTypes.Name, user.DisplayName),
            new Claim(ClaimTypes.Role, user.Role)
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.Secret));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var token = new JwtSecurityToken(_options.Issuer, _options.Audience, claims, expires: expiresAt.UtcDateTime, signingCredentials: credentials);

        return (new JwtSecurityTokenHandler().WriteToken(token), expiresAt);
    }
}
