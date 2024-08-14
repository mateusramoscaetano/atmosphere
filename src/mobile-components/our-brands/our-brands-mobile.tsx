import Image from "next/image";

interface IOurBrandsMobileProps {}

export function OurBrandsMobile({}: IOurBrandsMobileProps) {
  return (
    <>
      <div
        id="our-brands-mobile"
        className="relative mb-[20%] mt-[9%] flex min-h-full w-full flex-col items-center bg-black"
      >
        <div className="mb-[70px] flex w-[156px] items-center justify-center border-b-[3px] border-[#F35937] font-superline text-[45px] text-white">
          Nossas Marcas
        </div>
        <div className="flex flex-col items-center gap-[70px]">
          <Image
            src="/logo_formo.png"
            width={170}
            height={86}
            alt="logo"
            className=""
          />
          <Image
            src="/logo_yz.png"
            width={115}
            height={86}
            alt="logo"
            className=""
          />

          <Image
            src="/logo_revelo.png"
            width={227}
            height={75}
            alt="logo"
            className=""
          />
          <Image
            src="/logo_bartenders.png"
            width={223.56}
            height={61.47}
            alt="logo"
            className=""
          />
        </div>
      </div>
    </>
  );
}
