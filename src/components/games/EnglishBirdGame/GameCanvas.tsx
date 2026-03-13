import React, { useRef, useEffect } from 'react';

interface GameCanvasProps {
  onPassColumn: () => void;
  onGameOver: () => void;
  isPaused: boolean;
  setGameRef: (ref: any) => void;
  score: number;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({ onPassColumn, onGameOver, isPaused, setGameRef, score }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const jumpRef = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    let birdY = canvas.height / 2;
    let birdVelocity = 0;
    // Tuned physics for much easier experience
    const gravity = 0.0012; // Increased gravity for faster fall
    const jumpForce = -0.25;      // Further reduced jump force
    // Increase speed based on score
    const baseColumnSpeed = 0.1;
    const columnSpeed = baseColumnSpeed + (score * 0.01);
    let columns = [{ x: canvas.width, gapY: canvas.height / 2 }];
    let lastTime = performance.now();
    let animationId: number;

    const gameLoop = (currentTime: number) => {
      if (isPaused) {
        lastTime = currentTime;
        animationId = requestAnimationFrame(gameLoop);
        return;
      }

      const dt = currentTime - lastTime;
      lastTime = currentTime;

      // Physics
      birdVelocity += gravity * dt;
      birdY += birdVelocity * dt;

      // Draw
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Bird
      ctx.fillStyle = 'yellow';
      ctx.beginPath();
      ctx.arc(65, birdY + 15, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Eye
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(72, birdY + 10, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(74, birdY + 10, 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Beak
      ctx.fillStyle = 'orange';
      ctx.beginPath();
      ctx.moveTo(80, birdY + 15);
      ctx.lineTo(90, birdY + 20);
      ctx.lineTo(80, birdY + 25);
      ctx.fill();

      // Columns
      ctx.fillStyle = 'green';
      columns.forEach(col => {
        col.x -= columnSpeed * dt;
        // Increased gap size 
        const gapSize = 150;
        ctx.fillRect(col.x, 0, 50, col.gapY - gapSize / 2);
        ctx.fillRect(col.x, col.gapY + gapSize / 2, 50, canvas.height - col.gapY - gapSize / 2);

        // Collision
        if (50 < col.x + 50 && 50 + 30 > col.x && (birdY < col.gapY - gapSize / 2 || birdY + 30 > col.gapY + gapSize / 2)) {
          onGameOver();
        }
        
        // Pass column
        if (col.x <= 50 && col.x + columnSpeed * dt > 50) {
          onPassColumn();
        }
      });

      // Add column (based on time instead of frames)
      if (!columns.length || columns[columns.length - 1].x < canvas.width - 250) {
        columns.push({ x: canvas.width, gapY: Math.random() * (canvas.height - 200) + 100 });
      }
      
      // Remove off-screen columns
      if (columns[0].x < -50) columns.shift();

      // Floor/Ceiling
      if (birdY > canvas.height || birdY < 0) onGameOver();

      animationId = requestAnimationFrame(gameLoop);
    };

    animationId = requestAnimationFrame(gameLoop);
    const jump = () => (birdVelocity = jumpForce);
    setGameRef({ jump });
    jumpRef.current = jump;

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [isPaused, onGameOver, onPassColumn, setGameRef, score]);

  return (
    <div ref={containerRef} className="w-full h-full bg-sky-200 border-4 border-slate-800 rounded-xl overflow-hidden cursor-pointer" 
         onClick={() => jumpRef.current()}
         onTouchStart={(e) => { e.preventDefault(); jumpRef.current() }}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
