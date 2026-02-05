import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CallToAction from "./callToAction";

const meta = {
  title: "Display/CallToAction",
  component: CallToAction,
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
      description: "Main heading text for the CTA section",
    },
    description: {
      control: "text",
      description: "Optional supporting text below the title",
    },
    buttonLabel: {
      control: "text",
      description: "Text displayed on the action button",
    },
    buttonHref: {
      control: "text",
      description: "URL the button links to",
    },
    bgColor: {
      control: "text",
      description: "Background color class (Tailwind)",
    },
  },
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Ready to Experience the Estate?",
    description:
      "Book your visit today and discover the beauty of our grounds.",
    buttonLabel: "Schedule a Visit",
    buttonHref: "/contact",
  },
};

export const WithoutDescription: Story = {
  args: {
    title: "Join Our Community",
    buttonLabel: "Get Started",
    buttonHref: "/register",
  },
};

export const CustomBackground: Story = {
  args: {
    title: "Exclusive Members Area",
    description: "Access premium features and personalized services.",
    buttonLabel: "Learn More",
    buttonHref: "/membership",
    bgColor: "bg-custom-primary",
  },
};

export const DarkBackground: Story = {
  args: {
    title: "Contact Our Team",
    description: "We're here to answer any questions you may have.",
    buttonLabel: "Get in Touch",
    buttonHref: "/contact",
    bgColor: "bg-gray-800",
  },
};
