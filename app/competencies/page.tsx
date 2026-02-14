import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import { SectionHeader } from "@/components/display/sectionHeader";
import StoryCards from "@/components/display/storyCards";
import { BrandBanner } from "@/components/display/brandBanner";
import ComplaintForm from "@/components/display/complaintForm";
import TablePositions from "@/components/display/tablePositions";
import type { CompetitionTab } from "@/components/display/tablePositions";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const competitionTabs: CompetitionTab[] = [
  {
    id: "dressage",
    label: "Dressage",
    title: "Champions",
    year: "2025",
    champions: [
      {
        image: "/content/competencies/alejandra-gomez.webp",
        alt: "1st Place Young Horses",
        position: "1st",
        title: "Young Horses",
        name: "Alejandra Gómez",
      },
      {
        image: "/content/competencies/cody-qualls.webp",
        alt: "1st Place Big Tour",
        position: "1st",
        title: "Big Tour",
        name: "Cody Qualls",
      },
      {
        image: "/content/competencies/emiliano-schiavone.webp",
        alt: "1st Place Small Tour",
        position: "1st",
        title: "Small Tour",
        name: "Emiliano Schiavone",
      },
      {
        image: "/content/competencies/juliana-herrera.webp",
        alt: "1st Place Fourth Level",
        position: "1st",
        title: "Fourth Level",
        name: "Valentina Rojas",
      },
      {
        image: "/content/competencies/melissa-chi.webp",
        alt: "1st Place Third Level",
        position: "1st",
        title: "Third Level",
        name: "Camila Brenes",
      },
      {
        image: "/content/competencies/samuel-jimenez.webp",
        alt: "1st Place Second Level",
        position: "1st",
        title: "Second Level",
        name: "Andrés Montero",
      },
      {
        image: "/content/competencies/alejandra-gomez.webp",
        alt: "1st Place First Level",
        position: "1st",
        title: "First Level",
        name: "Lucía Fernández",
      },
      {
        image: "/content/competencies/cody-qualls.webp",
        alt: "1st Place Training Level",
        position: "1st",
        title: "Training Level",
        name: "Diego Castillo",
      },
      {
        image: "/content/competencies/emiliano-schiavone.webp",
        alt: "1st Place Introductory",
        position: "1st",
        title: "Introductory",
        name: "Sofía Vargas",
      },
      {
        image: "/content/competencies/juliana-herrera.webp",
        alt: "Overall Winner Barvak Cup 2025 Dressage",
        position: "1st",
        title: "Overall Winner – Barvak Cup 2025",
        name: "Alejandra Gómez",
      },
    ],
    resultPages: [
      [
        {
          position: "1st",
          name: "Alejandra Gómez",
          club: "Hacienda Barvak",
          winPercentage: "72.45%",
          time: "06.12.34",
        },
        {
          position: "1st",
          name: "Cody Qualls",
          club: "Club Hípico CR",
          winPercentage: "70.18%",
          time: "06.25.08",
        },
        {
          position: "1st",
          name: "Emiliano Schiavone",
          club: "ASODHEA",
          winPercentage: "68.92%",
          time: "06.30.15",
        },
        {
          position: "1st",
          name: "Valentina Rojas",
          club: "Hacienda Barvak",
          winPercentage: "67.35%",
          time: "06.33.42",
        },
        {
          position: "1st",
          name: "Camila Brenes",
          club: "Club Hípico CR",
          winPercentage: "65.80%",
          time: "06.38.20",
        },
      ],
      [
        {
          position: "1st",
          name: "Andrés Montero",
          club: "ASODHEA",
          winPercentage: "64.50%",
          time: "06.41.10",
        },
        {
          position: "1st",
          name: "Lucía Fernández",
          club: "Hacienda Barvak",
          winPercentage: "63.20%",
          time: "06.44.05",
        },
        {
          position: "1st",
          name: "Diego Castillo",
          club: "Club Hípico CR",
          winPercentage: "61.75%",
          time: "06.47.30",
        },
        {
          position: "1st",
          name: "Sofía Vargas",
          club: "ASODHEA",
          winPercentage: "60.10%",
          time: "06.50.18",
        },
        {
          position: "1st",
          name: "Alejandra Gómez",
          club: "Hacienda Barvak",
          winPercentage: "72.45%",
          time: "06.12.34",
        },
      ],
    ],
  },
  {
    id: "show-jumping",
    label: "Show Jumping",
    title: "Champions",
    year: "2025",
    champions: [
      {
        image: "/content/competencies/juliana-herrera.webp",
        alt: "1st Place 1.50 m",
        position: "1st",
        title: "1.50 m",
        name: "Juliana Herrera",
      },
      {
        image: "/content/competencies/melissa-chi.webp",
        alt: "1st Place 1.45 m",
        position: "1st",
        title: "1.45 m",
        name: "Melissa Chi",
      },
      {
        image: "/content/competencies/samuel-jimenez.webp",
        alt: "1st Place 1.40 m",
        position: "1st",
        title: "1.40 m",
        name: "Samuel Jiménez",
      },
      {
        image: "/content/competencies/alejandra-gomez.webp",
        alt: "1st Place 1.35 m",
        position: "1st",
        title: "1.35 m",
        name: "Carlos Méndez",
      },
      {
        image: "/content/competencies/cody-qualls.webp",
        alt: "1st Place 1.30 m",
        position: "1st",
        title: "1.30 m",
        name: "María Torres",
      },
      {
        image: "/content/competencies/emiliano-schiavone.webp",
        alt: "1st Place 1.20 m",
        position: "1st",
        title: "1.20 m",
        name: "Luis Herrera",
      },
      {
        image: "/content/competencies/juliana-herrera.webp",
        alt: "1st Place 1.10 m",
        position: "1st",
        title: "1.10 m",
        name: "Ana Castillo",
      },
      {
        image: "/content/competencies/melissa-chi.webp",
        alt: "1st Place 0.90 m",
        position: "1st",
        title: "0.90 m",
        name: "Pedro Rojas",
      },
      {
        image: "/content/competencies/samuel-jimenez.webp",
        alt: "1st Place 0.80 m",
        position: "1st",
        title: "0.80 m",
        name: "Laura Jiménez",
      },
      {
        image: "/content/competencies/alejandra-gomez.webp",
        alt: "1st Place 0.70 m",
        position: "1st",
        title: "0.70 m",
        name: "Roberto Fallas",
      },
      {
        image: "/content/competencies/cody-qualls.webp",
        alt: "1st Place 0.60 m Verticals",
        position: "1st",
        title: "0.60 m (Verticals)",
        name: "Elena Brenes",
      },
      {
        image: "/content/competencies/emiliano-schiavone.webp",
        alt: "Overall Winner Barvak Cup 2025 Show Jumping",
        position: "1st",
        title: "Overall Winner – Barvak Cup 2025",
        name: "Juliana Herrera",
      },
    ],
    resultPages: [
      [
        {
          position: "1st",
          name: "Juliana Herrera",
          club: "Hacienda Barvak",
          winPercentage: "30.12%",
          time: "05.22.08",
        },
        {
          position: "1st",
          name: "Melissa Chi",
          club: "Club Hípico CR",
          winPercentage: "28.45%",
          time: "05.25.14",
        },
        {
          position: "1st",
          name: "Samuel Jiménez",
          club: "ASODHEA",
          winPercentage: "27.10%",
          time: "05.28.30",
        },
        {
          position: "1st",
          name: "Carlos Méndez",
          club: "Hacienda Barvak",
          winPercentage: "25.80%",
          time: "05.30.45",
        },
        {
          position: "1st",
          name: "María Torres",
          club: "Club Hípico CR",
          winPercentage: "24.60%",
          time: "05.33.20",
        },
        {
          position: "1st",
          name: "Luis Herrera",
          club: "ASODHEA",
          winPercentage: "23.15%",
          time: "05.36.10",
        },
      ],
      [
        {
          position: "1st",
          name: "Ana Castillo",
          club: "Hacienda Barvak",
          winPercentage: "22.00%",
          time: "05.38.55",
        },
        {
          position: "1st",
          name: "Pedro Rojas",
          club: "Club Hípico CR",
          winPercentage: "21.30%",
          time: "05.41.02",
        },
        {
          position: "1st",
          name: "Laura Jiménez",
          club: "ASODHEA",
          winPercentage: "20.15%",
          time: "05.44.30",
        },
        {
          position: "1st",
          name: "Roberto Fallas",
          club: "Hacienda Barvak",
          winPercentage: "19.40%",
          time: "05.47.12",
        },
        {
          position: "1st",
          name: "Elena Brenes",
          club: "Club Hípico CR",
          winPercentage: "18.75%",
          time: "05.50.08",
        },
        {
          position: "1st",
          name: "Juliana Herrera",
          club: "Hacienda Barvak",
          winPercentage: "30.12%",
          time: "05.22.08",
        },
      ],
    ],
  },
];

