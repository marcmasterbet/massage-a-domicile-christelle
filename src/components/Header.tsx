"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND, NAVIGATION, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { FlipCall } from "./FlipCall";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Referme le menu mobile à chaque changement de page
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={styles.header} data-theme={pathname === "/" ? "photo" : "clair"}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={`${BRAND} – accueil`}>
          <Image
            src="/images/logo-lame-agit-o-corps.png"
            alt={`${BRAND} – Massage intuitif et bien-être`}
            width={1200}
            height={382}
            preload
            sizes="200px"
          />
        </Link>

        <nav className={styles.nav} aria-label="Navigation principale">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.link}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <FlipCall faceClassName={styles.reserve} versoClassName={styles.reserveVerso} verso={PHONE_DISPLAY}>
            Réserver
          </FlipCall>
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((o) => !o)}
        >
          Menu
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M4 1 L18 13 M18 1 L4 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M1 1 H21 M1 7 H21 M1 13 H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="menu-mobile"
        className={styles.mobileMenu}
        data-open={menuOpen}
        aria-label="Navigation mobile"
        hidden={!menuOpen}
      >
        {NAVIGATION.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a href={PHONE_TEL} className={styles.mobileReserve}>
          Réserver
        </a>
      </nav>
    </header>
  );
}
