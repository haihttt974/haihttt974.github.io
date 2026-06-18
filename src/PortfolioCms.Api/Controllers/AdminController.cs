using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioCms.Common.Contracts;
using PortfolioCms.Data;
using PortfolioCms.Common.Domain;
using PortfolioCms.Service;

namespace PortfolioCms.Api.Controllers;

[ApiController]
[Authorize(Roles = "Admin")]
[Route("api/admin")]
public sealed class AdminController(AppDbContext db, SlugService slugService, CloudinaryMediaService mediaService) : ControllerBase
{
    [HttpGet("dashboard")]
    public async Task<DashboardDto> Dashboard(CancellationToken cancellationToken)
    {
        return new DashboardDto(
            await db.Posts.CountAsync(cancellationToken),
            await db.Posts.CountAsync(x => x.Status == PostStatus.Published, cancellationToken),
            await db.Posts.CountAsync(x => x.Status == PostStatus.Draft, cancellationToken),
            await db.Categories.CountAsync(cancellationToken),
            await db.Tags.CountAsync(cancellationToken),
            await db.Posts.SumAsync(x => x.ViewCount, cancellationToken));
    }

    [HttpGet("posts")]
    public async Task<PagedResult<PostListItemDto>> Posts([FromQuery] int page = 1, [FromQuery] int pageSize = 20, CancellationToken cancellationToken = default)
    {
        page = Math.Max(1, page);
        pageSize = Math.Clamp(pageSize, 1, 100);

        var query = db.Posts.AsNoTracking().Include(x => x.Category).Include(x => x.PostTags).ThenInclude(x => x.Tag);
        var total = await query.CountAsync(cancellationToken);
        var posts = await query.OrderByDescending(x => x.UpdatedAt).Skip((page - 1) * pageSize).Take(pageSize).ToListAsync(cancellationToken);
        var items = posts.Select(PostsController.ToListItem).ToList();

        return new PagedResult<PostListItemDto>(items, page, pageSize, total, (int)Math.Ceiling(total / (double)pageSize));
    }

    [HttpGet("posts/{id:guid}")]
    public async Task<ActionResult<PostDetailDto>> Post(Guid id, CancellationToken cancellationToken)
    {
        var post = await db.Posts.AsNoTracking().Include(x => x.Category).Include(x => x.PostTags).ThenInclude(x => x.Tag).SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        return post is null ? NotFound() : PostsController.ToDetail(post);
    }

    [HttpPost("posts")]
    public async Task<ActionResult<PostDetailDto>> CreatePost(UpsertPostRequest request, CancellationToken cancellationToken)
    {
        var post = new Post();
        await ApplyPostRequest(post, request, cancellationToken);
        if (await db.Posts.AnyAsync(x => x.Slug == post.Slug, cancellationToken))
        {
            return Conflict(new { message = "Post slug already exists." });
        }
        db.Posts.Add(post);
        await db.SaveChangesAsync(cancellationToken);
        await db.Entry(post).Reference(x => x.Category).LoadAsync(cancellationToken);
        await db.Entry(post).Collection(x => x.PostTags).Query().Include(x => x.Tag).LoadAsync(cancellationToken);
        return CreatedAtAction(nameof(Post), new { id = post.Id }, PostsController.ToDetail(post));
    }

    [HttpPut("posts/{id:guid}")]
    public async Task<ActionResult<PostDetailDto>> UpdatePost(Guid id, UpsertPostRequest request, CancellationToken cancellationToken)
    {
        var post = await db.Posts.Include(x => x.PostTags).SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (post is null) return NotFound();

        await ApplyPostRequest(post, request, cancellationToken);
        if (await db.Posts.AnyAsync(x => x.Id != id && x.Slug == post.Slug, cancellationToken))
        {
            return Conflict(new { message = "Post slug already exists." });
        }
        await db.SaveChangesAsync(cancellationToken);
        await db.Entry(post).Reference(x => x.Category).LoadAsync(cancellationToken);
        await db.Entry(post).Collection(x => x.PostTags).Query().Include(x => x.Tag).LoadAsync(cancellationToken);
        return PostsController.ToDetail(post);
    }

    [HttpDelete("posts/{id:guid}")]
    public async Task<IActionResult> DeletePost(Guid id, CancellationToken cancellationToken)
    {
        var post = await db.Posts.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (post is null) return NotFound();
        db.Posts.Remove(post);
        await db.SaveChangesAsync(cancellationToken);
        return NoContent();
    }

