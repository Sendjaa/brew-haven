'use client';

import { useEffect, useRef } from 'react';

interface QRCodeMenuProps {
  url?: string;
  size?: number;
}

export function QRCodeMenu({ url = 'https://brew-haven.vercel.app/menu', size = 256 }: QRCodeMenuProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create a placeholder QR code (gradient square)
    canvas.width = size;
    canvas.height = size;

    // Fill with white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, size, size);

    // Add QR pattern (simplified representation)
    ctx.fillStyle = '#000';
    
    // Corner patterns
    const patternSize = size / 7;
    ctx.fillRect(0, 0, patternSize * 2, patternSize * 2);
    ctx.fillRect(size - patternSize * 2, 0, patternSize * 2, patternSize * 2);
    ctx.fillRect(0, size - patternSize * 2, patternSize * 2, patternSize * 2);

    // Timing patterns
    ctx.fillStyle = '#333';
    for (let i = 0; i < size; i += patternSize / 2) {
      ctx.fillRect(i, patternSize * 2.5, patternSize / 4, patternSize / 4);
      ctx.fillRect(patternSize * 2.5, i, patternSize / 4, patternSize / 4);
    }

    // Data area (simplified)
    ctx.fillStyle = '#444';
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (Math.random() > 0.5) {
          ctx.fillRect(
            patternSize * (3 + i),
            patternSize * (3 + j),
            patternSize / 2,
            patternSize / 2
          );
        }
      }
    }
  }, [size]);

  return (
    <div className="flex flex-col items-center">
      <div className="p-4 bg-white rounded-lg border-2 border-border">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          title={`QR Code for ${url}`}
        />
      </div>
      <p className="text-sm text-muted-foreground mt-4">
        Scan to view digital menu
      </p>
    </div>
  );
}
