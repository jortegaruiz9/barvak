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
import { SectionHeader } from "./sectionHeader";

interface FullscreenMediaProps {
  images: string[];
  imageAlt?: string | string[];
  className?: string;
  autoplayDelay?: number;
  title?: string;
  description?: string;
}

const FullscreenMedia = ({
  images,
  imageAlt,
  className,
  autoplayDelay = 5000,
  title,
  description,
}: FullscreenMediaProps) => {
  const [api, setApi] = React.useState<CarouselApi>();

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: true })
  );

  const renderTextSection = () => {
    if (!title) return null;
    return (
      <SectionHeader
        title={title}
        description={description}
        className="pb-8 md:pb-12"
      />
    );
  };

  // Single image mode
  if (images.length === 1) {
    const altText =
      typeof imageAlt === "string"
        ? imageAlt
        : Array.isArray(imageAlt)
          ? imageAlt[0]
          : "Fullscreen media";

    return (
      <div className={cn("w-full", className)}>
        {renderTextSection()}
        <section
          className="relative w-full aspect-4/3 md:aspect-auto md:h-[calc(100vh-4rem)] overflow-hidden"
          aria-label="Fullscreen media"
        >
          <Image
            src={images[0]}
            alt={altText}
            fill
            sizes="100vw"
            quality={85}
            className="object-cover"
            loading="lazy"
          />
        </section>
      </div>
    );
  }

  // Carousel mode (2+ images)
  const getAltText = (index: number): string => {
    if (typeof imageAlt === "string") return imageAlt;
    if (Array.isArray(imageAlt) && imageAlt[index]) return imageAlt[index];
    return `Slide ${index + 1} of ${images.length}`;
  };

  return (
    <div className={cn("w-full", className)}>
      {renderTextSection()}
      <section
        className="relative w-full aspect-4/3 md:aspect-auto md:h-[calc(100vh-4rem)] overflow-hidden"
        aria-label="Fullscreen media carousel"
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
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="relative h-full w-full">
                  <Image
                    src={image}
                    alt={getAltText(index)}
                    fill
                    sizes="100vw"
                    quality={85}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <CarouselIndicators api={api} images={images} className="bottom-12" />
      </section>
    </div>
  );
};

export { FullscreenMedia };
export type { FullscreenMediaProps };
