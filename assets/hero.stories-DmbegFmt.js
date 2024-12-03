import{j as e}from"./jsx-runtime-8Jttx2DA.js";import{H as p,L as c}from"./index.esm-CRuAi3lm.js";import{a as d,L as t}from"./index-B9EZEqMY.js";import"./index-BzhKaBtb.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-DYgQ_QFa.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-BhpIufNd.js";const g=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community hero component
`,H={title:"Rijkshuisstijl/Hero",id:"rhc-hero",component:p,argTypes:{heroMessage:{description:"Hero Message Visible",control:{type:"boolean"},table:{type:{summary:"boolean"}}},headingLevel:{description:"Heading level",control:{type:"select"},options:[void 0,1,2,3,4,5],table:{type:{summary:"number"}}},textAlign:{description:"Alignment of the message box",control:{type:"select"},options:[void 0,"start","end"],table:{type:{summary:"string"}}},aspectRatio:{description:"Aspect ratio",control:{type:"select"},options:[void 0,"16 / 9","1 / 1","4 / 3"],table:{type:{summary:"string"}}},borderRadiusCorner:{description:"Border radius corner",control:{type:"select"},options:[void 0,"start-start","start-end","end-start","end-end"],table:{type:{summary:"string"}}}},parameters:{status:{type:"STABLE"},docs:{description:{component:g}}}},s={args:{imageSrc:"https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg",imageAlt:"Tullip field",heading:"Heading",subHeading:"Subtext",heroMessage:!0}},i={args:{imageSrc:"https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg",imageAlt:"Tullip field",heroMessage:!1,children:e.jsx(c,{heading:"Hello World",headingLevel:2,children:e.jsxs(d,{children:[e.jsx(t,{href:"#",children:"Link 1"}),e.jsx(t,{href:"#",children:"Link 2"}),e.jsx(t,{href:"#",children:"Link 3"})]})})}};var r,n,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    imageSrc: 'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
    imageAlt: 'Tullip field',
    heading: 'Heading',
    subHeading: 'Subtext',
    heroMessage: true
  }
} satisfies Story`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var a,l,m;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    imageSrc: 'https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg',
    imageAlt: 'Tullip field',
    heroMessage: false,
    children: <LinkListCard heading="Hello World" headingLevel={2}>
        <LinkList>
          <LinkListLink href="#">Link 1</LinkListLink>
          <LinkListLink href="#">Link 2</LinkListLink>
          <LinkListLink href="#">Link 3</LinkListLink>
        </LinkList>
      </LinkListCard>
  }
} satisfies Story`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const S=["Default","CustomChildren"];export{i as CustomChildren,s as Default,S as __namedExportsOrder,H as default};
