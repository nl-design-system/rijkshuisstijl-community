import{j as e}from"./jsx-runtime-8e0d6756.js";import{a as y,b as n}from"./index.esm-88553401.js";import"./index-d665635d.js";import"./getPrototypeOf-624f05c9.js";import"./iframe-edc97045.js";import"../sb-preview/runtime.js";const k=`<!-- @license CC0-1.0 -->

# Logius link component
`,a=({href:g,children:f,iconLeft:L,iconRight:b,...x})=>e.jsxs(y,{href:g,...x,style:{"--utrecht-icon-inset-block-start":"0.2em"},children:[L&&e.jsx(n,{children:e.jsx("rhc-icon-calendar",{})}),f,b&&e.jsx(n,{children:e.jsx("rhc-icon-arrow-right",{})})]}),V={title:"Logius/Link",id:"logius-link",component:a,argTypes:{href:{description:"Url to link to",type:{name:"string",required:!0},table:{category:"Property"}},children:{description:"Link text - default webcomponent slot",type:{name:"string",required:!0},table:{category:"Webcomponent Slot"},defaultValue:""},iconLeft:{description:"Icon Left",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1},iconRight:{description:"Icon Right",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1}},args:{children:""},tags:["autodocs"],parameters:{docs:{description:{component:k}}},render:a},r={args:{href:"https://example.com/",children:"Label"}},t={args:{href:"https://example.com/",children:"Label",iconLeft:!0}},o={args:{href:"https://example.com/",children:"Label",iconRight:!0},name:"Link"};var c,s,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com/',
    children: 'Label'
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com/',
    children: 'Label',
    iconLeft: true
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,h,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com/',
    children: 'Label',
    iconRight: true
  },
  name: 'Link'
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const q=["Default","IconLeft","IconRight"];export{r as Default,t as IconLeft,o as IconRight,q as __namedExportsOrder,V as default};
//# sourceMappingURL=link.stories-a6193ba6.js.map
