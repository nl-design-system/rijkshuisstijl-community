import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{m as k,L as y,n as s}from"./index.esm-Depn5b2h.js";import{r as b}from"./hero-CgShCWSE.js";import{m as x}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const w={title:"Hero",id:"rhc-hero",component:k,argTypes:{headingLevel:{description:"Heading level",control:{type:"select"},options:[void 0,1,2,3,4,5],table:{type:{summary:"number"}}},textAlign:{description:"Alignment of the message box",control:{type:"select"},options:[void 0,"start","end"],table:{type:{summary:"string"}}},aspectRatio:{description:"Aspect ratio",control:{type:"select"},options:[void 0,"16 / 9","1 / 1","4 / 3"],table:{type:{summary:"string"}}},borderRadiusCorner:{description:"Border radius corner",control:{type:"select"},options:[void 0,"start-start","start-end","end-start","end-end"],table:{type:{summary:"string"}}},imageSrc:{description:"Image source URL",control:{type:"text"},table:{type:{summary:"string"}}},imageAlt:{description:"Image alt text",control:{type:"text"},defaultValue:"",table:{type:{summary:"string"}}},imagePresentation:{description:"Image is decorative",control:{type:"boolean"},table:{type:{summary:"boolean"}}}},parameters:{status:{type:"STABLE"},docs:{description:{component:x([b])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=15708-524&node-type=canvas&t=fXG4KjJRXbo2PG2J-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Hero.tsx",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},t={args:{imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",heading:"Heading",subHeading:"Subtext"}},i={args:{imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",children:e.jsxs(y,{heading:"Hello World",headingLevel:2,children:[e.jsx(s,{href:"#",children:"Link 1"}),e.jsx(s,{href:"#",children:"Link 2"}),e.jsx(s,{href:"#",children:"Link 3"})]})}},r={args:{imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",heading:"Heading",subHeading:"Hero with the text area aligned to the right (end)",textAlign:"end"}},a={args:{aspectRatio:"4 / 3",imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",heading:"Heading",subHeading:"Hero with the aspect ratio of 4:3"}};var n,o,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Subtext'
  }
} satisfies Story`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,c,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    children: <LinkListCard heading="Hello World" headingLevel={2}>
        <LinkListLink href="#">Link 1</LinkListLink>
        <LinkListLink href="#">Link 2</LinkListLink>
        <LinkListLink href="#">Link 3</LinkListLink>
      </LinkListCard>
  }
} satisfies Story`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,m,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Hero with the text area aligned to the right (end)',
    textAlign: 'end'
  }
} satisfies Story`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,L,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    aspectRatio: '4 / 3',
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Hero with the aspect ratio of 4:3'
  }
} satisfies Story`,...(f=(L=a.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};const C=["Default","CustomChildren","TextAlignRight","AspectRatioFourToThree"];export{a as AspectRatioFourToThree,i as CustomChildren,t as Default,r as TextAlignRight,C as __namedExportsOrder,w as default};
