import { Section } from "./Section";
import styles from "./PageInterne.module.css";

type Props = {
  titre: string;
  /** Contenu de la page. Tant que Jeff n'a pas fourni ses textes, un emplacement est affiché. */
  children?: React.ReactNode;
  /** Couleur de fond de toute la page (par défaut ivoire) */
  fond?: "sauge";
};

/** Gabarit des pages internes : en-tête clair sans photo, grand titre, puis le contenu. */
export function PageInterne({ titre, children, fond }: Props) {
  return (
    <div className={`${styles.page} ${fond ? styles[fond] : ""}`}>
      <div className={styles.intro}>
        <h1 className={styles.title}>{titre}</h1>
      </div>
      {children ?? (
        <Section
          titre="[Titre de Jeff]"
          paragraphes={["[Textes de Jeff à venir]"]}
          photo={{ alt: titre }}
        />
      )}
    </div>
  );
}
