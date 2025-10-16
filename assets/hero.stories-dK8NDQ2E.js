import{j as e}from"./iframe-DlkZjL_t.js";import{m as k}from"./mergeMarkdown-wst0O_Fj.js";import{r as y}from"./hero-CgShCWSE.js";import{H as b}from"./Hero-BpijKDst.js";import{L as x}from"./LinkListCard-DPpOjMYI.js";import{L as s}from"./index-2d5bd_11.js";import"./preload-helper-Dp1pzeXC.js";import"./Heading-D-UzQO6X.js";import"./Image-kZYpP8gm.js";const F={title:"Hero",id:"rhc-hero",component:b,argTypes:{headingLevel:{description:"Heading level",control:{type:"select"},options:[void 0,1,2,3,4,5],table:{type:{summary:"number"}}},textAlign:{description:"Alignment of the message box",control:{type:"select"},options:[void 0,"start","end"],table:{type:{summary:"string"}}},aspectRatio:{description:"Aspect ratio",control:{type:"select"},options:[void 0,"16 / 9","1 / 1","4 / 3"],table:{type:{summary:"string"}}},borderRadiusCorner:{description:"Border radius corner",control:{type:"select"},options:[void 0,"start-start","start-end","end-start","end-end"],table:{type:{summary:"string"}}},imageSrc:{description:"Image source URL",control:{type:"text"},table:{type:{summary:"string"}}},imageAlt:{description:"Image alt text",control:{type:"text"},defaultValue:"",table:{type:{summary:"string"}}},imagePresentation:{description:"Image is decorative",control:{type:"boolean"},table:{type:{summary:"boolean"}}}},parameters:{status:{type:"STABLE"},docs:{description:{component:k([y])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=15708-524&node-type=canvas&t=fXG4KjJRXbo2PG2J-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Hero.tsx",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},t={args:{imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",heading:"Heading",subHeading:"Subtext"}},i={args:{imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",children:e.jsxs(x,{heading:"Hello World",headingLevel:2,children:[e.jsx(s,{href:"#",children:"Link 1"}),e.jsx(s,{href:"#",children:"Link 2"}),e.jsx(s,{href:"#",children:"Link 3"})]})}},r={args:{imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",heading:"Heading",subHeading:"Hero with the text area aligned to the right (end)",textAlign:"end"}},a={args:{aspectRatio:"4 / 3",imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",heading:"Heading",subHeading:"Hero with the aspect ratio of 4:3"}};var o,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Subtext'
  }
} satisfies Story`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(L=a.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};const D=["Default","CustomChildren","TextAlignRight","AspectRatioFourToThree"];export{a as AspectRatioFourToThree,i as CustomChildren,t as Default,r as TextAlignRight,D as __namedExportsOrder,F as default};
