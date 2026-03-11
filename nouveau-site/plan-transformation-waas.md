# Plan de transformation IGTSD vers nouveau site (mode Waas)

## 1) Objet du dossier
Ce dossier centralise le plan complet de transformation du site `igtsd.com` vers une version modernisee inspiree de l'approche Waas, avec execution controlee, mesurable et reversible.

## 2) Decision design validee (direction artistique)
Le nouveau site IGTSD devra respecter ces regles non negociables:

- Fond global du site: **blanc** (comme le Waas GWIT)
- Textes de contenu: **noir** (lisibilite forte)
- Couleurs de marque: usage prioritaire des **couleurs du logo IGTSD**
- Design global: **premium, sobre, corporate**
- Cartes et sections: style elegant, propre, sans surcharge visuelle

## 3) Objectifs business et techniques
- Moderniser UX desktop/mobile/tablette
- Clarifier l'offre telecom, energie, genie civil et services associes
- Corriger incoherences editoriales (marque, orthographe, accents, terminologie)
- Renforcer SEO on-page (title, description, canonical, H1, schema)
- Reduire la dette front (inline styles, duplications, composants heterogenes)
- Standardiser la structure pour maintenance long terme

## 4) Perimetre
### Phase coeur (prioritaire)
- `index.html`
- `services.html`
- `a-propos.html`
- `contact.html`
- `blog.html`

### Phase extension
- pages services detaillees
- pages articles blog
- pages heritage/template a depolluer ou decommissionner

## 5) Principes de transformation
- Migration progressive, pas de bascule brutale globale
- Chaque lot doit etre livrable et testable
- Aucune regression visuelle majeure sur pages critiques
- Cohabitation temporaire possible entre ancien et nouveau, avec plan de retrait du legacy

## 6) Guide visuel cible (premium corporate)
### 6.1 Fond et couleurs
- `body`: blanc pur ou blanc casse tres leger
- Texte principal: noir profond
- Texte secondaire: gris corporate discret
- Accent 1: couleur principale logo IGTSD
- Accent 2: couleur secondaire logo IGTSD
- CTA primaire: couleur logo principale
- CTA secondaire: contour neutre + hover marque

### 6.2 Cartes
- Fond carte: blanc
- Bordure fine subtile (gris clair)
- Ombre douce non agressive
- Radius modere (style corporate)
- Hover sobre: legere elevation, pas d'effet excessif

### 6.3 Titres et contenus
- H1/H2/H3 lisibles et hierarchises
- Sous-titres de section harmonises
- Paragraphes noirs/gris fonce, interlignage confortable
- Badges/pills utilises avec moderation

### 6.4 Composants UX
- Header fixe stable
- Navigation claire et consistente
- Hero propre, lisible, orientee valeur metier
- Footer restructure et aligne avec l'identite IGTSD

## 7) Architecture front cible
### CSS (couches)
- `tokens.css` (couleurs, typo, espaces, ombres)
- `base.css` (reset, typographie globale)
- `layout.css` (containers, grilles, section spacing)
- `components.css` (cards, buttons, nav, forms)
- `pages/*.css` (ajustements minimaux par page)

### JS (modules)
- `header.js`
- `hero.js`
- `filters.js`
- `forms.js`
- `ui-effects.js` (effets sobres uniquement)

## 8) Plan de travail par phases

### Phase 0 - Cadrage
- Inventaire complet pages/assets
- Cartographie des composants
- Validation palette logo IGTSD et tokens
- Validation priorites business

### Phase 1 - Baseline et securisation
- Captures baseline desktop/tablette/mobile
- Gel des changements non critiques
- Point de controle Git avant migration

### Phase 2 - Fondation design system
- Mise en place fond blanc global
- Mise en place textes noirs globaux
- Injection palette logo IGTSD dans tokens
- Standardisation typographie et espacement

### Phase 3 - Migration des pages coeur
- Refonte `index.html`
- Refonte `services.html`
- Refonte `a-propos.html`
- Refonte `contact.html`
- Refonte `blog.html`

