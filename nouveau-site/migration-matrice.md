# Matrice de migration IGTSD -> Nouveau site (mode Waas)

## 1) Scope de la matrice
Cette matrice pilote la transformation complete de `igtsd.com` vers un layout Waas adapte a IGTSD.

Principes verrouilles:
- fond global blanc
- textes noirs
- accents couleurs du logo IGTSD
  - primary: `#017EFF`
  - primary-dark: `#014E9E`
- style premium, sobre, corporate

## 2) Legende
### Statut
- `A_FAIRE`: non demarre
- `EN_COURS`: implementation en cours
- `A_REVOIR`: bloque ou feedback requis
- `VALIDE`: termine et valide
- `A_SUPPRIMER`: page legacy a retirer/redirect
- `HORS_PERIMETRE`: non traite dans cette vague

### Priorite
- `P0`: critique (coeur business / navigation principale)
- `P1`: important (conversion / profondeur de contenu)
- `P2`: complement (support, hygiene, legacy)

### Risque
- `H`: eleve
- `M`: moyen
- `L`: faible

## 3) Workstreams transverses
| ID | Source | Cible | Type | Priorite | Statut | Risque | Owner | Dependances | Notes |
|---|---|---|---|---|---|---|---|---|---|
| WS-001 | Global site | Design tokens IGTSD | Fondation UI | P0 | A_FAIRE | M | Codex | aucune | Variables couleur/logo, typo, espaces, ombres |
| WS-002 | Global site | Header/Footer unifies | Layout | P0 | A_FAIRE | M | Codex | WS-001 | Meme nav sur toutes pages, footer corporate coherent |
| WS-003 | Global site | Systeme cartes premium sobre | Components | P0 | A_FAIRE | M | Codex | WS-001 | Fond blanc, bordure fine, ombre douce, hover sobre |
| WS-004 | Global site | CTA systeme unifie | Components | P0 | A_FAIRE | L | Codex | WS-001 | CTA primaire bleu logo, secondaire outline |
| WS-005 | Global site | QA responsive (mobile/tablette/desktop) | QA | P0 | A_FAIRE | M | Codex | WS-002,WS-003 | Validation breakpoint par breakpoint |
| WS-006 | Global site | Orthographe/accents + marque IGTSD | Editorial | P0 | A_FAIRE | M | Codex + Client | WS-002 | Eliminer variants (IGTDS, etc.) |
| WS-007 | Global site | SEO baseline (title/meta/h1/canonical/schema) | SEO | P0 | A_FAIRE | H | Codex | WS-002 | Canonical manquant sur la majorite des pages actuelles |
| WS-008 | Global site | Nettoyage legacy CSS/inline styles | Refactor | P1 | A_FAIRE | H | Codex | WS-001..WS-005 | Reduction dette front sans regression |
| WS-009 | Global site | Images optimisation (poids/formats) | Perf | P1 | A_FAIRE | M | Codex | WS-005 | Compression et normalisation dimensions |
| WS-010 | Global site | Redirect map legacy -> pages cibles | SEO/Routing | P1 | A_FAIRE | M | Codex + Client | WS-007 | Eviter 404 et perte SEO |

## 4) Matrice pages coeur (phase prioritaire)
| ID | Source | Cible | Type | Priorite | Statut | Risque | Owner | Dependances | Notes |
|---|---|---|---|---|---|---|---|---|---|
| P-001 | `/index.html` | `/index.html` (nouveau layout Waas IGTSD) | Page coeur | P0 | A_FAIRE | H | Codex | WS-001..WS-004 | Hero premium sobre, sections KPI/services/use-cases/contact |
| P-002 | `/services.html` | `/services.html` (hub services) | Page coeur | P0 | A_FAIRE | M | Codex | WS-001..WS-004 | Cartes services blanches, lisibles, orientees conversion |
| P-003 | `/a-propos.html` | `/a-propos.html` (story corporate) | Page coeur | P0 | A_FAIRE | M | Codex | WS-001..WS-004 | Positionnement, leadership, preuves execution |
| P-004 | `/contact.html` | `/contact.html` (contact premium) | Page coeur | P0 | A_FAIRE | M | Codex | WS-001..WS-005 | Formulaire, canaux directs, map, CTA clairs |
| P-005 | `/blog.html` | `/blog.html` (hub ressources) | Page coeur | P0 | A_FAIRE | H | Codex | WS-001..WS-007 | Filtres, listing propre, SEO article |

