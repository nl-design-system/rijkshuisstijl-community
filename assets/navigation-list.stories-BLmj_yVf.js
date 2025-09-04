import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{$ as a,_ as i}from"./index.esm-CjA6zvQd.js";import{m as d}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const p=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Navigation List component

## Usage

\`\`\`tsx
import { NavigationList, NavigationListItem, NavigationListLink } from '@rijkshuisstijl-community/components-react';

<NavigationList>
  <NavigationListItem description="Uw gegevens, familie en identiteitsbewijs" href="#" icon="user" label="Identiteit" />
  <NavigationListItem
    description="Uw inkomen, toeslagen, bijdragen en belastingen"
    href="#"
    icon="currency-euro"
    label="Financiën"
  />
</NavigationList>;
\`\`\`
`,w={title:"Rijkshuisstijl/NavigationList",component:a,parameters:{status:{type:"STABLE"},docs:{description:{component:d([p])}},figma:"https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4074-1580&node-type=canvas&t=HuDzyBW9wHdB2QVh-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/NavigationList.tsx",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."},argTypes:{}},n={render:s=>e.jsxs(a,{...s,children:[e.jsx(i,{description:"Uw gegevens, familie en identiteitsbewijs",href:"#",icon:"user",label:"Identiteit"}),e.jsx(i,{description:"Uw inkomen, toeslagen, bijdragen en belastingen",href:"#",icon:"currency-euro",label:"Financiën"}),e.jsx(i,{description:"Uw pensioen, arbeidsgegevens en uitkeringen",href:"#",icon:"briefcase",label:"Werk"})]})},t={render:s=>e.jsx("div",{style:{width:"380px"},children:e.jsxs(a,{...s,children:[e.jsx(i,{description:"Uw gegevens, familie en identiteitsbewijs",href:"#",icon:"user",label:"Identiteit"}),e.jsx(i,{description:"Uw inkomen, toeslagen, bijdragen en belastingen",href:"#",icon:"currency-euro",label:"Financiën"}),e.jsx(i,{description:"Uw pensioen, arbeidsgegevens en uitkeringen",href:"#",icon:"briefcase",label:"Werk"})]})})};var r,o,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: NavigationListProps) => <NavigationList {...args}>
      <NavigationListItem description="Uw gegevens, familie en identiteitsbewijs" href={'#'} icon="user" label="Identiteit" />
      <NavigationListItem description="Uw inkomen, toeslagen, bijdragen en belastingen" href={'#'} icon="currency-euro" label="Financiën" />
      <NavigationListItem description="Uw pensioen, arbeidsgegevens en uitkeringen" href={'#'} icon="briefcase" label="Werk" />
    </NavigationList>
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var g,l,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: NavigationListProps) => <div style={{
    width: '380px'
  }}>
      <NavigationList {...args}>
        <NavigationListItem description="Uw gegevens, familie en identiteitsbewijs" href={'#'} icon="user" label="Identiteit" />
        <NavigationListItem description="Uw inkomen, toeslagen, bijdragen en belastingen" href={'#'} icon="currency-euro" label="Financiën" />
        <NavigationListItem description="Uw pensioen, arbeidsgegevens en uitkeringen" href={'#'} icon="briefcase" label="Werk" />
      </NavigationList>
    </div>
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const L=["Default","SmallContainer"];export{n as Default,t as SmallContainer,L as __namedExportsOrder,w as default};
