import cn from "@/utils/cn";
import Image from "next/image";

interface IExploreButtonOrangeProps {
  color: "orange" | "yellow";
}

export function ExploreButtonOrange({}: IExploreButtonOrangeProps) {
  return (
    <>
      <div
        className={cn(
          "flex items-center font-bold text-base text-[#F35937] gap-2 lg:mt-[0px] 3xl:mt-[24px] h-[17px]"
        )}
      >
        <Image src="/Vector.svg" width={9} height={9} alt="vector" />
        Explorar
      </div>
    </>
  );
}
