"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselIndicators } from "@/components/ui/carousel-indicators";
import { cn } from "@/lib/utils";

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
  const autoplayRef = React.useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Handle autoplay for carousel
  React.useEffect(() => {
    if (!api || images.length <= 1) return;

    const startAutoplay = () => {
      if (autoplayRef.current) return;
      autoplayRef.current = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, autoplayDelay);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    const clearResumeTimeout = () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }
    };

    startAutoplay();

    const handleSelect = () => {
      stopAutoplay();
      clearResumeTimeout();
      resumeTimeoutRef.current = setTimeout(() => {
        startAutoplay();
      }, autoplayDelay);
    };

    api.on("select", handleSelect);

    return () => {
      stopAutoplay();
      clearResumeTimeout();
      api.off("select", handleSelect);
    };
  }, [api, images.length, autoplayDelay]);

  const renderTextSection = () => {
    if (!title && !description) return null;
    return (
      <div className="w-full px-4 py-12 text-center">
        {title && (
          <h1 className="mb-3 text-2xl md:text-3xl font-normal text-balance">
            {title}
          </h1>
        )}
        {description && (
          <p className="mx-auto max-w-3xl text-base text-gray-700">
            {description}
          </p>
        )}
      </div>
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
            quality={90}
            className="object-cover"
            priority
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
                    quality={90}
                    className="object-cover"
                    priority={index === 0}
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
