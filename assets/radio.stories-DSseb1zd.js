import{j as z}from"./jsx-runtime-D_zvdyIk.js";import{au as E,a7 as H}from"./index.esm-BX_pxg7x.js";import{m as W}from"./merge-markdown-566X0PcZ.js";import"./index-DeTAkU8q.js";import"./_commonjsHelpers-D6-XlEtG.js";const _=`<!-- @license CC0-1.0 -->

# Radio button

Invoerveld voor het kiezen van een enkele optie uit een groep van opties.
`,B=`<!-- @license CC0-1.0 -->

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
`,G=({active:F,focus:I,focusVisible:T,name:V,...x})=>z.jsx(E,{"aria-label":"radio-label",name:V||void 0,className:H({"utrecht-radio-button--active":F,"utrecht-radio-button--focus":I,"utrecht-radio-button--focus-visible":T}),onChange:()=>{},...x}),Z={title:"Rijkshuisstijl/Radio button",id:"rhc-radio",component:G,args:{checked:!1,disabled:!1,active:!1,focus:!1,focusVisible:!1,invalid:!1,name:""},argTypes:{checked:{description:"Checked",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},active:{description:"Active",control:"boolean",table:{category:"Demo"}},focus:{description:"Focus",control:"boolean",table:{category:"Demo"}},focusVisible:{description:"Focus-visible",control:"boolean",table:{category:"Demo"}},invalid:{description:"Invalid",control:"boolean",table:{category:"Demo"}},name:{description:"Radio group name. Use the same name for each radio in a group."}},parameters:{status:{type:"STABLE"},docs:{description:{component:W([_,B,M])}},componentOrigin:"Dit component en de documentatie hieronder is overgenomen van de Gemeente Utrecht (daar heeft het de naam RadioButton), met styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Radio.tsx"}},e={name:"Default"},o={name:"Active",args:{active:!0,focus:!0},parameters:{docs:{description:{story:"When the component is `active`, it always has `focus` too. Test these states together for accurate results."}}}},a={name:"Hover",parameters:{pseudo:{hover:!0}}},t={name:"Focus",parameters:{pseudo:{focus:!0}}},r={name:"Focus Visible",parameters:{pseudo:{focus:!0,focusVisible:!0}}},s={name:"Disabled",args:{disabled:!0}},n={name:"Invalid",args:{invalid:!0}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Default'
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Active',
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
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,b,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Hover',
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,g,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Focus',
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var k,w,D;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Focus Visible',
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
}`,...(D=(w=r.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var j,y,R;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    disabled: true
  }
}`,...(R=(y=s.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var A,S,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Invalid',
  args: {
    invalid: true
  }
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const q=["Default","Active","Hover","Focus","FocusVisible","Disabled","Invalid"];export{o as Active,e as Default,s as Disabled,t as Focus,r as FocusVisible,a as Hover,n as Invalid,q as __namedExportsOrder,Z as default};
