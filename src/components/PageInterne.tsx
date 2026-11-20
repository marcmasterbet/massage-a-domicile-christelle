import { Hero } from "./Hero";
import { Section } from "./Section";
import styles from "./PageInterne.module.css";

type Props = {
  titre: string;
  /** Contenu de la page. Tant que Jeff n'a pas fourni ses textes, un emplacement est affiché. */
  children?: React.ReactNode;
};

/** Gabarit des pages internes : bandeau photo + titre, puis le contenu. */
export function PageInterne({ titre, children }: Props) {
  return (
    <>
      <Hero variante="page">
        <h1 className={styles.title}>{titre}</h1>
      </Hero>
      {children ?? (
        <Section
          titre="[Titre de Jeff]"
          paragraphes={["[Textes de Jeff à venir]"]}
          photo={{ alt: titre }}
        />
      )}
    </>
  );
}
