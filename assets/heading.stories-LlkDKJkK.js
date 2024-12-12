import{H as j}from"./index-BclNPbce.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./jsx-runtime-D_zvdyIk.js";import"./clsx-B-dksMZM.js";import"./index-j0aIpYJF.js";const L='<!-- @license CC0-1.0 -->\n\n# Rijkshuisstijl Community heading component\n\n## Gebruik en toegankelijkheid van headings (koppen)\n\n- Gebruik altijd maar één H1-heading op een pagina met digitale content.\n- Gebruik alleen een heading als er content onder staat.\n- Gebruikers van screenreaders gebruiken headings vaak om een indruk te krijgen van de structuur van een pagina.\n- Gebruik headings niet voor de opmaak maar alleen voor de tekstuele hiërarchie van de content.\n- Sla geen niveaus over bij het gebruik van headings, bijvoorbeeld geen H3 gebruiken zonder dat er een voorgaande H2 is.\n- Beperk het aantal headings op een pagina. In de meeste gevallen hebben teksten niet meer dan `<h2>`-koppen nodig en heel soms een `<h3>`. Alleen voor uitzonderlijk lange of complexe pagina\'s zouden `<h5>` en `<h6>` nodig zijn.\n\n### De heading component beschikt over properties `level` en `appearance`\n\n**level (verplicht)**  \nDit wijzigt de HTML-tag naar het overeenkomende niveau, bijvoorbeeld: `level={1}` transformeert de HTML naar de `<h1>`-tag, `level={2}` naar `<h2>` enzovoort.\n\n**appearance (optioneel)**  \nDit wijzigt geen onderliggend HTML-element, maar verandert wel het uiterlijk. Dit is nog steeds een `<h1>` en wordt zo ook door screenreaders gelezen, maar ziet er visueel uit als een `<h3>`.\n\n```HTML\n<Heading\n  appearance="utrecht-heading-3"\n  level={1}\n>\n```\n\n---\n';/* @license CC0-1.0 */const D={title:"Rijkshuisstijl/Heading",id:"rhc-heading",component:j,argTypes:{level:{description:"Heading level",control:{type:"select"},options:[1,2,3,4,5]},appearance:{description:"Appearance",control:{type:"select"},options:[void 0,"utrecht-heading-1","utrecht-heading-2","utrecht-heading-3","utrecht-heading-4","utrecht-heading-5"]}},parameters:{status:{type:"STABLE"},docs:{description:{component:L}}}},e={args:{level:1,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 1"},n={args:{level:2,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 2"},a={args:{level:3,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 3"},i={args:{level:4,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 4"},r={args:{level:5,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 5"};var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 1'
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var d,c,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 2'
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,g,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 3'
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,h,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 4'
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var H,k,b;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 5'
}`,...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const M=["Heading1","Heading2","Heading3","Heading4","Heading5"];export{e as Heading1,n as Heading2,a as Heading3,i as Heading4,r as Heading5,M as __namedExportsOrder,D as default};
