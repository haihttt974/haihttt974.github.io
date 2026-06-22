import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "microservices-architecture",
  title: "Microservices Architecture Basics and Trade-offs",
  titleVi: "Nền tảng Microservices và các trade-off cần hiểu",
  excerpt: "A practical overview of when microservices help, what they cost, and which design concerns appear early.",
  excerptVi: "Tổng quan thực tế về khi nào microservices hữu ích, chi phí đi kèm và các vấn đề thiết kế cần biết sớm.",
  content: `# Microservices Architecture

Modern applications require scalable, maintainable architectures...`,
  contentVi: `# Kiến trúc Microservices

Microservices chia hệ thống thành các dịch vụ nhỏ có quyền sở hữu dữ liệu và vòng đời triển khai riêng.

## Khi nào nên sử dụng?

Microservices phù hợp khi miền nghiệp vụ đủ lớn, đội ngũ cần triển khai độc lập và tổ chức có khả năng vận hành hệ thống phân tán. Với sản phẩm nhỏ, modular monolith thường là lựa chọn hiệu quả hơn.`,
  category: "architecture",
  tags: ["Microservices", "Docker", "Kubernetes", "System Design"],
  date: "2026-05-26",
  readTime: "2 min",
  readTimeVi: "2 phút",
  featured: true,
};
