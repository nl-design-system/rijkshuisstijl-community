import{j as e}from"./jsx-runtime-BoFrXSaA.js";import{J as m}from"./index.esm-C2Nw_-gQ.js";import{T as p,l as g,k as h}from"./index.esm-CVUy8KX1.js";import"./index-WI1YhYyJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css              */import"./objectWithoutProperties-BJfzkg-c.js";const u=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community TableHeaderCell component

[NL design system](https://www.nldesignsystem.nl/table/) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1561-6448&t=texUKkpCqzgFVuch-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/465)

## Usage

\`\`\`jsx
import { TableHeaderCell } from '@rijkshuisstijl/community-components';

<TableHeaderCell align={'center'} aria-sort={'descending'} scope={'col'} withSorting>
  Header
</TableHeaderCell>;
\`\`\`
`,n=({children:s,withSorting:a,alignCell:i,scope:c,...d})=>e.jsx(p,{children:e.jsx(g,{children:e.jsx(h,{children:e.jsx(m,{...d,alignCell:i,scope:c,withSorting:a,children:s})})})}),f={title:"Rijkshuisstijl/Table/Table Header Cell",id:"rhc-table-header-cell",component:n,tags:["autodocs"],argTypes:{withSorting:{type:"boolean"},"aria-sort":{options:["ascending","descending","none"],control:{type:"select"}},scope:{options:["row","col"],control:{type:"select"}},alignCell:{options:["start","end","center"],control:{type:"select"}}},render:s=>e.jsx(n,{...s}),parameters:{status:{type:"STABLE"},docs:{description:{component:u}}}},t={args:{children:"Label",scope:"col",withSorting:!1,alignCell:"start"}};var o,l,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    scope: 'col',
    withSorting: false,
    alignCell: 'start'
  }
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const H=["Default"];export{t as Default,H as __namedExportsOrder,f as default};
