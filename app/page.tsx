import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import StoryCards from "@/components/display/storyCards";
import { HorizontalScroll } from "@/components/display/horizontalScroll";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        text="Here, the wind smells of forest, horses run free, and time flows at the rhythm of the landscape. More than an estate it is a living community in constant evolution."
        videoId="7IGPtHZFQrc"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
        endTime={220}
      />
      <Section
        title="Where nature, legacy, and wellbeing meet "
        description="In the heart of the mountains of Barva de Heredia, Hacienda Barvak is a destination that inspires where tradition is honored and the future is built with purpose. A living project that blends wellbeing, sustainability, and equestrian excellence within a privileged natural setting, where every experience reflects authenticity and balance. Hacienda Barvak is a place where every detail has been thoughtfully designed to live with harmony, purpose, and authenticity. A destination that combines the natural luxury of Costa Rica with the legacy of those who believe in a more conscious way of life. Feel the spirit. Live the difference."
      />
      <StoryCards
        cards={[
          {
            image: "/photos/home/storyCard-2.png",
            title:
              "In the heart of Costa Rica, Hacienda Barvak was born surrounded by volcanoes, forests, and traditions that reflect the country's purest essence.",
            alt: "Mountain landscape with fog in Costa Rica",
          },
          {
            image: "/photos/home/storyCard-3.png",
            title: "Barva, a Blend of Nature and Culture",
            description:
              "Forests, birds, and rivers surround Hacienda Barvak, while traditions and legends keep its authentic spirit alive.",
            alt: "Cultural dance event in Barva",
          },
          {
            image: "/photos/home/storyCard-1.png",
            title: "Heredia's Volcanoes: Barva and Poás",
            description:
              "From Hacienda Barvak two natural giants rise over the horizon, shaping the region's landscape and climate. Their presence reminds us of the power and beauty of the land we call home.",
            alt: "Deer in forest with volcanoes in background",
          },
        ]}
      />
      <HorizontalScroll
        title="A place where life flows with purpose."
        cards={[
          {
            id: "barvak-estate",
            url: "#",
            title: "Barvak Estate",
            summary:
              "Live surrounded by authenticity. Within the hacienda, Barvak Estate offers spacious, private parcels for those who seek to build their own refuge in harmony with nature.",
            image: "/photos/home/horizontal-scroll-1.png",
            imageAlt: "Aerial view of Barvak Estate surrounded by forest",
          },
          {
            id: "equestrian-world",
            url: "#",
            title: "Equestrian World - Equestrian passion at its finest",
            summary:
              "Riding is lived here from age 4 and up whether to learn, train, or enjoy open to public show jumping and dressage competitions throughout the year.",
            image: "/photos/home/horizontal-scroll-2.png",
            imageAlt: "Equestrian facilities with horses and riders",
          },
          {
            id: "reforestation",
            url: "#",
            title: "Reforestation - Restoring the land, honoring the future",
            summary:
              "Our reforestation program invites companies, schools, and families to be part of the forest's renewal. Each tree planted helps restore the local ecosystem and strengthen the biological corridor that sustains life in Barva.",
            image: "/photos/home/horizontal-scroll-3.png",
            imageAlt: "Lush green forest with native trees",
          },
          {
            id: "life-at-hacienda",
            url: "#",
            title:
              "Life at the Hacienda - Nature, calm, and authentic experiences",
            summary:
              "Between trails, rivers, and rolling hills, Barvak offers space to walk, run, or simply breathe. The dairy and family farm reflect our rural soul simple, genuine, and deeply connected to the earth.",
            image: "/photos/home/horizontal-scroll-4.png",
            imageAlt: "Rolling hills and trails at the hacienda",
          },
          {
            id: "events",
            url: "#",
            title: "Events",
            summary:
              "At Hacienda Barvak, every event unfolds amid forests, rivers, and mountains. We design intimate, corporate, and family gatherings that connect with nature, good food, and the calm of the valley, a place to celebrate, create, and remember.",
            image: "/photos/home/horizontal-scroll-5.png",
            imageAlt: "Event space surrounded by nature",
          },
        ]}
      />
      <Image src="/ruta.png" alt="Barvak Estate" width={5000} height={5000} />
      <FullscreenMedia
        images={["/photos/home/carousel-home.jpeg"]}
        imageAlt={[
          "Deer in forest with volcanoes in background",
          "Mountain landscape with fog in Costa Rica",
          "Cultural dance event in Barva",
        ]}
      />
    </div>
  );
}
