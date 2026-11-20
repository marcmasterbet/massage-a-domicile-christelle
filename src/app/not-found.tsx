import Link from "next/link";
import styles from "@/components/Legal.module.css";
import { PageInterne } from "@/components/PageInterne";

export default function NotFound() {
  return (
    <PageInterne titre="Page introuvable">
      <div className={styles.legal}>
        <p>
          <Link href="/">Retour à l’accueil</Link>
        </p>
      </div>
    </PageInterne>
  );
}
