import dynamic from "next/dynamic";
import Hero from "@/components/display/hero";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import Section from "@/components/display/section";
import { ExperienceGrid } from "@/components/display/experienceGrid";
import CallToAction from "@/components/display/callToAction";

const BrandBanner = dynamic(() =>
  import("@/components/display/brandBanner").then((mod) => mod.BrandBanner),
);

const Stats = dynamic(() =>
  import("@/components/display/stats").then((mod) => mod.Stats),
);

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
export default function ReforestationPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        videoId="DTGNlk2cXa0"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
        text="Where every tree matters"
      />
      <FullscreenMedia
        title="At Barvak, planting means regenerating"
        description="Our reforestation program invites companies, schools, and families to help restore native forests, strengthen the biological corridor, and reconnect with the land through a guided, safe, and meaningful experience"
        images={["/photos/reforestation/actividad.webp"]}
        imageAlt="Reforestation"
      />
      <ExperienceGrid
        items={[
          {
            imageSrc: "/photos/reforestation/plantacion.webp",
            imageAlt: "Reforestation",
          },
          {
            imageSrc: "/photos/reforestation/reforestacion-abrazo.webp",
            imageAlt: "Reforestation",
          },
          {
            imageSrc: "/photos/reforestation/rio.webp",
            imageAlt: "Reforestation",
          },
          {
            imageSrc: "/photos/reforestation/zona.webp",
            imageAlt: "Reforestation",
          },
        ]}
      />
      <Section
        title="The Experience"
        description="We design immersive days in the mountains that include an introductory talk, the delivery of tools, and expert guidance throughout the planting activity. Optionally, each experience can conclude with a brunch or lunch to celebrate the day in community."
        button={{
          text: "Download The Program",
          href: "/contact",
        }}
      />
      <Stats
        title="Our Stats"
        items={[
          {
            value: 5000,
            total: 5000,
            completed: 3500,
            label: "Trees planted in 2026",
          },
          {
            value: 4000,
            total: 4000,
            completed: 3505,
            label: "Projected for 2026",
          },
          {
            value: 6000,
            total: 6000,
            completed: 500,
            label: "Total trees planted",
          },
        ]}
      />
      <BrandBanner items={brandBannerItems} />
      <CallToAction
        title="Grow the future, one tree at a time"
        buttonLabel="Schedule your reforestation day"
        bgColor="bg-white"
        buttonHref="/contact"
      />
    </div>
  );
}
