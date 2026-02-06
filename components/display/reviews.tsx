"use client";

import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

interface Review {
  quote: string;
  author: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const ReviewCard = ({ quote, author }: Review) => (
  <div className="bg-lime-500 rounded-2xl p-8 lg:p-10 flex flex-col justify-between h-[300px] lg:h-[340px]">
    <Icon
      icon="icomoon-free:quotes-left"
      className="text-4xl text-white opacity-80 mb-4"
    />

    <p className="text-white/90 leading-relaxed tracking-[0.01em] font-normal text-sm lg:text-base line-clamp-6 text-pretty">
      {quote}
    </p>
    <p className="text-white font-medium text-lg mt-6">{author}</p>
  </div>
);

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <section>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
          containScroll: "trimSnaps",
        }}
        plugins={[WheelGesturesPlugin()]}
        className="cursor-grab active:cursor-grabbing"
      >
        <CarouselContent className="px-4 lg:px-12 mr-6 lg:-ml-6 lg:mr-12">
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] lg:basis-[33%] lg:pl-6"
            >
              <ReviewCard quote={review.quote} author={review.author} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export { Reviews, ReviewCard };
export type { Review, ReviewsProps };
