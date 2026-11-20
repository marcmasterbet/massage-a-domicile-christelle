// Textes de Jeff — page Services — à reproduire mot pour mot. Ne rien ajouter.

export type QuestionReponse = { question: string; reponse: string };

export type Service = {
  slug: string;
  titre: string;
  texte: string;
  cta: string;
  photo?: string;
  faq?: QuestionReponse[];
};

export const SERVICES: Service[] = [
  {
    slug: "massage-relaxant-intuitif",
    titre: "Massage relaxant et intuitif",
    texte:
      "Le dos tendu, les épaules crispées, le stress qui s'accumule ? Ce massage personnalisé s'adapte aux besoins de ton corps et à ton ressenti du moment. Je prends le temps de t'écouter pour t'offrir un massage qui favorise la détente musculaire, la relaxation et le lâcher-prise.",
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
    texte:
      "Avant comme après l'accouchement, ton corps mérite une attention particulière. Spécialement formée aux massages pré et postnataux, je t'accompagne dans cette période de changements avec des gestes adaptés, pour favoriser la détente, apaiser les tensions corporelles et t'accorder un moment de douceur.",
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
    texte:
      "Tu souhaites prendre soin de ta silhouette et te sentir mieux dans ton corps ? Le soin minceur s'inscrit dans une démarche personnalisée de bien-être corporel. À l'unité ou sous forme de cure, je t'accompagne à ton rythme, pour prendre soin de ton corps et apprendre à l'aimer, sans pression ni jugement.",
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
    texte:
      "Inspiré des techniques traditionnelles japonaises, ce massage du visage associe des gestes précis, doux et rythmés. Son objectif ? Détendre les traits, favoriser l'éclat naturel de la peau et procurer une sensation de relaxation. Je te propose ce soin à l'unité ou sous forme de cure.",
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
