import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InteractiveHeader } from "./interactiveHeader";

const meta = {
  title: "Display/InteractiveHeader",
  component: InteractiveHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Main heading text",
    },
    description: {
      control: "text",
      description: "Description text on the right side",
    },
    buttonText: {
      control: "text",
      description: "Text for the CTA button",
    },
    href: {
      control: "text",
      description: "Link destination for the button",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof InteractiveHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Discover the Equestrian Competitions at Hacienda Barvak and Meet Our Riders.",
    description: "Learn about Competitions, the Barvak Cup and Asodhea.",
    buttonText: "See more",
    href: "/competitions",
  },
};
