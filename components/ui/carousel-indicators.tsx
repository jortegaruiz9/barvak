"use client";

import * as React from "react";
import { type CarouselApi } from "./carousel";
import { cn } from "@/lib/utils";

interface CarouselIndicatorsProps {
  api: CarouselApi | undefined;
  images: string[];
  className?: string;
  orientation?: "horizontal" | "vertical";
}

const CarouselIndicators = ({
  api,
  images,
  className,
  orientation = "horizontal",
}: CarouselIndicatorsProps) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handleIndicatorClick = React.useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleIndicatorClick(index);
      }
    },
    [handleIndicatorClick]
  );

  if (images.length <= 1) return null;

  return (
    <div
      className={cn(
        "absolute z-10 flex gap-3",
        orientation === "horizontal"
          ? "bottom-6 left-1/2 -translate-x-1/2"
          : "left-6 top-1/2 -translate-y-1/2 flex-col",
        className
      )}
      role="tablist"
      aria-label="Carousel indicators"
    >
      {images.map((_, index) => {
        const isActive = index === current;

        return (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => handleIndicatorClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cn(
              "size-3 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              isActive ? "bg-lime-500" : "bg-white opacity-80 hover:opacity-100"
            )}
          />
        );
      })}
    </div>
  );
};

export { CarouselIndicators };
export type { CarouselIndicatorsProps };
