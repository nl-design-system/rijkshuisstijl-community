import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BJzegUt9.js";import{m}from"./merge-markdown-DQEtknEV.js";import{E as b}from"./ExpandableCheckboxGroup-D9H_ZCAn.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";import"./Fieldset-CuCiI_Y1.js";import"./index-Br7sdzbe.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./FormFieldCheckboxGroup-Bt6_MhIY.js";import"./CheckboxGroup-DsPZsGrM.js";import"./FormField-hq07XTFQ.js";import"./Icon-DwW4mLi4.js";import"./IconCheck-BO4gZjWf.js";import"./FormFieldCheckboxOption-DyIBGrId.js";const v=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Expandable Checkbox Group component

De \`ExpandableCheckboxGroup\` is een \`CheckboxGroup\` met uitklap-functionaliteit voor het tonen en verbergen van extra opties.

Het **doel** van de component is om een pagina overzichtelijk te houden wanneer er veel checkboxopties zijn. Door een deel van de opties binnen een details element te plaatsen, zijn deze opties wel bereikbaar voor de gebruiker.

## States

Expandable Checkbox Group heeft verschillende states:

- Closed (default): een deel van de checkboxopties worden getoond, een deel van de opties niet.
- Open: alle checkboxopties worden getoond
- Hover: (TODO?)
`,t=o=>n.jsx(b,{...o}),R={title:"Expandable Checkbox Group",id:"rhc-expandable-checkbox-group",component:t,argTypes:{children:{}},tags:["autodocs"],parameters:{status:{type:"UNSTABLE"},docs:{description:{component:m([v])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/ExpandableCheckboxGroup.tsx"},render:t},e={args:{legend:"Framework",maxVisible:3,options:[{value:"value",label:"React"},{value:"value2",label:"CSS"},{value:"value3",label:"Angular"},{value:"value4",label:"Web Component"},{value:"value5",label:"Vue"}],selectedOptions:[]}},a={args:{legend:"Framework",maxVisible:3,options:[{value:"value",label:"React"},{value:"value2",label:"CSS"},{value:"value3",label:"Angular"},{value:"value4",label:"Web Component"},{value:"value5",label:"Vue"}],selectedOptions:[]},decorators:[o=>(d.useEffect(()=>{const l=document.querySelector("#open-story .rhc-expandable-checkbox-group__details");l&&(l.open=!0)}),n.jsx("div",{id:"open-story",children:n.jsx(o,{})}))]};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    legend: 'Framework',
    maxVisible: 3,
    options: [{
      value: 'value',
      label: 'React'
    }, {
      value: 'value2',
      label: 'CSS'
    }, {
      value: 'value3',
      label: 'Angular'
    }, {
      value: 'value4',
      label: 'Web Component'
    }, {
      value: 'value5',
      label: 'Vue'
    }],
    selectedOptions: []
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var u,p,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    legend: 'Framework',
    maxVisible: 3,
    options: [{
      value: 'value',
      label: 'React'
    }, {
      value: 'value2',
      label: 'CSS'
    }, {
      value: 'value3',
      label: 'Angular'
    }, {
      value: 'value4',
      label: 'Web Component'
    }, {
      value: 'value5',
      label: 'Vue'
    }],
    selectedOptions: []
  },
  decorators: [Story => {
    useEffect(() => {
      // Force open the details element after render
      const details = document.querySelector('#open-story .rhc-expandable-checkbox-group__details');
      if (details) {
        (details as HTMLDetailsElement).open = true;
      }
    });
    return <div id="open-story">
          <Story />
        </div>;
  }]
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const _=["Default","Open"];export{e as Default,a as Open,_ as __namedExportsOrder,R as default};
