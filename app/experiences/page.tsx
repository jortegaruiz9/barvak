import Hero from "@/components/display/hero";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import { SectionHeader } from "@/components/display/sectionHeader";
import { ExperienceGrid } from "@/components/display/experienceGrid";
import { FeatureCarousel } from "@/components/display/featureCarousel";

export default function ExperiencesPage() {
  return (
    <div className="flex flex-col gap-12">
      <Hero
        text="Experiences"
        videoId="VlTSdevWZeQ"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
        startTime={18}
        endTime={200}
      />
      <FullscreenMedia
        title="Hacienda Barvak awakens the senses, calms the soul, and turns each day into a memorable experience."
        images={["/photos/experiences/caminata.webp"]}
        imageAlt="Discover Barvak Estate"
      />
      <SectionHeader title="Among breathing mountains, unfolding paths, and the sounds only nature can create, Barvak is a destination where every moment reveals something new." />
      <ExperienceGrid
        items={[
          {
            imageSrc: "/photos/experiences/aventura.webp",
            imageAlt: "Rivers",
            title: "Rivers",
            description:
              "Across the estate, rivers, streams, and natural springs flow through the mountains like threads of life. Crystal-clear waters descend over ancient stones and cloud forest, creating a natural symphony that soothes, inspires, and connects. Here, the water doesn't just pass through the land, it tells the stories of the land.",
          },
          {
            imageSrc: "/photos/experiences/observacion.webp",
            imageAlt: "Birdwatching",
            title: "Birdwatching",
            description:
              "Located within the Barva de Heredia biological corridor, Barvak is a sanctuary for both resident and migratory birds. Our ongoing reforestation efforts have increased the abundance of species, creating a paradise for birdwatchers and lovers of biodiversity. Colors, songs, and graceful flights turn every walk into an unexpected discovery.",
          },
          {
            imageSrc: "/photos/experiences/vacas.webp",
            imageAlt: "Cattle",
            title: "Barvak Dairy",
            description:
              "Our dairy operates under the highest standards of animal welfare, responsible management, and excellence in quality. Here, we produce exclusively A2A2 milk, renowned for its purity and nutritional value. An operation that honors the agricultural heritage of the region and reflects our commitment to sustainable practices.",
          },
          {
            imageSrc: "/photos/experiences/puente.webp",
            imageAlt: "Suspension Bridge",
            title: "Suspension Bridge ",
            description:
              "One of the longest suspension bridges in the country, designed by the renowned architect José Luis Pizarro, holder of multiple Guinness World Records for his works around the world.  Suspended between mountains and forest, this bridge offers a unique experience: walking above nature, feeling the height, and taking in the landscape.  A structure where engineering, art, and adventure meet in perfect balance.",
          },
        ]}
      />
      <FeatureCarousel
        title="A lifestyle where nature guides, calm renews, and each day is lived with authenticity. "
        items={[
          {
            type: "text",
            title: "Barvak is a living ecosystem.",
            description:
              "Among meadows, forests, and natural springs live deer, squirrels, cattle, sheep, hummingbirds, butterflies, and a rich diversity of species that find a safe home within the estate. Native vegetation—oaks, cypresses, mosses, ferns, bromeliads—wraps around every trail and reveals the richness of this mountain landscape. Here, wildlife isn’t just observed—it is shared.",
          },
          {
            type: "image",
            src: "/photos/experiences/colibri.webp",
            alt: "Hummingbirds",
          },
          {
            type: "image",
            src: "/photos/experiences/perezoso.webp",
            alt: "Animals",
          },
          {
            type: "image",
            src: "/photos/experiences/flor.webp",
            alt: "Flowers",
          },
        ]}
      />
      <FullscreenMedia
        title="Volcanoes, culture, and tradition: the living essence that embraces Barvak."
        images={["/photos/experiences/conexion.webp"]}
        imageAlt="Connections"
      />
      <FullscreenMedia
        images={[
          "/photos/experiences/volcan.webp",
          "/photos/experiences/laguna.webp",
        ]}
        imageAlt="Connections"
      />
      <ExperienceGrid
        items={[
          {
            imageSrc: "/photos/experiences/iglesia.webp",
            imageAlt: "Church",
          },
          {
            imageSrc: "/photos/experiences/pueblo.webp",
            imageAlt: "Town",
          },
        ]}
      />
    </div>
  );
}
