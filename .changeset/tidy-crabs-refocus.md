---
'@rijkshuisstijl-community/design-tokens': patch
'@rijkshuisstijl-community/textarea-css': minor
---

De Text Area volgt nu de AZ-spec voor focus en padding: de aparte 2px focus-borderregel is uit textarea-css verwijderd omdat het focus-effect volledig door de gedeelde focus-outline wordt verzorgd, en de horizontale padding is verbreed van 12px naar 16px (`utrecht.textarea.padding-inline-start/-end` verwijst nu naar `{rhc.space.xl}`, een token-waardewijziging op patch-niveau). Het token `rhc.textarea.focus.border-width` is daarbij niet verwijderd maar verplaatst naar de nieuwe deprecated-subset `components/textarea/deprecated` (naar het patroon van `components/text-input/deprecated`), zodat bestaande afnemers een overgangsperiode hebben voordat het definitief verdwijnt; de custom property blijft dus gewoon gegenereerd worden. Verder is een kapotte fallback in de read-only-borderregel hersteld: die verwees zonder `var()`-wrapper naar het niet-bestaande `--rhc-color-grijs-100` en is geschrapt, want `--utrecht-textarea-read-only-background-color` levert de waarde al.
