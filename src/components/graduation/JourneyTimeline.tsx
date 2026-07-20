import { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import type { GraduationJourneyItem } from "@/data/graduation";
import { ChapterMarker } from "./ChapterMarker";

export function JourneyTimeline({ journey }: { journey: GraduationJourneyItem[] }) {
  const reduce = useReducedMotion();
  if (!journey.length) return <section className="grad-section"><p className="grad-empty-note">Hành trình sẽ được cập nhật.</p></section>;
  return <section className="grad-section grad-journey" aria-labelledby="journey-title"><header className="grad-section-heading"><ChapterMarker number="04" label="THE JOURNEY" /><div><p>THE JOURNEY</p><h2 id="journey-title">Những chương đã đưa tôi đến ngày hôm nay</h2></div></header><div className="grad-journey-list">{journey.map((item, index) => <m.article className="grad-journey-chapter" key={item.id} initial={{ opacity: 0, y: reduce ? 0 : 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduce ? 0 : .5 }}><div className="grad-journey-margin"><span>{String(index + 1).padStart(2, "0")}</span><time>{item.year}</time></div><JourneyImage item={item} /><div className="grad-journey-copy"><p className="grad-eyebrow">{item.period} · {item.eyebrow}</p><h3>{item.title}</h3><p className="grad-journey-summary">{item.summary}</p><p className="grad-journey-story">{item.story}</p>{item.highlight && <strong className="grad-journey-highlight">{item.highlight}</strong>}<div className="grad-journey-lesson"><span>BÀI HỌC MANG THEO</span><p>{item.lesson.replace(/^Bài học mang theo:\s*/i, "")}</p></div>{item.tags?.length ? <ul className="grad-journey-tags" aria-label="Chủ đề">{item.tags.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}</ul> : null}</div></m.article>)}</div></section>;
}

function JourneyImage({ item }: { item: GraduationJourneyItem }) {
  const [failed, setFailed] = useState(false);
  return <figure className="grad-journey-image">{!failed && item.image ? <img src={item.image} alt={item.imageAlt} width="1000" height="800" loading="lazy" style={{ objectPosition: item.imagePosition }} onError={() => setFailed(true)} /> : <div className="grad-image-placeholder" role="img" aria-label={item.imageAlt}><strong>IMAGE<br />PENDING</strong></div>}<figcaption>{item.imageCaption}</figcaption></figure>;
}
