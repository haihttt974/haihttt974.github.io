import { CalendarDays, Clock3, Sparkles } from "lucide-react";
import { vi } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import type { GraduationEventDate } from "@/data/graduation";
import { datesShareCalendarDay, parseLocalCalendarDate } from "@/lib/graduation-date";
import { GraduationCountdown } from "./GraduationCountdown";

export function EventDateCalendar({ eventDate }: { eventDate: GraduationEventDate }) {
  let selected: Date;
  try {
    selected = parseLocalCalendarDate(eventDate.localDate);
  } catch {
    return <section className="grad-section"><p className="grad-empty-note">Ngày sự kiện chưa đúng định dạng.</p></section>;
  }

  const consistent = datesShareCalendarDay(eventDate.localDate, eventDate.dateTimeISO, eventDate.timeZone);
  const weekday = new Intl.DateTimeFormat("vi-VN", { weekday: "long" }).format(selected);
  const fullDate = new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "long", year: "numeric" }).format(selected);
  const month = new Intl.DateTimeFormat("vi-VN", { month: "short" }).format(selected).replace("thg", "THÁNG");
  const monthLong = new Intl.DateTimeFormat("vi-VN", { month: "long" }).format(selected).toLocaleUpperCase("vi-VN");
  const day = String(selected.getDate()).padStart(2, "0");
  const year = selected.getFullYear();
  const ceremonyTime = eventDate.displayTime.split("·")[0].trim();

  return (
    <section className="grad-section grad-date-section" aria-labelledby="event-date-title">
      <header className="grad-date-hero">
        <div className="grad-date-index" aria-hidden="true">
          <span>CHAPTER</span>
          <strong>03</strong>
          <i />
          <small>SAVE<br />THE DATE</small>
        </div>
        <div className="grad-date-heading-copy">
          <p><Sparkles aria-hidden="true" /> NGÀY HẸN · A DAY TO REMEMBER</p>
          <h2 id="event-date-title">Một ngày để khép lại hành trình cũ<br />và bắt đầu một chương mới.</h2>
          <div className="grad-date-heading-meta">
            <span><CalendarDays aria-hidden="true" /> {weekday}, {fullDate}</span>
            <span><Clock3 aria-hidden="true" /> {ceremonyTime}</span>
          </div>
        </div>
        <div className="grad-date-stamp" aria-label={`Ngày ${day}, ${month}, ${year}`}>
          <span>{month}</span>
          <strong>{day}</strong>
          <small>{year}</small>
          <i aria-hidden="true">GRADUATION DAY</i>
        </div>
      </header>

      <div className="grad-date-layout">
        <div className="grad-calendar-panel">
          <div className="grad-calendar-toolbar">
            <div>
              <small>CALENDAR / {year}</small>
              <strong>{monthLong}</strong>
            </div>
            <span><i aria-hidden="true" /> EVENT DATE</span>
          </div>
          <div className="grad-calendar-shell">
            <span className="grad-calendar-corner grad-calendar-corner-a" aria-hidden="true" />
            <span className="grad-calendar-corner grad-calendar-corner-b" aria-hidden="true" />
            <Calendar
            mode="single"
            selected={selected}
            month={selected}
            locale={vi}
            weekStartsOn={1}
            disableNavigation
            showOutsideDays={false}
            disabled
            className="grad-calendar"
            classNames={{
              day_selected: "grad-calendar-selected",
              day_today: "grad-calendar-today",
              day_outside: "grad-calendar-outside",
            }}
            />
          </div>
          <div className="grad-calendar-legend" aria-hidden="true">
            <span><i className="is-event" /> Ngày diễn ra</span>
            <span><i className="is-today" /> Hôm nay</span>
            <span><i className="is-muted" /> Ngoài tháng</span>
          </div>
          <div className="grad-calendar-caption">
            <span>{weekday.toLocaleUpperCase("vi-VN")}</span>
            <strong>{fullDate.toLocaleUpperCase("vi-VN")}</strong>
            <small>{ceremonyTime} · {eventDate.timeZone}</small>
          </div>
          <p className="sr-only">Ngày tốt nghiệp được tổ chức vào {weekday}, ngày {fullDate} lúc {ceremonyTime}.</p>
          {!consistent && <p className="grad-data-warning">Ngày lịch và thời điểm countdown chưa khớp. Vui lòng kiểm tra dữ liệu.</p>}
        </div>
        <GraduationCountdown eventDate={eventDate} />
        <div className="grad-date-details" aria-label="Tóm tắt ngày hẹn">
          <span><small>DATE</small><strong>{day} / {String(selected.getMonth() + 1).padStart(2, "0")} / {year}</strong></span>
          <span><small>LOCAL TIME</small><strong>{ceremonyTime}</strong></span>
          <span><small>TIME ZONE</small><strong>{eventDate.timeZone}</strong></span>
          <span className="grad-date-confirmed"><i aria-hidden="true" /> MARKED WITH GRATITUDE</span>
        </div>
      </div>
    </section>
  );
}
