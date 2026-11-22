import type { Metadata } from "next";
import { PageInterne } from "@/components/PageInterne";
import { Faq } from "@/components/Faq";
import { Section } from "@/components/Section";
import { SERVICES, TARIFS } from "@/content/services";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services – massages à domicile",
  description:
    "Massage relaxant et intuitif, massage prénatal et postnatal, soin minceur et soin liftant japonais du visage, à domicile au Pays basque.",
  alternates: { canonical: "/services/" },
};

// Les 4 prestations sur une seule page — textes de Jeff (src/content/services.ts).
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SERVICES.flatMap((s) => s.faq ?? []).map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.reponse },
  })),
};

export default function Services() {
  return (
    <PageInterne titre="Services" titreMasque>
      {SERVICES.map((p, i) => (
        <Section
          key={p.slug}
          id={p.slug}
          titre={p.titre}
          paragraphes={p.paragraphes}
          cta={{ label: p.cta }}
          photo={{ alt: p.titre, src: p.photo }}
          fond={i % 2 === 1 ? "sauge" : "ivoire"}
          suivant={i % 2 === 1 ? "ivoire" : "sauge"}
          inverse={i % 2 === 1}
        >
          {p.faq && <Faq items={p.faq} />}
        </Section>
      ))}

      <section id="tarifs" className={styles.tarifs}>
        <div className={styles.tarifsInner}>
          <h2 className={styles.tarifsTitre}>{TARIFS.titre}</h2>
          <p className={styles.tarifsIntro}>{TARIFS.intro}</p>
          <ul className={styles.liste}>
            {TARIFS.lignes.map((l) => (
              <li key={l.duree} className={styles.ligne}>
                <span className={styles.duree}>{l.duree}</span>
                <span className={styles.prix}>{l.prix}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
    </PageInterne>
  );
}
