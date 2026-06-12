import { useEffect, useRef } from "react";

interface Petal { x: number; y: number; size: number; speed: number; sway: number; rotation: number; rotationSpeed: number; opacity: number; }
interface Spark { x: number; y: number; angle: number; radius: number; speed: number; alpha: number; color: string; }

export const TetEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frame = 0; let tick = 0; let petals: Petal[] = []; let sparks: Spark[] = [];
    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio; canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`; canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      petals = Array.from({ length: Math.min(85, Math.floor(window.innerWidth / 16)) }, () => ({
        x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, size: Math.random() * 7 + 3,
        speed: Math.random() * .6 + .25, sway: Math.random() * 8, rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - .5) * .025, opacity: Math.random() * .5 + .3,
      }));
    };
    const firework = () => {
      const x = window.innerWidth * (.2 + Math.random() * .6); const y = window.innerHeight * (.12 + Math.random() * .3);
      const color = Math.random() > .5 ? "#ffd36a" : "#ff7b69";
      sparks.push(...Array.from({ length: 28 }, (_, index) => ({ x, y, angle: index / 28 * Math.PI * 2, radius: 0, speed: Math.random() * 1.3 + .7, alpha: .75, color })));
    };
    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight); tick += 1;
      if (tick % 210 === 0) firework();
      sparks = sparks.filter((spark) => spark.alpha > .01);
      sparks.forEach((spark) => {
        spark.radius += spark.speed; spark.alpha *= .985;
        const x = spark.x + Math.cos(spark.angle) * spark.radius; const y = spark.y + Math.sin(spark.angle) * spark.radius + spark.radius * .08;
        context.beginPath(); context.arc(x, y, 1.2, 0, Math.PI * 2); context.fillStyle = spark.color; context.globalAlpha = spark.alpha; context.fill();
      });
      petals.forEach((petal) => {
        petal.y += petal.speed; petal.x += Math.sin(petal.y * .012 + petal.sway) * .38; petal.rotation += petal.rotationSpeed;
        if (petal.y > window.innerHeight + 20) { petal.y = -20; petal.x = Math.random() * window.innerWidth; }
        context.save(); context.translate(petal.x, petal.y); context.rotate(petal.rotation); context.globalAlpha = petal.opacity;
        const gradient = context.createLinearGradient(0, -petal.size, 0, petal.size);
        gradient.addColorStop(0, "#fff0a8"); gradient.addColorStop(.45, "#ffbf5a"); gradient.addColorStop(1, "#e85a55");
        context.fillStyle = gradient; context.beginPath(); context.ellipse(0, 0, petal.size * .5, petal.size, 0, 0, Math.PI * 2); context.fill(); context.restore();
      });
      context.globalAlpha = 1; frame = requestAnimationFrame(draw);
    };
    resize(); firework(); draw(); window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div className="effect-scene effect-scene-tet fixed inset-0 z-0 overflow-hidden">
      <div className="lacquer-glow" /><div className="lacquer-sun"><span>春</span></div>
      <div className="lacquer-mountain lacquer-mountain-back" /><div className="lacquer-mountain lacquer-mountain-front" />
      <div className="blossom-branch blossom-branch-left">{Array.from({ length: 9 }, (_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}</div>
      <div className="blossom-branch blossom-branch-right">{Array.from({ length: 7 }, (_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}</div>
      <div className="lunar-lantern lunar-lantern-a"><i /><span>福</span></div>
      <div className="lunar-lantern lunar-lantern-b"><i /><span>安</span></div>
      <div className="lunar-seal">HAI<br />IT</div>
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="effect-label left-5 top-24">LACQUER GARDEN / LUNAR SEASON</div>
    </div>
  );
};
