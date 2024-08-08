import Image from "next/image";
import { ExploreButton } from "../buttons/explore-button";
import { ExploreButtonOrange } from "../buttons/explore-button-orange";
import { ReactNode } from "react";

interface ISectionCardProps {
  src: string;
  title: string;
  description: ReactNode;
}

export function SectionCard({ src, title, description }: ISectionCardProps) {
  return (
    <>
      <div className="flex items-start justify-center flex-col">
        <Image
          src={src}
          width={424}
          height={285}
          alt={`${src}-image`}
          className="
        lg:w-[226px]
        xl:w-[282px]
        2xl:w-[339px]
        3xl:w-[424px]
        "
        />
        <div className="font-superline 3xl:text-[45px] 2xl:text-[36px] lg:text-[24px]">
          {title}
        </div>
        <div
          className="3xl:text-[16px] lg:text-[12px] font-medium
        lg:w-[191px] 
        xl:w-[239px] 
        2xl:w-[287px] 
        3xl:w-[359px] 
         
         leading-5"
        >
          {description}
        </div>
        <ExploreButtonOrange color="orange" />
      </div>
    </>
  );
}
