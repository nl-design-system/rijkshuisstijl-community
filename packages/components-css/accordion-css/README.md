<!-- @license CC0-1.0 -->

# Omschrijving

Dit package bevat de specifieke code voor het component. Als je alle rijkshuisstijl community componenten wil kijk dan naar [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md]. Voor verdere informatie over het inzet van de component kijk naar onze documentatie [https://rijkshuisstijl-community.vercel.app/?path=/docs/css-accordion--docs]

## Installatie

```bash
pnpm add @rijkshuisstijl-community/accordion-css
```

## Gebruik

```html
import '@rijkshuisstijl-community/accordion-css';
<div class="utrecht-accordion">
  <div
    class="utrecht-accordion__section"
    body="Een doodsche stilte spande alom als een sluier van zwijgen, of, na de lange middagsiësta, de avondrust zonder overgang van leven begon."
  >
    <h1 class="utrecht-accordion__header">
      <button
        class="utrecht-button utrecht-button--subtle utrecht-accordion__button"
        type="button"
        aria-expanded="true"
        aria-controls="utrecht-accordion_R_d_-panel"
        id="utrecht-accordion_R_d_-button"
      >
        <span class="utrecht-accordion__button-icon">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="currentColor"
          >
            <defs>
              <clipPath id="clippath">
                <rect width="14" height="8" style="fill:none;stroke-width:0px"></rect>
              </clipPath>
            </defs>
            <g style="clip-path:url(#clippath)">
              <path
                d="m7,8c-.26,0-.51-.1-.71-.29L.29,1.71C-.1,1.32-.1.68.29.29S1.32-.1,1.71.29l5.29,5.29L12.29.29c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41l-6,6c-.2.2-.45.29-.71.29Z"
                style="stroke-width:0px"
              ></path>
            </g>
          </svg>
        </span>
        <span class="utrecht-accordion__button-label"> Nederlandse lorem ipsum </span>
      </button>
    </h1>
    <div
      id="utrecht-accordion_R_d_-panel"
      class="utrecht-accordion__panel utrecht-accordion__panel--expanded"
      aria-hidden="false"
    >
      Een doodsche stilte spande alom als een sluier van zwijgen, of, na de lange middagsiësta, de avondrust zonder
      overgang van leven begon.
    </div>
  </div>
</div>
```

## Rijkshuisstijl Community Componenten

**Direct aan de slag met [CSS](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md) | [React](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md) | [Web Components](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md) | [Twig](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md)**
