import{K as r}from"./index.esm-5Q5QRGti.js";import{m as a}from"./merge-markdown-BtgmYwh_.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./jsx-runtime-CLpGMVip.js";const i=`<!-- @license CC0-1.0 -->

# Image

Toont een afbeelding.
`,s=`<!-- @license CC0-1.0 -->

# Bibliografie

- [Using the HTML title attribute — Steve Faulkner](https://www.tpgi.com/using-the-html-title-attribute-updated/)
`,c="<!-- @license CC0-1.0 -->\n\n# HTML\n\n- Gebruik het `alt` attribuut voor een beschrijvende tekst.\n- Gebruik niet het `title` attribuut voor `img`. De afbeelding moet goed zichtbaar zijn, maar sommige browsers maken een tooltip met voor de tekst in het `title` attribuut. Een tooltip kan bijvoorbeeld een afbeelding van een [QR-code](https://en.wikipedia.org/wiki/QR_code) onbruikbaar maken doordat de QR-code niet meer herkend wordt.\n",l=`<!-- @license CC0-1.0 -->

# Relevante WCAG eisen

- [WCAG eis 1.1.1](https://www.w3.org/TR/WCAG21/#non-text-content): afbeeldingen moeten een tekst als alternatief hebben, bijvoorbeeld via het \`alt\`-attribuut
- [WCAG eis 1.4.5](https://www.w3.org/TR/WCAG21/#images-of-text)
- [WCAG eis 1.4.6](https://www.w3.org/TR/WCAG21/#contrast-enhanced)
- [WCAG eis 1.4.9](https://www.w3.org/TR/WCAG21/#images-of-text-no-exception)
- [WCAG eis 1.4.11](https://www.w3.org/TR/WCAG21/#non-text-contrast)
- [WCAG eis 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts): de taal van de \`alt\` tag moet instelbaar zijn
`,w={title:"Rijkshuisstijl/Image",id:"rhc-image",component:r,argTypes:{src:{description:"Image source",control:{type:"text"},table:{category:"Property"}},alt:{description:"Image alt text",control:{type:"text"},table:{category:"Property"}},width:{description:"Image width",control:{type:"number"},table:{category:"Property"}},height:{description:"Image height",control:{type:"number"},table:{category:"Property"}}},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:a([i,c,s,l])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, maar de photo property altijd geset, daardoor is hij altijd max-height en max-width 100%."}},e={args:{alt:"Multicolored tulip field",height:763,width:640,src:"./placeholder.jpg"},name:"Image"};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    alt: 'Multicolored tulip field',
    height: 763,
    width: 640,
    src: './placeholder.jpg'
  },
  name: 'Image'
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,w as default};
