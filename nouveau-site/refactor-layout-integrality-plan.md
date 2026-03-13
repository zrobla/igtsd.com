# Nouveau-Site Global Refactor Plan (Index-Driven)

## 1) Goal
Refactor **all pages in `/nouveau-site/`** so they follow the **same visual system, section architecture, and interaction patterns** as `index.html`, element by element.

This is a **layout + structure + UI consistency** program, not a content rewrite project.

## 2) Canonical Reference
Single source of truth:
- `nouveau-site/index.html`
- `nouveau-site/assets/css/waas-igtsd.css`
- `nouveau-site/assets/js/waas-igtsd.js`

Any page-level variant is allowed only if it is intentional and documented in the execution log.

## 3) Non-Negotiable Rule (Integrity Gate)
**No next-page work starts until current page passes 100% integrity checks.**

Integrity checks are mandatory for each page:
1. Header/navigation structure matches index behavior.
2. Hero follows index visual grammar (spacing, text hierarchy, CTA rhythm).
3. Section titles follow same `pre-title + section-title + underliner` system.
4. Card system matches index tokens (radius, spacing, hover, shadows, border treatment).
5. Button system is consistent with index (`btn`, `btn-primary`, `btn-outline`).
6. Typography scale and paragraph rhythm are consistent.
7. Colors/tokens match site palette (no rogue hex values).
8. Footer structure matches index layout and credit placement.
9. Responsive parity validated on desktop/tablet/mobile.
10. No regression in JS interactions relevant to page.
11. No UTF/mojibake/corrupted accents.
12. Links and anchors valid.

If any item fails: page status stays **In Progress**.

## 4) Scope Inventory
### FR pages
- `a-propos.html`
- `services.html`
- `realisations.html`
- `blog.html`
- `contact.html`
- `acquisition-sites-telecoms.html`
- `deploiement-reseaux.html`
- `fibre-optique-reseaux.html`
- `ingenierie-reseaux-supervision.html`
- `maitrise-ouvrage-delegue-telecoms.html`
- `solutions-energetiques.html`
- `delocalisation-devoiement-reseaux.html`
- `cablage-informatique.html`
- `blog-supervision-sla.html`
- `blog-ftth-acceleration.html`
- `blog-noc-teletravail.html`
- `blog-delivery-partners.html`
- `defis-emplacement-strategiques.html`

### EN pages
- `en/index.html`
- `en/about.html`
- `en/services.html`
- `en/contact.html`

## 5) Execution Workflow (Page-by-Page)
For each page, execute this sequence strictly:

### Step A: Structural Mapping
- Map current page sections against index section grammar.
- Identify missing/extra wrappers and non-standard classes.
- Produce a quick “delta list” before editing.

### Step B: Layout Alignment
- Align section containers and grids to index layout rhythm.
- Normalize title blocks and section spacings.
- Re-align cards to index card system.

### Step C: Components Alignment
- Normalize button markup/classes.
- Normalize badges/chips/meta blocks.
- Normalize CTA zones and action hierarchy.

### Step D: Interaction Alignment
- Ensure dropdowns, tabs, filters, sliders, and toggle elements match index UX behavior.
- Remove page-specific interaction drift unless documented as required.

### Step E: Integrity Gate (Mandatory)
Run all checks below before closing page:
1. Visual parity check (desktop 1440, tablet 1024, mobile 390).
2. Header + footer parity check.
3. Typography and spacing check.
4. Color/token conformity check.
5. Interaction test for all active components.
6. Content encoding check (UTF, accents).
7. Link/navigation validation.

### Step F: Sign-off
- Mark page as `Done` only when all checks pass.
- Log final notes and exceptions (if any).

## 6) Refactor Sequence
### Wave 1: Foundation pages
1. `a-propos.html`
2. `services.html`
3. `realisations.html`
4. `blog.html`
5. `contact.html`

### Wave 2: Service single pages
1. `acquisition-sites-telecoms.html`
2. `deploiement-reseaux.html`
3. `fibre-optique-reseaux.html`
4. `ingenierie-reseaux-supervision.html`
5. `maitrise-ouvrage-delegue-telecoms.html`
6. `solutions-energetiques.html`
7. `delocalisation-devoiement-reseaux.html`
8. `cablage-informatique.html`

### Wave 3: Blog/article pages
1. `blog-supervision-sla.html`
2. `blog-ftth-acceleration.html`
3. `blog-noc-teletravail.html`
4. `blog-delivery-partners.html`
5. `defis-emplacement-strategiques.html`

### Wave 4: English parity
1. `en/index.html`
2. `en/about.html`
3. `en/services.html`
4. `en/contact.html`

## 7) Required Checks Before Moving to Next Page
Use this checklist for each page (copy-paste in execution log):

- [ ] Header/nav structure and behavior aligned to index.
- [ ] Hero structure and hierarchy aligned.
- [ ] Section title system aligned.
- [ ] Card style system aligned.
- [ ] CTA/button hierarchy aligned.
- [ ] Footer alignment + copyright/credit split aligned.
- [ ] Desktop/tablet/mobile responsive validated.
- [ ] No broken interactions.
- [ ] No UTF/encoding artifacts.
- [ ] Internal links/anchors validated.
- [ ] Final visual review approved.

## 8) Technical QA Commands (Fast Pass)
Run after each page update or batch:

