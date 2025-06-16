<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Componenten - Angular

_Dit project wordt **niet** gesteund door het Ministerie van Algemene Zaken._

**Het toepassen van design-elementen uit dit project is strikt verboden voor organisaties die geen deel uitmaken van de
centrale overheid van Nederland.**

Deze package is onderdeel van het [Rijkshuisstijl Community](../../README.md) project.

## Aan de slag met Angular-componenten

Om de Angular-componenten van de Rijkshuisstijl-community te gebruiken, installeer je het [components-angular npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-angular).

```bash
npm install --save-dev @rijkshuisstijl-community/components-angular
```

Dit installeert de Angular-componenten. Om deze componenten te gebruiken, kun je ze importeren in jouw app.

```ts
import { ButtonComponent } from '@rijkshuisstijl-community/components-angular';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-test';
}
```

### Thema toepassen

De Angular-componenten hebben geen eigen styling. Om de Rijkshuisstijl aan je project toe te voegen, installeer je het [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens) en het [components-css npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-css).

```bash
npm install --save-dev @rijkshuisstijl-community/design-tokens
npm install --save-dev @rijkshuisstijl-community/components-css
```

Deze pakketten bevatten de CSS-variabelen van het design systeem en de CSS-classes die de componenten aan de variabelen koppelen.
Importeer de `index.css`-bestanden uit de `dist` mappen van de pakketten, en omring het deel van je applicatie waar je het thema wilt toepassen met het Rijkshuisstijl-thema: `rhc-theme`.

Voeg de volgende css toe aan `styles.css` (het bestand waar je global styles hebt staan).

```css
@import url('@rijkshuisstijl-community/design-tokens/dist/index.css');
@import url('@rijkshuisstijl-community/components-css/dist/index.css');
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
export class AppComponent {}
```

Bekijk de [packages/font/README.md](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/font/README.md) voor de meerdere manieren om de lettertypen te installeren voor jouw project.
