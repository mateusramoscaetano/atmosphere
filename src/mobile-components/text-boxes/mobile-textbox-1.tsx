import { ButtonBanner1 } from "@/components/buttons/button-banner-1";

interface IMobileTextBox1Props {}

export function MobileTextBox1({}: IMobileTextBox1Props) {
  return (
    <>
      <div className="absolute flex w-1/2 max-w-[227px] flex-col 3sm:right-2 3sm:top-[50px] 2sm:top-[0px] md:right-10">
        <div className="text-whit mb-4 font-superline text-[40px] leading-[44px] text-white">
          SOMOS UM HUB MULTISSOLUÇÕES PARA <br /> AS MULTINECESSIDADES DE <br />{" "}
          QUEM ESTÁ NA FACULDADE
        </div>
        <div className="mb-4 text-[16px] text-white">
          Reunimos em um só lugar:
          <br /> clube de benefícios, app de pagamentos e arrecadação,
          <br /> ticketeira, produtora <br /> audiovisual, marketplace e <br />{" "}
          festa. Muita festa.
        </div>
        <ButtonBanner1
          label="Quero Saber Mais"
          className="z-50 h-[46px] w-[148px] text-[14px]"
        />
      </div>
    </>
  );
}
