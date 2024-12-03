import{j as e}from"./jsx-runtime-8Jttx2DA.js";import{U as l}from"./index.esm-D7m2l6R4.js";import{U as t}from"./index-B9EZEqMY.js";import"./index-BzhKaBtb.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-DYgQ_QFa.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-BhpIufNd.js";const L=`# Rijkshuisstijl Community unordered list component

Opsomming waar de volgorde van items in de lijst niet van belang is.

## Terminologie

- **unordered list**: uitgeschreven versie van de HTML afkorting \`<ul>\`
- **list item**: uitgeschreven van van [HTML \`<li>\`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element). Ook [in ARIA is het \`role="listitem"\`](https://www.w3.org/TR/wai-aria-1.2/#listitem)
- **marker**: zoals in de [CSS pseudo-selector \`::marker\`](https://drafts.csswg.org/css-pseudo-4/#marker-pseudo)

## Nested List

Bij het gebruik van een nested list is het mogelijk om de property \`nested\` toe te voegen aan het \`<ul>\` element. Dit zorgt ervoor dat de marker een andere uiterlijk krijgen dan de markers van de "normale" lijst. Zie het voorbeeld "Nested Unordered List".
`,x={title:"Rijkshuisstijl/Unordered List",id:"rhc-unordered-list",component:l,args:{children:""},parameters:{status:{type:"STABLE"},docs:{description:{component:L}}}},r={args:{children:[e.jsx(t,{children:"List item 1"}),e.jsx(t,{children:"List item 2"}),e.jsx(t,{children:"List item 3"})]}},s={args:{children:[e.jsx(t,{children:"List item 1"}),e.jsxs(t,{children:["List item 2",e.jsxs(l,{nested:!0,children:[e.jsx(t,{children:"Nested List item 1"}),e.jsx(t,{children:"Nested List item 2"})]})]}),e.jsx(t,{children:"List item 3"})]}};var i,n,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedListItem>List item 1</UnorderedListItem>, <UnorderedListItem>List item 2</UnorderedListItem>, <UnorderedListItem>List item 3</UnorderedListItem>]
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var o,m,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedListItem>List item 1</UnorderedListItem>, <UnorderedListItem>
        List item 2
        <UnorderedList nested>
          <UnorderedListItem>Nested List item 1</UnorderedListItem>
          <UnorderedListItem>Nested List item 2</UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>, <UnorderedListItem>List item 3</UnorderedListItem>]
  }
}`,...(a=(m=s.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const w=["DefaultUnorderedList","NestedUnorderedList"];export{r as DefaultUnorderedList,s as NestedUnorderedList,w as __namedExportsOrder,x as default};
