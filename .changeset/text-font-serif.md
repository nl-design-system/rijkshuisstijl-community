---
'@rijkshuisstijl-community/design-tokens': major
---

- De closed source font override tokenset is verwijderd. 
- De waarde van `rhc.text.font-family.default` is gewijzigd van `'RijksSans', 'Arial', 'Verdana', sans-serif` naar `'RijksSansVF', 'Fira Sans', 'Arial', 'Verdana', sans-serif`.
- `RijksSansVF` is te downloaden via rijkshuisstijl.nl.

- Font-weight tokens zijn als strings ingesteld zodat ze overeenkomen met de Figma font-weight namen van RijksSansVF en Fira Sans, Tokens Studio gebruikers zouden hierdoor geen 
errors meer moeten krijgen. Voor code zijn overrides beschikbaar in de tokensets onder type-scale waarbij 
font-weights als numbers worden doorgegeven.
