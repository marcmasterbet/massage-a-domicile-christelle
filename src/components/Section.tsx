import Image from "next/image";
import Link from "next/link";
import { FlipCall } from "./FlipCall";
import styles from "./Section.module.css";

/** Affiche *texte entre astérisques* en italique */
function enLigne(texte: string) {
  return texte.split(/\*(.+?)\*/g).map((morceau, i) => (i % 2 === 1 ? <em key={i}>{morceau}</em> : morceau));
}

export type Paragraphe = string | { texte: string; style: "fort" | "citation" | "signature" };

type Props = {
  id?: string;
  titre?: string;
  titreAccent?: string;
  paragraphes: Paragraphe[];
  cta?: { label: string; href?: string };
  photo: { alt: string; src?: string; rond?: boolean; legende?: string[] };
  fond?: "ivoire" | "sauge" | "sable";
  /** Couleur du bloc suivant : le bas du bloc s'y fond progressivement */
  suivant?: "ivoire" | "sauge" | "sable" | "terracotta";
  /** Photo à gauche, texte à droite */
  inverse?: boolean;
  /** Contenu ajouté sous le texte (ex. FAQ) */
  children?: React.ReactNode;
};

/** Une partie de page : une photo et un texte, rien de plus. */
export function Section({
  id,
  titre,
  titreAccent,
  paragraphes,
  cta,
  photo,
  fond = "ivoire",
  suivant,
  inverse,
  children,
}: Props) {
  const style = suivant ? ({ "--suivant": `var(--${suivant})` } as React.CSSProperties) : undefined;
  return (
    <section id={id} className={`${styles.section} ${styles[fond]}`} style={style}>
      <div className={`${styles.inner} ${inverse ? styles.inverse : ""}`}>
        <div className={styles.text}>
          {titre && (
            <h2 className={styles.title}>
              {titre} {titreAccent && <em>{titreAccent}</em>}
            </h2>
          )}
          {paragraphes.map((p) => {
            const texte = typeof p === "string" ? p : p.texte;
            const style = typeof p === "string" ? "" : styles[p.style];
            return (
              <p key={texte} className={`${styles.paragraph} ${style}`}>
                {enLigne(texte)}
              </p>
            );
          })}
          {cta &&
            (cta.href ? (
              <Link href={cta.href} className={`${styles.ctaWrap} ${styles.cta} ${styles.ctaRecto}`}>
                {cta.label}
              </Link>
            ) : (
              <FlipCall
                className={styles.ctaWrap}
                faceClassName={styles.cta}
                rectoClassName={styles.ctaRecto}
                versoClassName={styles.ctaVerso}
              >
                {cta.label}
              </FlipCall>
            ))}
          {children}
        </div>

        {photo.legende ? (
          <figure className={styles.figure}>
            <div className={`${styles.photo} ${photo.rond ? styles.rond : ""}`}>
              {photo.src && <Image src={photo.src} alt={photo.alt} fill sizes="400px" />}
            </div>
            <figcaption className={styles.legende}>
              {photo.legende.map((ligne) => (
                <span key={ligne}>{ligne}</span>
              ))}
            </figcaption>
          </figure>
        ) : (
          <div className={`${styles.photo} ${photo.rond ? styles.rond : ""} ${photo.src ? "" : styles.vide}`}>
            {photo.src ? (
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 100vw, 420px" />
            ) : (
              <div className={styles.placeholder} role="img" aria-label={`Photo à venir : ${photo.alt}`} />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
