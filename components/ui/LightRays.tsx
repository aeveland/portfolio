"use client"

import { useEffect, useRef, FC, useState } from 'react';

interface LightRaysProps {
  className?: string;
  parallaxSpeed?: number;
}

export const LightRays: FC<LightRaysProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Light ray settings
    const settings = {
      rayCount: 12,
      raySpeed: 0.3,
      rayOpacity: 0.7,
      rayWidth: 3,
      centerX: 0.5,
      centerY: -0.2,
      colors: ['#4f46e5', '#7c3aed', '#ec4899', '#f59e0b']
    };

    class LightRay {
      angle: number;
      length: number;
      opacity: number;
      color: string;
      speed: number;
      direction: number;

      constructor(index: number) {
        this.angle = Math.random() * Math.PI * 2; // Completely random starting angle
        this.length = Math.random() * 1.2 + 0.8;
        this.opacity = Math.random() * settings.rayOpacity + 0.2;
        this.color = settings.colors[Math.floor(Math.random() * settings.colors.length)];
        this.speed = Math.random() * settings.raySpeed * 2 + 0.05; // More varied speed range
        this.direction = Math.random() > 0.5 ? 1 : -1; // Random clockwise or counterclockwise
      }

      update(deltaTime: number) {
        this.angle += this.speed * this.direction * deltaTime * 0.0005; // Slowed down by 50%
        this.opacity = Math.sin(time * 0.001 + this.angle) * 0.2 + 0.5; // Slowed down opacity animation too
      }

      draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
        const centerX = width * settings.centerX;
        const centerY = height * settings.centerY;
        const maxRadius = Math.max(width, height);

        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = settings.rayWidth;
        ctx.lineCap = 'round';

        // Create gradient for the ray
        const gradient = ctx.createLinearGradient(
          centerX,
          centerY,
          centerX + Math.cos(this.angle) * maxRadius * this.length,
          centerY + Math.sin(this.angle) * maxRadius * this.length
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = gradient;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 55;
        ctx.filter = 'blur(3px)';

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + Math.cos(this.angle) * maxRadius * this.length,
          centerY + Math.sin(this.angle) * maxRadius * this.length
        );
        ctx.stroke();
        ctx.restore();
      }
    }

    const rays: LightRay[] = [];

    // Initialize rays
    for (let i = 0; i < settings.rayCount; i++) {
      rays.push(new LightRay(i));
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - time;
      time = currentTime;

      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas with dark background
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Update and draw rays
      rays.forEach(ray => {
        ray.update(deltaTime);
        ray.draw(ctx, width, height);
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
    };

    // Initialize
    resize();
    animate(0);

    // Event listeners
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMounted]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            background: 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 70%, #020617 100%)',
          }}
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 70%, #020617 100%)',
          touchAction: 'none'
        }}
      />
    </div>
  );
};
