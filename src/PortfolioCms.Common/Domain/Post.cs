namespace PortfolioCms.Common.Domain;

public sealed class Post
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Title { get; set; } = string.Empty;
    public string? TitleVi { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Excerpt { get; set; } = string.Empty;
    public string? ExcerptVi { get; set; }
    public string Content { get; set; } = string.Empty;
    public string? ContentVi { get; set; }
    public string? CoverImageUrl { get; set; }
    public Guid CategoryId { get; set; }
    public Category? Category { get; set; }
    public PostStatus Status { get; set; } = PostStatus.Draft;
    public bool Featured { get; set; }
    public int? ReadTimeMinutes { get; set; }
    public long ViewCount { get; set; }
    public DateTimeOffset? PublishedAt { get; set; }
    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
    public DateTimeOffset UpdatedAt { get; set; } = DateTimeOffset.UtcNow;

    public ICollection<PostTag> PostTags { get; set; } = [];
}
