"use client";
import { ReactNode, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const settings = {
  damping: 100,
  stiffness: 400,
  maxDistance: 4000,
  intensity: 0.1,
};

export const WithCursorFollow = ({ children, zIndex, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const componentRef = useRef(null);

  const springConfig = {
    damping: settings.damping,
    stiffness: settings.stiffness,
  };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const calculateDistance = (e) => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        if (
          Math.abs(distanceX) < settings.maxDistance &&
          Math.abs(distanceY) < settings.maxDistance
        ) {
          const proximityFactor =
            1 -
            Math.max(Math.abs(distanceX), Math.abs(distanceY)) /
              settings.maxDistance;
          x.set(distanceX * proximityFactor * settings.intensity);
          y.set(distanceY * proximityFactor * settings.intensity);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    const handleMouseMove = (e) => {
      calculateDistance(e);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={componentRef}
      style={{
        x: springX,
        y: springY,
        zIndex: zIndex ?? 2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
