import{j as e}from"./iframe-CYk8V2d0.js";import{m as re}from"./mergeMarkdown-B56Gr9e6.js";import{a as ae,v as ne,h as te,w as se}from"./wcag.nl-ouvEKCqw.js";import{n as oe}from"./index-DwYygznx.js";import{I as ce}from"./Button-Bh_Cf-o5.js";import{I as m}from"./Icon-UngLak5Y.js";import{I as K,a as ie}from"./IconCalendarEvent-DbuTurGG.js";import"./preload-helper-Dp1pzeXC.js";import"./IconCheck-DhxAl1tC.js";const de=`<!-- @license CC0-1.0 -->

# Button

Een button biedt de mogelijkheid om een actie uit te voeren.
`,le=`<!-- @license CC0-1.0 -->

# Icon Only

\`\`\`tsx
<IconButton label="calendar">
  <Icon>
    <IconCalendarEvent></IconCalendarEvent>
  </Icon>
</IconButton>
\`\`\`
`,pe=({children:Y,iconLeft:Z,iconRight:$,...ee})=>e.jsxs(oe,{...ee,children:[Z&&e.jsx(m,{children:e.jsx(K,{})}),Y,$&&e.jsx(m,{children:e.jsx(ie,{})})]}),Le={title:"Button",id:"rhc-button",component:pe,argTypes:{appearance:{description:"Button appearance",control:{type:"select"},options:["","primary-action-button","secondary-action-button","subtle-button"],table:{category:"Variant"},defaultValue:""},children:{description:"Button text - default webcomponent slot",type:{name:"string",required:!0},table:{category:"Webcomponent Slot"},defaultValue:""},disabled:{table:{category:"Props"},defaultValue:!1},iconLeft:{description:"Icon Left",type:{name:"boolean"},table:{category:"Props"},defaultValue:!1},iconRight:{description:"Icon Right",type:{name:"boolean"},table:{category:"Props"},defaultValue:!1}},args:{appearance:"",children:"Label",disabled:!1,iconLeft:!1,iconRight:!1},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:re([de,ae,ne,te,le,se])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Button.tsx",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=153-1138&p=f&t=bIUNfPQ6Tcm5rDPk-0",nldesignsystem:"https://nldesignsystem.nl/button",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen (voor de IconButton) en styling van de Rijkshuisstijl Community."}},r={args:{children:"Label"}},a={args:{children:"Label",appearance:"primary-action-button"}},n={args:{children:"Label",appearance:"secondary-action-button"}},t={args:{children:"Label",appearance:"subtle-button"}},s={args:{children:"Label",appearance:"secondary-action-button",iconLeft:!0}},o={args:{children:"Label",appearance:"primary-action-button",iconRight:!0}},c={args:{children:"Active"},parameters:{pseudo:{active:!0}}},i={args:{pressed:!0,children:"Pressed"}},d={args:{children:"Hover"},parameters:{pseudo:{hover:!0}}},l={args:{disabled:!0,children:"Disabled"}},p={args:{busy:!0,children:"Im busy"}},u={render:()=>e.jsx(ce,{label:"calendar",children:e.jsx(m,{children:e.jsx(K,{})})})};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Label'
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,f,I;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button'
  }
}`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var v,L,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button'
  }
}`,...(S=(L=n.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var j,B,x;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'subtle-button'
  }
}`,...(x=(B=t.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var D,R,P;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
    iconLeft: true
  }
}`,...(P=(R=s.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var A,C,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
    iconRight: true
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var k,w,O;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Active'
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(O=(w=c.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var V,H,T;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    pressed: true,
    children: 'Pressed'
  }
}`,...(T=(H=i.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var F,G,M;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Hover'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var N,U,_;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...(_=(U=l.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var q,Q,W;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    busy: true,
    children: 'Im busy'
  }
}`,...(W=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,z,J;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <IconButton label="calendar">
      <Icon>
        <IconCalendarEvent></IconCalendarEvent>
      </Icon>
    </IconButton>
}`,...(J=(z=u.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};const Se=["Default","PrimaryAction","SecondaryAction","Subtle","IconLeft","IconRight","Active","Pressed","Hover","Disabled","Busy","IconOnly"];export{c as Active,p as Busy,r as Default,l as Disabled,d as Hover,s as IconLeft,u as IconOnly,o as IconRight,i as Pressed,a as PrimaryAction,n as SecondaryAction,t as Subtle,Se as __namedExportsOrder,Le as default};
