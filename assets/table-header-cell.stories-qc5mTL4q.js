import{j as e}from"./jsx-runtime-8Jttx2DA.js";import{K as p}from"./index.esm-Tj8qSLCD.js";import{T as d,k as g,j as h}from"./index-CgFCBr0q.js";import"./index-BzhKaBtb.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-DYgQ_QFa.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-BhpIufNd.js";const u=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community TableHeaderCell component

[NL design system](https://www.nldesignsystem.nl/table/) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1561-6448&t=texUKkpCqzgFVuch-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/465)

## Usage

\`\`\`jsx
import { TableHeaderCell } from '@rijkshuisstijl/community-components';

<TableHeaderCell align={'center'} aria-sort={'descending'} scope={'col'} withSorting>
  Header
</TableHeaderCell>;
\`\`\`
`,n=({children:s,withSorting:l,alignCell:a,scope:c,...m})=>e.jsx(d,{children:e.jsx(g,{children:e.jsx(h,{children:e.jsx(p,{...m,alignCell:a,scope:c,withSorting:l,children:s})})})}),S={title:"Rijkshuisstijl/Table/Table Header Cell",id:"rhc-table-header-cell",component:n,tags:["autodocs"],argTypes:{withSorting:{type:"boolean"},"aria-sort":{options:["ascending","descending","none"],control:{type:"select"}},scope:{options:["row","col"],control:{type:"select"}},alignCell:{options:["start","end","center"],control:{type:"select"}}},render:s=>e.jsx(n,{...s}),parameters:{status:{type:"STABLE"},docs:{description:{component:u}}}},t={args:{children:"Label",scope:"col",withSorting:!1,alignCell:"start"}};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    scope: 'col',
    withSorting: false,
    alignCell: 'start'
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,S as default};
