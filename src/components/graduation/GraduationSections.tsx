import { ExternalLink } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import type { GraduationData } from "@/data/graduation";

const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const reduce = useReducedMotion();
  return <m.div className={className} initial={{ opacity: 0, y: reduce ? 0 : 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduce ? 0 : .45 }}>{children}</m.div>;
};

export function InvitationStatement({ data }: { data: GraduationData }) {
  return <section className="grad-section grad-statement" aria-labelledby="statement-title"><span className="grad-section-number">01</span><Reveal><h2 id="statement-title">Lời mời cho một ngày đáng nhớ.</h2><p>{data.introduction}</p><small>WITH GRATITUDE / {data.classYear}</small></Reveal></section>;
}

export function CeremonyDetails({ data }: { data: GraduationData }) {
  const details = [["Ngày", data.ceremonyDateLabel], ["Giờ", data.ceremonyTime], ["Địa điểm", data.venueName], ["Địa chỉ", data.venueAddress], ["Trang phục", data.dressNote]].filter(([, value]) => value);
  return <section className="grad-section" aria-labelledby="ceremony-title"><header className="grad-section-heading"><span className="grad-section-number">02</span><div><p>CEREMONY NOTICE</p><h2 id="ceremony-title">Thông tin buổi lễ</h2></div></header><Reveal className="grad-ticket">{details.length ? <dl>{details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl> : <p className="grad-pending">Thông tin buổi lễ sẽ được cập nhật.</p>}<div className="grad-ticket-links grad-print-hide">{data.mapUrl && <a href={data.mapUrl} target="_blank" rel="noreferrer">Xem bản đồ <ExternalLink aria-hidden="true" /></a>}{data.rsvpUrl && <a href={data.rsvpUrl} target="_blank" rel="noreferrer">Xác nhận tham dự <ExternalLink aria-hidden="true" /></a>}{data.contactUrl && <a href={data.contactUrl}>{data.contactLabel || "Liên hệ"}</a>}</div></Reveal></section>;
}

export function PhotoContactSheet({ data }: { data: GraduationData }) {
  const frames = data.photos.length ? data.photos.slice(0, 6) : Array.from({ length: 4 }, (_, i) => ({ src: "", alt: `Vị trí ảnh ${i + 1}`, caption: "Thêm ảnh trong /public/graduation/" }));
  return <section className="grad-section" aria-labelledby="photos-title"><header className="grad-section-heading"><span className="grad-section-number">04</span><div><p>CONTACT SHEET</p><h2 id="photos-title">Những khung hình</h2></div></header><div className="grad-contact-sheet">{frames.map((photo, index) => <Reveal className={`grad-frame grad-frame-${index + 1}`} key={`${photo.src}-${index}`}><figure>{photo.src ? <img src={photo.src} alt={photo.alt} width="800" height="1000" loading="lazy" style={{ objectPosition: photo.position }} /> : <div className="grad-image-placeholder" role="img" aria-label={photo.alt}><span>FRAME {String(index + 1).padStart(2, "0")}</span><strong>PHOTO<br />PENDING</strong></div>}<figcaption><b>FRAME {String(index + 1).padStart(2, "0")}</b>{photo.caption && <span>{photo.caption}</span>}</figcaption></figure></Reveal>)}</div></section>;
}
