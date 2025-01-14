import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as r,I as d}from"./index.esm-rqj7ILzY.js";import{m as B}from"./merge-markdown-CQvfZ6M6.js";import{d as y,e as s}from"./index-DoNj3aom.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-CgpWq_u8.js";const N=`<!-- @license CC0-1.0 -->

# Breadcrumb navigation

Breadcrumb navigation, ook wel "kruimelpad" genoemd, gebruik je als de pagina's van je site georganiseerd zijn in een boomstructuur. Als je site teveel pagina's heeft om naar elke pagina een link te maken op de homepage bijvoorbeeld. De eerste link is altijd naar de homepage.

Het kruimelpad moet alleen links bevatten naar hogere niveau's of eerdere stappen. De pagina zelf is niet onderdeel van het kruimelpad. Gebruik geen breadcrumb navigation op de homepage, want die heeft geen hogere niveaus.

## HTML

Gebruik een \`nav\` element, want het is handig dat het kruimelpad een _navigation landmark_ is. Het kruimelpad is zelden de enige _navigation landmark_ op de pagina en landmarks moeten wel duidelijk te onderscheiden zijn. Gebruik daarom \`aria-label\` of \`aria-labelledby\` met een duidelijk label.

Gebruik een heading element met \`aria-labelledby\`, zodat het label zichtbaar is wanneer de CSS niet geladen kan worden. Zonder stijl is het kruimelpad niet duidelijk herkenbaar, dan maakt de heading dat duidelijk.

De _breadcrumb navigation_ is niet een onderdeel dat opgezocht wordt via heading navigatie van een _screen reader_. Verberg de heading met \`aria-hidden="true"\` zodat de headings uit de main content sneller te vinden zijn.

Bijvoorbeeld:

\`\`\`html
<nav aria-labelledby="breadcrumb-heading">
  <h2 id="breadcrumb-heading" aria-hidden="true">Kruimelpad</h2>
  ...kruimelpad...
</nav>
\`\`\`

Gebruik \`rel\` om duidelijk te maken wat het doel is van de links. ([WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)). Gebruik [\`rel="home"\`](https://microformats.org/wiki/rel-home) voor de link naar de homepage (deze relatie is nog slechts een voorstel). Gebruik [\`rel="up"\`](https://microformats.org/wiki/rel-up) voor pagina's die één niveau hoger zijn in een hierarchie. Gebruik \`rel="first"\` voor de eerste pagina in een serie.

## Hoe het niet moet

### Navigatie in de verkeerde _landmark_

Plaats het \`<nav>\` HTML-element met de breadcrumb navigation niet binnen de _main page content_, ofwel het \`<main>\` HTML-element.

Niet:

\`\`\`html
<main>
  <nav class="breadcrumbs">
    <a href="/">Home</a> /
    <a href="/contact" aria-current="page">Contact</a>
  </nav>
  <h1>Contact</h1>
</main>
\`\`\`

Wel:

\`\`\`html
<nav class="breadcrumbs">
  <a href="/">Home</a> /
  <a href="/contact" aria-current="page">Contact</a>
</nav>
<main>
  <h1>Contact</h1>
</main>
\`\`\`

## Related info

- [Google Search Central - Advanced SEO - Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb)
- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)
- [Breadcrumbs — Adobe Spectrum Design System](https://spectrum.adobe.com/page/breadcrumbs/)
- [Exploring Markup for Breadcrumbs — Chris Coyier](https://css-tricks.com/markup-for-breadcrumbs/)

## Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): gebruik het \`<nav>\` element voor de \`navigation\` landmark role.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)
- [WCAG eis 2.4.5](https://www.w3.org/TR/WCAG21/#multiple-ways)
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de \`navigation\` landmark maakt duidelijk dat het om het broodkruimelpad gaat. Zie ook: [Using \`aria-label\` to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5).
- [WCAG eis 2.4.8](https://www.w3.org/TR/WCAG21/#location):
  - gebruik \`<a aria-current="location">\` om de huidige pagina te markeren
  - een kruimelpad is een manier om duidelijk te maken waar de gebruiker zich bevind in de context van een site met meerdere pagina's.
`,z={title:"Rijkshuisstijl/Breadcrumb navigation",id:"rhc-breadcrumb-nav",component:y,argTypes:{},parameters:{status:{type:"STABLE"},docs:{description:{component:B([N])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1862-9575&t=YSjs9i2uQ5Eq3wto-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/443",nldesignsystem:"https://www.nldesignsystem.nl/breadcrumb-navigation/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},a={args:{children:[e.jsx(r,{href:"https://example.com/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"https://example.com/search",index:1,rel:"up",children:"Zoeken"},"search"),e.jsx(r,{href:"https://example.com/search?q=example",index:2,rel:"first",children:"Example"},"example")]}},n={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(r,{current:!0,href:"/a/b/",index:2,children:"Label"},"label-2")]},parameters:{docs:{description:{story:'For accessibility specify the `current` property, to render `aria-current="page"`.'}}}},i={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(s,{children:e.jsx(d,{icon:"chevron-right"})},"icon"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(s,{children:e.jsx(d,{icon:"chevron-right"})},"icon-2"),e.jsx(r,{href:"/a/b/",index:2,children:"Label"},"label-2")]}},t={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(r,{active:!0,current:!0,href:"/a/b/",index:2,children:"Label"},"label-2")]}},o={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(r,{current:!0,disabled:!0,href:"/a/b/",index:2,children:"Label"},"label-2")]}};var m,l,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="https://example.com/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/search" index={1} key="search" rel="up">
        Zoeken
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/search?q=example" index={2} key="example" rel="first">
        Example
      </BreadcrumbNavLink>]
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var h,u,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavLink current href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>]
  },
  parameters: {
    docs: {
      description: {
        story: \`For accessibility specify the \\\`current\\\` property, to render \\\`aria-current="page"\\\`.\`
      }
    }
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var p,k,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavSeparator key="icon">
        <Icon icon={'chevron-right'} />
      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavSeparator key="icon-2">
        <Icon icon={'chevron-right'} />
      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>]
  }
}`,...(g=(k=i.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var v,x,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavLink active current href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>]
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var L,w,j;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavLink current disabled href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>]
  }
}`,...(j=(w=o.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const D=["Default","Current","Separator","Active","DisabledAndCurrent"];export{t as Active,n as Current,a as Default,o as DisabledAndCurrent,i as Separator,D as __namedExportsOrder,z as default};
