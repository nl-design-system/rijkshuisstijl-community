import{C as m}from"./index.esm-BwflJe8k.js";import{m as g}from"./merge-markdown-BtgmYwh_.js";/* empty css              */import"./index-BLZjEvYy.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./jsx-runtime-CLpGMVip.js";import"./index-Be-aV6DI.js";import"./clsx-B-dksMZM.js";import"./index-D5-rbeG3.js";const u=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community card component

Gebruik een card op een overzichtspagina om te linken naar een artikelpagina, zoals een nieuwsartikel, een vacature of een zoekresultaat.
De card bevat doorgaans de titel, inleiding en een afbeelding van de content.
De link is verplicht.

## Richtlijnen

- De heading van een card is een heading die eruit ziet als een link (maar zelf geen link is).
- De card is zelf geen anchor maar bevat een anchor die over de hele card heen valt met behulp van CSS. De link is dus actief in het hele gebied van de card. Dit zorgt ervoor dat een e-reader niet de hele content van de card opleest alsof het een link is maar de structuur van de card behoudt.
- De title prop vult zowel de title attribute als de aria-label van de anchor. Title zorgt dus voor zowel een beschrijvend label voor screen readers als een tooltip die verschijnt wanneer een gebruiker over de link hovered. Verwar titel niet met heading.
- Een card heeft meer content nodig dan alleen een heading. Vul dit aan met tekstuele en/of visuele content.
- De description wordt behandeld als een paragraaf in de card.
- De LinkLabel kan worden gebruikt bij de default-card om extra informatie te geven over de link/verwijzing van de card.

## Zo moet het niet

- Maak van de card zelf geen anchor of wrap de card niet in een anchor. Dit zorgt ervoor dat de content van de card niet meer op een juiste manier wordt opgelezen door een screen reader.

Niet:

\`\`\`html
<a className="rhc-card">
  <div className="rhc-card__content">...</div>
</a>
\`\`\`

Wel:

\`\`\`html
<div className="rhc-card">
  <span className="rhc-card__anchor">
    <a aria-label="aria-label" href="href" />
  </span>
  <div className="rhc-card__content">...</div>
</div>
\`\`\`

### Schermlezers

Met een schermlezer kan worden genavigeerd met behulp van koppen en links in een document.
De card is een link met een kop, dus beide navigatiemethoden kunnen worden gebruikt.
Een schermlezer leest eerst de heading, gevolgd door de rest van de inhoud.
`,D={title:"Rijkshuisstijl/Card",id:"rhc-card",component:m,argTypes:{appearance:{description:"Card appearance",control:{type:"select"},options:["default","full-bleed","horizontal"],defaultValue:"default",table:{category:"Variant"}},heading:{description:"Card heading",control:{type:"text"},defaultValue:"Card Heading",table:{category:"Props"}},imageSrc:{description:"Image source URL",control:{type:"text"},defaultValue:"",table:{category:"Props"}},imageAlt:{description:"Image alt text",control:{type:"text"},defaultValue:"",table:{category:"Props"}},description:{description:"Card content",control:{type:"text"},defaultValue:"",if:{arg:"appearance",neq:"horizontal"},table:{category:"Props"}},linkLabel:{description:"Link label",control:{type:"text"},defaultValue:"",if:{arg:"appearance",eq:"default"},table:{category:"Props"}},metaData:{description:"Metadata",control:{type:"text"},defaultValue:"",if:{arg:"appearance",neq:"horizontal"},table:{category:"Props"}},title:{description:"Anchor title (hover text) and aria-label attributes",control:{type:"text"},defaultValue:"",table:{category:"Props"}},href:{description:"Link",control:{type:"text"},defaultValue:"",table:{category:"Props"}}},args:{appearance:"default",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",heading:"Card Heading",href:"#",imageSrc:"./placeholder.jpg",linkLabel:"Link label",metaData:"Metadata",title:"Card Title"},tags:["autodocs"],parameters:{status:{type:"UNSTABLE"},docs:{description:{component:g([u])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/561",figma:"https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=472-1420&p=f&t=fuaKEQHb4FZ444xP-0",nldesignsystem:"https://nldesignsystem.nl/card-as-link",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},e={args:{appearance:"default",imageAlt:"Placeholder Image"}},a={args:{heading:"Full Bleed Card",appearance:"full-bleed",description:"This card has a background image.",imageAlt:"Placeholder Image"}},n={args:{heading:"Horizontal Card",appearance:"horizontal",imageAlt:"Placeholder Image"}};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    appearance: 'default',
    imageAlt: 'Placeholder Image'
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var o,l,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    heading: 'Full Bleed Card',
    appearance: 'full-bleed',
    description: 'This card has a background image.',
    imageAlt: 'Placeholder Image'
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var s,c,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    heading: 'Horizontal Card',
    appearance: 'horizontal',
    imageAlt: 'Placeholder Image'
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const P=["Default","FullBleed","Horizontal"];export{e as Default,a as FullBleed,n as Horizontal,P as __namedExportsOrder,D as default};
