"use client";
import { ButtonBanner1 } from "@/components/buttons/button-banner-1";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brands } from "@/components/brands";
import cn from "@/utils/cn";
import { useStore } from "@/hooks/use-brands";

interface IOurBrandsMobileProps {}

export function OurBrandsMobile({}: IOurBrandsMobileProps) {
  const [showBrands, setShowBrands] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { show, toggleShow } = useStore();

  const toggleBrands = () => {
    if (show) {
      setIsLoading(true);
      toggleShow();
    } else {
      toggleShow();
    }
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
              ) : show ? (
                "Recolher"
              ) : (
                "Saiba Mais"
              )}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence
        onExitComplete={() => {
          setIsLoading(false);
        }}
      >
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              duration: 1,
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
