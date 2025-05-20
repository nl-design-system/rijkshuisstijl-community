import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{m as k,L as j,n as a}from"./index.esm-j2LX5NV-.js";import{r as y}from"./hero-CgShCWSE.js";import{m as H}from"./merge-markdown-566X0PcZ.js";import"./index-DeTAkU8q.js";import"./_commonjsHelpers-D6-XlEtG.js";const v={title:"Rijkshuisstijl/Hero",id:"rhc-hero",component:k,argTypes:{headingLevel:{description:"Heading level",control:{type:"select"},options:[void 0,1,2,3,4,5],table:{type:{summary:"number"}}},textAlign:{description:"Alignment of the message box",control:{type:"select"},options:[void 0,"start","end"],table:{type:{summary:"string"}}},aspectRatio:{description:"Aspect ratio",control:{type:"select"},options:[void 0,"16 / 9","1 / 1","4 / 3"],table:{type:{summary:"string"}}},borderRadiusCorner:{description:"Border radius corner",control:{type:"select"},options:[void 0,"start-start","start-end","end-start","end-end"],table:{type:{summary:"string"}}}},parameters:{status:{type:"STABLE"},docs:{description:{component:H([y])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=15708-524&node-type=canvas&t=fXG4KjJRXbo2PG2J-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Hero.tsx",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},i={args:{imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",heading:"Heading",subHeading:"Subtext"}},t={args:{imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",children:e.jsxs(j,{heading:"Hello World",headingLevel:2,children:[e.jsx(a,{href:"#",children:"Link 1"}),e.jsx(a,{href:"#",children:"Link 2"}),e.jsx(a,{href:"#",children:"Link 3"})]})}},r={args:{imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",heading:"Heading",subHeading:"Hero with the text area aligned to the right (end)",textAlign:"end"}},s={args:{aspectRatio:"4 / 3",imageSrc:"/placeholder.jpg",imageAlt:"Tullip field",heading:"Heading",subHeading:"Hero with the aspect ratio of 4:3"}};var n,o,d;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Subtext'
  }
} satisfies Story`,...(d=(o=i.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,c,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    children: <LinkListCard heading="Hello World" headingLevel={2}>
        <LinkListLink href="#">Link 1</LinkListLink>
        <LinkListLink href="#">Link 2</LinkListLink>
        <LinkListLink href="#">Link 3</LinkListLink>
      </LinkListCard>
  }
} satisfies Story`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,m,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Hero with the text area aligned to the right (end)',
    textAlign: 'end'
  }
} satisfies Story`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,L,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    aspectRatio: '4 / 3',
    imageSrc: '/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Hero with the aspect ratio of 4:3'
  }
} satisfies Story`,...(f=(L=s.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};const w=["Default","CustomChildren","TextAlignRight","AspectRatioFourToThree"];export{s as AspectRatioFourToThree,t as CustomChildren,i as Default,r as TextAlignRight,w as __namedExportsOrder,v as default};
