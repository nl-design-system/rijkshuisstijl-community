import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{Q as O}from"./index-DlGjRi2o.js";import{H as U}from"./Heading-CljAu67s.js";import{P as E}from"./paragraph-BPMh_CvG.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const l=s=>n.jsx(O,{...s,tabIndex:0});l.displayName="Drawer";l.__docgenInfo={description:"",methods:[],displayName:"Drawer"};const I=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Drawer component

## Usage

Dit component is te gebruiken door de \`Drawer\` te importeren. Default is het \`open=false\` en is het aligned op \`inline-start\`.

\`\`\`tsx
import { Drawer } from '@rijkshuisstijl-community/components-react';

<Drawer open={true} modal={false} align={'block-end' | 'block-start' | 'inline-end' | 'inline-start'} />;
\`\`\`
`,_={title:"Drawer",id:"rhc-drawer",component:l,decorators:[s=>n.jsx("div",{style:{minHeight:"256px"},children:s()})],args:{children:"",open:!1,modal:!1},argTypes:{align:{control:{type:"select"},options:["","block-end","block-start","inline-end","inline-start"]},children:{description:"Content of the drawer"},open:{control:{type:"boolean"}},modal:{control:{type:"boolean"}}},parameters:{github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Drawer.tsx",nldesignsystem:"https://www.nldesignsystem.nl/drawer",figma:"https://www.figma.com/design/3cORTNo1mrlNBUtU5a8YXK/NL-Design-System---Bibliotheek--Community-?node-id=6021-5140",componentOrigin:"Dit component is overgenomen van Utrech Drawer",status:{type:"WORK IN PROGRESS"},docs:{description:{component:I}}}},e={args:{children:[n.jsx(U,{level:1,children:"Lorem ipsum"}),n.jsx(E,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})],open:!0}},a={args:{...e.args,align:"inline-start"},name:"inline-start alignment"},i={args:{...e.args,align:"inline-end"},name:"inline-end alignment"},r={args:{...e.args,align:"block-start"},name:"block-start alignment"},t={args:{...e.args,align:"block-end"},name:"block-end alignment"},o={args:{align:"inline-start",children:Array(10).fill(0).map(()=>n.jsx(E,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})),open:!0},name:"Overflow Y"};var m,c,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,D,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-start'
  },
  name: 'block-start alignment'
}`,...(w=(D=r.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var k,v,q;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-end'
  },
  name: 'block-end alignment'
}`,...(q=(v=t.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var y,j,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const A=["Default","InlineStart","InlineEnd","BlockStart","BlockEnd","OverflowY"];export{t as BlockEnd,r as BlockStart,e as Default,i as InlineEnd,a as InlineStart,o as OverflowY,A as __namedExportsOrder,_ as default};
