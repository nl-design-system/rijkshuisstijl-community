import{j as e}from"./jsx-runtime-8e0d6756.js";import{e as E,b as i}from"./index.esm-a506570d.js";import"./index-d665635d.js";import"./getPrototypeOf-624f05c9.js";import"./iframe-d9a5e902.js";import"../sb-preview/runtime.js";const U=`<!-- @license CC0-1.0 -->

# Logius button component
`,p=({appearance:V,children:P,iconLeft:s,iconRight:w,...C})=>e.jsxs(E,{appearance:V,...C,style:{"--utrecht-icon-inset-block-start":s?"-0.1em":0},children:[s&&e.jsx(i,{children:e.jsx("rhc-icon-calendar",{})}),P,w&&e.jsx(i,{children:e.jsx("rhc-icon-arrow-right",{})})]}),v={title:"Logius/Button",id:"logius-button",component:p,argTypes:{appearance:{description:"Button appearance",control:{type:"select"},options:["","primary-action-button","secondary-action-button","subtle-button"],table:{category:"Property"},defaultValue:""},children:{description:"Button text - default webcomponent slot",type:{name:"string",required:!0},table:{category:"Webcomponent Slot"},defaultValue:""},iconLeft:{description:"Icon Left",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1},iconRight:{description:"Icon Right",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1}},args:{children:"",appearance:"",iconLeft:!1,iconRight:!1},tags:["autodocs"],parameters:{docs:{description:{component:U}}},render:p},a={args:{children:"Label"}},r={args:{children:"Label",appearance:"primary-action-button"}},t={args:{children:"Label",appearance:"secondary-action-button"}},n={args:{children:"Label",appearance:"subtle-button"}},o={args:{children:"Label",appearance:"secondary-action-button",iconLeft:!0}},c={args:{children:"Label",appearance:"primary-action-button",iconRight:!0},name:"Button"};var l,u,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Label'
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,b,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,y,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button'
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var L,S,x;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'subtle-button'
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var R,j,B;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
    iconLeft: true
  }
}`,...(B=(j=o.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var I,A,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
    iconRight: true
  },
  name: 'Button'
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const z=["Default","PrimaryAction","SecondaryAction","Subtle","IconLeft","IconRight"];export{a as Default,o as IconLeft,c as IconRight,r as PrimaryAction,t as SecondaryAction,n as Subtle,z as __namedExportsOrder,v as default};
//# sourceMappingURL=button.stories-fdb7c6ec.js.map
