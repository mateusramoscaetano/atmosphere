import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import { ExploreButton } from "../buttons/explore-button";

interface ImageOverlayProps {
  imageUrl: string;
  text: ReactNode;
  text2: ReactNode;
}

const textMotion = {
  rest: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
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
  rest: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export function ImageOverlay({ imageUrl, text, text2 }: ImageOverlayProps) {
  return (
    <motion.div
      className="group relative w-1/3 overflow-hidden lg:h-[237px] xl:h-[297px] 2xl:h-[356px] 1650:h-[383px] 3xl:h-[446px]"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Image
        src={imageUrl}
        width={640}
        height={446}
        alt="Background"
        className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:brightness-50"
      />

      <motion.div className="absolute inset-0 flex flex-col items-start justify-end text-white opacity-0 group-hover:opacity-100 lg:mb-[32px] lg:px-[19px] lg:text-[12px] xl:mb-[32px] xl:px-[24px] xl:text-[12px] 2xl:mb-[38px] 2xl:px-[28px] 2xl:text-[14.4px] 3xl:mb-12 3xl:px-9 3xl:text-lg">
        <motion.div
          className="lg:mb-[10px] lg:leading-[13px] 2xl:mb-[12px] 2xl:leading-4 3xl:mb-4 3xl:leading-5"
          variants={textMotion}
        >
          {text}
        </motion.div>

        <motion.div
          className="font-superline lg:text-[36px] 2xl:text-[40px] 3xl:text-[50px]"
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
