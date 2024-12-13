import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as r,I as c}from"./index.esm-CbwjQTRP.js";import{d as j,e as m}from"./index-BclNPbce.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-j0aIpYJF.js";import"./index-BlU3qzUC.js";import"./objectWithoutProperties-BJfzkg-c.js";const y=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Breadcrumb navigation component

[NL Design System](https://www.nldesignsystem.nl/breadcrumb-navigation/) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1862-9575&t=YSjs9i2uQ5Eq3wto-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/443)

Breadcrumb navigation, ook wel "kruimelpad" genoemd, gebruik je als de pagina's van je site georganiseerd zijn in een boomstructuur. Als je site teveel pagina's heeft om naar elke pagina een link te maken op de homepage bijvoorbeeld. De eerste link is altijd naar de homepage.

Het kruimelpad moet alleen links bevatten naar hogere niveau's of eerdere stappen. De pagina zelf is niet onderdeel van het kruimelpad. Gebruik geen breadcrumb navigation op de homepage, want die heeft geen hogere niveaus.

## Usage

\`\`\`tsx
import { BreadcrumbNav, BreadcrumbNavLink, BreadcrumbNavSeparator } from '@rijkshuisstijl-community/components-react';

<BreadcrumbNav>
  <BreadcrumbNavLink href="/" rel="home" index={0}>
    Home
  </BreadcrumbNavLink>
  <BreadcrumbNavLink href="/a/" index={1}>
    Label
  </BreadcrumbNavLink>
  <BreadcrumbNavLink href="/a/b/" index={2}>
    Label
  </BreadcrumbNavLink>
</BreadcrumbNav>;
\`\`\`

## Rel

Stel je voor: je hebt _breacrumb navigation_ op de derde pagina met zoekresultaten voor “openingstijden zwembad”.
De huidige URL is \`https://example.com/search?q=example?page=3\`.
Dan kan het handig zijn om terug te gaan naar de eerste pagina van de zoekresultaten.
Het kan ook handig zijn om terug te gaan naar de zoekpagina, om andere zoektermen te kiezen.

- **Home**: \`rel="home"\`
- **Zoeken**: \`rel="up"\`
- **Example 1** van “example”: \`rel="first"\`
`,I={title:"Rijkshuisstijl/Breadcrumb navigation",id:"rhc-breadcrumb-nav",component:j,argTypes:{},parameters:{status:{type:"STABLE"},docs:{description:{component:y}}}},a={args:{children:[e.jsx(r,{href:"https://example.com/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"https://example.com/search",index:1,rel:"up",children:"Zoeken"},"search"),e.jsx(r,{href:"https://example.com/search?q=example",index:2,rel:"first",children:"Example"},"example")]}},n={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(r,{current:!0,href:"/a/b/",index:2,children:"Label"},"label-2")]},parameters:{docs:{description:{story:'For accessibility specify the `current` property, to render `aria-current="page"`.'}}}},i={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(m,{children:e.jsx(c,{icon:"chevron-right"})},"icon"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(m,{children:e.jsx(c,{icon:"chevron-right"})},"icon-2"),e.jsx(r,{href:"/a/b/",index:2,children:"Label"},"label-2")]}},o={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(r,{active:!0,current:!0,href:"/a/b/",index:2,children:"Label"},"label-2")]}},t={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(r,{current:!0,disabled:!0,href:"/a/b/",index:2,children:"Label"},"label-2")]}};var s,d,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="https://example.com/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/search" index={1} key="search" rel="up">
        Zoeken
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/search?q=example" index={2} key="example" rel="first">
        Example
      </BreadcrumbNavLink>]
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,u,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var p,k,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var x,g,L;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavLink active current href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>]
  }
}`,...(L=(g=o.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var B,f,N;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavLink current disabled href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>]
  }
}`,...(N=(f=t.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const q=["Default","Current","Separator","Active","DisabledAndCurrent"];export{o as Active,n as Current,a as Default,t as DisabledAndCurrent,i as Separator,q as __namedExportsOrder,I as default};
