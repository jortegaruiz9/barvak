"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import { Textarea } from "../ui/textarea";

interface ComplaintFormProps {
  buttonText?: string;
  imageSrc: string;
  imageAlt: string;
  submitButtonText?: string;
  privacyPolicyText?: string;
  categoryOptions?: { value: string; label: string }[];
  onSubmit?: (data: FormData) => void;
}

const defaultCategoryOptions = [
  { value: "safety", label: "Safe Sport Violation" },
  { value: "welfare", label: "Equine Welfare Concern" },
  { value: "rules", label: "Competition Rules Violation" },
  { value: "other", label: "Other" },
];

export default function ComplaintForm({
  buttonText = "Complaint Submission Form – ASODHEA",
  imageSrc,
  imageAlt,
  submitButtonText = "Submit complaint",
  privacyPolicyText = "I accept the privacy policy and the processing of my personal data.",
  categoryOptions = defaultCategoryOptions,
  onSubmit,
}: ComplaintFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      const formData = new FormData(e.currentTarget);
      onSubmit(formData);
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
              <form
                onSubmit={handleSubmit}
                className="bg-neutral-200 p-6 md:p-10 rounded-md"
              >
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="complaintName" className="sr-only">
                      Full Name
                    </Label>
                    <Input
                      id="complaintName"
                      name="fullName"
                      placeholder="Full Name"
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
                    <Label htmlFor="complaintCategory" className="sr-only">
                      Category
                    </Label>
                    <NativeSelect
                      id="complaintCategory"
                      name="category"
                      className="bg-white border-0 w-full md:text-lg md:h-auto md:py-3"
                    >
                      <NativeSelectOption value="">
                        Select a category
                      </NativeSelectOption>
                      {categoryOptions.map((option) => (
                        <NativeSelectOption
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </NativeSelectOption>
                      ))}
                    </NativeSelect>
                  </div>

                  <div>
                    <Label htmlFor="complaintDescription" className="sr-only">
                      Description
                    </Label>
                    <Textarea
                      id="complaintDescription"
                      name="description"
                      placeholder="Describe your complaint"
                      className="bg-white border-0 min-h-[160px] text-sm md:text-lg md:py-3"
                    />
                  </div>

                  <div className="flex items-start gap-3 py-4">
                    <Checkbox
                      id="complaintPrivacy"
                      name="privacyPolicy"
                      className="mt-0.5 bg-white"
                    />
                    <Label
                      htmlFor="complaintPrivacy"
                      className="text-sm md:text-md text-muted-foreground font-normal cursor-pointer"
                    >
                      {privacyPolicyText}
                    </Label>
                  </div>

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
