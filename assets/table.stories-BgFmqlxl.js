import{j as e}from"./jsx-runtime-8Jttx2DA.js";import{K as a,J as l,O as n,r as L}from"./index.esm-Tj8qSLCD.js";import{T as J,k as b,j as r,i as o,l as x}from"./index-CgFCBr0q.js";import"./index-BzhKaBtb.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-DYgQ_QFa.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-BhpIufNd.js";const V=`<!-- @license CC0-1.0 -->

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
`,re={title:"Rijkshuisstijl/Table",id:"rhc-table",component:J,tags:["autodocs"],args:{dir:""},parameters:{status:{type:"STABLE"},docs:{description:{component:V}}}},s={args:{children:[e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})}),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]})]}},d={args:{children:[e.jsx(n,{children:" Caption"}),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})}),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]})]}},c={args:{children:[e.jsx(n,{children:" footer"}),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})}),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]}),e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"})]})})]}},T={args:{children:[e.jsx(n,{children:"Sorting"}),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{withSorting:!0,"aria-sort":"none",scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})}),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-1"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-2"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-3"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]}),e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"})]})})]}},i={args:{children:[e.jsx(n,{children:"Sorting Descending"}),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{withSorting:!0,"aria-sort":"descending",scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})}),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-3"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-2"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-1"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]}),e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"})]})})]}},C={args:{children:[e.jsx(n,{children:"Sorting Ascending"}),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{withSorting:!0,"aria-sort":"ascending",scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})}),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-1"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-2"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]}),e.jsxs(r,{children:[e.jsx(a,{scope:"row",children:"Label-3"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]}),e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"}),e.jsx(l,{children:"Footer"})]})})]}},h={args:{children:[e.jsx(n,{children:"Alignment"}),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{alignCell:"end",scope:"col",children:"Header"})]})}),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{alignCell:"end",children:"Label"})]})," ",e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{alignCell:"end",children:"Label"})]})," ",e.jsxs(r,{children:[e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{alignCell:"end",children:"Label"})]})]})]}},t={args:{children:[e.jsx(n,{children:"Content"}),e.jsx(b,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"}),e.jsx(a,{scope:"col",children:"Header"})]})}),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(l,{children:e.jsx(L,{href:"#",children:"Label"})}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})," ",e.jsxs(r,{children:[e.jsx(l,{children:e.jsx(L,{href:"#",children:"Label"})}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})," ",e.jsxs(r,{children:[e.jsx(l,{children:e.jsx(L,{href:"#",children:"Label"})}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"}),e.jsx(l,{children:"Label"})]})]})]}},j={args:{children:[e.jsx(n,{dir:"rtl",children:"من اليمين إلى اليسار"}),e.jsx(b,{dir:"rtl",children:e.jsxs(r,{children:[e.jsx(a,{alignCell:"end",scope:"col",children:"العنوان"}),e.jsx(a,{scope:"col",children:"العنوان"}),e.jsx(a,{dir:"rtl",scope:"col",children:"العنوان"})]})}),e.jsxs(o,{dir:"rtl",children:[e.jsxs(r,{children:[e.jsx(l,{alignCell:"end",children:"وسم"}),e.jsx(l,{children:"وسم"}),e.jsx(l,{children:"وسم"})]}),e.jsxs(r,{children:[e.jsx(l,{alignCell:"end",children:"وسم"}),e.jsx(l,{children:"وسم"}),e.jsx(l,{children:"وسم"})]}),e.jsxs(r,{children:[e.jsx(l,{alignCell:"end",children:"وسم"}),e.jsx(l,{children:"وسم"}),e.jsx(l,{children:"وسم"})]})]})]}};var p,H,w;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: [<TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody>
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
}`,...(w=(H=s.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var g,R,m;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption> Caption</TableCaption>, <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody>
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
}`,...(m=(R=d.parameters)==null?void 0:R.docs)==null?void 0:m.source}}};var u,F,k;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption> footer</TableCaption>, <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody>
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
      </TableBody>, <TableFooter>
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>]
  }
}`,...(k=(F=c.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var y,S,B;T.parameters={...T.parameters,docs:{...(y=T.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption>Sorting</TableCaption>, <TableHeader>
        <TableRow>
          <TableHeaderCell withSorting aria-sort={'none'} scope="col">
            Header
          </TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody>
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
      </TableBody>, <TableFooter>
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>]
  }
}`,...(B=(S=T.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var f,v,A;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption>Sorting Descending</TableCaption>, <TableHeader>
        <TableRow>
          <TableHeaderCell withSorting aria-sort={'descending'} scope="col">
            Header
          </TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody>
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
      </TableBody>, <TableFooter>
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
    children: [<TableCaption>Sorting Ascending</TableCaption>, <TableHeader>
        <TableRow>
          <TableHeaderCell withSorting aria-sort={'ascending'} scope="col">
            Header
          </TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody>
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
      </TableBody>, <TableFooter>
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>]
  }
}`,...(G=(E=C.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var O,I,K;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption>Alignment</TableCaption>, <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell alignCell={'end'} scope="col">
            Header
          </TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell alignCell={'end'}>Label</TableCell>
        </TableRow>{' '}
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell alignCell={'end'}>Label</TableCell>
        </TableRow>{' '}
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell alignCell={'end'}>Label</TableCell>
        </TableRow>
      </TableBody>]
  }
}`,...(K=(I=h.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var M,N,U;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption>Content</TableCaption>, <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody>
        <TableRow>
          <TableCell>
            <Link href={'#'}>Label</Link>
          </TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>{' '}
        <TableRow>
          <TableCell>
            <Link href={'#'}>Label</Link>
          </TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>{' '}
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
}`,...(U=(N=t.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var _,q,z;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: [<TableCaption dir={'rtl'}>من اليمين إلى اليسار</TableCaption>, <TableHeader dir={'rtl'}>
        <TableRow>
          <TableHeaderCell alignCell={'end'} scope="col">
            العنوان
          </TableHeaderCell>
          <TableHeaderCell scope="col">العنوان</TableHeaderCell>
          <TableHeaderCell dir={'rtl'} scope="col">
            العنوان
          </TableHeaderCell>
        </TableRow>
      </TableHeader>, <TableBody dir={'rtl'}>
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
}`,...(z=(q=j.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const be=["Tabel","Caption","Footer","Sorting","SortingDescending","SortingAscending","Alignment","Content","RightToLeft"];export{h as Alignment,d as Caption,t as Content,c as Footer,j as RightToLeft,T as Sorting,C as SortingAscending,i as SortingDescending,s as Tabel,be as __namedExportsOrder,re as default};