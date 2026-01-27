import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VisualStorySection } from "./visualStorySection";

const meta = {
  title: "Display/VisualStorySection",
  component: VisualStorySection,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    topImages: {
      control: "object",
      description: "Array of two images displayed side by side at the top",
    },
    carouselImages: {
      control: "object",
      description: "Array of images for the horizontal scroll carousel",
    },
    title: {
      control: "text",
      description: "Optional title displayed above the images",
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
} satisfies Meta<typeof VisualStorySection>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTopImages = [
  {
    src: "/photos/home/horizontal-scroll-1.png",
    alt: "Barvak estate view 1",
  },
  {
    src: "/photos/home/horizontal-scroll-2.png",
    alt: "Barvak estate view 2",
  },
];

const sampleCarouselImages = [
  {
    src: "/photos/home/horizontal-scroll-3.png",
    alt: "Carousel image 1",
  },
  {
    src: "/photos/home/horizontal-scroll-4.png",
    alt: "Carousel image 2",
  },
  {
    src: "/photos/home/storyCard-1.png",
    alt: "Carousel image 3",
  },
  {
    src: "/photos/home/storyCard-2.png",
    alt: "Carousel image 4",
  },
];

export const Default: Story = {
  args: {
    topImages: sampleTopImages,
    carouselImages: sampleCarouselImages,
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    topImages: sampleTopImages,
    carouselImages: sampleCarouselImages,
    title: "A place where life flows with purpose.",
    description:
      "Discover a living community where nature and tradition come together, offering an authentic experience in the heart of the landscape.",
  },
};

export const WithTitleOnly: Story = {
  args: {
    topImages: sampleTopImages,
    carouselImages: sampleCarouselImages,
    title: "Experience the Estate",
  },
};

export const ManyCarouselImages: Story = {
  args: {
    topImages: sampleTopImages,
    carouselImages: [
      ...sampleCarouselImages,
      {
        src: "/photos/home/storyCard-3.png",
        alt: "Carousel image 5",
      },
      {
        src: "/photos/home/carousel-home.jpeg",
        alt: "Carousel image 6",
      },
    ],
    title: "Explore Our Gallery",
    description: "Scroll horizontally to discover more images of the estate.",
  },
};
