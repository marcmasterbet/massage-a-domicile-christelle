import Image from "next/image";
import Link from "next/link";
import { BRAND, FACEBOOK_URL, INSTAGRAM_URL, NAVIGATION, PHONE_DISPLAY, PHONE_TEL, PRATICIENNE } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={`${BRAND} – accueil`}>
          <Image
            src="/images/logo-lame-agit-o-corps.png"
            alt={`${BRAND} – Massage intuitif et bien-être`}
            width={1200}
            height={382}
            sizes="240px"
          />
        </Link>

        <nav aria-label="Pied de page" className={styles.col}>
          {NAVIGATION.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.col}>
          <a href={PHONE_TEL} className={styles.phone}>
            {PHONE_DISPLAY}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>

        <p className={styles.legal}>
          © 2026 {BRAND} – {PRATICIENNE} · <Link href="/mentions-legales">Mentions légales</Link> ·{" "}
          <Link href="/confidentialite">Confidentialité</Link>
        </p>
      </div>
    </footer>
  );
}
