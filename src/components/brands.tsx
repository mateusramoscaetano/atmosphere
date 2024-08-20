import { BrandsMosaic } from "./gallery-section/brands-mosaic";
import { HeaderGallery } from "./gallery-section/header-gallery";

interface IBrandsProps {}

export function Brands({}: IBrandsProps) {
  return (
    <>
      <HeaderGallery
        title="Marcas"
        text={
          <div>
            Somos um hub multissoluções para todas as multi necessidades de quem
            está na <br /> faculdade. Reunimos em um só lugar: clube de
            benefícios, app de pagamentos e <br /> arrecadação, ticketeira,
            produtora audiovisual, market place e festa. Muita festa.
          </div>
        }
      />
      <BrandsMosaic src="/brands-1.png" left={true} />
      <BrandsMosaic src="/brands-2.png" left={false} />
    </>
  );
}
