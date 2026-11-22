// Textes de Jeff — page À propos — à reproduire mot pour mot. Ne rien ajouter.
import type { Paragraphe } from "@/components/Section";

export const titrePage = "Christelle, praticienne du massage à domicile au Pays basque";

export type PartiePage = {
  titre?: string;
  titreAccent?: string;
  paragraphes: Paragraphe[];
  cta: { label: string; href?: string };
  photo: { alt: string; src?: string; rond?: boolean; legende?: string[] };
  fond: "ivoire" | "sauge" | "sable";
};

export const parties: PartiePage[] = [
  {
    paragraphes: [
      "Je m'appelle Christelle. Mon métier, c'est de prendre soin de toi. Et pour ça, mes oreilles sont aussi importantes que mes mains.",
      "J’ai commencé à exercer en 2020, animée par une passion : l'art du toucher et l'envie d'accompagner les personnes vers le mieux-être.",
      "J'ai également géré un espace bien-être et développé mes compétences autour du massage pré et postnatal, du soin liftant japonais du visage et de l'amincissement.",
      "Mais ce qui me tient particulièrement à cœur, c'est de prendre le temps de t'écouter.",
      { texte: "Chaque personne est unique. Pourquoi son massage ne le serait-il pas ?", style: "fort" },
      "Le massage dont tu as besoin aujourd'hui n'est pas forcément celui dont tu auras besoin demain.",
      "C'est toute la particularité de mon approche intuitive.",
      "Je m'adapte à toi, à ton ressenti et aux besoins de ton corps au moment où nous nous rencontrons.",
      "Que tu sois un homme ou une femme, tu peux venir comme tu es, sans avoir à te justifier.",
      "Avec moi, il y a de l'écoute, de la bienveillance, du partage, un peu d'humour et surtout aucun jugement.",
    ],
    cta: { label: "Je découvre tes massages", href: "/services/" },
    photo: {
      alt: "Portrait de Christelle",
      src: "/images/christelle-a-propos.jpg",
      rond: true,
    },
    fond: "ivoire",
  },
  {
    titre: "Si tu me croises à vélo,",
    titreAccent: "je te présente Fernand !",
    paragraphes: [
      "Oui, mon vélo a un prénom. Et ma salopette aussi : Paulette !",
      "Tu m'as peut-être déjà aperçue dans les rues de Bayonne, Anglet ou Biarritz.",
      "Mon petit garçon en parle d'ailleurs à sa manière lorsqu'il distribue mes cartes de visite :",
      { texte: "« Ma maman, c'est la seule masseuse qui vient chez toi en vélo ! »", style: "citation" },
      "Je réalise mes massages à domicile à Bayonne, Anglet, Biarritz, Saint-Pierre-d’Irube et Tarnos.",
      "J'apporte ma table de massage, mon linge, mes produits et ma bonne humeur.",
    ],
    cta: { label: "Je t'invite chez moi" },
    photo: { alt: "Christelle et Fernand" },
    fond: "ivoire",
  },
  {
    titre: "Le cœur",
    titreAccent: "avant tout.",
    paragraphes: [
      "Mon métier, je souhaite aussi le mettre au service de causes qui me touchent.",
      "J'aimerais participer davantage à des manifestations solidaires auprès des personnes malades, des enfants et des personnes âgées.",
      "Je souhaite également développer des collaborations autour du bien-être et de l'accompagnement des femmes.",
      "Alors, si tu portes un projet solidaire et que tu penses que je pourrais y apporter quelque chose, parlons-en.",
    ],
    cta: { label: "Je te propose un projet" },
    photo: { alt: "Projets solidaires" },
    fond: "sauge",
  },
  {
    titre: "Avant de prendre soin de ton corps,",
    titreAccent: "prenons le temps de faire connaissance.",
    paragraphes: [
      "Tu n'as pas besoin de savoir exactement de quel massage tu as envie.",
      "Appelle-moi, raconte-moi ce dont tu as besoin et nous en parlerons ensemble.",
      { texte: "À très vite,", style: "signature" },
      { texte: "Christelle.", style: "signature" },
    ],
    cta: { label: "Je fais connaissance avec Christelle" },
    photo: { alt: "Christelle" },
    fond: "sable",
  },
];
