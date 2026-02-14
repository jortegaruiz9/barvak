import dynamic from "next/dynamic";
import Hero from "@/components/display/hero";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import Section from "@/components/display/section";
import { ExperienceGrid } from "@/components/display/experienceGrid";
import CallToAction from "@/components/display/callToAction";
import { whatsapp } from "@/lib/data/contact";

const BrandBanner = dynamic(() =>
  import("@/components/display/brandBanner").then((mod) => mod.BrandBanner),
);

const Stats = dynamic(() =>
  import("@/components/display/stats").then((mod) => mod.Stats),
);

const brandBannerItems = [
  { logo: "/patrocinadores/1.png", alt: "Sponsor 1" },
  { logo: "/patrocinadores/2.png", alt: "Sponsor 2" },
  { logo: "/patrocinadores/3.png", alt: "Sponsor 3" },
  { logo: "/patrocinadores/4.png", alt: "Sponsor 4" },
  { logo: "/patrocinadores/5.png", alt: "Sponsor 5" },
  { logo: "/patrocinadores/6.png", alt: "Sponsor 6" },
  { logo: "/patrocinadores/7.png", alt: "Sponsor 7" },
];
export default function ReforestationPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        imageSrc="/content/reforestation/img-volcan-principal.jpg"
        imageAlt="Reforestation"
        logoSrc="/logos/logo-barvak.png"
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
            imageSrc: "/content/reforestation/img-guantes.jpg",
            imageAlt: "Planting",
          },
          {
            imageSrc: "/content/reforestation/img-abrazo.jpg",
            imageAlt: "Hug",
          },
          {
            imageSrc: "/content/reforestation/img-cascada.jpg",
            imageAlt: "Cascade",
          },
          {
            imageSrc: "/content/reforestation/img-puente-largo.jpg",
            imageAlt: "Long bridge",
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
            label: "Trees planted in 2024",
          },
          {
            value: 4000,
            total: 4000,
            completed: 3505,
            label: "Trees planted in 2025",
          },
          {
            value: 6000,
            total: 6000,
            completed: 500,
            label: "Projected for 2026",
          },
        ]}
      />
      <BrandBanner items={brandBannerItems} />
      <CallToAction
        title="Grow the future, one tree at a time"
        buttonLabel="Schedule your reforestation day"
        bgColor="bg-white"
        buttonHref={`https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(whatsapp.message)}`}
        buttonTarget="_blank"
      />
    </div>
  );
}
