<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Componenten - Angular

_Dit project wordt **niet** gesteund door het Ministerie van Algemene Zaken._

**Het toepassen van design-elementen uit dit project is strikt verboden voor organisaties die geen deel uitmaken van de
centrale overheid van Nederland.**

Deze package is onderdeel van het [Rijkshuisstijl Community](../../README.md) project.

## Aan de slag met Angular-componenten

Om de Angular-componenten van de Rijkshuisstijl Community te gebruiken, installeer je het [components-angular npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-angular).

De Angular-componenten hebben geen eigen styling. Om de Rijkshuisstijl aan je project toe te voegen, installeer je het [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens) en [component-css npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-css).

> [!NOTE]  
> Let erop dat je zowel `@rijkshuisstijl-community/design-tokens/dist/index.css` als `@rijkshuisstijl-community/components-css/dist/index.css` importeert in je globale `styles.css` of `styles.scss` **en** dat je componenten gebruikt binnen een element met de `rhc-theme` class. Anders zie je de componenten zonder styling.

```bash
npm install @rijkshuisstijl-community/components-angular @rijkshuisstijl-community/components-css @rijkshuisstijl-community/design-tokens
```

Dit installeert de Angular-componenten, de design tokens en de styling. Om deze te gebruiken, importeer je de CSS-bestanden in je globale stylesheet en de Angular modules in je app.

```css
@import '@rijkshuisstijl-community/design-tokens/dist/index.css';
@import '@rijkshuisstijl-community/components-css/dist/index.css';
```

```ts
import { Component } from '@angular/core';
import { ButtonComponent } from '@rijkshuisstijl-community/components-angular';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  template: `
    <main class="rhc-theme">
      <button rhc-button [appearance]="'primary-action'" [disabled]="false">hello world</button>
    </main>
  `,
})
export class App {
  protected title = 'angular-readme';
}
```

### Thema toepassen

Voor de themas maken we gebruik van de volgende 2 packages: [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens) en [component-css npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-css).

Dit pakket bevat de CSS-variabelen van het design systeem. Importeer het `index.css`-bestand uit de `dist` map van het
pakket, en omring het deel van je applicatie waar je het thema wilt toepassen met het Rijkshuisstijl-thema met de `rhc-theme` class.

#### Thema wijzigen

Om een ander thema toe te passen moet je het importeren van `import '@rijkshuisstijl-community/design-tokens/dist/{thema}/index.css';` en de class aanpassen naar het desbetreffende thema.
Zie het volgende voorbeeld om het uitvoerend-groen thema toe te passen:

```css
@import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-groen/index.css';
@import '@rijkshuisstijl-community/components-css/dist/index.css';
```

```ts
import { Component } from '@angular/core';
import { ButtonComponent } from '@rijkshuisstijl-community/components-angular';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  template: `
    <main class="uitvoerend-groen">
      <button rhc-button [appearance]="'primary-action'" [disabled]="false">hello world</button>
    </main>
  `,
})
export class App {
  protected title = 'angular-readme';
}
```

Bekijk de [packages/font/README.md](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/font/README.md) voor de meerdere manieren om de lettertypen te installeren voor jouw project.

## Development

Om de storybook lokaal te runnen, gebruik je:

```bash
pnpm --filter @rijkshuisstijl-community/storybook-angular storybook
```

om de storybook te verversen, moet je eerst de storybook server interrumperen en dan het volgende commando draaien:

```bash
pnpm --filter @rijkshuisstijl-community/components-angular build
```
