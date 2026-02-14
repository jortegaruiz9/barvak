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
import { whatsapp } from "@/lib/data/contact";

const showCardSlides = [
  {
    image: "/content/equestrian/img-campamento.jpg",
    alt: "Young rider on horseback at Barvak Camp",
    title: "Barvak Camp",
    subtitle: "Adventure, learning, and a deep connection with nature.",
    paragraphs: [
      "Camp blends equestrian life with outdoor adventure, creating unforgettable experiences for children and young riders.",
      "Over the course of a week, participants live the rhythm of the hacienda: caring for horses, learning riding techniques, exploring trails and rivers, discovering mountain survival skills, and building teamwork through hands-on experience.",
    ],
  },
];

const services = [
  {
    title: "Dressage Lessons",
    description:
      "Refinement of precision, elegance, and connection between horse and rider under the guidance of specialized trainers.",
    image: "/content/equestrian/img-guia-blanco.jpg",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    title: "Show Jumping Lessons",
    description:
      "Focused training to strengthen concentration, power, and technique to reach competition-level performance.",
    image: "/content/equestrian/img-salto-niño.jpg",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    title: "Stable Rental",
    description:
      "Luxury stables with professional maintenance, personalized feeding, and full access to all facilities.",
    image: "/content/equestrian/img-cabeza-caballo.jpg",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    title: "Paddock Rental",
    description: "Spacious, secure areas for horses to rest and enjoy nature.",
    image: "/content/equestrian/img-caballo-libertad.jpg",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    title: "Horse-drawn carriage",
    description:
      "At the hacienda, we offer carriage transportation services with our mares Dakota and América, ideal for weddings, social, and corporate events, both on and off the hacienda grounds.",
    image: "/content/equestrian/img-señora-carroza.jpg",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    title: "Facility and Event Rental",
    description:
      "Our arenas and grandstands are available for equestrian, corporate, or social events, supported by expert logistics in an unmatched natural setting.",
    image: "/content/equestrian/img-ecuestre-montura.jpg",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
  {
    title: "Equestrian Show Haute École",
    description:
      "A performance that celebrates elegance, mastery, and the connection between horse and rider inspired by Europe's great classical schools.",
    image: "/content/equestrian/img-joven-caballo-blanco.jpg",
    alt: "Horseback riding lessons for children, youth, and adults.",
  },
];

export default function EquestrianWorld() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        logoSrc="/logos/logo-barvak.png"
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
            src: "/content/equestrian/img-instalacion-campo.jpg",
            alt: "Aerial view of jumping arena",
          },
          {
            type: "image",
            src: "/content/equestrian/img-ecuestre-campo-arena.jpg",
            alt: "Silica-sand arena",
          },
          {
            type: "image",
            src: "/content/equestrian/img-ecuestre-establo.jpg",
            alt: "Luxury stables",
          },
        ]}
      />
      <SectionHeader
        title="Where Everyone Can Live the Equestrian Experience"
        description="From the very first steps to professional training, Hacienda Barvak opens its doors to those who wish to learn, grow, and experience the magic of the equestrian world. "
      />
      <div className="flex flex-col pb-12">
        <InteractiveHeader
          title="Discover the Equestrian Competitions at Hacienda Barvak and Meet Our Riders."
          buttonText="See more"
          href="/competencies"
        />
        <VisualStorySection
          topImages={[
            {
              src: "/content/equestrian/img-ecuestre-clases.jpg",
              alt: "Equestrian facilities",
            },
            {
              src: "/content/equestrian/img-ecuestre-niño.jpg",
              alt: "Equestrian facilities",
            },
          ]}
          carouselImages={[
            {
              src: "/content/equestrian/img-caballo-blanco.jpg",
              alt: "Equestrian facilities",
            },
            {
              src: "/content/equestrian/img-primera-posicion.jpg",
              alt: "Equestrian facilities",
            },
            {
              src: "/content/equestrian/img-ecuestre-medallas.jpg",
              alt: "Equestrian facilities",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="Pony Club & Equestrian School"
        subtitle="Learn, grow and dream on horseback."
        description="Our Pony Club offers lessons for children, youth, and adults, from those taking their first ride to riders seeking to refine their skills in show jumping or dressage. Guided by experienced instructors, students develop confidence, respect for animals, and a deep connection with the equestrian world."
        images={[
          {
            src: "/content/equestrian/img-ecuestre-acompañante.jpg",
            alt: "Equestrian facilities",
          },
        ]}
        cardPosition="left"
      />
      <FullscreenMedia
        title="Our Trainers"
        description="Passion, technique, and dedication in every lesson. The Hacienda Barvak coaching team is composed of certified professionals with extensive national and international experience. Their commitment to teaching, horse welfare, and the integral development of each student defines the level of excellence that sets us apart."
        images={["/content/equestrian/img-ecuestre-foto.jpg"]}
        imageAlt="Equestrian facilities"
      />
      <div className="flex flex-col gap-6">
        <SectionHeader title="Our Equestrian Services" />
        <FeatureSection
          title="Pony Club Lessons:"
          description="Comprehensive training for all ages, focused on technique, discipline, and love for horses."
          images={[
            {
              src: "/content/equestrian/img-coach.jpg",
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
        buttonHref={`https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(whatsapp.message)}`}
        buttonTarget="_blank"
        bgColor="color-white"
      />
    </div>
  );
}
