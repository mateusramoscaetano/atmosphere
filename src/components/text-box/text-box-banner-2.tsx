"use client";
import { scrollToSection } from "@/utils/ScrollToSection";
import { motion } from "framer-motion";
import { ButtonBanner1 } from "../buttons/button-banner-1";
import cn from "@/utils/cn";

interface ITextBoxBanner2Props {}

export function TextBoxBanner2({}: ITextBoxBanner2Props) {
  const selectSection = (sectionId: string, offset = 0) => {
    scrollToSection(sectionId, offset);
  };
  return (
    <div className="absolute mx-auto w-full lg:top-[194px] lg:ml-[373px] xl:top-[242px] xl:ml-[466px] 2xl:top-[291px] 2xl:ml-[560px] 3xl:top-[364px] 3xl:ml-[700px]">
      <div className="mb-4 font-superline text-white lg:h-[90px] lg:w-[212px] lg:text-[42px] lg:leading-[45px] xl:h-[113px] xl:w-[265px] xl:text-[53px] xl:leading-[56px] 2xl:h-[136px] 2xl:w-[318px] 2xl:text-[64px] 2xl:leading-[68px] 3xl:h-[170px] 3xl:w-[398px] 3xl:text-[80px] 3xl:leading-[85px]">
        a voz de uma geração <br /> e a expressão do agora
      </div>
      <div className="mb-[40px] text-white lg:h-[15px] lg:w-[169px] lg:text-[8.5px] xl:h-[19px] xl:w-[212px] xl:text-[10.6px] 2xl:h-[23px] 2xl:w-[254px] 2xl:text-[12.8px] 3xl:h-[29px] 3xl:w-[318px] 3xl:text-[16px]">
        Somos a Atmosfera e essa é a nossa voz!
      </div>
      <motion.button
        className={cn("h-[60px] w-[209px] bg-[#0F4AE4] px-2 text-white")}
        whileHover={{
          scale: 1.2,
        }}
        transition={{ duration: 0.3 }}
        onClick={() => selectSection("second", 200)}
      >
        Conheça Nossas Marcas
      </motion.button>
    </div>
  );
}
