export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleVi?: string;
  excerpt: string;
  excerptVi?: string;
  content: string;
  contentVi?: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  readTimeVi?: string;
  featured?: boolean;
}

const vietnamesePostFallbacks: Record<string, Pick<BlogPost, "title" | "excerpt" | "content" | "readTime">> = {
  "understanding-solid-principles": {
    title: "Hiểu đúng SOLID trong phát triển phần mềm hiện đại",
    excerpt: "Hướng dẫn tổng quan về SOLID cùng ví dụ thực tế và cách áp dụng có chọn lọc trong dự án.",
    content: `# Hiểu đúng SOLID

SOLID là năm nguyên tắc thiết kế giúp phần mềm hướng đối tượng dễ hiểu, linh hoạt và dễ bảo trì hơn.

## Trách nhiệm duy nhất

Một lớp chỉ nên có một lý do để thay đổi. Khi một lớp vừa xử lý nghiệp vụ, vừa lưu dữ liệu, vừa gửi thông báo, mỗi thay đổi nhỏ đều có thể gây ảnh hưởng ngoài dự kiến.

## Mở để mở rộng, đóng để sửa đổi

Thay vì liên tục sửa logic cũ, hãy thiết kế điểm mở rộng thông qua interface và composition. SOLID nên được dùng để giảm chi phí thay đổi, không phải để tạo thêm abstraction không cần thiết.`,
    readTime: "12 phút",
  },
  "react-performance-optimization": {
    title: "Kỹ thuật tối ưu hiệu năng React nâng cao",
    excerpt: "Cách xác định và xử lý điểm nghẽn hiệu năng trong React bằng profiler và các mẫu tối ưu phù hợp.",
    content: `# Tối ưu hiệu năng React

Hiệu năng là một phần trực tiếp của trải nghiệm người dùng. Trước khi tối ưu, hãy đo lường bằng React Profiler và công cụ Performance của trình duyệt.

## Tối ưu đúng vị trí

React.memo, useMemo và useCallback chỉ hữu ích khi chi phí render hoặc tính toán thực sự đáng kể. Tối ưu quá sớm có thể làm mã khó đọc hơn mà không tạo khác biệt.

## Giảm công việc trên luồng chính

Chia nhỏ bundle, trì hoãn phần giao diện chưa cần thiết và dùng virtualization cho danh sách lớn thường mang lại hiệu quả rõ rệt hơn các tối ưu vi mô.`,
    readTime: "15 phút",
  },
  "typescript-advanced-types": {
    title: "Làm chủ hệ thống kiểu nâng cao của TypeScript",
    excerpt: "Tìm hiểu conditional type, mapped type, template literal type và cơ chế suy luận kiểu trong TypeScript.",
    content: `# Kiểu nâng cao trong TypeScript

Hệ thống kiểu của TypeScript có thể mô tả nhiều quy tắc nghiệp vụ ngay tại thời điểm biên dịch.

## Conditional type

Conditional type cho phép lựa chọn kiểu kết quả dựa trên quan hệ giữa các kiểu đầu vào.

## Mapped type

Mapped type giúp tạo kiểu mới bằng cách duyệt qua các thuộc tính của kiểu hiện có, rất hữu ích khi xây dựng utility type dùng chung.`,
    readTime: "18 phút",
  },
  "microservices-architecture": {
    title: "Xây dựng kiến trúc Microservices có khả năng mở rộng",
    excerpt: "Các mẫu thiết kế, chiến lược giao tiếp và lưu ý triển khai cho hệ thống microservices.",
    content: `# Kiến trúc Microservices

Microservices chia hệ thống thành các dịch vụ nhỏ có quyền sở hữu dữ liệu và vòng đời triển khai riêng.

## Khi nào nên sử dụng?

Microservices phù hợp khi miền nghiệp vụ đủ lớn, đội ngũ cần triển khai độc lập và tổ chức có khả năng vận hành hệ thống phân tán. Với sản phẩm nhỏ, modular monolith thường là lựa chọn hiệu quả hơn.`,
    readTime: "20 phút",
  },
  "clean-code-practices": {
    title: "Viết mã sạch và dễ bảo trì",
    excerpt: "Những thực hành thiết yếu để mã nguồn dễ đọc, dễ hiểu và dễ bảo trì theo thời gian.",
    content: `# Thực hành Clean Code

Clean Code không chỉ liên quan đến hình thức. Mục tiêu quan trọng nhất là giảm chi phí đọc hiểu và thay đổi phần mềm.

## Tên gọi thể hiện ý định

Tên biến, hàm và module nên giúp người đọc hiểu mục đích mà không cần suy đoán.

## Hàm nhỏ, trách nhiệm rõ

Một hàm tốt thường thực hiện một công việc ở cùng một mức trừu tượng và có đầu vào, đầu ra dễ dự đoán.`,
    readTime: "10 phút",
  },
  "frontend-developer-roadmap-2024": {
    title: "Lộ trình trở thành Frontend Developer",
    excerpt: "Lộ trình học tập có hệ thống để trở thành một frontend developer vững nền tảng.",
    content: `# Lộ trình Frontend Developer

Một frontend developer vững vàng cần hiểu nền tảng web trước khi phụ thuộc vào framework.

## Giai đoạn 1: Nền tảng

Học semantic HTML, CSS layout, responsive design, JavaScript và cách trình duyệt tải, phân tích, hiển thị trang.

## Giai đoạn 2: Xây sản phẩm

Chọn một framework, học quản lý trạng thái, routing, gọi API, kiểm thử và triển khai. Mỗi giai đoạn nên kết thúc bằng một sản phẩm có thể sử dụng.`,
    readTime: "25 phút",
  },
};

