import Image from "next/image";
import { ContactFormMobile } from "./contact-form-mobile";

interface IFormSectionMobileProps {}

export function FormSectionMobile({}: IFormSectionMobileProps) {
  return (
    <>
      <div id="contact-mobile" className="relative flex h-full w-full">
        <Image
          src="/night-sky.png"
          width={430}
          height={829}
          alt="zep"
          className="w-full object-cover"
        />
        <Image
          src="/sat2.png"
          width={201}
          height={133}
          alt="banner-photo"
          className="absolute right-0 top-[-50px]"
        />
        <Image
          src="/zep0.png"
          width={342}
          height={85}
          alt="banner-photo"
          className="absolute bottom-[-60px] z-20"
        />
        <ContactFormMobile />
      </div>
    </>
  );
}
