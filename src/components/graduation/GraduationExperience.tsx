import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { m, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";

const GRADUATION_SONG = "/graduation/audio/graduation_audio.mp3";

export function GraduationExperience() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const progressMetaRef = useRef<HTMLDivElement>(null);
  const progressValueRef = useRef<HTMLElement>(null);
  const readingPercentRef = useRef(-1);

  useMotionValueEvent(progress, "change", (latest) => {
    const next = Math.round(latest * 100);
    if (next === readingPercentRef.current) return;
    readingPercentRef.current = next;
    progressMetaRef.current?.setAttribute("aria-valuenow", String(next));
    if (progressValueRef.current) progressValueRef.current.textContent = String(next).padStart(2, "0");
  });

  useEffect(() => {
    const audio = audioRef.current;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".graduation-page .grad-section"));


    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }),
      { threshold: 0.12 },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      if (!audio) return;
      audio.pause();
      audio.currentTime = 0;
    };
  }, [reduce]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio || audioError) return;
    if (!audio.paused) { audio.pause(); return; }
    try {
      audio.volume = 0.28;
      await audio.play();
    } catch {
      setPlaying(false);
      setAudioError(true);
    }
  };

  return <>
    <div ref={progressMetaRef} className="grad-reading-progress grad-print-hide" role="progressbar" aria-label="Tiến độ đọc trang" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
      <div className="grad-reading-meta">
        <span><i aria-hidden="true" /> READING PROGRESS</span>
        <strong><span ref={progressValueRef}>00</span><small>%</small></strong>
      </div>
      <div className="grad-reading-track">
        <span className="grad-reading-ticks" aria-hidden="true">{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</span>
        <m.span className="grad-scroll-progress" style={{ scaleX: progress }} aria-hidden="true">
          <span className="grad-reading-glow" />
          <span className="grad-reading-head" />
        </m.span>
      </div>
    </div>
    <div className="grad-atmosphere" aria-hidden="true">
      <span className="grad-light grad-light-a" />
      <span className="grad-light grad-light-b" />
      <span className="grad-orbit grad-orbit-a"><i /><i /><i /></span>
      <span className="grad-editorial-word grad-editorial-word-a">JOURNEY</span>
      <span className="grad-editorial-word grad-editorial-word-b">MMXXVI</span>
      <span className="grad-registration">+</span>
      <span className="grad-floating-cross grad-floating-cross-a">+</span>
      <span className="grad-floating-cross grad-floating-cross-b">×</span>
      <span className="grad-circuit grad-circuit-a"><i /><i /><i /></span>
      <span className="grad-circuit grad-circuit-b"><i /><i /></span>
      <div className="grad-global-motes">{Array.from({ length: 6 }, (_, index) => <i key={index} />)}</div>
    </div>
    <audio ref={audioRef} src={GRADUATION_SONG} preload="metadata" loop playsInline onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setPlaying(false); setAudioError(true); }} />
    <button className={`grad-music-control grad-print-hide ${playing ? "is-playing" : ""}`} type="button" onClick={toggleMusic} aria-pressed={playing} aria-label={audioError ? "Không thể tải nhạc nền" : playing ? "Tạm dừng Graduation Song" : "Phát Graduation Song"} disabled={audioError}>
      <span className="grad-music-icon">{playing ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}{playing && !reduce && <i aria-hidden="true"><b /><b /><b /></i>}</span>
    </button>
  </>;
}
