import { useLanguage } from "@/contexts/LanguageContext";

const copy = {
  initializing: { vi: "Đang kiến tạo không gian", en: "Shaping the experience" },
  waiting: { vi: "Đang chuẩn bị trải nghiệm", en: "Preparing the portfolio" },
  opening: { vi: "Đang mở không gian của Hải", en: "Opening Hải's space" },
  page: { vi: "Đang mở trang", en: "Opening page" },
  content: { vi: "Đang chuẩn bị nội dung", en: "Preparing content" },
  error: { vi: "Không thể mở nội dung", en: "Unable to open content" },
  retry: { vi: "Thử lại", en: "Try again" },
} as const;

export const useLoadingText = () => {
  const { language } = useLanguage();
  return {
    initializing: copy.initializing[language],
    waiting: copy.waiting[language],
    opening: copy.opening[language],
    page: copy.page[language],
    content: copy.content[language],
    error: copy.error[language],
    retry: copy.retry[language],
  };
};
