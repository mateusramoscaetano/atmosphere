"use client";
import { ButtonBanner1 } from "@/components/buttons/button-banner-1";
import { useStore } from "@/hooks/use-brands";
import cn from "@/utils/cn";
import { scrollToSection } from "@/utils/ScrollToSection";
import { motion } from "framer-motion";

interface IMobileTextBox1Props {}

export function MobileTextBox1({}: IMobileTextBox1Props) {
  const { toggleShow } = useStore();
  const selectSection = (sectionId: string, offset = 0) => {
    scrollToSection(sectionId, offset);
    setTimeout(() => {
      toggleShow();
    }, 1000);
  };
  return (
    <>
      <div className="absolute hidden w-1/2 max-w-[227px] flex-col 3sm:right-2 sm:top-[0px] md:right-10 lg:flex">
        <div className="text-whit mb-4 font-superline text-[40px] leading-[44px] text-white">
          SOMOS UM HUB MULTISSOLUÇÕES PARA <br /> AS MULTINECESSIDADES DE <br />{" "}
          QUEM ESTÁ NA FACULDADE
        </div>
        <div className="mb-4 text-[16px] text-white">
          Reunimos em um só lugar:
          <br /> clube de benefícios, app de pagamentos e arrecadação,
          <br /> ticketeira, produtora <br /> audiovisual, marketplace e <br />{" "}
          festa. Muita festa.
        </div>
        <ButtonBanner1
          label="Quero Saber Mais"
          className="z-50 h-[46px] w-[148px] text-[14px]"
        />
      </div>
      <div className="sm:hide absolute flex w-1/2 max-w-[227px] flex-col 3sm:right-2 3sm:top-[50px] 2sm:top-[0px] md:right-10">
        <div className="text-whit mb-4 font-superline text-[40px] leading-[44px] text-white">
          SOMOS UM HUB MULTISSOLUÇÕES PARA AS MULTINECESSIDADES DE QUEM ESTÁ NA
          FACULDADE
        </div>
        <div className="mb-4 text-[16px] text-white">
          Reunimos em um só lugar: clube de benefícios, app de pagamentos e
          arrecadação, ticketeira, produtora audiovisual, marketplace e festa.
          Muita festa.
        </div>

        <motion.button
          className={cn(
            "z-50 h-[46px] w-[148px] bg-[#0F4AE4] px-2 text-[14px] text-white",
          )}
          whileHover={{
            scale: 1.2,
          }}
          transition={{ duration: 0.3 }}
          onClick={() => selectSection("our-brands-mobile", -800)}
        >
          Quero Saber Mais
        </motion.button>
      </div>
    </>
  );
}
