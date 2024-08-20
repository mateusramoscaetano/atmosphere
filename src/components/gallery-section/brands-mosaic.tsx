import cn from "@/utils/cn";
import Image from "next/image";

interface IBrandsMosaicProps {
  src: string;
  left: boolean;
}

export function BrandsMosaic({ left, src }: IBrandsMosaicProps) {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-0">
      {left ? (
        <>
          {/* Quadrado Branco à Esquerda */}
          <div className="h-[602px] w-full bg-white"></div>
          {/* Imagem à Direita */}
          <div className="relative h-[602px] w-full">
            <Image
              src={src}
              alt="Image 1"
              layout="fill" // Preenche o contêiner
              className="object-cover" // Ajusta a imagem para cobrir o contêiner
            />
          </div>
        </>
      ) : (
        <>
          {/* Imagem à Esquerda */}
          <div className="relative h-[602px] w-full">
            <Image
              src={src}
              alt="Image 1"
              layout="fill" // Preenche o contêiner
              className="object-cover" // Ajusta a imagem para cobrir o contêiner
            />
          </div>
          {/* Quadrado Branco à Direita */}
          <div className="h-[602px] w-full bg-white"></div>
        </>
      )}
    </div>
  );
}
