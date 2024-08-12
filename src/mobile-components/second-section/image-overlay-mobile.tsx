"use client";
import { ExploreButton } from "@/components/buttons/explore-button";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ReactNode, useRef } from "react";

interface ImageOverlayProps {
  imageUrl: string;
  text: ReactNode;
  text2: ReactNode;
}

const textMotion = {
  hidden: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const buttonMotion = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export function ImageOverlayMobile({
  imageUrl,
  text,
  text2,
}: ImageOverlayProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="group relative z-30 min-h-full overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Image
        src={imageUrl}
        width={640}
        height={446}
        alt="Background"
        className="min-h-full w-full overflow-hidden object-cover brightness-50 transition duration-300 ease-in-out"
      />

      <motion.div className="absolute inset-0 flex flex-col items-start justify-end p-10 text-white">
        <motion.div className="mb-2 text-[14px]" variants={textMotion}>
          {text}
        </motion.div>

        <motion.div
          className="mb-2 font-superline text-[30px]"
          variants={textMotion}
        >
          {text2}
        </motion.div>

        <motion.div
          className="flex items-end justify-start"
          variants={buttonMotion}
        >
          <ExploreButton color="yellow" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
