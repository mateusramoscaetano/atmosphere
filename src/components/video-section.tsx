"use client";
import { ButtonBanner1 } from "./buttons/button-banner-1";
import { YoutubeSection } from "./carousel/youtube-section";
import { FormSectionContainer } from "./form-section/form-section-container";

interface IVideoSectionProps {}

export function VideoSection({}: IVideoSectionProps) {
  return (
    <>
      <div className="relative flex min-h-full w-full flex-col items-center justify-center overflow-hidden bg-black bg-gradient-to-r from-black to-transparent pb-[70px] pt-[85px]">
        <div className="mb-[3px] flex w-[188px] items-center justify-center border-b-[3px] border-[#F35937] font-superline text-white lg:text-[24px] xl:text-[45px] 3xl:text-[45px]">
          Cases Atmosféricos
        </div>
        <YoutubeSection />
        <a
          href="https://www.youtube.com/@atmosferagrupo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[92px] flex w-[285px] items-center justify-center"
        >
          <ButtonBanner1
            label="Veja Mais em Nosso Youtube"
            className="lg:w-[230px] 4xl:w-[285px]"
          />
        </a>
        <div className="t absolute left-0 h-[803px] w-[150px] bg-gradient-to-r from-black/90 to-transparent"></div>
        <div className="absolute right-0 h-[803px] w-[150px] bg-gradient-to-l from-black/90 to-transparent"></div>
      </div>
    </>
  );
}
