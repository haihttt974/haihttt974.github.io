import { useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ChevronDown, Heart, Mail, PenLine, Sparkles } from "lucide-react";
import type { GraduationLetter } from "@/data/graduation";

const ease = [0.22, 1, 0.36, 1] as const;

export function GratitudeLetter({ letter }: { letter: GraduationLetter }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const contentId = "gratitude-letter-content";

  return (
    <section className="grad-section grad-letter-section" aria-labelledby="letter-title">
      <m.aside
        className="grad-letter-rail"
        aria-label="Chương 05 — Thư cảm ơn"
        initial={{ opacity: 0, x: reduce ? 0 : -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: reduce ? 0 : 0.7, ease }}
      >
        <span className="grad-letter-rail-kicker">CHAPTER</span>
        <strong>05</strong>
        <span className="grad-letter-rail-rule" aria-hidden="true"><i /><i /><i /></span>
        <span className="grad-letter-rail-label">A NOTE<br />OF GRATITUDE</span>
        <span className="grad-letter-rail-mark" aria-hidden="true"><PenLine /></span>
        <span className="grad-letter-rail-meta">
          <small>PERSONAL LETTER</small>
          <b>MMXXVI</b>
        </span>
      </m.aside>
      <m.div
        className={`grad-letter-experience ${open ? "is-open" : ""}`}
        initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: reduce ? 0 : 0.8, ease }}
      >
        <div className="grad-letter-aura" aria-hidden="true" />
        <div className="grad-letter-particles" aria-hidden="true">
          {Array.from({ length: 7 }, (_, index) => <i key={index} />)}
        </div>
        <span className="grad-envelope-shadow grad-envelope-shadow-a" aria-hidden="true" />
        <span className="grad-envelope-shadow grad-envelope-shadow-b" aria-hidden="true" />

        <button
          className="grad-envelope"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls={contentId}
        >
          <span className="grad-envelope-spotlight" aria-hidden="true" />
          <span className="grad-envelope-grain" aria-hidden="true" />
          <span className="grad-envelope-topline">
            <span><Mail aria-hidden="true" /> {letter.eyebrow}</span>
            <span>{letter.writtenAt ?? "A PERSONAL NOTE"}</span>
          </span>
          <span className="grad-envelope-title" id="letter-title">{letter.title}</span>
          <span className="grad-envelope-subtitle"><Sparkles aria-hidden="true" /> Một lời cảm ơn được viết bằng tất cả sự trân trọng</span>
          <span className="grad-envelope-hint">
            <span>{open ? "Khép lại lá thư" : "Chạm để mở thư"}</span>
            <ChevronDown aria-hidden="true" />
          </span>
          <span className="grad-envelope-flap" aria-hidden="true" />
          <span className="grad-envelope-seal-rings" aria-hidden="true" />
          <span className="grad-envelope-seal" aria-hidden="true"><Heart /></span>
          <span className="grad-envelope-corner grad-envelope-corner-a" aria-hidden="true" />
          <span className="grad-envelope-corner grad-envelope-corner-b" aria-hidden="true" />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <m.div
              id={contentId}
              className="grad-letter-reveal"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.72, ease }}
            >
              <m.article
                className="grad-letter"
                initial={{ y: reduce ? 0 : -70, rotateX: reduce ? 0 : -4, scale: reduce ? 1 : 0.97 }}
                animate={{ y: 0, rotateX: 0, scale: 1 }}
                exit={{ y: reduce ? 0 : -28, opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.8, ease }}
              >
                <span className="grad-letter-shine" aria-hidden="true" />
                <span className="grad-letter-corner-mark" aria-hidden="true">05</span>
                <header>
                  <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduce ? 0 : 0.25 }}>{letter.eyebrow}</m.p>
                  {letter.writtenAt && <time>{letter.writtenAt}</time>}
                  <m.h2 initial={{ opacity: 0, y: reduce ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduce ? 0 : 0.3, duration: 0.55 }}>{letter.title}</m.h2>
                </header>
                <div className="grad-letter-body">
                  <m.p className="grad-letter-salutation" initial={{ opacity: 0, y: reduce ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduce ? 0 : 0.38 }}>{letter.salutation}</m.p>
                  {letter.paragraphs.length
                    ? letter.paragraphs.map((paragraph, index) => (
                      <m.p key={index} initial={{ opacity: 0, y: reduce ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduce ? 0 : 0.46 + index * 0.11, duration: 0.55 }}>{paragraph}</m.p>
                    ))
                    : <p>Nội dung lá thư sẽ được cập nhật.</p>}
                  <m.p className="grad-letter-closing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduce ? 0 : 0.85 }}>{letter.closing}</m.p>
                  <m.footer initial={{ opacity: 0, x: reduce ? 0 : -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduce ? 0 : 0.95, duration: 0.6 }}>
                    <span>{letter.signature}</span>
                    <i aria-hidden="true" />
                    <small>THE GRADUATE · 2026</small>
                  </m.footer>
                </div>
                <span className="grad-postal-mark" aria-hidden="true">ISSUE<br />05 / 26</span>
              </m.article>
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </section>
  );
}