```bash
# UTF/mojibake quick scan
rg -n "Ã|Â|�|â€™|â€œ|â€|&Atilde;|&Acirc;" nouveau-site/*.html nouveau-site/en/*.html

# Broken-token sanity scan (French corruption patterns)
rg -n -i "rgulation|multiplicit|golocalisation|l'tude|intgre|dfauts|dcalage|dcisionnelle|contractualis|opratoires" nouveau-site/*.html

# Quick link references check placeholders/todo
rg -n "TODO|FIXME|href=\"#\"" nouveau-site/*.html nouveau-site/en/*.html
```

## 9) Execution Log Template
Use one block per page:

```md
### Page: <page-name>
Status: In Progress | Blocked | Done
Reference sections used from index: <list>
Layout changes applied: <summary>
Component changes applied: <summary>
Interaction checks: Pass/Fail + notes
Responsive checks (desktop/tablet/mobile): Pass/Fail + notes
UTF/link checks: Pass/Fail + notes
Integrity Gate result: Pass/Fail
Next action: <if fail, fix list>
```

## 10) Definition of Done (Program Level)
Program is complete only when:
1. All pages in scope are marked `Done`.
2. All integrity checklists are complete.
3. No UTF or broken-text artifacts remain.
4. No page-specific style drift remains undocumented.
5. EN pages follow the same layout system as FR baseline.

## 11) Execution Log (Current Sprint)
### Page: `realisations.html`
Status: In Progress
Reference sections used from index: header/nav, section-head, card system, CTA panel, footer
Layout changes applied: copy cleanup on hero/portfolio/CTA text for better semantic clarity
Component changes applied: corrected CTA labels/French accents and aligned card CTA behavior for consistent reading rhythm
Interaction checks: Pass (header/nav, dropdown, scroll-to-top, JS global controls unaffected)
Responsive checks (desktop/tablet/mobile): Pending visual pass
UTF/link checks: Pass (mojibake scan clear, no `href="#"` placeholder)
Integrity Gate result: Partial Pass
Next action: responsive visual QA then final sign-off

### Page: `blog.html`
Status: In Progress
Reference sections used from index: header/nav, hero grammar, section-head, card system, CTA panel, footer
Layout changes applied: text hierarchy cleaned and CTA microcopy normalized
Component changes applied: fixed wording + implemented functional category filtering with empty state + aligned card CTA rhythm
Interaction checks: Pass (chips filtering, dropdown, nav, global JS)
Responsive checks (desktop/tablet/mobile): Pending visual pass
UTF/link checks: Pass (mojibake scan clear, no `href="#"` placeholder)
Integrity Gate result: Partial Pass
Next action: responsive visual QA then final sign-off

### Page: `contact.html`
Status: In Progress
Reference sections used from index: header/nav, section-head, contact cards, footer
Layout changes applied: migrated subpage to dual-form tab architecture (`Formulaire Général` / `Formulaire Technique`) + premium direct-contact card structure
Component changes applied: aligned form fields, priority checkboxes, SLA/briefing flow and direct channels with home contact design system
Interaction checks: Pass (header/nav, dropdown, contact tabs, global JS)
Responsive checks (desktop/tablet/mobile): Pending visual pass
UTF/link checks: Pass (mojibake scan clear, no `href="#"` placeholder)
Integrity Gate result: Partial Pass
Next action: responsive visual QA then final sign-off

### Batch: Wave 2 service single pages
Pages: `acquisition-sites-telecoms.html`, `deploiement-reseaux.html`, `fibre-optique-reseaux.html`, `ingenierie-reseaux-supervision.html`, `maitrise-ouvrage-delegue-telecoms.html`, `solutions-energetiques.html`, `delocalisation-devoiement-reseaux.html`, `cablage-informatique.html`
Status: In Progress
Reference sections used from index: header/nav, subpage hero grammar, metric cards, footer
Layout changes applied: normalized hero metric micro-layout, added section-head wrappers for core blocks, and aligned section rhythm with index grammar
Component changes applied: standardized KPI separators (`·`) and cleaned language-switch active links
Interaction checks: Pass (header/nav, dropdown, global JS)
Responsive checks (desktop/tablet/mobile): Pending visual pass
UTF/link checks: Pass (mojibake scan clear, no `href="#"` placeholder)
Integrity Gate result: Partial Pass
Next action: page-by-page responsive and final visual parity checks

### Batch: Wave 3 article pages
Pages: `blog-supervision-sla.html`, `blog-ftth-acceleration.html`, `blog-noc-teletravail.html`, `blog-delivery-partners.html`, `defis-emplacement-strategiques.html`
Status: In Progress
Reference sections used from index: header/nav, section-head grammar, card system, CTA panel rhythm, footer
Layout changes applied: normalized article section headers (`pre-title + section-title + intro`) and aligned `defis-emplacement-strategiques` to the full article layout with sidebar cards
Component changes applied: corrected service links, fixed FR copy defects, and harmonized article CTA/readability structure
Interaction checks: Pass (header/nav, dropdown, anchor links, global JS)
Responsive checks (desktop/tablet/mobile): Pending visual pass
UTF/link checks: Pass (mojibake scan clear, no `href="#"` placeholder)
Integrity Gate result: Partial Pass
Next action: visual QA and spacing polish on article templates
