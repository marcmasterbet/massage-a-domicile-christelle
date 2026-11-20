import type { Metadata } from "next";
import styles from "@/components/Legal.module.css";
import { PageInterne } from "@/components/PageInterne";
import { BRAND, PHONE_DISPLAY, PRATICIENNE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
  alternates: { canonical: "/mentions-legales/" },
};

// Les éléments entre crochets sont à compléter avec Christelle avant la mise en ligne.
export default function MentionsLegales() {
  return (
    <PageInterne titre="Mentions légales">
      <article className={styles.legal}>
        <h2>Éditrice du site</h2>
        <p>
          {PRATICIENNE}, entrepreneuse individuelle – {BRAND}
          <br />
          [Adresse professionnelle]
          <br />
          SIRET : [numéro SIRET]
          <br />
          Téléphone : {PHONE_DISPLAY}
          <br />
          E-mail : [adresse e-mail]
        </p>
        <p>Directrice de la publication : {PRATICIENNE}</p>

        <h2>Hébergement</h2>
        <p>
          [Nom de l’hébergeur]
          <br />
          [Adresse de l’hébergeur]
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes, photographies, logo et éléments graphiques de {SITE_URL.replace("https://", "")} sont la
          propriété de {PRATICIENNE} ou utilisés avec l’autorisation de leurs auteurs. Toute reproduction sans
          autorisation est interdite.
        </p>
      </article>
    </PageInterne>
  );
}
