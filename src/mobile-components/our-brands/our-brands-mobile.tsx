"use client";
import { ButtonBanner1 } from "@/components/buttons/button-banner-1";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brands } from "@/components/brands";
import cn from "@/utils/cn";

interface IOurBrandsMobileProps {}

export function OurBrandsMobile({}: IOurBrandsMobileProps) {
  const [showBrands, setShowBrands] = useState(false);

  const toggleBrands = () => {
    setShowBrands(!showBrands);
  };
  return (
    <>
      <div
        id="our-brands-mobile"
        className="relative mb-[20%] mt-[9%] flex min-h-full w-full flex-col items-center bg-black"
      >
        <div className="mb-[70px] flex w-[156px] items-center justify-center border-b-[3px] border-[#F35937] font-superline text-[45px] text-white">
          Nossas Marcas
        </div>
        <div className="flex flex-col items-center gap-[70px]">
          <Image
            src="/logo_formo.png"
            width={170}
            height={86}
            alt="logo"
            className=""
          />
          <Image
            src="/logo-yz.svg"
            width={115}
            height={86}
            alt="logo"
            className=""
          />

          <Image
            src="/revelo.svg"
            width={227}
            height={75}
            alt="logo"
            className=""
          />
          <Image
            src="/loft.svg"
            width={122.22}
            height={68.67}
            alt="logo"
            className=""
          />
          <Image
            src="/tag.svg"
            width={137}
            height={62}
            alt="logo"
            className=""
          />
          <div className="flex h-20 w-full items-center justify-center">
            <motion.button
              className={cn(
                "bg-[#0F4AE4] px-2 text-white 3sm:mt-[33px] 3sm:h-[42px] 3sm:w-[202px] xl:mt-[42px] xl:h-[40px] xl:w-[141px] 2xl:mt-[50px] 2xl:h-[48px] 2xl:w-[174px] 3xl:mt-[63px] 3xl:h-[60px] 3xl:w-[209px]",
              )}
              whileHover={{
                scale: 1.2,
              }}
              transition={{ duration: 0.3 }}
              onClick={toggleBrands}
            >
              {showBrands ? "Recolher" : "Saiba Mais"}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showBrands && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="w-full"
          >
            <Brands />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
