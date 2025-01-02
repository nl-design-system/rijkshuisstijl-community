import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{O as m}from"./index.esm-DcAww6Ld.js";import{T as p,k as g,j as h}from"./index-QEKeRpAx.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-CgpWq_u8.js";const u=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community TableHeaderCell component

[NL design system](https://www.nldesignsystem.nl/table/) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1561-6448&t=texUKkpCqzgFVuch-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/465)

## Usage

\`\`\`jsx
import { TableHeaderCell } from '@rijkshuisstijl/community-components';

<TableHeaderCell align={'center'} aria-sort={'descending'} scope={'col'} withSorting>
  Header
</TableHeaderCell>;
\`\`\`
`,n=({children:s,withSorting:a,alignCell:i,scope:c,...d})=>e.jsx(p,{children:e.jsx(g,{children:e.jsx(h,{children:e.jsx(m,{...d,alignCell:i,scope:c,withSorting:a,children:s})})})}),H={title:"Rijkshuisstijl/Table/Table Header Cell",id:"rhc-table-header-cell",component:n,tags:["autodocs"],argTypes:{withSorting:{type:"boolean"},"aria-sort":{options:["ascending","descending","none"],control:{type:"select"}},scope:{options:["row","col"],control:{type:"select"}},alignCell:{options:["start","end","center"],control:{type:"select"}}},render:s=>e.jsx(n,{...s}),parameters:{status:{type:"STABLE"},docs:{description:{component:u}}}},t={args:{children:"Label",scope:"col",withSorting:!1,alignCell:"start"}};var o,r,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    scope: 'col',
    withSorting: false,
    alignCell: 'start'
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,H as default};
