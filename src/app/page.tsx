import { AstronautBanner2 } from "@/components/astronaut-section/astronatu-banner2";
import { AstronautBannerContent } from "@/components/astronaut-section/astronaut-banner";
import { Gallery } from "@/components/carousel/gallery";
import { Footer } from "@/components/footer";
import { FormSectionContainer } from "@/components/form-section/form-section-container";
import { GallerySection } from "@/components/gallery-section";
import { Header } from "@/components/header";
import { MobileHeader } from "@/mobile-components/mobile-header";
import { HowToMade } from "@/components/how-to-made";
import { OurBrands } from "@/components/our-brands";
import { SecondSection } from "@/components/second-section";
import Test from "@/components/test";

import Image from "next/image";
import { MobileGallery } from "@/mobile-components/carousel/mobile-gallery";
import { SecondSectionMobile } from "@/mobile-components/second-section/second-section-mobile";
import { OurBrandsMobile } from "@/mobile-components/our-brands/our-brands-mobile";
import { HowToMadeMobile } from "@/mobile-components/how-to-made/how-to-made-mobile";
import { GalleryContainerMobile } from "@/mobile-components/gallery/gallery-container-mobile";
import { AstronautBannerMobile } from "@/mobile-components/astronaut/astronaut-banner-mobile";
import { FormSectionMobile } from "@/mobile-components/form-section/form-section-mobile";
import { LogoBanner } from "@/mobile-components/logo-banner";
import { YoutubeSection } from "@/components/carousel/youtube-section";
import { VideoSection } from "@/components/video-section";
import { YoutubeSectionMobile } from "@/mobile-components/carousel/youtube-section-mobile";

export default function Home() {
  return (
    <>
      <main className="hidden min-h-screen flex-col items-center bg-black font-neue lg:flex">
        <Header />

        <Gallery />

        <SecondSection />

        <OurBrands />

        <HowToMade />

        <GallerySection />

        <AstronautBannerContent />

        <div className="h-[43px] w-full bg-[#F35937]"></div>
        <div className="h-[43px] w-full bg-[#0F4AE4]"></div>
        <div className="h-[43px] w-full bg-[#FDD000]"></div>

        <VideoSection />

        <FormSectionContainer />

        <Footer />
      </main>
      <main className="bg-w flex min-h-screen max-w-[1024px] flex-col items-center bg-black font-neue lg:hidden">
        <MobileHeader />
        <MobileGallery />
        <SecondSectionMobile />
        <OurBrandsMobile />
        <HowToMadeMobile />
        <GalleryContainerMobile />
        <AstronautBannerMobile />
        <YoutubeSectionMobile />
        <FormSectionMobile />
        <LogoBanner />
      </main>
    </>
  );
}
