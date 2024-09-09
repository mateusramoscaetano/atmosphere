"use client";
import { ButtonBanner1 } from "@/components/buttons/button-banner-1";
import cn from "@/utils/cn";
import { scrollToSection } from "@/utils/ScrollToSection";
import { motion } from "framer-motion";

interface IMobileTextBox2Props {}

export function MobileTextBox2({}: IMobileTextBox2Props) {
  const selectSection = (sectionId: string, offset = 0) => {
    scrollToSection(sectionId, offset);
  };
  return (
    <>
      <div className="absolute top-[250px] flex flex-col 3sm:left-10 2sm:left-12 sm:left-28 sm:flex md:left-48">
        <div className="mb-4 font-superline text-[40px] leading-[44px] text-white">
          A VOZ DE UMA <br />
          GERAÇÃO E A EXPRESSÃO <br /> DO AGORA
        </div>
        <div className="mb-4 text-[16px] text-white">
          Somos a Atmosfera e essa <br /> é a nossa voz!
        </div>

        <motion.button
          className={cn(
            "z-40 h-[46px] w-[194px] bg-[#0F4AE4] px-2 text-[14px] text-white",
          )}
          whileHover={{
            scale: 1.2,
          }}
          transition={{ duration: 0.3 }}
          onClick={() => selectSection("our-brands-mobile", 0)}
        >
          Conheça Nossas Marcas
        </motion.button>
      </div>
    </>
  );
}
