using Microsoft.EntityFrameworkCore;
using PortfolioCms.Common.Domain;

namespace PortfolioCms.Data;

public sealed class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<User> Users => Set<User>();
    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Tag> Tags => Set<Tag>();
    public DbSet<Post> Posts => Set<Post>();
    public DbSet<PostTag> PostTags => Set<PostTag>();
    public DbSet<MediaAsset> MediaAssets => Set<MediaAsset>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("users");
            entity.HasIndex(x => x.Username).IsUnique();
            entity.Property(x => x.Username).HasMaxLength(80);
            entity.Property(x => x.DisplayName).HasMaxLength(120);
            entity.Property(x => x.Role).HasMaxLength(40);
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.ToTable("categories");
            entity.HasIndex(x => x.Slug).IsUnique();
            entity.Property(x => x.Name).HasMaxLength(120);
            entity.Property(x => x.Slug).HasMaxLength(160);
            entity.Property(x => x.Color).HasMaxLength(80);
        });

        modelBuilder.Entity<Tag>(entity =>
        {
            entity.ToTable("tags");
            entity.HasIndex(x => x.Slug).IsUnique();
            entity.Property(x => x.Name).HasMaxLength(80);
            entity.Property(x => x.Slug).HasMaxLength(120);
        });

        modelBuilder.Entity<Post>(entity =>
        {
            entity.ToTable("posts");
            entity.HasIndex(x => x.Slug).IsUnique();
            entity.HasIndex(x => x.Status);
            entity.Property(x => x.Title).HasMaxLength(220);
            entity.Property(x => x.TitleVi).HasMaxLength(220);
            entity.Property(x => x.Slug).HasMaxLength(260);
            entity.Property(x => x.Status).HasConversion<string>().HasMaxLength(24);
            entity.HasOne(x => x.Category).WithMany(x => x.Posts).HasForeignKey(x => x.CategoryId).OnDelete(DeleteBehavior.Restrict);
        });

        modelBuilder.Entity<PostTag>(entity =>
        {
            entity.ToTable("post_tags");
            entity.HasKey(x => new { x.PostId, x.TagId });
            entity.HasOne(x => x.Post).WithMany(x => x.PostTags).HasForeignKey(x => x.PostId).OnDelete(DeleteBehavior.Cascade);
            entity.HasOne(x => x.Tag).WithMany(x => x.PostTags).HasForeignKey(x => x.TagId).OnDelete(DeleteBehavior.Cascade);
        });

        modelBuilder.Entity<MediaAsset>(entity =>
        {
            entity.ToTable("media_assets");
            entity.Property(x => x.Url).HasMaxLength(1024);
            entity.Property(x => x.PublicId).HasMaxLength(255);
            entity.Property(x => x.FileName).HasMaxLength(255);
            entity.Property(x => x.MimeType).HasMaxLength(120);
        });
    }
}