### Phase 4 - Migration extension
- Pages services detail
- Pages services detail: mention explicite des partenariats structurants (ex: Midwex) quand ils supportent une offre service
- Pages services detail: detail technique attendu (perimetre, outillage, livrables, cibles metier)
- Pages articles
- Retrait/cleanup des pages heritage

### Phase 5 - Qualite et coherence
- Correction orthographe/accents globale
- Uniformisation vocabulaire metier
- Verification contraste/accessibilite
- Validation responsive complete

### Phase 6 - SEO et publication
- Title/description uniques
- Canonical sur toutes pages indexables
- H1 unique par page
- Schema.org pertinent
- Sitemap/robots verifies
- Publication progressive

## 9) Instructions editoriales
- Ton: B2B telecom, factuel, orientee resultats
- Uniformiser marque en `IGTSD` partout
- Eviter surpromesses marketing
- Mettre en avant preuves: livrables, KPI, impact
- Supprimer les traces de templates generiques non IGTSD

## 10) Regles UI/UX strictes
- Priorite lisibilite (fond blanc, texte noir)
- Pas de gradient agressif en fond global
- Pas de glow excessif
- Animations limitees et elegantes
- Cohesion des cartes sur tout le site

## 11) Definition of Done (DoD)
Une page est terminee si:
- Layout conforme au modele cible
- Fond blanc + texte noir correctement appliques
- Couleurs logo IGTSD integrees aux accents
- Responsive valide (mobile/tablette/desktop)
- Orthographe et accents verifies
- SEO minimal valide (title, description, H1, canonical)
- Pas d'erreurs console bloquantes

## 12) KPI de suivi
- % pages migrees
- % pages SEO conformes
- # fautes editoriales corrigees
- # styles inline elimines
- Taille assets optimisee
- Score de coherence visuelle

## 13) Risques et mitigation
- Regression visuelle
  - Mitigation: baseline + validation par lot
- Dette CSS persistante
  - Mitigation: architecture en couches + nettoyage legacy
- Incoherence marque/contenu
  - Mitigation: checklist editoriale stricte
- Delais
  - Mitigation: priorisation pages coeur

## 14) Ordre de realisation recommande
1. `index.html`
2. `services.html`
3. `a-propos.html`
4. `contact.html`
5. `blog.html`
6. pages services detail
7. pages articles

## 15) Livrables
- Nouveau front IGTSD premium corporate
- Documentation de migration
- Historique Git propre par lots
- Rapport final de recette et conformite

## 16) Gouvernance de travail
- Commits petits et thematiques
- Validation visuelle avant push
- Un compte-rendu de progression par phase
- Aucune suppression destructive sans validation

## 17) Prochaine action immediate
Demarrer la phase 0 avec une matrice de migration detaillee:
`source -> cible -> composant -> statut -> priorite -> risque`.

## 18) Mapping exact GWIT Waas -> IGTSD (adapte couleurs + contenus IGTSD)

### 18.1 Palette IGTSD (source: logo IGTSD)
Tokens a appliquer dans le nouveau site:

- `--bg-page`: `#FFFFFF` (fond global)
- `--text-main`: `#000000` (texte principal)
- `--brand-primary`: `#017EFF` (bleu logo)
- `--brand-primary-dark`: `#014E9E` (bleu profond logo)
- `--brand-border`: `#D9E7F7` (bordures/subtil)
- `--text-muted`: `#4B5563` (texte secondaire)

Regles directes:
- Bouton primaire: fond `--brand-primary`, texte blanc
- Hover primaire: fond `--brand-primary-dark`
- Titres de section: texte noir + underliner `--brand-primary`
- Cartes: fond blanc, bordure fine `--brand-border`, ombre douce
- Aucun gradient agressif sur le fond global

