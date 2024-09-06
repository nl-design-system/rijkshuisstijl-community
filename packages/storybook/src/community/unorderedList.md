# Rijkshuisstijl Community unordered list component

Opsomming waar de volgorde van items in de lijst niet van belang is.

## Terminologie

- **unordered list**: uitgeschreven versie van de HTML afkorting `<ul>`
- **list item**: uitgeschreven van van [HTML `<li>`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element). Ook [in ARIA is het `role="listitem"`](https://www.w3.org/TR/wai-aria-1.2/#listitem)
- **marker**: zoals in de [CSS pseudo-selector `::marker`](https://drafts.csswg.org/css-pseudo-4/#marker-pseudo)

## Nested List

Bij het gebruik van een nested list is het mogelijk om de property `nested` toe te voegen aan het `<ul>` element. Dit zorgt ervoor dat de marker een andere uiterlijk krijgen dan de markers van de "normale" lijst. Zie het voorbeeld "Nested Unordered List".