export const localizeBlogPost = (post: BlogPost, language: "vi" | "en") => {
  const fallback = vietnamesePostFallbacks[post.id];
  return {
    ...post,
    title: language === "vi" ? post.titleVi ?? fallback?.title ?? post.title : post.title,
    excerpt: language === "vi" ? post.excerptVi ?? fallback?.excerpt ?? post.excerpt : post.excerpt,
    content: language === "vi" ? post.contentVi ?? fallback?.content ?? post.content : post.content,
    readTime: language === "vi" ? post.readTimeVi ?? fallback?.readTime ?? post.readTime : post.readTime,
  };
};

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const categories: Category[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Deep dives into various programming languages, syntax, paradigms, and best use cases",
    icon: "Code2",
    color: "category-languages",
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    description: "Comprehensive guides on modern frameworks and libraries for web, mobile, and backend development",
    icon: "Layers",
    color: "category-frameworks",
  },
  {
    id: "architecture",
    name: "Software Architecture",
    description: "System design principles, architectural patterns, and scalability strategies",
    icon: "Building2",
    color: "category-architecture",
  },
  {
    id: "patterns",
    name: "Design Patterns",
    description: "Classic and modern design patterns with practical implementations",
    icon: "Shapes",
    color: "category-patterns",
  },
  {
    id: "practices",
    name: "Best Practices",
    description: "Coding standards, clean code principles, and industry best practices",
    icon: "CheckCircle",
    color: "category-practices",
  },
  {
    id: "roadmap",
    name: "Learning Roadmaps",
    description: "Structured learning paths for different programming domains and skill levels",
    icon: "Map",
    color: "category-roadmap",
  },
];

export { blogPosts } from "./blog-posts";

