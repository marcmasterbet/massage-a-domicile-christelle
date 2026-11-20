// Textes de Jeff — à reproduire mot pour mot. Ne rien ajouter.

export const hero = {
  surtitre: "Massage à domicile au Pays basque :",
  titre: "le corps tendu, la tête pleine,",
  titreAccent: "besoin de souffler ?",
  accroche: "Ne bouge pas, j'arrive avec ma table de massage.",
  texte:
    "Je prends soin de toi à Bayonne, Anglet, Biarritz, Saint-Pierre-d’Irube et Tarnos, avec des massages 100 % personnalisés.",
  cta: "Je réserve mon massage",
};

export type PartieAccueil = {
  id?: string;
  titre: string;
  titreAccent: string;
  paragraphes: string[];
  cta: { label: string; href?: string };
  photo: { alt: string; src?: string };
  fond: "ivoire" | "sauge" | "sable";
};

export const parties: PartieAccueil[] = [
  {
    titre: "Ton dos tire, tes épaules se crispent…",
    titreAccent: "Et toi, tu continues.",
    paragraphes: [
      "Entre le travail, les obligations du quotidien et les imprévus, tu trouves toujours une bonne raison de reporter le moment que tu voulais t'accorder.",
      "Tu aimerais soulager tes tensions, évacuer ton stress et prendre soin de toi.",
      "Mais à quand remonte la dernière fois où tu l'as vraiment fait ?",
    ],
    cta: { label: "Je prends soin de moi" },
    photo: { alt: "Femme qui se masse l'épaule, tendue devant son ordinateur", src: "/images/dos-tendu.jpg" },
    fond: "ivoire",
  },
  {
    titre: "Ta journée est terminée, mais dans ta tête,",
    titreAccent: "elle continue.",
    paragraphes: [
      "Même lorsque tu t'installes dans ton canapé, tu penses déjà à ce que tu dois faire demain.",
      "Tu voudrais pouvoir déconnecter sans regarder l'heure, sans penser aux autres et sans culpabiliser de ne rien faire.",
      "Juste une heure pendant laquelle tu n'as de comptes à rendre à personne.",
    ],
    cta: { label: "Je m'offre une pause" },
    photo: { alt: "Femme fatiguée qui masse sa nuque dans son canapé en fin de journée", src: "/images/journee-terminee.jpg" },
    fond: "sauge",
  },
  {
    id: "christelle",
    titre: "Pour moi, un massage bien-être commence par l'écoute,",
    titreAccent: "pas par le toucher.",
    paragraphes: [
      "Je suis Christelle, praticienne du bien-être. J'ai commencé à exercer en 2020.",
      "Je suis notamment certifiée en massage pré et postnatal et en soin liftant japonais du visage.",
      "Je fais partie du réseau de praticiens ELSEE. Si tu bénéficies d'une offre ELSEE, ton massage peut être partiellement remboursé, selon les conditions de ton contrat.",
      "Que tu sois un homme ou une femme, je prends le temps de t'écouter avant de te masser.",
      "Pas de massage standardisé, pas de jugement. Mes mains s'adaptent à tes besoins du moment.",
    ],
    cta: { label: "Je rencontre Christelle", href: "/a-propos/" },
    photo: { alt: "Portrait de Christelle", src: "/images/christelle-portrait.jpg" },
    fond: "ivoire",
  },
  {
    id: "reserver",
    titre: "Ton massage à domicile : tu n'as rien à apporter,",
    titreAccent: "je m'occupe du matériel.",
    paragraphes: [
      "Ma table de massage, mon linge, mes produits et surtout ma bonne humeur : j'apporte tout ce dont j'ai besoin.",
      "Tu m'as d'ailleurs peut-être déjà croisée à vélo dans les rues de Bayonne, Anglet ou Biarritz.",
      "Mon vélo s'appelle Fernand !",
      "Pour réserver, il suffit de me contacter. Nous échangeons sur tes besoins et convenons ensemble d'un rendez-vous.",
      "Et le plus agréable dans tout ça ? Une fois ton massage terminé, tu es déjà chez toi.",
    ],
    cta: { label: "Je choisis mon créneau" },
    photo: { alt: "Christelle et son vélo Fernand sur les quais de Bayonne", src: "/images/christelle-fernand.jpg" },
    fond: "sable",
  },
];
