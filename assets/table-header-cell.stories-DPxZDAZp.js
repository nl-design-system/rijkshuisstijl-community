import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aa as d,ae as p,ac as g,af as h}from"./index.esm-CJpaWjtw.js";import{m as u}from"./merge-markdown-566X0PcZ.js";import"./index-DeTAkU8q.js";import"./_commonjsHelpers-D6-XlEtG.js";const b=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community TableHeaderCell component

## Usage

\`\`\`jsx
import { TableHeaderCell } from '@rijkshuisstijl/community-components';

<TableHeaderCell align={'center'} aria-sort={'descending'} scope={'col'} withSorting>
  Header
</TableHeaderCell>;
\`\`\`
`,s=({children:n,withSorting:r,alignCell:i,scope:c,...m})=>e.jsx(d,{children:e.jsx(p,{children:e.jsx(g,{children:e.jsx(h,{...m,alignCell:i,scope:c,withSorting:r,children:n})})})}),w={title:"Rijkshuisstijl/Table/Table Header Cell",id:"rhc-table-header-cell",component:s,tags:["autodocs"],argTypes:{withSorting:{type:"boolean"},"aria-sort":{options:["ascending","descending","none"],control:{type:"select"}},scope:{options:["row","col"],control:{type:"select"}},alignCell:{options:["start","end","center"],control:{type:"select"}}},render:n=>e.jsx(s,{...n}),parameters:{status:{type:"STABLE"},docs:{description:{component:u([b])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1561-6448&t=texUKkpCqzgFVuch-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/TableHeaderCell.tsx",nldesignsystem:"https://www.nldesignsystem.nl/table/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},t={args:{children:"Label",scope:"col",withSorting:!1,alignCell:"start"}};var a,o,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    scope: 'col',
    withSorting: false,
    alignCell: 'start'
  }
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,w as default};
