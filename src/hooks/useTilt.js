import { useState, useCallback } from 'react';

/**
 * useTilt - Subtle 3D tilt effect for cards
 * Creates premium depth interaction on mouse movement
 * 
 * @param {number} maxTilt - Maximum tilt angle in degrees (default: 6)
 * @param {number} perspective - CSS perspective value (default: 1000)
 * @param {boolean} enabled - Enable/disable effect
 * @returns {object} { transform, style, onMouseMove, onMouseLeave }
 */
export function useTilt(maxTilt = 6, perspective = 1000, enabled = true) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!enabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    
    setRotate({ x: rotateX, y: rotateY });
  }, [maxTilt, enabled]);

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
  }, []);

  const transform = `perspective(${perspective}px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`;
  
  return {
    transform,
    rotate,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
}

/**
 * useTiltWithShadow - Tilt effect with dynamic shadow
 * Adds depth shadow that moves with the tilt
 * 
 * @param {number} maxTilt - Maximum tilt angle (default: 6)
 * @param {boolean} enabled - Enable/disable effect
 * @returns {object} { style, onMouseMove, onMouseLeave }
 */
export function useTiltWithShadow(maxTilt = 6, enabled = true) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!enabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    
    setRotate({ x: rotateX, y: rotateY });
  }, [maxTilt, enabled]);

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
  }, []);

  // Calculate shadow offset based on rotation
  const shadowX = rotateY * 2;
  const shadowY = -rotateX * 2;
  const shadowOpacity = 0.3 + (Math.abs(rotateX) + Math.abs(rotateY)) / 30;

  const style = {
    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
    boxShadow: `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, ${shadowOpacity})`,
    transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out'
  };

  return {
    style,
    rotate,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
}
