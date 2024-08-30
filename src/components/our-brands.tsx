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

export function OurBrands() {
  const [showBrands, setShowBrands] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleBrands = () => {
    if (showBrands) {
      setIsLoading(true);
      setShowBrands(false);
    } else {
      setShowBrands(true);
    }
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
            {isLoading ? (
              <div role="status" className="flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin fill-blue-600 text-center text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="white"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : showBrands ? (
              "Recolher"
            ) : (
              "Saiba Mais"
            )}
          </motion.button>
        </div>
        <Image
          src="/BALOON1.png"
          width={442}
          height={727}
          alt="baloon"
          className="absolute top-20 z-20 3sm:left-[-40px] lg:h-[387px] lg:w-[235px] xl:left-[-80px] xl:h-[484px] xl:w-[294px] 2xl:h-[581px] 2xl:w-[353px] 3xl:left-[-200px] 3xl:h-[727px] 3xl:w-[442px]"
        />
      </div>

      <AnimatePresence
        onExitComplete={() => {
          setIsLoading(false); // Para parar o loader após a animação terminar
        }}
      >
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
