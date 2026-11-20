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
    <PageInterne titre="Blog" fond="sauge">
      <div className={styles.list}>
        {ARTICLES.map((a) => (
          <Link key={a.slug} href={`/blog/${a.slug}/`} className={styles.card}>
            <h2 className={styles.cardTitle}>{a.titre}</h2>
            <p className={styles.cardExcerpt}>{a.blocs[0]?.paragraphes[0]}</p>
            <span className={styles.cardMore} aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>
    </PageInterne>
  );
}
