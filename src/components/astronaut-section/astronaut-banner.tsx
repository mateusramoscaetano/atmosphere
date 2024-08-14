"use client";
import Image from "next/image";
import { WithCursorFollow } from "./framer";
import { AstronautAnimate } from "./astronaut-animate";

interface IAstronautBannerProps {}

export function AstronautBannerContent({}: IAstronautBannerProps) {
  return (
    <>
      <div className="relative z-50 flex w-full bg-black lg:h-[459px] xl:h-[574px] 2xl:h-[689px] 3xl:h-[862px]">
        <div className="relative h-full w-full overflow-hidden">
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
            className="absolute lg:left-[-11px] lg:top-[393px] xl:left-[-13px] xl:top-[491px] 2xl:left-[-16px] 2xl:top-[590px] 3xl:left-[-90px] 3xl:top-[734px]"
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
            className="absolute lg:left-[303px] lg:top-[12px] xl:left-[382px] xl:top-[15px] 2xl:left-[484px] 2xl:top-[18px] 3xl:left-[569px] 3xl:top-[23px]"
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
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:right-[319px] lg:top-[175px] xl:right-[399px] xl:top-[219px] 2xl:right-[479px] 2xl:top-[263px] 3xl:right-[598px] 3xl:top-[328px]"
          >
            <Image
              src="/T.png"
              width={249}
              height={318}
              alt="image3"
              className="lg:h-[170px] lg:w-[133px] xl:h-[212px] xl:w-[166px] 2xl:h-[254px] 2xl:w-[199px] 3xl:h-[318px] 3xl:w-[249px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:left-[-74px] lg:top-[-21px] xl:left-[-92px] xl:top-[-26px] 2xl:left-[-110px] 2xl:top-[-32px] 3xl:left-[-140px] 3xl:top-[-39px]"
          >
            <Image
              src="/T.png"
              width={249}
              height={318}
              alt="image3"
              className="lg:h-[170px] lg:w-[133px] xl:h-[212px] xl:w-[166px] 2xl:h-[254px] 2xl:w-[199px] 3xl:h-[318px] 3xl:w-[249px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={40}
            className="absolute lg:right-[306px] lg:top-[0px] xl:right-[377px] xl:top-[0px] 2xl:right-[449px] 2xl:top-[0px] 3xl:right-[588px] 3xl:top-[0px]"
          >
            <Image
              src="/Agrande.png"
              width={275}
              height={304}
              alt="image1"
              className="lg:h-[162px] lg:w-[147px] xl:h-[202px] xl:w-[183px] 2xl:h-[243px] 2xl:w-[220px] 3xl:h-[304px] 3xl:w-[275px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={40}
            className="absolute lg:right-[338px] lg:top-[325px] xl:right-[417px] xl:top-[401px] 2xl:right-[481px] 2xl:top-[473px] 3xl:right-[641px] 3xl:top-[617px]"
          >
            <Image
              src="/W.png"
              width={274}
              height={274}
              alt="image1"
              className="lg:h-[146px] lg:w-[146px] xl:h-[183px] xl:w-[183px] 2xl:h-[220px] 2xl:w-[220px] 3xl:h-[274px] 3xl:w-[274px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={40}
            className="absolute lg:bottom-[-124px] lg:right-[254px] xl:bottom-[-155px] xl:right-[309px] 2xl:bottom-[-183px] 2xl:right-[362px] 3xl:bottom-[-235px] 3xl:right-[483px]"
          >
            <Image
              src="/Agrande.png"
              width={275}
              height={304}
              alt="image1"
              className="lg:h-[162px] lg:w-[147px] xl:h-[202px] xl:w-[183px] 2xl:h-[243px] 2xl:w-[220px] 3xl:h-[304px] 3xl:w-[275px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={40}
            className="absolute lg:right-[148px] lg:top-[33px] xl:right-[182px] xl:top-[41px] 2xl:right-[220px] 2xl:top-[52px] 3xl:right-[279px] 3xl:top-[61px]"
          >
            <Image
              src="/M.png"
              width={285}
              height={274}
              alt="image1"
              className="lg:h-[147px] lg:w-[153px] xl:h-[183px] xl:w-[191px] 2xl:h-[220px] 2xl:w-[229px] 3xl:h-[274px] 3xl:w-[285px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:right-[11px] lg:top-[-18px] xl:right-[14px] xl:top-[-23px] 2xl:right-[17px] 2xl:top-[-28px] 3xl:right-[21px] 3xl:top-[-33px]"
          >
            <Image
              src="/O.png"
              width={264}
              height={260}
              alt="image3"
              className="lg:h-[138px] lg:w-[140px] xl:h-[167px] xl:w-[170px] 2xl:h-[197px] 2xl:w-[200px] 3xl:h-[260px] 3xl:w-[264px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:bottom-[-74px] lg:right-[-53px] xl:bottom-[-93px] xl:right-[-66px] 2xl:bottom-[-110px] 2xl:right-[-78px] 3xl:bottom-[-139px] 3xl:right-[-100px]"
          >
            <Image
              src="/O.png"
              width={264}
              height={260}
              alt="image3"
              className="lg:h-[138px] lg:w-[140px] xl:h-[167px] xl:w-[170px] 2xl:h-[197px] 2xl:w-[200px] 3xl:h-[260px] 3xl:w-[264px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:bottom-[-59px] lg:left-[193px] xl:bottom-[-74px] xl:left-[241px] 2xl:bottom-[-88px] 2xl:left-[288px] 3xl:bottom-[-111px] 3xl:left-[362px]"
          >
            <Image
              src="/S.png"
              width={215}
              height={299}
              alt="image3"
              className="lg:h-[159px] lg:w-[114px] xl:h-[193px] xl:w-[138px] 2xl:h-[226px] 2xl:w-[161px] 3xl:h-[299px] 3xl:w-[215px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:right-[93px] lg:top-[150px] xl:right-[116px] xl:top-[186px] 2xl:right-[140px] 2xl:top-[223px] 3xl:right-[175px] 3xl:top-[281px]"
          >
            <Image
              src="/S.png"
              width={215}
              height={299}
              alt="image3"
              className="lg:h-[159px] lg:w-[114px] xl:h-[193px] xl:w-[138px] 2xl:h-[226px] 2xl:w-[161px] 3xl:h-[299px] 3xl:w-[215px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:bottom-[-65px] lg:left-[323px] xl:bottom-[-83px] xl:left-[402px] 2xl:bottom-[-99px] 2xl:left-[484px] 3xl:bottom-[-123px] 3xl:left-[606px]"
          >
            <Image
              src="/R.png"
              width={219}
              height={210}
              alt="image3"
              className="lg:h-[111px] lg:w-[116px] xl:h-[134px] xl:w-[141px] 2xl:h-[161px] 2xl:w-[170px] 3xl:h-[210px] 3xl:w-[219px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:bottom-[148px] lg:right-[-52px] xl:bottom-[188px] xl:right-[-65px] 2xl:bottom-[226px] 2xl:right-[-79px] 3xl:bottom-[278px] 3xl:right-[-97px]"
          >
            <Image
              src="/R.png"
              width={219}
              height={210}
              alt="image3"
              className="lg:h-[111px] lg:w-[116px] xl:h-[134px] xl:w-[141px] 2xl:h-[161px] 2xl:w-[170px] 3xl:h-[210px] 3xl:w-[219px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:left-[29px] lg:top-[146px] xl:left-[37px] xl:top-[183px] 2xl:left-[44px] 2xl:top-[220px] 3xl:left-[56px] 3xl:top-[275px]"
          >
            <Image
              src="/_0007_facil4.png"
              width={167}
              height={84}
              alt="image3"
              className="lg:h-[111px] lg:w-[116px] xl:h-[134px] xl:w-[141px] 2xl:h-[161px] 2xl:w-[170px] 3xl:h-[84px] 3xl:w-[167px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:left-[56px] lg:top-[-7px] xl:left-[70px] xl:top-[-8px] 2xl:left-[84px] 2xl:top-[-10px] 3xl:left-[105px] 3xl:top-[-12px]"
          >
            <Image
              src="/_0019_fácil6.png"
              width={160}
              height={115}
              alt="image3"
              className="lg:h-[62px] lg:w-[85px] xl:h-[77px] xl:w-[107px] 2xl:h-[90px] 2xl:w-[128px] 3xl:h-[115px] 3xl:w-[160px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:bottom-[-3px] lg:left-[101px] xl:bottom-[-3px] xl:left-[128px] 2xl:bottom-[-4px] 2xl:left-[155px] 3xl:bottom-[-5px] 3xl:left-[191px]"
          >
            <Image
              src="/_0019_fácil6.png"
              width={160}
              height={115}
              alt="image3"
              className="lg:h-[62px] lg:w-[85px] xl:h-[77px] xl:w-[107px] 2xl:h-[90px] 2xl:w-[128px] 3xl:h-[115px] 3xl:w-[160px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:left-[735px] lg:top-[192px] xl:left-[915px] xl:top-[244px] 2xl:left-[1135px] 2xl:top-[305px] 3xl:left-[1359px] 3xl:top-[361px]"
          >
            <Image
              src="/_0019_fácil6.png"
              width={160}
              height={115}
              alt="image3"
              className="lg:h-[62px] lg:w-[85px] xl:h-[77px] xl:w-[107px] 2xl:h-[90px] 2xl:w-[128px] 3xl:h-[115px] 3xl:w-[160px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:right-[235px] lg:top-[347px] xl:right-[295px] xl:top-[439px] 2xl:right-[371px] 2xl:top-[521px] 3xl:right-[442px] 3xl:top-[646px]"
          >
            <Image
              src="/_0007_facil4.png"
              width={167}
              height={84}
              alt="image3"
              className="lg:h-[111px] lg:w-[116px] xl:h-[134px] xl:w-[141px] 2xl:h-[161px] 2xl:w-[170px] 3xl:h-[84px] 3xl:w-[167px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:left-[101px] lg:top-[181px] xl:left-[127px] xl:top-[229px] 2xl:left-[157px] 2xl:top-[286px] 3xl:left-[189px] 3xl:top-[340px]"
          >
            <Image
              src="/_0010_divertida1.png"
              width={267}
              height={115}
              alt="image3"
              className="lg:h-[61px] lg:w-[143px] xl:h-[77px] xl:w-[181px] 2xl:h-[95px] 2xl:w-[220px] 3xl:h-[115px] 3xl:w-[267px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:bottom-[11px] lg:right-[111px] xl:bottom-[14px] xl:right-[140px] 2xl:bottom-[17px] 2xl:right-[172px] 3xl:bottom-[21px] 3xl:right-[207px]"
          >
            <Image
              src="/_0010_divertida1.png"
              width={267}
              height={115}
              alt="image3"
              className="lg:h-[61px] lg:w-[143px] xl:h-[77px] xl:w-[181px] 2xl:h-[95px] 2xl:w-[220px] 3xl:h-[115px] 3xl:w-[267px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:right-[172px] lg:top-[11px] xl:right-[221px] xl:top-[14px] 2xl:right-[270px] 2xl:top-[17px] 3xl:right-[325px] 3xl:top-[-60px]"
          >
            <Image
              src="/_0010_divertida1.png"
              width={267}
              height={115}
              alt="image3"
              className="lg:h-[61px] lg:w-[143px] xl:h-[77px] xl:w-[181px] 2xl:h-[95px] 2xl:w-[220px] 3xl:h-[115px] 3xl:w-[267px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:left-[172px] lg:top-[62px] xl:left-[221px] xl:top-[77px] 2xl:left-[270px] 2xl:top-[96px] 3xl:left-[40px] 3xl:top-[115px]"
          >
            <Image
              src="/moderna2.png"
              width={231}
              height={136}
              alt="image3"
              className="lg:h-[72px] lg:w-[123px] xl:h-[91px] xl:w-[156px] 2xl:h-[113px] 2xl:w-[192px] 3xl:h-[136px] 3xl:w-[231px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:left-[686px] lg:top-[267px] xl:left-[869px] xl:top-[340px] 2xl:left-[1022px] 2xl:top-[418px] 3xl:left-[1289px] 3xl:top-[498px]"
          >
            <Image
              src="/moderna2.png"
              width={231}
              height={136}
              alt="image3"
              className="lg:h-[72px] lg:w-[123px] xl:h-[91px] xl:w-[156px] 2xl:h-[113px] 2xl:w-[192px] 3xl:h-[136px] 3xl:w-[231px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:left-[309px] lg:top-[327px] xl:left-[393px] xl:top-[411px] 2xl:left-[488px] 2xl:top-[507px] 3xl:left-[583px] 3xl:top-[611px]"
          >
            <Image
              src="/completa.png"
              width={258}
              height={147}
              alt="image3"
              className="lg:h-[78px] lg:w-[137px] xl:h-[99px] xl:w-[175px] 2xl:h-[122px] 2xl:w-[208px] 3xl:h-[147px] 3xl:w-[258px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:right-[-44px] lg:top-[104px] xl:right-[-56px] xl:top-[130px] 2xl:right-[-69px] 2xl:top-[160px] 3xl:right-[-83px] 3xl:top-[195px]"
          >
            <Image
              src="/completa.png"
              width={258}
              height={147}
              alt="image3"
              className="lg:h-[78px] lg:w-[137px] xl:h-[99px] xl:w-[175px] 2xl:h-[122px] 2xl:w-[208px] 3xl:h-[147px] 3xl:w-[258px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:left-[-44px] lg:top-[104px] xl:left-[-56px] xl:top-[130px] 2xl:left-[-69px] 2xl:top-[160px] 3xl:left-[387px] 3xl:top-[237px]"
          >
            <Image
              src="/emocionante.png"
              width={371}
              height={115}
              alt="image3"
              className="lg:h-[78px] lg:w-[137px] xl:h-[99px] xl:w-[175px] 2xl:h-[122px] 2xl:w-[208px] 3xl:h-[115px] 3xl:w-[371px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:bottom-[104px] lg:right-[-44px] xl:bottom-[130px] xl:right-[-56px] 2xl:bottom-[160px] 2xl:right-[-69px] 3xl:bottom-[142px] 3xl:right-[4px]"
          >
            <Image
              src="/emocionante.png"
              width={371}
              height={115}
              alt="image3"
              className="lg:h-[78px] lg:w-[137px] xl:h-[99px] xl:w-[175px] 2xl:h-[122px] 2xl:w-[208px] 3xl:h-[115px] 3xl:w-[371px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:bottom-[-20px] lg:left-[439px] xl:bottom-[-26px] xl:left-[553px] 2xl:bottom-[-31px] 2xl:left-[683px] 3xl:bottom-[-38px] 3xl:left-[820px]"
          >
            <Image
              src="/eficiente.png"
              width={130}
              height={236}
              alt="image3"
              className="lg:h-[125px] lg:w-[69px] xl:h-[157px] xl:w-[86px] 2xl:h-[188px] 2xl:w-[104px] 3xl:h-[236px] 3xl:w-[130px]"
            />
          </WithCursorFollow>
          <WithCursorFollow
            zIndex={2}
            className="absolute lg:left-[409px] lg:top-[-51px] xl:left-[515px] xl:top-[-64px] 2xl:left-[609px] 2xl:top-[-79px] 3xl:left-[765px] 3xl:top-[-96px]"
          >
            <Image
              src="/eficiente.png"
              width={130}
              height={236}
              alt="image3"
              className="lg:h-[125px] lg:w-[69px] xl:h-[157px] xl:w-[86px] 2xl:h-[188px] 2xl:w-[104px] 3xl:h-[236px] 3xl:w-[130px]"
            />
          </WithCursorFollow>
        </div>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
          <AstronautAnimate />
        </div>
      </div>
    </>
  );
}
