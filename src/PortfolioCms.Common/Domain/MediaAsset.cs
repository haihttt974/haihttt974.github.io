namespace PortfolioCms.Common.Domain;

public sealed class MediaAsset
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Url { get; set; } = string.Empty;
    public string? PublicId { get; set; }
    public string? FileName { get; set; }
    public string? MimeType { get; set; }
    public long? SizeBytes { get; set; }
    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
}
