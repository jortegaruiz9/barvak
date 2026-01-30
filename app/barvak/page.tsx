import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import { VisualStorySection } from "@/components/display/visualStorySection";
import ContactCard from "@/components/display/contactCard";
import { VideoPlay } from "@/components/display/videoPlay";
import FormSection from "@/components/display/formSection";

export default function BarvakState() {
  return (
    <div className="flex flex-col gap-12">
      <Hero
        text="Amid the mountains and silence, a lifestyle is born  inspired by the land and wellbeing."
        videoId="DeMFadK32NM"
        logoSrc="/logos/barvak-white.png"
        logoAlt="Barvak Estate"
        startTime={18}
        endTime={200}
      />
      <Section
        title="In the mountains of Barva de Heredia"
        description="Hacienda Barvak Estate is a collection of agricultural parcels that blend elegance, privacy, and an authentic connection with nature. Each property, starting at 7,000 m² (75,000 sq ft), offers unique views and the possibility to build up to 10 % of the land, surrounded by forest, serenity, and pure air.Hacienda Barvak Estate redefines the art of living in harmony with the land."
      />
      <FullscreenMedia
        title="Live surrounded by what you love."
        description="Each property allows you to design an authentic and functional lifestyle in balance with nature , from a pool beside the forest to a fire pit under the stars, every space comes to life with your personal touch."
        images={["/photos/state/real-1.png"]}
        imageAlt="Barvak Estate"
      />
      <VisualStorySection
        title="A project that grows in harmony with the mountain."
        description="Each stage of Hacienda Barvak Estate has been carefully planned to integrate with the landscape, preserving the natural beauty of Barva de Heredia and offering every owner a secure, exclusive environment connected to the earth."
        topImages={[
          {
            src: "/photos/state/state-1.webp",
            alt: "Lifestyle at Barvak Estate",
          },
          {
            src: "/photos/state/state-2.webp",
            alt: "Nature and wellbeing",
          },
        ]}
        carouselImages={[
          {
            src: "/photos/state/state-3.webp",
            alt: "Yoga and wellness",
          },
          {
            src: "/photos/state/state-4.webp",
            alt: "Natural surroundings",
          },
          {
            src: "/photos/state/state-5.webp",
            alt: "Barvak Estate views",
          },
        ]}
      />

      <ContactCard
        title="Each lot is a unique opportunity to build your vision of life."
        description="Discover the available parcels within Hacienda Barvak Estate, surrounded by nature, privacy, and incomparable views."
        imageSrc="/photos/state/contactCard.webp"
        imageAlt="Contact Barvak Estate"
        label="Barvak Estate"
        headline="Build with us, visualize your home today"
        details="8 Rooms | 31,973 m² Plot | 1,950 m² GFA"
        buttonText="Know more"
        buttonHref="/contact"
      />
      <VideoPlay
        items={[
          {
            image: "/photos/state/houseVideo.webp",
            alt: "Barvak Estate Video 1",
            videoId: "6cXawULEjlE",
          },
        ]}
        buttonText="Watch Video"
      />
      <FormSection
        title="Request information about your lot"
        stageOptions={[
          { value: "stage1", label: "Stage 1 - Planning" },
          { value: "stage2", label: "Stage 2 - Development" },
          { value: "stage3", label: "Stage 3 - Construction" },
          { value: "stage4", label: "Stage 4 - Completion" },
        ]}
        infoTexts={[
          "It will be our pleasure to speak with you and answer any questions you may have about our services, projects, or experiences.",
          "You can also follow us on social media, write to us directly, or call whenever you need.",
          "We're here to help you discover everything Barvak has to offer.",
        ]}
        contactInfoItems={[
          {
            icon: "mail",
            title: "Mail",
            text: "info@barvak.com",
            href: "mailto:info@barvak.com",
          },
          {
            icon: "location",
            title: "Ubicacion",
            text: "Ecuador",
          },
          {
            icon: "whatsapp",
            title: "Whatsapp",
            text: "+593 99 999 9999",
            href: "https://wa.me/5939999999999",
          },
          {
            icon: "phone",
            title: "Phone",
            text: "+593 99 999 9999",
            href: "tel:+5939999999999",
          },
        ]}
      />
    </div>
  );
}
