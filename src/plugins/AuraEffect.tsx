import React, { useState, useEffect } from 'react';

interface AuraEffectProps {
  children: React.ReactNode;
}

const AuraEffect: React.FC<AuraEffectProps> = ({children}) => {
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
    <div className="relative w-full h-screen overflow-hidden">

      {/* Aura effect */}
      {position && (
        <div
          className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            width: '1300px', 
            height: '1300px',
            background: 'radial-gradient(circle, rgba(135, 206, 235	, 0.1) 5%, rgba(135, 206, 235	, 0.08) 10%, rgba(135, 206, 235	, 0.06) 20%, rgba(135, 206, 235	, 0.04) 30%, rgba(135, 206, 235	, 0.02) 40%, rgba(135, 206, 235	, 0.01) 50%, rgba(135, 206, 235	, 0) 60%',
            borderRadius: '50%',
          }}
        />
      )}
      {children}
    </div>
  );
};

export default AuraEffect;
