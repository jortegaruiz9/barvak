import Image from "next/image";
import { cn } from "@/lib/utils";

interface ExperienceGridItem {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  description?: string;
}

interface ExperienceGridProps {
  items: ExperienceGridItem[];
  className?: string;
}

const ExperienceGrid = ({ items, className }: ExperienceGridProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-12 md:px-6 lg:px-12 md:grid md:grid-cols-2",
        className,
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 min-w-0">
          <div className="relative aspect-4/3 w-full overflow-hidden md:rounded-md">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {(item.title || item.description) && (
            <div className="flex flex-col gap-2 px-6 md:px-0">
              {item.title && (
                <h3 className="text-xl md:text-3xl font-light text-foreground">
                  {item.title}
                </h3>
              )}
              {item.description && (
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { ExperienceGrid };
export type { ExperienceGridProps, ExperienceGridItem };
