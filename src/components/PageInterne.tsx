import { Section } from "./Section";
import styles from "./PageInterne.module.css";

type Props = {
  titre: React.ReactNode;
  /** Contenu de la page. Tant que Jeff n'a pas fourni ses textes, un emplacement est affiché. */
  children?: React.ReactNode;
  /** Couleur de fond de toute la page (par défaut ivoire) */
  fond?: "sauge";
  /** Titre lu par Google mais non affiché */
  titreMasque?: boolean;
  /** Ordinateur : marges réduites (aligné sur un contenu plus large) */
  large?: boolean;
};

/** Gabarit des pages internes : en-tête clair sans photo, grand titre, puis le contenu. */
export function PageInterne({ titre, children, fond, titreMasque, large }: Props) {
  return (
    <div className={`${styles.page} ${fond ? styles[fond] : ""}`}>
      {titreMasque ? (
        <div className={styles.introMasque}>
          <h1 className="sr-only">{titre}</h1>
        </div>
      ) : (
        <div className={`${styles.intro} ${large ? styles.large : ""}`}>
          <h1 className={styles.title}>{titre}</h1>
        </div>
      )}
      {children ?? (
        <Section
          titre="[Titre de Jeff]"
          paragraphes={["[Textes de Jeff à venir]"]}
          photo={{ alt: typeof titre === "string" ? titre : "" }}
        />
      )}
    </div>
  );
}
