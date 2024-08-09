"use client";

import Image from "next/image";
import { easeInOut, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IFooterProps {}

export function Footer({}: IFooterProps) {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-black lg:h-[410px] lg:gap-[66px] xl:h-[513px] xl:gap-[82px] 2xl:h-[616px] 2xl:gap-[99px] 3xl:h-[770px] 3xl:gap-[124px]">
        <div className="flex flex-col gap-5">
          <Image
            src="/logo.png"
            width={248}
            height={27}
            alt="atmosphere-logo"
            className=""
          />
          <Image
            src="/logo-2.png"
            width={248}
            height={27}
            alt="atmosphere-logo"
            className=""
          />
          <Image
            src="/logo-3.png"
            width={248}
            height={27}
            alt="atmosphere-logo"
            className=""
          />
        </div>

        <ul className="flex lg:gap-[64px] xl:gap-[80px] 2xl:gap-[86px] 3xl:gap-[120px]">
          <motion.li
            transition={{ duration: 0.5 }}
            whileHover={{ borderBottom: "3px solid", borderColor: "#f35937" }}
            className="mb-[5px] text-lg font-medium text-white"
          >
            Início
          </motion.li>
          <motion.li
            transition={{ duration: 0.5, ease: easeInOut }}
            whileHover={{ borderBottom: "3px solid", borderColor: "#f35937" }}
            className="mb-[5px] text-lg font-medium text-white"
          >
            Marcas
          </motion.li>
          <motion.li
            transition={{ duration: 0.5 }}
            whileHover={{ borderBottom: "3px solid", borderColor: "#f35937" }}
            className="mb-[5px] text-lg font-medium text-white"
          >
            Blog
          </motion.li>
          <motion.li
            transition={{ duration: 0.5 }}
            whileHover={{ borderBottom: "3px solid", borderColor: "#f35937" }}
            className="mb-[5px] text-lg font-medium text-white"
          >
            Galeria
          </motion.li>
          <motion.li
            transition={{ duration: 0.5 }}
            whileHover={{ borderBottom: "3px solid", borderColor: "#f35937" }}
            className="mb-[5px] text-lg font-medium text-white"
          >
            Contato
          </motion.li>
        </ul>
      </div>
    </>
  );
}
