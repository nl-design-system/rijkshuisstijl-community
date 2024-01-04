import{j as e}from"./jsx-runtime-Q5kDp4vx.js";import{f as y,a as n}from"./index.esm-LA3Jhkve.js";import"./index-DogsOklH.js";import"./objectWithoutProperties-JJTtvUQw.js";import"./getPrototypeOf-GRdCamOq.js";import"./index-MroJ3egt.js";import"./iframe-mL5_C8_i.js";import"../sb-preview/runtime.js";const k=`<!-- @license CC0-1.0 -->

# Logius link component
`,a=({href:g,children:f,iconLeft:L,iconRight:x,...b})=>e.jsxs(y,{href:g,...b,style:{"--utrecht-icon-inset-block-start":"0.2em"},children:[L&&e.jsx(n,{children:e.jsx("rhc-icon-calendar",{})}),f,x&&e.jsx(n,{children:e.jsx("rhc-icon-arrow-right",{})})]}),w={title:"Logius/Link",id:"logius-link",component:a,argTypes:{href:{description:"Url to link to",type:{name:"string",required:!0},table:{category:"Property"}},children:{description:"Link text - default webcomponent slot",type:{name:"string",required:!0},table:{category:"Webcomponent Slot"},defaultValue:""},iconLeft:{description:"Icon Left",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1},iconRight:{description:"Icon Right",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1}},args:{children:""},tags:["autodocs"],parameters:{docs:{description:{component:k}}},render:a},r={args:{href:"https://example.com/",children:"Label"}},t={args:{href:"https://example.com/",children:"Label",iconLeft:!0}},o={args:{href:"https://example.com/",children:"Label",iconRight:!0},name:"Link"};var c,s,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const C=["Default","IconLeft","IconRight"];export{r as Default,t as IconLeft,o as IconRight,C as __namedExportsOrder,w as default};
