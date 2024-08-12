import { ExploreButtonOrange } from "@/components/buttons/explore-button-orange";
import Image from "next/image";
import { ReactNode } from "react";

interface ISectionCardMobileProps {
  title: ReactNode;
  description: ReactNode;
  src: string;
}

export function SectionCardMobile({
  src,
  title,
  description,
}: ISectionCardMobileProps) {
  return (
    <>
      <>
        <div className="mb-[51px] flex flex-col items-start justify-center">
          <Image
            src={src}
            width={342}
            height={372}
            alt={`${src}-image`}
            className="mb-2"
          />
          <div className="font-superline text-[30px]">{title}</div>
          <div className="mb-5 text-[14px] font-medium">{description}</div>
          <ExploreButtonOrange color="orange" />
        </div>
      </>
    </>
  );
}
