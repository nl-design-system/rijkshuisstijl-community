<!-- @license CC0-1.0 -->

# Omschrijving

Dit is de Code Input Group React-component van het Rijkshuisstijl Community Design System. Zie ook de volgende links:

- README.md voor alle React-componenten
  [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md]

## Installatie

```bash
pnpm add @rijkshuisstijl-community/code-input-group-react
```

## Gebruik

Op de storybook voor Code Input Group React Component staan voorbeelden voor het gebruik van dit component[https://rijkshuisstijl-community.vercel.app/?path=/docs/css-code-input-group--docs]

## Testing

We bundelen de CSS direct mee met de componenten zodat je dit niet apart hoeft in te laden. Let wel op met unit tests die in de Node omgeving draaien: die ondersteunen niet altijd standaard `.css` files. Voor vitest moet je bijvoorbeeld `pool: 'vmThreads',` aanzetten in de config als je de volgende error tegenkomt: `TypeError: Unknown file extension ".css"`
