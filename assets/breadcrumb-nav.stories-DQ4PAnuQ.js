import{j as e}from"./jsx-runtime-BlAj40OV.js";import{b as r,I as s}from"./index.esm-C4rqqejK.js";import{k as j,l as c}from"./index.esm-ByJjFMhT.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";/* empty css              */import"./objectWithoutProperties-BJfzkg-c.js";import"./extends-CF3RwP-h.js";const S=`<!-- @license CC0-1.0 -->

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
`,F={title:"Rijkshuisstijl/Breadcrumb navigation",id:"rhc-breadcrumb-nav",component:j,argTypes:{},parameters:{docs:{description:{component:S}}}},a={args:{children:[e.jsx(r,{href:"https://example.com/",index:0,rel:"home",children:"Home"}),e.jsx(r,{href:"https://example.com/search",index:1,rel:"up",children:"Zoeken"}),e.jsx(r,{href:"https://example.com/search?q=example",index:2,rel:"first",children:"Example"})]}},n={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"}),e.jsx(r,{href:"/a/",index:1,children:"Label"}),e.jsx(r,{current:!0,href:"/a/b/",index:2,children:"Label"})]},parameters:{docs:{description:{story:'For accessibility specify the `current` property, to render `aria-current="page"`.'}}}},i={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"}),e.jsx(c,{children:e.jsx(s,{icon:"chevron-right"})}),e.jsx(r,{href:"/a/",index:1,children:"Label"}),e.jsx(c,{children:e.jsx(s,{icon:"chevron-right"})}),e.jsx(r,{href:"/a/b/",index:2,children:"Label"})]}},t={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"}),e.jsx(r,{href:"/a/",index:1,children:"Label"}),e.jsx(r,{active:!0,current:!0,href:"/a/b/",index:2,children:"Label"})]}},d={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"}),e.jsx(r,{href:"/a/",index:1,children:"Label"}),e.jsx(r,{current:!0,disabled:!0,href:"/a/b/",index:2,children:"Label"})]}};var o,m,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="https://example.com/" index={0} rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/search" index={1} rel="up">
        Zoeken
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/search?q=example" index={2} rel="first">
        Example
      </BreadcrumbNavLink>]
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,h,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1}>
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavLink current href="/a/b/" index={2}>
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
}`,...(p=(h=n.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var b,v,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>
        <Icon icon={'chevron-right'} />
      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="/a/" index={1}>
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>
        <Icon icon={'chevron-right'} />
      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="/a/b/" index={2}>
        Label
      </BreadcrumbNavLink>]
  }
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var k,g,L;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1}>
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavLink active current href="/a/b/" index={2}>
        Label
      </BreadcrumbNavLink>]
  }
}`,...(L=(g=t.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var B,f,N;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1}>
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavLink current disabled href="/a/b/" index={2}>
        Label
      </BreadcrumbNavLink>]
  }
}`,...(N=(f=d.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const A=["Default","Current","Separator","Active","DisabledAndCurrent"];export{t as Active,n as Current,a as Default,d as DisabledAndCurrent,i as Separator,A as __namedExportsOrder,F as default};
