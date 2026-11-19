import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
}

export function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let particles: Particle[] = [];
    let animationId: number;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;

      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles(x: number, y: number) {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: 1,
          maxLife: Math.random() * 40 + 20,
        });
      }

      // Limita a quantidade de partículas
      if (particles.length > 200) {
        particles = particles.slice(-200);
      }
    }

    function handleMouseMove(event: MouseEvent) {
      createParticles(event.clientX, event.clientY);
    }

    function animate() {
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles = particles.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1 / particle.maxLife;

        const opacity = Math.max(0, particle.life);

        ctx!.beginPath();
        ctx!.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx!.fillStyle = `rgba(212, 175, 55, ${opacity})`;
        ctx!.shadowBlur = 10;
        ctx!.shadowColor = "#D4AF37";
        ctx!.fill();

        return particle.life > 0;
      });

      ctx!.shadowBlur = 0;
      animationId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}