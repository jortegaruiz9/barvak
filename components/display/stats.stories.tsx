import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stats } from "./stats";

const meta = {
  title: "Display/Stats",
  component: Stats,
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
      description: "Section title",
    },
    description: {
      control: "text",
      description: "Optional section description",
    },
    items: {
      control: "object",
      description: "Array of stat items with value, total, completed, and label",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Our Impact",
    description: "Making a difference through sustainable practices",
    items: [
      {
        value: 5000,
        total: 100,
        completed: 48,
        label: "Trees planted in 2024",
      },
      {
        value: 120,
        total: 100,
        completed: 75,
        label: "Hectares restored",
      },
      {
        value: 15,
        total: 100,
        completed: 90,
        label: "Active projects",
      },
    ],
  },
};

export const SingleStat: Story = {
  args: {
    title: "Progress",
    items: [
      {
        value: 2500,
        total: 100,
        completed: 65,
        label: "Goals achieved",
      },
    ],
  },
};

export const TwoStats: Story = {
  args: {
    title: "Performance Metrics",
    description: "Tracking our environmental commitments",
    items: [
      {
        value: 850,
        total: 100,
        completed: 85,
        label: "Carbon offset (tons)",
      },
      {
        value: 42,
        total: 100,
        completed: 42,
        label: "Partner organizations",
      },
    ],
  },
};

export const HighProgress: Story = {
  args: {
    title: "Near Completion",
    items: [
      {
        value: 9800,
        total: 100,
        completed: 98,
        label: "Target nearly reached",
      },
      {
        value: 450,
        total: 100,
        completed: 100,
        label: "Fully completed",
      },
      {
        value: 78,
        total: 100,
        completed: 95,
        label: "Almost there",
      },
    ],
  },
};

export const LowProgress: Story = {
  args: {
    title: "Just Getting Started",
    description: "Early stage initiatives",
    items: [
      {
        value: 150,
        total: 100,
        completed: 15,
        label: "New plantings",
      },
      {
        value: 25,
        total: 100,
        completed: 10,
        label: "Areas surveyed",
      },
      {
        value: 8,
        total: 100,
        completed: 20,
        label: "Teams deployed",
      },
    ],
  },
};
