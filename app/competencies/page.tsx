import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import { SectionHeader } from "@/components/display/sectionHeader";
import StoryCards from "@/components/display/storyCards";
import { BrandBanner } from "@/components/display/brandBanner";

const brandBannerItems = [
  {
    logo: "/logos/barvak-black.png",
    alt: "Brand 1",
  },
  {
    logo: "/logos/barvak-black.png",
    alt: "Brand 2",
  },
  {
    logo: "/logos/barvak-black.png",
    alt: "Brand 3",
  },
];

export default function CompetenciesPage() {
  return (
    <div className="flex flex-col gap-12">
      <Hero
        text="Where every stride reflects precision, and every jump defines excellence."
        videoId="Rkz6X5VrRBU"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
      />
      <Section
        logo={{
          src: "/photos/competencies/copa.svg",
          alt: "Barvak Cup icon",
        }}
        title="Equestrian excellence in every stride, in every jump."
        description="The Barvak Cup is Hacienda Barvak’s official equestrian championship, created to motivate and recognize the dedication of our riders in the disciplines of show jumping and dressage. Endorsed by the Costa Rican Equestrian Federation (FECR) and organized in partnership with ASODHEA, it brings together national and international pairs in a natural, world-class setting. More than a competition, the Barvak Cup is a celebration of discipline, excellence, and passion for horses, consolidating Hacienda Barvak as one of the most outstanding equestrian centers in the region."
        backgroundColor="bg-[#213253]"
      />
      <SectionHeader title="Discover Barvak" />
      <SectionHeader title=" Where equestrian excellence meets the spirit of the land " />
      <StoryCards
        cards={[
          {
            image: "/photos/competencies/ganadores.webp",
            alt: "Barvak Cup medal winners posing at the awards ceremony",
          },
          {
            image: "/photos/competencies/copa.webp",
            alt: "Golden Barvak Cup trophy, 2nd edition",
          },
          {
            image: "/photos/competencies/caballo.webp",
            alt: "Rider on horseback giving thumbs up at the equestrian arena",
          },
        ]}
      />
      <Section
        logo={{
          src: "/photos/competencies/Asodhea.svg",
          alt: "ASODHEA logo",
        }}
        title="What is ASODHEA?"
        description="The Asociación Deportiva Hípica Espinos de América (ASODHEA) promotes and regulates equestrian sport at Hacienda Barvak. Recognized by the Costa Rican Equestrian Federation, it organizes official dressage and show-jumping competitions, supports rider development, and ensures compliance with the Safe Sport Promotion Regulation. Its mission is to foster an environment guided by ethics, equine welfare, and sporting excellence."
        backgroundColor="bg-gray-100"
        textColor="text-gray-800"
      />
      <BrandBanner items={brandBannerItems} />
    </div>
  );
}
