import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{m as p}from"./merge-markdown-DQEtknEV.js";import{y as d,E as g,D as h}from"./index-DlGjRi2o.js";import{T as b}from"./TableHeaderCell-VcG4IE_f.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./index-BJzegUt9.js";import"./clsx-B-dksMZM.js";import"./Button-DwhsvVfK.js";import"./Icon-DaUz-GJB.js";import"./IconCheck-BO4gZjWf.js";const u=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community TableHeaderCell component

## Usage

\`\`\`jsx
import { TableHeaderCell } from '@rijkshuisstijl/community-components';

<TableHeaderCell align={'center'} aria-sort={'descending'} scope={'col'} withSorting>
  Header
</TableHeaderCell>;
\`\`\`
`,s=({children:n,withSorting:i,alignCell:l,scope:c,...m})=>e.jsx(d,{children:e.jsx(g,{children:e.jsx(h,{children:e.jsx(b,{...m,alignCell:l,scope:c,withSorting:i,children:n})})})}),D={title:"Table/Table Header Cell",id:"rhc-table-header-cell",component:s,tags:["autodocs"],argTypes:{withSorting:{type:"boolean"},"aria-sort":{options:["ascending","descending","none"],control:{type:"select"}},scope:{options:["row","col"],control:{type:"select"}},alignCell:{options:["start","end","center"],control:{type:"select"}}},render:n=>e.jsx(s,{...n}),parameters:{status:{type:"STABLE"},docs:{description:{component:p([u])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1561-6448&t=texUKkpCqzgFVuch-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/TableHeaderCell.tsx",nldesignsystem:"https://www.nldesignsystem.nl/table/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},t={args:{children:"Label",scope:"col",withSorting:!1,alignCell:"start"}};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    scope: 'col',
    withSorting: false,
    alignCell: 'start'
  }
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,D as default};
