import Image from "next/image";
import styles from "./Hero.module.css";

type Props = {
  /** "accueil" : plein écran ; "page" : bandeau plus court pour les pages internes */
  variante?: "accueil" | "page";
  image?: string;
  children: React.ReactNode;
};

/** Haut de page : photo noir et blanc fixe au défilement, avec zoom lent. */
export function Hero({ variante = "accueil", image = "/images/massage-mains.jpg", children }: Props) {
  return (
    <section className={`${styles.hero} ${variante === "page" ? styles.page : ""}`}>
      <div className={styles.media} aria-hidden="true">
        <div className={styles.fixed}>
          <Image
            src={image}
            alt=""
            fill
            preload
            sizes="100vw"
            className={styles.zoom}
          />
        </div>
      </div>
      <div className={styles.scrim} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
    </section>
  );
}
