using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioCms.Common.Contracts;
using PortfolioCms.Data;
using PortfolioCms.Service;

namespace PortfolioCms.Api.Controllers;

[ApiController]
[Route("api/auth")]
public sealed class AuthController(AppDbContext db, PasswordHasher passwordHasher, JwtTokenService jwtTokenService) : ControllerBase
{
    [HttpPost("login")]
    public async Task<ActionResult<LoginResponse>> Login(LoginRequest request, CancellationToken cancellationToken)
    {
        var username = request.Username.Trim();
        var user = await db.Users.SingleOrDefaultAsync(x => x.Username == username, cancellationToken);
        if (user is null || !passwordHasher.Verify(request.Password, user.PasswordHash))
        {
            return Unauthorized(new { message = "Invalid username or password." });
        }

        var token = jwtTokenService.CreateToken(user);
        return new LoginResponse(token.Token, token.ExpiresAt, user.Username, user.DisplayName, user.Role);
    }
}
