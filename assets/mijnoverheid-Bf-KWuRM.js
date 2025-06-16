import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BysLjLkY.js";import"./index-6lz1ztbV.js";import{M as o}from"./index-BesZ01xq.js";import"./index-DeTAkU8q.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-FPN2VO1j.js";import"./iframe-Ya1hGJAy.js";import"./DocsRenderer-CFRXHY34-ByaKvjLY.js";import"./react-18-CnEToxBx.js";import"./index-CTPIcns_.js";import"./index-B-2rlRvl.js";import"./index-CXQShRbs.js";function t(s){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Rijkshuisstijl Community/Design Tokens/MijnOverheid Thema"}),`
`,e.jsx(n.h1,{id:"thema-installeren",children:"Thema installeren"}),`
`,e.jsx(n.p,{children:"Hieronder vind je instructies hoe je het MijnOverheid thema in je project kan toepassen."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Installeer je het ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens",rel:"nofollow",children:"design-tokens npm package"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install --save-dev @rijkshuisstijl-community/design-tokens

# En als je CSS classes wilt importeren
npm install --save-dev @rijkshuisstijl-community/components-css
`})}),`
`,e.jsxs(n.p,{children:["Dit pakket bevat de CSS-variabelen van het design systeem. Importeer het ",e.jsx(n.code,{children:"index.css"}),"-bestand uit de ",e.jsx(n.code,{children:"dist"}),` map van het
pakket, en omring het deel van je applicatie waar je het thema wilt toepassen. Het MijnOverheid-thema is: `,e.jsx(n.code,{children:"mijnoverheid-theme"}),"."]}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Pas het thema toe in je project, hieronder een voorbeeld in HTML"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Importeer het thema -->
<link rel="stylesheet" href="@rijkshuisstijl-community/design-tokens/dist/mijnoverheid-theme/index.css" />
<!-- Meestal wil je ook de CSS classes importeren als je Rijkshuijsstijl-community componenten gebruikt -->
<link rel="stylesheet" href="node_modules/@rijkshuisstijl-community/components-css/dist/index.css" />

<body class="mijnoverheid-theme">
    <button class="rhc-button">Click Here!</button>
  </div>
</body>
`})})]})}function g(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{g as default};
