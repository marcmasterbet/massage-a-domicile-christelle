import type { Metadata } from "next";
import { PageInterne } from "@/components/PageInterne";

export const metadata: Metadata = {
  title: "Soin liftant japonais du visage",
  description: "Soin liftant japonais du visage à domicile au Pays basque : Bayonne, Anglet, Biarritz, Saint-Pierre-d’Irube et Tarnos.",
  alternates: { canonical: "/soin-liftant-japonais-visage" },
};

export default function SoinLiftantJaponaisVisage() {
  return <PageInterne titre="Soin liftant japonais du visage" />;
}
