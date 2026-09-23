import React, { useEffect, useRef } from 'react';

export const Ambient3DGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Track mouse & touch
    let mouseX = width / 2;
    let mouseY = height / 2;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Generate 3D grid points (optimized count on mobile)
    interface Point3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      size: number;
      opacity: number;
    }

    const points: Point3D[] = [];
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 36 : 75; // optimized lightweight count for mobile
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * width * 1.5;
      const y = (Math.random() - 0.5) * height * 1.5;
      const z = Math.random() * 800 + 200;
      points.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.15,
      });
    }

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += prefersReducedMotion ? 0 : 0.005;

      const fov = 400;
      const cx = width / 2;
      const cy = height / 2;

      // Mouse influence
      const targetOffX = (mouseX - cx) * 0.08;
      const targetOffY = (mouseY - cy) * 0.08;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        if (!prefersReducedMotion) {
          p.z -= 0.6;
          if (p.z <= 50) {
            p.z = 1000;
          }
        }

        const scale = fov / (fov + p.z);
        const projX = cx + (p.baseX + targetOffX) * scale;
        const projY = cy + (p.baseY + targetOffY) * scale;

        if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
          const alpha = p.opacity * scale * 1.2;
          ctx.beginPath();
          ctx.arc(projX, projY, p.size * scale * 1.5, 0, Math.PI * 2);

          // Alternating subtle orange and warm white particles
          if (i % 3 === 0) {
            ctx.fillStyle = `rgba(250, 132, 45, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
          }
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 opacity-50 sm:opacity-60"
      aria-hidden="true"
    />
  );
};
