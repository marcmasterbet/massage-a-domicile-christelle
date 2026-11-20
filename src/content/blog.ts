// Articles de blog de Jeff — à reproduire mot pour mot. Ne rien ajouter.
// Pour ajouter un article : copier un bloc { ... } dans la liste ARTICLES.

export type BlocArticle = {
  /** Intertitre (h2). Absent pour l'introduction. */
  titre?: string;
  paragraphes: string[];
};

export type Article = {
  slug: string;
  /** Titre affiché sur la page (h1) */
  titre: string;
  /** Balise Title pour Google */
  seoTitle: string;
  /** Méta-description pour Google */
  seoDescription: string;
  /** Date de publication (AAAA-MM-JJ) */
  date: string;
  blocs: BlocArticle[];
  cta: string;
  image?: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "preparer-massage-domicile",
    titre: "Comment préparer ton premier massage à domicile ?",
    seoTitle: "Comment préparer son massage à domicile ? | Christelle",
    seoDescription:
      "Premier massage à domicile ? Découvre les conseils de Christelle pour préparer ta séance et profiter pleinement de ton moment de détente au Pays basque.",
    date: "2026-11-20",
    blocs: [
      {
        paragraphes: [
          "Recevoir un massage chez toi, c'est profiter d'un moment de détente sans avoir à mettre le nez dehors. Mais faut-il préparer quelque chose avant mon arrivée ?",
          "Rassure-toi, tu n'as pas besoin de transformer ton salon en institut de bien-être.",
          "Je suis Christelle, praticienne du massage à domicile au Pays basque, et voici mes conseils pour profiter pleinement de ton rendez-vous.",
        ],
      },
      {
        titre: "Prépare simplement un espace pour ta séance de massage",
        paragraphes: [
          "Choisis une pièce suffisamment spacieuse pour accueillir ma table de massage et me permettre de circuler autour.",
          "Ton salon ou ta chambre peuvent parfaitement convenir.",
          "L'essentiel, c'est que tu te sentes à l'aise dans cet environnement.",
          "Et ne passe surtout pas deux heures à faire le ménage avant mon arrivée. Je viens pour prendre soin de toi, pas pour inspecter ta maison !",
        ],
      },
      {
        titre: "Dois-tu prévoir du matériel pour ton massage à domicile ?",
        paragraphes: [
          "Absolument pas.",
          "Je viens avec ma table de massage, mon linge, mes produits et ma bonne humeur.",
          "Tu n'as donc pas besoin d'acheter quoi que ce soit pour préparer ta séance.",
        ],
      },
      {
        titre: "Prends le temps de me parler de tes besoins",
        paragraphes: [
          "Avant ton massage, nous prenons le temps d'échanger.",
          "Tu ressens des tensions dans certaines parties de ton corps ? Tu traverses une période particulièrement stressante ? Tu souhaites simplement profiter d'un moment de relaxation ?",
          "Dis-le-moi.",
          "Ces informations me permettent de personnaliser ton massage en fonction de ton ressenti.",
          "Pense également à me signaler toute particularité de santé susceptible de nécessiter des précautions. En cas de doute sur la compatibilité d'un massage avec ton état de santé, demande l'avis de ton médecin.",
        ],
      },
      {
        titre: "Autorise-toi à ne rien faire",
        paragraphes: [
          "Mets ton téléphone en silencieux, préviens ton entourage et accorde-toi ce moment sans interruption.",
          "Tu n'as aucun objectif à atteindre pendant ton massage.",
          "Tu n'as rien à réussir, rien à prouver et rien à organiser.",
          "Pour une fois, quelqu'un s'occupe de toi.",
        ],
      },
      {
        titre: "Réserve ton massage à domicile au Pays basque",
        paragraphes: [
          "Je me déplace à Bayonne, Anglet, Biarritz, Saint-Pierre-d'Irube et Tarnos.",
          "Premier massage ou habitué des séances de bien-être, je t'accueille avec la même écoute et la même bienveillance.",
          "Le petit avantage du massage à domicile ? Une fois la séance terminée, pas besoin de reprendre la voiture.",
          "Tu es déjà chez toi !",
        ],
      },
    ],
    cta: "Je réserve mon premier massage",
  },
  {
    slug: "massage-relaxant-stress",
    titre: "Stress et tensions : quand as-tu pris du temps pour toi pour la dernière fois ?",
    seoTitle: "Massage relaxant et stress : prends enfin du temps pour toi",
    seoDescription:
      "Stress, tensions corporelles, difficulté à lâcher prise ? Découvre comment t'accorder un moment de relaxation avec Christelle au Pays basque.",
    date: "2026-11-20",
    blocs: [
      {
        paragraphes: [
          "Tu arrives à trouver du temps pour tout le monde. Sauf pour toi.",
          "Le travail, les enfants, les courses, les rendez-vous, les imprévus…",
          "Tes journées se remplissent et le moment que tu voulais t'accorder disparaît progressivement de ton agenda.",
          "Puis viennent les épaules crispées, le dos tendu et cette impression de ne jamais vraiment déconnecter.",
          "Et si tu arrêtais d'attendre les prochaines vacances pour souffler ?",
        ],
      },
      {
        titre: "Pourquoi est-il parfois si difficile de lâcher prise ?",
        paragraphes: [
          "Même lorsque ta journée est terminée, ton esprit continue parfois de tourner.",
          "Tu repenses aux événements de la journée, tu anticipes ceux du lendemain et tu réfléchis à tout ce que tu n'as pas encore fait.",
          "Ton corps est dans le canapé, mais ta tête est encore au travail.",
          "Prendre du temps pour toi ne signifie pourtant pas abandonner tes responsabilités.",
          "Cela signifie simplement t'accorder une place parmi tes propres priorités.",
        ],
      },
      {
        titre: "Le massage relaxant : un moment consacré à ton bien-être",
        paragraphes: [
          "Un massage bien-être peut t'offrir un temps de relaxation et de déconnexion.",
          "Pendant cette parenthèse, tu peux porter ton attention sur tes sensations plutôt que sur les obligations qui occupent habituellement ton esprit.",
          "Pas besoin de conversation si tu préfères le silence.",
          "Pas besoin non plus de savoir comment lâcher prise.",
          "Chacun vit son moment de détente à sa manière.",
          "Mon rôle est de t'accompagner avec écoute, sans te demander de ressentir quoi que ce soit de particulier.",
          "Le massage bien-être ne remplace cependant pas une prise en charge médicale ou psychologique lorsque celle-ci est nécessaire.",
        ],
      },
      {
        titre: "Faut-il attendre d'être épuisé pour prendre soin de soi ?",
        paragraphes: [
          "Pourquoi attendons-nous souvent de ne plus en pouvoir pour nous accorder du repos ?",
          "Tu peux parfaitement avoir envie d'un massage sans être particulièrement stressé ou fatigué.",
          "Le bien-être ne devrait pas être réservé aux périodes difficiles.",
          "T'accorder régulièrement un moment de détente, c'est aussi reconnaître que tes besoins comptent.",
          "Une fois par semaine, tous les quinze jours ou plus occasionnellement : à toi de trouver le rythme qui te convient.",
        ],
      },
      {
        titre: "Profite d'un massage relaxant sans quitter ton domicile",
        paragraphes: [
          "Je suis Christelle, praticienne du bien-être. J'ai commencé à exercer en 2020.",
          "Je propose des massages personnalisés à domicile à Bayonne, Anglet, Biarritz, Saint-Pierre-d'Irube et Tarnos.",
          "Je prends le temps de t'écouter et d'adapter mon massage à tes besoins du moment.",
          "Et si ton prochain rendez-vous était enfin un rendez-vous avec toi-même ?",
        ],
      },
    ],
    cta: "Je m'accorde un moment de détente",
  },
  {
    slug: "comment-choisir-son-massage",
    titre: "Comment choisir un massage adapté à tes besoins ?",
    seoTitle: "Comment choisir un massage adapté à tes besoins ?",
    seoDescription:
      "Massage relaxant, prénatal, postnatal, soin minceur ou soin japonais du visage : Christelle t'aide à choisir une prestation adaptée à tes besoins.",
    date: "2026-11-20",
    blocs: [
      {
        paragraphes: [
          "Tu voudrais te faire masser, mais tu ne sais pas quel massage choisir ? Bonne nouvelle : tu n'as pas besoin de connaître toutes les techniques de massage pour prendre rendez-vous.",
          "Tu as simplement besoin de savoir ce que tu recherches.",
          "De la détente ? Un moment pour toi ? Un accompagnement autour de la maternité ? Une attention particulière portée à ton corps ou à ton visage ?",
          "À chaque besoin correspond une approche différente.",
        ],
      },
      {
        titre: "Commence par écouter ton corps",
        paragraphes: [
          "Avant de choisir un massage, demande-toi ce dont tu as réellement envie.",
          "Tu souhaites déconnecter après une période chargée ? Tu ressens des tensions ? Tu aimerais simplement renouer avec ton corps et prendre soin de toi ?",
          "Il n'y a pas de bonne ou de mauvaise réponse.",
          "Tes besoins évoluent avec ton quotidien, tes émotions et les différentes étapes de ta vie.",
          "C'est pourquoi je privilégie une approche personnalisée plutôt qu'un massage identique pour tout le monde.",
        ],
      },
      {
        titre: "Le massage relaxant et intuitif pour un moment de détente",
        paragraphes: [
          "Le massage relaxant et intuitif s'adresse aux hommes et aux femmes qui recherchent un moment de mieux-être.",
          "Sa particularité ? Je l'adapte à tes besoins et à ton ressenti.",
          "Le massage que je te propose aujourd'hui ne sera donc pas nécessairement le même lors de notre prochain rendez-vous.",
          "C'est ton corps et ton ressenti qui orientent mon approche.",
        ],
      },
      {
        titre: "Le massage prénatal et postnatal pour accompagner la maternité",
        paragraphes: [
          "La grossesse et les premiers mois qui suivent l'accouchement représentent des périodes de changements importants.",
          "Prendre du temps pour soi peut alors devenir particulièrement difficile.",
          "Certifiée en massage pré et postnatal, je propose un accompagnement bien-être adapté à ces moments de vie.",
          "Nous échangeons au préalable pour nous assurer que le massage correspond à ta situation et respecte les précautions nécessaires.",
          "En cas de grossesse à risque, de complication ou de doute, un avis médical préalable est indispensable.",
        ],
      },
      {
        titre: "Les soins minceur pour prendre soin de ta silhouette",
        paragraphes: [
          "Mes soins minceur s'inscrivent dans une démarche d'accompagnement du corps.",
          "Ils peuvent être proposés à l'unité ou sous forme de cure.",
          "Au-delà de l'aspect esthétique, ce qui me tient à cœur, c'est de t'accompagner dans une démarche où tu peux apprendre à prendre soin de ton corps et à l'apprécier.",
          "Sans jugement, sans pression et sans promesse irréaliste de perte de poids.",
        ],
      },
      {
        titre: "Le soin liftant japonais pour prendre soin de ton visage",
        paragraphes: [
          "Tu peux également choisir de consacrer ton moment de bien-être à ton visage.",
          "Formée au soin liftant japonais du visage, je propose cette prestation à l'unité ou sous forme de cure.",
          "C'est une autre manière de t'accorder du temps et de découvrir une approche du bien-être centrée sur le visage.",
        ],
      },
      {
        titre: "Et si tu hésites encore entre plusieurs massages ?",
        paragraphes: [
          "Appelle-moi.",
          "Nous prendrons le temps de parler de tes attentes et de déterminer ensemble quelle prestation correspond le mieux à tes besoins.",
          "Je me déplace à domicile à Bayonne, Anglet, Biarritz, Saint-Pierre-d'Irube et Tarnos.",
          "Tu n'as pas besoin de devenir spécialiste du massage avant de me contacter.",
          "C'est mon métier, pas le tien !",
        ],
      },
    ],
    cta: "Je trouve le massage qui me correspond",
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
