"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ComplaintFormProps {
  buttonText?: string;
  imageSrc: string;
  imageAlt: string;
  submitButtonText?: string;
  onSubmit?: (data: FormData) => void;
}

export default function ComplaintForm({
  buttonText = "Complaint Submission Form – ASODHEA",
  imageSrc,
  imageAlt,
  submitButtonText = "Submit Complaint",
  onSubmit,
}: ComplaintFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        fullName: String(formData.get("fullName") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        age: String(formData.get("age") ?? "").trim(),
        incidentDate: String(formData.get("incidentDate") ?? "").trim(),
        description: String(formData.get("description") ?? "").trim(),
      };

      const response = await fetch("/api/complaint", {
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
    <div className="flex flex-col items-center gap-8 px-4 lg:px-0">
      <Button
        variant="normal"
        size="normal"
        onClick={() => setIsOpen(!isOpen)}
        className="justify-between px-8 h-12 w-full sm:w-auto sm:min-w-[420px]"
      >
        {buttonText}
        <ChevronDown
          className={`size-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </Button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out w-full ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:justify-center gap-12 pt-4">
            {/* Form */}
            <div className="w-full lg:w-5/12">
              {submitted ? (
                <div className="bg-neutral-200 p-6 md:p-10 rounded-md flex flex-col items-center justify-center min-h-[400px] text-center">
                  <div className="w-16 h-16 rounded-full bg-lime-500 flex items-center justify-center mb-6">
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
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                    Thank you for your report.
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                    Your complaint has been received and will be reviewed by our
                    team.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-neutral-200 p-6 md:p-10 rounded-md"
                >
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="complaintName" className="sr-only">
                        Complainant Name
                      </Label>
                      <Input
                        id="complaintName"
                        name="fullName"
                        placeholder="Complainant Name"
                        className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                      />
                    </div>

                    <div>
                      <Label htmlFor="complaintEmail" className="sr-only">
                        Email Address
                      </Label>
                      <Input
                        id="complaintEmail"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                      />
                    </div>

                    <div>
                      <Label htmlFor="complaintPhone" className="sr-only">
                        Phone Number
                      </Label>
                      <Input
                        id="complaintPhone"
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                      />
                    </div>

                    <div>
                      <Label htmlFor="complaintAge" className="sr-only">
                        Age
                      </Label>
                      <Input
                        id="complaintAge"
                        name="age"
                        type="number"
                        placeholder="Age"
                        className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                      />
                    </div>

                    <div>
                      <Label htmlFor="complaintDate" className="sr-only">
                        Date of Incident
                      </Label>
                      <Input
                        id="complaintDate"
                        name="incidentDate"
                        type="date"
                        defaultValue=""
                        className="bg-white border-0 text-sm md:text-lg md:h-auto md:py-3"
                      />
                    </div>

                    <div>
                      <Label htmlFor="complaintDescription" className="sr-only">
                        Detailed Description
                      </Label>
                      <Textarea
                        id="complaintDescription"
                        name="description"
                        placeholder="Provide a detailed description of the incident"
                        className="bg-white border-0 min-h-[160px] text-sm md:text-lg md:py-3"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <Button
                      type="submit"
                      variant="normal"
                      className="w-full md:w-auto justify-between px-6"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : submitButtonText}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Image */}
            <div className="w-full lg:w-5/12 flex items-center justify-center">
              <div className="relative w-full aspect-4/3 rounded-sm overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
