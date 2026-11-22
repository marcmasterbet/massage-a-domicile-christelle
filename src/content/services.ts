// Textes de Jeff — page Services — à reproduire mot pour mot. Ne rien ajouter.

export type QuestionReponse = { question: string; reponse: string };

export type Service = {
  slug: string;
  titre: string;
  /** Paragraphes ; *texte entre astérisques* = italique */
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
      "Ici, aucun protocole figé. J'écoute ton corps, ton ressenti et tes émotions pour t'offrir un massage 100 % personnalisé. Tantôt enveloppants, tantôt plus profonds, mes gestes s'adaptent à tes besoins et à tes envies du moment.",
      "L'objectif ? Relâcher les tensions, déconnecter et retrouver tes sensations. Un moment rien que pour toi, pour prendre soin de ton corps… et un peu de ton âme.",
    ],
    cta: "Je libère mes tensions",
    photo: "/images/service-relaxant.jpg",
    faq: [
      {
        question: "Quelle est la différence entre un massage relaxant et un massage intuitif ?",
        reponse:
          "Le massage relaxant vise à favoriser la détente et le relâchement des tensions. Le massage intuitif va plus loin dans la personnalisation : aucun protocole figé, chaque geste s'adapte à ton corps, à tes émotions et à ton ressenti du moment.",
      },
      {
        question: "Un massage relaxant peut-il aider à évacuer le stress et les tensions musculaires ?",
        reponse:
          "Oui, un massage relaxant peut favoriser le relâchement musculaire et procurer une sensation d'apaisement. Les gestes doux ou plus profonds sont adaptés à tes besoins pour t'aider à déconnecter et à retrouver tes sensations.",
      },
      {
        question: "Comment se déroule un massage relaxant et intuitif à domicile ?",
        reponse:
          "Je viens chez toi avec ma table de massage, mon linge et mes produits. Nous prenons d'abord le temps d'échanger sur tes envies et tes éventuelles tensions. Ensuite, j'adapte chaque geste à ton confort pour t'offrir un massage entièrement personnalisé.",
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
        question: "Quels sont les bienfaits d'un massage prénatal pendant la grossesse ?",
        reponse:
          "Le massage prénatal favorise la détente, aide à soulager les tensions musculaires et dorsales et peut améliorer la sensation de bien-être. C'est aussi un moment privilégié pour ralentir, prendre soin de toi et te reconnecter à ton corps pendant la grossesse.",
      },
      {
        question: "À partir de quel mois de grossesse peut-on recevoir un massage prénatal ?",
        reponse:
          "Il n'existe pas de règle universelle : cela dépend de ton état de santé et du déroulement de ta grossesse. Formée au massage prénatal, j'adapte les gestes et les positions à tes besoins. En cas de grossesse à risque ou de doute, demande l'avis de ton médecin ou de ta sage-femme avant de réserver.",
      },
      {
        question: "Quand peut-on recevoir un massage postnatal après l'accouchement ?",
        reponse:
          "Le moment idéal dépend de ta récupération, notamment après une césarienne ou un accouchement compliqué. Le massage postnatal t'offre une parenthèse de douceur pour te détendre et prendre soin de toi. En cas de doute, demande l'accord de ton professionnel de santé avant la séance.",
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
        question: "En quoi consiste un soin minceur à domicile ?",
        reponse:
          "Le soin minceur est une prestation de bien-être corporel personnalisée selon tes besoins et tes attentes. Je prends le temps de t'écouter pour adapter chaque séance à ton confort et t'accompagner dans une démarche respectueuse de ton corps.",
      },
      {
        question: "Un soin minceur permet-il de perdre du poids ou des centimètres ?",
        reponse:
          "Un soin minceur ne garantit ni perte de poids ni réduction des centimètres. Il s'inscrit dans une démarche de bien-être et de soin de la silhouette, sans promesses irréalistes. Mon objectif est de t'aider à prendre soin de ton corps, sans pression ni jugement.",
      },
      {
        question: "Vaut-il mieux choisir un soin minceur à l'unité ou sous forme de cure ?",
        reponse:
          "Une séance à l'unité permet de découvrir le soin et de voir s'il correspond à tes attentes. Une cure permet de programmer plusieurs séances pour intégrer régulièrement ce moment de bien-être à ton quotidien. Le choix dépend de tes envies et de ton rythme.",
      },
    ],
  },
  {
    slug: "soin-liftant-japonais-visage",
    titre: "Soin liftant japonais du visage",
    paragraphes: [
      "Ton visage porte les marques de la fatigue et du stress ? Et si tu lui accordais enfin toute l'attention qu'il mérite ?",
      "Inspiré des traditions japonaises, ce soin associe massage manuel, digitopression et ventouses adaptées au visage. Des gestes précis, doux et rythmés pour stimuler la microcirculation, détendre les traits, favoriser le drainage et raviver l'éclat naturel de ta peau.",
      "Chaque soin est personnalisé selon tes besoins. Pour la séance d'1 h 30, je complète le rituel par un double nettoyage de peau et un gommage doux. Pense simplement à venir sans maquillage !",
      "*À l'unité ou en cure de 3 ou 5 séances*, offre à ton visage une parenthèse de beauté et de détente.",
    ],
    cta: "J'offre une pause à mon visage",
    photo: "/images/service-liftant-japonais.jpg",
    faq: [
      {
        question: "Quels sont les bienfaits du massage liftant japonais du visage ?",
        reponse:
          "Le massage liftant japonais aide à détendre les traits, à stimuler la microcirculation et à raviver l'éclat naturel de la peau. Grâce à l'association du massage manuel, de la digitopression et des ventouses faciales, il offre un véritable moment de relaxation et de bien-être.",
      },
      {
        question: "Comment se déroule un soin liftant japonais du visage à domicile ?",
        reponse:
          "Je viens chez toi avec le matériel nécessaire. Le soin associe différentes techniques de massage adaptées à ton visage et à tes besoins. Pour la séance d'1 h 30, je réalise également un double nettoyage de peau et un gommage doux. Pense simplement à venir sans maquillage.",
      },
      {
        question: "Faut-il choisir un massage liftant japonais à l'unité ou une cure de 3 ou 5 séances ?",
        reponse:
          "Une séance à l'unité permet de découvrir le soin et de profiter d'un moment de détente. Une cure de 3 ou 5 séances permet d'intégrer régulièrement ce rituel à ta routine de bien-être. Le choix dépend de tes envies et de tes attentes, sans résultat esthétique garanti.",
      },
    ],
  },
];

// Bloc « Durées et tarifs » en fin de page
export const TARIFS = {
  titre: "Durées et tarifs",
  intro: "Quel que soit le soin choisi, les tarifs sont les mêmes :",
  lignes: [
    { duree: "1 h", prix: "85 €" },
    { duree: "1 h 30", prix: "120 €" },
    { duree: "2 h", prix: "155 €" },
  ],
};
