import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, Clock3, MessageSquareQuote, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { getGraduationQuestions, hasGraduationQaApi, type GraduationQuestion } from "@/lib/graduation-qa";
import "@/styles/graduation.css";
import "@/styles/graduation-qa.css";

type LoadState = "loading" | "ready" | "error" | "unconfigured";

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
            <h1>Hải trả lời.</h1>
            <p className="grad-qa-lead">Những điều mọi người muốn biết, và những chia sẻ chân thành từ Hải.</p>
          </div>
          <dl>
            <div><dt>CÂU HỎI</dt><dd>{String(questions.length).padStart(2, "0")}</dd></div>
            <div><dt>ĐÃ TRẢ LỜI</dt><dd>{String(answered).padStart(2, "0")}</dd></div>
          </dl>
        </section>

        {state === "loading" && <div className="grad-qa-list" aria-label="Đang tải câu hỏi">{Array.from({ length: 3 }, (_, index) => <div className="grad-qa-skeleton" key={index}><i /><i /><i /></div>)}</div>}

        {state === "unconfigured" && <section className="grad-qa-state"><MessageSquareQuote aria-hidden="true" /><h2>Không gian hỏi đáp đang được chuẩn bị.</h2><p>Các câu hỏi và câu trả lời sẽ xuất hiện tại đây khi kết nối hoàn tất.</p><Link to="/graduation">Trở lại trang graduation</Link></section>}

        {state === "error" && <section className="grad-qa-state"><RefreshCw aria-hidden="true" /><h2>Chưa thể tải cuộc trò chuyện.</h2><p>Bạn có thể thử lại sau một chút.</p><button type="button" onClick={reload}>Tải lại câu hỏi</button></section>}

        {state === "ready" && questions.length === 0 && <section className="grad-qa-state"><MessageSquareQuote aria-hidden="true" /><h2>Chưa có câu hỏi nào ở đây.</h2><p>Không gian này đang chờ câu hỏi đầu tiên.</p><Link to="/graduation" state={{ scrollToPercent: 0.92 }}>Gửi điều bạn muốn hỏi Hải</Link></section>}

        {state === "ready" && questions.length > 0 && <section className="grad-qa-list" aria-label="Câu hỏi dành cho Hải">{questions.map((item, index) => {
          const dateLabel = formatSubmittedAt(item.submittedAt);
          return <article className={`grad-qa-card ${item.answer ? "is-answered" : "is-pending"}`} key={item.id}>
            <div className="grad-qa-card-index"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
            <div className="grad-qa-card-body">
              <header><span>{item.name || "Một người bạn"}</span>{dateLabel && <time dateTime={item.submittedAt}>{dateLabel}</time>}</header>
              <blockquote>{item.question}</blockquote>
              {item.answer ? <div className="grad-qa-answer"><p><CheckCircle2 aria-hidden="true" /> HẢI TRẢ LỜI</p><div>{item.answer}</div></div> : <div className="grad-qa-pending"><Clock3 aria-hidden="true" /><span>Hải đã nhận được câu hỏi và sẽ chia sẻ câu trả lời sớm thôi.</span></div>}
            </div>
          </article>;
        })}</section>}
      </main>
      <footer className="grad-qa-footer"><span>QUESTIONS / ANSWERS / CONNECTION</span><span>CLASS OF 2026</span></footer>
    </div>
  );
}
