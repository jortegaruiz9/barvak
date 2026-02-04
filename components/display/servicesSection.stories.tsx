import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ServicesSection } from "./servicesSection";

const meta = {
  title: "Display/ServicesSection",
  component: ServicesSection,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    services: {
      control: "object",
      description: "Array of services with description, image, and alt text",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof ServicesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    services: [
      {
        description:
          "Experience world-class equestrian facilities designed for both training and leisure riding.",
        image: "/photos/equestrian/equestrian-1.webp",
        alt: "Equestrian facility",
      },
      {
        description:
          "Our expert team provides personalized care and attention to every horse in our stables.",
        image: "/photos/equestrian/equestrian-2.webp",
        alt: "Horse care services",
      },
      {
        description:
          "Scenic trails wind through the estate, offering unforgettable riding experiences.",
        image: "/photos/equestrian/equestrian-3.webp",
        alt: "Trail riding",
      },
    ],
  },
};

export const SingleService: Story = {
  args: {
    services: [
      {
        description:
          "Discover our premium boarding services with spacious stalls and daily turnout.",
        image: "/photos/equestrian/equestrian-4.webp",
        alt: "Horse boarding",
      },
    ],
  },
};

export const TwoServices: Story = {
  args: {
    services: [
      {
        description:
          "Professional training programs tailored to riders of all skill levels.",
        image: "/photos/equestrian/equestrian-5.webp",
        alt: "Riding training",
      },
      {
        description:
          "State-of-the-art arenas for dressage, jumping, and general schooling.",
        image: "/photos/equestrian/equestrian-6.webp",
        alt: "Riding arena",
      },
    ],
  },
};

export const WithCustomClass: Story = {
  args: {
    services: [
      {
        description:
          "Immerse yourself in the equestrian lifestyle at our exclusive retreat.",
        image: "/photos/equestrian/equestrian-7.webp",
        alt: "Equestrian retreat",
      },
    ],
    className: "bg-gray-50 py-12",
  },
};
