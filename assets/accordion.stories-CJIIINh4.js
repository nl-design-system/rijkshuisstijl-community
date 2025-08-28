import{J as c}from"./index-qu3W0EgE.js";import{r as d}from"./README-DTmsIE8e.js";import{r as p}from"./index-BJzegUt9.js";import{m as l}from"./merge-markdown-DQEtknEV.js";import"./_commonjsHelpers-D6-XlEtG.js";c.define();const u=({appearance:a,icon:o,sections:i,heading:m,headingLevel:t})=>p.createElement("rhc-accordion",{appearance:a,icon:o==null?void 0:o.toString(),sections:JSON.stringify(i),heading:m,headingLevel:t==null?void 0:t.toString()}),L={title:"Web Components/Accordion",id:"rhc-accordion-web",component:u,argTypes:{appearance:{description:"Appearance of the component",type:{name:"string"},control:{type:"select"},options:["default","utrecht"]},heading:{type:{name:"string"},control:"text",description:"Heading for the accordion, also needs a headingLevel"},headingLevel:{name:"Heading Level",type:{name:"string"},control:"select",options:[1,2,3,4,5,6],description:"Heading level for the accordion, also needs a heading text"},icon:{name:"icon",description:"Icon at the start",control:{type:"select"},options:["default","delta-omlaag"],mapping:{default:""}},sections:{control:"object",description:"Array of sections in the accordion"}},args:{icon:"default",heading:"",headingLevel:0},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-accordion",status:{type:"STABLE"},docs:{description:{component:l([d])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/Accordion.tsx"}},e={args:{sections:[{label:"Lorem ipsum 1",body:"Lorem ipsum dolor sit amet.",expanded:!0},{label:"Lorem ipsum 2",body:"Lorem ipsum dolor sit amet.",expanded:!1},{label:"Lorem ipsum 3",body:"Lorem ipsum dolor sit amet.",expanded:!1}]}};var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    sections: [{
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
    }]
  }
} as StoryObj<typeof meta>`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,L as default};
