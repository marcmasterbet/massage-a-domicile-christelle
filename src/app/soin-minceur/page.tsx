import type { Metadata } from "next";
import { PageInterne } from "@/components/PageInterne";

export const metadata: Metadata = {
  title: "Soin minceur",
  description: "Soin minceur à domicile au Pays basque : Bayonne, Anglet, Biarritz, Saint-Pierre-d’Irube et Tarnos.",
  alternates: { canonical: "/soin-minceur/" },
};

export default function SoinMinceur() {
  return <PageInterne titre="Soin minceur" />;
}
