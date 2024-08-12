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

        <FormSectionContainer />

        <Footer />
      </main>
      <main className="bg-w flex min-h-screen max-w-[1024px] flex-col items-center bg-black font-neue lg:hidden">
        <MobileHeader />
        <MobileGallery />
      </main>
    </>
  );
}
