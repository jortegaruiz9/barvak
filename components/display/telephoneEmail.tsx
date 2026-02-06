import Link from "next/link";
import { Button } from "../ui/button";
import { contactInfo } from "@/lib/data/contact";

interface TelephoneEmailProps {
  title: string;
  description: string;
  countryLabel: string;
  className?: string;
}

export default function TelephoneEmail({
  title,
  description,
  countryLabel,
  className,
}: TelephoneEmailProps) {
  return (
    <div className={className}>
      <h3 className="text-xl md:text-2xl font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 max-w-md">{description}</p>
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
  );
}

export type { TelephoneEmailProps };
