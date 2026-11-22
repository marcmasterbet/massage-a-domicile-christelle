import type { Metadata } from "next";
import Link from "next/link";
import { PageInterne } from "@/components/PageInterne";
import { ARTICLES } from "@/content/blog";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Le blog de Christelle, praticienne du massage à domicile au Pays basque.",
  alternates: { canonical: "/blog/" },
};

export default function Blog() {
  return (
    <PageInterne
      fond="sauge"
      titre={
        <span className={styles.titrePage}>
          Mes conseils pour mieux comprendre les massages, leurs bienfaits et choisir le soin qui te ressemble.
        </span>
      }
    >
      <div className={styles.list}>
        {ARTICLES.map((a) => (
          <Link key={a.slug} href={`/blog/${a.slug}/`} className={styles.card}>
            <h2 className={styles.cardTitle}>{a.titre}</h2>
            <span className={styles.cardMore}>Lire la suite</span>
          </Link>
        ))}
      </div>
    </PageInterne>
  );
}
