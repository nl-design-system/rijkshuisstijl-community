<!-- @license CC0-1.0 -->

# Omschrijving

Dit package bevat de specifieke code voor het component. Als je alle rijkshuisstijl community componenten wil kijk dan naar [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md]. Voor verdere informatie over het inzet van de component kijk naar onze documentatie [https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-separator--docs]

## Installatie

```bash
pnpm add @rijkshuisstijl-community/separator-react
```

## Gebruik

Separator, van de ARIA role="separator". "hr" van `<hr>`uit HTML is te onduidelijk buiten de context van code, "horizontal rule" te specifieke beschrijving van de originele rendering in HTML. De "separator" zou er ook heel anders uit kunnen zien dan een "rule" (lijn), en bovendien kan er voor andere tekstrichtingen wel eens een verticale variant komen.
"Divider" is ook een vaak gehoorde term hiervoor, misschien moet deze voor vindbaarheid ook genoemd worden in de documentatie.

### Voorbeeld 1

```tsx

<div class="utrecht-document">
  <hr class="utrecht-separator rhc-separator">
</div>

```

### Voorbeeld 2

Invisible

```tsx

<div class="utrecht-document">
  <hr class="utrecht-separator rhc-separator utrecht-separator--invisible">
</div>

```

## Testing

We bundelen de CSS direct mee met de componenten zodat je dit niet apart hoeft in te laden. Let wel op met unit tests die in de Node omgeving draaien: die ondersteunen niet altijd standaard `.css` files. Voor vitest moet je bijvoorbeeld `pool: 'vmThreads',` aanzetten in de config als je de volgende error tegenkomt: `TypeError: Unknown file extension ".css"`

## Rijkshuisstijl Community Componenten

**Direct aan de slag met [CSS](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md) | [React](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md) | [Web Components](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md) | [Twig](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md)**
