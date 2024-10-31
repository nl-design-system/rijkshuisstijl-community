import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as _}from"./index.esm-P_0HfX3t.js";import{j as q,I as i}from"./index.esm-DN4TXdWq.js";import{I as P,a as W}from"./IconCalendarEvent-DTTLmfsA.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";/* empty css              */import"./objectWithoutProperties-BJfzkg-c.js";import"./extends-CF3RwP-h.js";const z=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community button component
`,p=({appearance:v,children:O,iconLeft:k,iconRight:w,...T})=>e.jsxs(q,{appearance:v,...T,children:[k&&e.jsx(i,{children:e.jsx(P,{})}),O,w&&e.jsx(i,{children:e.jsx(W,{})})]}),X={title:"Rijkshuisstijl/Button",id:"rhc-button",component:p,argTypes:{appearance:{description:"Button appearance",control:{type:"select"},options:["","primary-action-button","secondary-action-button","subtle-button"],table:{category:"Property"},defaultValue:""},children:{description:"Button text - default webcomponent slot",type:{name:"string",required:!0},table:{category:"Webcomponent Slot"},defaultValue:""},disabled:{table:{category:"Property"},defaultValue:!1},iconLeft:{description:"Icon Left",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1},iconRight:{description:"Icon Right",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1}},args:{children:"",appearance:"",disabled:!1,iconLeft:!1,iconRight:!1},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:z}}},render:p},a={args:{children:"Label"}},r={args:{children:"Label",appearance:"primary-action-button"}},t={args:{children:"Label",appearance:"secondary-action-button"}},n={args:{children:"Label",appearance:"subtle-button"}},o={args:{children:"Label",appearance:"secondary-action-button",iconLeft:!0}},c={args:{children:"Label",appearance:"primary-action-button",iconRight:!0}},s={render:()=>e.jsx(_,{label:"calendar",children:e.jsx(P,{})})};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Label'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,b,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,h,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button'
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var L,I,j;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'subtle-button'
  }
}`,...(j=(I=n.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var S,x,R;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
    iconLeft: true
  }
}`,...(R=(x=o.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var B,A,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
    iconRight: true
  }
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var E,V,D;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <IconButton label="calendar">
      <IconCalendarEvent></IconCalendarEvent>
    </IconButton>
}`,...(D=(V=s.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const Y=["Default","PrimaryAction","SecondaryAction","Subtle","IconLeft","IconRight","IconOnly"];export{a as Default,o as IconLeft,s as IconOnly,c as IconRight,r as PrimaryAction,t as SecondaryAction,n as Subtle,Y as __namedExportsOrder,X as default};