# Rijkshuisstijl Community Figure component

## Beschrijving

De `Figure` component wordt gebruikt om afbeeldingen en `FigureCaption` correct te structureren binnen een webpagina. Dit component maakt gebruik van de `UtrechtFigure` uit de `@utrecht/component-library-react` en biedt extra stylingmogelijkheden voor het afronden van hoeken.

Dit component is overgenomen van de Gemeente Utrecht en gestyled door de Rijkshuisstijl Community.

## Anatomie

De Figure component bestaat uit de volgende elementen:

- Container (Figure): De hoofdcontainer waarin de afbeelding en bijschrift worden geplaatst.

- Afbeelding (Image): De afbeelding die binnen de Figure wordt weergegeven.

- Bijschrift (FigureCaption): Een optioneel bijschrift voor de afbeelding.

- RoundedCorner: Een optioneel element voor het afronden van een hoek (conform rijkshuisstijl)

## Voorbeelden met verkeerde implementatie

- Verkeerd gebruik van niet ondersteunde elementen

```jsx
// Verkeerd
<Figure>
  <div>Ongeldig element</div>
</Figure>

// Correct
<Figure>
  <Image alt="Voorbeeldafbeelding" src="./example.jpg" />
  <FigureCaption>Voorbeeld bijschrift</FigureCaption>
</Figure>

// Correct met een ronde hoek
<Figure>
  <RoundedCorner position="start-start" size="md">
    <Image alt="Voorbeeldafbeelding" src="/example.jpg" />
  </RoundedCorner>
  <FigureCaption>Voorbeeld bijschrift</FigureCaption>
</Figure>

```
