import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import { FeatureSection } from "@/components/display/featureSection";
import { SectionHeader } from "@/components/display/sectionHeader";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        text="The next chapter of Barvak begins here, inspired by the mountain."
        imageSrc="/content/projects/img-proyecto-principal.jpg"
        logoSrc="/logos/logo-barvak.png"
        logoAlt="Barvak Estate"
        startTime={18}
        endTime={200}
      />
      <SectionHeader title="A destination in constant evolution" />
      <Section
        title="Hacienda Barvak: a destination in constant evolution"
        description="Hacienda Barvak moves toward a vision where wellbeing, sustainability, and Costa Rican authenticity come together to shape projects that enhance the essence of the estate. Each initiative is designed to integrate respectfully with the landscape, enrich the experience of our visitors, and strengthen our connection to the land. Our upcoming developments, a mountain boutique hotel and a dairy experience open to visitors, reflect this path: a deep sense of place and purpose."
      />
      <SectionHeader title="Master Plan" />
      <Image
        src="/mapa-2.webp"
        alt="Barvak Estate"
        width={5000}
        height={5000}
      />
      <FullscreenMedia
        title="Montain Boutique Hotel"
        description="Natural luxury in the heart of Barva de Heredia. The Mountain Boutique Hotel at Hacienda Barvak is envisioned as a refuge where nature, comfort, and authenticity coexist in harmony. Designed for travelers seeking disconnection, wellbeing, gastronomy, equestrian experiences, and the unique charm of Costa Rica’s highlands, the hotel will embody elegance rooted in the mountain’s serenity. A place to slow down, reconnect, and experience the mountain with intention and purpose."
        images={["/content/projects/img-cafe.jpg"]}
        imageAlt="Hotel"
      />
      <FeatureSection
        title="Barvak Dairy coming soon"
        description="A meeting point for rural life and the flavors of the mountain. Barvak Dairy will be a space where visitors and families can experience the agricultural traditions of the region up close. The project will offer an immersive experience: guided tours, interaction with the production of A2 A2 milk currently produced on the estate educational activities for children, and a small restaurant focused on fresh, local, artisanal products. It will be a place where nature, gastronomy, and rural life converge an homage to our roots and the agricultural heritage of Barva de Heredia."
        images={[
          { src: "/content/projects/img-lecheria.jpg", alt: "Lecheria" },
        ]}
        button={{
          text: "Lear more about our projects",
          href: "mailto:servicioalcliente@barvak.com",
        }}
        buttonVariant="outline"
      />
    </div>
  );
}