export const projects: Project[] = [
  {
    id: "capital-weather-tracker",
    title: "Capital Weather Tracker",
    description: "Hệ thống xử lý dữ liệu thời tiết thời gian thực cho các thủ đô trên thế giới.",
    longDescription: "Ứng dụng thu thập và hiển thị dữ liệu thời tiết real-time từ OpenWeatherMap API, xử lý và visualize dữ liệu cho tất cả các thủ đô trên thế giới với cập nhật liên tục.",
    technologies: ["Python", "OpenWeatherMap API", "Data Processing"],
    github: "https://github.com/haihttt974/capital-weather-tracker",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "sorting-visualizer",
    title: "Sorting Visualizer",
    description: "Ứng dụng trực quan hóa các thuật toán sắp xếp với animation mượt mà.",
    longDescription: "Công cụ giáo dục giúp hiểu rõ cách hoạt động của các thuật toán sắp xếp như Bubble Sort, Quick Sort, Merge Sort thông qua visualization trực quan.",
    technologies: ["TypeScript", "Algorithms", "Visualization"],
    github: "https://github.com/haihttt974/sorting-visualizer",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "bookstore-aspnet",
    title: "BookStore ASP.NET",
    description: "Website quản lý hiệu sách hoàn chỉnh với ASP.NET Core.",
    longDescription: "Hệ thống quản lý hiệu sách full-stack với chức năng CRUD, quản lý kho, đơn hàng và báo cáo doanh thu. Xây dựng trên ASP.NET Core và SQL Server.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework"],
    github: "https://github.com/haihttt974/thltweb-BookStore-asp.net",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "gplx-mobile-app",
    title: "Ôn thi GPLX Mobile",
    description: "Ứng dụng di động ôn thi giấy phép lái xe với Flutter.",
    longDescription: "Ứng dụng mobile cross-platform giúp người dùng ôn luyện lý thuyết thi bằng lái xe với bộ câu hỏi đầy đủ, thi thử và theo dõi tiến độ học tập.",
    technologies: ["Dart", "Flutter", "Mobile Development"],
    github: "https://github.com/haihttt974/ltmobile_gplx",
    image: "/placeholder.svg",
  },
  {
    id: "temperature-influxdb",
    title: "Temperature VN InfluxDB",
    description: "Hệ thống thu thập và lưu trữ dữ liệu nhiệt độ vào InfluxDB.",
    longDescription: "Pipeline dữ liệu IoT thu thập nhiệt độ từ các nguồn khác nhau tại Việt Nam, lưu trữ vào InfluxDB cho phân tích time-series và visualization.",
    technologies: ["Python", "InfluxDB", "IoT", "Time Series"],
    github: "https://github.com/haihttt974/send-temperature-vn-influxdb",
    image: "/placeholder.svg",
  },
  {
    id: "christmas-tree",
    title: "Christmas Tree Effect",
    description: "Hiệu ứng cây thông Noel tương tác với HTML/CSS/JS.",
    longDescription: "Trang web hiệu ứng Giáng Sinh với cây thông 3D tương tác, tuyết rơi và ánh sáng lung linh. Hoàn toàn viết bằng vanilla HTML, CSS và JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animation"],
    github: "https://github.com/haihttt974/christmas_tree.github.io",
    demo: "https://haihttt974.github.io/christmas_tree.github.io/",
    image: "/placeholder.svg",
  },
  {
    id: "countdown-newyear",
    title: "Countdown New Year",
    description: "Đồng hồ đếm ngược năm mới với hiệu ứng đẹp mắt.",
    longDescription: "Trang countdown đón năm mới với thiết kế hiện đại, hiệu ứng confetti và animation mượt mà khi đồng hồ điểm 0.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/haihttt974/CountdownNewYear.github.io",
    demo: "https://haihttt974.github.io/CountdownNewYear.github.io/",
    image: "/placeholder.svg",
  },
  {
    id: "firework-effect",
    title: "Firework Effect",
    description: "Hiệu ứng pháo hoa sống động cho các dịp lễ hội.",
    longDescription: "Mô phỏng pháo hoa với hiệu ứng particle system, màu sắc rực rỡ và âm thanh. Phù hợp cho các trang countdown và lễ hội.",
    technologies: ["HTML5", "Canvas", "JavaScript", "Animation"],
    github: "https://github.com/haihttt974/Hfirework.github.io",
    demo: "https://haihttt974.github.io/Hfirework.github.io/",
    image: "/placeholder.svg",
  },
];

