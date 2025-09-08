import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{N as o,s as a,O as s}from"./index.esm-COnxOxZL.js";import{m as g}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const d=`# Rijkshuisstijl Community Figure component

## Beschrijving

De \`Figure\` component wordt gebruikt om afbeeldingen en \`FigureCaption\` correct te structureren binnen een webpagina. Dit component maakt gebruik van de \`UtrechtFigure\` uit de \`@utrecht/component-library-react\` en biedt extra stylingmogelijkheden voor het afronden van hoeken.

Dit component is overgenomen van de Gemeente Utrecht en gestyled door de Rijkshuisstijl Community.

## Anatomie

De Figure component bestaat uit de volgende elementen:

- Container (Figure): De hoofdcontainer waarin de afbeelding en bijschrift worden geplaatst.

- Afbeelding (Image): De afbeelding die binnen de Figure wordt weergegeven.

- Bijschrift (FigureCaption): Een optioneel bijschrift voor de afbeelding.

## Voorbeelden met verkeerde implementatie

- Verkeerd gebruik van niet ondersteunde elementen

\`\`\`jsx
// Verkeerd
<Figure>
  <div>Ongeldig element</div>
</Figure>

// Correct
<Figure>
  <Image alt="Voorbeeldafbeelding" src="./example.jpg" />
  <FigureCaption>Voorbeeld bijschrift</FigureCaption>
</Figure>
\`\`\`
`,f={title:"Figure",id:"rhc-figure",component:o,argTypes:{borderEndEndRadius:{type:{name:"string",required:!1},control:{type:"range",min:0,max:80,step:8},description:"Bottom right corner radius of the image in pixels",table:{category:"Demo"}},borderEndStartRadius:{type:{name:"string",required:!1},control:{type:"range",min:0,max:80,step:8},description:"Bottom left corner radius of the image in pixels",table:{category:"Demo"}},borderStartEndRadius:{type:{name:"string",required:!1},control:{type:"range",min:0,max:80,step:8},description:"Top right corner radius of the image in pixels",table:{category:"Demo"}},borderStartStartRadius:{type:{name:"string",required:!1},control:{type:"range",min:0,max:80,step:8},description:"Top left corner radius of the image in pixels",table:{category:"Demo"}}},parameters:{status:{type:"STABLE"},docs:{description:{component:g([d])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Figure.tsx",nldesignsystem:"https://nldesignsystem.nl/figure",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community."}},e={args:{children:[n.jsx(a,{alt:"Multicolored tulip field",height:763,src:"/placeholder.jpg",width:640}),n.jsx(s,{children:"Bijschrift (figcaption) van afbeelding."})]}};var t,i,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: [<Image alt="Multicolored tulip field" height={763} src="/placeholder.jpg" width={640} />, <FigureCaption>{'Bijschrift (figcaption) van afbeelding.'}</FigureCaption>]
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const b=["DefaultFigure"];export{e as DefaultFigure,b as __namedExportsOrder,f as default};
