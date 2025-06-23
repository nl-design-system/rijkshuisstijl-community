<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Componenten - React

_Dit project wordt **niet** gesteund door het Ministerie van Algemene Zaken._

**Het toepassen van design-elementen uit dit project is strikt verboden voor organisaties die geen deel uitmaken van de
centrale overheid van Nederland.**

Deze package is onderdeel van het [Rijkshuisstijl Community](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/README.md) project.

## Aan de slag met React-componenten

Om de React-componenten van de Rijkshuisstijl-community te gebruiken, installeer je het [components-react npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-react).

De React-componenten hebben geen eigen styling. Om de Rijkshuisstijl aan je project toe te voegen, installeer je het [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens) en [component-css npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-css).

> [!NOTE]  
> Let erop dat je beide de `@rijkshuisstijl-community/design-tokens/dist/index.css` importeert **en** de component een child is van een element waar de `rhc-theme` op is toegepast. Anders zie je de component zonder styling.

```bash
npm install --save-dev @rijkshuisstijl-community/components-react @rijkshuisstijl-community/components-css @rijkshuisstijl-community/design-tokens
```

Dit installeert de React-componenten, de design tokens en de styling. Om deze te gebruiken, importeer je ze in jouw app.

```tsx
import '@rijkshuisstijl-community/design-tokens/dist/index.css'; // design tokens importeren
import '@rijkshuisstijl-community/components-css/dist/index.css'; // css importeren
import { Button } from '@rijkshuisstijl-community/components-react';

function App() {
  return (
    {/* geef alle thema tokens mee aan child components voor styling */}
    <div className="rhc-theme">
      <Button>Click Here!</Button>
    </div>
  );
}
```

> [!WARNING]  
> Sommige componenten gebruiken de [useRef](https://react.dev/reference/react/useRef) hook, die alleen werkt in Client
> Componenten. Voeg `"use client"` toe bovenaan het bestand om dit op te lossen. lees [hier](https://react.dev/reference/rsc/server-components) meer over server en client components in react.

### Thema toepassen

Voor de themas maken we gebruik van de volgende 2 packages: [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens) en [component css npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-css)

Dit pakket bevat de CSS-variabelen van het design systeem. Importeer het `index.css`-bestand uit de `dist` map van het
pakket, en omring het deel van je applicatie waar je het thema wilt toepassen met de Rijkshuisstijl-thema: `rhc-theme`.

Bekijk de [packages/font/README.md](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/font/README.md) voor de meerdere manieren om de lettertypen te installeren voor jouw project.
