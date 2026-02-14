"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/display/sectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

interface FeatureCarouselTextItem {
  type: "text";
  title: string;
  subtitle?: string;
  description: string;
}

interface FeatureCarouselImageItem {
  type: "image";
  src: string;
  alt: string;
}

type FeatureCarouselItem = FeatureCarouselTextItem | FeatureCarouselImageItem;

interface FeatureCarouselProps {
  title: string;
  subtitle?: string;
  description?: string;
  items: FeatureCarouselItem[];
  className?: string;
}

const TextCard = ({
  title: cardTitle,
  subtitle: cardSubtitle,
  description: cardDescription,
}: {
  title: string;
  subtitle?: string;
  description: string;
}) => (
  <div className="bg-gray-50 text-foreground p-4 lg:p-[clamp(0.75rem,1.5vw,1.5rem)] rounded-md h-full flex flex-col justify-center aspect-3/4 lg:aspect-auto">
    <h3 className="text-2xl lg:text-[clamp(1.25rem,2.5vw,1.875rem)] font-light mb-2 text-pretty shrink-0 leading-tight">
      {cardTitle}
    </h3>
    {cardSubtitle && (
      <p className="text-xs md:text-sm lg:text-[clamp(0.75rem,1.2vw,1rem)] font-medium lg:text-muted-foreground leading-relaxed text-pretty mb-2">
        {cardSubtitle}
      </p>
    )}
    <p className="text-xs md:text-sm lg:text-[clamp(0.75rem,1.2vw,1rem)] lg:text-muted-foreground leading-relaxed text-pretty">
      {cardDescription}
    </p>
  </div>
);

const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative rounded-md overflow-hidden aspect-3/4 lg:aspect-auto lg:h-full">
    <Image
      src={src}
      alt={alt?.trim() ? alt : "Image"}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 75vw, (max-width: 1024px) 360px, 25vw"
    />
  </div>
);

const FeatureCarousel = ({
  title,
  subtitle,
  description,
  items,
  className,
}: FeatureCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className={cn(className)}>
      <SectionHeader title={title} description={description} className="mb-8" />
      {subtitle && (
        <p className="text-center text-sm lg:text-lg font-medium text-muted-foreground max-w-3xl mx-auto -mt-4 mb-8 px-4 text-pretty">
          {subtitle}
        </p>
      )}

      {/* Mobile/Tablet: Carousel */}
      <div className="lg:hidden relative">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", dragFree: true }}
          plugins={[WheelGesturesPlugin()]}
        >
          <CarouselContent className="px-4 -ml-3 mr-3">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-auto pl-3 w-[min(75vw,300px)] sm:w-[320px] md:w-[360px]"
              >
                {item.type === "text" ? (
                  <TextCard title={item.title} subtitle={item.subtitle} description={item.description} />
                ) : (
                  <ImageCard src={item.src} alt={item.alt} />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {canScrollPrev && (
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute left-3 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center rounded-full bg-white/90 shadow-md active:scale-95 transition-transform animate-in fade-in duration-300"
            aria-label="Ver anterior"
          >
            <ChevronLeft className="size-5 text-neutral-700" strokeWidth={2} />
          </button>
        )}

        {canScrollNext && (
          <button
            onClick={() => api?.scrollNext()}
            className="absolute right-3 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center rounded-full bg-white/90 shadow-md active:scale-95 transition-transform animate-in fade-in duration-300"
            aria-label="Ver siguiente"
          >
            <ChevronRight className="size-5 text-neutral-700" strokeWidth={2} />
          </button>
        )}
      </div>

      {/* Desktop: Grid */}
      <div className="hidden lg:grid grid-cols-4 gap-4 px-12">
        {items.map((item, index) => (
          <div key={index}>
            {item.type === "text" ? (
              <TextCard title={item.title} subtitle={item.subtitle} description={item.description} />
            ) : (
              <ImageCard src={item.src} alt={item.alt} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export { FeatureCarousel };
export type {
  FeatureCarouselProps,
  FeatureCarouselItem,
  FeatureCarouselTextItem,
  FeatureCarouselImageItem,
};
