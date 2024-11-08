<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community pre-heading component

## Gebruik en toegankelijkheid van pre-headings

- Gebruik altijd maar één heading in combinatie met een pre-heading.
- Gebruik alleen een pre-heading als er content onder staat.
- Gebruikers van screenreaders gebruiken headings en pre-headings vaak om een indruk te krijgen van de structuur van een pagina.
- Gebruik pre-headings niet voor de opmaak maar alleen voor de tekstuele hiërarchie van de content.
- Beperk het aantal pre-headings op een pagina.

### De pre-heading component beschikt over property `heading`

**heading (verplicht)**
Dit verwijst naar het Heading component. Dit component is nodig om vervolgens de pre-heading visueel boven te tonen. In de HTML zal deze nog steeds onder de heading getoond zijn.

**children (verplicht)**
Dit verwijst naar het text component dat als child kan worden meegegeven aan de PreHeading. Dit is de text die visueel getoond gaat worden boven de heading.

## Usage

```tsx
import { PreHeading } from '@rijkshuisstijl-community/components-react';

<PreHeading heading={<Heading level={1}>Introductie</Heading>}>Stap 1 van 8</PreHeading>;
```

---
