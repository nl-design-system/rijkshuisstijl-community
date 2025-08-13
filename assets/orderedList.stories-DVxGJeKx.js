import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a0 as l,a1 as r}from"./index.esm-DDxOyvNx.js";import{m as c}from"./merge-markdown-566X0PcZ.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";const O=`# Rijkshuisstijl Community ordered list component

Opsomming waar de volgorde van items in de lijst van belang is.

## Terminologie

- **ordered list**: uitgeschreven versie van de HTML afkorting \`<ol>\`
- **list item**: uitgeschreven van van [HTML \`<li>\`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element). Ook [in ARIA is het \`role="listitem"\`](https://www.w3.org/TR/wai-aria-1.2/#listitem)
`,j={title:"Rijkshuisstijl/Ordered List",id:"rhc-ordered-list",component:l,args:{children:""},parameters:{status:{type:"STABLE"},docs:{description:{component:c([O])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/OrderedList.tsx"}},t={args:{children:[e.jsx(r,{children:"Ordered List item 1"},"li-1"),e.jsx(r,{children:"Ordered List item 2"},"li-2"),e.jsx(r,{children:"Ordered List item 3"},"li-3")]}},i={args:{children:[e.jsx(r,{children:"Ordered List item 1"},"li-4"),e.jsxs(r,{children:["Ordered List item 2",e.jsxs(l,{children:[e.jsx(r,{children:"Order List item 2.1"}),e.jsx(r,{children:"Order List item 2.2"})]})]},"li-5"),e.jsx(r,{children:"Ordered List item 3"},"li-6")]}};var s,d,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem key="li-1">Ordered List item 1</OrderedListItem>, <OrderedListItem key="li-2">Ordered List item 2</OrderedListItem>, <OrderedListItem key="li-3">Ordered List item 3</OrderedListItem>]
  }
}`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var m,o,a;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem key="li-4">Ordered List item 1</OrderedListItem>, <OrderedListItem key="li-5">
        Ordered List item 2
        <OrderedList>
          <OrderedListItem>Order List item 2.1</OrderedListItem>
          <OrderedListItem>Order List item 2.2</OrderedListItem>
        </OrderedList>
      </OrderedListItem>, <OrderedListItem key="li-6">Ordered List item 3</OrderedListItem>]
  }
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const I=["DefaultOrderedList","NestedOrderedList"];export{t as DefaultOrderedList,i as NestedOrderedList,I as __namedExportsOrder,j as default};
