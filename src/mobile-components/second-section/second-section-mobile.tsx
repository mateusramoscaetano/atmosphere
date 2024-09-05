"use client";
import { scrollToSection } from "@/utils/ScrollToSection";
import { ImageOverlayMobile } from "./image-overlay-mobile";
import { motion } from "framer-motion";

interface ISecondSectionMobileProps {}

export function SecondSectionMobile({}: ISecondSectionMobileProps) {
  const selectSection = (sectionId: string, offset = 0) => {
    scrollToSection(sectionId, offset);
  };
  return (
    <>
      <div className="flex w-full overflow-hidden bg-black 3sm:flex-col">
        <div className="relative z-10 flex overflow-hidden bg-black 3sm:flex-col">
          <ImageOverlayMobile
            onClick={() => selectSection("cases", 200)}
            explore
            imageUrl="/feia2.png"
            text={
              <span>
                Temos dois dos maiores players de formatura do Brasil <br /> em
                nosso grupo! Dá uma olhada no que a gente sabe fazer!
              </span>
            }
            text2="cases atmosféricos"
          />
          <ImageOverlayMobile
            onClick={() => {}}
            explore={false}
            imageUrl="/feia1.png"
            text={
              <span>
                Dicas para sua comissão de formatura, atléticas, planilhas,
                <br /> documentos e muito mais!
              </span>
            }
            text2="blog atmosférico"
          />
          <motion.img
            src="/tags4.png"
            width={640}
            height={446}
            alt="tags"
            className="w-full scale-200 object-cover"
          />
        </div>
      </div>
    </>
  );
}
