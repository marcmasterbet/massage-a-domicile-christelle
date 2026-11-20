import type { Metadata } from "next";
import { PageInterne } from "@/components/PageInterne";
import { Faq } from "@/components/Faq";
import { Section } from "@/components/Section";
import { SERVICES } from "@/content/services";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      {SERVICES.map((p, i) => (
        <Section
          key={p.slug}
          id={p.slug}
          titre={p.titre}
          paragraphes={[p.texte]}
          cta={{ label: p.cta }}
          photo={{ alt: p.titre, src: p.photo }}
          fond={i % 2 === 1 ? "sauge" : "ivoire"}
          suivant={i === SERVICES.length - 1 ? "terracotta" : i % 2 === 1 ? "ivoire" : "sauge"}
          inverse={i % 2 === 1}
        >
          {p.faq && <Faq items={p.faq} />}
        </Section>
      ))}
    </PageInterne>
  );
}
