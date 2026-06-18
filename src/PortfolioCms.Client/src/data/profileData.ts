export const cvProfiles = [
  {
    id: "fullstack",
    file: "/cvs/FullStack.pdf",
    title: { vi: "Fullstack Developer", en: "Fullstack Developer" },
    description: {
      vi: "Hồ sơ trọng tâm: kinh nghiệm thực tế với Angular, ASP.NET Core, SQL Server và hệ thống quản lý doanh nghiệp.",
      en: "Primary profile: hands-on experience with Angular, ASP.NET Core, SQL Server, and enterprise management systems.",
    },
    featured: true,
    stack: ["Angular", "ASP.NET Core", "SQL Server", "Docker"],
  },
  {
    id: "dotnet",
    file: "/cvs/.NET-EN.pdf",
    title: { vi: ".NET Developer", en: ".NET Developer" },
    description: {
      vi: "Hồ sơ tiếng Anh tập trung vào ASP.NET Core MVC, RESTful API, backend và SQL Server.",
      en: "English profile focused on ASP.NET Core MVC, RESTful APIs, backend development, and SQL Server.",
    },
    featured: false,
    stack: ["C#", "ASP.NET Core MVC", "RESTful API", "SQL Server"],
  },
  {
    id: "ba",
    file: "/cvs/BA-VI.pdf",
    title: { vi: "Business Analyst", en: "Business Analyst" },
    description: {
      vi: "Hồ sơ tiếng Việt về phân tích nghiệp vụ, User Story, Use Case, BPMN và tài liệu hóa hệ thống.",
      en: "Vietnamese profile covering business analysis, User Stories, Use Cases, BPMN, and system documentation.",
    },
    featured: false,
    stack: ["BPMN", "UML", "User Story", "Figma"],
  },
];

export const professionalExperience = [
  {
    period: "03/2026 - 06/2026",
    role: "Fullstack Developer",
    company: "Song Ân Software Solutions Co., Ltd.",
    summary: {
      vi: "Phát triển và bảo trì các module HIS, EMR và Admin Management System bằng Angular, ASP.NET Core và SQL Server.",
      en: "Developing and maintaining HIS, EMR, and Admin Management System modules with Angular, ASP.NET Core, and SQL Server.",
    },
    highlights: {
      vi: ["CRUD, bộ lọc tìm kiếm, phân trang và component tái sử dụng", "Kiểm tra dữ liệu, tối ưu truy vấn và xử lý sự cố SQL Server", "Điều tra lỗi, regression testing, merge branch và chuẩn bị triển khai"],
      en: ["CRUD, search filters, pagination, and reusable components", "Data verification, query optimization, and SQL Server troubleshooting", "Defect investigation, regression testing, branch merging, and deployment preparation"],
    },
  },
];

export const featuredProfileProjects = [
  {
    title: { vi: "Hệ thống Quản lý & Đào tạo Giấy phép Lái xe", en: "Driver License Training & Management System" },
    period: "09/2025 - 12/2025",
    description: {
      vi: "Hệ thống ASP.NET Core 9.0 MVC quản lý đào tạo, thi lý thuyết, mô phỏng giao thông, trung tâm lái xe và thanh toán trực tuyến.",
      en: "ASP.NET Core 9.0 MVC system for driver training, theory exams, traffic simulation, driving center operations, and online payments.",
    },
    stack: ["ASP.NET Core 9", "SignalR", "OpenAI SDK", "VNPAY", "MoMo", "PayPal"],
    github: "https://github.com/haihttt974/dacn-dtgplx",
  },
  {
    title: { vi: "Ứng dụng Web Quản lý Phòng Gym", en: "Gym Management Web Application" },
    period: "06/2025",
    description: {
      vi: "Quản lý hội viên, gói tập, phân quyền Admin/Staff/Trainer/Member, thanh toán và chatbot hỗ trợ.",
      en: "Membership, package, role-based access, online payment, notification, and AI chatbot management.",
    },
    stack: ["ASP.NET Core MVC", "RBAC", "PayPal", "VNPay", "AI Chatbot"],
    github: "https://github.com/haihttt974/courseproject-ltweb-gym",
  },
];

export const achievements = [
  { year: "2022 - 2025", vi: "Sinh viên tiêu biểu ba năm liên tiếp", en: "Outstanding student for three consecutive years" },
  { year: "2024", vi: "Giải Nhất Database Design Champion", en: "First Prize, Database Design Champion" },
  { year: "03/2024", vi: "Giải Ba Cuộc thi Lập trình Cá nhân", en: "Third Prize, Individual Programming Competition" },
  { year: "10/2024", vi: "Giải Nhất Cuộc thi Lập trình Cá nhân", en: "First Prize, Individual Programming Competition" },
];

export const certifications = [
  { year: "2025", vi: "Tiếng Anh trình độ B1", en: "English Proficiency, B1 Level" },
  { year: "2025", vi: "Kỹ năng Giao tiếp và Làm việc Nhóm", en: "Communication and Teamwork Skills" },
];

export const profileSkills = [
  { title: "Fullstack", items: ["Angular", "ASP.NET Core", "C#", "JavaScript", "HTML", "CSS", "RESTful API"] },
  { title: "Data & Backend", items: ["SQL Server", "Entity Framework Core", "Query Optimization", "Database Analysis"] },
  { title: "Business Analysis", items: ["User Story", "Use Case", "BPMN", "UML", "Draw.io", "Figma"] },
  { title: "Delivery & Quality", items: ["Git", "GitHub", "Docker", "Azure", "Postman", "Software Testing"] },
];
