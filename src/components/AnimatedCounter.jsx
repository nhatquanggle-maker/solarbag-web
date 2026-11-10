import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter
 * Creates a dynamic scrambling/counting effect:
 * Rapidly jumps through dynamic numbers, then smoothly counts up and snaps to the target value.
 */
export default function AnimatedCounter({ value, duration = 1400, className = '' }) {
  const [display, setDisplay] = useState(value);
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef(null);

  const startAnimation = () => {
    setIsAnimating(true);

    const hasPlus = value.includes('+');
    const isTon = value.includes('Tấn');
    const isPercent = value.includes('%');
    
    // Parse numeric value
    let targetNum = 0;
    if (isTon) {
      const match = value.match(/[\d.]+/);
      targetNum = match ? parseFloat(match[0]) : 1.2;
    } else {
      const match = value.replace(/\./g, '').match(/\d+/);
      targetNum = match ? parseInt(match[0], 10) : 100;
    }

    const startTime = performance.now();
    const shuffleDuration = 450; // Jumps randomly for the first 450ms
    let animationFrame;

    const frame = (now) => {
      const elapsed = now - startTime;

      if (elapsed < shuffleDuration) {
        // Phase 1: Rapid shuffling/jumping random numbers
        if (isTon) {
          const rand = (Math.random() * 2.5).toFixed(1);
          setDisplay(`${rand} Tấn`);
        } else if (isPercent) {
          const rand = Math.floor(Math.random() * 100);
          setDisplay(`${rand}%`);
        } else {
          // generate random plausible number with similar magnitude
          const magnitude = Math.max(10, targetNum);
          const rand = Math.floor(Math.random() * (magnitude * 1.15));
          setDisplay(`${rand.toLocaleString('vi-VN')}${hasPlus ? '+' : ''}`);
        }
        animationFrame = requestAnimationFrame(frame);
      } else if (elapsed < duration) {
        // Phase 2: Smooth deceleration to exact target (easeOutExpo)
        const countProgress = (elapsed - shuffleDuration) / (duration - shuffleDuration);
        const ease = countProgress === 1 ? 1 : 1 - Math.pow(2, -10 * countProgress);

        if (isTon) {
          const current = (ease * targetNum).toFixed(1);
          setDisplay(`${current} Tấn`);
        } else if (isPercent) {
          const current = Math.round(ease * targetNum);
          setDisplay(`${current}%`);
        } else {
          const current = Math.round(ease * targetNum);
          setDisplay(`${current.toLocaleString('vi-VN')}${hasPlus ? '+' : ''}`);
        }
        animationFrame = requestAnimationFrame(frame);
      } else {
        // Phase 3: Final settle on exact target string
        setDisplay(value);
        setIsAnimating(false);
      }
    };

    animationFrame = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animationFrame);
  };

  useEffect(() => {
    const cancel = startAnimation();
    return () => {
      if (cancel) cancel();
    };
  }, [value]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => {
        if (!isAnimating) startAnimation();
      }}
      className={`inline-block tabular-nums select-none cursor-pointer transition-transform duration-200 active:scale-95 ${className}`}
      title="Bấm để nhảy lại số"
    >
      {display}
    </span>
  );
}
