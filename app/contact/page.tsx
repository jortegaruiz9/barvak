import { FullscreenMedia } from "@/components/display/fullscreenMedia";
import FormSection from "@/components/display/formSection";
import { formContactInfoItems, formInfoTexts } from "@/lib/data/contact";

export default function ContactPage() {
  return (
    <div>
      <FormSection
        title="Get in touch with us"
        showContactSection={false}
        infoTexts={formInfoTexts}
        contactInfoItems={formContactInfoItems}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5!2d-84.1172759!3d10.0476404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f013e82145f3%3A0x6a1e80b139498c9!2sHacienda%20Barvak!5e0!3m2!1ses!2scr"
      />
      <FullscreenMedia
        title="Tour Virtual"
        images={["/content/contact/img-sol-contacto.jpg"]}
        imageAlt="Contact us"
      />
    </div>
  );
}
