import type { Metadata } from "next";
import { PageInterne } from "@/components/PageInterne";

export const metadata: Metadata = {
  title: "Massage prénatal et postnatal",
  description: "Massage prénatal et postnatal à domicile au Pays basque : Bayonne, Anglet, Biarritz, Saint-Pierre-d’Irube et Tarnos.",
  alternates: { canonical: "/massage-prenatal-postnatal" },
};

export default function MassagePrenatalPostnatal() {
  return <PageInterne titre="Massage prénatal et postnatal" />;
}
