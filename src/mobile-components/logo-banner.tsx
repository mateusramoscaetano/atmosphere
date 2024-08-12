import Image from "next/image";

interface ILogoBannerProps {}

export function LogoBanner({}: ILogoBannerProps) {
  return (
    <>
      <div className="min-h-full w-full items-center justify-center bg-black pb-[97px] pt-[88px]">
        <div className="flex min-h-full w-full flex-col items-center justify-center gap-5">
          <Image
            src="/logo-banners.png"
            width={117}
            height={58}
            alt="atmosphere-logo"
            className=""
          />
        </div>
      </div>
    </>
  );
}
