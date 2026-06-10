"use client";

import { useEffect, useRef } from "react";

/**
 * An animated crystalline "alloy lattice" — a drifting constellation of nodes
 * connected by lines that brighten with proximity, with a few warm "molten"
 * nodes. Stands in for hero photography and nods to Stellite's alloy structure.
 * Mouse-reactive, DPR-aware, and disabled under prefers-reduced-motion.
 */
export default function LatticeCanvas({
  className = "",
  density = 0.00009,
}: {
  className?: string;
  density?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      warm: boolean;
    };
    let nodes: Node[] = [];

    const pointer = { x: -9999, y: -9999, active: false };

    const seed = () => {
      const count = Math.max(
        26,
        Math.min(90, Math.floor(width * height * density))
      );
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6,
        warm: i % 13 === 0,
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const LINK = 150;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        // gentle pull toward pointer
        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 220 * 220) {
            const f = (1 - Math.sqrt(d2) / 220) * 0.4;
            n.vx += (dx / (Math.sqrt(d2) + 0.001)) * f * 0.06;
            n.vy += (dy / (Math.sqrt(d2) + 0.001)) * f * 0.06;
          }
        }

        // damp + wrap
        n.vx *= 0.99;
        n.vy *= 0.99;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            const alpha = (1 - dist / LINK) * 0.5;
            const warm = a.warm || b.warm;
            ctx.strokeStyle = warm
              ? `rgba(255, 159, 77, ${alpha * 0.7})`
              : `rgba(122, 146, 255, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const glow = n.warm ? "rgba(255, 159, 77, 1)" : "rgba(160, 178, 255, 1)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.shadowBlur = n.warm ? 14 : 8;
        ctx.shadowColor = n.warm
          ? "rgba(255, 159, 77, 0.9)"
          : "rgba(110, 139, 255, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    if (reduced) {
      draw();
      cancelAnimationFrame(raf);
      // single static frame
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  );
}
