import { useEffect, useRef } from "react";

interface Snowflake {
  x: number;
  y: number;
  depth: number;
  size: number;
  speed: number;
  opacity: number;
  swing: number;
  swingSpeed: number;
  blur: number;
  rotation: number;
  rotationSpeed: number;
  crystal: boolean;
}

export const SnowEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let gustStart = performance.now() + 5000 + Math.random() * 5000;
    let gustStrength = 0;

    const initSnowflakes = () => {
      const count = Math.min(190, Math.floor(width / 6));
      snowflakesRef.current = Array.from({ length: count }, (_, index) => {
        const depth = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          depth,
          size: 0.7 + depth * 2.5,
          speed: 0.3 + depth * 1.1,
          opacity: 0.12 + depth * 0.36,
          swing: Math.random() * Math.PI * 2,
          swingSpeed: Math.random() * 0.018 + 0.006,
          blur: (1 - depth) * 1.8,
          rotation: Math.random() * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.012,
          crystal: index % 17 === 0,
        };
      });
    };

    const resizeCanvas = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      initSnowflakes();
    };

    const drawCrystal = (flake: Snowflake) => {
      ctx.save();
      ctx.translate(flake.x, flake.y);
      ctx.rotate(flake.rotation);
      ctx.strokeStyle = `rgba(235, 249, 255, ${flake.opacity * 0.72})`;
      ctx.lineWidth = 0.45;
      for (let arm = 0; arm < 6; arm += 1) {
        ctx.rotate(Math.PI / 3);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -flake.size * 2.4);
        ctx.moveTo(0, -flake.size * 1.3);
        ctx.lineTo(flake.size * 0.65, -flake.size * 1.8);
        ctx.moveTo(0, -flake.size * 1.3);
        ctx.lineTo(-flake.size * 0.65, -flake.size * 1.8);
        ctx.stroke();
      }
      ctx.restore();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      if (now > gustStart) {
        const gustAge = now - gustStart;
        gustStrength = gustAge < 3500 ? Math.sin((gustAge / 3500) * Math.PI) * 3.2 : 0;
        if (gustAge >= 3500) gustStart = now + 9000 + Math.random() * 9000;
      }

      snowflakesRef.current.forEach((flake) => {
        flake.y += flake.speed + gustStrength * 0.08;
        flake.swing += flake.swingSpeed;
        flake.rotation += flake.rotationSpeed;
        flake.x += Math.sin(flake.swing) * (0.18 + flake.depth * 0.35) + gustStrength * (0.25 + flake.depth * 0.75);

        if (flake.y > height + 12) {
          flake.y = -12;
          flake.x = Math.random() * width;
        }
        if (flake.x > width + 15) flake.x = -15;

        ctx.shadowBlur = flake.blur * 5;
        ctx.shadowColor = "rgba(180, 225, 255, .55)";
        if (flake.crystal) {
          drawCrystal(flake);
        } else {
          ctx.beginPath();
          ctx.ellipse(flake.x, flake.y, flake.size * (1 + gustStrength * 0.08), flake.size, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(240, 250, 255, ${flake.opacity})`;
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-30 opacity-[.72]" />;
};
