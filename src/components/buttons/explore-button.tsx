import cn from "@/utils/cn";
import Image from "next/image";

interface IExploreButtonProps {
  color: "orange" | "yellow";
}

export function ExploreButton({}: IExploreButtonProps) {
  return (
    <>
      <div
        className={cn(
          "flex items-center font-bold text-base text-[#FDD000] gap-2 lg:mt-[0px] 3xl:mt-[24px] h-[17px]"
        )}
      >
        <Image src="/Vector.png" width={9} height={9} alt="vector" />
        Explorar
      </div>
    </>
  );
}
