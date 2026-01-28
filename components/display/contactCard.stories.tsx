import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ContactCard from "./contactCard";

const meta = {
  title: "Display/ContactCard",
  component: ContactCard,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    imageSrc: {
      control: "text",
      description: "Image source URL",
    },
    imageAlt: {
      control: "text",
      description: "Alt text for the image",
    },
    label: {
      control: "text",
      description: "Small label above the headline",
    },
    headline: {
      control: "text",
      description: "Main headline text",
    },
    details: {
      control: "text",
      description: "Additional details text",
    },
    buttonText: {
      control: "text",
      description: "Button label",
    },
    buttonHref: {
      control: "text",
      description: "Button link URL",
    },
    title: {
      control: "text",
      description: "Optional section title",
    },
    description: {
      control: "text",
      description: "Optional section description",
    },
  },
} satisfies Meta<typeof ContactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: "/photos/state/contactCard.webp",
    imageAlt: "Contact us",
    label: "CONNECT WITH US",
    headline: "Ready to experience Barvak Estate?",
    details: "We'd love to hear from you",
    buttonText: "Contact",
    buttonHref: "/contact",
  },
};

export const WithSectionHeader: Story = {
  args: {
    imageSrc: "/photos/state/contactCard.webp",
    imageAlt: "Contact us",
    label: "CONNECT WITH US",
    headline: "Ready to experience Barvak Estate?",
    details: "We'd love to hear from you",
    buttonText: "Contact",
    buttonHref: "/contact",
    title: "Get in Touch",
    description: "Reach out to learn more about our programs and opportunities.",
  },
};
