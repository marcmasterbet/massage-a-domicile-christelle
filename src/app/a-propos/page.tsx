import type { Metadata } from "next";
import { PageInterne } from "@/components/PageInterne";

export const metadata: Metadata = {
  title: "À propos",
  description: "Christelle, praticienne du bien-être, massages à domicile au Pays basque depuis 2020.",
  alternates: { canonical: "/a-propos" },
};

export default function APropos() {
  return <PageInterne titre="À propos" />;
}
