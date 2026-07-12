import { m, useReducedMotion } from "framer-motion";
import type { GraduationEventDate } from "@/data/graduation";
import { useGraduationCountdown } from "@/hooks/useGraduationCountdown";

export function GraduationCountdown({ eventDate }: { eventDate: GraduationEventDate }) {
  const countdown = useGraduationCountdown(eventDate.dateTimeISO, eventDate.timeZone);
  const reduce = useReducedMotion();
  if (countdown.status === "invalid") return <div className="grad-countdown-message"><strong>THỜI GIAN SẼ ĐƯỢC CẬP NHẬT</strong><p>Ngày giờ buổi lễ hiện chưa hợp lệ.</p></div>;
  if (countdown.status === "started") {
    const isOngoing = Date.now() - new Date(eventDate.dateTimeISO).getTime() <= 2 * 60 * 60 * 1000;
    return <div className="grad-countdown-message"><strong>{isOngoing ? "HÔM NAY, CHƯƠNG MỚI BẮT ĐẦU" : "MỘT CỘT MỐC ĐÃ ĐƯỢC GHI LẠI"}</strong><p>{isOngoing ? "Buổi lễ tốt nghiệp đang diễn ra. Cảm ơn bạn đã có mặt trong ngày đặc biệt này." : "Buổi lễ đã diễn ra, nhưng hành trình mới chỉ vừa bắt đầu."}</p></div>;
  }
  const units = [[countdown.days, "NGÀY"], [countdown.hours, "GIỜ"], [countdown.minutes, "PHÚT"], [countdown.seconds, "GIÂY"]] as const;
  const accessible = `Còn ${countdown.days} ngày, ${countdown.hours} giờ và ${countdown.minutes} phút đến buổi lễ.`;
  return <div className="grad-countdown"><p className="grad-countdown-kicker">{countdown.status === "today" ? "HÔM NAY LÀ NGÀY TỐT NGHIỆP" : "CÒN LẠI ĐẾN NGÀY GẶP NHAU"}</p><div className="grad-countdown-grid" aria-hidden="true">{units.map(([value, label]) => <div className="grad-countdown-unit" key={label}><m.strong key={value} initial={{ opacity: reduce ? 1 : .45, y: reduce ? 0 : 3 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduce ? 0 : .25 }}>{label === "NGÀY" ? value : String(value).padStart(2, "0")}</m.strong><span>{label}</span></div>)}</div><p className="sr-only" aria-live="polite">{accessible}</p><p className="grad-countdown-time">{eventDate.displayTime}<br /><span>{eventDate.timeZone}</span></p></div>;
}
