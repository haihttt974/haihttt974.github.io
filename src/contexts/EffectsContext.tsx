import React, { createContext, useContext, useState, ReactNode } from 'react';

export type EffectType = 'none' | 'christmas' | 'tet' | 'parallax';

const STORAGE_KEY = 'haiit-preferred-effect';
const VALID_EFFECTS: EffectType[] = ['none', 'christmas', 'tet', 'parallax'];
const TIME_ZONE = 7;

interface LunarDate {
  day: number;
  month: number;
  year: number;
  leap: number;
}

interface DateParts {
  year: number;
  month: number;
  day: number;
}

const isValidEffect = (value: string | null): value is EffectType =>
  value !== null && VALID_EFFECTS.includes(value as EffectType);

const int = (value: number) => Math.floor(value);

const getVietnamDateParts = (date: Date): DateParts => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(date);

  return {
    year: Number(parts.find((part) => part.type === 'year')?.value ?? 0),
    month: Number(parts.find((part) => part.type === 'month')?.value ?? 0),
    day: Number(parts.find((part) => part.type === 'day')?.value ?? 0),
  };
};

const jdFromDate = (day: number, month: number, year: number) => {
  const a = int((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;

  if (year > 1582 || (year === 1582 && (month > 10 || (month === 10 && day >= 15)))) {
    return (
      day +
      int((153 * m + 2) / 5) +
      365 * y +
      int(y / 4) -
      int(y / 100) +
      int(y / 400) -
      32045
    );
  }

  return day + int((153 * m + 2) / 5) + 365 * y + int(y / 4) - 32083;
};

const newMoon = (k: number) => {
  const t = k / 1236.85;
  const t2 = t * t;
  const t3 = t2 * t;
  const t4 = t3 * t;
  const dr = Math.PI / 180;

  let jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * t2 - 0.000000155 * t3;
  jd1 += 0.00033 * Math.sin((166.56 + 132.87 * t - 0.009173 * t2) * dr);

  const m = 359.2242 + 29.10535608 * k - 0.0000333 * t2 - 0.00000347 * t3;
  const mpr = 306.0253 + 385.81691806 * k + 0.0107306 * t2 + 0.00001236 * t3 - 0.000000058 * t4;
  const f = 21.2964 + 390.67050646 * k - 0.0016528 * t2 - 0.00000239 * t3 + 0.00000002 * t4;

  const c1 =
    (0.1734 - 0.000393 * t) * Math.sin(m * dr) +
    0.0021 * Math.sin(2 * dr * m) -
    0.4068 * Math.sin(mpr * dr) +
    0.0161 * Math.sin(2 * dr * mpr) -
    0.0004 * Math.sin(3 * dr * mpr) +
    0.0104 * Math.sin(2 * dr * f) -
    0.0051 * Math.sin((m + mpr) * dr) -
    0.0074 * Math.sin((m - mpr) * dr) +
    0.0004 * Math.sin((2 * f + m) * dr) -
    0.0004 * Math.sin((2 * f - m) * dr) -
    0.0006 * Math.sin((2 * f + mpr) * dr) +
    0.0010 * Math.sin((2 * f - mpr) * dr) +
    0.0005 * Math.sin((2 * mpr + m) * dr);

  let deltaT;
  if (t < -11) {
    deltaT = 0.001 + 0.000839 * t + 0.0002261 * t2 - 0.00000845 * t3 - 0.000000081 * t4;
  } else {
    deltaT = -0.000278 + 0.000265 * t + 0.000262 * t2;
  }

  return jd1 + c1 - deltaT;
};

const sunLongitude = (jdn: number, timeZone: number) => {
  const t = (jdn - 2451545.5 - timeZone / 24) / 36525;
  const t2 = t * t;
  const dr = Math.PI / 180;

  const m = 357.52910 + 35999.05030 * t - 0.0001559 * t2 - 0.00000048 * t2 * t;
  const l0 = 280.46645 + 36000.76983 * t + 0.0003032 * t2;
  const dl =
    (1.914600 - 0.004817 * t - 0.000014 * t2) * Math.sin(dr * m) +
    (0.019993 - 0.000101 * t) * Math.sin(2 * dr * m) +
    0.000290 * Math.sin(3 * dr * m);

  const l = (l0 + dl) * dr;
  return int((l - 2 * Math.PI * int(l / (2 * Math.PI))) / Math.PI * 6);
};

const getLunarMonth11 = (year: number, timeZone: number) => {
  const off = jdFromDate(31, 12, year) - 2415021;
  const k = int(off / 29.530588853);
  let nm = newMoon(k);
  const sunLong = sunLongitude(int(nm + 0.5 + timeZone / 24), timeZone);

  if (sunLong >= 9) {
    nm = newMoon(k - 1);
  }

  return int(nm + 0.5 + timeZone / 24);
};

const getLeapMonthOffset = (a11: number, timeZone: number) => {
  const k = int(0.5 + (a11 - 2415021.076998695) / 29.530588853);
  let last = 0;
  let i = 1;
  let arc = sunLongitude(int(newMoon(k + i) + 0.5 + timeZone / 24), timeZone);

  do {
    last = arc;
    i += 1;
    arc = sunLongitude(int(newMoon(k + i) + 0.5 + timeZone / 24), timeZone);
  } while (arc !== last && i < 14);

  return i - 1;
};

const convertSolarToLunar = (day: number, month: number, year: number, timeZone: number): LunarDate => {
  const dayNumber = jdFromDate(day, month, year);
  const k = int((dayNumber - 2415021.076998695) / 29.530588853);
  let monthStart = int(newMoon(k + 1) + 0.5 + timeZone / 24);

  if (monthStart > dayNumber) {
    monthStart = int(newMoon(k) + 0.5 + timeZone / 24);
  }

  let a11 = getLunarMonth11(year, timeZone);
  let b11 = a11;
  let lunarYear: number;

  if (a11 >= monthStart) {
    lunarYear = year;
    a11 = getLunarMonth11(year - 1, timeZone);
  } else {
    lunarYear = year + 1;
    b11 = getLunarMonth11(year + 1, timeZone);
  }

  const lunarDay = dayNumber - monthStart + 1;
  const diff = int((monthStart - a11) / 29);
  let lunarLeap = 0;
  let lunarMonth = diff + 11;

  if (b11 - a11 > 365) {
    const leapMonthDiff = getLeapMonthOffset(a11, timeZone);
    if (diff >= leapMonthDiff) {
      lunarMonth = diff + 10;
      if (diff === leapMonthDiff) {
        lunarLeap = 1;
      }
    }
  }

  if (lunarMonth > 12) {
    lunarMonth -= 12;
  }

  if (lunarMonth >= 11 && diff < 4) {
    lunarYear -= 1;
  }

  return {
    day: lunarDay,
    month: lunarMonth,
    year: lunarYear,
    leap: lunarLeap,
  };
};

const getVietnamLunarDate = (date: Date) => {
  const { day, month, year } = getVietnamDateParts(date);
  return convertSolarToLunar(day, month, year, TIME_ZONE);
};

const getDefaultEffectForDate = (date: Date): EffectType => {
  const vietnamDate = getVietnamDateParts(date);

  if (vietnamDate.month === 12 && vietnamDate.day >= 24 && vietnamDate.day <= 26) {
    return 'christmas';
  }

  if (vietnamDate.day === vietnamDate.month) {
    return 'parallax';
  }

  const lunar = getVietnamLunarDate(date);
  if (lunar.month === 1 && lunar.day >= 1 && lunar.day <= 5) {
    return 'tet';
  }

  if (lunar.month === 12 && lunar.day >= 29 && lunar.day <= 30) {
    return 'tet';
  }

  return 'none';
};

interface EffectsContextType {
  currentEffect: EffectType;
  setCurrentEffect: (effect: EffectType) => void;
}

const EffectsContext = createContext<EffectsContextType | undefined>(undefined);

export const EffectsProvider = ({ children }: { children: ReactNode }) => {
  const [currentEffect, setCurrentEffectState] = useState<EffectType>(() => {
    const savedEffect = localStorage.getItem(STORAGE_KEY);
    return isValidEffect(savedEffect) ? savedEffect : getDefaultEffectForDate(new Date());
  });

  const setCurrentEffect = (effect: EffectType) => {
    setCurrentEffectState(effect);
    localStorage.setItem(STORAGE_KEY, effect);
  };

  return (
    <EffectsContext.Provider value={{ currentEffect, setCurrentEffect }}>
      {children}
    </EffectsContext.Provider>
  );
};

export const useEffects = () => {
  const context = useContext(EffectsContext);
  if (!context) {
    throw new Error('useEffects must be used within an EffectsProvider');
  }
  return context;
};
