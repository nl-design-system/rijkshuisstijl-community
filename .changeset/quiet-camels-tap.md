---
'@rijkshuisstijl-community/design-tokens': minor
'@rijkshuisstijl-community/footer-css': minor
'@rijkshuisstijl-community/footer-react': minor
---

De Page Footer heeft een compacte variant gekregen: een lichte footer met alleen een tagline en enkele links, voor pagina's met een sterke taakfocus zoals formulieren. In React zet je deze aan met `variant="compact"`, in CSS met de modifier `rhc-page-footer--compact`. De variant wordt gestyled met nieuwe `rhc.page-footer.compact.*` design tokens (achtergrond, tekstkleur, verticale witruimte en tagline-grootte) en gedeelde `rhc.page-footer.tagline.*` tokens; de tagline is gewone tekst en bewust geen Heading, omdat het geen kop in de documentstructuur is.
