import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "typescript-advanced-types",
  title: "Mastering TypeScript Advanced Types",
  titleVi: "Làm chủ hệ thống kiểu nâng cao của TypeScript",
  excerpt: "Deep dive into conditional types, mapped types, template literal types, and type inference in TypeScript.",
  excerptVi: "Tìm hiểu conditional type, mapped type, template literal type và cơ chế suy luận kiểu trong TypeScript.",
  content: `# Advanced TypeScript Types

TypeScript's type system is incredibly powerful...`,
  contentVi: `# Kiểu nâng cao trong TypeScript

Hệ thống kiểu của TypeScript có thể mô tả nhiều quy tắc nghiệp vụ ngay tại thời điểm biên dịch.

## Conditional type

Conditional type cho phép lựa chọn kiểu kết quả dựa trên quan hệ giữa các kiểu đầu vào.

## Mapped type

Mapped type giúp tạo kiểu mới bằng cách duyệt qua các thuộc tính của kiểu hiện có, rất hữu ích khi xây dựng utility type dùng chung.`,
  category: "languages",
  tags: ["TypeScript", "Types", "JavaScript"],
  date: "2024-01-08",
  readTime: "18 min",
  readTimeVi: "18 phút",
};
