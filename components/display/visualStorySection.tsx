import Image from "next/image";
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
  // Ensure we have exactly 2 top images
  const displayTopImages = topImages.slice(0, 2);

  return (
    <section
      className={cn("w-full flex flex-col gap-3 md:gap-8", className)}
      aria-label="Visual story section"
    >
      {/* Title and description */}
      {title && (
        <SectionHeader title={title} description={description} className="pb-4" />
      )}

      {/* Top section - Two images side by side */}
      {displayTopImages.length > 0 && (
        <div className="px-4 md:px-12 grid grid-cols-2 gap-3 md:gap-8">
          {displayTopImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-16/10 md:aspect-auto md:h-[calc((100svh-4rem-2rem)/2)] rounded-lg overflow-hidden"
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
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 md:gap-8 pl-4 md:pl-12 after:content-[''] after:shrink-0 after:w-2 md:after:w-6">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[calc((100vw-2rem-0.75rem)/2.2)] md:w-[calc((100vw-6rem)/2.2)] h-[calc((100vw-2.75rem)/2*10/16)] md:h-[calc((100svh-4rem-2rem)/2)] rounded-lg overflow-hidden"
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
      )}
    </section>
  );
};

export { VisualStorySection };
export type { VisualStoryImage, VisualStorySectionProps };
