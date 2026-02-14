import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Section from "./section";

const meta = {
  title: "Display/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    logo: {
      control: "object",
      description: "Logo object with src and optional alt text",
    },
    title: {
      control: "text",
      description: "Section title",
    },
    description: {
      control: "object",
      description: "Description text - can be a string or array of strings",
    },
    button: {
      control: "object",
      description: "Button object with text and href",
    },
    buttonVariant: {
      control: "select",
      options: ["default", "normal", "destructive", "outline", "outline_white", "secondary", "ghost", "link"],
      description: "Button variant style",
    },
    backgroundColor: {
      control: "text",
      description: "Tailwind background color class",
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: {
    logo: {
      src: "/logos/logo-barvak.png",
      alt: "Barvak Logo",
    },
    title: "Welcome to Barvak Estate",
    description: [
      "Here, the wind smells of forest, horses run free, and time flows at the rhythm of the landscape.",
      "More than an estate, it is a living community in constant evolution.",
    ],
    button: {
      text: "Discover More",
      href: "/about",
    },
    buttonVariant: "outline_white",
  },
};

export const WithTitle: Story = {
  args: {
    title: "A Place Where Nature Meets Tradition",
    description: "Experience the beauty of untouched landscapes and the warmth of genuine hospitality.",
  },
};

export const WithMultipleParagraphs: Story = {
  args: {
    title: "Our Story",
    description: [
      "Founded in 1985, Barvak Estate has been a sanctuary for those seeking connection with nature.",
      "Our commitment to sustainable practices ensures that future generations can enjoy this pristine environment.",
      "Join us in preserving the beauty of this unique landscape.",
    ],
    button: {
      text: "Learn More",
      href: "/history",
    },
  },
};

export const WithLogoOnly: Story = {
  args: {
    logo: {
      src: "/logos/logo-barvak.png",
      alt: "Barvak Logo",
    },
    title: "Barvak Estate",
  },
};

export const WithButton: Story = {
  args: {
    title: "Ready to Experience Barvak?",
    description: "Book your visit today and discover what makes this place truly special.",
    button: {
      text: "Book Now",
      href: "/booking",
    },
    buttonVariant: "outline_white",
  },
};

export const CustomBackground: Story = {
  args: {
    title: "Alternative Section Style",
    description: "This section uses a different background color.",
    button: {
      text: "Explore",
      href: "/explore",
    },
    backgroundColor: "bg-slate-800",
  },
};

export const Minimal: Story = {
  args: {
    title: "Simple Section",
  },
};
