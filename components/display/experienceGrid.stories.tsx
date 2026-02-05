import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ExperienceGrid } from "./experienceGrid";

const meta: Meta<typeof ExperienceGrid> = {
  title: "Display/ExperienceGrid",
  component: ExperienceGrid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ExperienceGrid>;

const sampleItems = [
  {
    imageSrc: "/photos/equestrian/equestrian-1.webp",
    imageAlt: "Equestrian experience 1",
    title: "Paseos guiados",
    description:
      "Disfruta de paseos a caballo por senderos naturales con guías expertos.",
  },
  {
    imageSrc: "/photos/equestrian/equestrian-2.webp",
    imageAlt: "Equestrian experience 2",
    title: "Clases de equitación",
    description: "Aprende las técnicas básicas y avanzadas de la equitación.",
  },
  {
    imageSrc: "/photos/equestrian/equestrian-3.webp",
    imageAlt: "Equestrian experience 3",
    title: "Rutas de montaña",
    description:
      "Explora los paisajes más impresionantes a lomos de nuestros caballos.",
  },
  {
    imageSrc: "/photos/equestrian/equestrian-4.webp",
    imageAlt: "Equestrian experience 4",
    title: "Experiencias familiares",
    description:
      "Actividades diseñadas para toda la familia en un entorno seguro.",
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const TwoItems: Story = {
  args: {
    items: sampleItems.slice(0, 2),
  },
};

export const WithoutText: Story = {
  args: {
    items: [
      {
        imageSrc: "/photos/equestrian/equestrian-1.webp",
        imageAlt: "Equestrian experience 1",
      },
      {
        imageSrc: "/photos/equestrian/equestrian-2.webp",
        imageAlt: "Equestrian experience 2",
      },
      {
        imageSrc: "/photos/equestrian/equestrian-3.webp",
        imageAlt: "Equestrian experience 3",
      },
      {
        imageSrc: "/photos/equestrian/equestrian-4.webp",
        imageAlt: "Equestrian experience 4",
      },
    ],
  },
};

export const MixedContent: Story = {
  args: {
    items: [
      {
        imageSrc: "/photos/equestrian/equestrian-1.webp",
        imageAlt: "Equestrian experience 1",
        title: "Con título y descripción",
        description: "Este item tiene ambos elementos de texto.",
      },
      {
        imageSrc: "/photos/equestrian/equestrian-2.webp",
        imageAlt: "Equestrian experience 2",
      },
      {
        imageSrc: "/photos/equestrian/equestrian-3.webp",
        imageAlt: "Equestrian experience 3",
        title: "Solo título",
      },
      {
        imageSrc: "/photos/equestrian/equestrian-4.webp",
        imageAlt: "Equestrian experience 4",
        description: "Este item solo tiene descripción sin título.",
      },
    ],
  },
};
