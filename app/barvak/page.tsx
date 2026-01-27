import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import { VisualStorySection } from "@/components/display/visualStorySection";

export default function BarvakState() {
  return (
    <div className="flex flex-col gap-12">
      <Hero
        text="Amid the mountains and silence, a lifestyle is born  inspired by the land and wellbeing."
        videoId="DeMFadK32NM"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
        startTime={18}
        endTime={200}
      />
      <Section
        title="In the mountains of Barva de Heredia"
        description="Hacienda Barvak Estate is a collection of agricultural parcels that blend elegance, privacy, and an authentic connection with nature. Each property, starting at 7,000 m² (75,000 sq ft), offers unique views and the possibility to build up to 10 % of the land,  surrounded by forest, serenity, and pure air.Hacienda Barvak Estate redefines the art of living in harmony with the land."
      />
      <FullscreenMedia
        title="Live surrounded by what you love."
        description="Each property allows you to design an authentic and functional lifestyle in balance with nature , from a pool beside the forest to a fire pit under the stars, every space comes to life with your personal touch."
        images={["/photos/state/real-1.png"]}
        imageAlt="Barvak Estate"
      />
      <VisualStorySection
        title="A project that grows in harmony with the mountain."
        description="Each stage of Hacienda Barvak Estate has been carefully planned to integrate with the landscape, preserving the natural beauty of Barva de Heredia and offering every owner a secure, exclusive environment connected to the earth."
        topImages={[
          {
            src: "/photos/state/state-1.webp",
            alt: "Lifestyle at Barvak Estate",
          },
          {
            src: "/photos/state/state-2.webp",
            alt: "Nature and wellbeing",
          },
        ]}
        carouselImages={[
          {
            src: "/photos/state/state-3.webp",
            alt: "Yoga and wellness",
          },
          {
            src: "/photos/state/state-4.webp",
            alt: "Natural surroundings",
          },
          {
            src: "/photos/state/state-5.webp",
            alt: "Barvak Estate views",
          },
        ]}
      />
    </div>
  );
}
