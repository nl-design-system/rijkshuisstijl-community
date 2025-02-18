import{s as u}from"./index.esm-_2RVA9UP.js";import{m as g}from"./merge-markdown-BtgmYwh_.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./jsx-runtime-CLpGMVip.js";const l=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Code Input component

## Doel

Dit component kan worden gebruikt wanneer een gebruiker een verificatiecode moet invoeren. Het doel is om de gebruiker  
een gemakkelijke en overzichtelijke manier te bieden om de code in te voeren.

## Gebruik

Dit component is te gebruiken door de \`CodeInput\` te importeren. De component heeft één verplichte property genaamd
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
`,D={title:"Rijkshuisstijl/CodeInput",id:"rhc-codeInput",component:u,parameters:{status:{type:"UNSTABLE"},docs:{description:{component:g([l])}},figma:"https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NLDS---Rijkshuisstijl---Templates?node-id=4652-10195&node-type=frame&t=b4RSbycsPxEdIHZ6-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/823",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."},argTypes:{},args:{numberOfDigits:6,inValid:!1}},e={},n={args:{numberOfDigits:6,privateMode:!0}},t={args:{numberOfDigits:6,inValid:!0}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var s,a,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    numberOfDigits: 6,
    privateMode: true
  }
}`,...(d=(a=n.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    numberOfDigits: 6,
    inValid: true
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const y=["Default","PrivateMode","Invalid"];export{e as Default,t as Invalid,n as PrivateMode,y as __namedExportsOrder,D as default};
