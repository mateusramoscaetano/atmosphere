import { ButtonBanner1 } from "../buttons/button-banner-1";

interface ITextBoxBanner2Props {}

export function TextBoxBanner2({}: ITextBoxBanner2Props) {
  return (
    <div
      className="absolute w-full mx-auto
      lg:top-[194px] lg:ml-[373px]
      xl:top-[242px] xl:ml-[466px]
      2xl:top-[291px] 2xl:ml-[560px] 
      3xl:top-[364px] 3xl:ml-[700px]

      "
    >
      <div
        className="text-white font-superline mb-4
      
      lg:w-[212px]  lg:h-[90px] lg:text-[42px]  lg:leading-[45px]
      xl:w-[265px]  xl:h-[113px] xl:text-[53px]  xl:leading-[56px] 
      2xl:w-[318px]  2xl:h-[136px] 2xl:text-[64px]  2xl:leading-[68px] 
      3xl:w-[398px]  3xl:h-[170px] 3xl:text-[80px]  3xl:leading-[85px] 

      "
      >
        a voz de uma geração <br /> e a expressão do agora
      </div>
      <div
        className="text-white mb-[50px]
      lg:w-[169px] lg:h-[15px] lg:text-[8.5px]
      xl:w-[212px] xl:h-[19px] xl:text-[10.6px]
      2xl:w-[254px] 2xl:h-[23px] 2xl:text-[12.8px]
      3xl:w-[318px] 3xl:h-[29px] 3xl:text-[16px]
      "
      >
        Somos a Atmosfera e essa é a nossa voz!
      </div>
      <ButtonBanner1 label="Conheça Nossas Marcas" />
    </div>
  );
}
