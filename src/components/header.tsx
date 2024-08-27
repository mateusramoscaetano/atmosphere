"use client";

import Image from "next/image";
import { easeInOut, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/ScrollToSection";

import { useRouter } from "next/navigation";
import cn from "@/utils/cn";

interface IHeaderProps {
  isOnBrandsPage: boolean;
}

export function Header({ isOnBrandsPage }: IHeaderProps) {
  const router = useRouter();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  const handleScrollToTop = () => {
    if (isOnBrandsPage) {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const selectSection = (sectionId: string, offset = 0) => {
    scrollToSection(sectionId, offset);
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
        className={cn(
          "2xl:[160px] fixed top-0 flex h-[120px] w-full items-start pt-[48px] backdrop-blur-[1px] lg:pl-[106px] xl:pl-[133px] 3xl:pl-[200px]",
          isOnBrandsPage
            ? "bg-black"
            : "bg-gradient-to-b from-black to-transparent",
        )}
      >
        <Image
          src="/logo.svg"
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
            className={cn(
              "mb-[5px] text-lg font-medium text-white",
              isOnBrandsPage ? "border-b-2 border-[#f35937]" : "",
            )}
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
