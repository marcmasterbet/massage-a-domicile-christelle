import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FlipCall } from "@/components/FlipCall";
import { ARTICLES, getArticle } from "@/content/blog";
import { BRAND, PRATICIENNE, SITE_URL } from "@/lib/site";
import styles from "../blog.module.css";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: { absolute: article.seoTitle },
    description: article.seoDescription,
    alternates: { canonical: `/blog/${article.slug}/` },
    openGraph: {
      type: "article",
      title: article.titre,
      description: article.seoDescription,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.titre,
    description: article.seoDescription,
    datePublished: article.date,
    author: { "@type": "Person", name: PRATICIENNE },
    publisher: { "@type": "Organization", name: BRAND },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}/`,
    inLanguage: "fr-FR",
  };

  return (
    <article className={styles.article}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <header className={styles.articleHeader}>
        <Link href="/blog/" className={styles.back}>
          ← Blog
        </Link>
        <h1 className={styles.articleTitle}>{article.titre}</h1>
      </header>

      <div className={styles.body}>
        {article.blocs.map((bloc, i) => (
          <section key={i} className={i === 0 ? styles.intro : undefined}>
            {bloc.titre && <h2>{bloc.titre}</h2>}
            {bloc.paragraphes.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}

        <FlipCall className={styles.ctaWrap} faceClassName={styles.cta} versoClassName={styles.ctaVerso}>
          {article.cta}
        </FlipCall>
      </div>
    </article>
  );
}
