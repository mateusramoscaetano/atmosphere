import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";
import cn from "@/utils/cn";

interface IButtonBanner1Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

export function ButtonBanner1({ label, className }: IButtonBanner1Props) {
  return (
    <motion.button
      className={cn(
        "h-[60px] w-[209px] bg-[#0F4AE4] px-2 text-white",
        className,
      )}
      whileHover={{
        scale: 1.2,
      }}
      transition={{ duration: 0.3 }}
    >
      {label}
    </motion.button>
  );
}
