import Hero from "@/components/display/hero";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import { SectionHeader } from "@/components/display/sectionHeader";
import { ExperienceGrid } from "@/components/display/experienceGrid";
import { FeatureCarousel } from "@/components/display/featureCarousel";

export default function ExperiencesPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        text="Experiences"
        videoId="VlTSdevWZeQ"
        logoSrc="/logos/logo-barvak.png"
        logoAlt="Barvak Estate"
        startTime={18}
        endTime={200}
      />
      <FullscreenMedia
        title="Hacienda Barvak awakens the senses, calms the soul, and turns each day into a memorable experience."
        images={["/content/experiences/img-experiencia-senderos.jpg"]}
        imageAlt="Discover Barvak Estate"
      />
      <SectionHeader title="Among breathing mountains, unfolding paths, and the sounds only nature can create, Barvak is a destination where every moment reveals something new." />
      <ExperienceGrid
        items={[
          {
            imageSrc: "/content/experiences/img-rios.jpg",
            imageAlt: "Rivers",
            title: "Rivers",
            description:
              "Across the estate, rivers, streams, and natural springs flow through the mountains like threads of life. Crystal clear waters descend over ancient stones and cloud forest, creating a natural symphony that soothes, inspires, and connects. Here, the water doesn't just pass through the land, it tells the stories of the land.",
          },
          {
            imageSrc: "/content/experiences/img-observacion.jpg",
            imageAlt: "Birdwatching",
            title: "Birdwatching",
            description:
              "Located within the Barva de Heredia biological corridor, Barvak is a sanctuary for both resident and migratory birds. Our ongoing reforestation efforts have increased the abundance of species, creating a paradise for birdwatchers and lovers of biodiversity. Colors, songs, and graceful flights turn every walk into an unexpected discovery.",
          },
          {
            imageSrc: "/content/experiences/img-lecheria.jpg",
            imageAlt: "Cattle",
            title: "Barvak Dairy",
            description:
              "Our dairy operates under the highest standards of animal welfare, responsible management, and excellence in quality. Here, we produce exclusively A2 A2 milk, renowned for its purity and nutritional value. An operation that honors the agricultural heritage of the region and reflects our commitment to sustainable practices.",
          },
          {
            imageSrc: "/content/experiences/img-captura-imagenes.jpg",
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
            title: "Flora & Fauna",
            subtitle: "Barvak is a living ecosystem.",
            description:
              "Among meadows, forests, and natural springs live deer, squirrels, cattle, sheep, hummingbirds, butterflies, and a rich diversity of species that find a safe home within the estate. Native vegetation oaks, cypresses, mosses, ferns, bromeliads wraps around every trail and reveals the richness of this mountain landscape. Here, wildlife isn’t just observed it is shared.",
          },
          {
            type: "image",
            src: "/content/experiences/img-colibri.jpg",
            alt: "Hummingbirds",
          },
          {
            type: "image",
            src: "/content/experiences/img-perezoso.jpg",
            alt: "Animals",
          },
          {
            type: "image",
            src: "/content/experiences/img-flores.jpg",
            alt: "Flowers",
          },
        ]}
      />
      <FullscreenMedia
        title="Volcanoes, culture, and tradition: the living essence that embraces Barvak."
        images={["/content/experiences/img-mano.jpg"]}
        imageAlt="Connections"
      />
      <FullscreenMedia
        images={[
          "/content/experiences/img-laguna.jpg",
          "/content/reforestation/img-volcan-principal.jpg",
        ]}
        imageAlt="Connections"
      />
      <ExperienceGrid
        items={[
          {
            imageSrc: "/content/experiences/img-iglesia.jpg",
            imageAlt: "Church",
          },
          {
            imageSrc: "/content/experiences/img-pueblo.jpg",
            imageAlt: "Town",
          },
        ]}
      />
    </div>
  );
}
