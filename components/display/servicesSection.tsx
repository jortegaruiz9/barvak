import Image from "next/image";
import { cn } from "@/lib/utils";

interface Service {
  title?: string;
  description: string;
  image: string;
  alt: string;
}

interface ServicesSectionProps {
  services: Service[];
  className?: string;
}

const ServicesSection = ({ services, className }: ServicesSectionProps) => {
  const renderImage = (service: Service) => (
    <div className="flex-1 w-full md:px-12">
      <div className="relative aspect-4/3 w-full overflow-hidden md:rounded-md">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );

  const renderText = (service: Service) => (
    <div className="flex-1 flex items-center justify-center px-6 md:px-12">
      <div className="text-center max-w-md">
        {service.title && (
          <h3 className="text-xl md:text-2xl font-light mb-3 text-pretty">
            {service.title}
          </h3>
        )}
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-pretty">
          {service.description}
        </p>
      </div>
    </div>
  );

  return (
    <section
      className={cn(
        "w-full flex flex-col gap-16 md:gap-y-0 md:gap-x-24",
        className,
      )}
    >
      {services.map((service, index) => {
        const isImageRight = index % 2 === 0;

        return (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center gap-6",
              "md:flex-row md:gap-12",
              !isImageRight && "md:flex-row-reverse",
            )}
          >
            {renderImage(service)}
            {renderText(service)}
          </div>
        );
      })}
    </section>
  );
};

export { ServicesSection };
export type { ServicesSectionProps, Service };
