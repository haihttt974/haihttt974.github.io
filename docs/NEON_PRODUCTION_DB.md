# Neon production database

Production must use one PostgreSQL database only.

The GitHub Pages frontend calls the Render API:

```text
https://haihttt974.github.io
  -> https://portfolio-cms-api-go5c.onrender.com
  -> DATABASE_URL
```

If data is inserted in Neon but the website does not update, the Render API is not using that Neon connection string.

## Render environment

Set this on the Render web service:

```text
DATABASE_URL=postgresql://USER:PASSWORD@HOST.neon.tech/DB?sslmode=require
AllowedOrigins__0=https://haihttt974.github.io
Database__AutoMigrate=true
```

Do not use Render's generated PostgreSQL database for production if Neon is where content is edited.

After changing `DATABASE_URL`, redeploy or restart the Render service.

## Verify

```text
https://portfolio-cms-api-go5c.onrender.com/health
https://portfolio-cms-api-go5c.onrender.com/api/posts?pageSize=100
```

Public posts appear only when `posts.status = 'Published'` and each post has a valid `category_id`.
