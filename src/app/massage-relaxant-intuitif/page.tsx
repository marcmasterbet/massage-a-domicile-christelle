import type { Metadata } from "next";
import { PageInterne } from "@/components/PageInterne";

export const metadata: Metadata = {
  title: "Massage relaxant et intuitif",
  description: "Massage relaxant et intuitif à domicile au Pays basque : Bayonne, Anglet, Biarritz, Saint-Pierre-d’Irube et Tarnos.",
  alternates: { canonical: "/massage-relaxant-intuitif/" },
};

export default function MassageRelaxantIntuitif() {
  return <PageInterne titre="Massage relaxant et intuitif" />;
}
