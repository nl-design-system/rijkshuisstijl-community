import{m as Ne}from"./merge-markdown-BtgmYwh_.js";import{j as Oe}from"./jsx-runtime-CLpGMVip.js";import{r as o}from"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";function we(r){var a,s,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r)){var n=r.length;for(a=0;a<n;a++)r[a]&&(s=we(r[a]))&&(e&&(e+=" "),e+=s)}else for(s in r)r[s]&&(e&&(e+=" "),e+=s);return e}function Ge(){for(var r,a,s=0,e="",n=arguments.length;s<n;s++)(r=arguments[s])&&(a=we(r))&&(e&&(e+=" "),e+=a);return e}const He=o.forwardRef(({appearance:r="custom",disabled:a,indeterminate:s=!1,inputRequired:e,invalid:n,required:I,className:Re,...qe},Ee)=>{let t=o.useRef(null);return o.useImperativeHandle(Ee,()=>t.current),o.useEffect(()=>{t.current&&(t.current.indeterminate=s)},[s]),Oe.jsx("input",{...qe,ref:t,type:"checkbox",className:Ge("utrecht-checkbox","utrecht-checkbox--html-input",{"utrecht-checkbox--disabled":a,"utrecht-checkbox--custom":r==="custom","utrecht-checkbox--invalid":n,"utrecht-checkbox--indeterminate":s,"utrecht-checkbox--required":I||e},Re),"aria-checked":s?"mixed":void 0,"aria-invalid":n||void 0,"aria-required":I||void 0,disabled:a,required:e})});He.displayName="Checkbox";const Le=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Checkbox component

## Usage

\`\`\`tsx
import { Checkbox } from '@rijkshuisstijl-community/components-react';

<Checkbox>Checkbox</Checkbox>;
\`\`\`
`,Ue={title:"Rijkshuisstijl/Checkbox",id:"rhc-checkbox",component:He,parameters:{status:{type:"STABLE"},docs:{description:{component:Ne([Le])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=944-1535&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/462",nldesignsystem:"https://www.nldesignsystem.nl/checkbox/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community."},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1}},onChange:{name:"onChange",type:{name:"function",required:!1}},disabled:{name:"disabled",type:{name:"boolean",required:!1}},value:{name:"value",type:{name:"string",required:!1}},"aria-label":{name:"aria-label",type:{name:"string",required:!0}}},args:{"aria-label":"checkbox-label"}},c={},u={parameters:{pseudo:{active:!0}}},d={parameters:{pseudo:{hover:!0}}},i={parameters:{pseudo:{focus:!0}}},m={parameters:{pseudo:{focusVisible:!0}}},p={args:{disabled:!0}},l={args:{invalid:!0}},h={args:{checked:!0,onChange:()=>{}}},g={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{active:!0}}},b={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{hover:!0}}},k={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{focus:!0}}},f={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{focusVisible:!0},controls:{exclude:["appearance"]}}},v={args:{checked:!0,onChange:()=>{},disabled:!0}},C={args:{indeterminate:!0}},x={args:{indeterminate:!0},parameters:{pseudo:{active:!0}}},A={args:{indeterminate:!0},parameters:{pseudo:{hover:!0}}},y={args:{indeterminate:!0},parameters:{pseudo:{focus:!0}}},S={args:{indeterminate:!0},parameters:{pseudo:{focusVisible:!0,focus:!0}}},j={args:{indeterminate:!0,disabled:!0}};var F,V,D;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(D=(V=c.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var w,H,R;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(R=(H=u.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var q,E,N;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var O,G,L;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(L=(G=i.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var T,B,M;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
}`,...(M=(B=m.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var Q,U,_;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var K,X,Z;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var z,J,P;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  }
}`,...(P=(J=h.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var W,Y,$;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...($=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,re,se;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(se=(re=b.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,ne,te;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(te=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ce,ue;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ue=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,ie,me;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {},
    disabled: true
  }
}`,...(me=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var pe,le,he;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(he=(le=C.parameters)==null?void 0:le.docs)==null?void 0:he.source}}};var ge,be,ke;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(ke=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};var fe,ve,Ce;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(Ce=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var xe,Ae,ye;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(ye=(Ae=y.parameters)==null?void 0:Ae.docs)==null?void 0:ye.source}}};var Se,je,Ie;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(Ie=(je=S.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var Fe,Ve,De;j.parameters={...j.parameters,docs:{...(Fe=j.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    disabled: true
  }
}`,...(De=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};const _e=["Default","Active","Hover","Focus","FocusVisible","Disabled","Invalid","Checked","CheckedAndActive","CheckedAndHover","CheckedAndFocus","CheckedAndFocusVisible","CheckedAndDisabled","Indeterminate","IndeterminateAndActive","IndeterminateAndHover","IndeterminateAndFocus","IndeterminateAndFocusVisible","IndeterminateAndDisabled"];export{u as Active,h as Checked,g as CheckedAndActive,v as CheckedAndDisabled,k as CheckedAndFocus,f as CheckedAndFocusVisible,b as CheckedAndHover,c as Default,p as Disabled,i as Focus,m as FocusVisible,d as Hover,C as Indeterminate,x as IndeterminateAndActive,j as IndeterminateAndDisabled,y as IndeterminateAndFocus,S as IndeterminateAndFocusVisible,A as IndeterminateAndHover,l as Invalid,_e as __namedExportsOrder,Ue as default};
