import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel-api";

interface IYoutubeSectionProps {}

export function YoutubeSection({}: IYoutubeSectionProps) {
  const youtubeVideos = [
    "https://www.youtube.com/embed/6bfuypYO7oE",
    "https://www.youtube.com/embed/PQ4NmUwDFMQ",
    "https://www.youtube.com/embed/cCqzdact0B0",
    "https://www.youtube.com/embed/ZZbl6uwPYco",
    "https://www.youtube.com/embed/v_FWJo-TQIo",
    "https://www.youtube.com/embed/v0bpmHcwGYw",
    "https://www.youtube.com/embed/y_6CYQHLwkc",
    "https://www.youtube.com/embed/5uQDuwazL6Y",
  ];

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          dragFree: false,
          dragThreshold: 0,
          watchDrag: false,
        }}
        className="mt-4 flex h-[400px] w-full items-center justify-center bg-black"
      >
        <CarouselContent>
          {youtubeVideos.map((videoUrl, index) => (
            <CarouselItem
              key={index}
              className="flex basis-1/4 items-center justify-center"
            >
              <div className="flex min-h-full w-full items-center justify-center">
                <iframe
                  className="border-2 border-black"
                  width="600"
                  height="300"
                  src={videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-10 z-50" />
        <CarouselNext className="absolute right-10 z-50" />
      </Carousel>
    </>
  );
}
