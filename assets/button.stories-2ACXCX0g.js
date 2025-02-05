import{j as e}from"./jsx-runtime-CLpGMVip.js";import{I as i,R as F}from"./index.esm-aHhU-aAC.js";import{a as G,v as M,h as N,w as U}from"./wcag.nl-ouvEKCqw.js";import{m as _}from"./merge-markdown-BtgmYwh_.js";import{B as q}from"./index-Be-aV6DI.js";import{a as w,I as H}from"./IconCalendarEvent-CeEtU18p.js";/* empty css              */import"./index-BLZjEvYy.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./clsx-B-dksMZM.js";import"./index-D5-rbeG3.js";const Q=`<!-- @license CC0-1.0 -->

# Button

Een button biedt de mogelijkheid om een actie uit te voeren.
`,W=`<!-- @license CC0-1.0 -->

# Icon Only

\`\`\`tsx
<IconButton label="calendar">
  <Icon>
    <IconCalendarEvent></IconCalendarEvent>
  </Icon>
</IconButton>
\`\`\`
`,l=({appearance:P,children:A,iconLeft:O,iconRight:V,...T})=>e.jsxs(q,{appearance:P,...T,children:[O&&e.jsx(i,{children:e.jsx(w,{})}),A,V&&e.jsx(i,{children:e.jsx(H,{})})]}),oe={title:"Rijkshuisstijl/Button",id:"rhc-button",component:l,argTypes:{appearance:{description:"Button appearance",control:{type:"select"},options:["","primary-action-button","secondary-action-button","subtle-button"],table:{category:"Variant"},defaultValue:""},children:{description:"Button text - default webcomponent slot",type:{name:"string",required:!0},table:{category:"Webcomponent Slot"},defaultValue:""},disabled:{table:{category:"Props"},defaultValue:!1},iconLeft:{description:"Icon Left",type:{name:"boolean"},table:{category:"Props"},defaultValue:!1},iconRight:{description:"Icon Right",type:{name:"boolean"},table:{category:"Props"},defaultValue:!1}},args:{appearance:"",children:"Label",disabled:!1,iconLeft:!1,iconRight:!1},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:_([Q,G,M,N,W,U])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/455",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=153-1138&p=f&t=bIUNfPQ6Tcm5rDPk-0",nldesignsystem:"https://nldesignsystem.nl/button",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen (voor de IconButton) en styling van de Rijkshuisstijl Community."},render:l},n={args:{children:"Label"}},a={args:{children:"Label",appearance:"primary-action-button"}},t={args:{children:"Label",appearance:"secondary-action-button"}},r={args:{children:"Label",appearance:"subtle-button"}},o={args:{children:"Label",appearance:"secondary-action-button",iconLeft:!0}},s={args:{children:"Label",appearance:"primary-action-button",iconRight:!0}},c={render:()=>e.jsx(F,{label:"calendar",children:e.jsx(i,{children:e.jsx(w,{})})})};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Label'
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,b,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button'
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,y,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button'
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var I,L,j;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'subtle-button'
  }
}`,...(j=(L=r.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var x,B,R;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
    iconLeft: true
  }
}`,...(R=(B=o.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var S,v,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
    iconRight: true
  }
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var D,E,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <IconButton label="calendar">
      <Icon>
        <IconCalendarEvent></IconCalendarEvent>
      </Icon>
    </IconButton>
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const se=["Default","PrimaryAction","SecondaryAction","Subtle","IconLeft","IconRight","IconOnly"];export{n as Default,o as IconLeft,c as IconOnly,s as IconRight,a as PrimaryAction,t as SecondaryAction,r as Subtle,se as __namedExportsOrder,oe as default};
