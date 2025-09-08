import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{K as E,H as O,P as S}from"./index.esm-CQ_x-qUY.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const U=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Drawer component

## Usage

Dit component is te gebruiken door de \`Drawer\` te importeren. Default is het \`open=false\` en is het aligned op \`inline-start\`.

\`\`\`tsx
import { Drawer } from '@rijkshuisstijl-community/components-react';

<Drawer open={true} modal={false} align={'block-end' | 'block-start' | 'inline-end' | 'inline-start'} />;
\`\`\`
`,H={title:"Drawer",id:"rhc-drawer",component:E,decorators:[j=>o.jsx("div",{style:{minHeight:"256px"},children:j()})],args:{children:"",open:!1,modal:!1},argTypes:{align:{control:{type:"select"},options:["","block-end","block-start","inline-end","inline-start"]},children:{description:"Content of the drawer"},open:{control:{type:"boolean"}},modal:{control:{type:"boolean"}}},parameters:{github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Drawer.tsx",nldesignsystem:"https://www.nldesignsystem.nl/drawer",figma:"https://www.figma.com/design/3cORTNo1mrlNBUtU5a8YXK/NL-Design-System---Bibliotheek--Community-?node-id=6021-5140",componentOrigin:"Dit component is overgenomen van Utrech Drawer",status:{type:"WORK IN PROGRESS"},docs:{description:{component:U}}}},e={args:{children:[o.jsx(O,{level:1,children:"Lorem ipsum"}),o.jsx(S,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})],open:!0}},n={args:{...e.args,align:"inline-start"},name:"inline-start alignment"},a={args:{...e.args,align:"inline-end"},name:"inline-end alignment"},i={args:{...e.args,align:"block-start"},name:"block-start alignment"},r={args:{...e.args,align:"block-end"},name:"block-end alignment"},t={args:{align:"inline-start",children:Array(10).fill(0).map(()=>o.jsx(S,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})),open:!0},name:"Overflow Y"};var s,l,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<Heading level={1}>Lorem ipsum</Heading>, <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>],
    open: true
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,u,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'inline-start'
  },
  name: 'inline-start alignment'
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,g,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'inline-end'
  },
  name: 'inline-end alignment'
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,b,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-start'
  },
  name: 'block-start alignment'
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,D,v;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-end'
  },
  name: 'block-end alignment'
}`,...(v=(D=r.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var w,q,y;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    align: 'inline-start',
    children: Array(10).fill(0).map(() => <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>),
    open: true
  },
  name: 'Overflow Y'
}`,...(y=(q=t.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};const I=["Default","InlineStart","InlineEnd","BlockStart","BlockEnd","OverflowY"];export{r as BlockEnd,i as BlockStart,e as Default,a as InlineEnd,n as InlineStart,t as OverflowY,I as __namedExportsOrder,H as default};
