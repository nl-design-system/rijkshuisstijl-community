import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{q as n,M as s}from"./index.esm-CRxS60Q0.js";import{m as g}from"./merge-markdown-CQvfZ6M6.js";/* empty css              */import"./index-BfH1V66g.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-DKyXVfeP.js";import"./clsx-B-dksMZM.js";import"./index-CgpWq_u8.js";const p=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Message List component

## Usage

\`\`\`tsx
import { MessageList, MessageListItem } from '@rijkshuisstijl-community/components-react';

<MessageList>
  <MessageListItem description={'Uw pensioenoverzicht'} href={'#'} label={'Pensioenfonds'} metaData={'Meta Data'} />
  <MessageListItem description={'Herinnering APK'} href={'#'} label={'RDW'} metaData={'Meta Data'} />
  <MessageListItem
    description={'Aanslag OZB'}
    href={'#'}
    label={'Samenwerkings-verband Haaglanden'}
    metaData={'Meta Data'}
  />
</MessageList>;
\`\`\`
`,k={title:"Rijkshuisstijl/Message List",id:"rhc-message-list",component:n,args:{},render:()=>e.jsxs(n,{children:[e.jsx(s,{description:"Uw pensioenoverzicht",href:"#",label:"Pensioenfonds",metaData:"01-05-2024",withBadge:{"aria-label":"Nieuw",role:"status"}}),e.jsx(s,{description:"Herinnering APK",href:"#",label:"RDW",metaData:"04-04-2024"}),e.jsx(s,{description:"Aanslag OZB",href:"#",label:"Samenwerkings-verband Haaglanden",metaData:"04-04-2024"})]}),parameters:{status:{type:"STABLE"},docs:{description:{component:g([p])}},figma:"https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4070-5888&node-type=frame&t=xhXU5ugIkPqvOZwt-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/556",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},a={},t={render:c=>e.jsx("div",{style:{width:"380px"},children:e.jsxs(n,{...c,children:[e.jsx(s,{description:"Uw pensioenoverzicht",href:"#",label:"Pensioenfonds",metaData:"01-05-2024",withBadge:{"aria-label":"Nieuw",role:"status"}}),e.jsx(s,{description:"Herinnering APK",href:"#",label:"RDW",metaData:"04-04-2024"}),e.jsx(s,{description:"Aanslag OZB",href:"#",label:"Samenwerkings-verband Haaglanden",metaData:"04-04-2024"})]})})};var i,r,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var m,l,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '380px'
  }}>
      <MessageList {...args}>
        <MessageListItem description={'Uw pensioenoverzicht'} href={'#'} label={'Pensioenfonds'} metaData={'01-05-2024'} withBadge={{
        'aria-label': 'Nieuw',
        role: 'status'
      }} />
        <MessageListItem description={'Herinnering APK'} href={'#'} label={'RDW'} metaData={'04-04-2024'} />
        <MessageListItem description={'Aanslag OZB'} href={'#'} label={'Samenwerkings-verband Haaglanden'} metaData={'04-04-2024'} />
      </MessageList>
    </div>
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const v=["Default","SmallContainer"];export{a as Default,t as SmallContainer,v as __namedExportsOrder,k as default};
