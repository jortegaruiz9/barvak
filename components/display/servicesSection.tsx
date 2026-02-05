import Image from "next/image";
import { cn } from "@/lib/utils";

interface Service {
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
      <div className="relative aspect-4/3 w-full overflow-hidden md:rounded-sm">
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
      <p className="text-center text-gray-700 text-base md:text-lg leading-relaxed max-w-md text-pretty">
        {service.description}
      </p>
    </div>
  );

  return (
    <section
      className={cn(
        "w-full flex flex-col gap-16 md:gap-y-0 md:gap-x-24",
        className
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
              !isImageRight && "md:flex-row-reverse"
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
