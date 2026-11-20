# L'ame agit ô corps — massages-pays-basque.fr

Site de Christelle Georges, massage à domicile au Pays basque.
Next.js 16 (App Router, TypeScript), pages 100 % statiques.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Mettre en ligne (Vercel)

1. Envoyer le dossier sur un dépôt GitHub.
2. Sur vercel.com : « Add New Project », importer le dépôt, laisser les réglages par défaut, « Deploy ».
3. Dans le projet Vercel : Settings › Domains › ajouter `massages-pays-basque.fr`, puis suivre les indications DNS chez le registrar du domaine.

## Où modifier quoi

| Quoi | Fichier |
| --- | --- |
| Textes de l'accueil (Jeff, mot pour mot) | `src/content/accueil.ts` |
| Téléphone, réseaux, liste des pages et des massages | `src/lib/site.ts` |
| Couleurs et typographies | `src/app/globals.css` |
| Une page interne | `src/app/<nom-de-la-page>/page.tsx` |
| Mentions légales / confidentialité | `src/app/mentions-legales/page.tsx`, `src/app/confidentialite/page.tsx` |
| Photos et logo | `public/images/` |

## Fonctionnement des boutons de réservation

- Sur téléphone : appel direct vers Christelle (07 77 25 85 93), et une barre « Appeler » reste fixée en bas de l'écran.
- Sur ordinateur : le bouton se retourne au survol et affiche « Appelle-moi au 07 77 25 85 93 ».
- Sur tablette : le premier toucher retourne le bouton, le second lance l'appel.

## Reste à faire avant la mise en ligne

- Photos des 4 parties de l'accueil (emplacements vides) — à déposer dans `public/images/` puis à renseigner dans `src/content/accueil.ts` (`photo.src`).
- Textes de Jeff pour : À propos, les 4 massages (avec leur tarif), Blog.
- Mentions légales : adresse, SIRET, e-mail, hébergeur (éléments entre crochets).
- Vérifier les droits d'utilisation de la photo du haut de page.
