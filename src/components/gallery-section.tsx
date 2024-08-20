import { HeaderGallery } from "./gallery-section/header-gallery";
import Mosaic from "./gallery-section/mosaic";

interface IGallerySectionProps {}

export function GallerySection({}: IGallerySectionProps) {
  return (
    <>
      <HeaderGallery
        title="Galeria"
        text={
          <div>
            Memórias incríveis já passaram por nossas lentes! <br /> O seu
            próximo grande momento também já está para ser revelado!
          </div>
        }
      />
      <Mosaic />
    </>
  );
}
