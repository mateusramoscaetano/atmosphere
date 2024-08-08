import { AstronautBanner2 } from "@/components/astronaut-section/astronatu-banner2";
import { AstronautBannerContent } from "@/components/astronaut-section/astronaut-banner";
import { Gallery } from "@/components/carousel/gallery";
import { GallerySection } from "@/components/gallery-section";
import { Header } from "@/components/header";
import { HowToMade } from "@/components/how-to-made";
import { OurBrands } from "@/components/our-brands";
import { SecondSection } from "@/components/second-section";
import Test from "@/components/test";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      <Header />

      <Gallery />

      <SecondSection />

      <OurBrands />

      <HowToMade />

      <GallerySection />

      <AstronautBannerContent />
    </main>
  );
}
