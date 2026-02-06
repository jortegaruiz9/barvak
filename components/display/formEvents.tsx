"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { CountryCodeSelect } from "../ui/country-code-select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import { Textarea } from "../ui/textarea";
import { SectionHeader } from "./sectionHeader";
import TelephoneEmail from "./telephoneEmail";
import { contactSectionData } from "@/lib/data/contact";

interface FormEventsProps {
  title: string;
  description?: string;
  eventTypeOptions: { value: string; label: string }[];
  heading: string;
  infoTexts: string[];
  contactLabel: string;
  contactDetails: string[];
  countryCode?: string;
  submitButtonText?: string;
  privacyPolicyText?: string;
  onSubmit?: (data: FormData) => void;
}

export default function FormEvents({
  title,
  description,
  eventTypeOptions,
  heading,
  infoTexts,
  contactLabel,
  contactDetails,
  countryCode = "+506",
  submitButtonText = "Submit Request",
  privacyPolicyText = "I accept the privacy policy and the processing of my personal data.",
  onSubmit,
}: FormEventsProps) {
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

      <div className="flex flex-col px-4 lg:px-0 lg:flex-row lg:justify-center gap-8">
        {/* Info Section - Left */}
        <div className="w-full lg:w-4/12 flex-col justify-between lg:flex hidden">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-normal">{heading}</h3>
            {infoTexts.map((text, index) => (
              <p
                key={index}
                className="text-muted-foreground text-sm md:text-base"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="mt-8 lg:mt-0">
            <p className="font-semibold text-sm mb-2">{contactLabel}</p>
            {contactDetails.map((detail, index) => (
              <p
                key={index}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {detail}
              </p>
            ))}
          </div>
        </div>

        {/* Form Section - Right */}
        <div className="w-full lg:w-5/12">
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

              {/* Phone Number and Country Code */}
              <div className="flex gap-4">
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
                <div className="w-32">
                  <Label htmlFor="countryCode" className="sr-only">
                    Country Code
                  </Label>
                  <CountryCodeSelect
                    defaultValue={countryCode}
                    className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                  />
                </div>
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

              {/* Type of Event */}
              <div>
                <Label htmlFor="eventType" className="sr-only">
                  Type of Event
                </Label>
                <NativeSelect
                  id="eventType"
                  name="eventType"
                  className="bg-white border-0 w-full md:text-lg md:h-auto md:py-3"
                >
                  <NativeSelectOption value="">
                    Type of Event
                  </NativeSelectOption>
                  {eventTypeOptions.map((option) => (
                    <NativeSelectOption key={option.value} value={option.value}>
                      {option.label}
                    </NativeSelectOption>
                  ))}
                </NativeSelect>
              </div>

              {/* Tentative Event Date */}
              <div>
                <Label htmlFor="eventDate" className="sr-only">
                  Tentative Event Date
                </Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  placeholder="Tentative Event Date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                />
              </div>

              {/* Comments or Special Requirements */}
              <div>
                <Label htmlFor="comments" className="sr-only">
                  Comments or Special Requirements
                </Label>
                <Textarea
                  id="comments"
                  name="comments"
                  placeholder="Comments or Special Requirements"
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

        {/* Mobile Contact Info */}
        <TelephoneEmail
          title={contactSectionData.contactTitle}
          description={contactSectionData.contactDescription}
          countryLabel={contactSectionData.countryLabel}
          className="flex flex-col items-center text-center lg:hidden"
        />
      </div>
    </section>
  );
}

export type { FormEventsProps };
