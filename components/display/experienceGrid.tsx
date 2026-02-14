import Image from "next/image";
import { cn } from "@/lib/utils";

interface ExperienceGridItem {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  description?: string;
  date?: string;
  href?: string;
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
      {items.map((item, index) => {
        const content = (
          <div className={cn("flex flex-col gap-4 min-w-0", item.href && "group")}>
            <div className="relative aspect-4/3 w-full overflow-hidden md:rounded-md">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className={cn("object-cover", item.href && "transition-transform duration-300 group-hover:scale-105")}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {(item.title || item.description || item.date) && (
              <div className="flex flex-col gap-2 px-6 md:px-0">
                {item.date && (
                  <span className="text-xs md:text-sm text-muted-foreground">
                    {item.date}
                  </span>
                )}
                {item.title && (
                  <h3 className="text-xl md:text-3xl font-light text-foreground">
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed text-pretty">
                    {item.description}
                  </p>
                )}
                {item.href && (
                  <span className="inline-flex items-center gap-2 text-sm md:text-base text-primary font-medium mt-2 group-hover:gap-3 transition-all duration-300">
                    View more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                )}
              </div>
            )}
          </div>
        );

        if (item.href) {
          return (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          );
        }

        return <div key={index}>{content}</div>;
      })}
    </div>
  );
};

export { ExperienceGrid };
export type { ExperienceGridProps, ExperienceGridItem };
