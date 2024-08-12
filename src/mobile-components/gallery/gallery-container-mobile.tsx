import Mosaic from "@/components/gallery-section/mosaic";
import { GalleryHeaderMobile } from "./gallery-header-mobile";

interface IGalleryContainerMobileProps {}

export function GalleryContainerMobile({}: IGalleryContainerMobileProps) {
  return (
    <>
      <GalleryHeaderMobile />
      <Mosaic />
    </>
  );
}
