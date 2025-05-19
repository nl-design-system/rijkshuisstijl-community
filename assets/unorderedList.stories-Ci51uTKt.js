import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{v as l,U as t}from"./index.esm-DpREHcHo.js";import{m as c}from"./merge-markdown-566X0PcZ.js";import"./index-DeTAkU8q.js";import"./_commonjsHelpers-D6-XlEtG.js";const L=`# Rijkshuisstijl Community unordered list component

Opsomming waar de volgorde van items in de lijst niet van belang is.

## Terminologie

- **unordered list**: uitgeschreven versie van de HTML afkorting \`<ul>\`
- **list item**: uitgeschreven van van [HTML \`<li>\`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element). Ook [in ARIA is het \`role="listitem"\`](https://www.w3.org/TR/wai-aria-1.2/#listitem)
- **marker**: zoals in de [CSS pseudo-selector \`::marker\`](https://drafts.csswg.org/css-pseudo-4/#marker-pseudo)

## Nested List

Bij het gebruik van een nested list is het mogelijk om de property \`nested\` toe te voegen aan het \`<ul>\` element. Dit zorgt ervoor dat de marker een andere uiterlijk krijgen dan de markers van de "normale" lijst. Zie het voorbeeld "Nested Unordered List".
`,j={title:"Rijkshuisstijl/Unordered List",id:"rhc-unordered-list",component:l,args:{children:""},parameters:{status:{type:"STABLE"},docs:{description:{component:c([L])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},r={args:{children:[e.jsx(t,{children:"List item 1"},"li-1"),e.jsx(t,{children:"List item 2"},"li-2"),e.jsx(t,{children:"List item 3"},"li-3")]}},i={args:{children:[e.jsx(t,{children:"List item 1"},"li-4"),e.jsxs(t,{children:["List item 2",e.jsxs(l,{nested:!0,children:[e.jsx(t,{children:"Nested List item 1"}),e.jsx(t,{children:"Nested List item 2"})]})]},"li-5"),e.jsx(t,{children:"List item 3"},"li-6")]}};var s,n,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedListItem key="li-1">List item 1</UnorderedListItem>, <UnorderedListItem key="li-2">List item 2</UnorderedListItem>, <UnorderedListItem key="li-3">List item 3</UnorderedListItem>]
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var o,m,a;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedListItem key="li-4">List item 1</UnorderedListItem>, <UnorderedListItem key="li-5">
        List item 2
        <UnorderedList nested>
          <UnorderedListItem>Nested List item 1</UnorderedListItem>
          <UnorderedListItem>Nested List item 2</UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>, <UnorderedListItem key="li-6">List item 3</UnorderedListItem>]
  }
}`,...(a=(m=i.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const k=["DefaultUnorderedList","NestedUnorderedList"];export{r as DefaultUnorderedList,i as NestedUnorderedList,k as __namedExportsOrder,j as default};
