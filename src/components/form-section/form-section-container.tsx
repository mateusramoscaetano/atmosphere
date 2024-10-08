"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContactForm } from "./form";

interface IFormSectionContainerProps {}

export function FormSectionContainer({}: IFormSectionContainerProps) {
  return (
    <>
      <div className="min-h-full w-full overflow-hidden" id="contact">
        <div className="h-[50px] w-full bg-black"></div>
        <div className="relative flex min-h-full w-full items-start">
          <Image
            src="/bg-form.png"
            width={2560}
            height={1080}
            alt="sky"
            className="bg-hero-pattern bg- bg-repeat-x object-cover"
          />
          <Image
            src="/sat3.png"
            width={309}
            height={260}
            alt="sky"
            className="absolute lg:right-[275px] lg:top-[-28px] lg:h-[139px] lg:w-[165px] xl:right-[344px] xl:top-[-35px] xl:h-[174px] xl:w-[206px] 2xl:right-[413px] 2xl:top-[-42px] 2xl:h-[209px] 2xl:w-[247px] 3xl:right-[516px] 3xl:top-[-52px] 3xl:h-[260px] 3xl:w-[309px]"
          />
          <motion.img
            src="/asteroid-3.png"
            className="absolute lg:right-[98px] lg:top-[107px] lg:h-[261px] lg:w-[271px] xl:right-[123px] xl:top-[134px] xl:h-[327px] xl:w-[339px] 2xl:right-[147px] 2xl:top-[161px] 2xl:h-[394px] 2xl:w-[408px] 3xl:right-[184px] 3xl:top-[202px] 3xl:h-[493px] 3xl:w-[511px]"
            animate={{
              x: [0, -20, 20, -10, 10, 0],
              y: [0, 10, -10, 20, -20, 0],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          <Image
            src="/zep-3.png"
            width={530}
            height={133}
            alt="zep"
            className="absolute lg:bottom-[44px] lg:right-[50px] lg:h-[142px] lg:w-[284px] xl:bottom-[56px] xl:right-[64px] xl:h-[180px] xl:w-[355px] 2xl:bottom-[67px] 2xl:right-[77px] 2xl:h-[216px] 2xl:w-[434px] 3xl:bottom-[47px] 3xl:right-[61px] 3xl:h-[250px] 3xl:w-[500px] 4xl:bottom-[207px]"
          />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
