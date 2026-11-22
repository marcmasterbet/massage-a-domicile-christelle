import type { Metadata } from "next";
import styles from "@/components/Legal.module.css";
import { PageInterne } from "@/components/PageInterne";
import { ENTREPRISE } from "@/content/entreprise";
import { PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confidentialité",
  robots: { index: false },
  alternates: { canonical: "/confidentialite/" },
};

export default function Confidentialite() {
  const e = ENTREPRISE;
  return (
    <PageInterne titre="Confidentialité">
      <article className={styles.legal}>
        <p className={styles.maj}>Mise à jour le 22 novembre 2026</p>

        <h2>Responsable du traitement</h2>
        <p>
          {e.nom} – {e.enseigne}, {e.adresse}. Contact : <a href={`mailto:${e.email}`}>{e.email}</a> ·{" "}
          {PHONE_DISPLAY}.
        </p>

        <h2>Le site</h2>
        <p>
          Ce site ne contient aucun formulaire : il ne vous demande aucune donnée personnelle. Les réservations se font
          uniquement par téléphone.
        </p>
        <p>
          Comme tout site internet, l’hébergeur (Vercel Inc.) peut enregistrer des données techniques de connexion
          (adresse IP, navigateur) pour assurer la sécurité et le bon fonctionnement du site.
        </p>

        <h2 id="cookies">Cookies et mesure d’audience</h2>
        <p>
          Ce site n’utilise aucun cookie publicitaire. Avec votre accord uniquement, il utilise Google Analytics
          (Google Ireland Limited) pour mesurer sa fréquentation : nombre de visites, pages consultées, durée, type
          d’appareil et ville approximative. Ces statistiques sont anonymes pour nous : elles ne permettent pas de
          savoir qui vous êtes.
        </p>
        <p>
          La mesure d’audience est gérée par Marc Bretzner, qui a conçu le site, pour le compte de {e.nom}. Les données
          peuvent être transférées aux États-Unis, dans le cadre des garanties prévues par le Data Privacy Framework.
        </p>
        <p>Cookies déposés si vous acceptez :</p>
        <ul>
          <li>_ga et _ga_… : distinguer les visiteurs et les visites, conservés 13 mois au maximum.</li>
        </ul>
        <p>
          Si vous refusez, aucun cookie de mesure n’est déposé et le site fonctionne de la même façon. Votre choix est
          conservé 6 mois. Vous pouvez le modifier à tout moment avec le lien « Cookies » en bas de chaque page.
        </p>

        <h2>Les données des clients</h2>
        <p>Pour organiser les rendez-vous et réaliser les soins en toute sécurité, {e.nom} peut noter :</p>
        <ul>
          <li>vos nom, prénom, téléphone et adresse (pour se déplacer chez vous) ;</li>
          <li>votre date de naissance ;</li>
          <li>l’historique de vos séances ;</li>
          <li>
            les informations de santé utiles au soin (grossesse, douleurs, contre-indications), uniquement avec votre
            accord.
          </li>
        </ul>
        <p>
          Ces informations servent uniquement à gérer vos rendez-vous et à adapter les soins. Elles ne sont ni
          vendues, ni transmises à des tiers, ni utilisées à des fins publicitaires. Seule {e.nom} y a accès.
        </p>
        <p>
          Certains échanges (confirmation de rendez-vous, lien de paiement des arrhes, suivi d’une cure) peuvent se
          faire par SMS ou par WhatsApp, si vous le souhaitez.
        </p>

        <h2>Durée de conservation</h2>
        <ul>
          <li>Fiche client et informations de santé : 3 ans après votre dernière séance ;</li>
          <li>Documents signés (autorisations parentales, décharges, contrats de cure) : 5 ans ;</li>
          <li>Notes de prestation et factures : 10 ans, conformément aux obligations comptables.</li>
        </ul>

        <h2>Vos droits</h2>
        <p>
          Vous pouvez à tout moment demander à consulter, corriger ou supprimer vos données, ou vous opposer à leur
          utilisation, en écrivant à <a href={`mailto:${e.email}`}>{e.email}</a>. Les notes de prestation et factures
          sont conservées le temps imposé par la loi.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL
          (cnil.fr).
        </p>
      </article>
    </PageInterne>
  );
}
