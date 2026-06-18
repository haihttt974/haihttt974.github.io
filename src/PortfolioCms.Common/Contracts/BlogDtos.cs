using PortfolioCms.Common.Domain;

namespace PortfolioCms.Common.Contracts;

public sealed record LoginRequest(string Username, string Password);
public sealed record LoginResponse(string AccessToken, DateTimeOffset ExpiresAt, string Username, string DisplayName, string Role);

public sealed record CategoryDto(Guid Id, string Name, string Slug, string? Description, string? Color, int SortOrder, bool IsActive, int PostCount);
public sealed record UpsertCategoryRequest(string Name, string? Slug, string? Description, string? Color, int SortOrder, bool IsActive);

public sealed record TagDto(Guid Id, string Name, string Slug, int PostCount);
public sealed record UpsertTagRequest(string Name, string? Slug);

public sealed record PostListItemDto(
    Guid Id,
    string Title,
    string? TitleVi,
    string Slug,
    string Excerpt,
    string? ExcerptVi,
    string CategorySlug,
    string CategoryName,
    IReadOnlyList<string> Tags,
    string? CoverImageUrl,
    bool Featured,
    int ReadTimeMinutes,
    long ViewCount,
    DateTimeOffset? PublishedAt,
    DateTimeOffset CreatedAt,
    DateTimeOffset UpdatedAt,
    PostStatus Status);

public sealed record PostDetailDto(
    Guid Id,
    string Title,
    string? TitleVi,
    string Slug,
    string Excerpt,
    string? ExcerptVi,
    string Content,
    string? ContentVi,
    string CategorySlug,
    string CategoryName,
    IReadOnlyList<string> Tags,
    string? CoverImageUrl,
    bool Featured,
    int ReadTimeMinutes,
    long ViewCount,
    DateTimeOffset? PublishedAt,
    DateTimeOffset CreatedAt,
    DateTimeOffset UpdatedAt,
    PostStatus Status);

public sealed record UpsertPostRequest(
    string Title,
    string? TitleVi,
    string? Slug,
    string Excerpt,
    string? ExcerptVi,
    string Content,
    string? ContentVi,
    string? CoverImageUrl,
    Guid CategoryId,
    IReadOnlyList<Guid> TagIds,
    PostStatus Status,
    bool Featured,
    int? ReadTimeMinutes,
    DateTimeOffset? PublishedAt);

public sealed record PagedResult<T>(IReadOnlyList<T> Items, int Page, int PageSize, int TotalItems, int TotalPages);
public sealed record DashboardDto(int TotalPosts, int PublishedPosts, int DraftPosts, int Categories, int Tags, long TotalViews);
public sealed record MediaAssetDto(Guid Id, string Url, string? PublicId, string? FileName, string? MimeType, long? SizeBytes, DateTimeOffset CreatedAt);
