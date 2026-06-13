import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Language = "vi" | "en";
type Dictionary = Record<string, { vi: string; en: string }>;

const dictionary: Dictionary = {
  "nav.home": { vi: "Trang chủ", en: "Index" },
  "nav.projects": { vi: "Dự án", en: "Work" },
  "nav.blog": { vi: "Bài viết", en: "Notes" },
  "nav.about": { vi: "Hồ sơ", en: "Profile" },
  "nav.connect": { vi: "Sẵn sàng kết nối", en: "Available to connect" },
  "nav.theme": { vi: "Giao diện", en: "Theme" },
  "nav.language": { vi: "Ngôn ngữ", en: "Language" },
  "hero.log": { vi: "Portfolio / Nhật ký học tập", en: "Portfolio / Learning log" },
  "hero.open": { vi: "Sẵn sàng cho cơ hội phù hợp", en: "Open to meaningful work" },
  "hero.hello": { vi: "Xin chào, tôi là", en: "Hello, I am" },
  "hero.line1": { vi: "Chế tác mã nguồn", en: "Crafting code" },
  "hero.line2": { vi: "& đúc kết những", en: "& distilling field" },
  "hero.line3": { vi: "trải nghiệm thực tế.", en: "experiences." },
  "hero.bio": { vi: "một Information Systems Developer tập trung vào backend, database và những sản phẩm có giá trị sử dụng thực tế.", en: "an Information Systems Developer focused on backend, databases, and products with practical value." },
  "hero.work": { vi: "Khám phá dự án", en: "Explore selected work" },
  "hero.notes": { vi: "Đọc bài viết", en: "Read my notes" },
  "hero.repositories": { vi: "kho mã nguồn", en: "repositories" },
  "hero.languages": { vi: "ngôn ngữ", en: "languages" },
  "hero.journal": { vi: "nhật ký công khai", en: "public journal" },
  "hero.portrait": { vi: "Chân dung", en: "Portrait" },
  "home.work.eyebrow": { vi: "01 / Dự án chọn lọc", en: "01 / Selected work" },
  "home.work.title1": { vi: "Dự án có lý do", en: "Projects with a reason" },
  "home.work.title2": { vi: "để tồn tại.", en: "to exist." },
  "home.work.desc": { vi: "Mỗi dự án là một bài thực hành có chủ đích: dữ liệu, thuật toán, kiến trúc hoặc trải nghiệm người dùng.", en: "Each project is a deliberate exercise in data, algorithms, architecture, or user experience." },
  "home.work.archive": { vi: "Xem kho dự án", en: "View project archive" },
  "home.work.case": { vi: "Nghiên cứu", en: "Case study" },
  "home.work.tools": { vi: "Công cụ & bối cảnh", en: "Tools & context" },
  "home.notes.eyebrow": { vi: "02 / Ghi chép thực tế", en: "02 / Field notes" },
  "home.notes.title1": { vi: "Học tập công khai.", en: "Learn in public." },
  "home.notes.title2": { vi: "Giữ lại điều hữu ích.", en: "Keep the useful parts." },
  "home.notes.all": { vi: "Mở tất cả bài viết", en: "Open all notes" },
  "home.notes.read": { vi: "Đọc bài", en: "Read note" },
  "home.map.eyebrow": { vi: "03 / Bản đồ kiến thức", en: "03 / Knowledge map" },
  "home.map.title1": { vi: "Những điều tôi đang", en: "What I am" },
  "home.map.title2": { vi: "khám phá.", en: "mapping out." },
  "home.map.desc": { vi: "Không chỉ là danh mục. Đây là bản đồ những vùng kiến thức tôi đang học, thử nghiệm và kết nối lại với nhau.", en: "More than categories: a map of the knowledge areas I am learning, testing, and connecting." },
  "home.principle": { vi: "Nguyên tắc cá nhân", en: "Personal principle" },
  "home.quote": { vi: "“Tôi không cố tỏ ra biết mọi thứ. Tôi xây, ghi chép và biến những điều đã hiểu thành thứ hữu ích cho người tiếp theo.”", en: "“I do not pretend to know everything. I build, document, and turn what I understand into something useful for the next person.”" },
  "footer.eyebrow": { vi: "Cuối trang / đầu cuộc trò chuyện", en: "End of page / start of conversation" },
  "footer.title": { vi: "Tôi xây sản phẩm để hiểu hệ thống, rồi viết lại để hiểu sâu hơn.", en: "I build products to understand systems, then write to understand them deeper." },
  "footer.navigate": { vi: "Điều hướng", en: "Navigate" },
  "footer.connect": { vi: "Kết nối", en: "Connect" },
  "footer.work": { vi: "Dự án chọn lọc", en: "Selected work" },
  "footer.notes": { vi: "Ghi chép học tập", en: "Learning notes" },
  "footer.profile": { vi: "Hồ sơ & CV", en: "Profile & CV" },
  "footer.designed": { vi: "Được thiết kế như một nhật ký hệ thống sống", en: "Designed as a living systems journal" },
  "blog.title": { vi: "Bài viết", en: "Blog" },
  "blog.desc": { vi: "Kiến thức lập trình, kinh nghiệm thực tế và những bài học từ hành trình phát triển phần mềm.", en: "Programming knowledge, practical experience, and lessons from my software development journey." },
  "blog.search": { vi: "Tìm kiếm bài viết...", en: "Search articles..." },
  "blog.all": { vi: "Tất cả", en: "All" },
  "blog.readMore": { vi: "Đọc thêm →", en: "Read more →" },
  "blog.empty": { vi: "Không tìm thấy bài viết", en: "No articles found" },
  "blog.emptyDesc": { vi: "Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.", en: "Try changing the filter or search keyword." },
  "project.title": { vi: "Dự án", en: "Projects" },
  "project.desc": { vi: "Các dự án cá nhân từ GitHub của tôi, từ ý tưởng đến sản phẩm hoàn chỉnh.", en: "My personal GitHub projects, from early ideas to finished products." },
  "project.github": { vi: "Xem thêm trên GitHub", en: "View more on GitHub" },
  "project.featured": { vi: "Dự án nổi bật", en: "Featured projects" },
  "project.all": { vi: "Tất cả dự án", en: "All projects" },
  "project.source": { vi: "Mã nguồn", en: "Source code" },
  "project.demo": { vi: "Bản chạy thử", en: "Live demo" },
  "post.back": { vi: "Quay lại Blog", en: "Back to Blog" },
  "post.notFound": { vi: "Bài viết không tồn tại", en: "Article not found" },
  "post.notFoundDesc": { vi: "Bài viết bạn đang tìm không tồn tại hoặc đã bị xóa.", en: "The article you are looking for does not exist or has been removed." },
  "post.views": { vi: "lượt xem", en: "views" },
  "post.tags": { vi: "Thẻ", en: "Tags" },
  "post.share": { vi: "Chia sẻ", en: "Share" },
  "post.copy": { vi: "Sao chép liên kết", en: "Copy link" },
  "category.languages": { vi: "Ngôn ngữ lập trình", en: "Programming Languages" },
  "category.frameworks": { vi: "Framework & thư viện", en: "Frameworks & Libraries" },
  "category.architecture": { vi: "Kiến trúc phần mềm", en: "Software Architecture" },
  "category.patterns": { vi: "Mẫu thiết kế", en: "Design Patterns" },
  "category.practices": { vi: "Thực hành tốt", en: "Best Practices" },
  "category.roadmap": { vi: "Lộ trình học tập", en: "Learning Roadmaps" },
  "about.cv": { vi: "Xem CV của tôi", en: "View my CV" },
  "about.me": { vi: "Về tôi", en: "About me" },
  "about.experience": { vi: "Kinh nghiệm", en: "Experience" },
  "about.contact": { vi: "Liên hệ", en: "Contact" },
  "about.collab": { vi: "Muốn hợp tác?", en: "Interested in collaborating?" },
  "about.collabDesc": { vi: "Tôi luôn sẵn sàng thảo luận về các dự án thú vị.", en: "I am always open to discussing interesting projects." },
  "about.contactNow": { vi: "Liên hệ ngay", en: "Get in touch" },
  "about.download": { vi: "Tải PDF", en: "Download PDF" },
  "about.skills": { vi: "Kỹ năng kỹ thuật", en: "Technical skills" },
  "about.featured": { vi: "Dự án tiêu biểu (từ GitHub)", en: "Featured projects (from GitHub)" },
  "about.other": { vi: "Hoạt động khác", en: "Other activities" },
  "effect.title": { vi: "Hiệu ứng nền", en: "Background effects" },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  locale: string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("haiit-language");
    if (saved === "vi" || saved === "en") return saved;
    return navigator.language.toLowerCase().startsWith("vi") ? "vi" : "en";
  });

  useEffect(() => {
    localStorage.setItem("haiit-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => dictionary[key]?.[language] ?? key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage: () => setLanguage(language === "vi" ? "en" : "vi"), t, locale: language === "vi" ? "vi-VN" : "en-US" }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
