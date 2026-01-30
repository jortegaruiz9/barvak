import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { contactInfo } from "@/lib/data/contact";

interface ContactSectionProps {
  personImage: string;
  personImageAlt: string;
  personName: string;
  personRole: string;
  bookingTitle: string;
  bookingDescription: string;
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
  bookingDescription,
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
              alt={personImageAlt}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium text-lg">{personName}</span>
          <span className="text-sm text-neutral-500">{personRole}</span>
        </div>

        {/* Column 2: Book a Call */}
        <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right min-w-0">
          <h3 className="text-xl font-medium mb-2">{bookingTitle}</h3>
          <p className="text-sm text-neutral-500 mb-4 max-w-md">
            {bookingDescription}
          </p>
          <Button variant="normal" size="normal" asChild>
            <Link href={bookingButtonHref}>{bookingButtonText}</Link>
          </Button>
        </div>

        {/* Column 3: Telephone & Email */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:w-auto min-w-0">
          <h3 className="text-xl font-medium mb-2">{contactTitle}</h3>
          <p className="text-sm text-neutral-500 mb-4 max-w-md">
            {contactDescription}
          </p>
          <div className="text-sm mb-2">
            <span className="font-medium">{countryLabel}</span>{" "}
            <Link
              href={contactInfo.phone.href}
              className="hover:underline"
              aria-label={`Call ${contactInfo.phone.text}`}
            >
              {contactInfo.phone.text}
            </Link>
          </div>
          <Button variant="outline" size="normal" asChild className="max-w-full">
            <Link
              href={contactInfo.email.href}
              className="truncate"
              aria-label={`Email ${contactInfo.email.text}`}
            >
              {contactInfo.email.text}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
export type { ContactSectionProps };
