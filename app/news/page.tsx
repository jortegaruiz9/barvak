import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import { ExperienceGrid } from "@/components/display/experienceGrid";
import CallToAction from "@/components/display/callToAction";

export default function NewsPage() {
  return (
    <div className="flex flex-col gap-12">
      <Hero
        text="What the world is saying about Hacienda Barvak"
        videoId="278IRQ6HSi4"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
        startTime={18}
        endTime={200}
      />
      <Section
        title="Where nature, legacy, and wellbeing meet"
        description="We bring together the stories, articles, and publications that highlight the essence and growth of Hacienda Barvak. Here you will find press coverage, editorial reports, and relevant mentions in national and international media that showcase our vision, our projects, and the positive impact we create in the community and the natural environment."
        button={{
          text: "Know more about Barvak",
          href: "/contact",
        }}
      />
      <ExperienceGrid
        items={[
          {
            imageSrc: "/photos/news/entrada.webp",
            imageAlt: "News",
            title: "The Main Entrance",
            description:
              "A welcoming gateway where the adventure at Barvak begins, surrounded by lush scenery and timeless elegance.",
          },
          {
            imageSrc: "/photos/news/grupo.webp",
            imageAlt: "News",
            title: "Community Gathering",
            description:
              "Moments of connection and celebration, capturing the spirit of togetherness within the Barvak estate.",
          },
          {
            imageSrc: "/photos/news/observacion.webp",
            imageAlt: "News",
            title: "Birdwatching Views",
            description:
              "Experience the wonder of wildlife observation—where rare birds and nature enthusiasts meet in harmony.",
          },
          {
            imageSrc: "/photos/news/reforestacion.webp",
            imageAlt: "News",
            title: "Forest Restoration",
            description:
              "The promise of a greener future: hands joining to plant new life and rejuvenate the Barvak landscape.",
          },
        ]}
      />
      <CallToAction
        title="GRI - Sustainability Report"
        description="As part of our commitment to sustainability and transparency, we present the 2024 Sustainability Report. This document summarizes our environmental, social, and governance (ESG) performance, aligned with GRI and ISSB standards, reaffirming our vision of growing in harmony with nature, people, and the future."
        buttonLabel="Download GRI 2024 Reporte (PDF)"
        buttonHref="/contact"
      />
    </div>
  );
}
