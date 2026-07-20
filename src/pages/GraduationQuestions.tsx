import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, Clock3, MessageSquareQuote, RefreshCw, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { getGraduationQuestions, hasGraduationQaApi, type GraduationQuestion } from "@/lib/graduation-qa";
import "@/styles/graduation.css";
import "@/styles/graduation-qa.css";
import "@/styles/graduation-qa-compact.css";

type LoadState = "loading" | "ready" | "error" | "unconfigured";
const QUESTIONS_PER_PAGE = 10;

const formatSubmittedAt = (value: string) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
};

export default function GraduationQuestions() {
  const [questions, setQuestions] = useState<GraduationQuestion[]>([]);
  const [state, setState] = useState<LoadState>(hasGraduationQaApi() ? "loading" : "unconfigured");
  const [reloadKey, setReloadKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const reload = useCallback(() => {
    setState("loading");
    setReloadKey((value) => value + 1);
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Hải trả lời · Graduation Q&A";
    document.body.classList.add("graduation-active");
    return () => {
      document.title = previousTitle;
      document.body.classList.remove("graduation-active");
    };
  }, []);

  useEffect(() => {
    if (!hasGraduationQaApi()) {
      setState("unconfigured");
      return;
    }
    const controller = new AbortController();
    getGraduationQuestions(controller.signal)
      .then((items) => {
        setQuestions(items);
        setState("ready");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setState("error");
      });
    return () => controller.abort();
  }, [reloadKey]);

  const answered = questions.filter((item) => item.answer).length;
  const filteredQuestions = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase("vi");
    if (!query) return questions;
    return questions.filter((item) =>
      item.question.toLocaleLowerCase("vi").includes(query) ||
      item.name.toLocaleLowerCase("vi").includes(query)
    );
  }, [questions, searchQuery]);
  const pageCount = Math.max(1, Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE));
  const paginatedQuestions = filteredQuestions.slice((currentPage - 1) * QUESTIONS_PER_PAGE, currentPage * QUESTIONS_PER_PAGE);
  const showDiscoveryTools = questions.length > QUESTIONS_PER_PAGE;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    if (currentPage > pageCount) setCurrentPage(pageCount);
  }, [currentPage, pageCount]);

  const changePage = (page: number) => {
    setCurrentPage(page);
    window.requestAnimationFrame(() => document.querySelector(".grad-qa-discovery")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <div className="graduation-page grad-qa-page">
      <header className="grad-qa-masthead">
        <Link to="/graduation"><ArrowLeft aria-hidden="true" /> Trở lại thiệp tốt nghiệp</Link>
        <span>HAIIT / QUESTIONS & ANSWERS</span>
      </header>
      <main className="grad-qa-shell">
        <section className="grad-qa-hero">
          <div>
            <p>OPEN CONVERSATION · MMXXVI</p>
            <h1>Hải trả lời nèe !!!</h1>
            <p className="grad-qa-lead">Những điều mọi người muốn biết, và những chia sẻ chân thành từ Hải.</p>
            <div className="grad-qa-hero-meta" aria-label="Thông tin chuyên mục">
              <span><i aria-hidden="true" />Không gian trò chuyện mở</span>
              <span>HỎI · ĐÁP · KẾT NỐI</span>
              <span>CẬP NHẬT TỪ GOOGLE FORM</span>
            </div>
          </div>
          <dl>
            <div><dt>CÂU HỎI</dt><dd>{String(questions.length).padStart(2, "0")}</dd></div>
            <div><dt>ĐÃ TRẢ LỜI</dt><dd>{String(answered).padStart(2, "0")}</dd></div>
          </dl>
        </section>

        {state === "loading" && <div className="grad-qa-list" aria-label="Đang tải câu hỏi">{Array.from({ length: 3 }, (_, index) => <div className="grad-qa-skeleton" key={index}><i /><i /><i /></div>)}</div>}

        {state === "unconfigured" && <section className="grad-qa-state"><MessageSquareQuote aria-hidden="true" /><h2>Không gian hỏi đáp đang được chuẩn bị.</h2><p>Các câu hỏi và câu trả lời sẽ xuất hiện tại đây khi kết nối hoàn tất.</p><Link to="/graduation">Trở lại trang graduation</Link></section>}

        {state === "error" && <section className="grad-qa-state"><RefreshCw aria-hidden="true" /><h2>Chưa thể tải cuộc trò chuyện.</h2><p>Bạn có thể thử lại sau một chút.</p><button type="button" onClick={reload}>Tải lại câu hỏi</button></section>}

        {state === "ready" && questions.length === 0 && <section className="grad-qa-state"><MessageSquareQuote aria-hidden="true" /><h2>Chưa có câu hỏi nào ở đây.</h2><p>Không gian này đang chờ câu hỏi đầu tiên.</p><Link to="/graduation#08">Gửi điều bạn muốn hỏi Hải</Link></section>}

        {state === "ready" && showDiscoveryTools && <section className="grad-qa-discovery" aria-label="Tìm kiếm câu hỏi">
          <div className="grad-qa-search">
            <Search aria-hidden="true" />
            <label htmlFor="graduation-question-search">TÌM TRONG CUỘC TRÒ CHUYỆN</label>
            <input id="graduation-question-search" type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Nhập tên của bạn hoặc nội dung câu hỏi" autoComplete="off" />
            {searchQuery && <button type="button" onClick={() => setSearchQuery("")} aria-label="Xóa nội dung tìm kiếm"><X aria-hidden="true" /></button>}
          </div>
          <p><strong>{filteredQuestions.length}</strong> câu hỏi được tìm thấy</p>
        </section>}

        {state === "ready" && questions.length > 0 && filteredQuestions.length === 0 && <section className="grad-qa-no-results"><Search aria-hidden="true" /><h2>Chưa tìm thấy câu hỏi phù hợp.</h2><p>Hãy thử lại với tên, biệt danh hoặc một phần nội dung câu hỏi.</p><button type="button" onClick={() => setSearchQuery("")}>Xóa tìm kiếm</button></section>}

        {state === "ready" && paginatedQuestions.length > 0 && <section className="grad-qa-list" aria-label="Câu hỏi dành cho Hải">{paginatedQuestions.map((item, index) => {
          const dateLabel = formatSubmittedAt(item.submittedAt);
          const itemNumber = (currentPage - 1) * QUESTIONS_PER_PAGE + index + 1;
          return <article className={`grad-qa-card ${item.answer ? "is-answered" : "is-pending"}`} key={item.id}>
            <div className="grad-qa-card-index"><span>{String(itemNumber).padStart(2, "0")}</span><i /></div>
            <div className="grad-qa-card-body">
              <header><span>{item.name || "Một người bạn"}</span>{dateLabel && <time dateTime={item.submittedAt}>{dateLabel}</time>}</header>
              <blockquote>{item.question}</blockquote>
              {item.answer ? <div className="grad-qa-answer"><p><CheckCircle2 aria-hidden="true" /> HẢI TRẢ LỜI</p><div>{item.answer}</div></div> : <div className="grad-qa-pending"><Clock3 aria-hidden="true" /><span>Hải đã nhận được câu hỏi và sẽ chia sẻ câu trả lời sớm thôi.</span></div>}
            </div>
          </article>;
        })}</section>}

        {state === "ready" && showDiscoveryTools && filteredQuestions.length > QUESTIONS_PER_PAGE && <nav className="grad-qa-pagination" aria-label="Phân trang câu hỏi">
          <button type="button" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1} aria-label="Trang trước"><ChevronLeft aria-hidden="true" /></button>
          <span>TRANG</span>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => <button type="button" className={page === currentPage ? "is-active" : undefined} onClick={() => changePage(page)} aria-current={page === currentPage ? "page" : undefined} key={page}>{page}</button>)}
          <span>/ {pageCount}</span>
          <button type="button" onClick={() => changePage(currentPage + 1)} disabled={currentPage === pageCount} aria-label="Trang sau"><ChevronRight aria-hidden="true" /></button>
        </nav>}
      </main>
      <footer className="grad-qa-footer"><span>QUESTIONS / ANSWERS / CONNECTION</span><span>CLASS OF 2026</span></footer>
    </div>
  );
}
