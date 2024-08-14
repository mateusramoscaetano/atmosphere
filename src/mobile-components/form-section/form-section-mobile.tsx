import Image from "next/image";
import { ContactFormMobile } from "./contact-form-mobile";

interface IFormSectionMobileProps {}

export function FormSectionMobile({}: IFormSectionMobileProps) {
  return (
    <>
      <div id="contact-mobile" className="flex min-h-full w-full">
        <Image
          src="/form-banner.png"
          width={430}
          height={829}
          alt="zep"
          className="w-full object-cover"
        />
        <ContactFormMobile />
      </div>
    </>
  );
}
