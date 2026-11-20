import type { Metadata } from "next";
import styles from "@/components/Legal.module.css";
import { PageInterne } from "@/components/PageInterne";
import { PRATICIENNE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confidentialité",
  robots: { index: false },
  alternates: { canonical: "/confidentialite/" },
};

// À relire avec Christelle avant la mise en ligne (et à adapter si un outil de statistiques est ajouté).
export default function Confidentialite() {
  return (
    <PageInterne titre="Confidentialité">
      <article className={styles.legal}>
        <h2>Données personnelles</h2>
        <p>
          Ce site ne contient aucun formulaire et ne collecte aucune donnée personnelle. Les réservations se font
          uniquement par téléphone.
        </p>

        <h2>Cookies</h2>
        <p>Ce site n’utilise aucun cookie publicitaire ni outil de mesure d’audience.</p>

        <h2>Hébergement</h2>
        <p>
          Comme tout site internet, l’hébergeur peut enregistrer des données techniques de connexion (adresse IP,
          navigateur) pour assurer la sécurité et le bon fonctionnement du site.
        </p>

        <h2>Contact</h2>
        <p>Pour toute question : {PRATICIENNE}, [adresse e-mail].</p>
      </article>
    </PageInterne>
  );
}
