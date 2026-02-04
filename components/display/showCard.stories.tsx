import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ShowCard } from "./showCard";

const meta = {
  title: "Display/ShowCard",
  component: ShowCard,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    slides: {
      control: "object",
      description:
        "Array of slides with image, alt, title, and paragraphs array",
    },
    autoplayDelay: {
      control: { type: "number", min: 1000, max: 30000, step: 1000 },
      description: "Autoplay delay in milliseconds",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof ShowCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slides: [
      {
        image: "/photos/equestrian/showCard.webp",
        alt: "Equestrian show event",
        title: "Annual Equestrian Showcase",
        paragraphs: [
          "Join us for our prestigious annual event featuring world-class riders and horses.",
          "Experience the elegance of dressage, the thrill of show jumping, and the tradition of classical horsemanship.",
        ],
      },
      {
        image: "/photos/equestrian/equestrian-1.webp",
        alt: "Training facilities",
        title: "World-Class Training Facilities",
        paragraphs: [
          "Our state-of-the-art facilities provide the perfect environment for both horse and rider development.",
          "From covered arenas to outdoor courses, we offer everything needed for excellence.",
        ],
      },
      {
        image: "/photos/equestrian/equestrian-2.webp",
        alt: "Professional instruction",
        title: "Expert Instruction",
        paragraphs: [
          "Learn from internationally recognized trainers with decades of competitive experience.",
        ],
      },
    ],
    autoplayDelay: 15000,
  },
};

export const SingleSlide: Story = {
  args: {
    slides: [
      {
        image: "/photos/equestrian/showCard.webp",
        alt: "Featured event",
        title: "Featured Event",
        paragraphs: [
          "A single slide showcase highlighting our most important upcoming event.",
          "Register now to secure your spot at this exclusive gathering.",
        ],
      },
    ],
  },
};

export const FastAutoplay: Story = {
  args: {
    slides: [
      {
        image: "/photos/equestrian/equestrian-3.webp",
        alt: "Trail riding",
        title: "Trail Riding Adventures",
        paragraphs: ["Explore scenic paths through our expansive grounds."],
      },
      {
        image: "/photos/equestrian/equestrian-4.webp",
        alt: "Stable facilities",
        title: "Premium Stabling",
        paragraphs: ["Comfortable accommodations for your equine partner."],
      },
    ],
    autoplayDelay: 3000,
  },
};

export const WithCustomClass: Story = {
  args: {
    slides: [
      {
        image: "/photos/equestrian/equestrian-5.webp",
        alt: "Competition event",
        title: "Competition Season",
        paragraphs: [
          "Prepare for the upcoming competition season with our comprehensive training programs.",
          "Our facility hosts regional and national level events throughout the year.",
        ],
      },
    ],
    className: "bg-gray-100",
  },
};
