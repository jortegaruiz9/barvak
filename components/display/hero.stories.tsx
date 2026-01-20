import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Hero from "./hero";

const meta = {
  title: "Display/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[200vh]">
        <Story />
        <div className="p-8 bg-gray-100">
          <p className="text-gray-600">
            Scroll up to see the hero expand animation
          </p>
        </div>
      </div>
    ),
  ],
  argTypes: {
    text: {
      control: "text",
      description: "Main text displayed in the hero",
    },
    videoId: {
      control: "text",
      description: "YouTube video ID for the background",
    },
    logoSrc: {
      control: "text",
      description: "Optional logo image source",
    },
    logoAlt: {
      control: "text",
      description: "Alt text for the logo",
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLogo: Story = {
  args: {
    text: "Here, the wind smells of forest, horses run free, and time flows at the rhythm of the landscape. More than an estate it is a living community in constant evolution.",
    videoId: "5xqgvRIUffI",
    logoSrc: "/logos/barvak-white.png",
    logoAlt: "Barvak Estate",
  },
};

export const WithoutLogo: Story = {
  args: {
    text: "Here, the wind smells of forest, horses run free, and time flows at the rhythm of the landscape. More than an estate it is a living community in constant evolution.",
    videoId: "5xqgvRIUffI",
  },
};
