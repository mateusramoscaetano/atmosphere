import { useMotionValue, useSpring, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer"; // Importa useInView

const settings = {
  damping: 100,
  stiffness: 400,
  maxDistance: 4000,
  intensity: 0.1,
};

export function AstronautAnimate() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const componentRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: false, // Faz com que o efeito funcione enquanto o elemento está visível
    threshold: 0.1, // Define que pelo menos 10% do elemento precisa estar visível
  });

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

    const handleMouseMove = (e) => {
      if (inView) {
        calculateDistance(e);
      } else {
        x.set(0); // Reseta a posição quando o componente não está visível
        y.set(0);
      }
    };

    if (inView) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y, inView]);

  return (
    <motion.div
      ref={(node) => {
        ref(node); // Usa o ref do Intersection Observer
        componentRef.current = node;
      }}
      style={{
        x: springX,
        y: springY,
        zIndex: 100,
      }}
      className="absolute flex w-full items-center justify-center"
    >
      <Image
        src="/astro.png"
        width={675}
        height={831}
        alt="astronaut"
        className="lg:h-[443px] lg:w-[360px] xl:h-[554px] xl:w-[450px] 2xl:h-[664px] 2xl:w-[540px] 3xl:h-[831px] 3xl:w-[675px]"
      />
    </motion.div>
  );
}
