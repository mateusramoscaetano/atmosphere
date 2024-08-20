"use client";

import Image from "next/image";
import { easeInOut, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/ScrollToSection";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface IHeaderProps {}

export function Header({}: IHeaderProps) {
  const router = useRouter();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1097);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous) {
      if (latest > previous && latest > 150) {
        setHidden(true);
        setShowDropdown(false);
      } else {
        setHidden(false);
      }
    }
  });

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0, zIndex: 250 },
          hidden: { y: "-100%", zIndex: 1 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="2xl:[160px] sticky top-0 flex h-[120px] w-full items-start bg-gradient-to-b from-black to-transparent pt-[48px] backdrop-blur-0 lg:pl-[106px] xl:pl-[133px] 3xl:pl-[200px]"
      >
        <Image
          src="/logo.png"
          width={178}
          height={20}
          alt="atmosphere-logo"
          className="cursor-pointer lg:mr-[112px] xl:mr-[140px] 2xl:mr-[168px] 3xl:mr-[211px]"
          onClick={handleScrollToTop}
        />
        <ul className="flex lg:gap-[64px] xl:gap-[80px] 2xl:gap-[86px] 3xl:gap-[120px]">
          <motion.li
            transition={{ duration: 0.5 }}
            whileHover={{
              borderBottom: "3px solid",
              borderColor: "#f35937",
              cursor: "pointer",
            }}
            className="mb-[5px] text-lg font-medium text-white"
            onClick={handleScrollToTop}
          >
            Início
          </motion.li>

          <motion.li
            transition={{ duration: 0.5, ease: easeInOut }}
            whileHover={{
              borderBottom: "3px solid",
              borderColor: "#f35937",
              cursor: "pointer",
            }}
            className="mb-[5px] text-lg font-medium text-white"
            onClick={() => selectSection("second", 200)}
          >
            Marcas
          </motion.li>

          <motion.li
            transition={{ duration: 0.5 }}
            whileHover={{
              borderBottom: "3px solid",
              borderColor: "#f35937",
              cursor: "pointer",
            }}
            className="mb-[5px] text-lg font-medium text-white"
            onClick={() => selectSection("how-to-made", 200)}
          >
            Blog
          </motion.li>
          <motion.li
            transition={{ duration: 0.5 }}
            whileHover={{
              borderBottom: "3px solid",
              borderColor: "#f35937",
              cursor: "pointer",
            }}
            className="mb-[5px] text-lg font-medium text-white"
            onClick={() => selectSection("gallery", 0)}
          >
            Galeria
          </motion.li>
          <motion.li
            transition={{ duration: 0.5 }}
            whileHover={{
              borderBottom: "3px solid",
              borderColor: "#f35937",
              cursor: "pointer",
            }}
            className="mb-[5px] text-lg font-medium text-white"
            onClick={() => selectSection("contact", 0)}
          >
            Contato
          </motion.li>
        </ul>
      </motion.div>
    </>
  );
}
