const e=`<!-- @license CC0-1.0 -->

# Bibliografie

- [Using the HTML title attribute — Steve Faulkner](https://www.tpgi.com/using-the-html-title-attribute-updated/)
`,t="<!-- @license CC0-1.0 -->\n\n# HTML\n\n- Gebruik het `alt` attribuut voor een beschrijvende tekst.\n- Gebruik niet het `title` attribuut voor `img`. De afbeelding moet goed zichtbaar zijn, maar sommige browsers maken een tooltip met voor de tekst in het `title` attribuut. Een tooltip kan bijvoorbeeld een afbeelding van een [QR-code](https://en.wikipedia.org/wiki/QR_code) onbruikbaar maken doordat de QR-code niet meer herkend wordt.\n",n=`<!-- @license CC0-1.0 -->

# Relevante WCAG eisen

- [WCAG eis 1.1.1](https://www.w3.org/TR/WCAG21/#non-text-content): afbeeldingen moeten een tekst als alternatief hebben, bijvoorbeeld via het \`alt\`-attribuut
- [WCAG eis 1.4.5](https://www.w3.org/TR/WCAG21/#images-of-text)
- [WCAG eis 1.4.6](https://www.w3.org/TR/WCAG21/#contrast-enhanced)
- [WCAG eis 1.4.9](https://www.w3.org/TR/WCAG21/#images-of-text-no-exception)
- [WCAG eis 1.4.11](https://www.w3.org/TR/WCAG21/#non-text-contrast)
- [WCAG eis 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts): de taal van de \`alt\` tag moet instelbaar zijn
`,i=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community image component

## HTML

- Gebruik het \`alt\` attribuut voor een beschrijvende tekst.
- Gebruik niet het \`title\` attribuut voor \`img\`. De afbeelding moet goed zichtbaar zijn, maar sommige browsers maken een tooltip met voor de tekst in het \`title\` attribuut. Een tooltip kan bijvoorbeeld een afbeelding van een [QR-code](https://en.wikipedia.org/wiki/QR_code) onbruikbaar maken doordat de QR-code niet meer herkend wordt.

## Bibliografie

- [Using the HTML title attribute — Steve Faulkner](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Usage

\`\`\`jsx
import { Image } from '@rijkshuisstijl-community/components-react';

<Image src="/placeholder.jpg" alt="Multicolored tulip field" width={640} height={763} />;
\`\`\`

## Props

| Prop        | Type   | Beschrijving                                                            |
| ----------- | ------ | ----------------------------------------------------------------------- |
| \`src\`       | string | Verwijzing naar de afbeeldingsbron                                      |
| \`alt\`       | string | Alternatieve tekst voor de afbeelding (verplicht voor toegankelijkheid) |
| \`width\`     | number | (optioneel) Breedte van de afbeelding                                   |
| \`height\`    | number | (optioneel) Hoogte van de afbeelding                                    |
| \`className\` | string | (optioneel) Extra CSS-klasse(n) voor styling                            |

## Voorbeelden met verkeerde implementatie

- Geen \`alt\` attribuut opgegeven

\`\`\`jsx
<Image src="/placeholder.jpg" width={640} height={480} />
\`\`\`
`;export{e as a,t as h,i as r,n as w};
