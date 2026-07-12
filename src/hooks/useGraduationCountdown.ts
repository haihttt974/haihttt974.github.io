import { useEffect, useState } from "react";

export interface CountdownParts {
  totalMilliseconds: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  status: "upcoming" | "today" | "started" | "invalid";
}

const EMPTY: CountdownParts = { totalMilliseconds: 0, days: 0, hours: 0, minutes: 0, seconds: 0, status: "invalid" };

export function calculateCountdown(dateTimeISO: string, timeZone: string, now = Date.now()): CountdownParts {
  const target = new Date(dateTimeISO).getTime();
  if (!dateTimeISO || Number.isNaN(target)) return EMPTY;
  const remaining = Math.max(0, target - now);
  if (remaining === 0) return { ...EMPTY, status: "started" };
  const targetDay = new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(target);
  const nowDay = new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
  return {
    totalMilliseconds: remaining,
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60),
    status: targetDay === nowDay ? "today" : "upcoming",
  };
}

export function useGraduationCountdown(dateTimeISO: string, timeZone: string) {
  const [parts, setParts] = useState(() => calculateCountdown(dateTimeISO, timeZone));
  useEffect(() => {
    let active = true;
    const update = () => active && setParts(calculateCountdown(dateTimeISO, timeZone));
    update();
    const interval = window.setInterval(update, 1000);
    const onVisibility = () => { if (document.visibilityState === "visible") update(); };
    document.addEventListener("visibilitychange", onVisibility);
    return () => { active = false; window.clearInterval(interval); document.removeEventListener("visibilitychange", onVisibility); };
  }, [dateTimeISO, timeZone]);
  return parts;
}
