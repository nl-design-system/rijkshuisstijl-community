import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{Z as t,Y as s}from"./index.esm-CQ_x-qUY.js";import{m as g}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const p=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Message List component

## Usage

\`\`\`tsx
import { MessageList, MessageListItem } from '@rijkshuisstijl-community/components-react';

<MessageList {...args}>
  <MessageListItem
    description={'Uw pensioenoverzicht'}
    href={'#'}
    label={'Pensioenfonds'}
    metaData={'01-05-2024'}
    withBadge={{ label: 'Nieuw', role: 'status' }}
  />
  <MessageListItem description={'Herinnering APK'} href={'#'} label={'RDW'} metaData={'04-04-2024'} />
  <MessageListItem
    description={'Aanslag OZB'}
    href={'#'}
    label={'Samenwerkings-verband Haaglanden'}
    metaData={'04-04-2024'}
  />
</MessageList>;
\`\`\`
`,D={title:"Message List",id:"rhc-message-list",component:t,args:{},render:()=>e.jsxs(t,{children:[e.jsx(s,{description:"Uw pensioenoverzicht",href:"#",label:"Pensioenfonds",metaData:"01-05-2024",withBadge:{label:"Nieuw",role:"status"}}),e.jsx(s,{description:"Herinnering APK",href:"#",label:"RDW",metaData:"04-04-2024"}),e.jsx(s,{description:"Aanslag OZB",href:"#",label:"Samenwerkings-verband Haaglanden",metaData:"04-04-2024"})]}),parameters:{status:{type:"STABLE"},docs:{description:{component:g([p])}},figma:"https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4070-5888&node-type=frame&t=xhXU5ugIkPqvOZwt-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/MessageList.tsx",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},a={},n={render:c=>e.jsx("div",{style:{width:"380px"},children:e.jsxs(t,{...c,children:[e.jsx(s,{description:"Uw pensioenoverzicht",href:"#",label:"Pensioenfonds",metaData:"01-05-2024",withBadge:{label:"Nieuw",role:"status"}}),e.jsx(s,{description:"Herinnering APK",href:"#",label:"RDW",metaData:"04-04-2024"}),e.jsx(s,{description:"Aanslag OZB",href:"#",label:"Samenwerkings-verband Haaglanden",metaData:"04-04-2024"})]})})};var i,r,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var m,l,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '380px'
  }}>
      <MessageList {...args}>
        <MessageListItem description={'Uw pensioenoverzicht'} href={'#'} label={'Pensioenfonds'} metaData={'01-05-2024'} withBadge={{
        label: 'Nieuw',
        role: 'status'
      }} />
        <MessageListItem description={'Herinnering APK'} href={'#'} label={'RDW'} metaData={'04-04-2024'} />
        <MessageListItem description={'Aanslag OZB'} href={'#'} label={'Samenwerkings-verband Haaglanden'} metaData={'04-04-2024'} />
      </MessageList>
    </div>
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const L=["Default","SmallContainer"];export{a as Default,n as SmallContainer,L as __namedExportsOrder,D as default};
