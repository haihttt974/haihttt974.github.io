import { useEffect, useState } from "react";
import { SignatureMark, type SignatureMarkPhase } from "./SignatureMark";
import { loadingMotionConfig } from "./loadingMotionConfig";
import { useLoadingText } from "./useLoadingText";

type BootPhase = SignatureMarkPhase | "leaving" | "removed";

interface AppBootLoaderProps {
  onRemoved?: () => void;
  preview?: boolean;
}

export const AppBootLoader = ({ onRemoved, preview = false }: AppBootLoaderProps) => {
  const text = useLoadingText();
  const [phase, setPhase] = useState<BootPhase>("initializing");

  useEffect(() => {
    let active = true;
    const timers = new Set<number>();
    const schedule = (callback: () => void, delay: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        if (active) callback();
      }, delay);
      timers.add(id);
    };
    const startedAt = performance.now();
    let finishRequested = false;
    schedule(() => setPhase("drawing"), loadingMotionConfig.initializeDuration);
    schedule(() => setPhase((current) => current === "drawing" ? "waiting" : current), loadingMotionConfig.initializeDuration + loadingMotionConfig.drawDuration);

    if (!preview) {
      const finish = () => {
        if (!active || finishRequested) return;
        finishRequested = true;
        schedule(() => {
          setPhase("complete");
          schedule(() => {
            setPhase("leaving");
            schedule(() => {
              setPhase("removed");
              onRemoved?.();
            }, loadingMotionConfig.exitDuration);
          }, loadingMotionConfig.completeDuration);
        }, Math.max(0, loadingMotionConfig.appMinimumTime - (performance.now() - startedAt)));
      };
      schedule(finish, loadingMotionConfig.appMaximumWait);
      const appPainted = new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
      let fontTimer: number | undefined;
      const fontsSettled = document.fonts?.ready
        ? Promise.race([
            document.fonts.ready.then(() => undefined),
            new Promise<void>((resolve) => {
              fontTimer = window.setTimeout(resolve, 700);
              timers.add(fontTimer);
            }),
          ])
        : Promise.resolve();
      Promise.allSettled([appPainted, fontsSettled]).then(() => {
        if (fontTimer !== undefined) {
          window.clearTimeout(fontTimer);
          timers.delete(fontTimer);
        }
        finish();
      });
    }

    return () => {
      active = false;
      timers.forEach((id) => window.clearTimeout(id));
      timers.clear();
    };
  }, [onRemoved, preview]);

  if (phase === "removed") return null;
  const markPhase: SignatureMarkPhase = phase === "leaving" ? "complete" : phase;
  const status = markPhase === "complete" ? text.opening : markPhase === "waiting" ? text.waiting : text.initializing;

  return (
    <div className={`app-boot-loader app-boot-loader--${phase}`} role="status" aria-live="polite" aria-label={status}>
      <div className="app-boot-loader__field" aria-hidden="true" />
      <div className="app-boot-loader__aperture" aria-hidden="true" />
      <div className="app-boot-loader__content">
        <p className="app-boot-loader__identity">haiit / LDH-974</p>
        <SignatureMark phase={markPhase} variant="app" className="app-boot-loader__mark" />
        <p className="app-boot-loader__status">{status}</p>
      </div>
    </div>
  );
};
