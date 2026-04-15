<!-- @license CC0-1.0 -->

# Omschrijving

Dit package bevat de specifieke code voor het component. Als je alle rijkshuisstijl community componenten wil kijk dan naar [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md]. Voor verdere informatie over het inzet van de component kijk naar onze documentatie [https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-figure--docs]

## Installatie

```bash
pnpm add @rijkshuisstijl-community/figure-react
```

## Gebruik

De Figure component wordt gebruikt om afbeeldingen en FigureCaption correct te structureren binnen een webpagina. Dit component maakt gebruik van de UtrechtFigure uit de @utrecht/component-library-react en biedt extra stylingmogelijkheden voor het afronden van hoeken.

Dit component is overgenomen van de Gemeente Utrecht en gestyled door de Rijkshuisstijl Community.

### Voorbeeld 1

```tsx
<Figure>
  <Image alt="Voorbeeldafbeelding" src="./example.jpg" />
  <FigureCaption>Voorbeeld bijschrift</FigureCaption>
</Figure>
```

### Voorbeeld 2

```tsx
<Figure>
  <RoundedCorner position="start-start" size="md">
    <Image alt="Voorbeeldafbeelding" src="/example.jpg" />
  </RoundedCorner>
  <FigureCaption>Voorbeeld bijschrift</FigureCaption>
</Figure>
```

## Testing

We bundelen de CSS direct mee met de componenten zodat je dit niet apart hoeft in te laden. Let wel op met unit tests die in de Node omgeving draaien: die ondersteunen niet altijd standaard `.css` files. Voor vitest moet je bijvoorbeeld `pool: 'vmThreads',` aanzetten in de config als je de volgende error tegenkomt: `TypeError: Unknown file extension ".css"`

## Rijkshuisstijl Community Componenten

**Direct aan de slag met [CSS](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md) | [React](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md) | [Web Components](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md) | [Twig](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md)**
