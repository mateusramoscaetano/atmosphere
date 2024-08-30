"use client";

import Image from "next/image";
import {
  easeInOut,
  MotionConfig,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/ScrollToSection";
import Link from "next/link";
import { Social } from "./social";

interface IFooterProps {}

export function Footer({}: IFooterProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (showDropdown) {
      setShowDropdown(false);
    }
  };

  const selectSection = (sectionId: string, offset = 0) => {
    scrollToSection(sectionId, offset);
    setShowDropdown(!showDropdown);
  };

  const hover = {
    borderBottom: "3px solid",
    borderColor: "#f35937",
    cursor: "pointer",
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center lg:h-[410px] lg:gap-[66px] xl:h-[513px] xl:gap-[82px] 2xl:h-[616px] 2xl:gap-[99px] 3xl:h-[770px] 3xl:gap-[124px]">
        <div className="flex flex-col gap-5">
          <Image
            src="/Group.svg"
            width={248}
            height={27}
            alt="atmosphere-logo"
            className=""
          />
          <Image
            src="/logo-1.svg"
            width={248}
            height={27}
            alt="atmosphere-logo"
            className=""
          />
          <Image
            src="/logo-2.svg"
            width={248}
            height={27}
            alt="atmosphere-logo"
            className=""
          />
        </div>

        <ul className="flex h-[40px] w-full items-center justify-center lg:gap-[64px] xl:gap-[80px] 2xl:gap-[86px] 3xl:gap-[120px]">
          <MotionConfig transition={{ duration: 0.5, ease: easeInOut }}>
            <motion.li
              className="mb-[5px] text-lg font-medium text-white"
              onClick={handleScrollToTop}
              whileHover={hover}
            >
              Início
            </motion.li>
            <motion.li
              className="mb-[5px] text-lg font-medium text-white"
              onClick={() => selectSection("second", 200)}
              whileHover={hover}
            >
              Marcas
            </motion.li>
            <motion.li
              className="mb-[5px] text-lg font-medium text-white"
              onClick={() => selectSection("how-to-made", 200)}
              whileHover={hover}
            >
              Blog
            </motion.li>
            <motion.li
              className="mb-[5px] text-lg font-medium text-white"
              onClick={() => selectSection("gallery", 0)}
              whileHover={hover}
            >
              Galeria
            </motion.li>
            <motion.li
              className="mb-[5px] text-lg font-medium text-white"
              onClick={() => selectSection("contact", 0)}
              whileHover={hover}
            >
              Contato
            </motion.li>
          </MotionConfig>
        </ul>

        <div className="flex w-full items-end justify-center 3sm:gap-[30px]">
          <Social />
        </div>
      </div>
    </>
  );
}
