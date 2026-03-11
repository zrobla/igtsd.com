# S0 Execution Blueprint - IGTSD Waas Migration

## Objectif S0 (execution immediate)
Mettre en place la fondation technique qui permet de migrer le site IGTSD vers le layout Waas sans casse:
- tokens de design valides (fond blanc, texte noir, accents logo IGTSD)
- squelette composants unifie
- checklist de migration page par page

## 1) Design tokens a implementer en premier
Fichier cible: `assets/css/waas-igtsd-tokens.css`

Variables obligatoires:
- `--bg-page: #ffffff`
- `--surface: #ffffff`
- `--text-main: #000000`
- `--text-muted: #4b5563`
- `--brand-primary: #017EFF`
- `--brand-primary-dark: #014E9E`
- `--brand-border: #d9e7f7`
- `--cta-secondary-border: #c7d6ea`
- `--shadow-soft: 0 10px 28px rgba(15, 23, 42, 0.08)`

## 2) Mapping exact de layout (GWIT Waas -> IGTSD)

### Header
- GWIT Waas: header fixe corporate + etat actif visible
- IGTSD cible: meme logique, menu principal:
  - Accueil
  - A propos
  - Services
  - Realisations
  - Blog & Ressources
  - Contact

### Hero homepage
- GWIT Waas: hero premium lisible avec CTA
- IGTSD cible: hero sobre corporate, preuves metier en avant:
  - Ingenierie reseaux
  - Deploiement terrain
  - Fibre optique
  - Energie telecom

### Cartes services
- GWIT Waas: cartes detachées, fond clair
- IGTSD cible: cartes blanches premium (bordure `--brand-border`, hover discret)
- Services a afficher:
  - Ingenierie reseaux & supervision
  - Deploiement reseaux
  - Fibre optique
  - Acquisition de sites telecoms
  - Maitrise d'ouvrage delegue telecoms
  - Delocalisation / devoiement reseaux
  - Solutions energetiques
  - Cablage informatique

### Use cases / Realisations
- GWIT Waas: cartes detaillees orientees impact
- IGTSD cible: focus livrables + KPI + impact business (delais, disponibilite, capex/opex)

### Contact
- GWIT Waas: formulaire + canaux directs
- IGTSD cible: meme structure, style corporate, lisibilite renforcee

### Footer
- GWIT Waas: footer structure et propre
- IGTSD cible: adaptation marque IGTSD + liens utiles + canaux

## 3) Checklist implementation page par page

### P0.1 - index.html
- [ ] appliquer fond blanc global
- [ ] uniformiser titres section + underliner bleu IGTSD
- [ ] restructurer hero dans la grille Waas
- [ ] remplacer blocs legacy par cartes premium sobers

### P0.2 - services.html
- [ ] transformer hub services en grille Waas
- [ ] harmoniser CTA (primaire bleu IGTSD)
- [ ] normaliser cartes de details

### P0.3 - a-propos.html
- [ ] storytelling corporate aligne IGTSD
- [ ] preuve d'execution terrain + methodologie
- [ ] alignement visuel sur homepage

### P0.4 - contact.html
- [ ] formulaire coherent avec design system
- [ ] infos directes (tel/email/adresse) plus lisibles
- [ ] map integrable sans surcharge visuelle

### P0.5 - blog.html
- [ ] listing articles en layout Waas
- [ ] section hero/blog hub sobre
- [ ] cards article harmonisees

## 4) Contraintes editoriales IGTSD
- ton factuel B2B
- terminologie coherente telecom / fibre / genie civil / energie
- suppression des contenus templates generiques non IGTSD
- orthographe et accents verifies avant validation

## 5) Gate de validation S0
S0 est termine uniquement si:
- tokens figes et valides
- mapping layout valide par page coeur
- checklist P0.1 -> P0.5 approuvee
- aucune divergence avec contraintes couleur/contenu IGTSD
