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
    year: "2026",
    champions: [
      {
        image: "/photos/competencies/competidor-1.webp",
        alt: "Dressage champion rider",
        position: "1st",
        title: "Champion Dressage",
        name: "Domenica Aspen",
      },
      {
        image: "/photos/competencies/competidor-2.webp",
        alt: "Second place rider",
        position: "2nd",
        title: "Freestyle Final",
        name: "Valentina Rojas",
      },
      {
        image: "/photos/competencies/competidor-3.webp",
        alt: "Third place rider",
        position: "3rd",
        title: "Prix St. Georges",
        name: "Andrés Solano",
      },
    ],
    resultPages: [
      [
        {
          position: "1st",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "25.09%",
          time: "06.35.04",
        },
        {
          position: "2nd",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "25.09%",
          time: "06.35.04",
        },
        {
          position: "3rd",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "25.09%",
          time: "06.35.04",
        },
        {
          position: "4th",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "25.09%",
          time: "06.35.04",
        },
        {
          position: "5th",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "25.09%",
          time: "06.35.04",
        },
        {
          position: "6th",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "25.09%",
          time: "06.35.04",
        },
        {
          position: "7th",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "25.09%",
          time: "06.35.04",
        },
        {
          position: "8th",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "25.09%",
          time: "06.35.04",
        },
      ],
      [
        {
          position: "9th",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "22.15%",
          time: "06.40.12",
        },
        {
          position: "10th",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "21.80%",
          time: "06.42.08",
        },
        {
          position: "11th",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "20.50%",
          time: "06.45.30",
        },
        {
          position: "12th",
          name: "Juan Góngora",
          club: "Cumbaya alta",
          winPercentage: "19.90%",
          time: "06.48.15",
        },
      ],
    ],
  },
  {
    id: "show-jumping",
    label: "Show Jumping",
    title: "Champions",
    year: "2026",
    champions: [
      {
        image: "/photos/competencies/competidor-3.webp",
        alt: "Show jumping champion",
        position: "1st",
        title: "Grand Prix",
        name: "Carlos Mendez",
      },
      {
        image: "/photos/competencies/competidor-1.webp",
        alt: "Second place rider",
        position: "2nd",
        title: "Speed Challenge",
        name: "Maria Torres",
      },
      {
        image: "/photos/competencies/competidor-2.webp",
        alt: "Third place rider",
        position: "3rd",
        title: "Classic Round",
        name: "Luis Herrera",
      },
    ],
    resultPages: [
      [
        {
          position: "1st",
          name: "Carlos Mendez",
          club: "Club Hípico CR",
          winPercentage: "30.12%",
          time: "05.22.08",
        },
        {
          position: "2nd",
          name: "Maria Torres",
          club: "Hacienda Barvak",
          winPercentage: "28.45%",
          time: "05.25.14",
        },
        {
          position: "3rd",
          name: "Luis Herrera",
          club: "Club Hípico CR",
          winPercentage: "27.10%",
          time: "05.28.30",
        },
        {
          position: "4th",
          name: "Ana Castillo",
          club: "Cumbaya alta",
          winPercentage: "25.80%",
          time: "05.30.45",
        },
        {
          position: "5th",
          name: "Pedro Rojas",
          club: "Hacienda Barvak",
          winPercentage: "24.60%",
          time: "05.33.20",
        },
        {
          position: "6th",
          name: "Sofia Vargas",
          club: "Club Hípico CR",
          winPercentage: "23.15%",
          time: "05.36.10",
        },
      ],
      [
        {
          position: "7th",
          name: "Diego Mora",
          club: "Cumbaya alta",
          winPercentage: "22.00%",
          time: "05.38.55",
        },
        {
          position: "8th",
          name: "Laura Jimenez",
          club: "Hacienda Barvak",
          winPercentage: "21.30%",
          time: "05.41.02",
        },
        {
          position: "9th",
          name: "Roberto Fallas",
          club: "Club Hípico CR",
          winPercentage: "20.15%",
          time: "05.44.30",
        },
        {
          position: "10th",
          name: "Elena Brenes",
          club: "Cumbaya alta",
          winPercentage: "19.40%",
          time: "05.47.12",
        },
      ],
    ],
  },
];

const brandBannerItems = [
  {
    logo: "/logos/barvak-black.png",
    alt: "Brand 1",
  },
  {
    logo: "/logos/barvak-black.png",
    alt: "Brand 2",
  },
  {
    logo: "/logos/barvak-black.png",
    alt: "Brand 3",
  },
];

export default function CompetenciesPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        text="Where every stride reflects precision, and every jump defines excellence."
        videoId="Rkz6X5VrRBU"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
      />
      <Section
        logo={{
          src: "/photos/competencies/copa.svg",
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
      <SectionHeader title="Discover Barvak" />
      <SectionHeader title=" Where equestrian excellence meets the spirit of the land " />
      <StoryCards
        cards={[
          {
            image: "/photos/competencies/ganadores.webp",
            alt: "Barvak Cup medal winners posing at the awards ceremony",
          },
          {
            image: "/photos/competencies/copa.webp",
            alt: "Golden Barvak Cup trophy, 2nd edition",
          },
          {
            image: "/photos/competencies/caballo.webp",
            alt: "Rider on horseback giving thumbs up at the equestrian arena",
          },
        ]}
      />
      <Section
        logo={{
          src: "/photos/competencies/Asodhea.svg",
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
          <a href="#" download="show-jumping-regulations.pdf">
            Show Jumping Regulations – Download PDF
            <Download className="size-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}
