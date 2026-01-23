import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";

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
    </div>
  );
}
