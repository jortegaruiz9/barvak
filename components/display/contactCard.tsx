import Image from "next/image";
import { Button } from "../ui/button";
import { SectionHeader } from "./sectionHeader";
import Link from "next/link";

interface ContactCardProps {
  imageSrc: string;
  imageAlt: string;
  label: string;
  headline: string;
  details: string;
  buttonText: string;
  buttonHref: string;
  title?: string;
  description?: string;
}

export default function ContactCard({
  imageSrc,
  imageAlt,
  label,
  headline,
  details,
  buttonText,
  buttonHref,
  title,
  description,
}: ContactCardProps) {
  return (
    <section className="flex flex-col gap-8">
      {title && <SectionHeader title={title} description={description} />}
      <div className="md:flex md:px-12">
        <div className="w-full h-64 md:h-96 md:w-1/2 md:rounded-l-md">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="w-full h-full object-cover md:rounded-l-md"
          />
        </div>
        <div className="bg-neutral-500 text-xs text-white h-64 md:h-96 flex flex-col justify-center items-center gap-4 px-4 md:px-8 md:w-1/2 md:rounded-r-md">
          <span>{label}</span>
          <h3 className="text-xl font-light text-balance text-center w-8/12">
            {headline}
          </h3>
          <p className="text-xs">{details}</p>
          <div>
            <Button variant="outline_white" size="normal" asChild>
              <Link href={buttonHref}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export type { ContactCardProps };
