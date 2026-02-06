import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import FormSection from "@/components/display/formSection";
import { formContactInfoItems, formInfoTexts, formStageOptions } from "@/lib/data/contact";

export default function ContactPage() {
  return (
    <div>
      <FormSection
        title="Get in touch with us"
        submitButtonText="Send"
        showContactSection={false}
        stageOptions={formStageOptions}
        infoTexts={formInfoTexts}
        contactInfoItems={formContactInfoItems}
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