const brandBannerItems = [
  { logo: "/patrocinadores/1.png", alt: "Sponsor 1" },
  { logo: "/patrocinadores/2.png", alt: "Sponsor 2" },
  { logo: "/patrocinadores/3.png", alt: "Sponsor 3" },
  { logo: "/patrocinadores/4.png", alt: "Sponsor 4" },
  { logo: "/patrocinadores/5.png", alt: "Sponsor 5" },
  { logo: "/patrocinadores/6.png", alt: "Sponsor 6" },
  { logo: "/patrocinadores/7.png", alt: "Sponsor 7" },
];

export default function CompetenciesPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        text="Where every stride reflects precision, and every jump defines excellence."
        imageSrc="/content/competencies/img-portada.webp"
        imageAlt="Barvak Cup riders posing at the awards ceremony"
        logoSrc="/logos/logo-barvak.png"
        logoAlt="Barvak Estate"
      />
      <Section
        logo={{
          src: "/content/competencies/copa.svg",
          alt: "Barvak Cup icon",
        }}
        title="Equestrian excellence in every stride, in every jump."
        description={[
          "The Barvak Cup is Hacienda Barvak's official equestrian championship, created to motivate and recognize the dedication of our riders in the disciplines of show jumping and dressage.",
          "Endorsed by the Costa Rican Equestrian Federation (FECR) and organized in partnership with ASODHEA, it brings together national and international pairs in a natural, world-class setting.",
          "More than a competition, the Barvak Cup is a celebration of discipline, excellence, and passion for horses, consolidating Hacienda Barvak as one of the most outstanding equestrian centers in the region.",
        ]}
        backgroundColor="bg-[#213253]"
      />
      <TablePositions tabs={competitionTabs} />
      <SectionHeader title=" Where equestrian excellence meets the spirit of the land " />
      <StoryCards
        cards={[
          {
            image: "/content/competencies/img-foto-equipo.jpg",
            alt: "Barvak Cup medal winners posing at the awards ceremony",
          },
          {
            image: "/content/competencies/img-copa-barvak.jpg",
            alt: "Golden Barvak Cup trophy, 2nd edition",
          },
          {
            image: "/content/competencies/img-jinete.jpg",
            alt: "Rider on horseback giving thumbs up at the equestrian arena",
          },
        ]}
      />
      <Section
        logo={{
          src: "/content/competencies/Asodhea.svg",
          alt: "ASODHEA logo",
        }}
        title="What is ASODHEA?"
        description={[
          "The Asociación Deportiva Hípica Espinos de América (ASODHEA) promotes and regulates equestrian sport at Hacienda Barvak.",
          "Recognized by the Costa Rican Equestrian Federation, it organizes official dressage and show-jumping competitions, supports rider development, and ensures compliance with the Safe Sport Promotion Regulation.",
          "Its mission is to foster an environment guided by ethics, equine welfare, and sporting excellence.",
        ]}
        backgroundColor="bg-gray-100"
        textColor="text-gray-800"
      />
      <ComplaintForm
        imageSrc="/photos/competencies/form.webp"
        imageAlt="Rider on horseback at the equestrian arena"
      />
      <BrandBanner items={brandBannerItems} />
      <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-12 px-4 lg:px-0">
        <Button
          variant="normal"
          size="normal"
          asChild
          className="justify-between px-8 h-12 sm:min-w-[340px] lg:min-w-[400px]"
        >
          <a href="#" download="dressage-regulations.pdf">
            Dressage Regulations – Download PDF
            <Download className="size-5" />
          </a>
        </Button>
        <Button
          variant="normal"
          size="normal"
          asChild
          className="justify-between px-8 h-12 sm:min-w-[340px] lg:min-w-[400px]"
        >
          <a
            href="https://drive.google.com/file/d/1fekaL0Lg3R2maYFvmmQjX6qWxbPAlEzu/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show Jumping Regulations – Download PDF
            <Download className="size-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}
