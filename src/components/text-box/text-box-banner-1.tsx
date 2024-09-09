"use client";
import { scrollToSection } from "@/utils/ScrollToSection";
import { motion } from "framer-motion";

import cn from "@/utils/cn";
import { useStore } from "@/hooks/use-brands";

interface ITextBoxBanner1Props {}

export function TextBoxBanner1({}: ITextBoxBanner1Props) {
  const { toggleShow } = useStore();

  const selectSection = (sectionId: string, offset = 0) => {
    scrollToSection(sectionId, offset);
    setTimeout(() => {
      toggleShow();
    }, 1000);
  };
  return (
    <div className="absolute w-[1500px] lg:left-[189px] lg:top-[143px] xl:left-[237px] xl:top-[179px] 2xl:left-[284px] 2xl:top-[215px] 3xl:left-[356px] 3xl:top-[269px]">
      <div className="mb-4 font-superline text-white lg:h-[136px] lg:w-[261px] lg:text-[42px] lg:leading-[45px] xl:h-[170px] xl:w-[326px] xl:text-[53px] xl:leading-[56px] 2xl:h-[204px] 2xl:w-[392px] 2xl:text-[64px] 2xl:leading-[68px] 3xl:h-[255px] 3xl:w-[490px] 3xl:text-[80px] 3xl:leading-[85px]">
        UM HUB MULTISSOLUÇÕES PARA AS MULTINECESSIDADES DE QUEM ESTÁ NA
        FACULDADE
      </div>
      <div className="mb-[28px] text-white lg:h-[31px] lg:w-[336px] lg:text-[8.5px] xl:h-[39px] xl:w-[420px] xl:text-[10.6px] 2xl:h-[47px] 2xl:w-[504px] 2xl:text-[12.8px] 3xl:h-[59px] 3xl:w-[630px] 3xl:text-[16px]">
        Reunimos em um só lugar: clube de benefícios, app de pagamentos <br /> e
        arrecadação, ticketeira, produtora audiovisual, marketplace e festa.
        Muita festa.
      </div>

      <motion.button
        className={cn("h-[60px] w-[209px] bg-[#0F4AE4] px-2 text-white")}
        whileHover={{
          scale: 1.2,
        }}
        transition={{ duration: 0.3 }}
        onClick={() => {
          selectSection("second", 0);
        }}
      >
        Quero Saber Mais
      </motion.button>
    </div>
  );
}
