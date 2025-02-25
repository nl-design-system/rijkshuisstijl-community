import{c as r}from"./TwigRenderer-BgRtXhm_.js";import"./jsx-runtime-D_zvdyIk.js";import"./twig-CNzy8fQX.js";import"./_commonjsHelpers-C932wzq6.js";const m=`<!-- TODO: This is a dummy component created to setup support for nested Twig templates. It needs to be replaced with an official template -->
<ol>
  {% for item in items %}
    {% include 'OrderedListItem.twig' with {
      content: item
    } %}
  {% endfor %}
</ol>
`;/* @license CC0-1.0 */const s=r(m),c={title:"Twig Components/Ordered List",id:"rhc-twig-ordered-list",component:s,parameters:{status:{type:"UNSTABLE"},componentOrigin:"Dit is een dummy component voor het toevoegen van support van nested Twig templates. Dit moet vervangen worden door het officiele component."}},e={args:{items:["Item 1","Item 2","Item 3"]},name:"Default"};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    items: ['Item 1', 'Item 2', 'Item 3']
  },
  name: 'Default'
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,c as default};
