using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PortfolioCms.Common.Domain;
using PortfolioCms.Data;

namespace PortfolioCms.Service;

public sealed class DataSeeder(AppDbContext db, PasswordHasher passwordHasher, SlugService slugService, IConfiguration configuration)
{
    public async Task SeedAsync(CancellationToken cancellationToken = default)
    {
        if (!await db.Users.AnyAsync(cancellationToken))
        {
            var username = configuration["SeedAdmin:Username"] ?? "admin";
            var password = configuration["SeedAdmin:Password"] ?? "ChangeMe123!";
            db.Users.Add(new User
            {
                Username = username,
                DisplayName = "Portfolio Admin",
                Role = "Admin",
                PasswordHash = passwordHasher.Hash(password)
            });
        }

        if (!await db.Categories.AnyAsync(cancellationToken))
        {
            db.Categories.AddRange(
                new Category { Name = "Programming Languages", Slug = "languages", Color = "category-languages", SortOrder = 1 },
                new Category { Name = "Frameworks & Libraries", Slug = "frameworks", Color = "category-frameworks", SortOrder = 2 },
                new Category { Name = "Software Architecture", Slug = "architecture", Color = "category-architecture", SortOrder = 3 },
                new Category { Name = "Design Patterns", Slug = "patterns", Color = "category-patterns", SortOrder = 4 },
                new Category { Name = "Best Practices", Slug = "practices", Color = "category-practices", SortOrder = 5 },
                new Category { Name = "Learning Roadmaps", Slug = "roadmap", Color = "category-roadmap", SortOrder = 6 });
        }

        await db.SaveChangesAsync(cancellationToken);

        if (!await db.Tags.AnyAsync(cancellationToken))
        {
            foreach (var tagName in new[] { "TypeScript", "React", "C#", ".NET", "Architecture", "Clean Code", "Backend", "Frontend" })
            {
                db.Tags.Add(new Tag { Name = tagName, Slug = slugService.CreateSlug(tagName) });
            }
        }

        await db.SaveChangesAsync(cancellationToken);

        if (!await db.Posts.AnyAsync(cancellationToken))
        {
            var categories = await db.Categories.ToDictionaryAsync(x => x.Slug, cancellationToken);
            var tags = await db.Tags.ToDictionaryAsync(x => x.Name, cancellationToken);

            var post = new Post
            {
                Title = "Modern C# for Backend Systems: Patterns That Improve Correctness",
                TitleVi = "C# hiện đại cho hệ thống Backend: Những mẫu giúp tăng tính đúng đắn",
                Slug = "csharp-modern-backend-guide",
                Excerpt = "A focused guide to records, nullable reference types, async workflows, result modeling, and dependency boundaries in modern C# backend applications.",
                ExcerptVi = "Hướng dẫn tập trung vào record, nullable reference type, async, mô hình hóa kết quả và ranh giới dependency trong backend C# hiện đại.",
                Content = "# Modern C# for Backend Systems\n\nModern C# gives backend developers strong tools for expressing intent.\n\n## Use records for value-oriented models\n\nRecords work well for commands, events, and values where identity comes from data.\n\n## Keep dependency direction clear\n\nCore business code should define interfaces; infrastructure implements them.",
                ContentVi = "# C# hiện đại cho hệ thống Backend\n\nC# hiện đại cung cấp nhiều công cụ mạnh để backend developer diễn đạt ý định.\n\n## Dùng record cho mô hình hướng giá trị\n\nRecord phù hợp với command, event và value object.\n\n## Giữ hướng dependency rõ ràng\n\nMã nghiệp vụ cốt lõi nên định nghĩa interface; hạ tầng triển khai chúng.",
                CategoryId = categories["languages"].Id,
                Status = PostStatus.Published,
                Featured = true,
                ReadTimeMinutes = 12,
                PublishedAt = DateTimeOffset.UtcNow.AddDays(-12)
            };
            post.PostTags.Add(new PostTag { Post = post, TagId = tags["C#"].Id });
            post.PostTags.Add(new PostTag { Post = post, TagId = tags[".NET"].Id });
            post.PostTags.Add(new PostTag { Post = post, TagId = tags["Backend"].Id });
            db.Posts.Add(post);
        }

        await db.SaveChangesAsync(cancellationToken);
    }
}
