# Plan Refactor - Page Nos Services et Pages Single Services

## Objectif
Alléger `services.html` et repositionner le parcours utilisateur autour d'une grille de services claire (même logique que l'accueil), puis enrichir chaque page service dédiée avec un message technico-commercial plus affûté, dans un style premium sobre et corporate aligné avec `index.html` et `a-propos.html`.

## Cadrage du refactor
- Conserver une architecture de navigation simple: carte service -> page service dédiée.
- Supprimer de `services.html` les sections trop denses:
  - `Des programmes structurés pour bâtir, densifier et opérer vos réseaux critiques`
  - `Des offres focalisées sur vos priorités sectorielles`
- Réutiliser leur matière fonctionnelle/sectorielle pour enrichir les pages single services.
- Déplacer la logique "méthode d'engagement" hors de `services.html` vers chaque page service dédiée.
- Ton cible: 65% technique + 35% business (clarté de valeur, impacts opérationnels, confiance directionnelle).

## Phase 1 - Refactor de `services.html` (en cours d'implémentation)
- [x] Dupliquer la section `NOS SERVICES` de l'accueil dans `services.html`.
- [x] Conserver des CTA directs vers pages dédiées:
  - `acquisition-sites-telecoms.html`
  - `maitrise-ouvrage-delegue-telecoms.html`
  - `deploiement-reseaux.html`
  - `ingenierie-reseaux-supervision.html`
  - `fibre-optique-reseaux.html`
  - `solutions-energetiques.html`
- [x] Supprimer les deux sections surchargées mentionnées ci-dessus.
- [x] Uniformiser le style de cette grille sur la page services (même langage visuel premium que l'accueil).

## Phase 2 - Enrichissement éditorial des pages single services
Approche: injecter les détails techniques/sectoriels supprimés de `services.html` dans les pages dédiées, en évitant la redite.

### Bloc méthodologie à injecter (sans "360")
- Titre à utiliser: `Méthodologie orientée résultats`
- Position: après le bloc `Clients cibles et livrables attendus` de chaque page service.
- Structure recommandée:
  - `01` Diagnostic & cadrage business
  - `02` Design & ingénierie exécutable
  - `03` Delivery & contrôle qualité
  - `04` Transition & performance run
- Chaque étape doit conserver un angle technico-commercial:
  - enjeu opérationnel,
  - méthode IGTSD,
  - livrables décisionnels attendus.

### Mapping de contenu (source -> destination)
- `Stratégie sites & conformité` -> `acquisition-sites-telecoms.html`
  - due diligence foncière, négociations, design d'implantation, conformité.
- `MOD / gouvernance CAPEX-OPEX / SLA-KPI` -> `maitrise-ouvrage-delegue-telecoms.html`
  - pilotage multi-fournisseurs, conformité ARTCI/ARTP, qualité contractuelle.
- `Design + Roll-out + recettes` -> `deploiement-reseaux.html`
  - commissioning, QA/QC, as-built, mise en service.
- `NOC / analytics / conformité réseaux` -> `ingenierie-reseaux-supervision.html`
  - supervision continue, KPI dashboards, capacity management, transfert O&M.
- `Backbone & fibre` -> `fibre-optique-reseaux.html`
  - FTTx, longue distance, OTDR/PMD, mise à jour SIG.
- `LAN/câblage/data centers` -> `cablage-informatique.html`
  - LAN/Wi-Fi pro, salles techniques, exploitation multi-sites.
- `Solutions énergétiques` -> `solutions-energetiques.html`
  - hybrides, PaaS, optimisation OPEX énergie, continuité.
- `Génie civil & dévoiement` -> `delocalisation-devoiement-reseaux.html`
  - travaux spéciaux, relocalisation, remise en conformité.

### Adaptation du bloc "Méthodologie orientée résultats" par page service
- `acquisition-sites-telecoms.html`:
  - accent sur risques fonciers, concertation parties prenantes, conformité administrative.
- `maitrise-ouvrage-delegue-telecoms.html`:
  - accent sur gouvernance PMO, arbitrages CAPEX/OPEX, pilotage fournisseurs et SLA.
- `deploiement-reseaux.html`:
  - accent sur cadence chantier, QA/QC, recette technique et maîtrise des reprises.
- `ingenierie-reseaux-supervision.html`:
  - accent sur architecture cible, monitoring proactif, réduction MTTR et qualité de service.
- `fibre-optique-reseaux.html`:
  - accent sur design OSP/ISP, tests OTDR/OLTS, qualité optique et time-to-market.
- `solutions-energetiques.html`:
  - accent sur continuité énergétique, optimisation OPEX, résilience sites critiques.
- `cablage-informatique.html`:
  - accent sur performance LAN/Wi-Fi, qualité documentaire et continuité IT multisites.
- `delocalisation-devoiement-reseaux.html`:
  - accent sur continuité de service sous contraintes urbaines/BTP et conformité chantier.

### Renforcement du message technico-commercial (par page)
- Ajouter un bloc "Enjeux business couverts".
- Ajouter un bloc "Livrables exécutifs" (orienté direction technique/opérations/achats).
- Ajouter un bloc "Impact mesurable" (délais, coûts, disponibilité, conformité).
- Ajouter une CTA finale forte (`Demander un cadrage`, `Parler à un expert`, `Lancer un audit`).

## Phase 3 - Uniformisation UI premium
- Harmoniser:
  - titres de sections (pre-title + underliner),
  - cartes (rayon, bordure, ombre, hover),
  - lisibilité des contenus et contrastes,
  - CTA primaires/secondaires.
- Vérifier cohérence desktop/tablette/mobile.

## Phase 4 - QA avant passage de phase
Checklist obligatoire avant chaque phase suivante:
- [ ] Liens cartes -> pages dédiées vérifiés.
- [ ] Aucun doublon de sections supprimées dans `services.html`.
- [ ] Aucun titre de bloc ne contient "360" pour la méthodologie déplacée.
- [ ] Styles cohérents avec `index.html` et `a-propos.html`.
- [ ] Lecture mobile fluide (pas de débordement, CTA lisibles, hiérarchie claire).
- [ ] Orthographe/accents validés.

## Livrables attendus
- `services.html` allégée et orientée conversion.
- Pages single services enrichies (technique + business).
- Expérience homogène premium/corporate sur tout le parcours services.
