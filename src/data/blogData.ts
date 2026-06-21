export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

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

export const projects: Project[] = [
  {
    id: "capital-weather-tracker",
    title: "Capital Weather Tracker",
    description: "Há»‡ thá»‘ng xá»­ lÃ½ dá»¯ liá»‡u thá»i tiáº¿t thá»i gian thá»±c cho cÃ¡c thá»§ Ä‘Ã´ trÃªn tháº¿ giá»›i.",
    longDescription: "á»¨ng dá»¥ng thu tháº­p vÃ  hiá»ƒn thá»‹ dá»¯ liá»‡u thá»i tiáº¿t real-time tá»« OpenWeatherMap API, xá»­ lÃ½ vÃ  visualize dá»¯ liá»‡u cho táº¥t cáº£ cÃ¡c thá»§ Ä‘Ã´ trÃªn tháº¿ giá»›i vá»›i cáº­p nháº­t liÃªn tá»¥c.",
    technologies: ["Python", "OpenWeatherMap API", "Data Processing"],
    github: "https://github.com/haihttt974/capital-weather-tracker",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "sorting-visualizer",
    title: "Sorting Visualizer",
    description: "á»¨ng dá»¥ng trá»±c quan hÃ³a cÃ¡c thuáº­t toÃ¡n sáº¯p xáº¿p vá»›i animation mÆ°á»£t mÃ .",
    longDescription: "CÃ´ng cá»¥ giÃ¡o dá»¥c giÃºp hiá»ƒu rÃµ cÃ¡ch hoáº¡t Ä‘á»™ng cá»§a cÃ¡c thuáº­t toÃ¡n sáº¯p xáº¿p nhÆ° Bubble Sort, Quick Sort, Merge Sort thÃ´ng qua visualization trá»±c quan.",
    technologies: ["TypeScript", "Algorithms", "Visualization"],
    github: "https://github.com/haihttt974/sorting-visualizer",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "bookstore-aspnet",
    title: "BookStore ASP.NET",
    description: "Website quáº£n lÃ½ hiá»‡u sÃ¡ch hoÃ n chá»‰nh vá»›i ASP.NET Core.",
    longDescription: "Há»‡ thá»‘ng quáº£n lÃ½ hiá»‡u sÃ¡ch full-stack vá»›i chá»©c nÄƒng CRUD, quáº£n lÃ½ kho, Ä‘Æ¡n hÃ ng vÃ  bÃ¡o cÃ¡o doanh thu. XÃ¢y dá»±ng trÃªn ASP.NET Core vÃ  SQL Server.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework"],
    github: "https://github.com/haihttt974/thltweb-BookStore-asp.net",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "gplx-mobile-app",
    title: "Ã”n thi GPLX Mobile",
    description: "á»¨ng dá»¥ng di Ä‘á»™ng Ã´n thi giáº¥y phÃ©p lÃ¡i xe vá»›i Flutter.",
    longDescription: "á»¨ng dá»¥ng mobile cross-platform giÃºp ngÆ°á»i dÃ¹ng Ã´n luyá»‡n lÃ½ thuyáº¿t thi báº±ng lÃ¡i xe vá»›i bá»™ cÃ¢u há»i Ä‘áº§y Ä‘á»§, thi thá»­ vÃ  theo dÃµi tiáº¿n Ä‘á»™ há»c táº­p.",
    technologies: ["Dart", "Flutter", "Mobile Development"],
    github: "https://github.com/haihttt974/ltmobile_gplx",
    image: "/placeholder.svg",
  },
  {
    id: "temperature-influxdb",
    title: "Temperature VN InfluxDB",
    description: "Há»‡ thá»‘ng thu tháº­p vÃ  lÆ°u trá»¯ dá»¯ liá»‡u nhiá»‡t Ä‘á»™ vÃ o InfluxDB.",
    longDescription: "Pipeline dá»¯ liá»‡u IoT thu tháº­p nhiá»‡t Ä‘á»™ tá»« cÃ¡c nguá»“n khÃ¡c nhau táº¡i Viá»‡t Nam, lÆ°u trá»¯ vÃ o InfluxDB cho phÃ¢n tÃ­ch time-series vÃ  visualization.",
    technologies: ["Python", "InfluxDB", "IoT", "Time Series"],
    github: "https://github.com/haihttt974/send-temperature-vn-influxdb",
    image: "/placeholder.svg",
  },
  {
    id: "christmas-tree",
    title: "Christmas Tree Effect",
    description: "Hiá»‡u á»©ng cÃ¢y thÃ´ng Noel tÆ°Æ¡ng tÃ¡c vá»›i HTML/CSS/JS.",
    longDescription: "Trang web hiá»‡u á»©ng GiÃ¡ng Sinh vá»›i cÃ¢y thÃ´ng 3D tÆ°Æ¡ng tÃ¡c, tuyáº¿t rÆ¡i vÃ  Ã¡nh sÃ¡ng lung linh. HoÃ n toÃ n viáº¿t báº±ng vanilla HTML, CSS vÃ  JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animation"],
    github: "https://github.com/haihttt974/christmas_tree.github.io",
    demo: "https://haihttt974.github.io/christmas_tree.github.io/",
    image: "/placeholder.svg",
  },
  {
    id: "countdown-newyear",
    title: "Countdown New Year",
    description: "Äá»“ng há»“ Ä‘áº¿m ngÆ°á»£c nÄƒm má»›i vá»›i hiá»‡u á»©ng Ä‘áº¹p máº¯t.",
    longDescription: "Trang countdown Ä‘Ã³n nÄƒm má»›i vá»›i thiáº¿t káº¿ hiá»‡n Ä‘áº¡i, hiá»‡u á»©ng confetti vÃ  animation mÆ°á»£t mÃ  khi Ä‘á»“ng há»“ Ä‘iá»ƒm 0.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/haihttt974/CountdownNewYear.github.io",
    demo: "https://haihttt974.github.io/CountdownNewYear.github.io/",
    image: "/placeholder.svg",
  },
  {
    id: "firework-effect",
    title: "Firework Effect",
    description: "Hiá»‡u á»©ng phÃ¡o hoa sá»‘ng Ä‘á»™ng cho cÃ¡c dá»‹p lá»… há»™i.",
    longDescription: "MÃ´ phá»ng phÃ¡o hoa vá»›i hiá»‡u á»©ng particle system, mÃ u sáº¯c rá»±c rá»¡ vÃ  Ã¢m thanh. PhÃ¹ há»£p cho cÃ¡c trang countdown vÃ  lá»… há»™i.",
    technologies: ["HTML5", "Canvas", "JavaScript", "Animation"],
    github: "https://github.com/haihttt974/Hfirework.github.io",
    demo: "https://haihttt974.github.io/Hfirework.github.io/",
    image: "/placeholder.svg",
  },
];

