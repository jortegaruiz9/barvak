import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import { FeatureSection } from "@/components/display/featureSection";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        text="Projects"
        videoId="GWaQiFeQ87g"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
        startTime={18}
        endTime={200}
      />
      <Section
        logo={{
          src: "/logos/barvak-white.png",
          alt: "Barvak Estate",
        }}
        title="Hacienda Barvak: a destination in constant evolution"
        description="Hacienda Barvak moves toward a vision where wellbeing, sustainability, and Costa Rican authenticity come together to shape projects that enhance the essence of the estate. Each initiative is designed to integrate respectfully with the landscape, enrich the experience of our visitors, and strengthen our connection to the land. Our upcoming developments, a mountain boutique hotel and a dairy experience open to visitors, reflect this path: a deep sense of place and purpose."
        button={{
          text: "Know more about Barvak",
          href: "/contact",
        }}
      />
      <FullscreenMedia
        title="Montain Boutique Hotel"
        description="Natural luxury in the heart of Barva de Heredia. The Mountain Boutique Hotel at Hacienda Barvak is envisioned as a refuge where nature, comfort, and authenticity coexist in harmony. Designed for travelers seeking disconnection, wellbeing, gastronomy, equestrian experiences, and the unique charm of Costa Rica’s highlands, the hotel will embody elegance rooted in the mountain’s serenity. A place to slow down, reconnect, and experience the mountain with intention and purpose."
        images={["/photos/projects/hotel.webp"]}
        imageAlt="Hotel"
      />
      <FeatureSection
        title="BARVAK DAIRY — COMING SOON "
        description="A meeting point for rural life and the flavors of the mountain. Barvak Dairy will be a space where visitors and families can experience the agricultural traditions of the region up close. The project will offer an immersive experience: guided tours, interaction with the production of A2A2 milk currently produced on the estate educational activities for children, and a small restaurant focused on fresh, local, artisanal products. It will be a place where nature, gastronomy, and rural life converge—an homage to our roots and the agricultural heritage of Barva de Heredia."
        images={[{ src: "/photos/projects/lecheria.webp", alt: "Lecheria" }]}
        button={{
          text: "servicioalcliente@barvak.com",
          href: "/contact",
        }}
        buttonVariant="outline"
      />
    </div>
  );
}
