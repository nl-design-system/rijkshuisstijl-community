import{j as e}from"./iframe-DJvW-n7q.js";import{m as g}from"./mergeMarkdown-BplYUDBy.js";import{a as t,M as s}from"./MessageListItem-BAudb1bO.js";import"./preload-helper-Dp1pzeXC.js";import"./DotBadge-C2Wtalz1.js";import"./Icon-DVKtt-m1.js";import"./index-D9jALIvX.js";import"./IconCheck-DvOJrJig.js";const p=`<!-- @license CC0-1.0 -->

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
`,M={title:"Message List",id:"rhc-message-list",component:t,args:{},render:()=>e.jsxs(t,{children:[e.jsx(s,{description:"Uw pensioenoverzicht",href:"#",label:"Pensioenfonds",metaData:"01-05-2024",withBadge:{label:"Nieuw",role:"status"}}),e.jsx(s,{description:"Herinnering APK",href:"#",label:"RDW",metaData:"04-04-2024"}),e.jsx(s,{description:"Aanslag OZB",href:"#",label:"Samenwerkings-verband Haaglanden",metaData:"04-04-2024"})]}),parameters:{status:{type:"STABLE"},docs:{description:{component:g([p])}},figma:"https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4070-5888&node-type=frame&t=xhXU5ugIkPqvOZwt-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/MessageList.tsx",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},a={},n={render:c=>e.jsx("div",{style:{width:"380px"},children:e.jsxs(t,{...c,children:[e.jsx(s,{description:"Uw pensioenoverzicht",href:"#",label:"Pensioenfonds",metaData:"01-05-2024",withBadge:{label:"Nieuw",role:"status"}}),e.jsx(s,{description:"Herinnering APK",href:"#",label:"RDW",metaData:"04-04-2024"}),e.jsx(s,{description:"Aanslag OZB",href:"#",label:"Samenwerkings-verband Haaglanden",metaData:"04-04-2024"})]})})};var i,r,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var m,l,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const x=["Default","SmallContainer"];export{a as Default,n as SmallContainer,x as __namedExportsOrder,M as default};
