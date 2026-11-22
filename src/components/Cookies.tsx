"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CLE_CONSENTEMENT, DUREE_CHOIX_MS, EVENEMENT_OUVRIR, GA_ID } from "@/lib/consentement";
import styles from "./Cookies.module.css";

type Choix = "accepte" | "refuse";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function lireChoix(): Choix | null {
  try {
    const brut = localStorage.getItem(CLE_CONSENTEMENT);
    if (!brut) return null;
    const { choix, date } = JSON.parse(brut) as { choix: Choix; date: number };
    if (Date.now() - date > DUREE_CHOIX_MS) return null;
    return choix;
  } catch {
    return null;
  }
}

function enregistrerChoix(choix: Choix) {
  try {
    localStorage.setItem(CLE_CONSENTEMENT, JSON.stringify({ choix, date: Date.now() }));
  } catch {
    /* stockage indisponible : le bandeau reviendra à la prochaine visite */
  }
}

function chargerAnalytics() {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { cookie_expires: 13 * 30 * 24 * 60 * 60 });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

function effacerCookiesAnalytics() {
  const domaines = [location.hostname, `.${location.hostname}`, `.${location.hostname.split(".").slice(-2).join(".")}`];
  document.cookie.split(";").forEach((c) => {
    const nom = c.split("=")[0].trim();
    if (nom === "_ga" || nom.startsWith("_ga_")) {
      domaines.forEach((d) => {
        document.cookie = `${nom}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
      });
      document.cookie = `${nom}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  });
}

export function Cookies() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choix = lireChoix();
    if (choix === "accepte") chargerAnalytics();
    else if (choix === null) setVisible(true);

    const ouvrir = () => setVisible(true);
    window.addEventListener(EVENEMENT_OUVRIR, ouvrir);
    return () => window.removeEventListener(EVENEMENT_OUVRIR, ouvrir);
  }, []);

  function choisir(choix: Choix) {
    const avant = lireChoix();
    enregistrerChoix(choix);
    setVisible(false);
    if (choix === "accepte") chargerAnalytics();
    else if (avant === "accepte") {
      effacerCookiesAnalytics();
      location.reload();
    }
  }

  if (!visible) return null;

  return (
    <div className={styles.bandeau} role="dialog" aria-live="polite" aria-label="Cookies">
      <p className={styles.texte}>
        Avec ton accord, ce site utilise des cookies de mesure d’audience (Google Analytics) pour savoir combien de
        personnes le visitent. Aucune publicité.{" "}
        <Link href="/confidentialite/#cookies">En savoir plus</Link>
      </p>
      <div className={styles.boutons}>
        <button type="button" className={styles.bouton} onClick={() => choisir("refuse")}>
          Refuser
        </button>
        <button type="button" className={styles.bouton} onClick={() => choisir("accepte")}>
          Accepter
        </button>
      </div>
    </div>
  );
}

export function GererCookies({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(EVENEMENT_OUVRIR))}
    >
      Cookies
    </button>
  );
}
