import Hero from "@/components/display/hero";
import { FeatureCarousel } from "@/components/display/featureCarousel";
import { VisualStorySection } from "@/components/display/visualStorySection";
import { SectionHeader } from "@/components/display/sectionHeader";
import { InteractiveHeader } from "@/components/display/interactiveHeader";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import { FeatureSection } from "@/components/display/featureSection";

export default function EquestrianWorld() {
  return (
    <div className="flex flex-col gap-12">
      <Hero
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
        text="Where equestrian passion and excellence meet, a place where every stride inspires, and every step reflects discipline, elegance, and respect for the horse."
        videoId="DeMFadK32NM"
      />
      <FeatureCarousel
        title="Excellence in Every Detail"
        description="We are proud to offer a finest equestrian facilities in Central America."
        items={[
          {
            type: "text",
            title: "A natural grass jumping arena",
            description:
              "A natural grass jumping arena, a silica sand arena, and a dedicated warm up ring; spacious luxury stables, paddocks for the horses' recreation, covered grandstands, and areas designed for the comfort of riders, trainers, and visitors. Every corner reflects our commitment to sport, safety, and animal wellbeing. All within a setting surrounded by nature and built to the highest international standards of the equestrian world.",
          },
          {
            type: "image",
            src: "/photos/equestrian/pista.webp",
            alt: "Aerial view of jumping arena",
          },
          {
            type: "image",
            src: "/photos/equestrian/campo.webp",
            alt: "Silica-sand arena",
          },
          {
            type: "image",
            src: "/photos/equestrian/instalaciones.webp",
            alt: "Luxury stables",
          },
        ]}
      />
      <div>
        <SectionHeader
          title="Where Everyone Can Live the Equestrian Experience"
          description="From the very first steps to professional training, Hacienda Barvak opens its doors to those who wish to learn, grow, and experience the magic of the equestrian world. "
        />
        <InteractiveHeader
          title="Discover the Equestrian Competitions at Hacienda Barvak and Meet Our Riders."
          description="Learn about Competitions, the Barvak Cup and Asodhea."
          buttonText="See more"
          href="/competitions"
        />
        <VisualStorySection
          topImages={[
            {
              src: "/photos/equestrian/caballo-1.webp",
              alt: "Equestrian facilities",
            },
            {
              src: "/photos/equestrian/caballo-2.webp",
              alt: "Equestrian facilities",
            },
          ]}
          carouselImages={[
            {
              src: "/photos/equestrian/competencia.webp",
              alt: "Equestrian facilities",
            },
            {
              src: "/photos/equestrian/horse.webp",
              alt: "Equestrian facilities",
            },
            {
              src: "/photos/equestrian/medallas.webp",
              alt: "Equestrian facilities",
            },
          ]}
        />
      </div>
      <FeatureSection
        title="Pony Club & Equestrian School"
        description="Learn, grow and dream on horseback. Our Pony Club offers lessons for children, youth, and adults, from those taking their first ride to riders seeking to refine their skills in show jumping or dressage. Guided by experienced instructors, students develop confidence, respect for animals, and a deep connection with the equestrian world."
        images={[
          {
            src: "/photos/equestrian/coach-1.webp",
            alt: "Equestrian facilities",
          },
        ]}
        cardPosition="left"
      />
      <FullscreenMedia
        title="Our Trainers"
        description="Passion, technique, and dedication in every lesson. The Hacienda Barvak coaching team is composed of certified professionals with extensive national and international experience. Their commitment to teaching, horse welfare, and the integral development of each student defines the level of excellence that sets us apart."
        images={["/photos/equestrian/triunfo.webp"]}
        imageAlt="Equestrian facilities"
      />
      <div className="flex flex-col gap-6">
        <SectionHeader title="Our Equestrian Services" />
        <FeatureSection
          title="Pony Club Lessons:"
          description="Comprehensive training for all ages, focused on technique, discipline, and love for horses."
          images={[
            {
              src: "/photos/equestrian/coach-2.webp",
              alt: "Equestrian facilities",
            },
          ]}
          cardPosition="right"
        />
      </div>
    </div>
  );
}
