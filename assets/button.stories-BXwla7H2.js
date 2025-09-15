import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as ne,v as te,h as oe,w as se}from"./wcag.nl-ouvEKCqw.js";import{m as ce}from"./merge-markdown-DQEtknEV.js";import{k as ie}from"./index-Br7sdzbe.js";import{I as de}from"./Button-C8B856yT.js";import{I as m}from"./Icon-DwW4mLi4.js";import{I as Y,a as pe}from"./IconCalendarEvent-Bj1XNtBS.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./index-BJzegUt9.js";import"./clsx-B-dksMZM.js";import"./IconCheck-BO4gZjWf.js";const le=`<!-- @license CC0-1.0 -->

# Button

Een button biedt de mogelijkheid om een actie uit te voeren.
`,ue=`<!-- @license CC0-1.0 -->

# Icon Only

\`\`\`tsx
<IconButton label="calendar">
  <Icon>
    <IconCalendarEvent></IconCalendarEvent>
  </Icon>
</IconButton>
\`\`\`
`,g=({appearance:Z,children:$,iconLeft:ee,iconRight:re,...ae})=>e.jsxs(ie,{appearance:Z,...ae,children:[ee&&e.jsx(m,{children:e.jsx(Y,{})}),$,re&&e.jsx(m,{children:e.jsx(pe,{})})]}),xe={title:"Button",id:"rhc-button",component:g,argTypes:{appearance:{description:"Button appearance",control:{type:"select"},options:["","primary-action-button","secondary-action-button","subtle-button"],table:{category:"Variant"},defaultValue:""},children:{description:"Button text - default webcomponent slot",type:{name:"string",required:!0},table:{category:"Webcomponent Slot"},defaultValue:""},disabled:{table:{category:"Props"},defaultValue:!1},iconLeft:{description:"Icon Left",type:{name:"boolean"},table:{category:"Props"},defaultValue:!1},iconRight:{description:"Icon Right",type:{name:"boolean"},table:{category:"Props"},defaultValue:!1}},args:{appearance:"",children:"Label",disabled:!1,iconLeft:!1,iconRight:!1},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:ce([le,ne,te,oe,ue,se])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Button.tsx",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=153-1138&p=f&t=bIUNfPQ6Tcm5rDPk-0",nldesignsystem:"https://nldesignsystem.nl/button",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen (voor de IconButton) en styling van de Rijkshuisstijl Community."},render:g},r={args:{children:"Label"}},a={args:{children:"Label",appearance:"primary-action-button"}},n={args:{children:"Label",appearance:"secondary-action-button"}},t={args:{children:"Label",appearance:"subtle-button"}},o={args:{children:"Label",appearance:"secondary-action-button",iconLeft:!0}},s={args:{children:"Label",appearance:"primary-action-button",iconRight:!0}},c={args:{children:"Active"},parameters:{pseudo:{active:!0}}},i={args:{pressed:!0,children:"Pressed"}},d={args:{children:"Hover"},parameters:{pseudo:{hover:!0}}},p={args:{disabled:!0,children:"Disabled"}},l={args:{busy:!0,children:"Im busy"}},u={render:()=>e.jsx(de,{label:"calendar",children:e.jsx(m,{children:e.jsx(Y,{})})})};var b,h,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Label'
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,I,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button'
  }
}`,...(v=(I=a.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var L,S,j;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button'
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var B,x,D;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'subtle-button'
  }
}`,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var R,P,A;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
    iconLeft: true
  }
}`,...(A=(P=o.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var C,k,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
    iconRight: true
  }
}`,...(E=(k=s.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var w,O,V;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Active'
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(V=(O=c.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var H,T,F;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    pressed: true,
    children: 'Pressed'
  }
}`,...(F=(T=i.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var G,M,N;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Hover'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var U,_,q;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var Q,W,X;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    busy: true,
    children: 'Im busy'
  }
}`,...(X=(W=l.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var z,J,K;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <IconButton label="calendar">
      <Icon>
        <IconCalendarEvent></IconCalendarEvent>
      </Icon>
    </IconButton>
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const De=["Default","PrimaryAction","SecondaryAction","Subtle","IconLeft","IconRight","Active","Pressed","Hover","Disabled","Busy","IconOnly"];export{c as Active,l as Busy,r as Default,p as Disabled,d as Hover,o as IconLeft,u as IconOnly,s as IconRight,i as Pressed,a as PrimaryAction,n as SecondaryAction,t as Subtle,De as __namedExportsOrder,xe as default};
