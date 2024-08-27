"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import cn from "@/utils/cn";
import { useRouter } from "next/navigation";

import { LogoFormo } from "./images/logo-formo";
import { LogoYz } from "./images/logo-yz";
import { LogoRevelo } from "./images/logo-revelo";
import { LogoLoft } from "./images/logo-loft";
import { LogoTag } from "./images/logo-tag";
import { Brands } from "./brands";

interface IOurBrandsProps {}

export function OurBrands({}: IOurBrandsProps) {
  const [showBrands, setShowBrands] = useState(false);
  const router = useRouter();

  const toggleBrands = () => {
    setShowBrands(!showBrands);
  };

  return (
    <>
      <div
        id="second"
        className="relative flex h-[458px] w-full flex-col items-center justify-center bg-black"
      >
        <div className="mb-[3px] flex w-[148px] items-center justify-center border-b-[3px] border-[#F35937] font-superline text-white lg:text-[24px] xl:text-[30px] 2xl:text-[36px] 1650:text-[38px] 3xl:text-[45px]">
          Nossas Marcas
        </div>
        <div className="flex items-center justify-center gap-[53px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[36px] 3xl:mt-[46px]">
          <LogoFormo
            color="white"
            className="lg:h-[45px] lg:w-[90px] xl:h-[58px] xl:w-[115px] 2xl:h-[72px] 2xl:w-[136px] 3xl:h-[86px] 3xl:w-[170px]"
          />
          <LogoYz className="lg:h-[45px] lg:w-[61px] xl:h-[58px] xl:w-[77px] 2xl:h-[72px] 2xl:w-[90px] 3xl:h-[86px] 3xl:w-[115px]" />

          <LogoRevelo className="lg:h-[39px] lg:w-[121px] xl:h-[52px] xl:w-[153px] 2xl:h-[60px] 2xl:w-[184px] 3xl:h-[75px] 3xl:w-[227px]" />
          <LogoLoft className="lg:h-[36px] lg:w-[65px] xl:h-[46px] xl:w-[82px] 2xl:h-[57px] 2xl:w-[97px] 3xl:h-[68px] 3xl:w-[122px]" />
          <LogoTag className="lg:h-[33px] lg:w-[73px] xl:h-[41px] xl:w-[93px] 2xl:h-[50px] 2xl:w-[108px] 3xl:h-[62px] 3xl:w-[137px]" />
        </div>
        <div className="flex h-20 w-full items-center justify-center">
          <motion.button
            className={cn(
              "bg-[#0F4AE4] px-2 text-white lg:mt-[33px] lg:h-[32px] lg:w-[112px] xl:mt-[42px] xl:h-[40px] xl:w-[141px] 2xl:mt-[50px] 2xl:h-[48px] 2xl:w-[174px] 3xl:mt-[63px] 3xl:h-[60px] 3xl:w-[209px]",
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
        <Image
          src="/BALOON1.png"
          width={442}
          height={727}
          alt="baloon"
          className="absolute left-[-40px] top-20 z-20 lg:h-[387px] lg:w-[235px] xl:h-[484px] xl:w-[294px] 2xl:h-[581px] 2xl:w-[353px] 3xl:h-[727px] 3xl:w-[442px]"
        />
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
