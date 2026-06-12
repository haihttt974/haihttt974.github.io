import { useEffect, useRef } from 'react';

interface Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  swing: number;
  swingSpeed: number;
  blur: number;
}

export const SnowEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize snowflakes
    const initSnowflakes = () => {
      const count = Math.min(150, Math.floor(window.innerWidth / 8));
      snowflakesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        swing: Math.random() * Math.PI * 2,
        swingSpeed: Math.random() * 0.02 + 0.01,
        blur: Math.random() * 1.8,
      }));
    };

    initSnowflakes();

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      snowflakesRef.current.forEach((flake) => {
        flake.y += flake.speed;
        flake.swing += flake.swingSpeed;
        flake.x += Math.sin(flake.swing) * 0.5;

        if (flake.y > window.innerHeight) {
          flake.y = -10;
          flake.x = Math.random() * window.innerWidth;
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.shadowBlur = flake.blur * 5;
        ctx.shadowColor = 'rgba(180, 225, 255, .8)';
        ctx.fillStyle = `rgba(240, 250, 255, ${flake.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-30"
      style={{ opacity: 0.9 }}
    />
  );
};
