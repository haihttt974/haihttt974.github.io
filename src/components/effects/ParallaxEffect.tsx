import { useEffect, useState } from "react";

export const ParallaxEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (event: PointerEvent) => setPosition({
      x: event.clientX / window.innerWidth - 0.5,
      y: event.clientY / window.innerHeight - 0.5,
    });
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="effect-scene effect-scene-3d fixed inset-0 z-0 overflow-hidden">
      <div className="effect-3d-grid" style={{ transform: `perspective(700px) rotateX(64deg) translate3d(${position.x * 24}px, ${position.y * 16}px, 0)` }} />
      <div className="effect-3d-orb effect-3d-orb-a" style={{ transform: `translate3d(${position.x * -55}px, ${position.y * -40}px, 0)` }} />
      <div className="effect-3d-orb effect-3d-orb-b" style={{ transform: `translate3d(${position.x * 75}px, ${position.y * 55}px, 0)` }} />
      <div className="effect-3d-ring effect-3d-ring-a" />
      <div className="effect-3d-ring effect-3d-ring-b" />
      <div className="effect-particles">
        {Array.from({ length: 26 }, (_, index) => (
          <i key={index} style={{ "--i": index } as React.CSSProperties} />
        ))}
      </div>
      <div className="effect-label left-5 top-24">DEPTH FIELD / ACTIVE</div>
    </div>
  );
};
