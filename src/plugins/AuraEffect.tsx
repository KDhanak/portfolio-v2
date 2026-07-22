import React, { useState, useEffect } from 'react';

const AuraEffect: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Only track the cursor on devices that actually have a fine pointer
    // (a mouse). On touch devices `mousemove` never fires, so we fall back
    // to a static centered glow instead of leaving the screen blank.
    const hasFinePointer =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches;

    if (!hasFinePointer) return;

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const glow =
    'radial-gradient(circle, rgba(232, 232, 232, 0.10) 5%, rgba(232, 232, 232, 0.08) 10%, rgba(232, 232, 232, 0.06) 20%, rgba(232, 232, 232, 0.04) 30%, rgba(232, 232, 232, 0.02) 40%, rgba(232, 232, 232, 0.01) 50%, rgba(232, 232, 232, 0) 60%)';

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          top: position ? `${position.y}px` : '50%',
          left: position ? `${position.x}px` : '50%',
          // Scale the glow down a touch on small screens so it doesn't wash
          // the whole viewport out.
          width: 'min(1200px, 150vw)',
          height: 'min(1200px, 150vw)',
          background: glow,
          borderRadius: '50%',
          transition: position ? 'none' : 'opacity 0.4s ease',
        }}
      />
    </div>
  );
};

export default AuraEffect;
