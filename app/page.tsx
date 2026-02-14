import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import StoryCards from "@/components/display/storyCards";
import { HorizontalScroll } from "@/components/display/horizontalScroll";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import Image from "next/image";
import { SectionHeader } from "@/components/display/sectionHeader";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        text="Here, the wind smells of forest, horses run free, and time flows at the rhythm of the landscape. More than an estate it is a living community in constant evolution."
        videoId="7IGPtHZFQrc"
        logoSrc="/logos/logo-barvak.png"
        logoAlt="Barvak Estate"
        endTime={220}
      />
      <Section
        title="Where nature, legacy, and wellbeing meet "
        description="In the heart of the mountains of Barva de Heredia, Hacienda Barvak is a destination that inspires where tradition is honored and the future is built with purpose. A living project that blends wellbeing, sustainability, and equestrian excellence within a privileged natural setting, where every experience reflects authenticity and balance. Hacienda Barvak is a place where every detail has been thoughtfully designed to live with harmony, purpose, and authenticity. A destination that combines the natural luxury of Costa Rica with the legacy of those who believe in a more conscious way of life."
      />
      <SectionHeader title="Fell the spirit. Live the difference." />
      <StoryCards
        cards={[
          {
            image: "/content/home/img-foto-grande.jpg",
            title:
              "In the heart of Costa Rica, Hacienda Barvak was born surrounded by volcanoes, forests, and traditions that reflect the country's purest essence.",
            alt: "Mountain landscape with fog in Costa Rica",
          },
          {
            image: "/content/home/img-cultura.jpg",
            title: "Barva: A blend of nature and culture",
            description:
              "Forests, birds, and rivers surround Hacienda Barvak, while traditions and legends keep its authentic spirit alive.",
            alt: "Cultural dance event in Barva",
          },
          {
            image: "/content/home/img-volcan.jpg",
            title: "Volcanoes: Barva and poás",
            subtitle: "Guardians of the mountains",
            description:
              "From Hacienda Barvak two natural giants rise over the horizon, shaping the region's landscape and climate. Their presence reminds us of the power and beauty of the land we call home.",
            alt: "Deer in forest with volcanoes in background",
          },
        ]}
      />
      <SectionHeader title="Discover Barvak" />
      <HorizontalScroll
        title="A place where life flows with purpose."
        cards={[
          {
            id: "barvak-estate",
            url: "#",
            title: "Barvak Estate",
            subtitle: "Live surrounded by authenticity",
            summary:
              "Hacienda Barvak is home to one of the most complete equestrian facilities in Central America featuring a silica sand arena, warm up ring, and grass competition field surrounded by paddocks and premium stables.",
            image: "/content/home/img-auto.webp",
            imageAlt: "Aerial view of Barvak Estate surrounded by forest",
          },
          {
            id: "equestrian-world",
            url: "#",
            title: "Equestrian World",
            subtitle: "Equestrian passion at its finest",
            summary:
              "Riding is lived here from age 4 and up whether to learn, train, or enjoy open to public show jumping and dressage competitions throughout the year.",
            image: "/content/home/img-ecuestre.jpg",
            imageAlt: "Equestrian facilities with horses and riders",
          },
          {
            id: "reforestation",
            url: "#",
            title: "Reforestation",
            subtitle: "Restoring the land, honoring the future",
            summary:
              "Our reforestation program invites companies, schools, and families to be part of the forest's renewal. Each tree planted helps restore the local ecosystem and strengthen the biological corridor that sustains life in Barva.",
            image: "/content/home/img-sembrar.webp",
            imageAlt: "Lush green forest with native trees",
          },
          {
            id: "life-at-hacienda",
            url: "#",
            title: "Life at the Hacienda",
            subtitle: "Nature, calm, and authentic experiences",
            summary:
              "Between trails, rivers, and rolling hills, Barvak offers space to walk, run, or simply breathe. The dairy and family farm reflect our rural soul simple, genuine, and deeply connected to the earth.",
            image: "/content/home/img-puente.jpg",
            imageAlt: "Rolling hills and trails at the hacienda",
          },
          {
            id: "events",
            url: "#",
            title: "Events",
            summary:
              "At Hacienda Barvak, every event unfolds amid forests, rivers, and mountains. We design intimate, corporate, and family gatherings that connect with nature, good food, and the calm of the valley, a place to celebrate, create, and remember.",
            image: "/content/home/img-mesa.png",
            imageAlt: "Event space surrounded by nature",
          },
        ]}
      />
      {/* mapplic */}
      <Image src="/ruta.png" alt="Barvak Estate" width={5000} height={5000} />
      <FullscreenMedia
        images={[
          "/content/home/img-carretera.jpg",
          "/content/home/img-paisaje.jpg",
          "/content/home/img-carroza.webp",
          "/content/home/img-atardecer.jpg",
        ]}
        imageAlt={[
          "Deer in forest with volcanoes in background",
          "Mountain landscape with fog in Costa Rica",
          "Cultural dance event in Barva",
        ]}
      />
    </div>
  );
}
