import { Check, Share2 } from "lucide-react";
import type { GraduationData } from "@/data/graduation";

interface Props { data: GraduationData; shared: boolean; onShare: () => void }
export function GraduationClosing({ data, shared, onShare }: Props) {
  return <><section className="grad-closing" aria-labelledby="closing-title"><p id="closing-title">{data.closingMessage}</p><strong>CLASS OF {data.classYear}</strong><h2>{data.graduateName}</h2><div className="grad-actions grad-print-hide"><button className="grad-button" type="button" onClick={onShare}>{shared ? <Check aria-hidden="true" /> : <Share2 aria-hidden="true" />}{shared ? "Đã sao chép liên kết" : "Chia sẻ lời mời"}</button>{data.rsvpUrl && <a className="grad-button grad-button-primary" href={data.rsvpUrl} target="_blank" rel="noreferrer">Xác nhận tham dự</a>}</div><span className="sr-only" aria-live="polite">{shared ? "Đã sao chép liên kết" : ""}</span></section><footer className="grad-footer"><span>HAIIT / SPECIAL ISSUE</span><span>© {data.classYear} · PERSONAL FIELD NOTES</span></footer></>;
}
