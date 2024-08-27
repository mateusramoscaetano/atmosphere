"use client";
import { ButtonBanner1 } from "@/components/buttons/button-banner-1";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-api";

interface IYoutubeSectionMobileProps {}

export function YoutubeSectionMobile({}: IYoutubeSectionMobileProps) {
  const youtubeVideos = [
    "https://www.youtube.com/embed/6bfuypYO7oE",
    "https://www.youtube.com/embed/PQ4NmUwDFMQ",
    "https://www.youtube.com/embed/cCqzdact0B0",
    "https://www.youtube.com/embed/ZZbl6uwPYco",
    "https://www.youtube.com/embed/v_FWJo-TQIo",
    "https://www.youtube.com/embed/v0bpmHcwGYw",
    "https://www.youtube.com/embed/y_6CYQHLwkc",
    "https://www.youtube.com/embed/5uQDuwazL6Y",
  ];
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="mt-4 flex h-[490px] w-full flex-col items-center bg-black pt-[47px]"
      >
        <div className="mb-[42px] flex w-[188px] items-center justify-center border-b-[3px] border-[#F35937] font-superline text-[45px] leading-tight text-white">
          Cases Atmosféricos
        </div>
        <CarouselContent className="3sm:w-[350px]">
          {youtubeVideos.map((videoUrl, index) => (
            <CarouselItem
              key={index}
              className="flex basis-full items-center justify-center"
            >
              <div className="flex min-h-full w-[307px] items-center justify-center">
                <div className="flex h-full w-[307px] items-center justify-center bg-black">
                  <iframe
                    className="w-[400px] border-2 border-black"
                    width="307"
                    height="173"
                    src={videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <a
          href="https://www.youtube.com/@atmosferagrupo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex w-[285px] items-center justify-center"
        >
          <ButtonBanner1
            label="Veja Mais em Nosso Youtube"
            className="3sm:w-[240px] 4xl:w-[285px]"
          />
        </a>
        <CarouselPrevious className="absolute z-50 3sm:left-2 3sm:scale-50" />
        <CarouselNext className="absolute z-50 3sm:right-2 3sm:scale-50" />
      </Carousel>
    </>
  );
}
