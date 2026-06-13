import { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  depth: number;
  phase: number;
}

interface Pulse {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

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
    let pulses: Pulse[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let tick = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const setScenePosition = () => {
      const normalizedX = pointer.x / width - 0.5;
      const normalizedY = pointer.y / height - 0.5;
      scene.style.setProperty("--mx", `${normalizedX}`);
      scene.style.setProperty("--my", `${normalizedY}`);
      scene.style.setProperty("--back-shift", `${normalizedX * -14}px`);
      scene.style.setProperty("--floor-shift", `${normalizedX * 24}px`);
      scene.style.setProperty("--hud-shift", `${normalizedY * 22}px`);
      scene.style.setProperty("--core-rx", `${-18 + normalizedY * -18}deg`);
      scene.style.setProperty("--core-ry", `${35 + normalizedX * 28}deg`);
      scene.style.setProperty("--scene-x", `${normalizedX * 20}px`);
      scene.style.setProperty("--scene-y", `${normalizedY * 14}px`);
      scene.style.setProperty("--scene-rx", `${normalizedY * -5}deg`);
      scene.style.setProperty("--scene-ry", `${normalizedX * 7}deg`);
      scene.style.setProperty("--far-x", `${normalizedX * 34}px`);
      scene.style.setProperty("--far-y", `${normalizedY * 20}px`);
      scene.style.setProperty("--near-x", `${normalizedX * -42}px`);
      scene.style.setProperty("--near-y", `${normalizedY * -28}px`);
      scene.style.setProperty("--panel-x", `${normalizedX * 28}px`);
      scene.style.setProperty("--panel-y", `${normalizedY * 18}px`);
      scene.style.setProperty("--panel-inverse-x", `${normalizedX * -32}px`);
      scene.style.setProperty("--panel-inverse-y", `${normalizedY * -20}px`);
      scene.style.setProperty("--px", `${pointer.x}px`);
      scene.style.setProperty("--py", `${pointer.y}px`);
    };

    const createNodes = () => {
      const count = Math.min(76, Math.max(34, Math.floor(width / 20)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        size: Math.random() * 1.35 + 0.45,
        depth: Math.random() * 0.75 + 0.25,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      pointer.x = pointer.targetX = width / 2;
      pointer.y = pointer.targetY = height / 2;
      createNodes();
      setScenePosition();
    };

    const move = (event: PointerEvent) => {
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
      pointer.active = true;
    };

    const leave = () => {
      pointer.targetX = width / 2;
      pointer.targetY = height / 2;
      pointer.active = false;
    };

    const pulse = (event: PointerEvent) => {
      pulses.push({ x: event.clientX, y: event.clientY, radius: 12, alpha: 0.38 });
      if (pulses.length > 4) pulses.shift();
    };

    const draw = () => {
      tick += 1;
      pointer.x += (pointer.targetX - pointer.x) * (reducedMotion ? 1 : 0.075);
      pointer.y += (pointer.targetY - pointer.y) * (reducedMotion ? 1 : 0.075);
      setScenePosition();
      context.clearRect(0, 0, width, height);
      context.lineWidth = 0.7;

      pulses = pulses.filter((item) => item.alpha > 0.012);
      pulses.forEach((item) => {
        item.radius += 1.8;
        item.alpha *= 0.975;
        context.beginPath();
        context.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
        context.strokeStyle = `rgba(145, 238, 255, ${item.alpha})`;
        context.stroke();
      });

      nodes.forEach((node, index) => {
        const dx = node.x - pointer.x;
        const dy = node.y - pointer.y;
        const pointerDistance = Math.max(1, Math.hypot(dx, dy));
        if (pointer.active && pointerDistance < 175) {
          const force = (1 - pointerDistance / 175) * 0.018 * node.depth;
          node.vx += (dx / pointerDistance) * force;
          node.vy += (dy / pointerDistance) * force;
        }

        node.vx *= 0.992;
        node.vy *= 0.992;
        if (!reducedMotion) {
          node.x += node.vx + Math.sin(tick * 0.006 + node.phase) * 0.035 * node.depth;
          node.y += node.vy + Math.cos(tick * 0.005 + node.phase) * 0.025 * node.depth;
        }

        if (node.x < -10) node.x = width + 10;
        if (node.x > width + 10) node.x = -10;
        if (node.y < -10) node.y = height + 10;
        if (node.y > height + 10) node.y = -10;

        const nodeAlpha = 0.2 + node.depth * 0.32;
        context.beginPath();
        context.arc(node.x, node.y, node.size * node.depth, 0, Math.PI * 2);
        context.fillStyle = `rgba(135, 228, 242, ${nodeAlpha})`;
        context.fill();

        for (let otherIndex = index + 1; otherIndex < nodes.length; otherIndex += 1) {
          const other = nodes[otherIndex];
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < 112) {
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(115, 220, 238, ${0.07 * (1 - distance / 112) * node.depth})`;
            context.stroke();
          }
        }

        if (pointerDistance < 220) {
          context.beginPath();
          context.moveTo(node.x, node.y);
          context.lineTo(pointer.x, pointer.y);
          context.strokeStyle = `rgba(185, 236, 150, ${0.16 * (1 - pointerDistance / 220) * node.depth})`;
          context.stroke();
        }
      });

      context.beginPath();
      context.arc(pointer.x, pointer.y, 30, 0, Math.PI * 2);
      context.strokeStyle = "rgba(150, 235, 245, .1)";
      context.stroke();

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", pulse, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", pulse);
    };
  }, []);

  return (
    <div ref={sceneRef} className="effect-scene effect-scene-3d fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="cyber-network absolute inset-0" />
      <div className="cyber-atmosphere cyber-atmosphere-a" />
      <div className="cyber-atmosphere cyber-atmosphere-b" />
      <div className="cyber-spotlight" />
      <div className="cyber-grid cyber-grid-back" />
      <div className="cyber-grid cyber-grid-floor" />
      <div className="cyber-observatory">
        <div className="cyber-orbit cyber-orbit-a"><i /><i /><i /></div>
        <div className="cyber-orbit cyber-orbit-b"><i /><i /></div>
        <div className="cyber-core">
          <div className="cyber-core-face cyber-core-front" /><div className="cyber-core-face cyber-core-back" />
          <div className="cyber-core-face cyber-core-left" /><div className="cyber-core-face cyber-core-right" />
          <div className="cyber-core-face cyber-core-top" /><div className="cyber-core-face cyber-core-bottom" />
          <div className="cyber-core-inner" />
        </div>
        <div className="cyber-portal cyber-portal-a" /><div className="cyber-portal cyber-portal-b" />
      </div>
      <div className="cyber-glass cyber-glass-a"><span>VECTOR</span><b>12.08</b><i /></div>
      <div className="cyber-glass cyber-glass-b"><span>ORBIT</span><b>STABLE</b><i /></div>
      <div className="cyber-hud cyber-hud-left"><span>SYS / DEPTH</span><b>03.24</b><i /></div>
      <div className="cyber-hud cyber-hud-right"><span>FIELD / LIVE</span><b>97.4%</b><i /></div>
      <div className="cyber-cursor-halo" />
      <div className="cyber-scanlines" />
      <div className="effect-label left-5 top-24">CYBER OBSERVATORY / INTERACTIVE</div>
    </div>
  );
};
