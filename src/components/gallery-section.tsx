import { HeaderGallery } from "./gallery-section/header-gallery";
import Mosaic from "./gallery-section/mosaic";

interface IGallerySectionProps {}

export function GallerySection({}: IGallerySectionProps) {
  return (
    <>
      <HeaderGallery />
      <Mosaic />
    </>
  );
}