    [HttpPatch("posts/{id:guid}/publish")]
    public async Task<IActionResult> PublishPost(Guid id, CancellationToken cancellationToken)
    {
        var post = await db.Posts.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (post is null) return NotFound();
        post.Status = PostStatus.Published;
        post.PublishedAt ??= DateTimeOffset.UtcNow;
        post.UpdatedAt = DateTimeOffset.UtcNow;
        await db.SaveChangesAsync(cancellationToken);
        return NoContent();
    }

    [HttpGet("categories")]
    public async Task<IReadOnlyList<CategoryDto>> Categories(CancellationToken cancellationToken)
    {
        return await db.Categories.AsNoTracking().OrderBy(x => x.SortOrder).ThenBy(x => x.Name)
            .Select(x => new CategoryDto(x.Id, x.Name, x.Slug, x.Description, x.Color, x.SortOrder, x.IsActive, x.Posts.Count))
            .ToListAsync(cancellationToken);
    }

    [HttpPost("categories")]
    public async Task<ActionResult<CategoryDto>> CreateCategory(UpsertCategoryRequest request, CancellationToken cancellationToken)
    {
        var category = new Category();
        ApplyCategoryRequest(category, request);
        if (await db.Categories.AnyAsync(x => x.Slug == category.Slug, cancellationToken))
        {
            return Conflict(new { message = "Category slug already exists." });
        }
        db.Categories.Add(category);
        await db.SaveChangesAsync(cancellationToken);
        return new CategoryDto(category.Id, category.Name, category.Slug, category.Description, category.Color, category.SortOrder, category.IsActive, 0);
    }

    [HttpPut("categories/{id:guid}")]
    public async Task<ActionResult<CategoryDto>> UpdateCategory(Guid id, UpsertCategoryRequest request, CancellationToken cancellationToken)
    {
        var category = await db.Categories.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (category is null) return NotFound();
        ApplyCategoryRequest(category, request);
        if (await db.Categories.AnyAsync(x => x.Id != id && x.Slug == category.Slug, cancellationToken))
        {
            return Conflict(new { message = "Category slug already exists." });
        }
        await db.SaveChangesAsync(cancellationToken);
        return new CategoryDto(category.Id, category.Name, category.Slug, category.Description, category.Color, category.SortOrder, category.IsActive, await db.Posts.CountAsync(x => x.CategoryId == id, cancellationToken));
    }

    [HttpDelete("categories/{id:guid}")]
    public async Task<IActionResult> DeleteCategory(Guid id, CancellationToken cancellationToken)
    {
        if (await db.Posts.AnyAsync(x => x.CategoryId == id, cancellationToken)) return Conflict(new { message = "Category is used by posts." });
        var category = await db.Categories.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (category is null) return NotFound();
        db.Categories.Remove(category);
        await db.SaveChangesAsync(cancellationToken);
        return NoContent();
    }

    [HttpGet("tags")]
    public async Task<IReadOnlyList<TagDto>> Tags(CancellationToken cancellationToken)
    {
        return await db.Tags.AsNoTracking().OrderBy(x => x.Name)
            .Select(x => new TagDto(x.Id, x.Name, x.Slug, x.PostTags.Count))
            .ToListAsync(cancellationToken);
    }

    [HttpPost("tags")]
    public async Task<ActionResult<TagDto>> CreateTag(UpsertTagRequest request, CancellationToken cancellationToken)
    {
        var tag = new Tag { Name = request.Name.Trim(), Slug = string.IsNullOrWhiteSpace(request.Slug) ? slugService.CreateSlug(request.Name) : slugService.CreateSlug(request.Slug) };
        if (await db.Tags.AnyAsync(x => x.Slug == tag.Slug, cancellationToken))
        {
            return Conflict(new { message = "Tag slug already exists." });
        }
        db.Tags.Add(tag);
        await db.SaveChangesAsync(cancellationToken);
        return new TagDto(tag.Id, tag.Name, tag.Slug, 0);
    }

    [HttpPut("tags/{id:guid}")]
    public async Task<ActionResult<TagDto>> UpdateTag(Guid id, UpsertTagRequest request, CancellationToken cancellationToken)
    {
        var tag = await db.Tags.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (tag is null) return NotFound();
        tag.Name = request.Name.Trim();
        tag.Slug = string.IsNullOrWhiteSpace(request.Slug) ? slugService.CreateSlug(request.Name) : slugService.CreateSlug(request.Slug);
        if (await db.Tags.AnyAsync(x => x.Id != id && x.Slug == tag.Slug, cancellationToken))
        {
            return Conflict(new { message = "Tag slug already exists." });
        }
        tag.UpdatedAt = DateTimeOffset.UtcNow;
        await db.SaveChangesAsync(cancellationToken);
        return new TagDto(tag.Id, tag.Name, tag.Slug, await db.PostTags.CountAsync(x => x.TagId == id, cancellationToken));
    }

