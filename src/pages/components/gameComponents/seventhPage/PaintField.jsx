import { useRef, useState } from "react";

export function PaintField({ width, height, onFillChange }) {
  const canvasRef = useRef(null);
  const [isPainting, setIsPainting] = useState(false);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startPaint = (e) => {
    setIsPainting(true);
    const ctx = canvasRef.current.getContext('2d');
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const paint = (e) => {
    if (!isPainting) return;
    const ctx = canvasRef.current.getContext('2d');
    const { x, y } = getPos(e);
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#4ade80';
    ctx.lineTo(x, y);
    ctx.stroke();
    checkFillStatus();
  };

  const stopPaint = () => setIsPainting(false);

  const checkFillStatus = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    let filledPixels = 0;
    const total = canvas.width * canvas.height;

    //RGB --> A so (pixels + 3) just to get to A.
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] > 0) filledPixels++;
    }

    const percent = (filledPixels / total) * 100;
    const filled = percent >= 80;
    onFillChange(filled);
  }
  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onMouseDown={startPaint}
      onMouseMove={paint}
      onMouseUp={stopPaint}
      onMouseLeave={stopPaint}
      style={{ border: '1px solid var(--border)' }}
    />
  );
}