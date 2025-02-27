import{t as E,D,a as _,T as S}from"./twig-BOpWXVLx.js";import{e as I}from"./index-BBVzVmym.js";import{m as O}from"./merge-markdown-BBBI8PmH.js";import{r as C}from"./heading-BhZlH--z.js";import"./_commonjsHelpers-BosuxZz1.js";_(S);S.cache(!1);const d=t=>I.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),M=(t={})=>{const p=E.twig({id:"/home/runner/work/rijkshuisstijl-community/rijkshuisstijl-community/packages/components-twig/src/Heading.twig",data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"appearance",match:["appearance"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:0,end:34},output:[{type:"raw",value:"",position:{start:35,end:37}},{type:"logic",token:{type:"Twig.logic.type.set",key:"attributes",expression:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"]},{type:"Twig.expression.type.filter",value:"merge",match:["|merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"appearance"},{type:"Twig.expression.type.variable",value:"appearance",match:["appearance"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:37,end:104}},position:{start:37,end:104}}]},position:{open:{start:0,end:34},close:{start:105,end:118}}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"level",match:["level"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:119,end:144},output:[{type:"raw",value:"",position:{start:145,end:147}},{type:"logic",token:{type:"Twig.logic.type.set",key:"level",expression:[{type:"Twig.expression.type.number",value:1,match:["1",null]}],position:{start:147,end:166}},position:{start:147,end:166}}]},position:{open:{start:119,end:144},close:{start:167,end:180}}},{type:"raw",value:"<h",position:{start:181,end:183}},{type:"output",position:{start:183,end:194},stack:[{type:"Twig.expression.type.variable",value:"level",match:["level"],position:{start:183,end:194}}]},{type:"output",position:{start:194,end:210},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:194,end:210}}]},{type:"raw",value:">",position:{start:210,end:211}},{type:"output",position:{start:211,end:225},stack:[{type:"Twig.expression.type.variable",value:"children",match:["children"],position:{start:211,end:225}}]},{type:"raw",value:"</h",position:{start:225,end:228}},{type:"output",position:{start:228,end:239},stack:[{type:"Twig.expression.type.variable",value:"level",match:["level"],position:{start:228,end:239}}]},{type:"raw",value:`>
`,position:{start:239,end:239}}],precompiled:!0});p.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),d(p.render({attributes:new D(e),...t}))}catch(e){return d("An error occurred whilst rendering /home/runner/work/rijkshuisstijl-community/rijkshuisstijl-community/packages/components-twig/src/Heading.twig: "+e.toString())}};/* @license CC0-1.0 */const G={title:"Twig Components/Heading",id:"rhc-twig-heading",component:M,argTypes:{level:{description:"Heading level",control:{type:"select"},options:[1,2,3,4,5]},appearance:{description:"Appearance",control:{type:"select"},options:[void 0,"level-1","level-2","level-3","level-4","level-5","level-6"]}},parameters:{status:{type:"STABLE"},docs:{description:{component:O([C])}},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},i={args:{level:1,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",defaultAttributes:{class:["my-heading-1"]},appearance:"utrecht-heading-3"},name:"Heading 1"},s={args:{level:2,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 2"},a={args:{level:3,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 3"},r={args:{level:4,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 4"},n={args:{level:5,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 5"},o={args:{level:6,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 6"};var c,l,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    defaultAttributes: {
      class: ['my-heading-1']
    },
    appearance: 'utrecht-heading-3'
  },
  name: 'Heading 1'
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,g,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 2'
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,w,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 3'
}`,...(h=(w=a.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var T,H,k;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 4'
}`,...(k=(H=r.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var b,f,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 5'
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var L,j,A;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    level: 6,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 6'
}`,...(A=(j=o.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const J=["TwigHeading1","TwigHeading2","TwigHeading3","TwigHeading4","TwigHeading5","TwigHeading6"];export{i as TwigHeading1,s as TwigHeading2,a as TwigHeading3,r as TwigHeading4,n as TwigHeading5,o as TwigHeading6,J as __namedExportsOrder,G as default};
