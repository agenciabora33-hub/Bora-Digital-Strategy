import React, { useState, useRef, useCallback } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // max tilt angle in degrees (default 10)
  glare?: boolean;
  scale?: number; // hover scale (default 1.02)
  depth?: number; // translateZ in px (default 20)
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  intensity = 8,
  glare = true,
  scale = 1.015,
  depth = 16,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && (window.innerWidth < 768 || window.matchMedia('(hover: none)').matches)) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale}) translateZ(${depth}px)`
    );

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlarePosition({ x: glareX, y: glareY, opacity: 0.18 });
    }
  }, [intensity, scale, depth, glare]);

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && (window.innerWidth < 768 || window.matchMedia('(hover: none)').matches)) return;
    setIsHovered(true);
  };

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
        transformStyle: 'preserve-3d',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* Dynamic 3D specular light glare */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 320px at ${glarePosition.x}% ${glarePosition.y}%, rgba(250, 132, 45, 0.35), rgba(255, 255, 255, 0.08) 35%, transparent 80%)`,
          }}
        />
      )}
    </div>
  );
};
