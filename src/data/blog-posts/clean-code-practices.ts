import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "clean-code-practices",
  title: "Writing Clean, Maintainable Code",
  titleVi: "Viết mã sạch và dễ bảo trì",
  excerpt: "Essential practices for writing code that is easy to read, understand, and maintain over time.",
  excerptVi: "Những thực hành thiết yếu để mã nguồn dễ đọc, dễ hiểu và dễ bảo trì theo thời gian.",
  content: `# Clean Code Practices

Clean code is not just about aesthetics. It is about maintainability...`,
  contentVi: `# Thực hành Clean Code

Clean Code không chỉ liên quan đến hình thức. Mục tiêu quan trọng nhất là giảm chi phí đọc hiểu và thay đổi phần mềm.

## Tên gọi thể hiện ý định

Tên biến, hàm và module nên giúp người đọc hiểu mục đích mà không cần suy đoán.

## Hàm nhỏ, trách nhiệm rõ

Một hàm tốt thường thực hiện một công việc ở cùng một mức trừu tượng và có đầu vào, đầu ra dễ dự đoán.`,
  category: "practices",
  tags: ["Clean Code", "Refactoring", "Best Practices"],
  date: "2024-01-03",
  readTime: "10 min",
  readTimeVi: "10 phút",
};
