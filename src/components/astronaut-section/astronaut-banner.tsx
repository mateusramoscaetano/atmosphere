"use client";
import Image from "next/image";
import { WithCursorFollow } from "./framer";
import { AstronautAnimate } from "./astronaut-animate";

interface IAstronautBannerProps {}

export function AstronautBannerContent({}: IAstronautBannerProps) {
  return (
    <div className="relative flex w-full overflow-hidden bg-black lg:h-[459px] xl:h-[574px] 2xl:h-[689px] 3xl:h-[862px]">
      <WithCursorFollow
        zIndex={40}
        className="xl::bottom-[92px] absolute lg:bottom-[73px] lg:left-[-64px] xl:left-[-80px] 2xl:bottom-[110px] 2xl:left-[-96px] 3xl:bottom-[138px] 3xl:left-[-120px]"
      >
        <Image
          src="/Agrande.png"
          width={275}
          height={304}
          alt="image1"
          className="lg:h-[162px] lg:w-[146px] xl:h-[202px] xl:w-[183px] 2xl:h-[243px] 2xl:w-[220px] 3xl:h-[304px] 3xl:w-[275px]"
        />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute lg:left-[-11px] lg:top-[393px] xl:left-[-13px] xl:top-[491px] 2xl:left-[-16px] 2xl:top-[590px] 3xl:left-[-20px] 3xl:top-[737px]"
      >
        <Image
          src="/T.png"
          width={249}
          height={318}
          alt="image2"
          className="lg:h-[170px] lg:w-[133px] xl:h-[212px] xl:w-[166px] 2xl:h-[254px] 2xl:w-[199px] 3xl:h-[318px] 3xl:w-[249px]"
        />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute lg:bottom-[73px] lg:left-[99px] xl:bottom-[92px] xl:left-[123px] 2xl:bottom-[110px] 2xl:left-[148px] 3xl:bottom-[138px] 3xl:left-[185px]"
      >
        <Image
          src="/M.png"
          width={285}
          height={274}
          alt="image3"
          className="lg:h-[146px] lg:w-[152px] xl:h-[183px] xl:w-[190px] 2xl:h-[219px] 2xl:w-[228px] 3xl:h-[274px] 3xl:w-[285px]"
        />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute lg:bottom-[125px] lg:left-[261px] xl:bottom-[156px] xl:left-[327px] 2xl:bottom-[187px] 2xl:left-[392px] 3xl:bottom-[234px] 3xl:left-[490px]"
      >
        <Image
          src="/O.png"
          width={264}
          height={260}
          alt="image3"
          className="lg:h-[139px] lg:w-[141px] xl:h-[173px] xl:w-[176px] 2xl:h-[208px] 2xl:w-[211px] 3xl:h-[260px] 3xl:w-[264px]"
        />
      </WithCursorFollow>
      //jafeito
      <WithCursorFollow
        zIndex={2}
        className="absolute lg:left-[158px] lg:top-[-48px] xl:left-[197px] xl:top-[-60px] 2xl:left-[237px] 2xl:top-[-72px] 3xl:left-[296px] 3xl:top-[-90px]"
      >
        <Image
          src="/S.png"
          width={215}
          height={299}
          alt="image3"
          className="lg:h-[159px] lg:w-[115px] xl:h-[199px] xl:w-[143px] 2xl:h-[239px] 2xl:w-[172px] 3xl:h-[299px] 3xl:w-[215px]"
        />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute lg:left-[325px] lg:top-[12px] xl:left-[406px] xl:top-[15px] 2xl:left-[487px] 2xl:top-[18px] 3xl:left-[609px] 3xl:top-[23px]"
      >
        <Image
          src="/R.png"
          width={219}
          height={210}
          alt="image3"
          className="lg:h-[112px] lg:w-[117px] xl:h-[140px] xl:w-[146px] 2xl:h-[168px] 2xl:w-[175px] 3xl:h-[210px] 3xl:w-[219px]"
        />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute lg:bottom-[143px] lg:left-[413px] xl:bottom-[179px] xl:left-[516px] 2xl:bottom-[214px] 2xl:left-[619px] 3xl:bottom-[268px] 3xl:left-[774px]"
      >
        <Image
          src="/F.png"
          width={243}
          height={234}
          alt="image3"
          className="lg:h-[125px] lg:w-[130px] xl:h-[156px] xl:w-[162px] 2xl:h-[187px] 2xl:w-[194px] 3xl:h-[234px] 3xl:w-[243px]"
        />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute lg:left-[433px] lg:top-[64px] xl:left-[541px] xl:top-[81px] 2xl:left-[650px] 2xl:top-[97px] 3xl:left-[812px] 3xl:top-[121px]"
      >
        <Image
          src="/A.png"
          width={234}
          height={236}
          alt="image3"
          className="lg:h-[126px] lg:w-[125px] xl:h-[157px] xl:w-[156px] 2xl:h-[189px] 2xl:w-[187px] 3xl:h-[236px] 3xl:w-[234px]"
        />
      </WithCursorFollow>
      //ja feito
      <WithCursorFollow
        zIndex={2}
        className="absolute right-[598px] top-[328px]"
      >
        <Image src="/T.png" width={249} height={318} alt="image3" />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute left-[-140px] top-[-39px]"
      >
        <Image src="/T.png" width={249} height={318} alt="image3" />
      </WithCursorFollow>
      <WithCursorFollow zIndex={40} className="absolute right-[588px] top-0">
        <Image src="/Agrande.png" width={275} height={304} alt="image1" />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={40}
        className="absolute right-[641px] top-[617px]"
      >
        <Image src="/W.png" width={274} height={274} alt="image1" />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={40}
        className="absolute bottom-[-235px] right-[483px]"
      >
        <Image src="/Agrande.png" width={275} height={304} alt="image1" />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={40}
        className="absolute right-[279px] top-[61px]"
      >
        <Image src="/M.png" width={285} height={274} alt="image1" />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute right-[21px] top-[-33px]"
      >
        <Image src="/O.png" width={264} height={260} alt="image3" />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute bottom-[-139px] right-[-100px]"
      >
        <Image src="/O.png" width={264} height={260} alt="image3" />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute bottom-[-111px] left-[362px]"
      >
        <Image src="/S.png" width={215} height={299} alt="image3" />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute right-[175px] top-[281px]"
      >
        <Image src="/S.png" width={215} height={299} alt="image3" />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute bottom-[-123px] left-[606px]"
      >
        <Image src="/R.png" width={219} height={210} alt="image3" />
      </WithCursorFollow>
      <WithCursorFollow
        zIndex={2}
        className="absolute bottom-[278px] right-[-97px]"
      >
        <Image src="/R.png" width={219} height={210} alt="image3" />
      </WithCursorFollow>
      <AstronautAnimate />
    </div>
  );
}
