<!-- @license CC0-1.0 -->

# Omschrijving

Dit package bevat de specifieke code voor het component. Als je alle rijkshuisstijl community componenten wil kijk dan naar [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md]. Voor verdere informatie over het inzet van de component kijk naar onze documentatie [https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-link-docs]

## Installatie

```bash
pnpm add @rijkshuisstijl-community/link-react

```

## Gebruik

### Voorbeeld 1

Losse link

```tsx
<Link inline href="ekstern.com">
  ekstern <Icon icon="external" />
</Link>
```

### Voorbeeld 2

Link in een lopende tekst zonder icoon

```tsx
<Paragraph>
  Het was in het voorjaar 1345, dat ...
  <Link inline href="ekstern.com">
    ekstern
  </Link>
  ...Onder die steden, welke vanouds aan de grafelijke kroon...
</Paragraph>
```

## Rijkshuisstijl Community Componenten

**Direct aan de slag met [CSS](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md) | [React](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md) | [Web Components](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md) | [Twig](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md)**
