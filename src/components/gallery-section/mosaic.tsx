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
    <div className="grid grid-cols-4 grid-rows-3 overflow-hidden">
      <div className="relative col-span-2 row-span-2">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full"
        >
          <motion.img
            src="/mosaic-1.png"
            alt="Image 1"
            width={960}
            height={960}
            className="object-cover xl:h-[640px] xl:w-[640px] 3xl:h-[960px] 3xl:w-[960px]"
            variants={imageMotion}
          />
          <motion.div
            variants={filterMotion}
            className="absolute inset-0 bg-[#0F4AE4]/60"
          />
        </motion.div>
      </div>
      <div className="relative col-start-1 row-start-3 overflow-hidden">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full"
        >
          <motion.img
            src="/mosaic-2.png"
            alt="Image 2"
            width={491}
            height={491}
            className="object-cover xl:h-[320.66px] xl:w-[320.66px] 3xl:h-[481px] 3xl:w-[481px]"
            variants={imageMotion}
          />
          <motion.div
            variants={filterMotion}
            className="absolute inset-0 bg-[#F35937]/60"
          />
        </motion.div>
      </div>
      <div className="relative col-start-2 row-start-3 overflow-hidden">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full"
        >
          <motion.img
            src="/mosaic-3.png"
            alt="Image 3"
            width={491}
            height={491}
            className="object-cover xl:h-[320.66px] xl:w-[320.66px] 3xl:h-[481px] 3xl:w-[481px]"
            variants={imageMotion}
          />
          <motion.div
            variants={filterMotion}
            className="absolute inset-0 bg-[#FDD000]/60"
          />
        </motion.div>
      </div>
      <div className="relative col-start-3 row-start-1 overflow-hidden">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full"
        >
          <motion.img
            src="/mosaic-4.png"
            alt="Image 4"
            width={491}
            height={491}
            className="object-cover xl:h-[320.66px] xl:w-[320.66px] 3xl:h-[481px] 3xl:w-[481px]"
            variants={imageMotion}
          />
          <motion.div
            variants={filterMotion}
            className="absolute inset-0 bg-[#FDD000]/60"
          />
        </motion.div>
      </div>
      <div className="relative col-start-4 row-start-1 overflow-hidden">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full"
        >
          <motion.img
            src="/mosaic-5.png"
            alt="Image 5"
            width={491}
            height={491}
            className="object-cover xl:h-[320.66px] xl:w-[320.66px] 3xl:h-[481px] 3xl:w-[481px]"
            variants={imageMotion}
          />
          <motion.div
            variants={filterMotion}
            className="absolute inset-0 bg-[#0F4AE4]/60"
          />
        </motion.div>
      </div>
      <div className="relative col-span-2 col-start-3 row-span-2 row-start-2 overflow-hidden">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative h-full w-full"
        >
          <motion.img
            src="/mosaic-6.png"
            alt="Image 6"
            width={960}
            height={960}
            className="object-cover xl:h-[640px] xl:w-[640px] 3xl:h-[960px] 3xl:w-[960px]"
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