    [HttpDelete("tags/{id:guid}")]
    public async Task<IActionResult> DeleteTag(Guid id, CancellationToken cancellationToken)
    {
        var tag = await db.Tags.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (tag is null) return NotFound();
        db.Tags.Remove(tag);
        await db.SaveChangesAsync(cancellationToken);
        return NoContent();
    }

    [HttpGet("media")]
    public async Task<IReadOnlyList<MediaAssetDto>> Media(CancellationToken cancellationToken)
    {
        return await db.MediaAssets.AsNoTracking().OrderByDescending(x => x.CreatedAt)
            .Select(x => new MediaAssetDto(x.Id, x.Url, x.PublicId, x.FileName, x.MimeType, x.SizeBytes, x.CreatedAt))
            .ToListAsync(cancellationToken);
    }

    [HttpPost("media/upload")]
    [RequestSizeLimit(10_000_000)]
    public async Task<ActionResult<MediaAssetDto>> Upload(IFormFile file, CancellationToken cancellationToken)
    {
        if (file.Length == 0) return BadRequest(new { message = "File is empty." });
        if (!file.ContentType.StartsWith("image/", StringComparison.OrdinalIgnoreCase)) return BadRequest(new { message = "Only image uploads are allowed." });

        var uploaded = await mediaService.UploadAsync(file, cancellationToken);
        var asset = new MediaAsset { Url = uploaded.Url, PublicId = uploaded.PublicId, FileName = file.FileName, MimeType = file.ContentType, SizeBytes = file.Length };
        db.MediaAssets.Add(asset);
        await db.SaveChangesAsync(cancellationToken);
        return new MediaAssetDto(asset.Id, asset.Url, asset.PublicId, asset.FileName, asset.MimeType, asset.SizeBytes, asset.CreatedAt);
    }

    [HttpDelete("media/{id:guid}")]
    public async Task<IActionResult> DeleteMedia(Guid id, CancellationToken cancellationToken)
    {
        var asset = await db.MediaAssets.SingleOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (asset is null) return NotFound();
        db.MediaAssets.Remove(asset);
        await db.SaveChangesAsync(cancellationToken);
        return NoContent();
    }

    private async Task ApplyPostRequest(Post post, UpsertPostRequest request, CancellationToken cancellationToken)
    {
        if (!await db.Categories.AnyAsync(x => x.Id == request.CategoryId, cancellationToken)) throw new InvalidOperationException("Category does not exist.");

        post.Title = request.Title.Trim();
        post.TitleVi = string.IsNullOrWhiteSpace(request.TitleVi) ? null : request.TitleVi.Trim();
        post.Slug = string.IsNullOrWhiteSpace(request.Slug) ? slugService.CreateSlug(request.Title) : slugService.CreateSlug(request.Slug);
        post.Excerpt = request.Excerpt.Trim();
        post.ExcerptVi = string.IsNullOrWhiteSpace(request.ExcerptVi) ? null : request.ExcerptVi.Trim();
        post.Content = request.Content;
        post.ContentVi = string.IsNullOrWhiteSpace(request.ContentVi) ? null : request.ContentVi;
        post.CoverImageUrl = string.IsNullOrWhiteSpace(request.CoverImageUrl) ? null : request.CoverImageUrl.Trim();
        post.CategoryId = request.CategoryId;
        post.Status = request.Status;
        post.Featured = request.Featured;
        post.ReadTimeMinutes = request.ReadTimeMinutes;
        post.PublishedAt = request.Status == PostStatus.Published ? request.PublishedAt ?? DateTimeOffset.UtcNow : request.PublishedAt;
        post.UpdatedAt = DateTimeOffset.UtcNow;

        post.PostTags.Clear();
        foreach (var tagId in request.TagIds.Distinct())
        {
            post.PostTags.Add(new PostTag { PostId = post.Id, TagId = tagId });
        }
    }

    private void ApplyCategoryRequest(Category category, UpsertCategoryRequest request)
    {
        category.Name = request.Name.Trim();
        category.Slug = string.IsNullOrWhiteSpace(request.Slug) ? slugService.CreateSlug(request.Name) : slugService.CreateSlug(request.Slug);
        category.Description = string.IsNullOrWhiteSpace(request.Description) ? null : request.Description.Trim();
        category.Color = string.IsNullOrWhiteSpace(request.Color) ? null : request.Color.Trim();
        category.SortOrder = request.SortOrder;
        category.IsActive = request.IsActive;
        category.UpdatedAt = DateTimeOffset.UtcNow;
    }
}
