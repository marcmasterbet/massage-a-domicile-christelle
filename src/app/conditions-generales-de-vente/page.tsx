import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/Legal.module.css";
import { PageInterne } from "@/components/PageInterne";
import { ENTREPRISE } from "@/content/entreprise";
import { PHONE_DISPLAY, VILLES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  robots: { index: false },
  alternates: { canonical: "/conditions-generales-de-vente/" },
};

const TARIFS = [
  { soin: "Massage relaxant et intuitif", prix: "1 h : 85 € · 1 h 30 : 120 € · 2 h : 155 €" },
  { soin: "Massage prénatal et postnatal", prix: "1 h : 85 € · 1 h 30 : 120 € · 2 h : 155 €" },
  { soin: "Soin minceur", prix: "1 h : 85 € · 1 h 30 : 120 € · 2 h : 155 €" },
  { soin: "Soin liftant japonais du visage", prix: "1 h : 85 € · 1 h 30 : 120 €" },
  { soin: "Soin visage et corps", prix: "2 h : 155 €" },
  { soin: "Cures et forfaits", prix: "sur devis" },
];

export default function ConditionsGeneralesDeVente() {
  const e = ENTREPRISE;
  return (
    <PageInterne titre="Conditions générales de vente">
      <article className={styles.legal}>
        <p className={styles.maj}>En vigueur au 22 novembre 2026</p>

        <h2>1. Objet</h2>
        <p>
          Les présentes conditions générales de vente (CGV) s’appliquent à toutes les prestations réalisées par{" "}
          {e.nom}, {e.enseigne}, auprès de clients particuliers. Toute réservation implique leur acceptation.
        </p>

        <h2>2. Prestataire</h2>
        <p>
          {e.nom} – {e.enseigne}, {e.statut.toLowerCase()}, SIRET {e.siret}, {e.adresse}. Téléphone :{" "}
          {PHONE_DISPLAY}. E-mail : <a href={`mailto:${e.email}`}>{e.email}</a>.
        </p>

        <h2>3. Nature des prestations</h2>
        <p>
          Les massages et soins proposés sont des soins de bien-être, sans visée thérapeutique ni médicale et à
          caractère strictement non sexuel. Ils ne remplacent pas une consultation, un diagnostic ou un traitement
          médical.
        </p>
        <p>
          Toute attitude ou demande déplacée entraîne l’arrêt immédiat de la séance, qui reste due en totalité.
        </p>

        <h2>4. Lieu, déplacement et durée</h2>
        <p>
          Les prestations sont réalisées au domicile du client, à {VILLES.slice(0, -1).join(", ")} et{" "}
          {VILLES[VILLES.length - 1]}. Le déplacement est inclus dans le prix.
        </p>
        <p>
          La durée annoncée correspond au temps de soin. Elle n’inclut pas l’installation ni le rangement du matériel.
          Le client prévoit un espace suffisant pour la table de massage.
        </p>

        <h2>5. Tarifs</h2>
        <ul>
          {TARIFS.map((t) => (
            <li key={t.soin}>
              <strong>{t.soin}</strong> : {t.prix}
            </li>
          ))}
        </ul>
        <p>Les prix sont indiqués en euros, toutes taxes comprises. {e.tva}.</p>
        <p>Suppléments :</p>
        <ul>
          <li>séance entre 7 h et 9 h ou entre 18 h et 22 h : 10 € ;</li>
          <li>séance un dimanche ou un jour férié : 15 €, qui s’ajoutent au supplément horaire le cas échéant.</li>
        </ul>
        <p>Le prix applicable est celui annoncé au client lors de la réservation.</p>

        <h2>6. Réservation, arrhes et paiement</h2>
        <p>La réservation se fait par téléphone, au {PHONE_DISPLAY}.</p>
        <p>
          Le rendez-vous n’est confirmé qu’après le versement d’arrhes correspondant à 30 % du prix de la séance, par le
          lien de paiement transmis au client (Wero ou carte bancaire). Sans ce versement, le créneau n’est pas réservé.
        </p>
        <p>
          Le solde est réglé à la fin de la séance, en espèces, par chèque, par carte bancaire ou par paiement mobile
          (Wero, Lydia, Paylib…). Une note de prestation est remise au client à l’issue de chaque séance.
        </p>

        <h2>7. Annulation, report et retard</h2>
        <ul>
          <li>
            Annulation plus de 24 heures avant le rendez-vous : la séance est reportée à une nouvelle date et les arrhes
            sont reportées sur ce nouveau rendez-vous.
          </li>
          <li>Annulation moins de 24 heures avant le rendez-vous ou absence : les arrhes restent acquises.</li>
          <li>
            Retard : une tolérance de 10 minutes est accordée. Au-delà, le rendez-vous est annulé et les arrhes restent
            acquises.
          </li>
        </ul>
        <p>Les arrhes ne sont pas remboursées, sauf exercice du droit de rétractation (article 8).</p>
        <p>
          Si {e.nom} doit annuler un rendez-vous, elle propose une nouvelle date ou, si le client le préfère,
          rembourse intégralement les sommes versées.
        </p>

        <h2>8. Droit de rétractation</h2>
        <p>
          La réservation étant conclue à distance (par téléphone), le client dispose d’un délai de 14 jours à compter
          de la réservation pour se rétracter, sans avoir à se justifier, en le signalant par téléphone, par e-mail
          ou par écrit, par exemple à l’aide du modèle ci-dessous. Les sommes versées pour une prestation non réalisée
          sont alors remboursées dans un délai de 14 jours.
        </p>
        <p>
          Lorsque le client souhaite que la séance ait lieu avant la fin de ce délai, il le demande expressément par
          écrit (SMS, WhatsApp ou e-mail), par exemple : « Je demande que la séance ait lieu avant la fin de mon délai
          de rétractation. » Une fois la séance entièrement réalisée, le droit de rétractation ne peut plus être
          exercé pour cette séance. Si le client se rétracte après le début d’une cure commencée à sa demande, seules
          les séances déjà réalisées restent dues.
        </p>
        <div className={styles.encadre}>
          <p>
            <strong>Modèle de formulaire de rétractation</strong>
          </p>
          <p>
            À l’attention de {e.nom}, {e.enseigne}, {e.adresse}, {e.email} :
            <br />
            Je vous notifie par la présente ma rétractation du contrat portant sur la prestation suivante : … <br />
            Réservée le : … <br />
            Nom du client : … <br />
            Adresse du client : … <br />
            Date : … <br />
            Signature (en cas d’envoi papier) : …
          </p>
        </div>

        <h2>9. Cures</h2>
        <p>
          Les cures comprennent de 3 à 12 séances, définies avec le client selon ses besoins. Leur contenu, leur prix
          et leur déroulement sont précisés dans un document signé par les deux parties.
        </p>
        <p>
          Une cure peut être interrompue pour une raison médicale justifiée. En dehors de ce cas et du droit de
          rétractation, les séances non utilisées ne sont pas remboursées.
        </p>

        <h2>10. Bons cadeaux</h2>
        <p>
          Les bons cadeaux sont valables 3 mois à compter de leur achat. Les bons cadeaux achetés lors d’une offre
          promotionnelle sont valables 1 mois, sur la période indiquée sur le bon. La date limite figure sur chaque
          bon.
        </p>
        <p>
          Passé cette date, le bon est perdu : il n’est ni remboursé, ni échangé, ni prolongé. L’acheteur bénéficie du
          droit de rétractation de 14 jours prévu à l’article 8.
        </p>

        <h2>11. Mineurs</h2>
        <ul>
          <li>De 6 mois à 14 ans : la séance a lieu en présence d’un parent, après signature d’un document par celui-ci.</li>
          <li>De 14 à 18 ans : une autorisation écrite d’un parent est nécessaire.</li>
        </ul>

        <h2>12. Santé et contre-indications</h2>
        <p>
          Avant la séance, le client informe {e.nom} de son état de santé : grossesse, traitement, pathologie,
          douleurs ou toute particularité utile. Certaines situations peuvent conduire à adapter, reporter ou refuser
          un soin, notamment :
        </p>
        <ul>
          <li>grossesse de moins de 3 mois, pour les soins du corps ;</li>
          <li>fièvre ;</li>
          <li>troubles cardiaques ou de la circulation sanguine, selon le soin ;</li>
          <li>maladie grave : un avis médical et une décharge signée sont demandés.</li>
        </ul>
        <p>En cas de doute, le client demande l’avis de son médecin avant la séance.</p>

        <h2>13. Assurance</h2>
        <p>
          {e.nom} est assurée en responsabilité civile professionnelle auprès de {e.assurance.assureur} (contrat n°{" "}
          {e.assurance.contrat}), pour la France métropolitaine et les DOM-TOM.
        </p>

        <h2>14. Réclamations</h2>
        <p>
          Toute réclamation peut être adressée à {e.nom} par téléphone au {PHONE_DISPLAY}, par e-mail à{" "}
          <a href={`mailto:${e.email}`}>{e.email}</a> ou par courrier à l’adresse ci-dessus.
        </p>

        <h2>15. Données personnelles</h2>
        <p>
          Les informations recueillies sont traitées conformément à la{" "}
          <Link href="/confidentialite/">politique de confidentialité</Link>.
        </p>

        <h2>16. Droit applicable</h2>
        <p>Les présentes conditions sont soumises au droit français.</p>
      </article>
    </PageInterne>
  );
}
