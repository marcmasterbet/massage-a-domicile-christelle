"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import styles from "./FlipCall.module.css";

/** Vrai sur un téléphone : on appelle directement, sans retourner le bouton. */
function isPhone() {
  if (typeof window === "undefined") return false;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  return coarse && Math.min(window.screen.width, window.screen.height) < 600;
}

function canHover() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

type Props = {
  /** Texte du recto (le CTA) */
  children: React.ReactNode;
  /** Texte du verso ; par défaut « Appelle-moi au 07 77 25 85 93 » */
  verso?: React.ReactNode;
  /** Style commun aux deux faces (forme, taille) */
  faceClassName?: string;
  /** Style propre au recto / au verso (couleurs) */
  rectoClassName?: string;
  versoClassName?: string;
  className?: string;
};

/**
 * Bouton d'appel.
 * - Téléphone : appelle Christelle directement.
 * - Ordinateur : se retourne au survol et affiche le numéro ; un clic lance l'appel (FaceTime, Teams…).
 * - Tablette : le premier toucher retourne le bouton, le second appelle.
 */
export function FlipCall({ children, verso, faceClassName = "", rectoClassName = "", versoClassName = "", className = "" }: Props) {
  const [flipped, setFlipped] = useState(false);
  const versoContent = verso ?? (
    <>
      Appelle-moi au{" "}
      <span className={styles.nowrap} data-numero="">
        {PHONE_DISPLAY}
      </span>
    </>
  );

  return (
    <a
      href={PHONE_TEL}
      className={`${styles.flip} ${className}`}
      data-flipped={flipped}
      aria-label={`${typeof children === "string" ? children + " – " : ""}appeler le ${PHONE_DISPLAY}`}
      onMouseEnter={() => canHover() && setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onClick={(e) => {
        if (isPhone()) return; // appel direct
        if (!flipped) {
          e.preventDefault();
          setFlipped(true);
        }
      }}
    >
      <span className={styles.inner}>
        <span className={`${styles.face} ${faceClassName} ${rectoClassName}`}>{children}</span>
        <span className={`${styles.face} ${styles.verso} ${faceClassName} ${versoClassName}`} aria-hidden="true">
          <span className={styles.texte}>{versoContent}</span>
        </span>
      </span>
    </a>
  );
}
