import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FormSection from "./formSection";
import { formContactInfoItems, formInfoTexts, formStageOptions } from "@/lib/data/contact";

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
    stageOptions: formStageOptions,
    infoTexts: formInfoTexts,
    contactInfoItems: formContactInfoItems,
    countryCode: "+506",
    submitButtonText: "Schedule your visit",
    privacyPolicyText:
      "I accept the privacy policy and the processing of my personal data.",
  },
};

