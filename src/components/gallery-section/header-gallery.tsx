"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface IHeaderGalleryProps {
  text: ReactNode;
  title: string;
}

export function HeaderGallery({ text, title }: IHeaderGalleryProps) {
  return (
    <>
      <div
        id="gallery"
        className="w-full bg-black 3sm:flex 3sm:flex-col 2sm:flex-row lg:flex lg:h-[169px] lg:px-[104px] xl:h-[212px] xl:px-[130px] 2xl:h-[254px] 2xl:px-[156px] 3xl:h-[318px] 3xl:px-[196px] 4xl:justify-center"
      >
        <motion.div className="flex items-center font-superline text-[#FDD000] 3sm:h-[150px] 3sm:justify-center 3sm:text-[150px] 2sm:min-h-full 2sm:w-1/2 md:text-[200px] lg:w-full lg:justify-center lg:text-[240px] xl:text-[300px] 2xl:text-[360px] 3xl:text-[450px]">
          {title}
        </motion.div>
        <div className="flex items-end text-white 3sm:px-4 3sm:pb-[13px] 3sm:text-sm 2sm:w-1/2 lg:w-full lg:pl-[1.0625rem] lg:text-[12px] xl:pb-[16px] xl:pl-[21px] xl:text-[14px] 2xl:pb-[20px] 2xl:pl-[25px] 2xl:text-[16px] 3xl:pb-[25px] 3xl:pl-[32px] 3xl:text-[18px]">
          {text}
        </div>
      </div>
    </>
  );
}
