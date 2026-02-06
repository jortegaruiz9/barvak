import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeatureCarousel } from "./featureCarousel";

const meta = {
  title: "Display/FeatureCarousel",
  component: FeatureCarousel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Section header title",
    },
    description: {
      control: "text",
      description: "Optional section header description",
    },
    items: {
      control: "object",
      description: "Array of carousel items (text or image)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof FeatureCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Excellence in Every Detail",
    description:
      "We are proud to offer a finest equestrian facilities in Central America.",
    items: [
      {
        type: "text",
        title: "A natural grass jumping arena",
        description:
          "A natural grass jumping arena, a silica-sand arena, and a dedicated warm-up ring; spacious luxury stables, paddocks for the horses' recreation, covered grandstands, and areas designed for the comfort of riders, trainers, and visitors.\n\nEvery corner reflects our commitment to sport, safety, and animal wellbeing. All within a setting surrounded by nature and built to the highest international standards of the equestrian world.",
      },
      {
        type: "image",
        src: "/photos/equestrian/caballo-1.webp",
        alt: "Aerial view of jumping arena",
      },
      {
        type: "image",
        src: "/photos/equestrian/caballo-2.webp",
        alt: "Silica-sand arena",
      },
      {
        type: "image",
        src: "/photos/equestrian/campo.webp",
        alt: "Luxury stables",
      },
    ],
  },
};
