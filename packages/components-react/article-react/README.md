<!-- @license CC0-1.0 -->

# Omschrijving

Dit package bevat de specifieke code voor het component. Als je alle rijkshuisstijl community componenten wil kijk dan naar [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md]. Voor verdere informatie over het inzet van de component kijk naar onze documentatie [https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-article-docs]

## Installatie

```bash
pnpm add @rijkshuisstijl-community/article-react

```

## Gebruik

```tsx
<Article>
  <p>
    Lorem ipsum dolor sit amet. Aut amet quibusdam et atque soluta id unde provident non sequi dolor rem iusto expedita
    eum voluptates asperiores aut quae modi. 33 ipsa recusandae et repudiandae optio est ullam fugit sit dolores
    praesentium sed pariatur aspernatur. Et voluptatibus expedita aut odit sint vel eius dolores et nobis tempora et
    cupiditate rerum. Qui mollitia maiores non unde repellat a totam corrupti et tempore nihil est earum facilis hic
    odio nisi est eligendi quidem? Aut similique quasi non repellat expedita qui magni tempore ab aperiam voluptatum sit
    quia atque et enim alias ea voluptas internos. Qui quia eius vel alias dolores et expedita ipsum.
  </p>
</Article>
```

## Testing

We bundelen de CSS direct mee met de componenten zodat je dit niet apart hoeft in te laden. Let wel op met unit tests die in de Node omgeving draaien: die ondersteunen niet altijd standaard `.css` files. Voor vitest moet je bijvoorbeeld `pool: 'vmThreads',` aanzetten in de config als je de volgende error tegenkomt: `TypeError: Unknown file extension ".css"`

## Rijkshuisstijl Community Componenten

**Direct aan de slag met [CSS](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md) | [React](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md) | [Web Components](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md) | [Twig](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md)**
