import{f as u}from"./index.esm-TvcZtGbb.js";/* empty css              */import"./index-BclNPbce.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./jsx-runtime-D_zvdyIk.js";import"./clsx-B-dksMZM.js";import"./index-j0aIpYJF.js";import"./index-BlU3qzUC.js";const g=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Code Input component

[NL design system](https://www.nldesignsystem.nl/) | [Figma](https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NLDS---Rijkshuisstijl---Templates?node-id=4652-10195&node-type=frame&t=b4RSbycsPxEdIHZ6-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/823)

## Doel

Dit component kan worden gebruikt wanneer een gebruiker een verificatiecode moet invoeren. Het doel is om de gebruiker  
een gemakkelijke en overzichtelijke manier te bieden om de code in te voeren.

## Gebruik

Dit component is te gebruiken door de \`CodeInput\` te importeren. De component heeft één verplicht property genaamd
\`numberOfDigits\`. Deze property bepaalt het aantal invoervelden dat wordt weergegeven, gebaseerd op de aangegeven waarde
van type \`number\`.

Gebruik dit component voor validatiecodes.
Gebruik dit component **niet** voor andere numerieke invoervelden zoals telefoonnummers, postcodes, etc.

## Design tokens

\`\`\`JSON
    "rhc": {
      "code-input-group": {
        "column-gap": {
          "value": "{}",
          "type": "spacing"
        }
      }
    }

    "rhc": {
      "code-input": {
        "size": {
          "value": "{}",
          "type": "spacing"
        }
      }
    }
\`\`\`
`,I={title:"Rijkshuisstijl/CodeInput",id:"rhc-codeInput",component:u,parameters:{status:{type:"UNSTABLE"},docs:{description:{component:g}}},argTypes:{},args:{numberOfDigits:6,inValid:!1}},e={},n={args:{numberOfDigits:6,privateMode:!0}},t={args:{numberOfDigits:6,inValid:!0}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var s,a,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    numberOfDigits: 6,
    privateMode: true
  }
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var m,d,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    numberOfDigits: 6,
    inValid: true
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const O=["Default","PrivateMode","Invalid"];export{e as Default,t as Invalid,n as PrivateMode,O as __namedExportsOrder,I as default};
