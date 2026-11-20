import Image from "next/image";
import Link from "next/link";
import { FlipCall } from "./FlipCall";
import styles from "./Section.module.css";

type Props = {
  id?: string;
  titre: string;
  titreAccent?: string;
  paragraphes: string[];
  cta?: { label: string; href?: string };
  photo: { alt: string; src?: string };
  fond?: "ivoire" | "sauge" | "sable";
  /** Photo à gauche, texte à droite */
  inverse?: boolean;
};

/** Une partie de page : une photo et un texte, rien de plus. */
export function Section({ id, titre, titreAccent, paragraphes, cta, photo, fond = "ivoire", inverse }: Props) {
  return (
    <section id={id} className={`${styles.section} ${styles[fond]}`}>
      <div className={`${styles.inner} ${inverse ? styles.inverse : ""}`}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            {titre} {titreAccent && <em>{titreAccent}</em>}
          </h2>
          {paragraphes.map((p) => (
            <p key={p} className={styles.paragraph}>
              {p}
            </p>
          ))}
          {cta &&
            (cta.href ? (
              <Link href={cta.href} className={`${styles.ctaWrap} ${styles.cta}`}>
                {cta.label}
              </Link>
            ) : (
              <FlipCall className={styles.ctaWrap} faceClassName={styles.cta} versoClassName={styles.ctaVerso}>
                {cta.label}
              </FlipCall>
            ))}
        </div>

        <div className={styles.photo}>
          {photo.src ? (
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 100vw, 420px" />
          ) : (
            <div className={styles.placeholder} role="img" aria-label={`Photo à venir : ${photo.alt}`} />
          )}
        </div>
      </div>
    </section>
  );
}
