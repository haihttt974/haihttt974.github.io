import { Braces, CalendarPlus, Code2, Cpu, MapPin } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import type { GraduationData } from "@/data/graduation";

interface Props { data: GraduationData; onAddCalendar: () => void; canAddCalendar: boolean }

export function GraduationHero({ data, onAddCalendar, canAddCalendar }: Props) {
  const reduceMotion = useReducedMotion();
  const detailItems = [
    ["Degree", [data.degree, data.major].filter(Boolean).join(" · ")],
    ["Date", data.ceremonyDateLabel],
    ["Location", data.venueName],
  ].filter(([, value]) => value);

  return <section className="grad-hero" aria-labelledby="graduation-title">
    <div className="grad-yearmark" aria-hidden="true">{data.classYear}</div>
    <m.div className="grad-hero-copy" initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .48 }}>
      <p className="grad-eyebrow">{data.eyebrow}</p>
      <h1 id="graduation-title">{data.graduateName}</h1>
      <p className="grad-headline">{data.headline}</p>
      <p className="grad-intro">{data.introduction}</p>
      {detailItems.length > 0 && <dl className="grad-hero-meta">{detailItems.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
      {(data.mapUrl || canAddCalendar) && <div className="grad-actions grad-print-hide">
        {data.mapUrl && <a className="grad-button grad-button-primary" href={data.mapUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" />Xem địa điểm</a>}
        {canAddCalendar && <button className="grad-button" type="button" onClick={onAddCalendar}><CalendarPlus aria-hidden="true" />Thêm vào lịch</button>}
      </div>}
    </m.div>
    <m.figure className="grad-portrait" initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .52, delay: reduceMotion ? 0 : .08 }}>
      {data.heroImage ? <img src={data.heroImage} alt={data.heroImageAlt || ""} width="900" height="1125" fetchPriority="high" style={{ objectPosition: data.heroImagePosition }} /> : <div className="grad-image-placeholder" role="img" aria-label="Vị trí dành cho ảnh chân dung tốt nghiệp"><span>PORTRAIT / 01</span><strong>Thêm ảnh<br />hero.webp</strong></div>}
      <figcaption>THE GRADUATE · PERSONAL FIELD NOTES</figcaption>
    </m.figure>
    <m.aside className="grad-tech-hud" aria-label="Dấu ấn công nghệ" initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : .55, delay: reduceMotion ? 0 : .2 }}>
      <span className="grad-tech-hud-label"><i /> SYSTEM PROFILE / ONLINE</span>
      <ul>
        <li><Code2 aria-hidden="true" /><span><small>FOCUS</small><strong>Full-stack</strong></span></li>
        <li><Braces aria-hidden="true" /><span><small>MAJOR</small><strong>Information Tech</strong></span></li>
        <li><Cpu aria-hidden="true" /><span><small>STATUS</small><strong>Ready for next</strong></span></li>
      </ul>
    </m.aside>
  </section>;
}
