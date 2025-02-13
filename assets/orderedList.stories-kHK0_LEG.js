import{j as e}from"./jsx-runtime-CLpGMVip.js";import{m as O}from"./merge-markdown-BtgmYwh_.js";import{c as l,O as r}from"./index-Dl4KGgVD.js";import"./_commonjsHelpers-C932wzq6.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./index-DAIO8Scy.js";import"./clsx-B-dksMZM.js";const c=`# Rijkshuisstijl Community ordered list component

Opsomming waar de volgorde van items in de lijst van belang is.

## Terminologie

- **ordered list**: uitgeschreven versie van de HTML afkorting \`<ol>\`
- **list item**: uitgeschreven van van [HTML \`<li>\`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element). Ook [in ARIA is het \`role="listitem"\`](https://www.w3.org/TR/wai-aria-1.2/#listitem)
`,x={title:"Rijkshuisstijl/Ordered List",id:"rhc-ordered-list",component:l,args:{children:""},parameters:{status:{type:"STABLE"},docs:{description:{component:O([c])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community."}},t={args:{children:[e.jsx(r,{children:"Ordered List item 1"},"li-1"),e.jsx(r,{children:"Ordered List item 2"},"li-2"),e.jsx(r,{children:"Ordered List item 3"},"li-3")]}},i={args:{children:[e.jsx(r,{children:"Ordered List item 1"},"li-4"),e.jsxs(r,{children:["Ordered List item 2",e.jsxs(l,{children:[e.jsx(r,{children:"Order List item 2.1"}),e.jsx(r,{children:"Order List item 2.2"})]})]},"li-5"),e.jsx(r,{children:"Ordered List item 3"},"li-6")]}};var s,d,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const k=["DefaultOrderedList","NestedOrderedList"];export{t as DefaultOrderedList,i as NestedOrderedList,k as __namedExportsOrder,x as default};
