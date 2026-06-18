# Portfolio CMS Deployment

This project now has two deployable parts:

- Frontend: React + Vite static app.
- Backend: ASP.NET Core 9 Web API with EF Core, PostgreSQL, JWT auth, and Cloudinary upload.

## Local Development

Frontend:

```bash
npm install
npm run client:dev
```

Create `src/PortfolioCms.Client/.env` from `src/PortfolioCms.Client/.env.example`:

```bash
VITE_API_BASE_URL=http://localhost:5000
```

Backend:

```bash
cd src/PortfolioCms.Api
dotnet restore
dotnet run
```

Default local database connection:

```text
Host=localhost;Port=5432;Database=portfolio_cms;Username=postgres;Password=postgres
```

The backend auto-runs EF migrations and seeds:

- Admin username: `admin`
- Admin password: `ChangeMe123!`

Change these values before production.

## Production Services

Recommended free/low-cost setup:

- Frontend: Cloudflare Pages or GitHub Pages.
- Backend: Render Web Service or another free ASP.NET Core container host.
- Database: Neon PostgreSQL free plan.
- Images: Cloudinary free plan.

## Backend Environment Variables

Use these environment variables on the backend host:

```text
ConnectionStrings__DefaultConnection=Host=...;Database=...;Username=...;Password=...;SSL Mode=Require;Trust Server Certificate=true
Jwt__Issuer=portfolio-cms
Jwt__Audience=portfolio-admin
Jwt__Secret=your-random-secret-at-least-32-characters
Jwt__ExpireMinutes=720
SeedAdmin__Username=admin
SeedAdmin__Password=your-first-admin-password
Cloudinary__CloudName=your-cloud-name
Cloudinary__ApiKey=your-api-key
Cloudinary__ApiSecret=your-api-secret
Cloudinary__Folder=portfolio-blog
AllowedOrigins__0=https://your-frontend-domain
Database__AutoMigrate=true
```

## Frontend Environment Variables

Use this on Cloudflare Pages/GitHub Actions:

```text
VITE_API_BASE_URL=https://your-backend-domain
```

If `VITE_API_BASE_URL` is missing or the backend is unavailable, the public blog falls back to `src/PortfolioCms.Client/src/data/blogData.ts`.

## CMS URLs

- Public blog list: `/blog`
- Public blog detail: `/blog/:slug`
- Admin: `/admin`
- Backend health check: `/health`
- Backend OpenAPI in development: `/openapi/v1.json`

## API Summary

Public:

```text
GET  /api/posts
GET  /api/posts/{slug}
POST /api/posts/{slug}/view
GET  /api/categories
GET  /api/tags
```

Admin:

```text
POST   /api/auth/login
GET    /api/admin/dashboard
GET    /api/admin/posts
GET    /api/admin/posts/{id}
POST   /api/admin/posts
PUT    /api/admin/posts/{id}
DELETE /api/admin/posts/{id}
PATCH  /api/admin/posts/{id}/publish
GET    /api/admin/categories
POST   /api/admin/categories
PUT    /api/admin/categories/{id}
DELETE /api/admin/categories/{id}
GET    /api/admin/tags
POST   /api/admin/tags
PUT    /api/admin/tags/{id}
DELETE /api/admin/tags/{id}
POST   /api/admin/media/upload
GET    /api/admin/media
DELETE /api/admin/media/{id}
```

## Deployment Notes

For Cloudflare Pages, set the build command to:

```bash
npm run client:build
```

and output directory:

```text
src/PortfolioCms.Client/dist
```

For backend container deploy, use this Dockerfile with the repository root as build context:

```text
src/PortfolioCms.Api/Dockerfile
```

Set the container port to `8080`.
