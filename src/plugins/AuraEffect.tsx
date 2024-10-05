import React, { useState, useEffect } from 'react';

const AuraEffect: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    setPosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">

      {/* Aura effect */}
      {position && (
        <div
          className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            width: '1200px',  // Larger radius for the effect
            height: '1200px',
            background: 'radial-gradient(circle, rgba(232, 232, 232, 0.1) 5%, rgba(232, 232, 232, 0.08) 10%, rgba(232, 232, 232, 0.06) 20%, rgba(232, 232, 232, 0.04) 30%, rgba(232, 232, 232, 0.02) 40%, rgba(232, 232, 232, 0.01) 50%, rgba(232, 232, 232, 0) 60%',
            borderRadius: '50%',
          }}
        />
      )}
    </div>
  );
};

export default AuraEffect;
