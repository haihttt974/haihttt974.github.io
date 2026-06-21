import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "microservices-architecture",
  title: "Building Scalable Microservices Architecture",
  titleVi: "Xây dựng kiến trúc Microservices có khả năng mở rộng",
  excerpt: "Design patterns, communication strategies, and deployment considerations for microservices systems.",
  excerptVi: "Các mẫu thiết kế, chiến lược giao tiếp và lưu ý triển khai cho hệ thống microservices.",
  content: `# Microservices Architecture

Modern applications require scalable, maintainable architectures...`,
  contentVi: `# Kiến trúc Microservices

Microservices chia hệ thống thành các dịch vụ nhỏ có quyền sở hữu dữ liệu và vòng đời triển khai riêng.

## Khi nào nên sử dụng?

Microservices phù hợp khi miền nghiệp vụ đủ lớn, đội ngũ cần triển khai độc lập và tổ chức có khả năng vận hành hệ thống phân tán. Với sản phẩm nhỏ, modular monolith thường là lựa chọn hiệu quả hơn.`,
  category: "architecture",
  tags: ["Microservices", "Docker", "Kubernetes", "System Design"],
  date: "2024-01-05",
  readTime: "20 min",
  readTimeVi: "20 phút",
  featured: true,
};
