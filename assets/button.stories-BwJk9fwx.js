import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as M,I as i}from"./index.esm-DgHopRTR.js";import{a as _,v as q,h as G,w as H}from"./wcag.nl-ouvEKCqw.js";import{m as U}from"./merge-markdown-CQvfZ6M6.js";import{I as w,a as W}from"./IconCalendarEvent-D5lwoWgZ.js";import{B as z}from"./index-DKyXVfeP.js";/* empty css              */import"./index-C4jjA_3H.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./clsx-B-dksMZM.js";import"./heading-BJGfgtDt.js";import"./index-CgpWq_u8.js";const F=`<!-- @license CC0-1.0 -->

# Button

Een button biedt de mogelijkheid om een actie uit te voeren.
`,p=({appearance:V,children:k,iconLeft:O,iconRight:P,...T})=>e.jsxs(z,{appearance:V,...T,children:[O&&e.jsx(i,{children:e.jsx(w,{})}),k,P&&e.jsx(i,{children:e.jsx(W,{})})]}),ce={title:"Rijkshuisstijl/Button",id:"rhc-button",component:p,argTypes:{appearance:{description:"Button appearance",control:{type:"select"},options:["","primary-action-button","secondary-action-button","subtle-button"],table:{category:"Property"},defaultValue:""},children:{description:"Button text - default webcomponent slot",type:{name:"string",required:!0},table:{category:"Webcomponent Slot"},defaultValue:""},disabled:{table:{category:"Property"},defaultValue:!1},iconLeft:{description:"Icon Left",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1},iconRight:{description:"Icon Right",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1}},args:{children:"",appearance:"",disabled:!1,iconLeft:!1,iconRight:!1},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:U([F,_,q,G,H])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen (voor de IconButton) en styling van de Rijkshuisstijl Community."},render:p},a={args:{children:"Label"}},n={args:{children:"Label",appearance:"primary-action-button"}},r={args:{children:"Label",appearance:"secondary-action-button"}},t={args:{children:"Label",appearance:"subtle-button"}},o={args:{children:"Label",appearance:"secondary-action-button",iconLeft:!0}},c={args:{children:"Label",appearance:"primary-action-button",iconRight:!0}},s={render:()=>e.jsx(M,{label:"calendar",children:e.jsx(i,{children:e.jsx(w,{})})})};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Label'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,b,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button'
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,y,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var I,L,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'subtle-button'
  }
}`,...(j=(L=t.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var S,x,B;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
    iconLeft: true
  }
}`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var R,v,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
    iconRight: true
  }
}`,...(D=(v=c.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var E,A,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <IconButton label="calendar">
      <Icon>
        <IconCalendarEvent></IconCalendarEvent>
      </Icon>
    </IconButton>
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const se=["Default","PrimaryAction","SecondaryAction","Subtle","IconLeft","IconRight","IconOnly"];export{a as Default,o as IconLeft,s as IconOnly,c as IconRight,n as PrimaryAction,r as SecondaryAction,t as Subtle,se as __namedExportsOrder,ce as default};
