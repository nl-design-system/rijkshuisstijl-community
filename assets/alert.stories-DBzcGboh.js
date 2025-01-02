import{A as k}from"./index.esm-DcAww6Ld.js";/* empty css              */import"./index-QEKeRpAx.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./jsx-runtime-D_zvdyIk.js";import"./clsx-B-dksMZM.js";import"./index-CgpWq_u8.js";const y=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community alert component

[NL design system](https://www.nldesignsystem.nl/alert/) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1195-4201&t=n1djYpmvDCKmAEUi-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/472)

De alert component is er voor berichten die de gebruiker snel moet weten, omdat ze belangrijk zijn voor het uitvoeren van de huidige taak. De alert is alleen voor eenvoudige berichten. Gebruik in de alert geen buttons, geen formulier-componenten en geen complexe opmaak zoals tabellen.

Let op: de alert component gebruiken kan essentieël zijn voor gebruikers van een schermvoorlezer, maar onjuist gebruik kan heel erg vervelend zijn.

Gebruik niet een alert voor een algemene aankondiging die op meerdere pagina's staat, als het niet per se relevant is voor de huidige taak van de bezoeker. De alert wordt door schermvoorlezers als eerste voorgelezen op elke pagina waar de alert staat, het kan lastig zijn de website te gebruiken als de schermlezer elke keer wordt geblokkeerd met steeds dezelfde melding. Gebruik in die situaties de notification banner component.

## Usage

\`\`\`tsx
import { Alert } from '@rijkshuisstijl-community/components-react';

<Alert
  heading="Heading"
  headingLevel={3}
  icon="info-circle"
  textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
  type="info"
/>;
\`\`\`
`;/* @license CC0-1.0 */const z={title:"Rijkshuisstijl/Alert",id:"rhc-alert",component:k,argTypes:{type:{description:"Alert type",control:{type:"select"},options:["info","error","warning","ok"],table:{category:"Property"}},heading:{description:"Alert heading - used in default webcomponent slot",type:{name:"string"},table:{category:"Demo"}},headingLevel:{description:"Alert heading level",control:{type:"select"},options:[1,2,3,4,5],table:{category:"Demo"}},textContent:{description:"Alert content - used in default webcomponent slot",type:{name:"string"},table:{category:"Demo"}}},args:{type:"info",heading:"Heading",headingLevel:3,textContent:"Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:y}}}},e={args:{type:"info",heading:"Heading",textContent:"Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"}},t={args:{type:"error",heading:"Heading",textContent:"Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"}},n={args:{type:"ok",heading:"Heading",textContent:"Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"}},i={args:{type:"warning",heading:"Heading",textContent:"Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"}};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'info',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *'
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var a,d,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    type: 'error',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,l,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'ok',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *'
  }
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,u,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    heading: 'Heading',
    textContent: 'Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *'
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const A=["Informative","Negative","Positive","Warning"];export{e as Informative,t as Negative,n as Positive,i as Warning,A as __namedExportsOrder,z as default};
