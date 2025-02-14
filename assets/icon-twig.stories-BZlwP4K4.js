import{c as l}from"./TwigRenderer-BanaRAdq.js";import{m}from"./merge-markdown-BtgmYwh_.js";import"./jsx-runtime-CLpGMVip.js";import"./twig-BFc-qTWi.js";import"./_commonjsHelpers-C932wzq6.js";const p=`{% from "attributes.twig" import parse_attributes %}
{%- set attributes = attributes|default({'class': []})|merge({
  'class': attributes.class|default(['utrecht-icon']),
  'role': 'presentation',
  'aria-hidden': 'true'
}) -%}
{%- set svg_attributes = svg_attributes|default({
  'class':['icon','icon-tabler','icon-tabler-' ~ icon],
  'xmlns':'http://www.w3.org/2000/svg',
  'width': 24,
  'height': 24,
  'viewBox': '0 0 24 24',
  'fill': 'none',
  'stroke': 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
})
-%}
<span{{ parse_attributes(attributes) }}>
  <svg{{ parse_attributes(svg_attributes) }}>
    <use xlink:href="node_modules/@tabler/icons-sprite/dist/tabler-sprite.svg#tabler-{{ icon }}" />
  </svg>
</span>
`,d={activiteit:"calendar-check","agile-werken":"arrow-iteration","alert-circle":"alert-circle","api-inrichting":"api","arrows-sort":"arrows-sort",audio:"volume",bel:"bell",bewerken:"edit",blog:"file-pencil",briefcase:"briefcase",car:"car","circle-check":"circle-check","chevron-right":"chevron-right",comment:"message-dots",communicatie:"bubble",delen:"share","delta-naar-links":"caret-left","delta-naar-rechts":"caret-right","delta-omhoog":"caret-up","delta-omlaag":"caret-down","diagonale-pijl":"arrow-up-right",downloaden:"download",inbox:"inbox","currency-euro":"currency-euro","externe-link":"external-link",favoriet:"heart","foto-vergroten":"arrows-diagonal",gegevensuitwisseling:"transfer","geluid-aan":"volume","geluid-uit":"volume-off","haakse-pijl":"corner-left-up",hashtag:"hash",home:"home",info:"info-small","info-circle":"info-circle","info-square":"info-square",inloggen:"login2",instellingen:"settings","interne-link":"link",kalender:"calendar-check",klok:"clock",kruis:"x","let-op-met-loep":"alert-circle","let-op":"alert-triangle",locatiemarker:"map-pin",mail:"mail",meer:"dots-vertical",menu:"menu2",nieuws:"news",paperclip:"paperclip","permanent-beta":"backhoe","pijl-naar-rechts":"arrow-narrow-right","pijl-naar-rechtsboven":"arrow-up-right","pijl-omhoog":"arrow-narrow-up","pijl-omlaag":"arrow-narrow-down",plus:"plus",printer:"printer",publicatie:"file","rechte-pijl":"arrow-narrow-up",refresh:"reload",rss:"rss",save:"device-floppy",school:"school","secure-link":"lock",smartphone:"device-mobile","sort-ascending":"sort-ascending","sort-descending":"sort-descending",tegelweergave:"grid-dots",telefoon:"phone",terug:"arrow-narrow-left",toegankelijkheid:"eye",toelichting:"square","uit-aanknop":"power",upload:"upload",user:"user",versleutelen:"cloud-lock",verwijderen:"trash",verzenden:"send",video:"player-play",vinkje:"check",vraagteken:"question-mark",zoek:"search"},u=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Twig icon component

Dit component is een wrapper om een SVG element. Door dit component te gebruiken heeft deze constant dezelfde styling en grootte.

## Usage

TODO: Duidelijke omschrijving hoe het Twig icon component te gebruiken in een Drupal omgeving.

Het Twig icon component kan op gelimiteerde manieren worden gebruikt veregeleken met het [React icon component](?path=/docs/rhc-icon--docs). Hieronder staan de verschillende manieren beschreven, beginnend met de makkelijkste manier.

- Standaard is er de optie om een icon property mee te geven met dit component, wat staat voor een van de ondersteunde icon IDs uit de [icon set](?path=/docs/rhc-templates-default-icon-set--docs) van de Rijkshuisstijl Community.

\`\`\`twig
{% include "icon.twig" with { icon: 'home' } %}
\`\`\`
`;/* @license CC0-1.0 */const r=Object.values(d),g=l(p),f={title:"Twig Components/Icon",id:"rhc-twig-icon",component:g,argTypes:{icon:{options:r,control:{type:"select",labels:r}}},parameters:{docs:{description:{component:m([u])}},status:{type:"STABLE"}}},e={args:{icon:"home"},name:"Home"},n={args:{icon:"brand-x"},name:"Custom icon"};var t,o,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    icon: 'home'
  },
  name: 'Home'
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var a,s,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    icon: 'brand-x'
  },
  name: 'Custom icon'
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const j=["Default","CustomIcon"];export{n as CustomIcon,e as Default,j as __namedExportsOrder,f as default};
