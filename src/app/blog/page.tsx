import type { Metadata } from "next";
import { PageInterne } from "@/components/PageInterne";

export const metadata: Metadata = {
  title: "Blog",
  description: "Le blog de Christelle, praticienne du bien-être au Pays basque.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return <PageInterne titre="Blog" />;
}
