import{j as a}from"./jsx-runtime-8Jttx2DA.js";import{M as r,t as h}from"./index.esm-Tj8qSLCD.js";import"./index-BzhKaBtb.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */import"./index-CgFCBr0q.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./clsx-B-dksMZM.js";import"./index-BhpIufNd.js";import"./index-DYgQ_QFa.js";const L=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Message List component

NL design system - geen | [Figma](https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4070-5888&node-type=frame&t=xhXU5ugIkPqvOZwt-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/556)

## Usage

\`\`\`tsx
import { MessageList, MessageListItem } from '@rijkshuisstijl-community/components-react';

<MessageList>
  <MessageListItem description={'Uw pensioenoverzicht'} href={'#'} label={'Pensioenfonds'} metaData={'Meta Data'} />
</MessageList>;
\`\`\`
`,P={title:"Rijkshuisstijl/Message List/Message List Item",id:"rhc-message-list-item",component:r,args:{description:"Description",href:"#",label:"Label",metaData:"Meta Data"},argTypes:{description:{description:"Description",control:"text",table:{category:"API"}},href:{description:"Target URL",control:"text",table:{category:"API"}},label:{description:"Label",control:"text",table:{category:"API"}},metaData:{description:"Meta data",control:"text",table:{category:"API"}}},parameters:{status:{type:"STABLE"},docs:{description:{component:L}}},render:g=>a.jsx(h,{children:a.jsx(r,{...g})}),tags:["autodocs"]},e={args:{description:"Description",href:"#",label:"Label",metaData:"Meta Data"}},t={parameters:{pseudo:{hover:!0}}},s={parameters:{pseudo:{focus:!0}}};var o,i,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    description: 'Description',
    href: '#',
    label: 'Label',
    metaData: 'Meta Data'
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,l,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const w=["Default","Hover","Focus"];export{e as Default,s as Focus,t as Hover,w as __namedExportsOrder,P as default};