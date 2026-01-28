import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionHeader } from "./sectionHeader";

const meta = {
  title: "Display/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Main heading text",
    },
    description: {
      control: "text",
      description: "Optional description below the title",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Discover the Estate",
  },
};

export const WithDescription: Story = {
  args: {
    title: "Our Programs",
    description:
      "Explore our conservation initiatives designed to protect and restore the natural ecosystem of the region.",
  },
};
