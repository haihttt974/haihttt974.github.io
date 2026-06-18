using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace PortfolioCms.Service;

public sealed class CloudinaryOptions
{
    public string CloudName { get; set; } = string.Empty;
    public string ApiKey { get; set; } = string.Empty;
    public string ApiSecret { get; set; } = string.Empty;
    public string Folder { get; set; } = "portfolio-blog";
}

public sealed record UploadedMedia(string Url, string PublicId);

public sealed class CloudinaryMediaService(HttpClient httpClient, IOptions<CloudinaryOptions> options)
{
    private readonly CloudinaryOptions _options = options.Value;

    public async Task<UploadedMedia> UploadAsync(IFormFile file, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(_options.CloudName) || string.IsNullOrWhiteSpace(_options.ApiKey) || string.IsNullOrWhiteSpace(_options.ApiSecret))
        {
            throw new InvalidOperationException("Cloudinary is not configured.");
        }

        var timestamp = DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString();
        var signaturePayload = $"folder={_options.Folder}&timestamp={timestamp}{_options.ApiSecret}";
        var signature = Convert.ToHexString(SHA1.HashData(Encoding.UTF8.GetBytes(signaturePayload))).ToLowerInvariant();

        using var form = new MultipartFormDataContent();
        await using var stream = file.OpenReadStream();
        form.Add(new StreamContent(stream), "file", file.FileName);
        form.Add(new StringContent(_options.ApiKey), "api_key");
        form.Add(new StringContent(timestamp), "timestamp");
        form.Add(new StringContent(_options.Folder), "folder");
        form.Add(new StringContent(signature), "signature");

        var url = $"https://api.cloudinary.com/v1_1/{_options.CloudName}/image/upload";
        using var response = await httpClient.PostAsync(url, form, cancellationToken);
        var payload = await response.Content.ReadAsStringAsync(cancellationToken);
        response.EnsureSuccessStatusCode();

        using var document = JsonDocument.Parse(payload);
        return new UploadedMedia(
            document.RootElement.GetProperty("secure_url").GetString() ?? string.Empty,
            document.RootElement.GetProperty("public_id").GetString() ?? string.Empty);
    }
}
