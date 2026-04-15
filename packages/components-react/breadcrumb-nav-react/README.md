<!-- @license CC0-1.0 -->

# Omschrijving

Dit package bevat de specifieke code voor het component. Als je alle rijkshuisstijl community componenten wil kijk dan naar [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/README.md]. Voor verdere informatie over het inzet van de component kijk naar onze documentatie [https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-button--docs]

## Installatie

```bash
pnpm add @rijkshuisstijl-community/breadcrumb-nav-react
```

## Gebruik

### Voorbeeld 1

```tsx
<nav class="breadcrumbs">
  <a href="/">Home</a> /
  <a href="/contact" aria-current="page">Contact</a>
</nav>
<main>
  <h1>Contact</h1>
</main>
```

### Voorbeeld 2

Separator

```tsx
<BreadcrumbNav>
  <BreadcrumbNavLink href="/" index={0} rel="home">
    Home
  </BreadcrumbNavLink>
  <BreadcrumbNavSeparator>
    <Icon icon="chevron-right" />
  </BreadcrumbNavSeparator>
  <BreadcrumbNavLink href="/a/" index={1}>
    Label
  </BreadcrumbNavLink>
  <BreadcrumbNavSeparator>
    <Icon icon="chevron-right" />
  </BreadcrumbNavSeparator>
  <BreadcrumbNavLink href="/a/b/" index={2}>
    Label
  </BreadcrumbNavLink>
</BreadcrumbNav>
```

## Testing

We bundelen de CSS direct mee met de componenten zodat je dit niet apart hoeft in te laden. Let wel op met unit tests die in de Node omgeving draaien: die ondersteunen niet altijd standaard `.css` files. Voor vitest moet je bijvoorbeeld `pool: 'vmThreads',` aanzetten in de config als je de volgende error tegenkomt: `TypeError: Unknown file extension ".css"`

## Rijkshuisstijl Community Componenten

**Direct aan de slag met [CSS](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md) | [React](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/README.md) | [Web Components](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md) | [Twig](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md)**
