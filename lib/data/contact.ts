// Contact information
export const contactInfo = {
  location: {
    icon: "MapPin",
    text: "Heredia, Costa Rica",
    href: "https://maps.app.goo.gl/pmxxvBEM8V2uNj4L6",
  },
  phone: {
    icon: "Phone",
    href: "tel:+50672164660",
    text: "+(506) 7216 4660",
  },
  email: {
    icon: "Mail",
    href: "mailto:servicioalcliente@barvak.com",
    text: "servicioalcliente@barvak.com",
  },
};

// Contact section data
export const contactSectionData = {
  personImage: "/content/estate/img-call-center.webp",
  personImageAlt: "Sarah Johnson - Director of Call Center",
  personName: "Sarah Johnson",
  personRole: "Director of Call Center",
  bookingTitle: "Book a Personal Call",
  bookingButtonText: "Book a Call",
  bookingButtonHref: "/contact",
  contactTitle: "Telephone & Email",
  contactDescription:
    "Feel free to contact us at the numbers below",
  countryLabel: "Costa Rica:",
};

// WhatsApp
export const whatsapp = {
  phone: "50672164660",
  message: "Hola, me gustaría obtener más información sobre Hacienda Barvak.",
};

// Form shared data
export const formContactInfoItems = [
  {
    icon: "location" as const,
    title: "Location",
    text: contactInfo.location.text,
    href: contactInfo.location.href,
  },
  {
    icon: "mail" as const,
    title: "Mail",
    text: contactInfo.email.text,
    href: contactInfo.email.href,
  },
  {
    icon: "phone" as const,
    title: "Phone",
    text: contactInfo.phone.text,
    href: contactInfo.phone.href,
  },
  {
    icon: "whatsapp" as const,
    title: "Whatsapp",
    text: contactInfo.phone.text,
    href: `https://wa.me/${whatsapp.phone}`,
  },
];

export const formInfoTexts = [
  "A dedicated member of our sales team is available to speak with you by phone or video call. We'd love to offer you firsthand insight into the exceptional lifestyle and residential opportunities at Hacienda Barvak Estates.",
];

export const formStageOptions = [
  { value: "stage1", label: "Monclara" },
  { value: "stage2", label: "Tres Marías" },
  { value: "stage3", label: "La Amada" },
  { value: "stage4", label: "Okaso" },
];

// Social media links
export const socialLinks = [
  { href: "https://www.instagram.com/hacienda_barvak/", label: "Instagram", icon: "ion:logo-instagram" },
  { href: "https://www.facebook.com/HaciendaBarvak", label: "Facebook", icon: "ion:logo-facebook" },
];
