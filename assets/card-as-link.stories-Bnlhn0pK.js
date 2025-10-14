import{l as m}from"./index-VTlHfQi9.js";import{m as g}from"./merge-markdown-D8Eslh9D.js";import{r as u}from"./card-as-link-CKyUuTPx.js";import"./iframe-CLJWzYSL.js";import"./preload-helper-Dp1pzeXC.js";m.define();const P={title:"Card as Link",id:"rhc-card-as-link-web",component:"rhc-card-as-link",argTypes:{appearance:{description:"Card appearance",control:{type:"select"},options:["default","full-bleed","horizontal"],defaultValue:"default",table:{category:"Variant"}},heading:{description:"Card heading",control:{type:"text"},defaultValue:"Card Heading",table:{category:"Props"}},imageSrc:{description:"Image source URL",control:{type:"text"},defaultValue:"",table:{category:"Props"}},imageAlt:{description:"Image alt text",control:{type:"text"},defaultValue:"",table:{category:"Props"}},description:{description:"Card content",control:{type:"text"},defaultValue:"",if:{arg:"appearance",neq:"horizontal"},table:{category:"Props"}},linkLabel:{description:"Link label",control:{type:"text"},defaultValue:"",if:{arg:"appearance",eq:"default"},table:{category:"Props"}},metaData:{description:"Metadata",control:{type:"text"},defaultValue:"",if:{arg:"appearance",neq:"horizontal"},table:{category:"Props"}},title:{description:"Anchor title (hover text) and aria-label attributes",control:{type:"text"},defaultValue:"",table:{category:"Props"}},href:{description:"Link",control:{type:"text"},defaultValue:"",table:{category:"Props"}}},args:{appearance:"default",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",heading:"Card Heading",href:"#",imageSrc:"/placeholder.jpg",linkLabel:"Link label",metaData:"Metadata",title:"Card Title"},tags:["autodocs"],parameters:{status:{type:"UNSTABLE"},docs:{description:{component:g([u])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/CardAsLink.tsx",figma:"https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=472-1420&p=f&t=fuaKEQHb4FZ444xP-0",nldesignsystem:"https://nldesignsystem.nl/card-as-link",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},e={args:{appearance:"default",imageAlt:"Placeholder Image"}},a={args:{heading:"Full Bleed Card",appearance:"full-bleed",description:"This card has a background image.",imageAlt:"Placeholder Image"}},t={args:{heading:"Horizontal Card",appearance:"horizontal",imageAlt:"Placeholder Image"}};var r,o,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    appearance: 'default',
    imageAlt: 'Placeholder Image'
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var i,n,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    heading: 'Full Bleed Card',
    appearance: 'full-bleed',
    description: 'This card has a background image.',
    imageAlt: 'Placeholder Image'
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    heading: 'Horizontal Card',
    appearance: 'horizontal',
    imageAlt: 'Placeholder Image'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const x=["Default","FullBleed","Horizontal"];export{e as Default,a as FullBleed,t as Horizontal,x as __namedExportsOrder,P as default};
