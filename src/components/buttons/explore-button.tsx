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
          "flex h-[17px] cursor-pointer items-center gap-2 text-base font-bold text-[#FDD000] lg:mt-[0px] 3xl:mt-[24px]",
        )}
      >
        <Image src="/Vector.png" width={9} height={9} alt="vector" />
        Explorar
      </div>
    </>
  );
}
