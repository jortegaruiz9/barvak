"use client";

import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { CountryCodeSelect } from "../ui/country-code-select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import { Textarea } from "../ui/textarea";
import { SectionHeader } from "./sectionHeader";
import ContactSection from "./contactSection";
import { contactSectionData } from "@/lib/data/contact";

interface ContactInfo {
  icon: "mail" | "location" | "whatsapp" | "phone" | "facebook" | "instagram";
  title: string;
  text: string;
  href?: string;
}

interface FormSectionProps {
  title: string;
  description?: string;
  stageOptions: { value: string; label: string }[];
  contactInfoItems: ContactInfo[];
  infoTexts: string[];
  mapEmbedUrl?: string;
  showContactSection?: boolean;
  countryCode?: string;
  submitButtonText?: string;
  privacyPolicyText?: string;
  onSubmit?: (data: FormData) => void;
}

const WhatsappIcon = ({
  className,
  strokeWidth = 1.5,
}: {
  className?: string;
  strokeWidth?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const iconComponents = {
  mail: Mail,
  location: MapPin,
  whatsapp: WhatsappIcon,
  phone: Phone,
  facebook: Facebook,
  instagram: Instagram,
};

export default function FormSection({
  title,
  description,
  stageOptions,
  contactInfoItems,
  infoTexts,
  mapEmbedUrl,
  showContactSection = true,
  countryCode = "+506",
  submitButtonText = "Schedule your visit",
  privacyPolicyText = "I accept the privacy policy and the processing of my personal data.",
  onSubmit,
}: FormSectionProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      const formData = new FormData(e.currentTarget);
      onSubmit(formData);
    }
  };

  return (
    <section className="flex flex-col gap-8 py-12">
      <SectionHeader title={title} description={description} />

      <div className="flex flex-col px-4 lg:px-0 lg:flex-row lg:justify-center gap-y-8 lg:gap-x-16">
        {/* Form Section */}
        <div className="w-full lg:w-4/12">
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-200 p-6 md:p-10 rounded-md"
          >
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="sr-only">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                />
              </div>

              {/* Email Address */}
              <div>
                <Label htmlFor="email" className="sr-only">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                />
              </div>

              {/* Country Code and Phone Number */}
              <div className="flex gap-4">
                <div className="w-32">
                  <Label htmlFor="countryCode" className="sr-only">
                    Country Code
                  </Label>
                  <CountryCodeSelect
                    defaultValue={countryCode}
                    className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="phone" className="sr-only">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                  />
                </div>
              </div>

              {/* Stage Select */}
              <div>
                <Label htmlFor="stage" className="sr-only">
                  Which stage are you interested in?
                </Label>
                <NativeSelect
                  id="stage"
                  name="stage"
                  className="bg-white border-0 w-full md:text-lg md:h-auto md:py-3"
                >
                  <NativeSelectOption value="">
                    Which stage are you interested in?
                  </NativeSelectOption>
                  {stageOptions.map((option) => (
                    <NativeSelectOption key={option.value} value={option.value}>
                      {option.label}
                    </NativeSelectOption>
                  ))}
                </NativeSelect>
              </div>

              {/* Comments */}
              <div>
                <Label htmlFor="comments" className="sr-only">
                  Comments
                </Label>
                <Textarea
                  id="comments"
                  name="comments"
                  placeholder="Comments"
                  className="bg-white border-0 min-h-[120px] text-sm md:text-lg md:py-3"
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3 py-4">
                <Checkbox
                  id="privacyPolicy"
                  name="privacyPolicy"
                  className="mt-0.5 bg-white"
                />
                <Label
                  htmlFor="privacyPolicy"
                  className="text-sm md:text-md text-muted-foreground font-normal cursor-pointer"
                >
                  {privacyPolicyText}
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="normal"
                className="w-full md:w-auto justify-between px-6"
              >
                {submitButtonText}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </form>
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-6/12 flex flex-col justify-center">
          <div className="space-y-5 mb-8">
            {infoTexts.map((text, index) => (
              <p
                key={index}
                className="text-muted-foreground text-sm md:text-lg text-center lg:text-right px-4 lg:px-0 text-balance leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Contact Icons */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-10">
            {contactInfoItems.map((item, index) => {
              const IconComponent = iconComponents[item.icon];
              const content = (
                <div className="flex flex-col items-center text-center gap-2">
                  <IconComponent
                    className="size-6 text-muted-foreground"
                    strokeWidth={1.5}
                  />
                  <span className="font-medium text-sm md:text-lg  hidden lg:block">
                    {item.title}
                  </span>
                  <span className="text-xs md:text-md text-muted-foreground hidden lg:block leading-tight">
                    {item.text}
                  </span>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={
                      item.icon === "facebook" || item.icon === "instagram"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.icon === "facebook" || item.icon === "instagram"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="hover:opacity-70 transition-opacity"
                    aria-label={`${item.title}: ${item.text}`}
                  >
                    {content}
                  </a>
                );
              }

              return <div key={index}>{content}</div>;
            })}
          </div>

          {/* Google Maps Embed */}
          {mapEmbedUrl && (
            <div className="mt-8 w-full rounded-md overflow-hidden">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps location"
              />
            </div>
          )}
        </div>
      </div>
      {showContactSection && <ContactSection {...contactSectionData} />}
    </section>
  );
}

export type { FormSectionProps, ContactInfo };
