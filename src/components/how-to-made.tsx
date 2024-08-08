import { SectionCard } from "./cards/section-card";

interface IHowToMadeProps {}

export function HowToMade({}: IHowToMadeProps) {
  return (
    <>
      <div className="z-10 flex w-full flex-col items-center bg-white lg:h-[467px] lg:px-[160px] xl:h-[584px] xl:px-[200px] 2xl:h-[700px] 2xl:px-[240px] 3xl:h-[876px] 3xl:px-[300px]">
        <div className="flex gap-[30px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[89px] 3xl:mt-[112px]">
          <div className="flex items-start text-right">
            <div className="lg:text-[12px] lg:leading-[15px] 3xl:text-[16px] 3xl:leading-[29px]">
              Lorem ipsum sit dolor amet consectur <br /> lorem ipsum sit dolor
              amet consectuamet consectur <br /> lorem ipsum sit dolor amet
              consectuamet.
            </div>
          </div>

          <div className="font-superline lg:mb-[49px] lg:text-[24px] lg:leading-[24px] xl:mb-[61px] 2xl:mb-[73px] 3xl:mb-[92px] 3xl:text-[45px] 3xl:leading-[44px]">
            TODA A SUA JORNADA UNIVERSITÁRIA ESTÁ COBERTA <br /> PELA NOSSA
            ATMOSFERA DE INFORMAÇÕES
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:gap-[16px] 3xl:gap-[30px]">
          <SectionCard
            src="/how-photo-1.png"
            description={
              <div>
                Tá com dúvidas em como criar a sua comissão <br /> de formatura?
                A gente dá uma mãozinha!
              </div>
            }
            title="Como criar a sua comissão de formatura"
          />
          <SectionCard
            src="/how-photo-2.png"
            description={
              <div>
                Tá com dúvidas em como criar a sua comissão <br /> de formatura?
                A gente dá uma mãozinha!
              </div>
            }
            title="Como criar a sua comissão de formatura"
          />
          <SectionCard
            src="/how-photo-3.png"
            description={
              <div>
                Tá com dúvidas em como criar a sua comissão <br /> de formatura?
                A gente dá uma mãozinha!
              </div>
            }
            title="Como criar a sua comissão de formatura"
          />
        </div>
      </div>
    </>
  );
}
