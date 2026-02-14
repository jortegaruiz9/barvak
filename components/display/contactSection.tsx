import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import TelephoneEmail from "./telephoneEmail";

interface ContactSectionProps {
  personImage: string;
  personImageAlt: string;
  personName: string;
  personRole: string;
  bookingTitle: string;
  bookingButtonText: string;
  bookingButtonHref: string;
  contactTitle: string;
  contactDescription: string;
  countryLabel: string;
}

const ContactSection = ({
  personImage,
  personImageAlt,
  personName,
  personRole,
  bookingTitle,
  bookingButtonText,
  bookingButtonHref,
  contactTitle,
  contactDescription,
  countryLabel,
}: ContactSectionProps) => {
  return (
    <section className="py-12 px-8 md:px-12 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
        {/* Column 1: Person */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <Image
              src={personImage}
              alt={personImageAlt?.trim() ? personImageAlt : "Contact person"}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium text-lg">{personName}</span>
          <span className="text-sm text-muted-foreground">{personRole}</span>
        </div>

        {/* Column 2: Book a Call */}
        <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right min-w-0">
          <h3 className="text-xl md:text-2xl font-medium mb-4">{bookingTitle}</h3>
          <Button variant="normal" size="normal" asChild>
            <Link href={bookingButtonHref}>{bookingButtonText}</Link>
          </Button>
        </div>

        {/* Column 3: Telephone & Email */}
        <TelephoneEmail
          title={contactTitle}
          description={contactDescription}
          countryLabel={countryLabel}
          className="flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:w-auto min-w-0"
        />
      </div>

      <p className="text-center text-sm lg:text-lg text-muted-foreground mt-12 max-w-3xl mx-auto text-pretty leading-relaxed">
        Build your story on the land that inspires. Welcome to Hacienda Barvak State.
      </p>
    </section>
  );
};

export default ContactSection;
export type { ContactSectionProps };
