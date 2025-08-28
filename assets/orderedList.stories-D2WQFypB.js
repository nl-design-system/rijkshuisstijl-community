import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a1 as a,a2 as t}from"./index.esm-DqRJ1a8w.js";import{m as c}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const O=`# Rijkshuisstijl Community ordered list component

Opsomming waar de volgorde van items in de lijst van belang is.

## Terminologie

- **ordered list**: uitgeschreven versie van de HTML afkorting \`<ol>\`
- **list item**: uitgeschreven van van [HTML \`<li>\`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element). Ook [in ARIA is het \`role="listitem"\`](https://www.w3.org/TR/wai-aria-1.2/#listitem)
`,I={title:"Rijkshuisstijl/Ordered List",id:"rhc-ordered-list",component:a,args:{children:""},parameters:{status:{type:"STABLE"},docs:{description:{component:c([O])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/OrderedList.tsx",nldesignsystem:"https://nldesignsystem.nl/ordered-list/",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NL-Design-System----Bibliotheek---Rijkshuisstijl?node-id=823-571"}},r={args:{children:[e.jsx(t,{children:"Ordered List item 1"},"li-1"),e.jsx(t,{children:"Ordered List item 2"},"li-2"),e.jsx(t,{children:"Ordered List item 3"},"li-3")]}},i={args:{children:[e.jsx(t,{children:"Ordered List item 1"},"li-4"),e.jsxs(t,{children:["Ordered List item 2",e.jsxs(a,{children:[e.jsx(t,{children:"Order List item 2.1"}),e.jsx(t,{children:"Order List item 2.2"})]})]},"li-5"),e.jsx(t,{children:"Ordered List item 3"},"li-6")]}};var s,d,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem key="li-1">Ordered List item 1</OrderedListItem>, <OrderedListItem key="li-2">Ordered List item 2</OrderedListItem>, <OrderedListItem key="li-3">Ordered List item 3</OrderedListItem>]
  }
}`,...(n=(d=r.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var m,o,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem key="li-4">Ordered List item 1</OrderedListItem>, <OrderedListItem key="li-5">
        Ordered List item 2
        <OrderedList>
          <OrderedListItem>Order List item 2.1</OrderedListItem>
          <OrderedListItem>Order List item 2.2</OrderedListItem>
        </OrderedList>
      </OrderedListItem>, <OrderedListItem key="li-6">Ordered List item 3</OrderedListItem>]
  }
}`,...(l=(o=i.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const k=["DefaultOrderedList","NestedOrderedList"];export{r as DefaultOrderedList,i as NestedOrderedList,k as __namedExportsOrder,I as default};
