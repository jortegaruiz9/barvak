import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ContactSection from "./contactSection";

const meta = {
  title: "Display/ContactSection",
  component: ContactSection,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    personImage: {
      control: "text",
      description: "URL of the person's image",
    },
    personImageAlt: {
      control: "text",
      description: "Alt text for the person's image",
    },
    personName: {
      control: "text",
      description: "Name of the contact person",
    },
    personRole: {
      control: "text",
      description: "Role/title of the contact person",
    },
    bookingTitle: {
      control: "text",
      description: "Title for the booking section",
    },
    bookingDescription: {
      control: "text",
      description: "Description for the booking section",
    },
    bookingButtonText: {
      control: "text",
      description: "Text for the booking button",
    },
    bookingButtonHref: {
      control: "text",
      description: "Link for the booking button",
    },
    contactTitle: {
      control: "text",
      description: "Title for the contact section",
    },
    contactDescription: {
      control: "text",
      description: "Description for the contact section",
    },
    countryLabel: {
      control: "text",
      description: "Country label for phone number",
    },
  },
} satisfies Meta<typeof ContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    personImage: "/photos/state/contactCard.webp",
    personImageAlt: "Juan Perez - Director of Residential Sales",
    personName: "Juan Perez",
    personRole: "Director of Residential Sales",
    bookingTitle: "Book a Personal Call",
    bookingDescription:
      "Schedule a private consultation with our sales team to discuss your residential needs and explore available properties.",
    bookingButtonText: "Book a Call",
    bookingButtonHref: "/contact",
    contactTitle: "Telephone & Email",
    contactDescription:
      "Feel free to contact us directly. We're here to help you find your perfect home.",
    countryLabel: "Costa Rica:",
  },
};
