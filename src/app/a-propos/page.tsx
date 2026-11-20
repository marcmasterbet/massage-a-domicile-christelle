import type { Metadata } from "next";
import { PageInterne } from "@/components/PageInterne";
import { Section } from "@/components/Section";
import { parties, titrePage } from "@/content/a-propos";

export const metadata: Metadata = {
  title: "À propos – Christelle, praticienne du massage à domicile",
  description:
    "Christelle, praticienne du massage à domicile au Pays basque depuis 2020 : une approche intuitive, de l'écoute et aucun jugement.",
  alternates: { canonical: "/a-propos" },
};

export default function APropos() {
  return (
    <PageInterne titre={titrePage}>
      {parties.map((partie, i) => (
        <Section key={i} {...partie} inverse={i % 2 === 1} />
      ))}
    </PageInterne>
  );
}
