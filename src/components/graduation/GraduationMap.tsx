import { ExternalLink, MapPin } from "lucide-react";
import type { GraduationEventDate, GraduationMapLocation } from "@/data/graduation";
import { ChapterMarker } from "./ChapterMarker";

export function GraduationMap({ location, eventDate }: { location: GraduationMapLocation; eventDate: GraduationEventDate }) {
  return <section className="grad-section grad-venue" aria-labelledby="venue-title">
    <header className="grad-section-heading"><ChapterMarker number="07" label="THE VENUE" /><div><p>THE VENUE</p><h2 id="venue-title">Hẹn gặp bạn tại buổi lễ</h2></div></header>
    <div className="grad-venue-layout">
      <div className="grad-venue-info"><MapPin aria-hidden="true" /><p>ĐỊA ĐIỂM</p><h3>{location.venueName}</h3><address>{location.address}</address><dl><div><dt>THỜI GIAN</dt><dd>{eventDate.displayTime}</dd></div><div><dt>MÚI GIỜ</dt><dd>{eventDate.timeZone}</dd></div></dl>{location.directionsUrl && <a className="grad-button grad-button-primary grad-print-hide" href={location.directionsUrl} target="_blank" rel="noreferrer">Chỉ đường trên Google Maps <ExternalLink aria-hidden="true" /></a>}</div>
      <div className="grad-map-shell">
        {location.embedUrl ? <iframe className="grad-map-iframe" src={location.embedUrl} title={`Bản đồ địa điểm ${location.venueName}`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> : <div className="grad-map-state"><MapPin aria-hidden="true" /><strong>Bản đồ đang chờ cập nhật</strong><p>Dán URL từ Google Maps → Share → Embed a map vào trường <code>mapLocation.embedUrl</code>.</p>{location.directionsUrl && <a className="grad-button" href={location.directionsUrl} target="_blank" rel="noreferrer">Mở trong Google Maps</a>}</div>}
      </div>
    </div>
  </section>;
}
