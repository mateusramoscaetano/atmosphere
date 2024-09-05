"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface IAstronautBannerMobileProps {}

export function AstronautBannerMobile({}: IAstronautBannerMobileProps) {
  return (
    <>
      <div className="relative flex min-h-full w-full items-center justify-center bg-black">
        <div className="overflow-hidden">
          <Image
            src="/banner-full.png"
            width={792}
            height={355}
            alt="astronaut banner"
            className="w-full scale-150 object-cover"
          />
        </div>
        <motion.img
          src="/astro.png"
          width={196}
          height={242}
          alt="astronaut banner"
          className="pointer-events-none absolute z-[200]" // z-index elevado para garantir que fique na frente
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  );
}
