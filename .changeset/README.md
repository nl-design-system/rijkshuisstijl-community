<!-- @license CC0-1.0 -->

# Changeset sjabloon

Gebruik `changeset add` of `pnpm changeset add`.

```markdown
---
'@rijkshuisstijl-community/<package-name>': major
---

Beschrijving
```

Tussen de twee sets `---` zou moeten staan in welke packages je allemaal veranderingen hebt doorgevoerd. Zet elk package tussen dubbele aanhalingstekens op een nieuwe regel.

Gebruik:

- `"@rijkshuisstijl-community/<package-name>": major` voor breaking changes
- `"@rijkshuisstijl-community/<package-name>": minor` voor nieuwe features
- `"@rijkshuisstijl-community/<package-name>": patch` voor bug fixes

Beschrijf na de tweede set `---` welke veranderingen je hebt doorgevoerd.

Geef bij breaking changes aan **wat** er veranderd is, **waarom** de verandering nodig was en **hoe** gebruikers van het
package hun code moeten aanpassen.
