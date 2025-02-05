import{A as a}from"./index-D4WwZgFf.js";import{r}from"./README-DTmsIE8e.js";import{m as s}from"./merge-markdown-BtgmYwh_.js";import"./_commonjsHelpers-C932wzq6.js";a.define();const p={title:"Web Components/Accordion",id:"rhc-accordion-web",component:"rhc-accordion",argTypes:{appearance:{description:"Appearance of the component",type:{name:"string"},control:{type:"select"},options:["default","utrecht"]},heading:{type:{name:"string"},control:"text",description:"Heading for the accordion, also needs a headingLevel"},headingLevel:{name:"Heading Level",type:{name:"string"},control:"select",options:[1,2,3,4,5,6],description:"Heading level for the accordion, also needs a heading text"},icon:{name:"icon",description:"Icon at the start",control:{type:"select"},options:["default","delta-omlaag"],mapping:{default:""}},sections:{control:"object",description:"Array of sections in the accordion"}},args:{icon:"default",heading:""},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-accordion",status:{type:"STABLE"},docs:{description:{component:s([r])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community."}},e={args:{sections:JSON.stringify([{label:"Lorem ipsum 1",body:"Lorem ipsum dolor sit amet.",expanded:!0},{label:"Lorem ipsum 2",body:"Lorem ipsum dolor sit amet.",expanded:!1},{label:"Lorem ipsum 3",body:"Lorem ipsum dolor sit amet.",expanded:!1}])}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    sections: JSON.stringify([{
      label: 'Lorem ipsum 1',
      body: \`Lorem ipsum dolor sit amet.\`,
      expanded: true
    }, {
      label: 'Lorem ipsum 2',
      body: \`Lorem ipsum dolor sit amet.\`,
      expanded: false
    }, {
      label: 'Lorem ipsum 3',
      body: \`Lorem ipsum dolor sit amet.\`,
      expanded: false
    }])
  }
} as StoryObj<typeof meta>`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,p as default};
