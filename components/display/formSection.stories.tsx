import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FormSection from "./formSection";

const meta = {
  title: "Display/FormSection",
  component: FormSection,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Section title",
    },
    description: {
      control: "text",
      description: "Optional section description",
    },
    stageOptions: {
      control: "object",
      description: "Options for the stage select dropdown",
    },
    contactInfoItems: {
      control: "object",
      description: "Contact information items with icons",
    },
    infoTexts: {
      control: "object",
      description: "Array of informational text paragraphs",
    },
    countryCode: {
      control: "text",
      description: "Default country code",
    },
    submitButtonText: {
      control: "text",
      description: "Text for the submit button",
    },
    privacyPolicyText: {
      control: "text",
      description: "Privacy policy checkbox label",
    },
  },
} satisfies Meta<typeof FormSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Request information about your lot",
    stageOptions: [
      { value: "stage1", label: "Stage 1 - Planning" },
      { value: "stage2", label: "Stage 2 - Development" },
      { value: "stage3", label: "Stage 3 - Construction" },
      { value: "stage4", label: "Stage 4 - Completion" },
    ],
    infoTexts: [
      "It will be our pleasure to speak with you and answer any questions you may have about our services, projects, or experiences.",
      "You can also follow us on social media, write to us directly, or call whenever you need.",
      "We're here to help you discover everything Barvak has to offer.",
    ],
    contactInfoItems: [
      {
        icon: "mail",
        title: "Mail",
        text: "info@barvak.com",
        href: "mailto:info@barvak.com",
      },
      {
        icon: "location",
        title: "Ubicacion",
        text: "Ecuador",
      },
      {
        icon: "whatsapp",
        title: "Whatsapp",
        text: "+506 99 999 9999",
        href: "https://wa.me/5939999999999",
      },
      {
        icon: "phone",
        title: "Phone",
        text: "+506 99 999 9999",
        href: "tel:+5069999999999",
      },
    ],
    countryCode: "+506",
    submitButtonText: "Schedule your visit",
    privacyPolicyText:
      "I accept the privacy policy and the processing of my personal data.",
  },
};

