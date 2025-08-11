import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{G as n,E as a,I as K}from"./index.esm-BqFwyz6s.js";import{m as k}from"./merge-markdown-566X0PcZ.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";const x=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Data Summary component

Lijst met eigenschappen en bijbehorende data over een onderwerp.

## Usage

\`\`\`jsx
import { DataSummary, DataSummaryItem } from '@rijkshuisstijl-community/components-react';

<DataSummary>
  <DataSummaryItem itemKey="Soort" itemValue="Reuzenpanda" />
  <DataSummaryItem href="#" itemKey="Rijk" itemValue="Animalia (Dieren)">
    Bekijk alle dieren
    <Icon icon="externe-link" />
  </DataSummaryItem>
  <DataSummaryItem itemKey="Klasse" itemValue="Mammalia (Zoogdieren)" />
</DataSummary>;
\`\`\`
`,f={title:"Rijkshuisstijl/DataSummary",id:"rhc-dataSummary",component:n,parameters:{status:{type:"UNSTABLE"},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/DataSummary.tsx",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NL-Design-System----Bibliotheek---Rijkshuisstijl?node-id=1292-5261&t=RAE0WsEKAYTnA7gU-0",nldesignsystem:"https://www.nldesignsystem.nl/data-summary/",docs:{description:{component:k([x])}}},args:{appearance:"column",children:[e.jsxs(e.Fragment,{children:[e.jsx(a,{itemKey:"Soort",itemValue:"Reuzenpanda"}),e.jsxs(a,{href:"#",itemKey:"Rijk",itemValue:"Animalia (Dieren)",children:["Bekijk alle dieren",e.jsx(K,{icon:"externe-link"})]}),e.jsx(a,{itemKey:"Klasse",itemValue:"Mammalia (Zoogdieren)"})]})]},argTypes:{appearance:{control:"select",options:["column","row"]}},render:h=>e.jsx(n,{...h})},m={},t={args:{appearance:"row"}},r={args:{appearance:"row",children:[e.jsxs(e.Fragment,{children:[e.jsx(a,{itemKey:"Soort",itemValue:"Reuzenpanda"}),e.jsx(a,{itemKey:"Rijk",itemValue:"Animalia (Dieren)"}),e.jsx(a,{itemKey:"Klasse",itemValue:"Mammalia (Zoogdieren)"})]})]}},i={args:{appearance:"column",children:[e.jsxs(e.Fragment,{children:[e.jsx(a,{itemKey:"Soort",itemValue:"Reuzenpanda"}),e.jsx(a,{itemKey:"Rijk",itemValue:"Animalia (Dieren)"}),e.jsx(a,{itemKey:"Klasse",itemValue:"Mammalia (Zoogdieren)"})]})]}};var s,o,c;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(o=m.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,u,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    appearance: 'row'
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,y,j;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    appearance: 'row',
    children: [<>
        <DataSummaryItem itemKey="Soort" itemValue="Reuzenpanda" />
        <DataSummaryItem itemKey="Rijk" itemValue="Animalia (Dieren)" />
        <DataSummaryItem itemKey="Klasse" itemValue="Mammalia (Zoogdieren)" />
      </>]
  }
}`,...(j=(y=r.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var g,S,D;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    appearance: 'column',
    children: [<>
        <DataSummaryItem itemKey="Soort" itemValue="Reuzenpanda" />
        <DataSummaryItem itemKey="Rijk" itemValue="Animalia (Dieren)" />
        <DataSummaryItem itemKey="Klasse" itemValue="Mammalia (Zoogdieren)" />
      </>]
  }
}`,...(D=(S=i.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const M=["Default","Rows","NoActions","NoActionsColumn"];export{m as Default,r as NoActions,i as NoActionsColumn,t as Rows,M as __namedExportsOrder,f as default};
