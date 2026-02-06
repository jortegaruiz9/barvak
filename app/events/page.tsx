import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import ShowMenu from "@/components/display/showMenu";
import type { ShowMenuItem } from "@/components/display/showMenu";
import { FeatureSection } from "@/components/display/featureSection";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import { Reviews } from "@/components/display/reviews";
import type { Review } from "@/components/display/reviews";
import FormEvents from "@/components/display/formEvents";
import { contactInfo } from "@/lib/data/contact";

const eventReviews: Review[] = [
  {
    quote:
      "We held our wedding at Hacienda Barvak and it was absolutely magical. The mountain views, the fresh air, and the warmth of the team made it a day we'll never forget.",
    author: "Andrea & Carlos",
  },
  {
    quote:
      "Our corporate retreat exceeded every expectation. The setting inspired our team in ways a conference room never could. We left feeling reconnected and energized.",
    author: "María Fernanda López",
  },
  {
    quote:
      "The equestrian show was world class. My kids were mesmerized, and the entire family had an incredible experience surrounded by nature.",
    author: "Roberto Méndez",
  },
  {
    quote:
      "We celebrated our daughter's baptism here and it felt like a dream. Intimate, peaceful, and beautifully organized down to the last detail.",
    author: "Familia Rojas Solano",
  },
  {
    quote:
      "The one day tour gave us a completely new perspective on Costa Rica. The biodiversity, the guided walks, and the gastronomy were outstanding.",
    author: "James & Sarah Mitchell",
  },
  {
    quote:
      "Barvak Camp was a transformative experience for our group. Sleeping under the stars between two volcanoes is something you simply can't replicate anywhere else.",
    author: "Daniel Vargas",
  },
  {
    quote:
      "From the first call to the last goodbye, the Barvak team made us feel at home. The venue, the service, the food  everything was impeccable.",
    author: "Catalina Mora",
  },
];

const eventsMenuItems: ShowMenuItem[] = [
  {
    label: "Barvak Camp",
    title: "Barvak Camp:",
    description:
      "Experience nature and adventure in the mountains. A unique setting for camps and outdoor activities surrounded by the Barva and Poás volcanoes.",
    image: "/photos/equestrian/campo.webp",
    alt: "Barvak Camp outdoor setting",
    desktopSpan: 8,
  },
  {
    label: "Corporate events",
    title: "Corporate events:",
    description:
      "Professional meetings and team experiences in an inspiring environment. Combine business with the tranquility and natural beauty of Hacienda Barvak.",
    image: "/photos/events/espacios.webp",
    alt: "Event spaces at Hacienda Barvak",
  },
  {
    label: "Wedding",
    title: "Weddings:",
    description:
      'Say "I do" surrounded by mountains, natural light, and pure magic, in a setting that truly has it all.',
    image: "/photos/events/personas.webp",
    alt: "Wedding at Hacienda Barvak",
  },
  {
    label: "Equestrian show",
    title: "Equestrian show:",
    description:
      "World-class equestrian events in the heart of the mountains. Experience the elegance and tradition of our equestrian program.",
    image: "/photos/equestrian/competencia.webp",
    alt: "Equestrian show at Barvak",
  },
  {
    label: "One day tour",
    title: "One day tour:",
    description:
      "Discover the estate in a single day: guided walks, wildlife observation, and the best of mountain life in one unforgettable experience.",
    image: "/photos/experiences/caminata.webp",
    alt: "One day tour experience",
  },
  {
    label: "Baptisms",
    title: "Baptisms:",
    description:
      "Celebrate life's milestones in a peaceful, family-friendly setting. Intimate ceremonies surrounded by nature and warm hospitality.",
    image: "/photos/experiences/iglesia.webp",
    alt: "Baptism celebration at Barvak",
  },
  {
    label: "Special Packages",
    title: "Special Packages:",
    description:
      "Tailored experiences that combine accommodation, activities, and gastronomy. Create your perfect getaway with our curated packages.",
    image: "/photos/experiences/volcan.webp",
    alt: "Special package experience",
    desktopSpan: 8,
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        text="Events"
        videoId="k1gj5wCLAhc"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
      />
      <Section
        title="At Hacienda Barvak, events aren’t produced… they’re lived."
        description="Here, nature becomes the perfect backdrop: panoramic views of the city, the embrace of the Barva and Poás volcanoes, fresh mountain air, vibrant sunlight, and biodiversity that transforms every experience. Our warm service, the flexibility to adapt to each client, and the magic of the mountain turn every celebration into an unforgettable memory. If you can imagine it, we can make it happen at Barvak."
        backgroundColor="bg-gray-50"
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
      <ShowMenu items={eventsMenuItems} desktopRowPattern={[2, 3, 2]} />
      <Section
        title="Where nature, legacy, and wellbeing meet"
        description="In the heart of the mountains of Barva de Heredia, Hacienda Barvak is a destination that inspires—where tradition is honored and the future is built with purpose. A living project that blends wellbeing, sustainability, and equestrian excellence within a privileged natural setting, where every experience reflects authenticity and balance. Hacienda Barvak is a place where every detail has been thoughtfully designed to live with harmony, purpose, and authenticity. A destination that combines the natural luxury of Costa Rica with the legacy of those who believe in a more conscious way of life. Feel the spirit. Live the difference."
      />
      <Reviews reviews={eventReviews} />
      <FormEvents
        title="Events at Hacienda Barvak"
        description="Plan your event with us"
        eventTypeOptions={[
          { value: "wedding", label: "Wedding" },
          { value: "corporate", label: "Corporate Event" },
          { value: "equestrian", label: "Equestrian Show" },
          { value: "baptism", label: "Baptism" },
          { value: "camp", label: "Barvak Camp" },
          { value: "tour", label: "One Day Tour" },
          { value: "other", label: "Other" },
        ]}
        heading="Share your details,"
        infoTexts={[
          "Share your details,",
          "and our team will contact you to create a personalized proposal for your event at Hacienda Barvak.",
        ]}
        contactLabel="Contact Us:"
        contactDetails={[
          `Phone: ${contactInfo.phone.text}`,
          `Email: ${contactInfo.email.text}`,
          "Events at Hacienda Barvak.",
          "Plan your event with us.",
        ]}
      />
    </div>
  );
}
