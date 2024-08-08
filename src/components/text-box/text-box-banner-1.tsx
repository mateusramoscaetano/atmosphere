import { ButtonBanner1 } from "../buttons/button-banner-1";

interface ITextBoxBanner1Props {}

export function TextBoxBanner1({}: ITextBoxBanner1Props) {
  return (
    <div
      className="absolute w-[1500px]
lg:top-[143px] lg:left-[189px]
xl:top-[179px] xl:left-[237px]
2xl:top-[215px] 2xl:left-[284px]

    3xl:top-[269px] 3xl:left-[356px]
    "
    >
      <div
        className="text-white font-superline mb-4
      
      lg:w-[261px]  lg:h-[136px] lg:text-[42px]  lg:leading-[45px]
      xl:w-[326px]  xl:h-[170px] xl:text-[53px]  xl:leading-[56px] 
      2xl:w-[392px]  2xl:h-[204px] 2xl:text-[64px]  2xl:leading-[68px] 
      3xl:w-[490px]  3xl:h-[255px] 3xl:text-[80px]  3xl:leading-[85px] 
      
      "
      >
        UM HUB MULTISSOLUÇÕES PARA AS MULTINECESSIDADES DE QUEM ESTÁ NA
        FACULDADE
      </div>
      <div
        className="text-white mb-[28px]
      lg:w-[336px] lg:h-[31px] lg:text-[8.5px]
      xl:w-[420px] xl:h-[39px] xl:text-[10.6px]
      2xl:w-[504px] 2xl:h-[47px] 2xl:text-[12.8px]
      3xl:w-[630px] 3xl:h-[59px] 3xl:text-[16px]
      "
      >
        Reunimos em um só lugar: clube de benefícios, app de pagamentos <br /> e
        arrecadação, ticketeira, produtora audiovisual, marketplace e festa.
        Muita festa.
      </div>
      <ButtonBanner1 label="Quero Saber Mais" />
    </div>
  );
}
