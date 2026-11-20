import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FlipCall } from "@/components/FlipCall";
import { PageInterne } from "@/components/PageInterne";
import { parties, titrePage } from "@/content/a-propos";
import styles from "./a-propos.module.css";

export const metadata: Metadata = {
  title: "À propos – Christelle, praticienne du massage à domicile",
  description:
    "Christelle, praticienne du massage à domicile au Pays basque depuis 2020 : une approche intuitive, de l'écoute et aucun jugement.",
  alternates: { canonical: "/a-propos/" },
};

const portrait = parties[0].photo;

export default function APropos() {
  return (
    <PageInterne titre={titrePage}>
      <div className={styles.page}>
        <figure className={styles.figure}>
          <div className={styles.portrait}>
            {portrait.src && <Image src={portrait.src} alt={portrait.alt} fill sizes="380px" preload />}
          </div>
          {portrait.legende && (
            <figcaption className={styles.legende}>
              {portrait.legende.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </figcaption>
          )}
        </figure>

        <div className={styles.texte}>
          {parties.map((partie, i) => (
            <section key={i} className={styles.partie}>
              {partie.titre && (
                <h2 className={styles.titre}>
                  {partie.titre} {partie.titreAccent && <em>{partie.titreAccent}</em>}
                </h2>
              )}
              {partie.paragraphes.map((p) => {
                const texte = typeof p === "string" ? p : p.texte;
                const style = typeof p === "string" ? "" : styles[p.style];
                return (
                  <p key={texte} className={style}>
                    {texte}
                  </p>
                );
              })}
              {partie.cta.href ? (
                <Link href={partie.cta.href} className={`${styles.ctaWrap} ${styles.cta}`}>
                  {partie.cta.label}
                </Link>
              ) : (
                <FlipCall className={styles.ctaWrap} faceClassName={styles.cta} versoClassName={styles.ctaVerso}>
                  {partie.cta.label}
                </FlipCall>
              )}
            </section>
          ))}
        </div>
      </div>
    </PageInterne>
  );
}
