import{j as z,c as E}from"./iframe-BzL4nLnW.js";import{m as W}from"./mergeMarkdown-CxoewyFI.js";import{R as _}from"./index-DOdVPOuQ.js";import"./preload-helper-Dp1pzeXC.js";const B=`<!-- @license CC0-1.0 -->

# Radio button

Invoerveld voor het kiezen van een enkele optie uit een groep van opties.
`,H=`<!-- @license CC0-1.0 -->

# Anatomie

## Terminologie

- **radio button**: "Radio button" heeft [een Wikipedia-lemma](https://en.wikipedia.org/wiki/Radio_button), [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) noemt het ook "radio button" en "radio group".
- **checked**: [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) en HTML noemen de staat van de radio button "checked", CSS heeft de \`:checked\` pseudo-class.
`,M=`<!-- @license CC0-1.0 -->

# Design

Zorg dat de radio button herkenbaar is, doordat die lijkt op radio buttons op andere websites. Maak niet heel bijzonder ontwerp dat onduidelijk is voor veel gebruikers.

- Een radio button is rond, niet een vierkant of een ruit.
- Een radio button heeft een ronde cirkel als _checked_ icoon.
- Gebruik voor de radio button geen checkmark icoon (een vinkje), dat zou verwarrend zijn. Door een checkmark lijkt het alsof je meerdere opties kunt selecteren, terwijl dat niet zo is.
`,G=({active:I,focus:T,focusVisible:x,name:F,...V})=>z.jsx(_,{"aria-label":"radio-label",name:F||void 0,className:E({"utrecht-radio-button--active":I,"utrecht-radio-button--focus":T,"utrecht-radio-button--focus-visible":x}),onChange:()=>{},...V}),N={title:"Radio Button",id:"rhc-radio",component:G,args:{checked:!1,disabled:!1,active:!1,focus:!1,focusVisible:!1,invalid:!1,name:""},argTypes:{checked:{description:"Checked",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},active:{description:"Active",control:"boolean",table:{category:"Demo"}},focus:{description:"Focus",control:"boolean",table:{category:"Demo"}},focusVisible:{description:"Focus-visible",control:"boolean",table:{category:"Demo"}},invalid:{description:"Invalid",control:"boolean",table:{category:"Demo"}},name:{description:"Radio group name. Use the same name for each radio in a group."}},parameters:{status:{type:"STABLE"},docs:{description:{component:W([B,H,M])}},componentOrigin:"Dit component en de documentatie hieronder is overgenomen van de Gemeente Utrecht (daar heeft het de naam RadioButton), met styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Radio.tsx"}},e={},o={args:{active:!0,focus:!0},parameters:{docs:{description:{story:"When the component is `active`, it always has `focus` too. Test these states together for accurate results."}}}},t={parameters:{pseudo:{hover:!0}}},r={parameters:{pseudo:{focus:!0}}},a={parameters:{pseudo:{focus:!0,focusVisible:!0}}},s={args:{disabled:!0}},n={args:{invalid:!0}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    active: true,
    focus: true
  },
  parameters: {
    docs: {
      description: {
        story: \`When the component is \\\`active\\\`, it always has \\\`focus\\\` too. Test these states together for accurate results.\`
      }
    }
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,b,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,v,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var k,w,y;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
}`,...(y=(w=a.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var R,j,D;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var A,S,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const Z=["Default","Active","Hover","Focus","FocusVisible","Disabled","Invalid"];export{o as Active,e as Default,s as Disabled,r as Focus,a as FocusVisible,t as Hover,n as Invalid,Z as __namedExportsOrder,N as default};
