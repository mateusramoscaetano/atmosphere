"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";

import leftIcon from "../../../public/left-icon.svg";
import rightIcon from "../../../public/right-icon.svg";

import { motion } from "framer-motion";
import { TextBoxBanner1 } from "../text-box/text-box-banner-1";
import { TextBoxBanner2 } from "../text-box/text-box-banner-2";

interface ICarouselProps {}

export function Gallery({}: ICarouselProps) {
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="embla  w-full min-h-full">
      <div
        className="embla__viewport w-full flex flex-col items-center justify-center"
        ref={emblaRef}
      >
        <div className="embla__container  w-full">
          <div className="embla__slide flex items-center justify-center">
            <div
              className="w-full bg-black relative embla_slide flex justify-center
            lg:h-[486px] 
            xl:h-[608px] 
            2xl:h-[730px]
            1650:h-[784px] 
            3xl:h-[913px]"
            >
              <Image
                src="/BW1.png"
                width={580}
                height={815}
                alt="banner-photo"
                className="absolute bottom-0
                lg:w-[309px] lg:h-[434px] lg:right-[174px]
                xl:w-[386px] xl:h-[543px] xl:right-[218px]
                2xl:w-[464px] 2xl:h-[652px] 2xl:right-[261px]
                1650:w-[498px] 1650:h-[700px] 1650:right-[281px]
                3xl:w-[580px] 3xl:h-[815px] 3xl:right-[327px]
                z-10
          
                "
              />
              <Image
                src="/Sky1.png"
                width={252}
                height={913}
                alt="banner-photo"
                className="absolute bottom-0
                lg:w-[134px] lg:h-[486px] lg:right-[238px]
                xl:w-[168px] xl:h-[608px] xl:right-[298px]
                2xl:w-[201px] 2xl:h-[730px] 2xl:right-[357px]
                1650:w-[216px] 1650:h-[784px] 1650:right-[384px]
                3xl:w-[252px] 3xl:h-[913px] 3xl:right-[447px]
                "
              />
              <Image
                src="/Satelite1.png"
                width={252}
                height={913}
                alt="banner-photo"
                className="absolute
                lg:w-[173px] lg:h-[115px] lg:right-[313px] lg:top-[103px]
                xl:w-[216px] xl:h-[144px] xl:right-[391px] xl:top-[129px]
                2xl:w-[260px] 2xl:h-[172px] 2xl:right-[469px] 2xl:top-[155px]
                1650:w-[279px] 1650:h-[185px] 1650:right-[504px] 1650:top-[166px]
                3xl:w-[325px] 3xl:h-[216px] 3xl:right-[587px] 3xl:top-[194px]
                "
              />
              <Image
                src="/ZEP1.png"
                width={467}
                height={117}
                alt="banner-photo"
                className="absolute z-20
                lg:w-[249px] lg:h-[160px] lg:right-[88px] lg:top-[309px]
                xl:w-[311px] xl:h-[200px] xl:right-[110px] xl:top-[386px]
                2xl:w-[374px] 2xl:h-[240px] 2xl:right-[132px] 2xl:top-[464px]
                1650:w-[402px] 1650:h-[257px] 1650:right-[141px] 1650:top-[498px]
                3xl:w-[467.74px] 3xl:h-[300px] 3xl:right-[165px] 3xl:top-[580px]
                "
              />
            </div>
            {inView === 0 && <TextBoxBanner1 />}
          </div>

          <div className="embla__slide flex items-center justify-center">
            <div
              className="w-full bg-black relative embla_slide
            lg:h-[486px] 
            xl:h-[608px] 
            2xl:h-[730px]
            1650:h-[784px] 
            3xl:h-[913px]"
            >
              <Image
                src="/cola1.png"
                width={1193}
                height={1011}
                alt="formando-2"
                className="absolute 
                lg:w-[636px] lg:h-[539px] lg:right-[48px]
                xl:w-[795px] xl:h-[674px] xl:right-[60px]
                2xl:w-[954px] 2xl:h-[808px] 2xl:right-[72px]
                1650:w-[1025px] 1650:h-[868px] 1650:right-[78px]
                3xl:w-[1193px] 3xl:h-[1011px] 3xl:right-[91px]
                z-10
                "
                style={{ scale: "0.9" }}
              />
              <Image
                src="/Asteroid1.png"
                width={283}
                height={273}
                alt="asteroid1"
                className="absolute 
                lg:w-[150px] lg:h-[145px] lg:right-[416px] lg:top-[100px]
                xl:w-[188px] xl:h-[182px] xl:right-[520px] xl:top-[125px]
                2xl:w-[226px] 2xl:h-[218px] 2xl:right-[624px] 2xl:top-[150px]
                1650:w-[243px] 1650:h-[234px] 1650:right-[671px] 1650:top-[161px]
                3xl:w-[283px] 3xl:h-[273px] 3xl:right-[781px] 3xl:top-[188px]
                
                "
              />
              <Image
                src="/Asteroid2.png"
                width={265}
                height={255}
                alt="asteroid1"
                className="absolute 
                lg:w-[136px] lg:h-[146px] lg:right-[165px] lg:top-[313px]
                xl:w-[170px] xl:h-[183px] xl:right-[206px] xl:top-[392px]
                2xl:w-[204px] 2xl:h-[220px] 2xl:right-[248px] 2xl:top-[470px]
                1650:w-[219px] 1650:h-[236px] 1650:right-[266px] 1650:top-[505px]
                3xl:w-[255px] 3xl:h-[275px] 3xl:right-[310px] 3xl:top-[588px]
                z-10
                "
              />
              <Image
                src="/arc.png"
                width={265}
                height={255}
                alt="asteroid1"
                className="absolute overflow-hidden 
                lg:w-[269px] lg:h-[295px] lg:right-[318px] lg:top-[240px]
                xl:w-[336px] xl:h-[369px] xl:right-[398px] xl:top-[300px]
                2xl:w-[404px] 2xl:h-[443px] 2xl:right-[477px] 2xl:top-[360px]
                1650:w-[433px] 1650:h-[476px] 1650:right-[513px] 1650:top-[387px]
                3xl:w-[505px] 3xl:h-[554px] 3xl:right-[597px] 3xl:top-[451px]
                 
                "
                style={{ scale: "0.9" }}
              />
              <Image
                src="/ASTRO2.png"
                width={265}
                height={255}
                alt="asteroid1"
                className="absolute 
                lg:w-[213px] lg:h-[221px] lg:right-[99px] lg:top-[75px]
                xl:w-[266px] xl:h-[277px] xl:right-[124px] xl:top-[94px]
                2xl:w-[320px] 2xl:h-[332px] 2xl:right-[148px] 2xl:top-[112px]
                1650:w-[343px] 1650:h-[357px] 1650:right-[159px] 1650:top-[121px]
                3xl:w-[400px] 3xl:h-[415.68px] 3xl:right-[186px] 3xl:top-[141px]
                z-10
                "
              />
            </div>
            {inView === 1 && <TextBoxBanner2 />}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
          onClick={scrollPrev}
          className="embla__prev text-black absolute 
          lg:left-[44.8px] 
          xl:left-[56px] 
          2xl:left-[67.2px] 
          1650:left-[72.18px] 
          3xl:left-[84px]"
        >
          <motion.img src="/left-icon.png" width={96} height={96} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
          onClick={scrollNext}
          className="embla__next text-black absolute lg:right-[44.8px] xl:right-[56px] 2xl:right-[67.2px] 1650:right-[72.18px] 3xl:right-[84px]"
        >
          <motion.img src="/right-icon.png" width={96} height={96} />
        </motion.button>
      </div>
    </div>
  );
}
