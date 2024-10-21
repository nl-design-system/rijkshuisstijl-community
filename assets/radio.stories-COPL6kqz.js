import{j as C}from"./jsx-runtime-BlAj40OV.js";import{R as E,c as W}from"./index.esm-DuPKkrPI.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./extends-CF3RwP-h.js";const _=({active:I,focus:k,focusVisible:H,name:T,...w})=>C.jsx(E,{name:T||void 0,className:W({"utrecht-radio-button--active":I,"utrecht-radio-button--focus":k,"utrecht-radio-button--focus-visible":H}),onChange:()=>{},...w}),G={title:"Rijkshuisstijl/Radio button",id:"rhc-radio",component:_,args:{checked:!1,disabled:!1,active:!1,focus:!1,focusVisible:!1,invalid:!1,name:""},argTypes:{checked:{description:"Checked",control:"boolean"},disabled:{description:"Disabled",control:"boolean"},active:{description:"Active",control:"boolean",table:{category:"Demo"}},focus:{description:"Focus",control:"boolean",table:{category:"Demo"}},focusVisible:{description:"Focus-visible",control:"boolean",table:{category:"Demo"}},invalid:{description:"Invalid",control:"boolean",table:{category:"Demo"}},name:{description:"Radio group name. Use the same name for each radio in a group."}}},e={name:"Default"},s={name:"Active",args:{active:!0,focus:!0},parameters:{docs:{description:{story:"When the component is `active`, it always has `focus` too. Test these states together for accurate results."}}}},a={name:"Hover",parameters:{pseudo:{hover:!0}}},o={name:"Focus",parameters:{pseudo:{focus:!0}}},r={name:"Focus Visible",parameters:{pseudo:{focus:!0,focusVisible:!0}}},t={name:"Disabled",args:{disabled:!0}},c={name:"Invalid",args:{invalid:!0}};var n,i,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Default'
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,m,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,b,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Hover',
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,g,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Focus',
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var D,y,F;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Focus Visible',
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
}`,...(F=(y=r.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var S,V,R;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    disabled: true
  }
}`,...(R=(V=t.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var x,j,A;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Invalid',
  args: {
    invalid: true
  }
}`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const J=["Default","Active","Hover","Focus","FocusVisible","Disabled","Invalid"];export{s as Active,e as Default,t as Disabled,o as Focus,r as FocusVisible,a as Hover,c as Invalid,J as __namedExportsOrder,G as default};