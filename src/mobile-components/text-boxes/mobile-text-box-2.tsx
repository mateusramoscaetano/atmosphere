"use client";
import { ButtonBanner1 } from "@/components/buttons/button-banner-1";

interface IMobileTextBox2Props {}

export function MobileTextBox2({}: IMobileTextBox2Props) {
  return (
    <>
      <div className="absolute top-[250px] flex flex-col 3sm:left-10 2sm:left-12 sm:left-28 sm:flex md:left-48">
        <div className="mb-4 font-superline text-[40px] leading-[44px] text-white">
          A VOZ DE UMA <br />
          GERAÇÃO E A EXPRESSÃO <br /> DO AGORA
        </div>
        <div className="mb-4 text-[16px] text-white">
          Somos a Atmosfera e essa <br /> é a nossa voz!
        </div>
        <ButtonBanner1
          label="Conheça Nossas Marcas"
          className="z-40 h-[46px] w-[194px] text-[14px]"
        />
      </div>
    </>
  );
}
