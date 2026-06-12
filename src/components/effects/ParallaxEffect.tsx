import { useEffect, useRef } from "react";

interface NodePoint { x: number; y: number; vx: number; vy: number; size: number; }

export const ParallaxEffect = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!scene || !canvas || !context) return;
    let frame = 0;
    let nodes: NodePoint[] = [];
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      nodes = Array.from({ length: Math.min(55, Math.floor(window.innerWidth / 25)) }, () => ({
        x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
        vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16,
        size: Math.random() * 1.5 + .6,
      }));
    };
    const move = (event: PointerEvent) => {
      pointer.x = event.clientX; pointer.y = event.clientY;
      const x = event.clientX / window.innerWidth - .5;
      const y = event.clientY / window.innerHeight - .5;
      scene.style.setProperty("--mx", `${x}`);
      scene.style.setProperty("--my", `${y}`);
      scene.style.setProperty("--back-shift", `${x * -10}px`);
      scene.style.setProperty("--floor-shift", `${x * 18}px`);
      scene.style.setProperty("--hud-shift", `${y * 18}px`);
      scene.style.setProperty("--core-rx", `${-18 + y * -12}deg`);
      scene.style.setProperty("--core-ry", `${35 + x * 20}deg`);
      scene.style.setProperty("--px", `${event.clientX}px`);
      scene.style.setProperty("--py", `${event.clientY}px`);
    };
    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      nodes.forEach((node, index) => {
        node.x += node.vx; node.y += node.vy;
        if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
        if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;
        context.beginPath(); context.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        context.fillStyle = "rgba(115, 240, 255, .55)"; context.fill();
        nodes.slice(index + 1).forEach((other) => {
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < 135) {
            context.beginPath(); context.moveTo(node.x, node.y); context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(115, 240, 255, ${.1 * (1 - distance / 135)})`; context.stroke();
          }
        });
        const pointerDistance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
        if (pointerDistance < 190) {
          context.beginPath(); context.moveTo(node.x, node.y); context.lineTo(pointer.x, pointer.y);
          context.strokeStyle = `rgba(190, 255, 85, ${.24 * (1 - pointerDistance / 190)})`; context.stroke();
        }
      });
      frame = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize", resize); window.addEventListener("pointermove", move, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move); };
  }, []);

  return (
    <div ref={sceneRef} className="effect-scene effect-scene-3d fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="cyber-spotlight" />
      <div className="cyber-grid cyber-grid-back" />
      <div className="cyber-grid cyber-grid-floor" />
      <div className="cyber-core">
        <div className="cyber-core-face cyber-core-front" /><div className="cyber-core-face cyber-core-back" />
        <div className="cyber-core-face cyber-core-left" /><div className="cyber-core-face cyber-core-right" />
        <div className="cyber-core-face cyber-core-top" /><div className="cyber-core-face cyber-core-bottom" />
      </div>
      <div className="cyber-portal cyber-portal-a" /><div className="cyber-portal cyber-portal-b" />
      <div className="cyber-hud cyber-hud-left"><span>SYS / DEPTH</span><b>03.24</b><i /></div>
      <div className="cyber-hud cyber-hud-right"><span>FIELD / LIVE</span><b>97.4%</b><i /></div>
      <div className="effect-label left-5 top-24">CYBER OBSERVATORY / INTERACTIVE</div>
    </div>
  );
};