### 18.2 Mapping layout (composant par composant)
| GWIT Waas (reference) | Nouveau IGTSD (cible) | Adaptation couleur | Adaptation contenu IGTSD |
|---|---|---|---|
| Header premium fixe | Header corporate fixe | fond blanc, actif/hover en bleu logo | menu: Accueil, A propos, Services, Realisations, Blog, Contact |
| Hero premium (slides + CTA) | Hero corporate multi-slides | overlay sobre, CTA bleu logo | promesse IGTSD: ingenierie, deploiement, fibre, energie |
| Feature bar KPI | Bande KPI IGTSD | cartes blanches bordees bleu | chiffres IGTSD (projets, couverture, disponibilite, delais) |
| Section Qui sommes-nous | Section A propos IGTSD | titre noir + trait bleu | ADN IGTSD, experience terrain, gouvernance projet |
| Section Nos services (cards) | Grille services IGTSD | cartes blanches premium, icones bleues | ingenierie, deploiement, fibre, acquisition, MOD, solutions energetiques, devoiement + benchmarking QoS/QoE/Drive Test |
| Section Pourquoi nous | Section Avantages IGTSD | cards sobres, accent bleu | qualite execution, compliance, HSE, maitrise delais/couts |
| Section partenaires | Section partenaires IGTSD | conteneurs blancs + bordure bleu subtil | logos Orange, MTN, Ageroute, ASECNA, STA, etc. |
| Section use cases | Section realisations / cas clients | cartes blanches + CTA bleu | projets telecom/fibre/GC/energie executes |
| Section ressources/blog | Blog & Ressources IGTSD | filtres sobres, badges bleus | analyses operationnelles telecom & infrastructure |
| Carte contact express | Contact corporate | blocs blancs, textes noirs, CTA bleu | telephone, email, adresse, map, demande briefing |
| Footer premium | Footer corporate IGTSD | fond blanc ou bleu profond controle | baseline de marque, liens utiles, canaux directs |

### 18.3 Mapping contenus (de GWIT vers IGTSD)
Recalage obligatoire des contenus pour eviter le copier-coller metier:

- Focus GWIT actuel (telecom + IT/SOC/NOC) -> Focus IGTSD (telecom + fibre + genie civil + energie)
- Remplacer occurrences non centrales pour IGTSD (`SOC/NOC`, `DevSecOps`, etc.) par contenus coeur IGTSD quand non pertinents
- Conserver une logique KPI/livrables, mais avec preuves IGTSD:
  - etudes de faisabilite
  - deploiement terrain
  - DOE / as-built / acceptance
  - supervision et maintenance
  - HSE / conformite / qualite d'execution

### 18.4 Mapping pages (source -> cible)
- `index.html` -> nouvelle homepage Waas-like IGTSD (fond blanc, texte noir, accents bleus logo)
- `services.html` -> hub services IGTSD en cartes premium sobres
- `ingenierie-reseaux-supervision.html` -> ajouter le volet partenariat benchmarking (Midwex) avec details service et livrables
- `a-propos.html` -> storytelling corporate + preuves d'execution
- `contact.html` -> formulaire + canaux directs + geolocalisation
- `blog.html` -> hub articles/analyses IGTSD, structuree SEO

### 18.5 Contraintes de coherence
- Une seule palette de marque IGTSD partout
- Meme traitement des titres de section sur toutes pages
- Meme systeme de boutons sur toutes pages
- Meme grille et espacement sur toutes pages
- Meme logique de cartes (fond blanc + bordure + ombre douce)

### 18.6 Checklist de validation du mapping
- [ ] Fond global blanc applique sur toutes pages
- [ ] Textes principaux noirs sur toutes pages
- [ ] Accents couleurs limites au logo IGTSD
- [ ] Aucun bloc majeur en style hors-charte
- [ ] Contenus telecom/fibre/energie/GC alignes metier IGTSD
- [ ] Navigation/CTA coherents avec structure Waas


## 19) Mode d'execution valide (Option 2)
Decision validee:
- Le dossier racine `igtsd.com` est utilise **en lecture uniquement** comme source de contenus, sections et structures.
- Toute creation/modification front cible se fait exclusivement dans `igtsd.com/nouveau-site`.

Regles operationnelles:
- Ne pas brancher de nouveaux assets/CSS/JS sur les pages racine.
- Importer les contenus du prior site par copie/adaptation vers les pages de `nouveau-site`.
- Garder les pages racine comme reference fonctionnelle/historique pendant la migration.
