import{m as fe}from"./mergeMarkdown-CxoewyFI.js";import{r as xe}from"./checkbox-B7bAEdJ3.js";import{a1 as Ie}from"./index-DOdVPOuQ.js";import"./iframe-BzL4nLnW.js";import"./preload-helper-Dp1pzeXC.js";const Se='<!-- @license CC0-1.0 -->\n\n# Anatomy\n\n## Terminology\n\n- **checkbox**: `type="checkbox"` in HTML, [`role="checkbox"`](https://www.w3.org/TR/wai-aria-1.2/#checkbox) in WAI-ARIA 1.2, "checkbox" in [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.2/#checkbox).\n- **checked**: `checked` attribuut in HTML, `aria-checked="true"` in [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/#aria-checked), `:checked` pseudo-class in CSS.\n',ye=`<!-- @license CC0-1.0 -->

## Referenties

- [https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)
- [https://uxplanet.org/checkbox-and-toggle-in-forms-f0de6086ac41](https://uxplanet.org/checkbox-and-toggle-in-forms-f0de6086ac41)
`,Fe=`<!-- @license CC0-1.0 -->

# PDF

Checkbox moet opgebouwd worden met een \`<Form>\` tag.

\`\`\`text
<P> {
  <Form> { }
  " Ik ga akkoord met de voorwaarden."
}
\`\`\`
`,Re=`<!-- @license CC0-1.0 -->

# Relevante WCAG eisen

- [WCAG eis 1.3.5](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html):
  - Gebruik \`aria-controls\` als de checkbox een regio zichtbaar of onzichtbaar maakt.
- [WCAG eis 2.4.7](https://www.w3.org/TR/WCAG21/#focus-visible): focus moet zichtbaar zijn.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de checkbox moet groot genoeg zijn om aan te klikken, ten minste 44×44px.
`,He={title:"Checkbox",id:"rhc-checkbox",component:Ie,parameters:{status:{type:"STABLE"},docs:{description:{component:fe([xe,Se,Fe,ye,Re])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=944-1535&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Checkbox.tsx",nldesignsystem:"https://www.nldesignsystem.nl/checkbox/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community."},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1}},disabled:{name:"disabled",type:{name:"boolean",required:!1}},value:{name:"value",type:{name:"string",required:!1}},"aria-label":{name:"aria-label",type:{name:"string",required:!0}}},args:{"aria-label":"checkbox-label"}},e={},r={parameters:{pseudo:{active:!0}}},a={parameters:{pseudo:{hover:!0}}},s={parameters:{pseudo:{focus:!0}}},n={parameters:{pseudo:{focusVisible:!0}}},t={args:{disabled:!0}},o={args:{invalid:!0}},c={args:{checked:!0,onChange:()=>{}}},i={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{active:!0}}},d={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{hover:!0}}},u={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{focus:!0}}},m={args:{checked:!0,onChange:()=>{}},parameters:{pseudo:{focusVisible:!0},controls:{exclude:["appearance"]}}},p={args:{checked:!0,onChange:()=>{},disabled:!0}},g={args:{indeterminate:!0}},l={args:{indeterminate:!0},parameters:{pseudo:{active:!0}}},h={args:{indeterminate:!0},parameters:{pseudo:{hover:!0}}},b={args:{indeterminate:!0},parameters:{pseudo:{focus:!0}}},k={args:{indeterminate:!0},parameters:{pseudo:{focusVisible:!0,focus:!0}}},A={args:{indeterminate:!0,disabled:!0}};var C,w,v;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(v=(w=e.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var f,x,I;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(I=(x=r.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var S,y,F;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(F=(y=a.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var R,V,D;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(D=(V=s.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var G,T,W;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
}`,...(W=(T=n.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var H,j,z;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(j=t.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var L,q,M;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(M=(q=o.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var O,P,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  }
}`,...(B=(P=c.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var E,N,Q;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(Q=(N=i.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,_,K;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(K=(_=d.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var X,Z,J;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(J=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Y,$,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,se;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {},
    disabled: true
  }
}`,...(se=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,te,oe;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(oe=(te=g.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ce,ie,de;l.parameters={...l.parameters,docs:{...(ce=l.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(de=(ie=l.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,me,pe;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(pe=(me=h.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,le,he;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(he=(le=b.parameters)==null?void 0:le.docs)==null?void 0:he.source}}};var be,ke,Ae;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(Ae=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Ce,we,ve;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    disabled: true
  }
}`,...(ve=(we=A.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};const je=["Default","Active","Hover","Focus","FocusVisible","Disabled","Invalid","Checked","CheckedAndActive","CheckedAndHover","CheckedAndFocus","CheckedAndFocusVisible","CheckedAndDisabled","Indeterminate","IndeterminateAndActive","IndeterminateAndHover","IndeterminateAndFocus","IndeterminateAndFocusVisible","IndeterminateAndDisabled"];export{r as Active,c as Checked,i as CheckedAndActive,p as CheckedAndDisabled,u as CheckedAndFocus,m as CheckedAndFocusVisible,d as CheckedAndHover,e as Default,t as Disabled,s as Focus,n as FocusVisible,a as Hover,g as Indeterminate,l as IndeterminateAndActive,A as IndeterminateAndDisabled,b as IndeterminateAndFocus,k as IndeterminateAndFocusVisible,h as IndeterminateAndHover,o as Invalid,je as __namedExportsOrder,He as default};
