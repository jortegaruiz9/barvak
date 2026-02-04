"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselIndicators } from "@/components/ui/carousel-indicators";
import { cn } from "@/lib/utils";

/** Single slide data: image + text block (title, subtitle, paragraphs) */
interface ShowCardSlide {
  image: string;
  alt: string;
  title: string;
  paragraphs: string[];
}

interface ShowCardProps {
  slides: ShowCardSlide[];
  autoplayDelay?: number;
  className?: string;
}

const ShowCard = ({
  slides,
  autoplayDelay = 15000,
  className,
}: ShowCardProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: true })
  );

  // Sync selected index with carousel API
  React.useEffect(() => {
    if (!api) return;
    const handleSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    setSelectedIndex(api.selectedScrollSnap());
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  if (slides.length === 0) return null;

  const currentSlide = slides[selectedIndex] ?? slides[0];
  const imageUrls = slides.map((s) => s.image);

  const renderTextContent = (slide: ShowCardSlide, light = false) => (
    <div className="flex flex-col gap-4">
      <h2
        className={cn(
          "text-2xl lg:text-3xl text-pretty",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {slide.title}
      </h2>
      {slide.paragraphs.length > 0 && (
        <div
          className={cn(
            "flex flex-col gap-3",
            light ? "text-white/90" : "text-gray-600"
          )}
        >
          {slide.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );

  const aspectClass = "aspect-[4/5]";
  const carouselContent = (
    <div
      className={cn(
        "relative w-full overflow-hidden lg:rounded-sm",
        aspectClass
      )}
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplayPlugin.current]}
        className="h-full w-full [&>div]:h-full"
      >
        <CarouselContent className="h-full [&>div]:h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full pl-0">
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.alt?.trim() ? slide.alt : "Show card image"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselIndicators api={api} images={imageUrls} className="bottom-6" />
    </div>
  );

  return (
    <section
      className={cn("w-full mt-10", className)}
      aria-label="Show card carousel"
    >
      {/* Mobile: text on top, carousel below (no overlap) */}
      <div className="flex flex-col md:hidden">
        <div className="px-6 py-8 bg-custom-primary text-center">
          {renderTextContent(currentSlide, true)}
        </div>
        <div className="relative w-full">{carouselContent}</div>
      </div>

      {/* Desktop: centered card with side spacing, image left, text right */}
      <div className="hidden md:flex md:justify-center md:px-6 lg:px-8">
        <div className="w-full max-w-6xl grid md:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="relative min-h-0">{carouselContent}</div>
          <div className="flex flex-col justify-center items-center text-center lg:text-left py-8 px-8">
            {renderTextContent(currentSlide)}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ShowCard };
export type { ShowCardProps, ShowCardSlide };
