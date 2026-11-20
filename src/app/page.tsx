import { FlipCall } from "@/components/FlipCall";
import { Hero } from "@/components/Hero";
import heroStyles from "@/components/HomeHero.module.css";
import { Section } from "@/components/Section";
import { hero, parties } from "@/content/accueil";

export default function Accueil() {
  return (
    <>
      <Hero>
        <h1 className={heroStyles.title}>
          <span className={heroStyles.surtitre}>{hero.surtitre}</span>
          <span className={heroStyles.titre}>
            {hero.titre} <em>{hero.titreAccent}</em>
          </span>
        </h1>
        <p className={heroStyles.accroche}>{hero.accroche}</p>
        <p className={heroStyles.texte}>{hero.texte}</p>
        <FlipCall className={heroStyles.ctaWrap} faceClassName={heroStyles.cta} versoClassName={heroStyles.ctaVerso}>
          {hero.cta}
        </FlipCall>
      </Hero>

      {parties.map((partie, i) => (
        <Section
          key={partie.titre}
          {...partie}
          suivant={parties[i + 1]?.fond ?? "terracotta"}
          inverse={i % 2 === 1}
        />
      ))}
    </>
  );
}