// Thông tin cá nhân từ GitHub của Lê Duy Hải (haihttt974)
export const aboutData = {
  name: "Lê Duy Hải",
  nickname: "Hai IT",
  username: "haihttt974",
  title: "Information Systems Developer",
  subtitle: "Database • Server-side • DevOps",
  avatar: "https://avatars.githubusercontent.com/u/202379592?v=4",
  address: "Đông Hưng Thuận, Ho Chi Minh City",
  bio: `Tôi là một chuyên gia về Hệ thống thông tin (Information Systems), tập trung vào việc xây dựng các giải pháp có khả năng mở rộng (Scalable) và tin cậy (Reliable).

Chuyên môn của tôi bao gồm: Cơ sở dữ liệu, Server-side Development và DevOps. Tôi đam mê việc tối ưu hóa hiệu suất hệ thống và xây dựng các kiến trúc phần mềm bền vững.

Ngoài lập trình, tôi còn là gia sư Toán, chia sẻ kiến thức và giúp đỡ học sinh phát triển tư duy logic.`,
  
  skills: [
    {
      category: "Ngôn ngữ lập trình",
      items: ["C", "C++", "C#", "Java", "PHP", "Python", "JavaScript", "TypeScript", "Dart"],
    },
    {
      category: "Backend & Database",
      items: [".NET Core", "ASP.NET", "MySQL", "SQL Server", "MariaDB", "InfluxDB"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "GitHub", "GitLab", "Google Cloud", "Fly.io", "Postman", "Swagger"],
    },
    {
      category: "Frontend & Design",
      items: ["HTML5", "CSS3", "Bootstrap", "jQuery", "Figma", "Canva"],
    },
    {
      category: "Data Science / AI",
      items: ["TensorFlow", "Keras", "NumPy", "Pandas", "scikit-learn", "SciPy"],
    },
  ],

  social: {
    github: "https://github.com/haihttt974",
    linkedin: "https://www.linkedin.com/in/haild/",
    facebook: "https://facebook.com/haiit.974",
    instagram: "https://instagram.com/haiit.974",
    tiktok: "https://tiktok.com/@haiit.974",
    twitter: "https://x.com/haiit974",
    email: "ld.hai.insys@gmail.com",
    secondaryEmail: "leduyhai090704@gmail.com",
  },

  socialLinks: [
    { name: "GitHub", url: "https://github.com/haihttt974", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/haild/", icon: "Linkedin" },
    { name: "Facebook", url: "https://facebook.com/haiit.974", icon: "Facebook" },
    { name: "Instagram", url: "https://instagram.com/haiit.974", icon: "Instagram" },
    { name: "TikTok", url: "https://tiktok.com/@haiit.974", icon: "Music2" },
    { name: "X (Twitter)", url: "https://x.com/haiit974", icon: "Twitter" },
    { name: "Primary Email", url: "mailto:ld.hai.insys@gmail.com", icon: "Mail" },
    { name: "Secondary Email", url: "mailto:leduyhai090704@gmail.com", icon: "Mail" },
  ],

  experience: [
    {
      title: "Information Systems Developer",
      company: "Freelance & Personal Projects",
      period: "2023 - Hiện tại",
      description: "Phát triển các ứng dụng web, mobile và hệ thống xử lý dữ liệu. Chuyên sâu về Database, Server-side và DevOps.",
    },
    {
      title: "Math Tutor",
      company: "Private Tutoring",
      period: "2022 - Hiện tại",
      description: "Gia sư Toán học, giúp học sinh phát triển tư duy logic và giải quyết vấn đề.",
    },
  ],
};
