import Hero from "@/components/display/hero";
import { FeatureCarousel } from "@/components/display/featureCarousel";
import { VisualStorySection } from "@/components/display/visualStorySection";
import { SectionHeader } from "@/components/display/sectionHeader";
import { InteractiveHeader } from "@/components/display/interactiveHeader";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import { FeatureSection } from "@/components/display/featureSection";
import { ServicesSection } from "@/components/display/servicesSection";
import { ShowCard } from "@/components/display/showCard";
import CallToAction from "@/components/display/callToAction";

const showCardSlides = [
  {
    image: "/photos/equestrian/showCard.webp",
    alt: "Young rider on horseback at Barvak Camp",
    title: "Barvak Camp",
    subtitle: "Adventure, learning, and a deep connection with nature.",
    paragraphs: [
      "Camp blends equestrian life with outdoor adventure, creating unforgettable experiences for children and young riders.",
      "Over the course of a week, participants live the rhythm of the hacienda: caring for horses, learning riding techniques, exploring trails and rivers, discovering mountain survival skills, and building teamwork through hands-on experience.",
    ],
  },
  {
    image: "/photos/equestrian/equestrian-2.webp",
    alt: "Equestrian facilities at Hacienda Barvak",
    title: "Equestrian School",
    subtitle: "From first steps to competition level.",
    paragraphs: [
      "Our Pony Club offers lessons for children, youth, and adults. Guided by experienced instructors, students develop confidence, respect for animals, and a deep connection with the equestrian world.",
    ],
  },
  {
    image: "/photos/equestrian/equestrian-4.webp",
    alt: "Show jumping at Hacienda Barvak",
    title: "Show Jumping",
    subtitle: "Precision, power, and partnership.",
    paragraphs: [
      "Focused training to strengthen concentration, power, and technique. Our facilities and coaching support riders on the path to competition-level performance.",
    ],
  },
];

const services = [
  {
    description:
      "Dressage Lessons: Refinement of precision, elegance, and connection between horse and rider under the guidanceof specialized trainers.",
    image: "/photos/equestrian/equestrian-1.webp",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    description:
      "Show Jumping Lessons: Focused training to strengthen concentration, power, and technique to reach competition-level performance.",
    image: "/photos/equestrian/equestrian-4.webp",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    description:
      "Stable Rental: Luxury stables with professional maintenance, personalized feeding, and full access to all facilities. ",
    image: "/photos/equestrian/equestrian-2.webp",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    description:
      "Paddock Rental: Spacious, secure areas for horses to rest and enjoy nature.",
    image: "/photos/equestrian/equestrian-5.webp",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    description:
      "Horse-drawn carriage: At the hacienda, we offer carriage transportation services with our mares Dakota and América, ideal for weddings, social, and corporate events, both on and off the hacienda grounds.",
    image: "/photos/equestrian/equestrian-7.webp",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    description:
      "Facility and Event Rental: Our arenas and grandstands are available for equestrian, corporate, or social events,supported by expert logistics in an unmatched natural setting.",
    image: "/photos/equestrian/equestrian-6.webp",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    description:
      "Equestrian Show Haute École: A performance that celebrates elegance, mastery, and the connection between horse and rider inspired by Europe's great classical schools.",
    image: "/photos/equestrian/equestrian-3.webp",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
];

export default function EquestrianWorld() {
  return (
    <div className="flex flex-col gap-y-12">
      <Hero
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
        text="Where equestrian passion and excellence meet, a place where every stride inspires, and every step reflects discipline, elegance, and respect for the horse."
        videoId="3xGvgtsLmq4"
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
          href="/competencies"
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
          textPosition="bottom"
        />
      </div>
      <ServicesSection services={services} />
      <ShowCard slides={showCardSlides} />
      <CallToAction
        title="Feel the Passion of the Equestrian World"
        buttonLabel="Let's Talk"
        buttonHref="/contact"
        bgColor="color-white"
      />
    </div>
  );
}
