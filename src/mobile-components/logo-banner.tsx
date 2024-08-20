import Image from "next/image";

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
        <div className="mt-10 flex w-full items-end justify-center 3sm:gap-[30px]">
          <Image src="/insta.svg" width={25} height={25} alt="logo-insta" />
          <Image src="/youtube.svg" width={27} height={20} alt="logo-insta" />
          <Image src="/linkedin.svg" width={29} height={30} alt="logo-insta" />
          <Image src="/mail5.svg" width={30} height={21} alt="logo-insta" />
        </div>
      </div>
    </>
  );
}
