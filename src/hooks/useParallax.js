import { useState, useEffect, useCallback } from 'react';

/**
 * useParallax - Subtle mouse-based parallax effect
 * Creates smooth, restrained depth movement based on mouse position
 * 
 * @param {number} intensity - Movement intensity (default: 0.02)
 * @param {boolean} enabled - Enable/disable effect (useful for mobile)
 * @returns {object} { x, y } transform values
 */
export function useParallax(intensity = 0.02, enabled = true) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!enabled) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate normalized position (-1 to 1)
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;

    // Apply intensity for subtle movement
    setPosition({
      x: x * intensity * 100,
      y: y * intensity * 100
    });
  }, [intensity, enabled]);

  useEffect(() => {
    if (!enabled) return;

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove, enabled]);

  return position;
}

/**
 * useParallaxElement - Parallax for specific element
 * Creates depth movement for individual elements
 * 
 * @param {number} intensity - Movement intensity (default: 10)
 * @param {boolean} enabled - Enable/disable effect
 * @returns {object} { ref, style } for the element
 */
export function useParallaxElement(intensity = 10, enabled = true) {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!enabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setTransform({
      x: x * (intensity / 100),
      y: y * (intensity / 100)
    });
  }, [intensity, enabled]);

  const handleMouseLeave = useCallback(() => {
    setTransform({ x: 0, y: 0 });
  }, []);

  return {
    transform,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
}
