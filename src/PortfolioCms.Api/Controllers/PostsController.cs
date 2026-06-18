using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioCms.Common.Contracts;
using PortfolioCms.Data;
using PortfolioCms.Common.Domain;

namespace PortfolioCms.Api.Controllers;

[ApiController]
[Route("api")]
public sealed class PostsController(AppDbContext db) : ControllerBase
{
    [HttpGet("posts")]
    public async Task<ActionResult<PagedResult<PostListItemDto>>> GetPosts(
        [FromQuery] string? search,
        [FromQuery] string? category,
        [FromQuery] string? tag,
        [FromQuery] bool? featured,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 12,
        CancellationToken cancellationToken = default)
    {
        page = Math.Max(1, page);
        pageSize = Math.Clamp(pageSize, 1, 50);

        var query = db.Posts
            .AsNoTracking()
            .Include(x => x.Category)
            .Include(x => x.PostTags).ThenInclude(x => x.Tag)
            .Where(x => x.Status == PostStatus.Published);

        if (!string.IsNullOrWhiteSpace(search))
        {
            var term = search.Trim().ToLower();
            query = query.Where(x =>
                x.Title.ToLower().Contains(term) ||
                (x.TitleVi != null && x.TitleVi.ToLower().Contains(term)) ||
                x.Excerpt.ToLower().Contains(term) ||
                (x.ExcerptVi != null && x.ExcerptVi.ToLower().Contains(term)));
        }

        if (!string.IsNullOrWhiteSpace(category))
        {
            query = query.Where(x => x.Category != null && x.Category.Slug == category);
        }

        if (!string.IsNullOrWhiteSpace(tag))
        {
            var tagSlugs = tag.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
            foreach (var tagSlug in tagSlugs)
            {
                query = query.Where(x => x.PostTags.Any(pt => pt.Tag != null && pt.Tag.Slug == tagSlug));
            }
        }

        if (featured.HasValue)
        {
            query = query.Where(x => x.Featured == featured.Value);
        }

        var total = await query.CountAsync(cancellationToken);
        var posts = await query
            .OrderByDescending(x => x.PublishedAt ?? x.CreatedAt)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync(cancellationToken);
        var items = posts.Select(ToListItem).ToList();

        return new PagedResult<PostListItemDto>(items, page, pageSize, total, (int)Math.Ceiling(total / (double)pageSize));
    }

    [HttpGet("posts/{slug}")]
    public async Task<ActionResult<PostDetailDto>> GetPost(string slug, CancellationToken cancellationToken)
    {
        var post = await db.Posts
            .AsNoTracking()
            .Include(x => x.Category)
            .Include(x => x.PostTags).ThenInclude(x => x.Tag)
            .SingleOrDefaultAsync(x => x.Slug == slug && x.Status == PostStatus.Published, cancellationToken);

        return post is null ? NotFound() : ToDetail(post);
    }

    [HttpPost("posts/{slug}/view")]
    public async Task<ActionResult<object>> CountView(string slug, CancellationToken cancellationToken)
    {
        var post = await db.Posts.SingleOrDefaultAsync(x => x.Slug == slug && x.Status == PostStatus.Published, cancellationToken);
        if (post is null) return NotFound();

        post.ViewCount += 1;
        post.UpdatedAt = DateTimeOffset.UtcNow;
        await db.SaveChangesAsync(cancellationToken);

        return new { post.Slug, post.ViewCount };
    }

    [HttpGet("categories")]
    public async Task<IReadOnlyList<CategoryDto>> GetCategories(CancellationToken cancellationToken)
    {
        return await db.Categories
            .AsNoTracking()
            .OrderBy(x => x.SortOrder)
            .ThenBy(x => x.Name)
            .Select(x => new CategoryDto(x.Id, x.Name, x.Slug, x.Description, x.Color, x.SortOrder, x.IsActive, x.Posts.Count(p => p.Status == PostStatus.Published)))
            .ToListAsync(cancellationToken);
    }

    [HttpGet("tags")]
    public async Task<IReadOnlyList<TagDto>> GetTags(CancellationToken cancellationToken)
    {
        return await db.Tags
            .AsNoTracking()
            .OrderBy(x => x.Name)
            .Select(x => new TagDto(x.Id, x.Name, x.Slug, x.PostTags.Count(pt => pt.Post != null && pt.Post.Status == PostStatus.Published)))
            .ToListAsync(cancellationToken);
    }

    internal static PostListItemDto ToListItem(Post x) => new(
        x.Id,
        x.Title,
        x.TitleVi,
        x.Slug,
        x.Excerpt,
        x.ExcerptVi,
        x.Category?.Slug ?? string.Empty,
        x.Category?.Name ?? string.Empty,
        x.PostTags.Select(pt => pt.Tag?.Name ?? string.Empty).Where(t => t.Length > 0).OrderBy(t => t).ToList(),
        x.CoverImageUrl,
        x.Featured,
        x.ReadTimeMinutes ?? EstimateReadTime(x.Content),
        x.ViewCount,
        x.PublishedAt,
        x.CreatedAt,
        x.UpdatedAt,
        x.Status);

    internal static PostDetailDto ToDetail(Post x) => new(
        x.Id,
        x.Title,
        x.TitleVi,
        x.Slug,
        x.Excerpt,
        x.ExcerptVi,
        x.Content,
        x.ContentVi,
        x.Category?.Slug ?? string.Empty,
        x.Category?.Name ?? string.Empty,
        x.PostTags.Select(pt => pt.Tag?.Name ?? string.Empty).Where(t => t.Length > 0).OrderBy(t => t).ToList(),
        x.CoverImageUrl,
        x.Featured,
        x.ReadTimeMinutes ?? EstimateReadTime(x.Content),
        x.ViewCount,
        x.PublishedAt,
        x.CreatedAt,
        x.UpdatedAt,
        x.Status);

    private static int EstimateReadTime(string content) => Math.Max(1, (int)Math.Ceiling(content.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length / 220d));
}
