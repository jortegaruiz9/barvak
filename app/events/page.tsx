import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import ShowMenu from "@/components/display/showMenu";
import type { ShowMenuItem } from "@/components/display/showMenu";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import { Reviews } from "@/components/display/reviews";
import type { Review } from "@/components/display/reviews";
import SlideShow from "@/components/display/slideShow";
import FormEvents from "@/components/display/formEvents";

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
    label: "Corporate Events",
    title: "Corporate Events:",
    description: "Productive meetings in an environment that inspires results.",
    image: "/content/events/img-corpo.jpg",
    alt: "Corporate Events outdoor setting",
    desktopSpan: 8,
  },
  {
    label: "Social Events",
    title: "Social Events:",
    description: "Celebrate in a natural, exclusive, and memorable setting.",
    image: "/content/events/img-social.jpg",
    alt: "Social Events outdoor setting",
  },
  {
    label: "Wedding",
    title: "Weddings:",
    description:
      "Say “I do” surrounded by mountains, natural light, and pure magic, in a setting that has it all.",
    image: "/content/events/img-carroza-boda.jpg",
    alt: "Wedding at Hacienda Barvak",
  },
  {
    label: "One Day Tour",
    title: "One Day Tour:",
    description:
      "Experience Barvak in a day filled with nature and unforgettable moments.",
    image: "/content/events/img-ordeñar.jpg",
    alt: "One Day Tour outdoor setting",
  },
  {
    label: "Graduations",
    title: "Graduations:",
    description: "An unforgettable finale to celebrate great achievements.",
    image: "/content/events/img-graduacion.jpg",
    alt: "Graduation celebration at Barvak",
  },
  {
    label: "Equestrian Show",
    title: "Equestrian Show:",
    description: "A unique show to amaze your guests.",
    image: "/content/events/img-eventos-caballo.jpg",
    alt: "Equestrian Show outdoor setting",
  },
  {
    label: "Conferences",
    title: "Conferences:",
    description: "Professional events in an exclusive and natural setting.",
    image: "/content/events/img-barvak-conferencia.jpg",
    alt: "Conferences outdoor setting",
    desktopSpan: 8,
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        text="Moments that can only be born in the mountains"
        imageSrc="/content/events/img-portada-people.jpg"
        logoSrc="/logos/logo-barvak.png"
        logoAlt="Barvak Estate"
      />
      <Section
        title="At Hacienda Barvak, events aren't produced… they're lived."
        description="Here, nature becomes the perfect backdrop: panoramic views of the city, the embrace of the Barva and Poás volcanoes, fresh mountain air, vibrant sunlight, and biodiversity that transforms every experience. Our warm service, the flexibility to adapt to each client, and the magic of the mountain turn every celebration into an unforgettable memory. If you can imagine it, we can make it happen at Barvak."
        backgroundColor="bg-gray-50"
        textColor="text-gray-800"
      />
      <FullscreenMedia
        title="Discover all our event spaces"
        images={["/content/events/img-ceremonia.jpg"]}
        imageAlt="Spaces"
      />
      <ShowMenu items={eventsMenuItems} desktopRowPattern={[2, 3, 2]} />
      <SlideShow
        items={eventsMenuItems}
        className="px-4 md:px-12 lg:px-20 md:py-24"
      />
      <Reviews reviews={eventReviews} />
      <FormEvents
        title="Events at Hacienda Barvak"
        description="Plan your event with us"
        heading="Share your details,"
        infoTexts={[
          "and our team will contact you to create a personalized proposal for your event at Hacienda Barvak.",
        ]}
      />
    </div>
  );
}
