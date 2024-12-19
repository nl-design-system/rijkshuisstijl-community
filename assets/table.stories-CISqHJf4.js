import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{O as a,K as l,Q as n,s as p}from"./index.esm-fQofCyJk.js";import{T as Q,j as b,i as r,h as o,k as x}from"./index-vsdXSVOh.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-BhQyoJpt.js";import"./index-CgpWq_u8.js";import"./objectWithoutProperties-BJfzkg-c.js";const V=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Table component

[NL design system](https://www.nldesignsystem.nl/table/) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1561-6448&t=texUKkpCqzgFVuch-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/465)

## Duidelijke koppen

In tabellen staat vaak veel informatie en daarom helpen koppen gebruikers om snel informatie over te slaan die niet relevant is. De data in tabellen kan op drie niveau's koppen bevatten: kop van de tabel (caption), kop van de kolom (column header) en kop van de rij (row header). Het is belangrijk dat je precies de goede HTML gebruikt voor elke kop:

- \`<caption>\` voor de kop van de tabel
- \`<th scope="col">\` voor de kop van de kolom
- \`<th scope="row">\` voor de kop van de rij

## Usage

\`\`\`jsx
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableBody,
  TableCell,
} from '@rijkshuisstijl/community-components';

<Table>
  <TableHeader>
    <TableRow>
      <TableHeaderCell scope="col">Header</TableHeaderCell>
      <TableHeaderCell scope="col">Header</TableHeaderCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Label</TableCell>
      <TableCell>Label</TableCell>
    </TableRow>
  </TableBody>
</Table>;
\`\`\`
`,re={title:"Rijkshuisstijl/Table",id:"rhc-table",component:Q,tags:["autodocs"],args:{dir:""},parameters:{status:{type:"STABLE"},docs:{description:{component:V}}}},d={args:{children:[e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})},"thead-1"),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]},"tbody-1")]}},s={args:{children:[e.jsx(n,{children:" Caption"},"caption-1"),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})},"thead-2"),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]},"tbody-2")]}},c={args:{children:[e.jsx(n,{children:" footer"},"caption-2"),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})},"thead-3"),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]},"tbody-3"),e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"})]})},"tfoot-1")]}},T={args:{children:[e.jsx(n,{children:"Sorting"},"caption-3"),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{withSorting:!0,"aria-sort":"none",scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})},"thead-4"),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-1"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-2"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-3"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]},"tbody-4"),e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"})]})},"tfoot-1")]}},i={args:{children:[e.jsx(n,{children:"Sorting Descending"},"caption-4"),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{withSorting:!0,"aria-sort":"descending",scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})},"thead-5"),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-3"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-2"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-1"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]},"tbody-5"),e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"})]})},"tfoot-2")]}},C={args:{children:[e.jsx(n,{children:"Sorting Ascending"},"caption-6"),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{withSorting:!0,"aria-sort":"ascending",scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})},"thead-6"),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-1"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-2"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-3"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]},"tbody-6"),e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"})]})},"tfoot-3")]}},t={args:{children:[e.jsx(n,{children:"Alignment"},"caption-7"),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{alignCell:"end",scope:"col",children:"Header"})]})},"thead-7"),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{alignCell:"end",children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{alignCell:"end",children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{alignCell:"end",children:"Label"})]})]},"tbody-7")]}},h={args:{children:[e.jsx(n,{children:"Content"},"caption-8"),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})},"thead-8"),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(l,{children:e.jsx(p,{href:"#",children:"Label"})}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:e.jsx(p,{href:"#",children:"Label"})}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:e.jsx(p,{href:"#",children:"Label"})}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]},"tbody-8")]}},j={args:{children:[e.jsx(n,{dir:"rtl",children:"من اليمين إلى اليسار"},"caption-9"),e.jsx(b,{dir:"rtl",children:e.jsxs(r,{children:[e.jsx(a,{alignCell:"end",scope:"col",children:"العنوان"}),e.jsx(a,{scope:"col",children:"العنوان"}),e.jsx(a,{dir:"rtl",scope:"col",children:"العنوان"})]})},"thead-9"),e.jsxs(o,{dir:"rtl",children:[e.jsxs(r,{children:[e.jsx(l,{alignCell:"end",children:"وسم"}),e.jsx(l,{children:"وسم"}),e.jsx(l,{children:"وسم"})]}),e.jsxs(r,{children:[e.jsx(l,{alignCell:"end",children:"وسم"}),e.jsx(l,{children:"وسم"}),e.jsx(l,{children:"وسم"})]}),e.jsxs(r,{children:[e.jsx(l,{alignCell:"end",children:"وسم"}),e.jsx(l,{children:"وسم"}),e.jsx(l,{children:"وسم"})]})]},"tbody-9")]}};var L,H,w;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: [<TableHeader key="thead-1">
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody key="tbody-1">
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>]
  }
}`,...(w=(H=d.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var g,R,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption key="caption-1"> Caption</TableCaption>, <TableHeader key="thead-2">
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody key="tbody-2">
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>]
  }
}`,...(m=(R=s.parameters)==null?void 0:R.docs)==null?void 0:m.source}}};var y,k,u;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption key="caption-2"> footer</TableCaption>, <TableHeader key="thead-3">
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody key="tbody-3">
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>, <TableFooter key="tfoot-1">
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>]
  }
}`,...(u=(k=c.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var F,S,f;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption key="caption-3">Sorting</TableCaption>, <TableHeader key="thead-4">
        <TableRow>
          <TableHeaderCell withSorting aria-sort={'none'} scope="col">
            Header
          </TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody key="tbody-4">
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-1</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-2</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-3</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>, <TableFooter key="tfoot-1">
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>]
  }
}`,...(f=(S=T.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var B,v,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption key="caption-4">Sorting Descending</TableCaption>, <TableHeader key="thead-5">
        <TableRow>
          <TableHeaderCell withSorting aria-sort={'descending'} scope="col">
            Header
          </TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody key="tbody-5">
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-3</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-2</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-1</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>, <TableFooter key="tfoot-2">
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>]
  }
}`,...(A=(v=i.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var D,E,G;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption key="caption-6">Sorting Ascending</TableCaption>, <TableHeader key="thead-6">
        <TableRow>
          <TableHeaderCell withSorting aria-sort={'ascending'} scope="col">
            Header
          </TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody key="tbody-6">
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-1</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-2</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-3</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>, <TableFooter key="tfoot-3">
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>]
  }
}`,...(G=(E=C.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var O,I,K;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption key="caption-7">Alignment</TableCaption>, <TableHeader key="thead-7">
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell alignCell={'end'} scope="col">
            Header
          </TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody key="tbody-7">
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell alignCell={'end'}>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell alignCell={'end'}>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell alignCell={'end'}>Label</TableCell>
        </TableRow>
      </TableBody>]
  }
}`,...(K=(I=t.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var M,N,U;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption key="caption-8">Content</TableCaption>, <TableHeader key="thead-8">
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody key="tbody-8">
        <TableRow>
          <TableCell>
            <Link href={'#'}>Label</Link>
          </TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Link href={'#'}>Label</Link>
          </TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Link href={'#'}>Label</Link>
          </TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>]
  }
}`,...(U=(N=h.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var _,q,z;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption dir={'rtl'} key="caption-9">
        من اليمين إلى اليسار
      </TableCaption>, <TableHeader dir={'rtl'} key="thead-9">
        <TableRow>
          <TableHeaderCell alignCell={'end'} scope="col">
            العنوان
          </TableHeaderCell>
          <TableHeaderCell scope="col">العنوان</TableHeaderCell>
          <TableHeaderCell dir={'rtl'} scope="col">
            العنوان
          </TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody dir={'rtl'} key="tbody-9">
        <TableRow>
          <TableCell alignCell={'end'}>وسم</TableCell>
          <TableCell>وسم</TableCell>
          <TableCell>وسم</TableCell>
        </TableRow>
        <TableRow>
          <TableCell alignCell={'end'}>وسم</TableCell>
          <TableCell>وسم</TableCell>
          <TableCell>وسم</TableCell>
        </TableRow>
        <TableRow>
          <TableCell alignCell={'end'}>وسم</TableCell>
          <TableCell>وسم</TableCell>
          <TableCell>وسم</TableCell>
        </TableRow>
      </TableBody>]
  }
}`,...(z=(q=j.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const be=["Tabel","Caption","Footer","Sorting","SortingDescending","SortingAscending","Alignment","Content","RightToLeft"];export{t as Alignment,s as Caption,h as Content,c as Footer,j as RightToLeft,T as Sorting,C as SortingAscending,i as SortingDescending,d as Tabel,be as __namedExportsOrder,re as default};