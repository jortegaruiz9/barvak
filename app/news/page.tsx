import Hero from "@/components/display/hero";
import Section from "@/components/display/section";
import { ExperienceGrid } from "@/components/display/experienceGrid";
import CallToAction from "@/components/display/callToAction";

export default function NewsPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <Hero
        text="What the world is saying about Hacienda Barvak"
        imageSrc="/content/news/img-news.jpg"
        logoSrc="/logos/logo-barvak.png"
        logoAlt="Barvak Estate"
        startTime={18}
        endTime={200}
      />
      <Section description="We bring together the stories, articles, and publications that highlight the essence and growth of Hacienda Barvak. Here you will find press coverage, editorial reports, and relevant mentions in national and international media that showcase our vision, our projects, and the positive impact we create in the community and the natural environment." />
      <ExperienceGrid
        items={[
          {
            imageSrc: "/content/news/img-letrero-barvak.jpg",
            imageAlt:
              "Regenerative vision: Hacienda Barvak’s commitment to the environment and society.",
            date: "16/10/2025",
            title:
              "Regenerative vision: Hacienda Barvak’s commitment to the environment and society.",
            href: "https://newsinamerica.com/pdcc/turismo/2025/vision-regenerativa-el-compromiso-de-hacienda-barvak-con-el-ambiente-y-la-sociedad/",
          },
          {
            imageSrc: "/content/news/img-leche.jpg",
            imageAlt:
              "Hacienda Barvak promotes animal welfare and harmonious coexistence with nature.",
            date: "04/08/2025",
            title:
              "Hacienda Barvak promotes animal welfare and harmonious coexistence with nature.",
            href: "https://velero.cr/2025/08/hacienda-barvak-promueve-el-bienestar-animal-y-la-convivencia-armonica-con-la-naturaleza/",
          },
          {
            imageSrc: "/content/news/img-juntada.jpg",
            imageAlt:
              "Hacienda Barvak is recognized for its good agricultural practices.",
            date: "27/05/2025",
            title:
              "Hacienda Barvak is recognized for its good agricultural practices.",
            href: "https://www.larepublica.net/noticia/hacienda-barvak-es-reconocida-por-sus-buenas-practicas-agropecuarias",
          },
          {
            imageSrc: "/content/news/img-sembrando.jpg",
            imageAlt: "Hacienda Barvak has planted more than 25,000 trees.",
            date: "21/03/2025",
            title: "Hacienda Barvak has planted more than 25,000 trees.",
            href: "https://herediahoy.com/destacadas/hacienda-barvak-ha-sembrado-mas-de-25-mil-arboles/",
          },
        ]}
      />
      <CallToAction
        title="GRI - Sustainability Report"
        description="As part of our commitment to sustainability and transparency, we present the 2024 Sustainability Report. This document summarizes our environmental, social, and governance (ESG) performance, aligned with GRI and ISSB standards, reaffirming our vision of growing in harmony with nature, people, and the future."
        buttonLabel="Download GRI 2024 Reporte (PDF)"
        buttonHref="/docs/gri.pdf"
      />
    </div>
  );
}
