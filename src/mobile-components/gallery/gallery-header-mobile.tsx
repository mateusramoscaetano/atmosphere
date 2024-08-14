interface IGalleryHeaderMobileProps {}

export function GalleryHeaderMobile({}: IGalleryHeaderMobileProps) {
  return (
    <>
      <div
        id="gallery-mobile"
        className="flex w-full items-center justify-center gap-16 bg-black px-[41px] py-[27px]"
      >
        <div className="flex flex-col font-superline text-[100px] leading-[85px] text-[#FDD000]">
          <span>gale</span>
          <span>ria</span>
        </div>
        <div className="text-sm text-white">
          Memórias incríveis já <br /> passaram por nossas lentes!
          <br /> O seu próximo grande <br /> momento também já está para <br />{" "}
          ser revelado!
        </div>
      </div>
    </>
  );
}
