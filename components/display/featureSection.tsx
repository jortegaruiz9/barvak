"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
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

interface FeatureSectionProps {
  title: string;
  description: string | string[];
  button?: { text: string; href: string };
  buttonVariant?:
    | "default"
    | "normal"
    | "outline"
    | "outline_white"
    | "secondary"
    | "ghost"
    | "link";
  images: { src: string; alt: string }[];
  cardPosition?: "left" | "right";
  autoplayDelay?: number;
  className?: string;
}

const FeatureSection = ({
  title,
  description,
  button,
  buttonVariant = "normal",
  images,
  cardPosition = "right",
  autoplayDelay = 5000,
  className,
}: FeatureSectionProps) => {
  const [api, setApi] = React.useState<CarouselApi>();

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: true })
  );

  const hasCarousel = images.length >= 2;

  // Handle description as string or array of strings
  const descriptionArray = Array.isArray(description)
    ? description
    : description
    ? [description]
    : [];

  // Convert images to string array for CarouselIndicators
  const imageUrls = images.map((img) => img.src);

  const renderTextContent = () => (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl lg:text-3xl text-gray-900 text-pretty">
        {title}
      </h2>
      {descriptionArray.length > 0 && (
        <div className="flex flex-col gap-3 text-gray-600">
          {descriptionArray.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}
      {button && (
        <div className="pt-2">
          <Button variant={buttonVariant} asChild className="rounded-full">
            <Link href={button.href}>{button.text}</Link>
          </Button>
        </div>
      )}
    </div>
  );

  const renderSingleImage = (aspectClass: string) => (
    <div className={cn("relative w-full", aspectClass)}>
      <Image
        src={images[0].src}
        alt={images[0].alt?.trim() ? images[0].alt : "Section image"}
        fill
        sizes="100vw"
        quality={85}
        className="object-cover"
        loading="lazy"
      />
    </div>
  );

  const renderCarousel = (aspectClass: string) => (
    <div className={cn("relative w-full", aspectClass)}>
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
                  src={image.src}
                  alt={image.alt?.trim() ? image.alt : "Section image"}
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
      <CarouselIndicators api={api} images={imageUrls} className="bottom-6" />
    </div>
  );

  const renderMedia = (aspectClass: string) =>
    hasCarousel ? renderCarousel(aspectClass) : renderSingleImage(aspectClass);

  return (
    <section className={cn("w-full", className)}>
      {/* Mobile: flex-col, text above, image below */}
      <div className="md:hidden flex flex-col">
        <div className="px-6 pb-8 text-center bg-white/80">
          {renderTextContent()}
        </div>
        <div className="relative">{renderMedia("aspect-[4/3]")}</div>
      </div>

      {/* Desktop: image with overlaid card */}
      <div className="hidden md:block relative">
        {renderMedia("aspect-[16/9] lg:aspect-[21/9]")}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 z-10 bg-white/80 p-8 lg:p-10 max-w-md shadow-lg",
            cardPosition === "right"
              ? "right-12 lg:right-16"
              : "left-12 lg:left-16"
          )}
        >
          {renderTextContent()}
        </div>
      </div>
    </section>
  );
};

export { FeatureSection };
export type { FeatureSectionProps };
