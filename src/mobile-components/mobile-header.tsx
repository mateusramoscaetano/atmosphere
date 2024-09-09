"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/ScrollToSection";
import cn from "@/utils/cn";
import Link from "next/link";
import { Social } from "@/components/social";

interface IMobileHeaderProps {}

export function MobileHeader({}: IMobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const selectSection = (sectionId: string, offset = 0) => {
    scrollToSection(sectionId, offset);
    setIsOpen(!setIsOpen);
  };

  return (
    <>
      <motion.div
        className={cn(
          "sticky top-0 z-50 flex h-[115px] w-full items-center justify-between px-10 transition-colors duration-500",
          {
            "bg-black": isOpen,
            "bg-gradient-to-b from-black to-transparent": !isOpen,
          },
        )}
      >
        <Image
          src="/logo-mobile.svg"
          width={36}
          height={39}
          alt="logo-mobile"
        />
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <X color="#fff" width={36} height={36} />
          ) : (
            <Menu color="#fff" width={36} height={36} />
          )}
        </button>
      </motion.div>

      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: isOpen ? 0 : "-100%", opacity: isOpen ? 1 : 0 }}
        transition={{
          stiffness: 200,
          damping: 1000,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="fixed left-0 top-0 z-40 mt-[40px] flex h-full w-full flex-col items-center justify-center bg-black"
      >
        <ul className="mb-[84px] space-y-[20px] text-center text-[18px] text-white">
          <li onClick={() => selectSection("home-mobile", 0)}>Início</li>
          <li onClick={() => selectSection("", 0)}>Sobre Nós</li>
          <li onClick={() => selectSection("our-brands-mobile", 100)}>
            Marcas
          </li>
          <li
            className="hidden"
            onClick={() => selectSection("how-to-mobile", 100)}
          >
            Blog
          </li>
          <li onClick={() => selectSection("gallery-mobile", 200)}>Galeria</li>
          <li onClick={() => selectSection("contact-mobile", 100)}>Contato</li>
        </ul>

        <div className="flex w-full items-end justify-center 3sm:gap-[30px]">
          <Social />
        </div>
      </motion.div>
    </>
  );
}
