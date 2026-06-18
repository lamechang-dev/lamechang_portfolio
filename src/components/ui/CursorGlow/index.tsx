"use client";

import { useEffect, useRef } from "react";

type Props = {
  isDark?: boolean;
};

export const CursorGlow: React.FC<Props> = ({ isDark = false }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId = 0;

    const tick = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.08;
      currentY += dy * 0.08;
      el.style.setProperty("--x", `${currentX}px`);
      el.style.setProperty("--y", `${currentY}px`);
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const glowColor = isDark
    ? "rgba(2, 127, 163, 0.18)"
    : "rgba(3, 81, 105, 0.08)";

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), ${glowColor}, transparent 40%)`,
      }}
    />
  );
};
