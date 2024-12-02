import{j as e}from"./jsx-runtime-8Jttx2DA.js";import{v as a,u as i}from"./index.esm-Tj8qSLCD.js";import"./index-BzhKaBtb.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */import"./index-CgFCBr0q.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./clsx-B-dksMZM.js";import"./index-BhpIufNd.js";import"./index-DYgQ_QFa.js";const d=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Navigation List component

NL design system - geen | [Figma](https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4074-1580&node-type=canvas&t=HuDzyBW9wHdB2QVh-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/557)

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
`,k={title:"Rijkshuisstijl/NavigationList",component:a,parameters:{status:{type:"STABLE"},docs:{description:{component:d}}},argTypes:{}},n={render:s=>e.jsxs(a,{...s,children:[e.jsx(i,{description:"Uw gegevens, familie en identiteitsbewijs",href:"#",icon:"user",label:"Identiteit"}),e.jsx(i,{description:"Uw inkomen, toeslagen, bijdragen en belastingen",href:"#",icon:"currency-euro",label:"Financiën"}),e.jsx(i,{description:"Uw pensioen, arbeidsgegevens en uitkeringen",href:"#",icon:"briefcase",label:"Werk"})]})},t={render:s=>e.jsx("div",{style:{width:"380px"},children:e.jsxs(a,{...s,children:[e.jsx(i,{description:"Uw gegevens, familie en identiteitsbewijs",href:"#",icon:"user",label:"Identiteit"}),e.jsx(i,{description:"Uw inkomen, toeslagen, bijdragen en belastingen",href:"#",icon:"currency-euro",label:"Financiën"}),e.jsx(i,{description:"Uw pensioen, arbeidsgegevens en uitkeringen",href:"#",icon:"briefcase",label:"Werk"})]})})};var r,o,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const x=["Default","SmallContainer"];export{n as Default,t as SmallContainer,x as __namedExportsOrder,k as default};