import React, { useRef, useEffect } from 'react';

interface GameCanvasProps {
  onPassColumn: () => void;
  onGameOver: () => void;
  onCollectItem: () => void;
  isPaused: boolean;
  setGameRef: (ref: any) => void;
  score: number;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({ onPassColumn, onGameOver, onCollectItem, isPaused, setGameRef, score }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const jumpRef = useRef<() => void>(() => {});
  const scoreRef = useRef(score);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);
  
  // Persistent state
  const birdY = useRef(0);
  const birdVelocity = useRef(0);
  const columns = useRef<{ x: number; gapY: number }[]>([]);
  const items = useRef<{ x: number; y: number; type: 'stamina' }[]>([]);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      if (birdY.current === 0) birdY.current = canvas.height / 2;
      if (columns.current.length === 0) columns.current = [{ x: canvas.width / 2, gapY: canvas.height / 2 }];
    };
    
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    // Tuned physics
    const gravity = 0.001; // Slightly reduced gravity
    const jumpForce = -0.22; // Slightly reduced jump force
    const baseColumnSpeed = 0.12; // Slightly reduced base speed
    const minColumnDistance = 400; // Increased minimum distance between columns
    
    let animationId: number;

    const gameLoop = (currentTime: number) => {
      if (isPaused) {
        lastTime.current = currentTime;
        animationId = requestAnimationFrame(gameLoop);
        return;
      }

      const dt = currentTime - lastTime.current;
      lastTime.current = currentTime;
      
      // Difficulty progression: very slow increase
      const columnSpeed = baseColumnSpeed + (scoreRef.current * 0.005);

      // Physics
      birdVelocity.current += gravity * dt;
      birdY.current += birdVelocity.current * dt;

      // Draw
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Bird
      ctx.fillStyle = 'yellow';
      ctx.beginPath();
      ctx.arc(65, birdY.current + 15, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Eye
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(72, birdY.current + 10, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(74, birdY.current + 10, 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Beak
      ctx.fillStyle = 'orange';
      ctx.beginPath();
      ctx.moveTo(80, birdY.current + 15);
      ctx.lineTo(90, birdY.current + 20);
      ctx.lineTo(80, birdY.current + 25);
      ctx.fill();

      // Columns
      ctx.fillStyle = 'green';
      columns.current.forEach(col => {
        col.x -= columnSpeed * dt;
        const gapSize = 180; // Increased gap size for easier passage
        ctx.fillRect(col.x, 0, 50, col.gapY - gapSize / 2);
        ctx.fillRect(col.x, col.gapY + gapSize / 2, 50, canvas.height - col.gapY - gapSize / 2);

        if (50 < col.x + 50 && 50 + 30 > col.x && (birdY.current < col.gapY - gapSize / 2 || birdY.current + 30 > col.gapY + gapSize / 2)) {
          onGameOver();
        }
        
        if (col.x <= 50 && col.x + columnSpeed * dt > 50) {
          onPassColumn();
        }
      });

      // Items
      ctx.fillStyle = 'gold';
      items.current.forEach((item, index) => {
        item.x -= columnSpeed * dt;
        ctx.beginPath();
        ctx.arc(item.x, item.y, 10, 0, Math.PI * 2);
        ctx.fill();

        // Collision
        if (Math.abs(item.x - 65) < 25 && Math.abs(item.y - (birdY.current + 15)) < 25) {
          items.current.splice(index, 1);
          onCollectItem();
        }
      });

      // Add column with increased distance
      if (columns.current.length === 0 || columns.current[columns.current.length - 1].x < canvas.width - minColumnDistance) {
        columns.current.push({ x: canvas.width, gapY: Math.random() * (canvas.height - 300) + 150 });
      }
      
      // Add item
      if (Math.random() < 0.01) {
        items.current.push({ x: canvas.width, y: Math.random() * canvas.height, type: 'stamina' });
      }
      
      // Remove off-screen
      if (columns.current[0].x < -50) columns.current.shift();
      items.current = items.current.filter(item => item.x > -20);

      // Floor/Ceiling
      if (birdY.current > canvas.height || birdY.current < 0) onGameOver();

      animationId = requestAnimationFrame(gameLoop);
    };

    animationId = requestAnimationFrame(gameLoop);
    const jump = () => (birdVelocity.current = jumpForce);
    const reset = () => {
        birdY.current = canvas.height / 2;
        birdVelocity.current = 0;
        columns.current = [];
        items.current = [];
    };
    setGameRef({ jump, reset });
    jumpRef.current = jump;

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [isPaused, onGameOver, onPassColumn, setGameRef]);

  return (
    <div ref={containerRef} className="w-full h-full bg-sky-200 border-4 border-slate-800 rounded-xl overflow-hidden cursor-pointer" 
         onClick={() => jumpRef.current()}
         onTouchStart={(e) => { e.preventDefault(); jumpRef.current() }}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
