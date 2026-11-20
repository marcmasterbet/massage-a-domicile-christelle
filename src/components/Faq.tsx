import type { QuestionReponse } from "@/content/services";
import styles from "./Faq.module.css";

/** Questions fréquentes : seule la question est visible, la réponse se déroule au clic. */
export function Faq({ items }: { items: QuestionReponse[] }) {
  return (
    <div className={styles.faq}>
      {items.map((item) => (
        <details key={item.question} className={styles.item}>
          <summary className={styles.question}>
            <span>{item.question}</span>
            <svg className={styles.icon} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </summary>
          <p className={styles.reponse}>{item.reponse}</p>
        </details>
      ))}
    </div>
  );
}
