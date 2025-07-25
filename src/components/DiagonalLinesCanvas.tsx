import { useEffect, useRef } from "react";

export default function DiagonalLinesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const container = canvas.parentElement;
    const w = (canvas.width = container?.clientWidth || window.innerWidth);
    const h = (canvas.height = container?.clientHeight || 600);

    const lines = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      length: Math.random() * 100 + 100,
      speed: Math.random() * 1 + 0.5,
      width: Math.random() * 1 + 0.3,
      color: `hsl(${Math.random() * 360}, 80%, 70%)`,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const line of lines) {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.length, line.y + line.length);
        ctx.stroke();

        line.y += line.speed;
        line.x += line.speed;

        if (line.y > h || line.x > w) {
          line.x = Math.random() * -200;
          line.y = Math.random() * -200;
        }
      }
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-[0.25] z-0 pointer-events-none"
    />
  );
}
