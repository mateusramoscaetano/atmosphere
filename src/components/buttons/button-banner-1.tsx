import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface IButtonBanner1Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function ButtonBanner1({ label }: IButtonBanner1Props) {
  return (
    <motion.button
      className=" bg-[#0F4AE4] text-white
  w-[209px] h-[60px] px-2

  "
      whileHover={{
        scaleX: 1.2,
        scaleY: 1.2,
        originX: 0,
        originY: 0,
      }}
      transition={{ duration: 0.3 }}
    >
      {label}
    </motion.button>
  );
}
