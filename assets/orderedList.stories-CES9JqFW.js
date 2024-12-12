import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as a,O as r}from"./index-BclNPbce.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./index-j0aIpYJF.js";const O=`# Rijkshuisstijl Community ordered list component

Opsomming waar de volgorde van items in de lijst niet van belang is.

## Terminologie

- **unordered list**: uitgeschreven versie van de HTML afkorting \`<ol>\`
- **list item**: uitgeschreven van van [HTML \`<li>\`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element). Ook [in ARIA is het \`role="listitem"\`](https://www.w3.org/TR/wai-aria-1.2/#listitem)
`,j={title:"Rijkshuisstijl/Ordered List",id:"rhc-ordered-list",component:a,args:{children:""},parameters:{status:{type:"STABLE"},docs:{description:{component:O}}}},t={args:{children:[e.jsx(r,{children:"Ordered List item 1"},"li-1"),e.jsx(r,{children:"Ordered List item 2"},"li-2"),e.jsx(r,{children:"Ordered List item 3"},"li-3")]}},i={args:{children:[e.jsx(r,{children:"Ordered List item 1"},"li-4"),e.jsxs(r,{children:["Ordered List item 2",e.jsxs(a,{children:[e.jsx(r,{children:"Order List item 2.1"}),e.jsx(r,{children:"Order List item 2.2"})]})]},"li-5"),e.jsx(r,{children:"Ordered List item 3"},"li-6")]}};var d,s,n;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem key="li-1">Ordered List item 1</OrderedListItem>, <OrderedListItem key="li-2">Ordered List item 2</OrderedListItem>, <OrderedListItem key="li-3">Ordered List item 3</OrderedListItem>]
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,o,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem key="li-4">Ordered List item 1</OrderedListItem>, <OrderedListItem key="li-5">
        Ordered List item 2
        <OrderedList>
          <OrderedListItem>Order List item 2.1</OrderedListItem>
          <OrderedListItem>Order List item 2.2</OrderedListItem>
        </OrderedList>
      </OrderedListItem>, <OrderedListItem key="li-6">Ordered List item 3</OrderedListItem>]
  }
}`,...(l=(o=i.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const x=["DefaultOrderedList","NestedOrderedList"];export{t as DefaultOrderedList,i as NestedOrderedList,x as __namedExportsOrder,j as default};
