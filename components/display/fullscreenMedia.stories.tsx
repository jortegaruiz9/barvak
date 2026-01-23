import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FullscreenMedia } from "./fullscreenMedia";

const meta = {
  title: "Display/FullscreenMedia",
  component: FullscreenMedia,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    images: {
      control: "object",
      description: "Array of image URLs to display",
    },
    imageAlt: {
      control: "text",
      description: "Alt text for images (string or array of strings)",
    },
    autoplayDelay: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "Autoplay delay in milliseconds (carousel mode)",
    },
    title: {
      control: "text",
      description: "Optional title displayed above the media",
    },
    description: {
      control: "text",
      description: "Optional description displayed below the title",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof FullscreenMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleImage: Story = {
  args: {
    images: ["/photos/home/carousel-home.jpeg"],
    imageAlt: "Barvak estate landscape",
  },
};

export const Carousel: Story = {
  args: {
    images: [
      "/photos/home/horizontal-scroll-1.png",
      "/photos/home/horizontal-scroll-2.png",
      "/photos/home/horizontal-scroll-3.png",
      "/photos/home/horizontal-scroll-4.png",
    ],
    imageAlt: [
      "Landscape view 1",
      "Landscape view 2",
      "Landscape view 3",
      "Landscape view 4",
    ],
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    images: [
      "/photos/home/horizontal-scroll-1.png",
      "/photos/home/horizontal-scroll-2.png",
      "/photos/home/horizontal-scroll-3.png",
    ],
    title: "Discover Barvak Estate",
    description:
      "A living community where nature and tradition come together, offering an authentic experience in the heart of the landscape.",
  },
};

export const SingleImageWithTitle: Story = {
  args: {
    images: ["/photos/state/realState-1.png"],
    imageAlt: "Real estate view",
    title: "The Estate",
    description:
      "More than a place, it is a way of life surrounded by nature and history.",
  },
};

export const FastAutoplay: Story = {
  args: {
    images: [
      "/photos/home/storyCard-1.png",
      "/photos/home/storyCard-2.png",
      "/photos/home/storyCard-3.png",
    ],
    autoplayDelay: 2000,
  },
};
