import{x as f}from"./index.esm-CbBW50on.js";import{m as j}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./jsx-runtime-D_zvdyIk.js";const w=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Code Input Group component

## Doel

Dit component kan worden gebruikt wanneer een gebruiker een verificatiecode moet invoeren. Het doel is om de gebruiker  
een gemakkelijke en overzichtelijke manier te bieden om de code in te voeren.

## Kenmerken

- Bij dit component kan je instellen welke karakters worden toegestaan
- Dit component bevat functionaliteit om automatisch de cursor op het volgende input-veldje te zetten bij het typen van een geldig karakter
- Als er een volledige en geldige code in het eerste veld wordt geplakt wordt deze verdeeld over de input-veldjes.
- Als een karakter wordt weggehaald met backspace gaat de cursor automatisch naar het vorige input-veldje.

## Gebruik

Dit component is te gebruiken door de \`CodeInputGroup\` te importeren. De component heeft één verplichte property genaamd
\`codeLength\`. Deze property bepaalt het aantal invoervelden dat wordt weergegeven, gebaseerd op de aangegeven waarde
van type \`number\`.
De values worden bij invoer terug gegeven via de \`onChange()\` methode.

Gebruik dit component voor validatiecodes.
Gebruik dit component **niet** voor andere numerieke invoervelden zoals telefoonnummers, postcodes, etc.

## Design tokens

\`\`\`JSON
{
  "rhc": {
    "code-input-group": {
      "column-gap": {
        "value": "{}",
        "type": "spacing"
      }
    },
    "code-input": {
      "size": {
        "value": "{}",
        "type": "spacing"
      }
    }
  }
}
\`\`\`
`,C={title:"Rijkshuisstijl/CodeInputGroup",id:"rhc-codeInput-group",component:f,parameters:{status:{type:"UNSTABLE"},docs:{description:{component:j([w])}},figma:"https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NLDS---Rijkshuisstijl---Templates?node-id=4652-10195&node-type=frame&t=b4RSbycsPxEdIHZ6-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/CodeInputGroup.tsx",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."},argTypes:{codeLength:{name:"codeLength",type:{name:"number",required:!0},table:{category:"API"}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{category:"API",defaultValue:{summary:"false"}}},pattern:{name:"pattern",type:{name:"string",required:!1},table:{category:"API",defaultValue:{summary:"'[a-zA-Z0-9]'"}}},capitalize:{name:"capitalize",type:{name:"boolean",required:!1},table:{category:"API",defaultValue:{summary:"false"}}},label:{name:"label",type:{name:"string",required:!1},table:{category:"API"}}},args:{codeLength:6,invalid:!1,pattern:"[a-zA-Z0-9]",capitalize:!1}},e={},n={args:{label:"Label"}},t={args:{capitalize:!0,pattern:"[a-zA-Z]",codeLength:4}},a={args:{pattern:"[0-9]",inputMode:"numeric"}},r={args:{invalid:!0}};var o,i,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,p,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    capitalize: true,
    pattern: '[a-zA-Z]',
    codeLength: 4
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,v,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    pattern: '[0-9]',
    inputMode: 'numeric'
  }
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var k,h,y;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const S=["Default","WithLabel","CapitalizedLetters","OnlyNumbers","Invalid"];export{t as CapitalizedLetters,e as Default,r as Invalid,a as OnlyNumbers,n as WithLabel,S as __namedExportsOrder,C as default};
