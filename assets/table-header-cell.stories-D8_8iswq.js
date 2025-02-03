import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{J as p}from"./index.esm-T83ddQPv.js";import{m as d}from"./merge-markdown-BtgmYwh_.js";import{T as g,j as h,i as u}from"./index-C4jjA_3H.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./heading-BJGfgtDt.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-DKyXVfeP.js";import"./index-CgpWq_u8.js";const j=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community TableHeaderCell component

## Usage

\`\`\`jsx
import { TableHeaderCell } from '@rijkshuisstijl/community-components';

<TableHeaderCell align={'center'} aria-sort={'descending'} scope={'col'} withSorting>
  Header
</TableHeaderCell>;
\`\`\`
`,n=({children:s,withSorting:a,alignCell:l,scope:c,...m})=>e.jsx(g,{children:e.jsx(h,{children:e.jsx(u,{children:e.jsx(p,{...m,alignCell:l,scope:c,withSorting:a,children:s})})})}),D={title:"Rijkshuisstijl/Table/Table Header Cell",id:"rhc-table-header-cell",component:n,tags:["autodocs"],argTypes:{withSorting:{type:"boolean"},"aria-sort":{options:["ascending","descending","none"],control:{type:"select"}},scope:{options:["row","col"],control:{type:"select"}},alignCell:{options:["start","end","center"],control:{type:"select"}}},render:s=>e.jsx(n,{...s}),parameters:{status:{type:"STABLE"},docs:{description:{component:d([j])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1561-6448&t=texUKkpCqzgFVuch-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/465",nldesignsystem:"https://www.nldesignsystem.nl/table/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},t={args:{children:"Label",scope:"col",withSorting:!1,alignCell:"start"}};var o,i,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    scope: 'col',
    withSorting: false,
    alignCell: 'start'
  }
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,D as default};
