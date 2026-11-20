import Image from "next/image";
import Link from "next/link";
import {
  BRAND,
  HORAIRES,
  PHONE_DISPLAY,
  PHONE_TEL,
  PRATICIENNE,
  PRESTATIONS,
} from "@/lib/site";
import { FlipCall } from "./FlipCall";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label={`${BRAND} – accueil`}>
            <Image
              src="/images/logo-lame-agit-o-corps.png"
              alt={`${BRAND} – Massage intuitif et bien-être`}
              width={1200}
              height={382}
              sizes="180px"
            />
          </Link>
          <p className={styles.horaires}>{HORAIRES}</p>
          <FlipCall className={styles.reserveWrap} faceClassName={styles.reserve} versoClassName={styles.reserveVerso}>
            Réserver
          </FlipCall>
        </div>

        <nav id="les-massages" className={styles.col} aria-label="Les massages">
          <p className={styles.heading}>Les massages</p>
          {PRESTATIONS.map((p) => (
            <Link key={p.slug} href={`/services/#${p.slug}`}>
              {p.nom}
            </Link>
          ))}
        </nav>

        <nav className={styles.col} aria-label="Le site">
          <p className={styles.heading}>Le site</p>
          <Link href="/">Accueil</Link>
          <Link href="/a-propos/">À propos</Link>
          <Link href="/blog/">Blog</Link>
        </nav>

        <div className={styles.col}>
          <p className={styles.heading}>Contact</p>
          <a href={PHONE_TEL} className={styles.phone}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © 2026 {BRAND} – {PRATICIENNE}
        </p>
        <p>
          <Link href="/mentions-legales/">Mentions légales</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/confidentialite/">Confidentialité</Link>
        </p>
      </div>
    </footer>
  );
}
