"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface IAstronautBanner2Props {}

const default1Motion = {
  rest: {
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    bottom: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export function AstronautBanner2({}: IAstronautBanner2Props) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="relative flex h-[862px] w-full overflow-hidden bg-black"
    >
      <motion.div
        variants={default1Motion}
        className="absolute bottom-[138px] left-[-120px]"
      >
        <Image src="/Agrande.png" width={275} height={304} alt="image1" />
      </motion.div>
      <motion.div className="absolute -left-20 top-[737px]">
        <Image src="/T.png" width={249} height={318} alt="image2" />
      </motion.div>
      <motion.div className="absolute bottom-[138px] left-[185px]">
        <Image src="/M.png" width={285} height={274} alt="image3" />
      </motion.div>
      <motion.div className="absolute bottom-[234px] left-[490px]">
        <Image src="/O.png" width={264} height={260} alt="image3" />
      </motion.div>
      <motion.div className="absolute left-[296px] top-[-90px]">
        <Image src="/S.png" width={215} height={299} alt="image3" />
      </motion.div>
      <motion.div className="absolute left-[609px] top-[23px]">
        <Image src="/R.png" width={219} height={210} alt="image3" />
      </motion.div>
      <motion.div className="absolute bottom-[268px] left-[774px]">
        <Image src="/F.png" width={243} height={234} alt="image3" />
      </motion.div>
      <motion.div className="absolute left-[812px] top-[121px]">
        <Image src="/A.png" width={234} height={236} alt="image3" />
      </motion.div>
      <motion.div className="absolute right-[598px] top-[328px]">
        <Image src="/T.png" width={249} height={318} alt="image3" />
      </motion.div>
      <motion.div className="absolute left-[-140px] top-[-39px]">
        <Image src="/T.png" width={249} height={318} alt="image3" />
      </motion.div>
      <motion.div className="absolute right-[588px] top-0">
        <Image src="/Agrande.png" width={275} height={304} alt="image1" />
      </motion.div>
      <motion.div className="absolute right-[641px] top-[617px]">
        <Image src="/W.png" width={274} height={274} alt="image1" />
      </motion.div>
      <motion.div className="absolute bottom-[-235px] right-[483px]">
        <Image src="/Agrande.png" width={275} height={304} alt="image1" />
      </motion.div>
      <motion.div className="absolute right-[279px] top-[61px]">
        <Image src="/M.png" width={285} height={274} alt="image1" />
      </motion.div>
      <motion.div className="absolute right-[21px] top-[-33px]">
        <Image src="/O.png" width={264} height={260} alt="image3" />
      </motion.div>
      <motion.div className="absolute bottom-[-139px] right-[-100px]">
        <Image src="/O.png" width={264} height={260} alt="image3" />
      </motion.div>
      <motion.div className="absolute bottom-[-111px] left-[362px]">
        <Image src="/S.png" width={215} height={299} alt="image3" />
      </motion.div>
      <motion.div className="absolute right-[175px] top-[281px]">
        <Image src="/S.png" width={215} height={299} alt="image3" />
      </motion.div>
      <motion.div className="absolute bottom-[-123px] left-[606px]">
        <Image src="/R.png" width={219} height={210} alt="image3" />
      </motion.div>
      <motion.div className="absolute bottom-[278px] right-[-97px]">
        <Image src="/R.png" width={219} height={210} alt="image3" />
      </motion.div>
    </motion.div>
  );
}
