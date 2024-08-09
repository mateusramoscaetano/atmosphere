import cn from "@/utils/cn";
import Image from "next/image";

interface IContactCardProps {
  src: string;
  text: string;
  width: number;
  height: number;
  className: string;
}

export function ContactCard({
  src,
  text,
  height,
  width,
  className,
}: IContactCardProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex items-center justify-center rounded-full bg-[#F35937] lg:h-[46px] lg:w-[46px] xl:h-[59px] xl:w-[59px] 2xl:h-[72px] 2xl:w-[72px] 3xl:h-[86px] 3xl:w-[86px]">
        <Image
          src={src}
          width={width}
          height={height}
          alt="icon"
          className={cn(className)}
        />
      </div>
      <div className="font-medium text-white lg:w-[112px] lg:text-[14px] xl:w-[140px] xl:text-[16px] 2xl:w-[168px] 3xl:w-[207px] 3xl:text-[16px] 3xl:text-[18px]">
        {text}
      </div>
    </div>
  );
}
