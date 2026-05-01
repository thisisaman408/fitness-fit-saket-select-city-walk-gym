"use client";

import { useEffect, useRef } from "react";

// Cinematic red-lit grid + light beams + ember particles. Vanilla canvas keeps it light.
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const N_PARTICLES = window.innerWidth < 760 ? 28 : 60;
    const particles = Array.from({ length: N_PARTICLES }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 1.6,
      sp: 0.05 + Math.random() * 0.15,
      a: 0.2 + Math.random() * 0.5,
      hue: Math.random() < 0.3 ? 0 : 355,
    }));

    const drawGrid = () => {
      const horizon = h * 0.62;
      const vp = w / 2;
      ctx.save();
      const floorGrad = ctx.createLinearGradient(0, horizon, 0, h);
      floorGrad.addColorStop(0, "rgba(230,0,40,0.0)");
      floorGrad.addColorStop(0.6, "rgba(230,0,40,0.06)");
      floorGrad.addColorStop(1, "rgba(230,0,40,0.18)");
      ctx.fillStyle = floorGrad;
      ctx.fillRect(0, horizon, w, h - horizon);

      ctx.strokeStyle = "rgba(230,0,40,0.22)";
      ctx.lineWidth = 1;
      const cols = 22;
      for (let i = 0; i <= cols; i++) {
        const xEnd = (i / cols) * w * 2 - w * 0.5;
        ctx.beginPath();
        ctx.moveTo(vp, horizon);
        ctx.lineTo(xEnd, h + 30);
        ctx.stroke();
      }
      ctx.strokeStyle = "rgba(230,0,40,0.18)";
      const rows = 12;
      for (let j = 1; j <= rows; j++) {
        const p = j / rows;
        const easedP = Math.pow(p, 2.2);
        const y = horizon + easedP * (h - horizon);
        ctx.globalAlpha = 0.15 + easedP * 0.6;
        ctx.beginPath();
        ctx.moveTo(-w * 0.2, y);
        ctx.lineTo(w + w * 0.2, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    };

    const drawBeam = () => {
      const cx = w * 0.5 + Math.sin(t * 0.0006) * w * 0.18;
      ctx.save();
      ctx.translate(cx, -40);
      ctx.rotate(Math.sin(t * 0.0004) * 0.18);
      const beam = ctx.createLinearGradient(0, 0, 0, h * 1.1);
      beam.addColorStop(0, "rgba(255,40,69,0.30)");
      beam.addColorStop(0.4, "rgba(230,0,40,0.10)");
      beam.addColorStop(1, "rgba(230,0,40,0.0)");
      ctx.fillStyle = beam;
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(10, 0);
      ctx.lineTo(w * 0.7, h * 1.1);
      ctx.lineTo(-w * 0.7, h * 1.1);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.translate(w * 0.5 + Math.cos(t * 0.0005) * w * 0.25, -40);
      ctx.rotate(-Math.cos(t * 0.0004) * 0.22);
      const beam2 = ctx.createLinearGradient(0, 0, 0, h);
      beam2.addColorStop(0, "rgba(255,80,100,0.18)");
      beam2.addColorStop(1, "rgba(255,80,100,0)");
      ctx.fillStyle = beam2;
      ctx.beginPath();
      ctx.moveTo(-6, 0);
      ctx.lineTo(6, 0);
      ctx.lineTo(w * 0.4, h);
      ctx.lineTo(-w * 0.4, h);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawParticles = () => {
      for (const p of particles) {
        p.y -= p.sp / h;
        if (p.y < -0.05) {
          p.y = 1.05;
          p.x = Math.random();
        }
        const x = p.x * w;
        const y = p.y * h;
        ctx.beginPath();
        const grad = ctx.createRadialGradient(x, y, 0, x, y, p.r * 6);
        grad.addColorStop(0, `hsla(${p.hue},100%,65%,${p.a})`);
        grad.addColorStop(1, `hsla(${p.hue},100%,65%,0)`);
        ctx.fillStyle = grad;
        ctx.arc(x, y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawVignette = () => {
      const g = ctx.createRadialGradient(w / 2, h * 0.55, 0, w / 2, h * 0.55, Math.max(w, h) * 0.7);
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    };

    const frame = (now: number) => {
      t = now;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#06060A";
      ctx.fillRect(0, 0, w, h);
      drawGrid();
      drawBeam();
      drawParticles();
      drawVignette();
      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        opacity: 0.55,
        mixBlendMode: "screen",
      }}
    />
  );
}
