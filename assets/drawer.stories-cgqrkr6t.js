import{j as n,P as E}from"./iframe-DlkZjL_t.js";import{Q as U}from"./index-2d5bd_11.js";import{H as I}from"./Heading-D-UzQO6X.js";import"./preload-helper-Dp1pzeXC.js";const l=s=>n.jsx(U,{...s,tabIndex:0});l.displayName="Drawer";l.__docgenInfo={description:"",methods:[],displayName:"Drawer"};const L=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Drawer component

## Usage

Dit component is te gebruiken door de \`Drawer\` te importeren. Default is het \`open=false\` en is het aligned op \`inline-start\`.

\`\`\`tsx
import { Drawer } from '@rijkshuisstijl-community/components-react';

<Drawer open={true} modal={false} align={'block-end' | 'block-start' | 'inline-end' | 'inline-start'} />;
\`\`\`
`,R={title:"Drawer",id:"rhc-drawer",component:l,decorators:[s=>n.jsx("div",{style:{minHeight:"256px"},children:s()})],args:{children:"",open:!1,modal:!1},argTypes:{align:{control:{type:"select"},options:["","block-end","block-start","inline-end","inline-start"]},children:{description:"Content of the drawer"},open:{control:{type:"boolean"}},modal:{control:{type:"boolean"}}},parameters:{github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Drawer.tsx",nldesignsystem:"https://www.nldesignsystem.nl/drawer",figma:"https://www.figma.com/design/3cORTNo1mrlNBUtU5a8YXK/NL-Design-System---Bibliotheek--Community-?node-id=6021-5140",componentOrigin:"Dit component is overgenomen van Utrech Drawer",status:{type:"WORK IN PROGRESS"},docs:{description:{component:L}}}},e={args:{children:[n.jsx(I,{level:1,children:"Lorem ipsum"}),n.jsx(E,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})],open:!0}},a={args:{...e.args,align:"inline-start"},name:"inline-start alignment"},i={args:{...e.args,align:"inline-end"},name:"inline-end alignment"},r={args:{...e.args,align:"block-start"},name:"block-start alignment"},t={args:{...e.args,align:"block-end"},name:"block-end alignment"},o={args:{align:"inline-start",children:Array(10).fill(0).map(()=>n.jsx(E,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})),open:!0}};var c,m,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'inline-start'
  },
  name: 'inline-start alignment'
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,h,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'inline-end'
  },
  name: 'inline-end alignment'
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,D,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-start'
  },
  name: 'block-start alignment'
}`,...(k=(D=r.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var w,q,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-end'
  },
  name: 'block-end alignment'
}`,...(v=(q=t.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var y,j,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  }
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const C=["Default","InlineStart","InlineEnd","BlockStart","BlockEnd","OverflowY"];export{t as BlockEnd,r as BlockStart,e as Default,i as InlineEnd,a as InlineStart,o as OverflowY,C as __namedExportsOrder,R as default};
