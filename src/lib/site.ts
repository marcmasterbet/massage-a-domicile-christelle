export const SITE_URL = "https://massages-pays-basque.fr";

export const BRAND = "L'ame agit ô corps";
export const PRATICIENNE = "Christelle Georges";

export const PHONE_DISPLAY = "07 77 25 85 93";
export const PHONE_TEL = "tel:+33777258593";

export const INSTAGRAM_URL = "https://www.instagram.com/l.ame.agit.o.corps/";
export const FACEBOOK_URL = "https://www.facebook.com/omdanges";

export const HORAIRES = "Je prends soin de toi 7 jours sur 7, de 9 h à 22 h.";

export const VILLES = ["Bayonne", "Anglet", "Biarritz", "Saint-Pierre-d’Irube", "Tarnos"];

export type Prestation = {
  slug: string;
  nom: string;
};

export const PRESTATIONS: Prestation[] = [
  { slug: "massage-relaxant-intuitif", nom: "Massage relaxant et intuitif" },
  { slug: "massage-prenatal-postnatal", nom: "Massage prénatal et postnatal" },
  { slug: "soin-minceur", nom: "Soin minceur" },
  { slug: "soin-liftant-japonais-visage", nom: "Soin liftant japonais du visage" },
];

export const NAVIGATION = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Services", href: "/services/" },
  { label: "Blog", href: "/blog/" },
];
