import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface IBrandsMosaicProps {
  src: string;
  left: boolean;
  description?: ReactNode;
  hrefInsta: string;
  hrefSite: string;
}

export function BrandsMosaic({
  left,
  src,
  description,
  hrefInsta,
  hrefSite,
}: IBrandsMosaicProps) {
  return (
    <div
      className={cn(
        "min-h-full w-full gap-0 overflow-hidden",
        left
          ? "3sm:flex 3sm:flex-col-reverse 3sm:items-center xl:flex xl:flex-row"
          : "3sm:flex 3sm:flex-col 3sm:items-center xl:flex xl:flex-row",
      )}
    >
      {left ? (
        <>
          <div className="relative z-10 flex min-h-[450px] flex-col justify-center bg-white pr-[41px] 3sm:w-full 3sm:pl-10 3sm:pt-4 md:pt-0 lg:pl-0 xl:w-1/2">
            <div className="mb-4 content-end text-right font-neue font-medium 3sm:text-sm 2xl:text-lg">
              {description}
            </div>
            <div className="flex w-full justify-end">
              <Link href={hrefInsta}>
                <Image
                  src="/site-brands.svg"
                  alt="Image 1"
                  width={62}
                  height={62}
                  className="object-cover"
                />
              </Link>
              <Link href={hrefSite}>
                <Image
                  src="/instagram-brands.svg"
                  alt="Image 1"
                  width={62}
                  height={62}
                  className="object-cover"
                />
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center 3sm:min-h-full 3sm:w-full xl:min-h-[450px] xl:w-1/2">
            <Image
              src={src}
              alt="Image 1"
              width={960}
              height={450}
              className="object-cover 3sm:h-full 3sm:scale-100 md:scale-125 xl:h-[450px] xl:scale-100 3xl:scale-150"
            />
          </div>
        </>
      ) : (
        <>
          <div className="relative flex items-center justify-center 3sm:min-h-full 3sm:w-full xl:min-h-[450px] xl:w-1/2">
            <Image
              src={src}
              alt="Image 1"
              width={960}
              height={450}
              className="object-cover 3sm:h-full 3sm:scale-100 md:scale-125 xl:h-[450px] xl:scale-100 3xl:scale-150"
            />
          </div>

          <div className="relative z-10 flex min-h-[450px] flex-col justify-center overflow-hidden bg-white pl-[36px] 3sm:w-full 3sm:pt-4 md:pt-0 xl:w-1/2">
            <div className="mb-4 content-start text-left font-neue font-medium 3sm:text-sm 2xl:text-lg">
              {description}
            </div>
            <div className="flex w-full justify-start">
              <Link href={hrefInsta}>
                <Image
                  src="/site-brands.svg"
                  alt="Image 1"
                  width={62}
                  height={62}
                  className="object-cover"
                />
              </Link>
              <Link href={hrefSite}>
                <Image
                  src="/instagram-brands.svg"
                  alt="Image 1"
                  width={62}
                  height={62}
                  className="object-cover"
                />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
