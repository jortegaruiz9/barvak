import type { Meta, StoryObj } from "@storybook/react";
import { BrandBanner } from "./brandBanner";

const meta: Meta<typeof BrandBanner> = {
  title: "Display/BrandBanner",
  component: BrandBanner,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BrandBanner>;

export const Default: Story = {
  args: {
    items: [
      { logo: "/placeholder-logo.svg", alt: "Brand 1" },
      { logo: "/placeholder-logo.svg", alt: "Brand 2" },
      { logo: "/placeholder-logo.svg", alt: "Brand 3" },
      { logo: "/placeholder-logo.svg", alt: "Brand 4" },
      { logo: "/placeholder-logo.svg", alt: "Brand 5" },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ logo: "/placeholder-logo.svg", alt: "Single Brand" }],
  },
};

export const FastSpeed: Story = {
  args: {
    items: [
      { logo: "/placeholder-logo.svg", alt: "Brand 1" },
      { logo: "/placeholder-logo.svg", alt: "Brand 2" },
      { logo: "/placeholder-logo.svg", alt: "Brand 3" },
    ],
    speed: 80,
  },
};

export const SlowSpeed: Story = {
  args: {
    items: [
      { logo: "/placeholder-logo.svg", alt: "Brand 1" },
      { logo: "/placeholder-logo.svg", alt: "Brand 2" },
      { logo: "/placeholder-logo.svg", alt: "Brand 3" },
    ],
    speed: 20,
  },
};
