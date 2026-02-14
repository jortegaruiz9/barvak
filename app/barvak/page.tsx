import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import { VisualStorySection } from "@/components/display/visualStorySection";
import ContactCard from "@/components/display/contactCard";
import { VideoPlay } from "@/components/display/videoPlay";
import FormSection from "@/components/display/formSection";
import { formContactInfoItems, formInfoTexts } from "@/lib/data/contact";
import MapplicMap from "@/components/display/mapplicMap";

export default function BarvakState() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        text="Amid the mountains and silence, a lifestyle is born  inspired by the land and wellbeing."
        videoId="DeMFadK32NM"
        logoSrc="/logos/logo-barvak.png"
        logoAlt="Barvak Estate"
        startTime={18}
        endTime={200}
      />
      <Section
        title="In the mountains of Barva de Heredia"
        description="Hacienda Barvak Estate is a collection of agricultural parcels that blend elegance, privacy, and an authentic connection with nature. Each property, starting at 7,000 m² (75,000 sq ft), offers unique views and the possibility to build up to 10 % of the land, surrounded by forest, serenity, and pure air. Hacienda Barvak Estate redefines the art of living in harmony with the land."
      />
      <FullscreenMedia
        title="Live surrounded by what you love."
        description="Each property allows you to design an authentic and functional lifestyle in balance with nature, from a pool beside the forest to a fire pit under the stars, every space comes to life with your personal touch."
        images={["/content/estate/img-niños.webp"]}
        imageAlt="Barvak Estate"
      />
      <VisualStorySection
        title="A project that grows in harmony with the mountain."
        description="Each stage of Hacienda Barvak Estate has been carefully planned to integrate with the landscape, preserving the natural beauty of Barva de Heredia and offering every owner a secure, exclusive environment connected to the earth."
        topImages={[
          {
            src: "/content/estate/img-brindis.webp",
            alt: "Lifestyle at Barvak Estate",
          },
          {
            src: "/content/estate/img-establo.webp",
            alt: "Nature and wellbeing",
          },
        ]}
        carouselImages={[
          {
            src: "/content/estate/img-cultivo.webp",
            alt: "Yoga and wellness",
          },
          {
            src: "/content/estate/img-yoga.webp",
            alt: "Natural surroundings",
          },
          {
            src: "/content/estate/img-lectura.jpg",
            alt: "Barvak Estate views",
          },
        ]}
      />
      <MapplicMap />
      <ContactCard
        title="Each lot is a unique opportunity to build your vision of life."
        description="Design & build your own bespok home prime plot available"
        imageSrc="/content/estate/img-sillas.jpg"
        imageAlt="Contact Barvak Estate"
        label="Barvak Estate"
        headline="Build with us, visualize your home today"
        details="From 7000 m²"
        buttonText="Estate Lots States"
        buttonHref="/contact"
      />
      <VideoPlay
        items={[
          {
            image: "/photos/state/houseVideo.webp",
            alt: "Barvak Estate Video 1",
            videoId: "6cXawULEjlE",
          },
          {
            image: "/content/estate/img-casa-campo.jpg",
            alt: "Barvak Estate Video 1",
            videoId: "6cXawULEjlE",
          },
          {
            image: "/content/estate/img-casa-grande.jpg",
            alt: "Barvak Estate Video 1",
            videoId: "6cXawULEjlE",
          },
          {
            image: "/content/estate/img-casa-jardin.jpg",
            alt: "Barvak Estate Video 1",
            videoId: "6cXawULEjlE",
          },
          {
            image: "/content/estate/img-casa-lateral.jpg",
            alt: "Barvak Estate Video 1",
            videoId: "6cXawULEjlE",
          },
          {
            image: "/content/estate/img-interno.jpg",
            alt: "Barvak Estate Video 1",
            videoId: "6cXawULEjlE",
          },
          {
            image: "/content/estate/img-render-fachada.jpg",
            alt: "Barvak Estate Video 1",
            videoId: "6cXawULEjlE",
          },
          {
            image: "/content/estate/img-render.jpg",
            alt: "Barvak Estate Video 1",
            videoId: "6cXawULEjlE",
          },
          {
            image: "/content/estate/img-tree-house.jpg",
            alt: "Barvak Estate Video 1",
            videoId: "6cXawULEjlE",
          },
        ]}
        buttonText="Watch Video"
      />
      <FormSection
        title="Request information about your lot"
        infoTexts={formInfoTexts}
        contactInfoItems={formContactInfoItems}
      />
    </div>
  );
}
