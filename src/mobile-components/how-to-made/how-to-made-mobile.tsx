"use client";
import { SectionCard } from "@/components/cards/section-card";
import { SectionCardMobile } from "../cards/section-card-mobile";

interface IHowToMadeMobileProps {}

export function HowToMadeMobile({}: IHowToMadeMobileProps) {
  return (
    <>
      <div
        id="how-to-mobile"
        className="flex min-h-full w-full flex-col items-center bg-white px-[44px] py-16"
      >
        <div className="font-superline text-[35px] leading-[40px]">
          TODA A SUA JORNADA UNIVERSITÁRIA ESTÁ COBERTA <br /> PELA NOSSA
          ATMOSFERA DE INFORMAÇÕES
          <div className="mb-[51px] mt-6 flex justify-start font-neue text-[14px] leading-snug">
            Lorem ipsum sit dolor amet consectur <br /> lorem ipsum sit dolor
            amet consectuamet consectur <br /> lorem ipsum sit dolor amet
            consectuamet.
          </div>
        </div>
        <SectionCardMobile
          src="/how-photo-1.png"
          description={
            <div>
              Tá com dúvidas em como criar a sua comissão <br /> de formatura? A
              gente dá uma mãozinha!
            </div>
          }
          title="Como criar a sua comissão de formatura"
        />
        <SectionCardMobile
          src="/how-photo-1.png"
          description={
            <div>
              Tá com dúvidas em como criar a sua comissão <br /> de formatura? A
              gente dá uma mãozinha!
            </div>
          }
          title="Como criar a sua comissão de formatura"
        />
        <SectionCardMobile
          src="/how-photo-1.png"
          description={
            <div>
              Tá com dúvidas em como criar a sua comissão <br /> de formatura? A
              gente dá uma mãozinha!
            </div>
          }
          title="Como criar a sua comissão de formatura"
        />
      </div>
    </>
  );
}
