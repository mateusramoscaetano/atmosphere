import Image from "next/image";

interface IOurBrandsProps {}

export function OurBrands({}: IOurBrandsProps) {
  return (
    <>
      <div className="relative flex w-full flex-col items-center bg-black lg:h-[201px] xl:h-[251px] 2xl:h-[301px] 1650:h-[323px] 3xl:h-[377px]">
        <div className="mb-[3px] flex w-[148px] items-center justify-center border-b-[3px] border-[#F35937] font-superline text-white lg:mt-[39px] lg:text-[24px] xl:mt-[49px] xl:text-[30px] 2xl:mt-[59.2] 2xl:text-[36px] 1650:mt-[63.5] 1650:text-[38px] 3xl:mt-[74px] 3xl:text-[45px]">
          Nossas Marcas
        </div>
        <div className="mt-[46px] flex items-center justify-center gap-[53px]">
          <Image
            src="/logo_formo.png"
            width={170}
            height={86}
            alt="logo"
            className="lg:h-[45px] lg:w-[90px] xl:h-[86px] xl:w-[170px]"
          />
          <Image
            src="/logo_yz.png"
            width={115}
            height={86}
            alt="logo"
            className="lg:h-[45px] lg:w-[61px] xl:h-[86px] xl:w-[115px]"
          />

          <Image
            src="/logo_revelo.png"
            width={227}
            height={75}
            alt="logo"
            className="lg:h-[40px] lg:w-[121px] xl:h-[75px] xl:w-[227px]"
          />
          <Image
            src="/logo_bartenders.png"
            width={223.56}
            height={61.47}
            alt="logo"
            className="lg:h-[32px] lg:w-[118px] xl:h-[61px] xl:w-[223px]"
          />
        </div>
        <Image
          src="/BALOON1.png"
          width={442}
          height={727}
          alt="baloon"
          className="absolute left-0 top-10 z-20 lg:h-[387px] lg:w-[235px] xl:h-[484px] xl:w-[294px] 2xl:h-[581px] 2xl:w-[353px] 3xl:h-[727px] 3xl:w-[442px]"
        />
      </div>
    </>
  );
}
