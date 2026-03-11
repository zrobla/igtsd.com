# Nouveau site IGTSD (autonome)

Ce dossier contient une base de nouveau site independante du site racine.

## Structure
- `index.html`
- `a-propos.html`
- `services.html`
- `contact.html`
- `blog.html`
- `realisations.html`
- pages single services (`*.html`)
- pages articles blog (`blog-*.html`)
- `assets/css/waas-igtsd.css`
- `assets/js/waas-igtsd.js`
- `assets/images/*` (copies locales)

## Principes design appliques
- fond global blanc
- textes noirs
- accents couleurs logo IGTSD (`#017EFF`, `#014E9E`)
- style premium, sobre, corporate

## Source de contenu
Les textes sont inspires des pages a la racine de `igtsd.com` puis recalibres pour le nouveau layout Waas.

## Etape suivante recommandee
Brancher progressivement les contenus longs exacts du site racine dans chaque page single (service/article), puis lancer la passe QA orthographe + responsive.

## Mode de travail valide
- Source (`/igtsd.com` racine): lecture uniquement
- Cible (`/igtsd.com/nouveau-site`): ecriture et implementation
- Methode: importer contenus/layout du prior site, puis adapter au design Waas IGTSD
