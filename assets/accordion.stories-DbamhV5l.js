import{y as d}from"./index-BjGOF3FY.js";import{r as c}from"./README-DTmsIE8e.js";import{r as p}from"./index-DeTAkU8q.js";import{m as l}from"./merge-markdown-566X0PcZ.js";import"./_commonjsHelpers-D6-XlEtG.js";d.define();const u=({appearance:s,icon:o,sections:i,heading:m,headingLevel:t})=>p.createElement("rhc-accordion",{appearance:s,icon:o==null?void 0:o.toString(),sections:JSON.stringify(i),heading:m,headingLevel:t==null?void 0:t.toString()}),L={title:"Web Components/Accordion",id:"rhc-accordion-web",component:u,argTypes:{appearance:{description:"Appearance of the component",type:{name:"string"},control:{type:"select"},options:["default","utrecht"]},heading:{type:{name:"string"},control:"text",description:"Heading for the accordion, also needs a headingLevel"},headingLevel:{name:"Heading Level",type:{name:"string"},control:"select",options:[1,2,3,4,5,6],description:"Heading level for the accordion, also needs a heading text"},icon:{name:"icon",description:"Icon at the start",control:{type:"select"},options:["default","delta-omlaag"],mapping:{default:""}},sections:{control:"object",description:"Array of sections in the accordion"}},args:{icon:"default",heading:"",headingLevel:0},tags:["autodocs"],parameters:{tokensPrefix:"utrecht-accordion",status:{type:"STABLE"},docs:{description:{component:l([c])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community."}},e={args:{sections:[{label:"Lorem ipsum 1",body:"Lorem ipsum dolor sit amet.",expanded:!0},{label:"Lorem ipsum 2",body:"Lorem ipsum dolor sit amet.",expanded:!1},{label:"Lorem ipsum 3",body:"Lorem ipsum dolor sit amet.",expanded:!1}]}};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
} as StoryObj<typeof meta>`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,L as default};
