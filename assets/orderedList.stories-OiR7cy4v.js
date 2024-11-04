import{j as e}from"./jsx-runtime-BlAj40OV.js";import{b as O,O as r}from"./index.esm-CwDQqDNp.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./extends-CF3RwP-h.js";const L=`# Rijkshuisstijl Community ordered list component

Opsomming waar de volgorde van items in de lijst niet van belang is.

## Terminologie

- **unordered list**: uitgeschreven versie van de HTML afkorting \`<ol>\`
- **list item**: uitgeschreven van van [HTML \`<li>\`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element). Ook [in ARIA is het \`role="listitem"\`](https://www.w3.org/TR/wai-aria-1.2/#listitem)
`,I={title:"Rijkshuisstijl/Ordered List",id:"rhc-ordered-list",component:O,args:{children:""},parameters:{status:{type:"STABLE"},docs:{description:{component:L}}}},t={args:{children:[e.jsx(r,{children:"Ordered List item 1"}),e.jsx(r,{children:"Ordered List item 2"}),e.jsx(r,{children:"Ordered List item 3"})]}},i={args:{children:[e.jsx(r,{children:"Ordered List item 1"}),e.jsxs(r,{children:["Ordered List item 2",e.jsxs(O,{children:[e.jsx(r,{children:"Order List item 2.1"}),e.jsx(r,{children:"Order List item 2.2"})]})]}),e.jsx(r,{children:"Ordered List item 3"})]}};var d,s,n;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem>Ordered List item 1</OrderedListItem>, <OrderedListItem>Ordered List item 2</OrderedListItem>, <OrderedListItem>Ordered List item 3</OrderedListItem>]
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,o,a;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem>Ordered List item 1</OrderedListItem>, <OrderedListItem>
        Ordered List item 2
        <OrderedList>
          <OrderedListItem>Order List item 2.1</OrderedListItem>
          <OrderedListItem>Order List item 2.2</OrderedListItem>
        </OrderedList>
      </OrderedListItem>, <OrderedListItem>Ordered List item 3</OrderedListItem>]
  }
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const j=["DefaultOrderedList","NestedOrderedList"];export{t as DefaultOrderedList,i as NestedOrderedList,j as __namedExportsOrder,I as default};
