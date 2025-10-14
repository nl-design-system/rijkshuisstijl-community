import{j as n,r as d}from"./iframe-CLJWzYSL.js";import{m as b}from"./merge-markdown-D8Eslh9D.js";import{E as m}from"./ExpandableCheckboxGroup-DE201Tts.js";import"./preload-helper-Dp1pzeXC.js";import"./Fieldset-dJFUM73T.js";import"./index-GfqW3cb2.js";import"./FormFieldCheckboxGroup-apG7uzUg.js";import"./CheckboxGroup-CP1ckVDa.js";import"./FormField-BkxaKY10.js";import"./FormFieldCheckboxOption-CVo3CZw6.js";const v=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Expandable Checkbox Group component

De \`ExpandableCheckboxGroup\` is een \`CheckboxGroup\` met uitklap-functionaliteit voor het tonen en verbergen van extra opties.

Het **doel** van de component is om een pagina overzichtelijk te houden wanneer er veel checkboxopties zijn. Door een deel van de opties binnen een details element te plaatsen, zijn deze opties wel bereikbaar voor de gebruiker.

## States

Expandable Checkbox Group heeft verschillende states:

- Closed (default): een deel van de checkboxopties worden getoond, een deel van de opties niet.
- Open: alle checkboxopties worden getoond
- Hover: (TODO?)
`,t=o=>n.jsx(m,{...o}),O={title:"Expandable Checkbox Group",id:"rhc-expandable-checkbox-group",component:t,argTypes:{children:{}},tags:["autodocs"],parameters:{status:{type:"UNSTABLE"},docs:{description:{component:b([v])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/ExpandableCheckboxGroup.tsx"},render:t},e={args:{legend:"Framework",maxVisible:3,options:[{value:"value",label:"React"},{value:"value2",label:"CSS"},{value:"value3",label:"Angular"},{value:"value4",label:"Web Component"},{value:"value5",label:"Vue"}],selectedOptions:[]}},a={args:{legend:"Framework",maxVisible:3,options:[{value:"value",label:"React"},{value:"value2",label:"CSS"},{value:"value3",label:"Angular"},{value:"value4",label:"Web Component"},{value:"value5",label:"Vue"}],selectedOptions:[]},decorators:[o=>(d.useEffect(()=>{const l=document.querySelector("#open-story .rhc-expandable-checkbox-group__details");l&&(l.open=!0)}),n.jsx("div",{id:"open-story",children:n.jsx(o,{})}))]};var r,s,u;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var i,p,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const w=["Default","Open"];export{e as Default,a as Open,w as __namedExportsOrder,O as default};
