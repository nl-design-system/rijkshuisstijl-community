---
'@rijkshuisstijl-community/design-tokens': major
---

**Token-structuur opgeschoond en hernoemd**
- `utrecht/*` tokens hernoemd naar `component/*` of `common/utrecht`.
- `component/rhc-icon-only` tokens verplaatst naar `components/button`.
- Alle `*/font` mappen hernoemd naar `*/text`.
- `overwrites/*` hernoemd naar `overrides/*`.
- Verwijderd:
  - `utrecht/root`,
  - `utrecht/body`,
  - `components/form-field-label/todo`,
  - `overwrites/footer/*`,
  - `overwrites/nav-bar/*`.
- Hernoemd:
  - `components/pagination/ams` → `components/page-number-navigation`,
  - `components/footer` → `components/page-footer`.

**Accent-tokens verwijderd**
Accent-tokens verwijderd omdat ze niet in gebruik zijn en de waardes organisatie specifiek:
- `rhc.color.accent-1`,
- `rhc.color.accent-2`.

**Thema's aangepast**
- Thema `KOOP` hernoemd naar `Uitvoerend – Lintblauw` voor meer generieke naamgeving.
- Thema `Uitvoerend - Oranje` non-primary button uitvoering aangepast voor toegankelijkheid.
