"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import { DotButton, useDotButton } from "@/utils/use-dot-button";
import { MobileTextBox1 } from "../text-boxes/mobile-textbox-1";

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
      <div className="embla min-h-full w-full">
        <div
          className="embla__viewport flex w-full flex-col items-center justify-center"
          ref={emblaRef}
        >
          <div className="embla__container h-[740px] w-full">
            <div className="embla__slide flex items-center justify-center">
              <div className="embla_slide relative flex h-full w-full justify-center bg-black">
                <Image
                  src="/BW1.png"
                  width={459}
                  height={645}
                  alt="banner-photo"
                  className="absolute top-[166px] z-10 3sm:left-[-220px] 2sm:left-[-200px] sm:left-[-50px] md:left-[75px]"
                />
                <Image
                  src="/Sky1.png"
                  width={231}
                  height={839}
                  alt="banner-photo"
                  className="absolute 3sm:left-[-48px] md:left-[300px]"
                />
                <Image
                  src="/Satelite1.png"
                  width={252}
                  height={913}
                  alt="banner-photo"
                  className="absolute left-[-31px] top-[15px]"
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

            <div className="embla__slide flex items-center justify-center">
              <div className="embla_slide relative w-full bg-black lg:h-[486px] xl:h-[608px] 2xl:h-[730px] 1650:h-[784px] 3xl:h-[913px]">
                <Image
                  src="/cola1.png"
                  width={1193}
                  height={1011}
                  alt="formando-2"
                />
                <Image
                  src="/Asteroid1.png"
                  width={283}
                  height={273}
                  alt="asteroid1"
                />
                <Image
                  src="/Asteroid2.png"
                  width={265}
                  height={255}
                  alt="asteroid1"
                />
                <Image
                  src="/arc.png"
                  width={265}
                  height={255}
                  alt="asteroid1"
                />
                <Image
                  src="/ASTRO2.png"
                  width={265}
                  height={255}
                  alt="asteroid1"
                />
              </div>
              {inView === 1 && <></>}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
            onClick={scrollPrev}
            className="embla__prev absolute bottom-[200px] left-[25px] text-black"
          >
            <motion.img src="/left-icon.png" width={60} height={96} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
            onClick={scrollNext}
            className="embla__next absolute bottom-[200px] right-[25px] text-black"
          >
            <motion.img src="/right-icon.png" width={60} height={96} />
          </motion.button>
        </div>
      </div>
    </>
  );
}
