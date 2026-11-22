// Textes de Jeff — page Services — à reproduire mot pour mot. Ne rien ajouter.

export type QuestionReponse = { question: string; reponse: string };

export type Service = {
  slug: string;
  titre: string;
  /** Paragraphes ; *texte entre astérisques* = italique */
  paragraphes: string[];
  cta: string;
  photo?: string;
  faq?: QuestionReponse[];
};

export const SERVICES: Service[] = [
  {
    slug: "massage-relaxant-intuitif",
    titre: "Massage relaxant et intuitif",
    paragraphes: [
      "Le dos tendu, les épaules crispées, le stress qui s'accumule ? Et si tu t'accordais une parenthèse hors du temps ?",
      "Ici, aucun protocole figé. J'écoute ton corps, ton ressenti et tes émotions pour t'offrir un massage 100 % personnalisé. Tantôt enveloppants, tantôt plus profonds, mes gestes s'adaptent à tes besoins et à tes envies du moment.",
      "L'objectif ? Relâcher les tensions, déconnecter et retrouver tes sensations. Un moment rien que pour toi, pour prendre soin de ton corps… et un peu de ton âme.",
    ],
    cta: "Je libère mes tensions",
    photo: "/images/service-relaxant.jpg",
    faq: [
      {
        question: "Quelle est la différence entre un massage relaxant et un massage intuitif ?",
        reponse:
          "Le massage relaxant favorise la détente et le relâchement des tensions corporelles. L’approche intuitive me permet de personnaliser mes gestes en fonction de ton ressenti et de tes besoins du moment. Aucun de mes massages n’est identique.",
      },
      {
        question: "Faut-il être stressé ou avoir des tensions pour profiter d’un massage relaxant ?",
        reponse:
          "Non, heureusement ! Tu n’as pas besoin d’attendre que ton corps te rappelle à l’ordre pour prendre soin de toi. Le simple plaisir de te faire masser est une excellente raison de prendre rendez-vous.",
      },
      {
        question: "Combien coûte un massage relaxant à domicile au Pays basque ?",
        reponse:
          "Mon tarif pour un massage d’une heure à domicile est de 85 €. Je me déplace avec ma table de massage, mon linge et mes produits à Bayonne, Anglet, Biarritz, Saint-Pierre-d’Irube et Tarnos.",
      },
    ],
  },
  {
    slug: "massage-prenatal-postnatal",
    titre: "Massage prénatal et postnatal",
    paragraphes: [
      "Avant comme après l’arrivée de bébé, ton corps traverse de nombreux changements. Et toi, au milieu de tout ça, quand prends-tu le temps de souffler ?",
      "Certifiée en massage prénatal et postnatal, je t’accompagne à domicile avec des gestes adaptés à tes besoins, pour favoriser la détente, apaiser les tensions musculaires et dorsales et retrouver un sommeil plus serein.",
      "Pendant la grossesse, c’est aussi un moment privilégié pour te reconnecter à toi-même et à ton bébé. Après l’accouchement, une parenthèse de douceur rien que pour toi.",
    ],
    cta: "Je prends soin de moi",
    photo: "/images/service-prenatal.jpg",
    faq: [
      {
        question: "Quels sont les bienfaits d’un massage prénatal ?",
        reponse:
          "Le massage prénatal favorise la relaxation, aide à relâcher les tensions musculaires et dorsales et t’offre un moment privilégié de connexion avec ton bébé.",
      },
      {
        question: "Peut-on se faire masser à n’importe quel moment de la grossesse ?",
        reponse:
          "Cela dépend du déroulement de ta grossesse et de ton état de santé. Avant chaque rendez-vous, nous échangeons sur ta situation. En cas de grossesse à risque ou de doute, un avis médical préalable est nécessaire.",
      },
      {
        question: "Pourquoi s’offrir un massage postnatal après l’accouchement ?",
        reponse:
          "Après avoir consacré tant d’énergie à ton bébé, il est important de prendre également soin de toi. Le massage postnatal favorise la détente, le relâchement des tensions et te permet de te reconnecter à ton corps.",
      },
    ],
  },
  {
    slug: "soin-minceur",
    titre: "Soin minceur",
    paragraphes: [
      "Tu aimerais redessiner ta silhouette, mais surtout te sentir mieux dans ton corps et retrouver confiance en toi ?",
      "Je te propose un soin minceur à domicile, personnalisé selon tes besoins et tes attentes, à l'unité ou sous forme de cure. Je prends le temps de t'écouter pour t'accompagner à ton rythme, dans une démarche de bien-être corporel.",
      "Mon objectif ? T'aider à te retrouver, à prendre soin de ta silhouette et à aimer ton corps, sans pression ni jugement.",
    ],
    cta: "Je prends soin de ma silhouette",
    photo: "/images/service-minceur.jpg",
    faq: [
      {
        question: "En quoi consiste un soin minceur ?",
        reponse:
          "Le soin minceur est un soin du corps qui vise à améliorer l’apparence de ta silhouette. Mon approche repose également sur l’écoute, la bienveillance et l’envie de t’aider à te sentir mieux dans ton corps.",
      },
      {
        question: "Est-ce qu’un soin minceur fait perdre du poids ?",
        reponse:
          "Non, le soin minceur n’est pas une méthode de perte de poids. Il s’inscrit dans une démarche de bien-être et d’accompagnement esthétique de ta silhouette, sans promesse de résultats miracles.",
      },
      {
        question: "Vaut-il mieux choisir un soin minceur à l’unité ou en cure ?",
        reponse:
          "Tout dépend de tes attentes et de tes objectifs. Tu peux commencer par un premier soin, puis nous définirons ensemble si un accompagnement régulier correspond davantage à tes besoins.",
      },
    ],
  },
  {
    slug: "soin-liftant-japonais-visage",
    titre: "Soin liftant japonais du visage",
    paragraphes: [
      "Ton visage porte les marques de la fatigue et du stress ? Et si tu lui accordais enfin toute l'attention qu'il mérite ?",
      "Inspiré des traditions japonaises, ce soin associe massage manuel, digitopression et ventouses adaptées au visage. Des gestes précis, doux et rythmés pour stimuler la microcirculation, détendre les traits, favoriser le drainage et raviver l'éclat naturel de ta peau.",
      "Chaque soin est personnalisé selon tes besoins. Pour la séance d'1 h 30, je complète le rituel par un double nettoyage de peau et un gommage doux. Pense simplement à venir sans maquillage !",
      "*À l'unité ou en cure de 3 ou 5 séances*, offre à ton visage une parenthèse de beauté et de détente.",
    ],
    cta: "J'offre une pause à mon visage",
    photo: "/images/service-liftant-japonais.jpg",
    faq: [
      {
        question: "En quoi consiste le soin liftant japonais du visage ?",
        reponse:
          "Ce massage du visage s'appuie sur des gestes précis et rythmés qui favorisent la détente des traits, stimulent la microcirculation cutanée et ravivent l'éclat naturel de la peau.",
      },
      {
        question: "Le soin liftant japonais du visage permet-il d'atténuer les rides ?",
        reponse:
          "Ce soin peut donner au visage une apparence plus reposée et lumineuse. Il ne supprime pas les rides et ne remplace pas un traitement de médecine esthétique.",
      },
      {
        question: "Vaut-il mieux réaliser un soin liftant japonais ponctuellement ou en cure ?",
        reponse:
          "Tu peux t'offrir ce soin ponctuellement pour profiter d'un moment de détente ou choisir un accompagnement régulier. Nous définissons ensemble la fréquence adaptée à tes attentes.",
      },
    ],
  },
];

// Bloc « Durées et tarifs » en fin de page
export const TARIFS = {
  titre: "Durées et tarifs",
  intro: "Quel que soit le soin choisi, les tarifs sont les mêmes :",
  lignes: [
    { duree: "1 h", prix: "85 €" },
    { duree: "1 h 30", prix: "120 €" },
    { duree: "2 h", prix: "155 €" },
  ],
};
