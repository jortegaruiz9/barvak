import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import FormSection from "@/components/display/formSection";

export default function ContactPage() {
  return (
    <div>
      <FormSection
        title="Get in touch with us"
        submitButtonText="Send"
        showContactSection={false}
        stageOptions={[
          { value: "stage1", label: "Stage 1 - Planning" },
          { value: "stage2", label: "Stage 2 - Development" },
          { value: "stage3", label: "Stage 3 - Construction" },
          { value: "stage4", label: "Stage 4 - Completion" },
        ]}
        infoTexts={[
          "It will be our pleasure to speak with you and answer any questions you may have about our services, projects, or experiences.",
          "You can also follow us on social media, write to us directly, or call us whenever you need.",
          "We're here to help you discover everything Barvak has to offer.",
        ]}
        contactInfoItems={[
          {
            icon: "location",
            title: "Location",
            text: "Heredia, Costa Rica",
          },
          {
            icon: "mail",
            title: "Mail",
            text: "servicioalcliente@barvak.com",
            href: "mailto:servicioalcliente@barvak.com",
          },
          {
            icon: "phone",
            title: "Phone",
            text: "+(506) 7216 4660",
            href: "tel:+50672164660",
          },
          {
            icon: "whatsapp",
            title: "Whatsapp",
            text: "+(506) 7216 4660",
            href: "https://wa.me/50672164660",
          },
          {
            icon: "facebook",
            title: "Facebook",
            text: "Hacienda Barvak",
            href: "#",
          },
          {
            icon: "instagram",
            title: "Instagram",
            text: "@haciendabarvak",
            href: "#",
          },
        ]}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.!2d-84.1!3d10.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAzJzAwLjAiTiA4NMKwMDYnMDAuMCJX!5e0!3m2!1ses!2scr!4v1700000000000!5m2!1ses!2scr"
      />
      <FullscreenMedia
        title="Explore Hacienda Barvak from the comfort of wherever you are."
        images={["/photos/contact/paisaje.webp"]}
        imageAlt="Contact us"
      />
    </div>
  );
}
