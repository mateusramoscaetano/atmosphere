"use client";
import { easeInOut, motion } from "framer-motion";
import { ImageOverlay } from "./filters/image-overlay";

export function SecondSection() {
  return (
    <div className="relative w-full overflow-hidden lg:h-[237px] xl:h-[297px] 2xl:h-[356px] 1650:h-[383px] 3xl:h-[446px]">
      <div className="relative z-10 flex min-h-full w-full">
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
          src="/tags4.png"
          width={640}
          height={446}
          alt="tags"
          className="absolute right-0 w-1/3 origin-right object-cover lg:h-[237px] xl:h-[297px] 2xl:h-[356px] 1650:h-[383px] 3xl:h-[446px]"
          whileHover={{
            left: 0,
            width: "100%",
            scale: 1.3,
          }}
          transition={{ duration: 0.4, ease: easeInOut }}
        />
      </div>
    </div>
  );
}
