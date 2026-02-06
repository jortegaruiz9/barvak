import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionProps {
  logo?: {
    src: string;
    alt?: string;
  };
  title?: string;
  description?: string | string[];
  button?: {
    text: string;
    href: string;
  };
  buttonVariant?:
    | "default"
    | "normal"
    | "destructive"
    | "outline"
    | "outline_white"
    | "secondary"
    | "ghost"
    | "link";
  backgroundColor?: string;
  textColor?: string;
}

const Section = ({
  logo,
  title,
  description,
  button,
  buttonVariant = "normal",
  backgroundColor = "bg-custom-primary",
  textColor = "text-white",
}: SectionProps) => {
  // Handle description as string or array of strings
  const descriptionArray = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];

  return (
    <section className={cn("w-full py-24 lg:py-48 px-6", backgroundColor)}>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        {logo?.src && logo.src.trim() !== "" && (
          <div className="flex justify-center">
            <div className="w-32 h-32 relative">
              <Image
                src={logo.src}
                alt={logo.alt || "Logo"}
                width={192}
                height={192}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        )}

        {/* Title */}
        {title && (
          <h2
            className={cn(
              "text-2xl md:text-[2.25rem] font-light text-center lg:w-7/12 text-pretty",
              textColor,
            )}
          >
            {title}
          </h2>
        )}

        {/* Description */}
        {descriptionArray.length > 0 && (
          <div
            className={cn(
              "flex flex-col gap-4 md:gap-5 text-center max-w-2xl text-balance",
              textColor,
            )}
          >
            {descriptionArray.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg leading-relaxed opacity-80"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Button */}
        {button && (
          <div className="flex justify-center pt-2">
            <Button variant={buttonVariant} asChild className="rounded-full">
              <Link href={button.href}>{button.text}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
