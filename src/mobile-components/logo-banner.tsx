import { Social } from "@/components/social";
import Image from "next/image";
import Link from "next/link";

interface ILogoBannerProps {}

export function LogoBanner({}: ILogoBannerProps) {
  return (
    <>
      <div className="min-h-full w-full items-center justify-center bg-black pb-[97px] pt-[88px]">
        <div className="flex min-h-full w-full flex-col items-center justify-center gap-5">
          <Image
            src="/logo-banners.svg"
            width={117}
            height={58}
            alt="atmosphere-logo"
            className=""
          />
        </div>
        <div className="mb-10 mt-10 flex w-full items-end justify-center 3sm:gap-[30px]">
          <Social />
        </div>
        <div className="flex w-full items-end justify-center 3sm:gap-[30px]">
          <Link href="https://nestlab.com.br" target="_blank">
            <Image
              src="/made-by-nestlab.png"
              width={100}
              height={20}
              alt="logo-nestlab"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
