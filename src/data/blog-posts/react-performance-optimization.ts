import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "react-performance-optimization",
  title: "Advanced React Performance Optimization Techniques",
  titleVi: "Kỹ thuật tối ưu hiệu năng React nâng cao",
  excerpt: "Learn how to identify and fix performance bottlenecks in React applications using profiling tools and optimization patterns.",
  excerptVi: "Cách xác định và xử lý điểm nghẽn hiệu năng trong React bằng profiler và các mẫu tối ưu phù hợp.",
  content: `# React Performance Optimization

Performance is crucial for user experience. Let's explore advanced techniques...`,
  contentVi: `# Tối ưu hiệu năng React

Hiệu năng là một phần trực tiếp của trải nghiệm người dùng. Trước khi tối ưu, hãy đo lường bằng React Profiler và công cụ Performance của trình duyệt.

## Tối ưu đúng vị trí

React.memo, useMemo và useCallback chỉ hữu ích khi chi phí render hoặc tính toán thực sự đáng kể. Tối ưu quá sớm có thể làm mã khó đọc hơn mà không tạo khác biệt.

## Giảm công việc trên luồng chính

Chia nhỏ bundle, trì hoãn phần giao diện chưa cần thiết và dùng virtualization cho danh sách lớn thường mang lại hiệu quả rõ rệt hơn các tối ưu vi mô.`,
  category: "frameworks",
  tags: ["React", "Performance", "JavaScript", "Frontend"],
  date: "2024-01-10",
  readTime: "15 min",
  readTimeVi: "15 phút",
  featured: true,
};
