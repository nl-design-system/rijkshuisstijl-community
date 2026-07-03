<!-- @license CC0-1.0 -->

# Omschrijving

Dit is de Footer React component van het Rijkshuisstijl Community Design System. Zie ook de volgende links:

- README.md voor alle React-componenten
  [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md]

## Installatie

```bash
pnpm add @rijkshuisstijl-community/footer-react
```

## Gebruik

Op de storybook voor Footer React component staan voorbeelden voor het gebruik van dit component[https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-footer--docs]

### Varianten

Naast de standaard Page Footer is er een compacte variant met alleen een tagline en enkele links, voor pagina's met een sterke taakfocus:

```tsx
<Footer variant="compact" tagline="De rijksoverheid. Voor Nederland">
  <Link href="#">Privacy</Link>
  <Link href="#">Toegankelijkheid</Link>
</Footer>
```

De compacte variant gebruikt alleen `tagline` en `children` (de links). De props voor de standaardvariant (`heading`, `headingId`, `columns`, `background`, `subFooter`, `backtotop`, `preFooter` en `preFooterMessage`) hebben in de compacte variant geen effect.

## Testing

We bundelen de CSS direct mee met de componenten zodat je dit niet apart hoeft in te laden. Let wel op met unit tests die in de Node omgeving draaien: die ondersteunen niet altijd standaard `.css` files. Voor vitest moet je bijvoorbeeld `pool: 'vmThreads',` aanzetten in de config als je de volgende error tegenkomt: `TypeError: Unknown file extension ".css"`
