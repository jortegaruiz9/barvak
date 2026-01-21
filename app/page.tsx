import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import StoryCards from "@/components/display/storyCards";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero
        text="Here, the wind smells of forest, horses run free, and time flows at the rhythm of the landscape. More than an estate it is a living community in constant evolution."
        videoId="5xqgvRIUffI"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
      />
      <Section
        title="Where nature, legacy, and wellbeing meet "
        description="In the heart of the mountains of Barva de Heredia, Hacienda Barvak is a destination that inspires where tradition is honored and the future is built with purpose. A living project that blends wellbeing, sustainability, and equestrian excellence within a privileged natural setting, where every experience reflects authenticity and balance. Hacienda Barvak is a place where every detail has been thoughtfully designed to live with harmony, purpose, and authenticity. A destination that combines the natural luxury of Costa Rica with the legacy of those who believe in a more conscious way of life. Feel the spirit. Live the difference."
      />
      <StoryCards
        cards={[
          {
            image: "/photos/home/storyCard-2.png",
            description: "In the heart of Costa Rica, Hacienda Barvak was born surrounded by volcanoes, forests, and traditions that reflect the country's purest essence.",
            alt: "Mountain landscape with fog in Costa Rica"
          },
          {
            image: "/photos/home/storyCard-3.png",
            title: "Barva, a Blend of Nature and Culture",
            description: "Forests, birds, and rivers surround Hacienda Barvak, while traditions and legends keep its authentic spirit alive.",
            alt: "Cultural dance event in Barva"
          },
          {
            image: "/photos/home/storyCard-1.png",
            title: "Heredia's Volcanoes: Barva and Poás",
            description: "From Hacienda Barvak two natural giants rise over the horizon, shaping the region's landscape and climate. Their presence reminds us of the power and beauty of the land we call home.",
            alt: "Deer in forest with volcanoes in background"
          }
        ]}
      />
    </div>
  );
}
