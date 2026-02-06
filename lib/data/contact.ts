// Contact information
export const contactInfo = {
  location: {
    icon: "MapPin",
    text: "Heredia, Costa Rica",
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
  personImage: "/photos/state/call-center.webp",
  personImageAlt: "Sarah Johnson - Director of Call Center",
  personName: "Sarah Johnson",
  personRole: "Director of Call Center",
  bookingTitle: "Book a Personal Call",
  bookingDescription:
    "A dedicated member of our sales team is available to speak with you by phone or video call. We'd love to offer you a firsthand insight into the exceptional lifestyle and residential opportunities at Hacienda Barvak States. ",
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
  {
    icon: "facebook" as const,
    title: "Facebook",
    text: "Hacienda Barvak",
    href: "#",
  },
  {
    icon: "instagram" as const,
    title: "Instagram",
    text: "@haciendabarvak",
    href: "#",
  },
];

export const formInfoTexts = [
  "It will be our pleasure to speak with you and answer any questions you may have about our services, projects, or experiences.",
  "You can also follow us on social media, write to us directly, or call us whenever you need.",
  "We're here to help you discover everything Barvak has to offer.",
];

export const formStageOptions = [
  { value: "stage1", label: "Stage 1 - Planning" },
  { value: "stage2", label: "Stage 2 - Development" },
  { value: "stage3", label: "Stage 3 - Construction" },
  { value: "stage4", label: "Stage 4 - Completion" },
];

// Social media links
export const socialLinks = [
  { href: "#", label: "Instagram", icon: "ion:logo-instagram" },
  { href: "#", label: "Facebook", icon: "ion:logo-facebook" },
  { href: "#", label: "Pinterest", icon: "ion:logo-pinterest" },
  { href: "#", label: "YouTube", icon: "ion:logo-youtube" },
  { href: "#", label: "X", icon: "ion:logo-x" },
];
