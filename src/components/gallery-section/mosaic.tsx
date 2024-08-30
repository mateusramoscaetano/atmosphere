"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const imageMotion = {
  rest: {
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const filterMotion = {
  rest: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export function Mosaic() {
  return (
    <div className="z-20 grid h-full w-full grid-cols-4 grid-rows-3">
      <div className="relative col-span-2 row-span-2">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full overflow-hidden"
        >
          <motion.img
            src="/mosaic-1.png"
            alt="Image 1"
            className="h-full w-full object-cover"
            variants={imageMotion}
          />
          <motion.div
            variants={filterMotion}
            className="absolute inset-0 bg-[#0F4AE4]/60"
          />
        </motion.div>
      </div>
      <div className="relative col-start-1 row-start-3">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full overflow-hidden"
        >
          <motion.img
            src="/mosaic-2.png"
            alt="Image 2"
            className="h-full w-full object-cover"
            variants={imageMotion}
          />
          <motion.div
            variants={filterMotion}
            className="absolute inset-0 bg-[#F35937]/60"
          />
        </motion.div>
      </div>
      <div className="relative col-start-2 row-start-3">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full overflow-hidden"
        >
          <motion.img
            src="/mosaic-3.png"
            alt="Image 3"
            className="h-full w-full object-cover"
            variants={imageMotion}
          />
          <motion.div
            variants={filterMotion}
            className="absolute inset-0 bg-[#FDD000]/60"
          />
        </motion.div>
      </div>
      <div className="relative col-start-3 row-start-1">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full overflow-hidden"
        >
          <motion.img
            src="/mosaic-4.png"
            alt="Image 4"
            className="h-full w-full object-cover"
            variants={imageMotion}
          />
          <motion.div
            variants={filterMotion}
            className="absolute inset-0 bg-[#FDD000]/60"
          />
        </motion.div>
      </div>
      <div className="relative col-start-4 row-start-1">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full overflow-hidden"
        >
          <motion.img
            src="/mosaic-5.png"
            alt="Image 5"
            className="h-full w-full object-cover"
            variants={imageMotion}
          />
          <motion.div
            variants={filterMotion}
            className="absolute inset-0 bg-[#0F4AE4]/60"
          />
        </motion.div>
      </div>
      <div className="relative col-span-2 col-start-3 row-span-2 row-start-2">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full overflow-hidden"
        >
          <motion.img
            src="/mosaic-6.png"
            alt="Image 6"
            className="h-full w-full object-cover"
            variants={imageMotion}
          />
          <motion.div
            variants={filterMotion}
            className="absolute inset-0 bg-[#F35937]/60"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Mosaic;
