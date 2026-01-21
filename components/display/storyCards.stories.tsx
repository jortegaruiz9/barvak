import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import StoryCards from "./storyCards";

const meta = {
  title: "Display/StoryCards",
  component: StoryCards,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    cards: {
      control: "object",
      description: "Array of card objects with image, title, description, and alt properties",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the section",
    },
  },
} satisfies Meta<typeof StoryCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeCards: Story = {
  args: {
    cards: [
      {
        image: "/photos/home/storyCard-1.png",
        title: "The Estate",
        description: "A sanctuary where nature and tradition come together in perfect harmony.",
        alt: "Barvak Estate landscape",
      },
      {
        image: "/photos/home/storyCard-2.png",
        title: "Our Horses",
        description: "Experience the freedom of horseback riding through pristine landscapes.",
        alt: "Horses at Barvak",
      },
      {
        image: "/photos/home/storyCard-3.png",
        title: "The Community",
        description: "Join a community dedicated to sustainable living and natural beauty.",
        alt: "Barvak community",
      },
    ],
  },
};

export const SingleCard: Story = {
  args: {
    cards: [
      {
        image: "/photos/home/storyCard-1.png",
        title: "Welcome to Barvak",
        description: "Discover a place where time slows down and nature takes center stage.",
        alt: "Barvak Estate main view",
      },
    ],
  },
};

export const TwoCards: Story = {
  args: {
    cards: [
      {
        image: "/photos/home/storyCard-1.png",
        title: "The Landscape",
        description: "Rolling hills and ancient forests create a breathtaking backdrop.",
        alt: "Barvak landscape",
      },
      {
        image: "/photos/home/storyCard-2.png",
        title: "The Experience",
        description: "Every moment at Barvak is an opportunity for discovery.",
        alt: "Barvak experience",
      },
    ],
  },
};

export const FourCards: Story = {
  args: {
    cards: [
      {
        image: "/photos/home/storyCard-1.png",
        title: "Nature",
        description: "Immerse yourself in untouched wilderness.",
        alt: "Nature at Barvak",
      },
      {
        image: "/photos/home/storyCard-2.png",
        title: "Adventure",
        description: "Explore trails and discover hidden gems.",
        alt: "Adventure at Barvak",
      },
      {
        image: "/photos/home/storyCard-3.png",
        title: "Tranquility",
        description: "Find peace in the rhythm of nature.",
        alt: "Tranquility at Barvak",
      },
      {
        image: "/photos/home/storyCard-1.png",
        title: "Connection",
        description: "Build meaningful relationships with the land and community.",
        alt: "Connection at Barvak",
      },
    ],
  },
};

export const WithoutText: Story = {
  args: {
    cards: [
      {
        image: "/photos/home/storyCard-1.png",
        alt: "Barvak view 1",
      },
      {
        image: "/photos/home/storyCard-2.png",
        alt: "Barvak view 2",
      },
      {
        image: "/photos/home/storyCard-3.png",
        alt: "Barvak view 3",
      },
    ],
  },
};

export const TitlesOnly: Story = {
  args: {
    cards: [
      {
        image: "/photos/home/storyCard-1.png",
        title: "The Estate",
        alt: "Barvak Estate",
      },
      {
        image: "/photos/home/storyCard-2.png",
        title: "The Horses",
        alt: "Barvak Horses",
      },
      {
        image: "/photos/home/storyCard-3.png",
        title: "The Community",
        alt: "Barvak Community",
      },
    ],
  },
};

export const WithCustomClass: Story = {
  args: {
    cards: [
      {
        image: "/photos/home/storyCard-1.png",
        title: "Custom Styled Section",
        description: "This section has additional padding applied via className.",
        alt: "Custom styled card",
      },
      {
        image: "/photos/home/storyCard-2.png",
        title: "Flexible Layout",
        description: "The component accepts custom classes for styling flexibility.",
        alt: "Flexible layout card",
      },
    ],
    className: "py-12 bg-gray-100",
  },
};
