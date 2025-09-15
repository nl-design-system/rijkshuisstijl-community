import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CgIrIXX2.js";import"./index-V35eokYI.js";import{M as o}from"./index-EeHdFI3s.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-CdGoM2Vk.js";import"./iframe-DZ0l7zuu.js";import"./DocsRenderer-CFRXHY34-Dm8NCOw8.js";import"./react-18-WSCnJXIz.js";import"./index-jD2FfvU1.js";import"./index-Bw_1hv9w.js";import"./index-CXQShRbs.js";function t(s){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Design Tokens/DigiD Thema"}),`
`,e.jsx(n.h1,{id:"thema-installeren",children:"Thema installeren"}),`
`,e.jsx(n.p,{children:"Hieronder vind je instructies hoe je het DigiD thema in je project kan toepassen."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Installeer je het ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens",rel:"nofollow",children:"design-tokens npm package"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install --save-dev @rijkshuisstijl-community/design-tokens

# En als je CSS classes wilt importeren
npm install --save-dev @rijkshuisstijl-community/components-css
`})}),`
`,e.jsxs(n.p,{children:["Dit pakket bevat de CSS-variabelen van het design systeem. Importeer het ",e.jsx(n.code,{children:"index.css"}),"-bestand uit de ",e.jsx(n.code,{children:"dist"})," map van het pakket, en omring het deel van je applicatie waar je het thema wilt toepassen met de CSS-class: ",e.jsx(n.code,{children:"digid-theme"}),"."]}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Pas het thema toe in je project, hieronder een voorbeeld in HTML"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Importeer het thema -->
<link rel="stylesheet" href="@rijkshuisstijl-community/design-tokens/dist/digid-theme/index.css" />
<!-- Meestal wil je ook de CSS classes importeren als je Rijkshuijsstijl-community componenten gebruikt -->
<link rel="stylesheet" href="node_modules/@rijkshuisstijl-community/components-css/dist/index.css" />

<body class="digid-theme">
    <button class="rhc-button">Click Here!</button>
  </div>
</body>
`})})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{v as default};
