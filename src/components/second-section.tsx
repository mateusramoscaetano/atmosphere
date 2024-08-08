"use client";
import { easeInOut, motion } from "framer-motion";
import { ImageOverlay } from "./filters/image-overlay";

export function SecondSection() {
  return (
    <div
      className="relative w-full overflow-hidden
        3xl:h-[446px]
        1650:h-[383px]
        2xl:h-[356px]
        xl:h-[297px]
        lg:h-[237px]"
    >
      <div className="w-full min-h-full flex relative z-10">
        <ImageOverlay
          imageUrl="/feia1.png"
          text={
            <span>
              Dicas para sua comissão de formatura, atléticas, planilhas,
              <br /> documentos e muito mais!
            </span>
          }
          text2="blog atmosférico"
        />
        <ImageOverlay
          imageUrl="/feia2.png"
          text={
            <span>
              Temos dois dos maiores players de formatura do Brasil <br /> em
              nosso grupo! Dá uma olhada no que a gente sabe fazer!
            </span>
          }
          text2="GALERIA DE FOTOS"
        />

        <motion.img
          src="/tags2.png"
          width={640}
          height={446}
          alt="tags"
          className="absolute right-0 
          w-1/3
          lg:h-[237px]
          xl:h-[297px] 
          2xl:h-[356px] 
          1650:h-[383px] 
          3xl:h-[446px]
          
          object-cover origin-bottom-right"
          whileHover={{
            left: 0,
            width: "100%",
            scale: 1.6,
            translateX: "25%",
          }}
          transition={{ duration: 0.4, ease: easeInOut }}
        />
      </div>
    </div>
  );
}
