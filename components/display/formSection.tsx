"use client";

import { useState, useRef } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { CountryCodeSelect } from "../ui/country-code-select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { SectionHeader } from "./sectionHeader";
import ContactSection from "./contactSection";
import { contactSectionData } from "@/lib/data/contact";

interface ContactInfo {
  icon: "mail" | "location" | "whatsapp" | "phone";
  title: string;
  text: string;
  href?: string;
}

interface FormSectionProps {
  title: string;
  description?: string;
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
};

export default function FormSection({
  title,
  description,
  contactInfoItems,
  infoTexts,
  mapEmbedUrl,
  showContactSection = true,
  countryCode = "+506",
  submitButtonText = "Send",
  privacyPolicyText = "I accept the privacy policy and the processing of my personal data.",
  onSubmit,
}: FormSectionProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        fullName: String(formData.get("fullName") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        countryCode: String(formData.get("countryCode") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        message: String(formData.get("message") ?? "").trim(),
        privacyPolicyAccepted: privacyChecked,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send form.");
      }

      if (onSubmit) onSubmit(formData);
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-8 py-12">
      <SectionHeader title={title} description={description} />

      <div className="flex flex-col px-4 lg:px-0 lg:flex-row lg:justify-center gap-y-8 lg:gap-x-16">
        {/* Form Section */}
        <div className="w-full lg:w-4/12">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-neutral-200 p-6 md:p-10 rounded-md flex flex-col items-center justify-center min-h-[400px] text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                  className="w-16 h-16 rounded-full bg-lime-500 flex items-center justify-center mb-6"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="text-2xl md:text-3xl font-light text-foreground mb-4"
                >
                  Thank you for contacting us.
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md"
                >
                  We have received your message and will get back to you soon.
                </motion.p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
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

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="sr-only">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      className="bg-white border-0 min-h-[120px] text-sm md:text-lg md:py-3"
                    />
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="flex items-start gap-3 py-4">
                    <Checkbox
                      id="privacyPolicy"
                      name="privacyPolicy"
                      className="mt-0.5 bg-white"
                      checked={privacyChecked}
                      onCheckedChange={(checked) =>
                        setPrivacyChecked(checked === true)
                      }
                    />
                    <Label
                      htmlFor="privacyPolicy"
                      className="text-sm md:text-md text-muted-foreground font-normal cursor-pointer"
                    >
                      {privacyPolicyText}
                    </Label>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="normal"
                    className="w-full md:w-auto justify-between px-6"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : submitButtonText}
                    {!loading && <ArrowRight className="size-4" />}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
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
