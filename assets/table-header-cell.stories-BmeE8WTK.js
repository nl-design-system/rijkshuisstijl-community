import{j as e}from"./iframe-CLJWzYSL.js";import{m as d}from"./merge-markdown-D8Eslh9D.js";import{y as p,E as g,D as h}from"./index-GfqW3cb2.js";import{T as b}from"./TableHeaderCell-DqIEHyKu.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DOc8N59f.js";import"./Icon-jj8y1g7G.js";import"./IconCheck-NNwnFqFE.js";const u=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community TableHeaderCell component

## Usage

\`\`\`jsx
import { TableHeaderCell } from '@rijkshuisstijl/community-components';

<TableHeaderCell align={'center'} aria-sort={'descending'} scope={'col'} withSorting>
  Header
</TableHeaderCell>;
\`\`\`
`,s=({children:n,withSorting:l,alignCell:i,scope:c,...m})=>e.jsx(p,{children:e.jsx(g,{children:e.jsx(h,{children:e.jsx(b,{...m,alignCell:i,scope:c,withSorting:l,children:n})})})}),k={title:"Table/Table Header Cell",id:"rhc-table-header-cell",component:s,tags:["autodocs"],argTypes:{withSorting:{type:"boolean"},"aria-sort":{options:["ascending","descending","none"],control:{type:"select"}},scope:{options:["row","col"],control:{type:"select"}},alignCell:{options:["start","end","center"],control:{type:"select"}}},render:n=>e.jsx(s,{...n}),parameters:{status:{type:"STABLE"},docs:{description:{component:d([u])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1561-6448&t=texUKkpCqzgFVuch-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/TableHeaderCell.tsx",nldesignsystem:"https://www.nldesignsystem.nl/table/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},t={args:{children:"Label",scope:"col",withSorting:!1,alignCell:"start"}};var o,a,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    scope: 'col',
    withSorting: false,
    alignCell: 'start'
  }
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,k as default};
