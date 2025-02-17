import{q as Se}from"./index.esm-D8WgDWwC.js";import{m as xe}from"./merge-markdown-BtgmYwh_.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./jsx-runtime-CLpGMVip.js";const ye=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Checkbox component

## Usage

\`\`\`tsx
import { Checkbox } from '@rijkshuisstijl-community/components-react';

<Checkbox>Checkbox</Checkbox>;
\`\`\`
`,we={title:"Rijkshuisstijl/Checkbox",id:"rhc-checkbox",component:Se,parameters:{status:{type:"STABLE"},docs:{description:{component:xe([ye])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=944-1535&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/462",nldesignsystem:"https://www.nldesignsystem.nl/checkbox/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community."},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1}},onChange:{name:"onChange",type:{name:"function",required:!1}},disabled:{name:"disabled",type:{name:"boolean",required:!1}},value:{name:"value",type:{name:"string",required:!1}},"aria-label":{name:"aria-label",type:{name:"string",required:!0}}},args:{"aria-label":"checkbox-label"}},e={},r={parameters:{pseudo:{active:!0}}},s={parameters:{pseudo:{hover:!0}}},a={parameters:{pseudo:{focus:!0}}},n={parameters:{pseudo:{focusVisible:!0}}},t={args:{disabled:!0}},o={args:{invalid:!0}},c={args:{checked:!0,onChange:()=>{}}},d={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{active:!0}}},u={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{hover:!0}}},i={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{focus:!0}}},m={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{focusVisible:!0},controls:{exclude:["appearance"]}}},p={args:{checked:!0,onChange:()=>{},disabled:!0}},l={args:{indeterminate:!0}},g={args:{indeterminate:!0},parameters:{pseudo:{active:!0}}},h={args:{indeterminate:!0},parameters:{pseudo:{hover:!0}}},b={args:{indeterminate:!0},parameters:{pseudo:{focus:!0}}},k={args:{indeterminate:!0},parameters:{pseudo:{focusVisible:!0,focus:!0}}},C={args:{indeterminate:!0,disabled:!0}};var v,f,A;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(A=(f=e.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var S,x,y;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var F,I,j;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(j=(I=s.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var V,D,w;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(w=(D=a.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var H,q,R;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
}`,...(R=(q=n.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var O,G,L;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(G=t.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var T,B,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(E=(B=o.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var M,N,Q;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  }
}`,...(Q=(N=c.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,_,K;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(K=(_=d.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var X,Z,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var z,J,P;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(P=(J=i.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var W,Y,ee;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  },
  parameters: {
    pseudo: {
      focusVisible: true
    },
    controls: {
      exclude: ['appearance']
    }
  }
}`,...(ee=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var re,se,ae;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {},
    disabled: true
  }
}`,...(ae=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,te,oe;l.parameters={...l.parameters,docs:{...(ne=l.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(oe=(te=l.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ce,de,ue;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(ue=(de=g.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ie,me,pe;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(pe=(me=h.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var le,ge,he;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(he=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,ke,Ce;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(Ce=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var ve,fe,Ae;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    disabled: true
  }
}`,...(Ae=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};const He=["Default","Active","Hover","Focus","FocusVisible","Disabled","Invalid","Checked","CheckedAndActive","CheckedAndHover","CheckedAndFocus","CheckedAndFocusVisible","CheckedAndDisabled","Indeterminate","IndeterminateAndActive","IndeterminateAndHover","IndeterminateAndFocus","IndeterminateAndFocusVisible","IndeterminateAndDisabled"];export{r as Active,c as Checked,d as CheckedAndActive,p as CheckedAndDisabled,i as CheckedAndFocus,m as CheckedAndFocusVisible,u as CheckedAndHover,e as Default,t as Disabled,a as Focus,n as FocusVisible,s as Hover,l as Indeterminate,g as IndeterminateAndActive,C as IndeterminateAndDisabled,b as IndeterminateAndFocus,k as IndeterminateAndFocusVisible,h as IndeterminateAndHover,o as Invalid,He as __namedExportsOrder,we as default};
