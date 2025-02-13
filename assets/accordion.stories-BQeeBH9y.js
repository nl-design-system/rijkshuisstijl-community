import{c as m}from"./index-DKO8FEtt.js";import{r as c}from"./README-DTmsIE8e.js";import{r as p}from"./index-DAIO8Scy.js";import{m as l}from"./merge-markdown-BtgmYwh_.js";import"./_commonjsHelpers-C932wzq6.js";m.define();const u=({appearance:a,icon:o,sections:s,heading:i,headingLevel:d})=>p.createElement("rhc-accordion",{appearance:a,icon:o==null?void 0:o.toString(),sections:JSON.stringify(s),heading:i,headingLevel:d}),L={title:"Web Components/Accordion",id:"rhc-accordion-web",component:u,argTypes:{appearance:{description:"Appearance of the component",type:{name:"string"},control:{type:"select"},options:["default","utrecht"]},heading:{type:{name:"string"},control:"text",description:"Heading for the accordion, also needs a headingLevel"},headingLevel:{name:"Heading Level",type:{name:"string"},control:"select",options:[1,2,3,4,5,6],description:"Heading level for the accordion, also needs a heading text"},icon:{name:"icon",description:"Icon at the start",control:{type:"select"},options:["default","delta-omlaag"],mapping:{default:""}},sections:{control:"object",description:"Array of sections in the accordion"}},args:{icon:"default",heading:"",headinglevel:""},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-accordion",status:{type:"STABLE"},docs:{description:{component:l([c])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community."}},e={args:{sections:[{label:"Lorem ipsum 1",body:"Lorem ipsum dolor sit amet.",expanded:!0},{label:"Lorem ipsum 2",body:"Lorem ipsum dolor sit amet.",expanded:!1},{label:"Lorem ipsum 3",body:"Lorem ipsum dolor sit amet.",expanded:!1}]}};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
} as StoryObj<typeof meta>`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,L as default};
