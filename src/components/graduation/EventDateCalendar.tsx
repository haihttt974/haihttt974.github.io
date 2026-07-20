import { CalendarDays, Clock3, Sparkles } from "lucide-react";
import type { GraduationEventDate } from "@/data/graduation";
import { datesShareCalendarDay, parseLocalCalendarDate } from "@/lib/graduation-date";
import { GraduationCountdown } from "./GraduationCountdown";
import { ChapterMarker } from "./ChapterMarker";

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
  const calendarYear = selected.getFullYear();
  const calendarMonth = selected.getMonth();
  const firstDayOffset = (new Date(calendarYear, calendarMonth, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const calendarCellCount = Math.ceil((firstDayOffset + daysInMonth) / 7) * 7;
  const today = new Date();
  const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const calendarDays = Array.from({ length: calendarCellCount }, (_, index) => {
    const date = index - firstDayOffset + 1;
    return date > 0 && date <= daysInMonth ? date : null;
  });

  return (
    <section className="grad-section grad-date-section" aria-labelledby="event-date-title">
      <header className="grad-date-hero">
        <ChapterMarker number="03" label="SAVE THE DATE" />
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
            <div className="grad-calendar-grid" role="grid" aria-label={`Lịch ${monthLong.toLocaleLowerCase("vi-VN")} năm ${year}`}>
              {weekdays.map((weekdayLabel) => <span className="grad-calendar-weekday" role="columnheader" key={weekdayLabel}>{weekdayLabel}</span>)}
              {calendarDays.map((date, index) => {
                if (date === null) return <span className="grad-calendar-blank" aria-hidden="true" key={`blank-${index}`} />;
                const isEvent = date === selected.getDate();
                const isToday = date === today.getDate() && calendarMonth === today.getMonth() && calendarYear === today.getFullYear();
                return <span className={`grad-calendar-day ${isEvent ? "is-event" : ""} ${isToday ? "is-today" : ""}`} role="gridcell" aria-selected={isEvent} aria-label={`${date} ${monthLong.toLocaleLowerCase("vi-VN")} ${year}${isEvent ? ", ngày diễn ra lễ tốt nghiệp" : ""}`} key={date}>{String(date).padStart(2, "0")}</span>;
              })}
            </div>
          </div>
          <div className="grad-calendar-legend" aria-hidden="true">
            <span><i className="is-event" /> Ngày diễn ra</span>
            <span><i className="is-today" /> Hôm nay</span>
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
