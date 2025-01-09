import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{H as d,L as c}from"./index.esm-CS39ZVPw.js";import{m as p}from"./merge-markdown-CQvfZ6M6.js";import{L as s}from"./index-DoNj3aom.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-CgpWq_u8.js";const g=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community hero component

Let op: Zowel \`heading\` als \`subHeading\` zijn optioneel, maar als je een \`subHeading\` toevoegt, moet je ook een \`heading\` toevoegen. Een Hero-component met alleen een \`subHeading\` is niet toegestaan.

## Usage

\`\`\`tsx
import { Hero } from '@rijkshuisstijl-community/components-react';

<Hero
  heading="Heading"
  imageAlt="Tulip field"
  imageSrc="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg"
  subHeading="Subtext"
/>;
\`\`\`
`,x={title:"Rijkshuisstijl/Hero",id:"rhc-hero",component:d,argTypes:{headingLevel:{description:"Heading level",control:{type:"select"},options:[void 0,1,2,3,4,5],table:{type:{summary:"number"}}},textAlign:{description:"Alignment of the message box",control:{type:"select"},options:[void 0,"start","end"],table:{type:{summary:"string"}}},aspectRatio:{description:"Aspect ratio",control:{type:"select"},options:[void 0,"16 / 9","1 / 1","4 / 3"],table:{type:{summary:"string"}}},borderRadiusCorner:{description:"Border radius corner",control:{type:"select"},options:[void 0,"start-start","start-end","end-start","end-end"],table:{type:{summary:"string"}}}},parameters:{status:{type:"STABLE"},docs:{description:{component:p([g])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=15708-524&node-type=canvas&t=fXG4KjJRXbo2PG2J-0",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},i={args:{imageSrc:"https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg",imageAlt:"Tullip field",heading:"Heading",subHeading:"Subtext"}},t={args:{imageSrc:"https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg",imageAlt:"Tullip field",children:e.jsxs(c,{heading:"Hello World",headingLevel:2,children:[e.jsx(s,{href:"#",children:"Link 1"}),e.jsx(s,{href:"#",children:"Link 2"}),e.jsx(s,{href:"#",children:"Link 3"})]})}};var n,r,o;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    imageSrc: 'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Subtext'
  }
} satisfies Story`,...(o=(r=i.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var a,m,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    imageSrc: 'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
    imageAlt: 'Tullip field',
    children: <LinkListCard heading="Hello World" headingLevel={2}>
        <LinkListLink href="#">Link 1</LinkListLink>
        <LinkListLink href="#">Link 2</LinkListLink>
        <LinkListLink href="#">Link 3</LinkListLink>
      </LinkListCard>
  }
} satisfies Story`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const S=["Default","CustomChildren"];export{t as CustomChildren,i as Default,S as __namedExportsOrder,x as default};
