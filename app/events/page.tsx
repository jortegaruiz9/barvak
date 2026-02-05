import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import { FeatureSection } from "@/components/display/featureSection";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-12">
      <Hero
        text="Events"
        videoId="k1gj5wCLAhc"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
      />
      <Section
        title="At Hacienda Barvak, events aren’t produced… they’re lived."
        description="Here, nature becomes the perfect backdrop: panoramic views of the city, the embrace of the Barva and Poás volcanoes, fresh mountain air, vibrant sunlight, and biodiversity that transforms every experience. Our warm service, the flexibility to adapt to each client, and the magic of the mountain turn every celebration into an unforgettable memory. If you can imagine it, we can make it happen at Barvak."
        backgroundColor="bg-gray-100"
        textColor="text-gray-800"
      />
      <FeatureSection
        title="BARVAK DAIRY — COMING SOON"
        description="A meeting point for rural life and the flavors of the mountain. Barvak Dairy will be a space where visitors and families can experience the agricultural traditions of the region up close. The project will offer an immersive experience: guided tours, interaction with the production of A2A2 milk currently produced on the estate educational activities for children, and a small restaurant focused on fresh, local, artisanal products. It will be a place where nature, gastronomy, and rural life converge—an homage to our roots and the agricultural heritage of Barva de Heredia."
        images={[{ src: "/photos/events/personas.webp", alt: "People" }]}
      />
      <FullscreenMedia
        title="Discover all our event spaces"
        images={["/photos/events/espacios.webp"]}
        imageAlt="Spaces"
      />
      <Section
        title="Where nature, legacy, and wellbeing meet"
        description="In the heart of the mountains of Barva de Heredia, Hacienda Barvak is a destination that inspires—where tradition is honored and the future is built with purpose. A living project that blends wellbeing, sustainability, and equestrian excellence within a privileged natural setting, where every experience reflects authenticity and balance. Hacienda Barvak is a place where every detail has been thoughtfully designed to live with harmony, purpose, and authenticity. A destination that combines the natural luxury of Costa Rica with the legacy of those who believe in a more conscious way of life. Feel the spirit. Live the difference."
      />
    </div>
  );
}
