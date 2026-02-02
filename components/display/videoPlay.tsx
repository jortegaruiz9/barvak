"use client";

import * as React from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselIndicators } from "@/components/ui/carousel-indicators";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoPlayItem {
  image: string;
  alt: string;
  videoId: string;
}

interface VideoPlayProps {
  items: VideoPlayItem[];
  buttonText?: string;
  pauseText?: string;
  autoplayDelay?: number;
  className?: string;
}

const VideoPlay = ({
  items,
  buttonText = "Watch Video",
  pauseText = "Pause",
  autoplayDelay = 5000,
  className,
}: VideoPlayProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [activeVideo, setActiveVideo] = React.useState<number | null>(null);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: true }),
  );

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setCurrent(newIndex);
      setActiveVideo(null);
    };

    setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handlePlayClick = () => {
    setActiveVideo(current);
    const autoplay = api?.plugins()?.autoplay;
    if (autoplay) autoplay.stop();
  };

  const handlePauseClick = () => {
    setActiveVideo(null);
    const autoplay = api?.plugins()?.autoplay;
    if (autoplay) autoplay.play();
  };

  const images = items.map((item) => item.image);

  return (
    <div className={cn("relative w-full", className)}>
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[autoplayPlugin.current]}
      >
        <CarouselContent className="ml-0">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt?.trim() ? item.alt : "Video thumbnail"}
                  fill
                  className={cn(
                    "object-cover transition-opacity duration-500",
                    activeVideo === index ? "opacity-0" : "opacity-100",
                  )}
                />
                {activeVideo === index && (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=0&controls=1&rel=0&playsinline=1&enablejsapi=1`}
                    title={item.alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselIndicators api={api} images={images} orientation="vertical" />
      </Carousel>

      <div className="absolute bottom-4 lg:bottom-16 right-6 lg:right-12 z-10">
        {activeVideo === null ? (
          <Button variant="normal" size="normal" onClick={handlePlayClick}>
            <Play className="size-4" />
            {buttonText}
          </Button>
        ) : (
          <Button variant="normal" size="normal" onClick={handlePauseClick}>
            <Pause className="size-4" />
            {pauseText}
          </Button>
        )}
      </div>
    </div>
  );
};

export { VideoPlay };
export type { VideoPlayProps, VideoPlayItem };
