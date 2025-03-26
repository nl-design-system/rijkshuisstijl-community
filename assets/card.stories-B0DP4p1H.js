import{C as m}from"./index.esm-DXdSxwZF.js";import{r as g}from"./card-C1M50zIh.js";import{m as u}from"./merge-markdown-566X0PcZ.js";import"./index-F0AouRE7.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./jsx-runtime-D_zvdyIk.js";const P={title:"Rijkshuisstijl/Card",id:"rhc-card",component:m,argTypes:{appearance:{description:"Card appearance",control:{type:"select"},options:["default","full-bleed","horizontal"],defaultValue:"default",table:{category:"Variant"}},heading:{description:"Card heading",control:{type:"text"},defaultValue:"Card Heading",table:{category:"Props"}},imageSrc:{description:"Image source URL",control:{type:"text"},table:{category:"Props"}},imageAlt:{description:"Image alt text",control:{type:"text"},table:{category:"Props"}},description:{description:"Card content",control:{type:"text"},if:{arg:"appearance",neq:"horizontal"},table:{category:"Props"}},linkLabel:{description:"Link label",control:{type:"text"},if:{arg:"appearance",eq:"default"},table:{category:"Props"}},metadata:{description:"Metadata",control:{type:"text"},if:{arg:"appearance",neq:"horizontal"},table:{category:"Props"}},title:{description:"Anchor title (hover text) and aria-label attributes",control:{type:"text"},table:{category:"Props"}},href:{description:"Link",control:{type:"text"},table:{category:"Props"}}},args:{appearance:"default",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",heading:"Card Heading",href:"#",imageSrc:"./placeholder.jpg",linkLabel:"Link label",metadata:"Metadata",title:"Card Title"},tags:["autodocs"],parameters:{status:{type:"UNSTABLE"},docs:{description:{component:u([g])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/561",figma:"https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=472-1420&p=f&t=fuaKEQHb4FZ444xP-0",nldesignsystem:"https://nldesignsystem.nl/card-as-link",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},e={args:{appearance:"default",imageAlt:"Placeholder Image"}},a={args:{heading:"Full Bleed Card",appearance:"full-bleed",description:"This card has a background image.",imageAlt:"Placeholder Image"}},t={args:{heading:"Horizontal Card",appearance:"horizontal",imageAlt:"Placeholder Image"}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    appearance: 'default',
    imageAlt: 'Placeholder Image'
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var n,l,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    heading: 'Full Bleed Card',
    appearance: 'full-bleed',
    description: 'This card has a background image.',
    imageAlt: 'Placeholder Image'
  }
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    heading: 'Horizontal Card',
    appearance: 'horizontal',
    imageAlt: 'Placeholder Image'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const x=["Default","FullBleed","Horizontal"];export{e as Default,a as FullBleed,t as Horizontal,x as __namedExportsOrder,P as default};
