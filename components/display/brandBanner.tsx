"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export interface BrandBannerItem {
  logo: string;
  alt: string;
}

interface BrandBannerProps {
  items?: BrandBannerItem[];
  speed?: number;
}

export function BrandBanner({ items = [], speed = 40 }: BrandBannerProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="py-8">
      <Marquee
        speed={speed}
        gradient={true}
        gradientColor="white"
        gradientWidth={150}
        autoFill={true}
      >
        {items.map((item, i) => (
          <div
            key={`${item.alt}-${i}`}
            className="mx-6 md:mx-10 flex items-center justify-center"
          >
            <Image
              src={item.logo}
              alt={item.alt}
              width={150}
              height={60}
              className="h-12 md:h-14 w-20 md:w-32 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
