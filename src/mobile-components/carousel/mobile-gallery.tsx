"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import { DotButton, useDotButton } from "@/utils/use-dot-button";
import { MobileTextBox1 } from "../text-boxes/mobile-textbox-1";
import { MobileTextBox2 } from "../text-boxes/mobile-text-box-2";

interface IMobileGalleryProps {}

export function MobileGallery({}: IMobileGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [inView, setInView] = useState<number>(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", (event: EmblaCarouselType) => {
        const activeSlideIndex = event.selectedScrollSnap();
        setInView(activeSlideIndex);
      });
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <>
      <div id="home-mobile" className="embla min-h-full w-full">
        <div
          className="embla__viewport flex w-full flex-col items-center justify-center"
          ref={emblaRef}
        >
          <div className="embla__container relative h-[740px] w-full">
            <div className="embla__slide flex items-center justify-center">
              <div className="embla_slide relative flex h-full w-full justify-center bg-black">
                <Image
                  src="/BW1.png"
                  width={459}
                  height={645}
                  alt="banner-photo"
                  className="absolute bottom-0 z-10 3sm:left-[-220px] 2sm:left-[-200px] sm:left-[-50px] md:left-[75px]"
                />
                <Image
                  src="/Sky1.png"
                  width={231}
                  height={839}
                  alt="banner-photo"
                  className="absolute 3sm:left-[-68px] md:left-[300px]"
                />
                <Image
                  src="/Satelite1.png"
                  width={252}
                  height={913}
                  alt="banner-photo"
                  className="absolute left-[-31px] top-[15px] w-[200px]"
                />
                <Image
                  src="/ZEP1.png"
                  width={243}
                  height={117}
                  alt="banner-photo"
                  className="absolute bottom-[-30px] z-20"
                />
              </div>
              {inView === 0 && <MobileTextBox1 />}
            </div>

            <div className="embla__slide flex items-center justify-center overflow-hidden">
              <div className="embla_slide relative flex h-full w-full justify-center bg-black">
                <Image
                  src="/colacao.png"
                  width={435}
                  height={852}
                  alt="formando-2"
                  className="absolute z-30 scale-75 3sm:bottom-[-80px] 3sm:right-[-100px] 2sm:right-[-50px] sm:right-0 md:right-[100px]"
                />
                <Image
                  src="/Asteroid1.png"
                  width={283}
                  height={273}
                  alt="asteroid1"
                  className="absolute right-[-35px] top-[50px] z-20 scale-75"
                />
                <Image
                  src="/Asteroid2.png"
                  width={265}
                  height={255}
                  alt="asteroid1"
                  className="absolute bottom-[-86px] left-[-80px] z-40 rotate-[97deg]"
                />
                <Image
                  src="/arc.png"
                  width={265}
                  height={255}
                  alt="asteroid1"
                  className="absolute top-[-25px] z-10 rotate-180 scale-75"
                />
                {inView === 1 && <MobileTextBox2 />}
              </div>
            </div>
          </div>

          {/* Adicionando os Dots */}
          <div className="embla__dots 1 absolute bottom-[-30px] z-20 flex justify-center gap-2 sm:bottom-[-300px]">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`embla__dot h-2 w-2 rounded-full bg-[#FDD100] ${
                  inView === index
                    ? "scale-105 opacity-100"
                    : "bg-white opacity-50"
                }`}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
            onClick={scrollPrev}
            className="embla__prev absolute bottom-[-50px] left-[15px] text-black sm:bottom-[300px]"
          >
            <motion.img src="/left-icon.png" width={60} height={96} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
            onClick={scrollNext}
            className="embla__next absolute bottom-[-50px] right-[15px] text-black sm:bottom-[300px]"
          >
            <motion.img src="/right-icon.png" width={60} height={96} />
          </motion.button>
        </div>
      </div>
    </>
  );
}
