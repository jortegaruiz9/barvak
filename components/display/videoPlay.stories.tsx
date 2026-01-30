import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VideoPlay } from "./videoPlay";

const meta = {
  title: "Display/VideoPlay",
  component: VideoPlay,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Array of video items with image, alt text, and YouTube video ID",
    },
    buttonText: {
      control: "text",
      description: "Text displayed on the play button",
    },
    pauseText: {
      control: "text",
      description: "Text displayed on the pause button",
    },
    autoplayDelay: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "Autoplay delay in milliseconds",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof VideoPlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleVideo: Story = {
  args: {
    items: [
      {
        image: "https://img.youtube.com/vi/5xqgvRIUffI/maxresdefault.jpg",
        alt: "Barvak Estate Video",
        videoId: "5xqgvRIUffI",
      },
    ],
    buttonText: "Watch Video",
  },
};

export const MultipleVideos: Story = {
  args: {
    items: [
      {
        image: "https://img.youtube.com/vi/5xqgvRIUffI/maxresdefault.jpg",
        alt: "Barvak Estate Video 1",
        videoId: "5xqgvRIUffI",
      },
      {
        image: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        alt: "Barvak Estate Video 2",
        videoId: "dQw4w9WgXcQ",
      },
      {
        image: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
        alt: "Barvak Estate Video 3",
        videoId: "jNQXAC9IVRw",
      },
    ],
    buttonText: "Play Now",
  },
};

export const CustomTexts: Story = {
  args: {
    items: [
      {
        image: "https://img.youtube.com/vi/5xqgvRIUffI/maxresdefault.jpg",
        alt: "Barvak Estate Video",
        videoId: "5xqgvRIUffI",
      },
    ],
    buttonText: "Ver Video",
    pauseText: "Pausar",
  },
};

export const FastAutoplay: Story = {
  args: {
    items: [
      {
        image: "https://img.youtube.com/vi/5xqgvRIUffI/maxresdefault.jpg",
        alt: "Barvak Estate Video 1",
        videoId: "5xqgvRIUffI",
      },
      {
        image: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        alt: "Barvak Estate Video 2",
        videoId: "dQw4w9WgXcQ",
      },
    ],
    autoplayDelay: 2000,
  },
};
