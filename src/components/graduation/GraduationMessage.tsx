import { useEffect, useRef, useState } from "react";
import { CheckCircle2, MessageCircleHeart, Send } from "lucide-react";
import { GRADUATION_FORM_URL } from "@/config/graduation-form";
import { ChapterMarker } from "./ChapterMarker";

const GOOGLE_FORM_FIELDS = {
  identity: "entry.1905038064",
  question: "entry.597118939",
  message: "entry.48015913",
} as const;

const getGoogleFormResponseUrl = () => {
  const value = GRADUATION_FORM_URL.trim();
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.hostname !== "docs.google.com" || !url.pathname.startsWith("/forms/")) return null;
    url.pathname = url.pathname.replace(/\/viewform\/?$/, "/formResponse");
    url.search = "";
    return url.toString();
  } catch {
    return null;
  }
};

export function GraduationMessage() {
  const responseUrl = getGoogleFormResponseUrl();
  const formRef = useRef<HTMLFormElement>(null);
  const submittedRef = useRef(false);
  const resetTimerRef = useRef<number | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => () => {
    if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
  }, []);

  const handleSubmit = () => {
    if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
    submittedRef.current = true;
    setStatus("sending");
  };

  const handleResponseLoad = () => {
    if (!submittedRef.current) return;
    submittedRef.current = false;
    formRef.current?.reset();
    setStatus("sent");
    resetTimerRef.current = window.setTimeout(() => {
      setStatus("idle");
      resetTimerRef.current = null;
    }, 3500);
  };

  return (
    <section className="grad-section grad-message-section" aria-labelledby="graduation-message-title">
      <ChapterMarker number="08" label="A NOTE FOR HAI" action={{ href: "/graduation/questions", label: "Xem Q&A" }} />
      <div className="grad-message-content">
        <header className="grad-message-heading">
          <p><MessageCircleHeart aria-hidden="true" /> A QUIET SPACE / FOR YOU</p>
          <h2 id="graduation-message-title">Có điều gì bạn muốn nói với Hải không?</h2>
          <p className="grad-message-intro">Một khoảng nhỏ dành cho lời bạn muốn gửi đến Hải.</p>
        </header>

        {responseUrl ? (
          <div className="grad-custom-form-shell">
            <div className="grad-custom-form-top"><span>MESSAGE FORM</span><small>DIRECT TO HAI</small></div>
            <form ref={formRef} action={responseUrl} method="POST" target="graduation-form-response" onSubmit={handleSubmit} onInput={() => status === "sent" && setStatus("idle")}>
              <label><span>Tên, biệt danh hoặc một cách gọi để Hải nhận ra bạn nhoa</span><input name={GOOGLE_FORM_FIELDS.identity} type="text" autoComplete="name" /></label>
              <label><span>Có điều gì bạn muốn nghe Hải chia sẻ thêm khum</span><textarea name={GOOGLE_FORM_FIELDS.question} rows={3} /></label>
              <label><span>Điều bạn muốn gửi đến Hải nèeee</span><textarea name={GOOGLE_FORM_FIELDS.message} rows={5} /></label>
              <div className="grad-custom-form-footer">
                <p aria-live="polite">{status === "sent" ? "Hải nhận được lời nhắn của bạn rồi — cảm ơn bạn nhiều nhó!" : ""}</p>
                <button type="submit" disabled={status === "sending"}>{status === "sent" ? <CheckCircle2 aria-hidden="true" /> : <Send aria-hidden="true" />}{status === "sending" ? "Đang gửi…" : status === "sent" ? "Đã gửi lời nhắn" : "Gửi đến Hải"}</button>
              </div>
            </form>
            <iframe className="grad-form-response-frame" name="graduation-form-response" title="Phản hồi gửi Google Form" onLoad={handleResponseLoad} />
          </div>
        ) : <p className="grad-form-unavailable">Hộp thư đang được chuẩn bị và sẽ sớm mở.</p>}
      </div>
    </section>
  );
}
