import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/Legal.module.css";
import { PageInterne } from "@/components/PageInterne";
import { ENTREPRISE } from "@/content/entreprise";
import { PHONE_DISPLAY, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
  alternates: { canonical: "/mentions-legales/" },
};

export default function MentionsLegales() {
  const e = ENTREPRISE;
  return (
    <PageInterne titre="Mentions légales">
      <article className={styles.legal}>
        <h2>Éditrice du site</h2>
        <p>
          {e.nom} – {e.enseigne}
          <br />
          {e.statut}
          <br />
          SIRET : {e.siret} · Code APE : {e.ape}
          <br />
          Immatriculée au {e.registre}
          <br />
          {e.adresse}
          <br />
          Téléphone : {PHONE_DISPLAY}
          <br />
          E-mail : <a href={`mailto:${e.email}`}>{e.email}</a>
        </p>
        <p>{e.tva}.</p>
        <p>Directrice de la publication : {e.nom}</p>

        <h2>Assurance professionnelle</h2>
        <p>
          Responsabilité civile professionnelle souscrite auprès de {e.assurance.assureur}, contrat n°{" "}
          {e.assurance.contrat}. Couverture : {e.assurance.zone}.
        </p>

        <h2>Activité</h2>
        <p>
          Les prestations proposées sont des soins de bien-être, sans visée thérapeutique ni médicale et à caractère
          non sexuel. Elles ne remplacent pas une consultation ou un traitement médical.
        </p>

        <h2>Hébergement</h2>
        <p>
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
          <br />
          vercel.com
        </p>

        <h2>Conception et mise en ligne</h2>
        <p>Marc Bretzner</p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes, photographies, logo et éléments graphiques de {SITE_URL.replace("https://", "")} sont la
          propriété de {e.nom} ou utilisés avec l’autorisation de leurs auteurs. Toute reproduction sans
          autorisation est interdite.
        </p>

        <h2>Conditions de vente et données personnelles</h2>
        <p>
          Voir les <Link href="/conditions-generales-de-vente/">conditions générales de vente</Link> et la{" "}
          <Link href="/confidentialite/">politique de confidentialité</Link>.
        </p>
      </article>
    </PageInterne>
  );
}
