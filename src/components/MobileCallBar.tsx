import { PHONE_TEL } from "@/lib/site";
import styles from "./MobileCallBar.module.css";

/** Barre fixe en bas de l'écran, visible uniquement sur téléphone. */
export function MobileCallBar() {
  return (
    <div className={styles.bar}>
      <a href={PHONE_TEL} className={styles.call}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 3h3.5l1.8 4.6-2.3 1.5a11 11 0 0 0 6.9 6.9l1.5-2.3L21 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
        Appeler
      </a>
    </div>
  );
}
