import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeatureSection } from "./featureSection";

const meta = {
  title: "Display/FeatureSection",
  component: FeatureSection,
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
      description: "Title displayed in the text card",
    },
    description: {
      control: "object",
      description: "Description text (string or array of strings)",
    },
    button: {
      control: "object",
      description: "Optional button with text and href",
    },
    buttonVariant: {
      control: "select",
      options: [
        "default",
        "normal",
        "outline",
        "outline_white",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Button variant style",
    },
    images: {
      control: "object",
      description: "Array of images with src and alt",
    },
    cardPosition: {
      control: "radio",
      options: ["left", "right"],
      description: "Position of the text card on desktop",
    },
    autoplayDelay: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "Autoplay delay in milliseconds (carousel mode)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof FeatureSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Discover the Estate",
    description:
      "Experience the beauty and tranquility of our carefully preserved landscape, where nature and tradition blend harmoniously.",
    button: {
      text: "Learn More",
      href: "/estate",
    },
    images: [
      {
        src: "/photos/home/carousel-home.jpeg",
        alt: "Estate landscape view",
      },
    ],
    cardPosition: "right",
  },
};

export const CardLeft: Story = {
  args: {
    title: "Our Heritage",
    description:
      "A living community where centuries of tradition meet modern sustainability practices.",
    button: {
      text: "Explore History",
      href: "/history",
    },
    images: [
      {
        src: "/photos/home/horizontal-scroll-1.png",
        alt: "Heritage building view",
      },
    ],
    cardPosition: "left",
  },
};

export const WithCarousel: Story = {
  args: {
    title: "Explore Our Grounds",
    description: [
      "Wander through acres of pristine landscapes, from rolling hills to ancient forests.",
      "Each season brings new beauty to discover and experience.",
    ],
    button: {
      text: "Book a Visit",
      href: "/visit",
    },
    images: [
      {
        src: "/photos/home/horizontal-scroll-1.png",
        alt: "Landscape view 1",
      },
      {
        src: "/photos/home/horizontal-scroll-2.png",
        alt: "Landscape view 2",
      },
      {
        src: "/photos/home/horizontal-scroll-3.png",
        alt: "Landscape view 3",
      },
    ],
    cardPosition: "right",
    autoplayDelay: 4000,
  },
};

export const NoButton: Story = {
  args: {
    title: "A Place of Serenity",
    description:
      "Find peace and inspiration in our natural surroundings, carefully preserved for generations to come.",
    images: [
      {
        src: "/photos/home/storyCard-1.png",
        alt: "Serene landscape",
      },
    ],
    cardPosition: "right",
  },
};
