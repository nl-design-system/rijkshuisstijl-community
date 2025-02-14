import{j as e}from"./jsx-runtime-CLpGMVip.js";import{a as r,I as o}from"./index.esm-H_pj5QCx.js";import{r as y}from"./README-C0dSPkg5.js";import{m as j}from"./merge-markdown-BtgmYwh_.js";import{B as S,a as m}from"./index-D8tk2uj3.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./paragraph-Bm2wF22U.js";import"./index-D5-rbeG3.js";const M={title:"Rijkshuisstijl/Breadcrumb navigation",id:"rhc-breadcrumb-nav",component:S,argTypes:{},parameters:{status:{type:"STABLE"},docs:{description:{component:j([y])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1862-9575&t=YSjs9i2uQ5Eq3wto-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/443",nldesignsystem:"https://www.nldesignsystem.nl/breadcrumb-navigation/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},a={args:{children:[e.jsx(r,{href:"https://example.com/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"https://example.com/search",index:1,rel:"up",children:"Zoeken"},"search"),e.jsx(r,{href:"https://example.com/search?q=example",index:2,rel:"first",children:"Example"},"example")]}},n={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(r,{current:!0,href:"/a/b/",index:2,children:"Label"},"label-2")]},parameters:{docs:{description:{story:'For accessibility specify the `current` property, to render `aria-current="page"`.'}}}},i={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(m,{children:e.jsx(o,{icon:"chevron-right"})},"icon"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(m,{children:e.jsx(o,{icon:"chevron-right"})},"icon-2"),e.jsx(r,{href:"/a/b/",index:2,children:"Label"},"label-2")]}},c={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(r,{active:!0,current:!0,href:"/a/b/",index:2,children:"Label"},"label-2")]}},s={args:{children:[e.jsx(r,{href:"/",index:0,rel:"home",children:"Home"},"home"),e.jsx(r,{href:"/a/",index:1,children:"Label"},"label"),e.jsx(r,{current:!0,disabled:!0,href:"/a/b/",index:2,children:"Label"},"label-2")]}};var t,d,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="https://example.com/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/search" index={1} key="search" rel="up">
        Zoeken
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="https://example.com/search?q=example" index={2} key="example" rel="first">
        Example
      </BreadcrumbNavLink>]
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,b,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var p,x,k;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var v,L,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavLink active current href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>]
  }
}`,...(f=(L=c.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var B,N,g;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>, <BreadcrumbNavLink current disabled href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>]
  }
}`,...(g=(N=s.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};const O=["Default","Current","Separator","Active","DisabledAndCurrent"];export{c as Active,n as Current,a as Default,s as DisabledAndCurrent,i as Separator,O as __namedExportsOrder,M as default};
