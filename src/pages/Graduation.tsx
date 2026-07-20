import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { graduationData } from "@/data/graduation";
import { GraduationHero } from "@/components/graduation/GraduationHero";
import { CeremonyDetails, InvitationStatement, PhotoContactSheet } from "@/components/graduation/GraduationSections";
import { EventDateCalendar } from "@/components/graduation/EventDateCalendar";
import { JourneyTimeline } from "@/components/graduation/JourneyTimeline";
import { GratitudeLetter } from "@/components/graduation/GratitudeLetter";
import { GraduationMap } from "@/components/graduation/GraduationMap";
import { GraduationClosing } from "@/components/graduation/GraduationClosing";
import { GraduationExperience } from "@/components/graduation/GraduationExperience";
import { GraduationMessage } from "@/components/graduation/GraduationMessage";
import "@/styles/graduation.css";
import "@/styles/graduation-anchors.css";

const escapeIcs = (value: string) => value.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
const toIcsDate = (date: Date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

export default function Graduation() {
  const data = graduationData;
  const location = useLocation();
  const [shared, setShared] = useState(false);
  const ceremonyDate = useMemo(() => {
    if (!data.ceremonyDateISO) return null;
    const parsed = new Date(data.ceremonyDateISO);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }, [data.ceremonyDateISO]);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = `Graduation Invitation — ${data.graduateName} · Class of ${data.classYear}`;
    description?.setAttribute("content", `Thiệp mời tốt nghiệp của ${data.graduateName} — Class of ${data.classYear}.`);
    document.body.classList.add("graduation-active");
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
      document.body.classList.remove("graduation-active");
    };
  }, [data.classYear, data.graduateName]);

  useEffect(() => {
    const chapter = location.hash.match(/^#(0[1-8])$/)?.[1];
    if (!chapter) return;

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        document.getElementById(chapter)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [location.hash]);

  const addToCalendar = () => {
    if (!ceremonyDate) return;
    const end = new Date(ceremonyDate.getTime() + 2 * 60 * 60 * 1000);
    const location = [data.venueName, data.venueAddress].filter(Boolean).join(", ");
    const content = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//HAIIT//Graduation Invitation//VI", "CALSCALE:GREGORIAN", "BEGIN:VEVENT", `UID:graduation-${ceremonyDate.getTime()}@haiit.dev`, `DTSTAMP:${toIcsDate(new Date())}`, `DTSTART:${toIcsDate(ceremonyDate)}`, `DTEND:${toIcsDate(end)}`, `SUMMARY:${escapeIcs(`Lễ tốt nghiệp — ${data.graduateName}`)}`, `DESCRIPTION:${escapeIcs(data.introduction)}`, `LOCATION:${escapeIcs(location)}`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const url = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url; anchor.download = "graduation-invitation.ics"; anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  const share = async () => {
    try {
      if (navigator.share) await navigator.share({ title: document.title, text: data.headline, url: window.location.href });
      else await navigator.clipboard.writeText(window.location.href);
      setShared(true); window.setTimeout(() => setShared(false), 2400);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShared(false);
    }
  };

  return <div className="graduation-page"><GraduationExperience /><a className="grad-skip-link" href="#graduation-content">Bỏ qua đến nội dung chính</a><header className="grad-masthead"><span>HAIIT / SPECIAL ISSUE</span><span>CLASS OF {data.classYear}</span></header><main id="graduation-content" className="grad-shell"><GraduationHero data={data} onAddCalendar={addToCalendar} canAddCalendar={Boolean(ceremonyDate)} /><InvitationStatement data={data} /><CeremonyDetails data={data} /><EventDateCalendar eventDate={data.eventDate} /><JourneyTimeline journey={data.journey} /><GratitudeLetter letter={data.letter} /><PhotoContactSheet data={data} /><GraduationMap location={data.mapLocation} eventDate={data.eventDate} /><GraduationMessage /><GraduationClosing data={data} shared={shared} onShare={share} /></main></div>;
}
