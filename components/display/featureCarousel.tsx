"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/display/sectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

interface FeatureCarouselTextItem {
  type: "text";
  title: string;
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
  description?: string;
  items: FeatureCarouselItem[];
  className?: string;
}

const TextCard = ({
  title: cardTitle,
  description: cardDescription,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-lime-500 text-white lg:bg-gray-50 lg:text-foreground p-4 lg:p-[clamp(0.75rem,1.5vw,1.5rem)] rounded-md h-full flex flex-col justify-center aspect-3/4 lg:aspect-auto">
    <h3 className="text-2xl lg:text-[clamp(1.25rem,2.5vw,1.875rem)] font-light mb-2 text-pretty shrink-0 leading-tight">
      {cardTitle}
    </h3>
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
  description,
  items,
  className,
}: FeatureCarouselProps) => {
  return (
    <section className={cn(className)}>
      <SectionHeader title={title} description={description} className="mb-8" />

      {/* Mobile/Tablet: Carousel */}
      <div className="lg:hidden">
        <Carousel
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
                  <TextCard title={item.title} description={item.description} />
                ) : (
                  <ImageCard src={item.src} alt={item.alt} />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden lg:grid grid-cols-4 gap-4 px-12">
        {items.map((item, index) => (
          <div key={index}>
            {item.type === "text" ? (
              <TextCard title={item.title} description={item.description} />
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
