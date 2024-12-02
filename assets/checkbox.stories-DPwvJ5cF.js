import{j as Le}from"./jsx-runtime-8Jttx2DA.js";import{r as c}from"./index-BzhKaBtb.js";import"./_commonjsHelpers-CqkleIqs.js";function He(r){var a,s,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r)){var t=r.length;for(a=0;a<t;a++)r[a]&&(s=He(r[a]))&&(e&&(e+=" "),e+=s)}else for(s in r)r[s]&&(e&&(e+=" "),e+=s);return e}function qe(){for(var r,a,s=0,e="",t=arguments.length;s<t;s++)(r=arguments[s])&&(a=He(r))&&(e&&(e+=" "),e+=a);return e}const we=c.forwardRef(({appearance:r="custom",disabled:a,indeterminate:s=!1,inputRequired:e,invalid:t,required:I,className:Re,...Ee},Ne)=>{let n=c.useRef(null);return c.useImperativeHandle(Ne,()=>n.current),c.useEffect(()=>{n.current&&(n.current.indeterminate=s)},[s]),Le.jsx("input",{...Ee,ref:n,type:"checkbox",className:qe("utrecht-checkbox","utrecht-checkbox--html-input",{"utrecht-checkbox--disabled":a,"utrecht-checkbox--custom":r==="custom","utrecht-checkbox--invalid":t,"utrecht-checkbox--indeterminate":s,"utrecht-checkbox--required":I||e},Re),"aria-checked":s?"mixed":void 0,"aria-invalid":t||void 0,"aria-required":I||void 0,disabled:a,required:e})});we.displayName="Checkbox";const Ge=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Checkbox component

[NL design system](https://www.nldesignsystem.nl/checkbox/) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=944-1535&node-type=canvas&t=HiNKOQhf1hQtLZrr-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/462)

## Usage

\`\`\`tsx
import { Checkbox } from '@rijkshuisstijl-community/components-react';

<Checkbox>Checkbox</Checkbox>;
\`\`\`
`,Qe={title:"Rijkshuisstijl/Checkbox",id:"rhc-checkbox",component:we,parameters:{status:{type:"STABLE"},docs:{description:{component:Ge}}},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1}},disabled:{name:"disabled",type:{name:"boolean",required:!1}},value:{name:"value",type:{name:"string",required:!1}}},args:{}},o={},u={parameters:{pseudo:{active:!0}}},d={parameters:{pseudo:{hover:!0}}},i={parameters:{pseudo:{focus:!0}}},m={parameters:{pseudo:{focusVisible:!0}}},p={args:{disabled:!0}},l={args:{invalid:!0}},h={args:{checked:!0}},g={args:{checked:!0},parameters:{pseudo:{active:!0}}},b={args:{checked:!0},parameters:{pseudo:{hover:!0}}},k={args:{checked:!0},parameters:{pseudo:{focus:!0}}},f={args:{checked:!0},parameters:{pseudo:{focusVisible:!0},controls:{exclude:["appearance"]}}},v={args:{checked:!0,disabled:!0}},x={args:{indeterminate:!0}},A={args:{indeterminate:!0},parameters:{pseudo:{active:!0}}},C={args:{indeterminate:!0},parameters:{pseudo:{hover:!0}}},S={args:{indeterminate:!0},parameters:{pseudo:{focus:!0}}},y={args:{indeterminate:!0},parameters:{pseudo:{focusVisible:!0,focus:!0}}},F={args:{indeterminate:!0,disabled:!0}};var j,V,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(D=(V=o.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var H,w,R;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(R=(w=u.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var E,N,L;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(L=(N=d.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var q,G,O;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(O=(G=i.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var T,B,Q;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
}`,...(Q=(B=m.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var _,K,M;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var U,X,Z;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var z,J,P;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(P=(J=h.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var W,Y,$;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...($=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,re,se;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(se=(re=b.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,te,ne;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ce,oe,ue;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  parameters: {
    pseudo: {
      focusVisible: true
    },
    controls: {
      exclude: ['appearance']
    }
  }
}`,...(ue=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var de,ie,me;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(me=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var pe,le,he;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(he=(le=x.parameters)==null?void 0:le.docs)==null?void 0:he.source}}};var ge,be,ke;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(ke=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};var fe,ve,xe;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(xe=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Ae,Ce,Se;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(Se=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var ye,Fe,Ie;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(Ie=(Fe=y.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};var je,Ve,De;F.parameters={...F.parameters,docs:{...(je=F.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    disabled: true
  }
}`,...(De=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};const _e=["Default","Active","Hover","Focus","FocusVisible","Disabled","Invalid","Checked","CheckedAndActive","CheckedAndHover","CheckedAndFocus","CheckedAndFocusVisible","CheckedAndDisabled","Indeterminate","IndeterminateAndActive","IndeterminateAndHover","IndeterminateAndFocus","IndeterminateAndFocusVisible","IndeterminateAndDisabled"];export{u as Active,h as Checked,g as CheckedAndActive,v as CheckedAndDisabled,k as CheckedAndFocus,f as CheckedAndFocusVisible,b as CheckedAndHover,o as Default,p as Disabled,i as Focus,m as FocusVisible,d as Hover,x as Indeterminate,A as IndeterminateAndActive,F as IndeterminateAndDisabled,S as IndeterminateAndFocus,y as IndeterminateAndFocusVisible,C as IndeterminateAndHover,l as Invalid,_e as __namedExportsOrder,Qe as default};
