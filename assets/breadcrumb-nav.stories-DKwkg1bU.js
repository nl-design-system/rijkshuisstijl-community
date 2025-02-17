import{Z as N}from"./index-KZK1ecKK.js";import{r as L}from"./README-C0dSPkg5.js";import{m as I}from"./merge-markdown-BtgmYwh_.js";import"./_commonjsHelpers-C932wzq6.js";N.define();const v={title:"Web Components/Breadcrumb navigation",id:"rhc-breadcrumb-nav-web",component:"rhc-breadcrumb-nav",argTypes:{},parameters:{status:{type:"STABLE"},docs:{description:{component:I([L])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1862-9575&t=YSjs9i2uQ5Eq3wto-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/443",nldesignsystem:"https://www.nldesignsystem.nl/breadcrumb-navigation/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},e={args:{elements:JSON.stringify([{type:"LINK",href:"https://example.com/",index:0,key:"home",rel:"home",text:"Home"},{type:"LINK",href:"https://example.com/search",index:1,key:"search",rel:"up",text:"Zoeken"},{type:"LINK",href:"https://example.com/example",index:2,key:"example",rel:"first",text:"Example"}])}},t={args:{elements:JSON.stringify([{type:"LINK",href:"https://example.com/",index:0,key:"home",rel:"home",text:"Home"},{type:"LINK",href:"https://example.com/search",index:1,key:"search",rel:"up",text:"Zoeken"},{type:"LINK",href:"https://example.com/example",index:2,key:"example",rel:"first",text:"Example",current:"true"}])},parameters:{docs:{description:{story:'For accessibility specify the `current` property, to render `aria-current="page"`.'}}}},n={args:{elements:JSON.stringify([{type:"LINK",href:"/",index:0,key:"home",rel:"home",text:"Home"},{type:"SEPARATOR",key:"icon",icon:"chevron-right"},{type:"LINK",href:"https://example.com/search",index:1,key:"search",rel:"up",text:"Zoeken"},{type:"SEPARATOR",key:"icon",icon:"chevron-right"},{type:"LINK",href:"https://example.com/example",index:2,key:"example",rel:"first",text:"Example",current:"true"}])}},r={args:{elements:JSON.stringify([{type:"LINK",href:"https://example.com/",index:0,key:"home",rel:"home",text:"Home"},{type:"LINK",href:"https://example.com/search",index:1,key:"search",rel:"up",text:"Zoeken"},{type:"LINK",href:"https://example.com/example",index:2,key:"example",text:"Example",active:"true",current:"true"}])}},s={args:{elements:JSON.stringify([{type:"LINK",href:"https://example.com/",index:0,key:"home",rel:"home",text:"Home"},{type:"LINK",href:"https://example.com/search",index:1,key:"search",rel:"up",text:"Zoeken"},{type:"LINK",href:"https://example.com/example",index:2,key:"example",text:"Example",active:"true",disabled:"true"}])}};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    elements: JSON.stringify([{
      type: 'LINK',
      href: 'https://example.com/',
      index: 0,
      key: 'home',
      rel: 'home',
      text: 'Home'
    }, {
      type: 'LINK',
      href: 'https://example.com/search',
      index: 1,
      key: 'search',
      rel: 'up',
      text: 'Zoeken'
    }, {
      type: 'LINK',
      href: 'https://example.com/example',
      index: 2,
      key: 'example',
      rel: 'first',
      text: 'Example'
    }])
  }
} as StoryObj<typeof meta>`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    elements: JSON.stringify([{
      type: 'LINK',
      href: 'https://example.com/',
      index: 0,
      key: 'home',
      rel: 'home',
      text: 'Home'
    }, {
      type: 'LINK',
      href: 'https://example.com/search',
      index: 1,
      key: 'search',
      rel: 'up',
      text: 'Zoeken'
    }, {
      type: 'LINK',
      href: 'https://example.com/example',
      index: 2,
      key: 'example',
      rel: 'first',
      text: 'Example',
      current: 'true'
    }])
  },
  parameters: {
    docs: {
      description: {
        story: \`For accessibility specify the \\\`current\\\` property, to render \\\`aria-current="page"\\\`.\`
      }
    }
  }
} as StoryObj<typeof meta>`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var x,h,l;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    elements: JSON.stringify([{
      type: 'LINK',
      href: '/',
      index: 0,
      key: 'home',
      rel: 'home',
      text: 'Home'
    }, {
      type: 'SEPARATOR',
      key: 'icon',
      icon: 'chevron-right'
    }, {
      type: 'LINK',
      href: 'https://example.com/search',
      index: 1,
      key: 'search',
      rel: 'up',
      text: 'Zoeken'
    }, {
      type: 'SEPARATOR',
      key: 'icon',
      icon: 'chevron-right'
    }, {
      type: 'LINK',
      href: 'https://example.com/example',
      index: 2,
      key: 'example',
      rel: 'first',
      text: 'Example',
      current: 'true'
    }])
  }
} as StoryObj<typeof meta>`,...(l=(h=n.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var y,d,u;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    elements: JSON.stringify([{
      type: 'LINK',
      href: 'https://example.com/',
      index: 0,
      key: 'home',
      rel: 'home',
      text: 'Home'
    }, {
      type: 'LINK',
      href: 'https://example.com/search',
      index: 1,
      key: 'search',
      rel: 'up',
      text: 'Zoeken'
    }, {
      type: 'LINK',
      href: 'https://example.com/example',
      index: 2,
      key: 'example',
      text: 'Example',
      active: 'true',
      current: 'true'
    }])
  }
} as StoryObj<typeof meta>`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,k,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    elements: JSON.stringify([{
      type: 'LINK',
      href: 'https://example.com/',
      index: 0,
      key: 'home',
      rel: 'home',
      text: 'Home'
    }, {
      type: 'LINK',
      href: 'https://example.com/search',
      index: 1,
      key: 'search',
      rel: 'up',
      text: 'Zoeken'
    }, {
      type: 'LINK',
      href: 'https://example.com/example',
      index: 2,
      key: 'example',
      text: 'Example',
      active: 'true',
      disabled: 'true'
    }])
  }
} as StoryObj<typeof meta>`,...(g=(k=s.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const E=["Default","Current","Separator","Active","DisabledAndCurrent"];export{r as Active,t as Current,e as Default,s as DisabledAndCurrent,n as Separator,E as __namedExportsOrder,v as default};
