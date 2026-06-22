import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "understanding-solid-principles",
  title: "Understanding SOLID Principles in Modern Software Development",
  titleVi: "Hiểu đúng SOLID trong phát triển phần mềm hiện đại",
  excerpt: "A practical introduction to SOLID principles with TypeScript-oriented examples and guidance on when to apply them.",
  excerptVi: "Hướng dẫn tổng quan về SOLID cùng ví dụ thực tế và cách áp dụng có chọn lọc trong dự án.",
  content: `# Understanding SOLID Principles

SOLID is an acronym for five design principles intended to make object-oriented designs more understandable, flexible, and maintainable...

## Single Responsibility Principle (SRP)
A class should have only one reason to change...

## Open/Closed Principle (OCP)
Software entities should be open for extension but closed for modification...`,
  contentVi: `# Hiểu đúng SOLID

SOLID là năm nguyên tắc thiết kế giúp phần mềm hướng đối tượng dễ hiểu, linh hoạt và dễ bảo trì hơn.

## Trách nhiệm duy nhất

Một lớp chỉ nên có một lý do để thay đổi. Khi một lớp vừa xử lý nghiệp vụ, vừa lưu dữ liệu, vừa gửi thông báo, mỗi thay đổi nhỏ đều có thể gây ảnh hưởng ngoài dự kiến.

## Mở để mở rộng, đóng để sửa đổi

Thay vì liên tục sửa logic cũ, hãy thiết kế điểm mở rộng thông qua interface và composition. SOLID nên được dùng để giảm chi phí thay đổi, không phải để tạo thêm abstraction không cần thiết.`,
  category: "patterns",
  tags: ["SOLID", "OOP", "TypeScript", "Clean Code"],
  date: "2026-05-31",
  readTime: "4 min",
  readTimeVi: "4 phút",
  featured: true,
};
