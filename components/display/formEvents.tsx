"use client";

import * as React from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { CountryCodeSelect } from "../ui/country-code-select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { SectionHeader } from "./sectionHeader";
import TelephoneEmail from "./telephoneEmail";
import { contactSectionData } from "@/lib/data/contact";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(6, "Phone number is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(1, "Please tell us what you're interested in"),
  privacyPolicy: z.literal(true, {
    error: "You must accept the privacy policy",
  }),
});

type FormErrors = Partial<Record<keyof z.infer<typeof formSchema>, string>>;

interface FormEventsProps {
  title: string;
  description?: string;
  heading: string;
  infoTexts: string[];
  contactLabel?: string;
  contactDetails?: string[];
  countryCode?: string;
  submitButtonText?: string;
  privacyPolicyText?: string;
  onSubmit?: (data: FormData) => void;
}

export default function FormEvents({
  title,
  description,
  heading,
  infoTexts,
  contactLabel,
  contactDetails,
  countryCode = "+506",
  submitButtonText = "Submit Request",
  privacyPolicyText = "I accept the privacy policy and the processing of my personal data.",
  onSubmit,
}: FormEventsProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [privacyChecked, setPrivacyChecked] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);

    const raw = {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      privacyPolicy: privacyChecked,
    };

    const result = formSchema.safeParse(raw);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const payload = {
        fullName: raw.fullName?.trim(),
        email: raw.email?.trim(),
        countryCode: String(formData.get("countryCode") ?? "").trim(),
        phone: raw.phone?.trim(),
        eventType: String(formData.get("eventType") ?? "").trim(),
        eventDate: String(formData.get("eventDate") ?? "").trim(),
        message: raw.message?.trim(),
        privacyPolicyAccepted: privacyChecked,
      };

      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Unable to send form.");
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

          <div className="mt-8 lg:mt-0 md:hidden">
            <p className="font-semibold text-sm mb-2">{contactLabel}</p>
            {contactDetails?.map((detail, index) => (
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
                  Our team will reach out very soon to help you create an
                  unforgettable event at Hacienda Barvak.
                </motion.p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="bg-neutral-200 p-6 md:p-10 rounded-md"
                noValidate
              >
                <div className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <Label htmlFor="fullName" className="sr-only">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name"
                      className={`bg-white border-0 text-sm md:text-lg md:h-auto md:py-3 ${errors.fullName ? "ring-2 ring-red-400" : ""}`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number + Country Code */}
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
                        className={`bg-white border-0 text-sm md:text-lg md:h-auto md:py-3 ${errors.phone ? "ring-2 ring-red-400" : ""}`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
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
                      className={`bg-white border-0 text-sm md:text-lg md:h-auto md:py-3 ${errors.email ? "ring-2 ring-red-400" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Type of Event */}
                  <div>
                    <Label htmlFor="eventType" className="sr-only">
                      Type of Event
                    </Label>
                    <Input
                      id="eventType"
                      name="eventType"
                      placeholder="Type of Event"
                      className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                    />
                  </div>

                  {/* Tentative Event Date */}
                  <div>
                    <Label htmlFor="eventDate" className="sr-only">
                      Tentative Event Date
                    </Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      defaultValue=""
                      min={new Date().toISOString().split("T")[0]}
                      className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                    />
                  </div>

                  {/* Comments or Special Requirements */}
                  <div>
                    <Label htmlFor="message" className="sr-only">
                      Comments or Special Requirements
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Comments or Special Requirements"
                      className={`bg-white border-0 min-h-[120px] text-sm md:text-lg md:py-3 ${errors.message ? "ring-2 ring-red-400" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div>
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
                    {errors.privacyPolicy && (
                      <p className="text-red-500 text-xs -mt-2 mb-2">
                        {errors.privacyPolicy}
                      </p>
                    )}
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

        {/* Mobile Contact Info */}
        <TelephoneEmail
          title={contactSectionData.contactTitle}
          description={contactSectionData.contactDescription}
          countryLabel={contactSectionData.countryLabel}
          className="hidden"
        />
      </div>
    </section>
  );
}

export type { FormEventsProps };
