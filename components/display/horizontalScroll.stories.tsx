import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HorizontalScroll } from "./horizontalScroll";

const meta = {
  title: "Display/HorizontalScroll",
  component: HorizontalScroll,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[300vh]">
        <div className="h-16 bg-background" />
        <Story />
        <div className="p-8 bg-muted">
          <p className="text-muted-foreground">
            Scroll to see the horizontal scroll animation (desktop only)
          </p>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof HorizontalScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCards = [
  {
    id: "1",
    url: "/estate",
    title: "The Estate",
    summary: "A sanctuary where nature and tradition come together in perfect harmony.",
    image: "/photos/home/horizontal-scroll-1.png",
    imageAlt: "Barvak Estate landscape",
  },
  {
    id: "2",
    url: "/horses",
    title: "Our Horses",
    summary: "Experience the freedom of horseback riding through pristine landscapes.",
    image: "/photos/home/horizontal-scroll-2.png",
    imageAlt: "Horses at Barvak",
  },
  {
    id: "3",
    url: "/community",
    title: "The Community",
    summary: "Join a community dedicated to sustainable living and natural beauty.",
    image: "/photos/home/horizontal-scroll-3.png",
    imageAlt: "Barvak community",
  },
  {
    id: "4",
    url: "/nature",
    title: "Nature Reserve",
    summary: "Explore untouched wilderness and discover the beauty of the natural world.",
    image: "/photos/home/horizontal-scroll-4.png",
    imageAlt: "Nature reserve at Barvak",
  },
  {
    id: "5",
    url: "/experiences",
    title: "Experiences",
    summary: "Create unforgettable memories with our curated activities and adventures.",
    image: "/photos/home/horizontal-scroll-5.png",
    imageAlt: "Experiences at Barvak",
  },
];

export const Default: Story = {
  args: {
    title: "A place where life flows with purpose.",
    cards: sampleCards,
  },
};
