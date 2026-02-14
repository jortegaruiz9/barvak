"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./sectionHeader";

interface VisualStoryImage {
  src: string;
  alt: string;
}

interface VisualStorySectionProps {
  topImages: VisualStoryImage[];
  carouselImages: VisualStoryImage[];
  title?: string;
  description?: string;
  className?: string;
}

const VisualStorySection = ({
  topImages,
  carouselImages,
  title,
  description,
  className,
}: VisualStorySectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 0);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollBy = (direction: 1 | -1) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>("div > div");
    if (!card) return;
    const gap = window.innerWidth >= 768 ? 32 : 12;
    container.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  // Ensure we have exactly 2 top images
  const displayTopImages = topImages.slice(0, 2);

  return (
    <section
      className={cn("w-full flex flex-col gap-3 md:gap-8", className)}
      aria-label="Visual story section"
    >
      {/* Title and description */}
      {title && (
        <SectionHeader
          title={title}
          description={description}
          className="pb-4"
        />
      )}

      {/* Top section - Two images side by side */}
      {displayTopImages.length > 0 && (
        <div className="px-4 md:px-12 grid grid-cols-2 gap-3 md:gap-8">
          {displayTopImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-16/10 md:aspect-auto md:h-[clamp(16rem,calc((100svh-4rem-2rem)/2),25rem)] rounded-md overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt?.trim() ? image.alt : "Story image"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 50vw"
              />
            </div>
          ))}
        </div>
      )}

      {/* Bottom section - Horizontal scroll gallery */}
      {carouselImages.length > 0 && (
        <div className="relative">
          <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 md:gap-8 pl-4 md:pl-12 after:content-[''] after:shrink-0 after:w-2 md:after:w-6">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="relative shrink-0 w-[calc((100vw-2rem-0.75rem)/2.2)] md:w-[calc((100vw-6rem)/2.2)] h-[calc((100vw-2.75rem)/2*10/16)] md:h-[clamp(16rem,calc((100svh-4rem-2rem)/2),25rem)] rounded-md overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt?.trim() ? image.alt : "Story image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll buttons */}
          {canScrollPrev && (
            <button
              onClick={() => scrollBy(-1)}
              className="absolute left-3 md:left-12 top-1/2 -translate-y-1/2 size-10 md:size-12 flex items-center justify-center rounded-full bg-white/90 shadow-md active:scale-95 transition-transform animate-in fade-in duration-300"
              aria-label="Ver anterior"
            >
              <ChevronLeft className="size-5 md:size-6 text-neutral-700" strokeWidth={2} />
            </button>
          )}

          {canScrollNext && (
            <button
              onClick={() => scrollBy(1)}
              className="absolute right-3 md:right-12 top-1/2 -translate-y-1/2 size-10 md:size-12 flex items-center justify-center rounded-full bg-white/90 shadow-md active:scale-95 transition-transform animate-in fade-in duration-300"
              aria-label="Ver siguiente"
            >
              <ChevronRight className="size-5 md:size-6 text-neutral-700" strokeWidth={2} />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export { VisualStorySection };
export type { VisualStoryImage, VisualStorySectionProps };