## 5) Matrice pages services/detail
| ID | Source | Cible | Type | Priorite | Statut | Risque | Owner | Dependances | Notes |
|---|---|---|---|---|---|---|---|---|---|
| S-001 | `/ingenierie-reseaux-supervision.html` | meme URL (refonte) | Service detail | P1 | A_FAIRE | M | Codex | P-002 | Adapter contenu au pattern service Waas |
| S-002 | `/deploiement-reseaux.html` | meme URL (refonte) | Service detail | P1 | A_FAIRE | M | Codex | P-002 | Focus execution terrain + livrables |
| S-003 | `/fibre-optique-reseaux.html` | meme URL (refonte) | Service detail | P1 | A_FAIRE | M | Codex | P-002 | Focus FTTH/FO + KPI |
| S-004 | `/solutions-energetiques.html` | meme URL (refonte) | Service detail | P1 | A_FAIRE | M | Codex | P-002 | Energie telecom + continuites |
| S-005 | `/acquisition-sites-telecoms.html` | meme URL (refonte) | Service detail | P1 | A_FAIRE | M | Codex | P-002 | Foncier, compliance, cycle acquisition |
| S-006 | `/maitrise-ouvrage-delegue-telecoms.html` | meme URL (refonte) | Service detail | P1 | A_FAIRE | M | Codex | P-002 | Gouvernance projets, pilotage fournisseurs |
| S-007 | `/delocalisation-devoiement-reseaux.html` | meme URL (refonte) | Service detail | P1 | A_FAIRE | M | Codex | P-002 | Devoiement/relocalisation et contraintes terrain |
| S-008 | `/cablage-informatique.html` | meme URL (refonte) | Service detail | P1 | A_FAIRE | M | Codex | P-002 | LAN/WiFi/DC, tests, DOE |
| S-009 | `/defis-emplacement-strategiques.html` | meme URL (refonte) | Service/insight | P2 | A_FAIRE | L | Codex | P-002 | Peut etre fusionne en article selon arbitrage |
| S-010 | `/realisations.html` | meme URL (refonte) | Use cases | P1 | A_FAIRE | M | Codex | P-001,P-002 | Cas clients reels, impacts business mesurables |

## 6) Matrice blog/ressources
| ID | Source | Cible | Type | Priorite | Statut | Risque | Owner | Dependances | Notes |
|---|---|---|---|---|---|---|---|---|---|
| B-001 | `/blog-supervision-sla.html` | meme URL (refonte) | Article | P1 | A_FAIRE | M | Codex | P-005 | Template article unifie + SEO article |
| B-002 | `/blog-noc-teletravail.html` | meme URL (refonte) | Article | P1 | A_FAIRE | M | Codex | P-005 | Clarifier angle metier IGTSD |
| B-003 | `/blog-ftth-acceleration.html` | meme URL (refonte) | Article | P1 | A_FAIRE | M | Codex | P-005 | Renforcer proof points et CTA |
| B-004 | `/blog-delivery-partners.html` | meme URL (refonte) | Article | P1 | A_FAIRE | M | Codex | P-005 | Cohesion terminologie, lisibilite |
| B-005 | `/blog/prototype/article-blog.html` | vers template article officiel | Legacy/proto | P2 | A_FAIRE | L | Codex | P-005 | Decommission ou redirection |

## 7) Matrice legacy cleanup
| ID | Source | Cible | Type | Priorite | Statut | Risque | Owner | Dependances | Notes |
|---|---|---|---|---|---|---|---|---|---|
| L-001 | `/page-blog-1.html` | redirect -> `/blog.html` | Legacy template | P2 | A_FAIRE | L | Codex + Client | WS-010 | Page generique non marquee |
| L-002 | `/page-testimonials-1.html` | redirect -> `/realisations.html` | Legacy template | P2 | A_FAIRE | L | Codex + Client | WS-010 | Titre NEXGEN a retirer |
| L-003 | `/part-image-gallery.html` | redirect -> `/realisations.html` | Legacy template | P2 | A_FAIRE | L | Codex + Client | WS-010 | Contenu hors charte IGTSD |
| L-004 | `/coming-soon.html` | conserver/reviser ou decommission | Utilitaire | P2 | A_FAIRE | L | Client | P-001 | Decision produit attendue |
| L-005 | `/Signatures Pro/*` | hors site public + exclure sitemap | Hors perimetre web public | P2 | A_FAIRE | M | Codex + Client | WS-010 | Ne pas polluer SEO public |

## 8) Jalon par sprint
| Sprint | Focus | Livrables minimum | Gate validation |
|---|---|---|---|
| S0 | Cadrage + tokens | WS-001..WS-003 init | validation palette/logo + composants de base |
| S1 | Pages coeur 1 | P-001 + P-002 | review UX + cohence visuelle |
| S2 | Pages coeur 2 | P-003 + P-004 + P-005 | review business + SEO baseline |
| S3 | Services detail | S-001..S-008 | review editorial metier |
| S4 | Blog + cleanup | B-001..B-004 + L-001..L-005 | review final + plan publication |

## 9) KPI de pilotage de la migration
- `% pages coeur validees`
- `% pages avec title/meta/h1/canonical conformes`
- `# occurrences marque incoherente corrigees`
- `# pages legacy decommissionnees/redirect`
- `# regressions UI critiques`

## 10) Prochaine action immediate (execution)
1. Baseline captures pour P-001..P-005
2. Creation design tokens IGTSD (fond blanc + texte noir + bleus logo)
3. Demarrage implementation P-001 (`index.html`)
