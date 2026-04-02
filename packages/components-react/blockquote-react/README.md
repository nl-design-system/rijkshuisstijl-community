<!-- @license CC0-1.0 -->

# Omschrijving

Dit package bevat de specifieke code voor het component. Als je alle rijkshuisstijl community componenten wil kijk dan naar [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/README.md]. Voor verdere informatie over het inzet van de component kijk naar onze documentatie [https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-blockquote--docs]

## Installatie

```bash
pnpm add @rijkshuisstijl-community/blockquote-react
```

## Gebruik

Quotes worden gebruikt om uitspraken te accentueren. De quote bestaat uit een uitspraak en een bronvermelding.

### Voorbeeld 1

```tsx
<blockquote class="utrecht-blockquote__quote">"Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan"</blockquote>
```

### Voorbeeld 2

```tsx
<Blockquote attribution="— Pippi Langkous">Ik heb het nog nooit gedaan dus ik denk dat ik het wel kan</Blockquote>
```

## Testing

We bundelen de CSS direct mee met de componenten zodat je dit niet apart hoeft in te laden. Let wel op met unit tests die in de Node omgeving draaien: die ondersteunen niet altijd standaard `.css` files. Voor vitest moet je bijvoorbeeld `pool: 'vmThreads',` aanzetten in de config als je de volgende error tegenkomt: `TypeError: Unknown file extension ".css"`

## Rijkshuisstijl Community Componenten

**Direct aan de slag met [CSS](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md) | [React](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/README.md) | [Web Components](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md) | [Twig](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md)**