// ThÃ´ng tin cÃ¡ nhÃ¢n tá»« GitHub cá»§a LÃª Duy Háº£i (haihttt974)
export const aboutData = {
  name: "LÃª Duy Háº£i",
  nickname: "Hai IT",
  username: "haihttt974",
  title: "Information Systems Developer",
  subtitle: "Database â€¢ Server-side â€¢ DevOps",
  avatar: "https://avatars.githubusercontent.com/u/202379592?v=4",
  address: "ÄÃ´ng HÆ°ng Thuáº­n, Ho Chi Minh City",
  bio: `TÃ´i lÃ  má»™t chuyÃªn gia vá» Há»‡ thá»‘ng thÃ´ng tin (Information Systems), táº­p trung vÃ o viá»‡c xÃ¢y dá»±ng cÃ¡c giáº£i phÃ¡p cÃ³ kháº£ nÄƒng má»Ÿ rá»™ng (Scalable) vÃ  tin cáº­y (Reliable).

ChuyÃªn mÃ´n cá»§a tÃ´i bao gá»“m: CÆ¡ sá»Ÿ dá»¯ liá»‡u, Server-side Development vÃ  DevOps. TÃ´i Ä‘am mÃª viá»‡c tá»‘i Æ°u hÃ³a hiá»‡u suáº¥t há»‡ thá»‘ng vÃ  xÃ¢y dá»±ng cÃ¡c kiáº¿n trÃºc pháº§n má»m bá»n vá»¯ng.

NgoÃ i láº­p trÃ¬nh, tÃ´i cÃ²n lÃ  gia sÆ° ToÃ¡n, chia sáº» kiáº¿n thá»©c vÃ  giÃºp Ä‘á»¡ há»c sinh phÃ¡t triá»ƒn tÆ° duy logic.`,
  
  skills: [
    {
      category: "NgÃ´n ngá»¯ láº­p trÃ¬nh",
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
      period: "2023 - Hiá»‡n táº¡i",
      description: "PhÃ¡t triá»ƒn cÃ¡c á»©ng dá»¥ng web, mobile vÃ  há»‡ thá»‘ng xá»­ lÃ½ dá»¯ liá»‡u. ChuyÃªn sÃ¢u vá» Database, Server-side vÃ  DevOps.",
    },
    {
      title: "Math Tutor",
      company: "Private Tutoring",
      period: "2022 - Hiá»‡n táº¡i",
      description: "Gia sÆ° ToÃ¡n há»c, giÃºp há»c sinh phÃ¡t triá»ƒn tÆ° duy logic vÃ  giáº£i quyáº¿t váº¥n Ä‘á».",
    },
  ],
};

