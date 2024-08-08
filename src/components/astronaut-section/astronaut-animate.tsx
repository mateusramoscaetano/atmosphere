import { useMotionValue, useSpring, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface IAstronautAnimateProps {}

const settings = {
  damping: 100,
  stiffness: 400,
  maxDistance: 4000,
  intensity: 0.1,
};

export function AstronautAnimate({}: IAstronautAnimateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const componentRef = useRef<HTMLDivElement>(null);

  const springConfig = {
    damping: settings.damping,
    stiffness: settings.stiffness,
  };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const calculateDistance = (e: MouseEvent) => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = centerX - e.clientX; // Invertendo a direção
        const distanceY = centerY - e.clientY; // Invertendo a direção

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

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      calculateDistance(e);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        ref={componentRef}
        style={{
          x: springX,
          y: springY,
          zIndex: 50,
        }}
        className="flex w-full items-center justify-center"
      >
        <Image
          src="/astro.png"
          width={675}
          height={831}
          alt="astronaut"
          className="lg:h-[443px] lg:w-[360px] xl:h-[554px] xl:w-[450px] 2xl:h-[664px] 2xl:w-[540px] 3xl:h-[831px] 3xl:w-[675px]"
        />
      </motion.div>
    </>
  );
}
