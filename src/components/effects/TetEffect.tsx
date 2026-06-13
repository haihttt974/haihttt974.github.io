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
      petals = Array.from({ length: Math.min(52, Math.floor(window.innerWidth / 24)) }, (_, index) => ({
        x: index % 2 ? Math.random() * window.innerWidth * .22 : window.innerWidth * (.78 + Math.random() * .22),
        y: Math.random() * window.innerHeight, size: Math.random() * 5 + 2,
        speed: Math.random() * .6 + .25, sway: Math.random() * 8, rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - .5) * .025, opacity: Math.random() * .5 + .3,
      }));
    };
    const firework = () => {
      const x = Math.random() > .5 ? window.innerWidth * .12 : window.innerWidth * .88; const y = window.innerHeight * (.1 + Math.random() * .16);
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
        if (petal.y > window.innerHeight + 20) {
          petal.y = -20;
          petal.x = Math.random() > .5 ? Math.random() * window.innerWidth * .22 : window.innerWidth * (.78 + Math.random() * .22);
        }
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
      <div className="tet-vietnam-frame" />
      <div className="tet-corner tet-corner-dao">
        <div className="tet-border-branch">{Array.from({ length: 13 }, (_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}</div>
        <div className="tet-viet-lantern"><span>An</span><i /></div>
      </div>
      <div className="tet-corner tet-corner-mai">
        <div className="tet-border-branch">{Array.from({ length: 13 }, (_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}</div>
        <div className="tet-viet-lantern"><span>Vui</span><i /></div>
      </div>
      <div className="tet-side-couplet tet-side-couplet-left"><i /><span><em>Xuân</em><em>sang</em><em>phúc</em><em>lộc</em><em>tràn</em><em>muôn</em><em>ngả</em></span><b /><strong>An</strong></div>
      <div className="tet-side-couplet tet-side-couplet-right"><i /><span><em>Tết</em><em>đến</em><em>an</em><em>khang</em><em>rạng</em><em>khắp</em><em>nhà</em></span><b /><strong>Xuân</strong></div>
      <div className="tet-bottom tet-bottom-left">
        <div className="tet-banh-chung"><i /><span /><b /></div>
        <div className="tet-banh-tet"><i /><span /><b /></div>
        <div className="tet-watermelon"><i /></div>
        <div className="tet-envelope"><i /><span>Lộc</span><b /></div>
      </div>
      <div className="tet-bottom tet-bottom-right">
        <div className="tet-quat">{Array.from({ length: 11 }, (_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}</div>
        <div className="tet-dongson"><i /><span /><b /></div>
      </div>
      <div className="tet-top-knot tet-top-knot-a"><i /></div><div className="tet-top-knot tet-top-knot-b"><i /></div>
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="effect-label left-5 top-24">TẾT VIỆT / BÌNH AN</div>
    </div>
  );
};
