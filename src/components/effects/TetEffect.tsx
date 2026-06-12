import { useEffect, useRef } from "react";

interface Petal { x: number; y: number; size: number; speed: number; sway: number; rotation: number; rotationSpeed: number; opacity: number; }

export const TetEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frame = 0;
    let petals: Petal[] = [];
    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      petals = Array.from({ length: Math.min(70, Math.floor(window.innerWidth / 18)) }, () => ({
        x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
        size: Math.random() * 7 + 4, speed: Math.random() * .55 + .25, sway: Math.random() * 6,
        rotation: Math.random() * Math.PI, rotationSpeed: (Math.random() - .5) * .025, opacity: Math.random() * .5 + .25,
      }));
    };
    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      petals.forEach((petal) => {
        petal.y += petal.speed; petal.x += Math.sin(petal.y * .012 + petal.sway) * .35; petal.rotation += petal.rotationSpeed;
        if (petal.y > window.innerHeight + 20) { petal.y = -20; petal.x = Math.random() * window.innerWidth; }
        context.save(); context.translate(petal.x, petal.y); context.rotate(petal.rotation); context.globalAlpha = petal.opacity;
        const gradient = context.createLinearGradient(0, -petal.size, 0, petal.size);
        gradient.addColorStop(0, "#ffe59a"); gradient.addColorStop(1, "#f05252");
        context.fillStyle = gradient; context.beginPath(); context.ellipse(0, 0, petal.size * .48, petal.size, 0, 0, Math.PI * 2); context.fill(); context.restore();
      });
      frame = requestAnimationFrame(draw);
    };
    resize(); draw(); window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div className="effect-scene effect-scene-tet fixed inset-0 z-0 overflow-hidden">
      <div className="tet-sun" />
      <div className="tet-disc tet-disc-a" />
      <div className="tet-disc tet-disc-b" />
      <div className="tet-knot tet-knot-left"><span /><span /><span /></div>
      <div className="tet-knot tet-knot-right"><span /><span /><span /></div>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="effect-label left-5 top-24">LUNAR SEASON / SƠN MÀI</div>
    </div>
  );
};
