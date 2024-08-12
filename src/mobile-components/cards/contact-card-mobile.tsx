import cn from "@/utils/cn";
import Image from "next/image";

interface IContactCardProps {
  src: string;
  text: string;
  width: number;
  height: number;
  className: string;
}

export function ContactCardMobile({
  src,
  text,
  height,
  width,
  className,
}: IContactCardProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4")}>
      <div className="flex h-[37px] w-[37px] items-center justify-center rounded-full bg-[#F35937]">
        <Image src={src} width={width} height={height} alt="icon" />
      </div>
      <div className="text-sm font-medium text-white">{text}</div>
    </div>
  );
}
