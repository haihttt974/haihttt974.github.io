import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "react-performance-optimization",
  title: "React Performance Optimization: Measure Before You Optimize",
  titleVi: "Tối ưu hiệu năng React: Đo lường trước khi tối ưu",
  excerpt: "A practical note on finding React performance bottlenecks with profiling tools before applying optimization patterns.",
  excerptVi: "Ghi chú thực tế về cách tìm điểm nghẽn hiệu năng React bằng profiler trước khi áp dụng các mẫu tối ưu.",
  content: `# React Performance Optimization

Performance affects user experience, but optimization should start with measurement rather than assumptions.`,
  contentVi: `# Tối ưu hiệu năng React

Hiệu năng là một phần trực tiếp của trải nghiệm người dùng. Trước khi tối ưu, hãy đo lường bằng React Profiler và công cụ Performance của trình duyệt.

## Tối ưu đúng vị trí

React.memo, useMemo và useCallback chỉ hữu ích khi chi phí render hoặc tính toán thực sự đáng kể. Tối ưu quá sớm có thể làm mã khó đọc hơn mà không tạo khác biệt.

## Giảm công việc trên luồng chính

Chia nhỏ bundle, trì hoãn phần giao diện chưa cần thiết và dùng virtualization cho danh sách lớn thường mang lại hiệu quả rõ rệt hơn các tối ưu vi mô.`,
  category: "frameworks",
  tags: ["React", "Performance", "JavaScript", "Frontend"],
  date: "2026-05-24",
  readTime: "3 min",
  readTimeVi: "3 phút",
  featured: true,
};
