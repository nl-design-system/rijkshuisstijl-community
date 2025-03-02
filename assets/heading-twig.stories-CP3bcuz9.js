import{t as O,D as e,a as R,T as I}from"./twig-BOpWXVLx.js";import{e as M}from"./index-raSRI-5R.js";import{m as B}from"./merge-markdown-BBBI8PmH.js";import{r as q}from"./heading-BhZlH--z.js";import"./_commonjsHelpers-BosuxZz1.js";R(I);I.cache(!1);const d=i=>M.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),z=(i={})=>{const c=O.twig({id:"/home/runner/work/rijkshuisstijl-community/rijkshuisstijl-community/packages/components-twig/src/Heading.twig",data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"level",match:["level"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:0,end:25},output:[{type:"logic",token:{type:"Twig.logic.type.set",key:"level",expression:[{type:"Twig.expression.type.number",value:1,match:["1",null]}],position:{start:26,end:47}},position:{start:26,end:47}}]},position:{open:{start:0,end:25},close:{start:48,end:61}}},{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"nl-heading"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:62,end:98}},position:{start:62,end:98}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"appearance",match:["appearance"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:99,end:133},output:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.filter",value:"merge",match:["|merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"nl-heading--level-"},{type:"Twig.expression.type.variable",value:"appearance",match:["appearance"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:134,end:206}},position:{start:134,end:206}}]},position:{open:{start:99,end:133},close:{start:207,end:219}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:207,end:219},output:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.filter",value:"merge",match:["|merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"nl-heading--level-"},{type:"Twig.expression.type.variable",value:"level",match:["level"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:220,end:287}},position:{start:220,end:287}}]},position:{open:{start:207,end:219},close:{start:288,end:301}}},{type:"raw",value:"<h",position:{start:302,end:304}},{type:"output",position:{start:304,end:315},stack:[{type:"Twig.expression.type.variable",value:"level",match:["level"],position:{start:304,end:315}}]},{type:"output",position:{start:315,end:349},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:315,end:349}},{type:"Twig.expression.type.key.period",position:{start:315,end:349},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:315,end:349},expression:!0,params:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"],position:{start:315,end:349}}]}]},{type:"raw",value:">",position:{start:349,end:350}},{type:"output",position:{start:350,end:364},stack:[{type:"Twig.expression.type.variable",value:"children",match:["children"],position:{start:350,end:364}}]},{type:"raw",value:"</h",position:{start:364,end:367}},{type:"output",position:{start:367,end:378},stack:[{type:"Twig.expression.type.variable",value:"level",match:["level"],position:{start:367,end:378}}]},{type:"raw",value:`>
`,position:{start:378,end:378}}],precompiled:!0});c.options.allowInlineIncludes=!0;try{let t=i.defaultAttributes?i.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),d(c.render({attributes:new e(t),...i}))}catch(t){return d("An error occurred whilst rendering /home/runner/work/rijkshuisstijl-community/rijkshuisstijl-community/packages/components-twig/src/Heading.twig: "+t.toString())}};/* @license CC0-1.0 */const P={title:"Twig Components/Heading",id:"rhc-twig-heading",component:z,argTypes:{level:{description:"Heading level",control:{type:"select"},options:[1,2,3,4,5]},appearance:{description:"Appearance",control:{type:"select"},options:[void 0,"level-1","level-2","level-3","level-4","level-5","level-6"]}},parameters:{status:{type:"STABLE"},docs:{description:{component:B([q])}},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},s={args:{level:1,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 1"},a={args:{level:2,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 2"},r={args:{level:3,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 3"},n={args:{level:4,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 4"},o={args:{level:5,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 5"},p={args:{level:6,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 6"},l={args:{level:1,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",appearance:5,attributes:new e},name:"Heading 5 (in appearance)"};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute()
  },
  name: 'Heading 1'
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,w,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute()
  },
  name: 'Heading 2'
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var T,h,b;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute()
  },
  name: 'Heading 3'
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,H,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute()
  },
  name: 'Heading 4'
}`,...(k=(H=n.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var f,A,L;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute()
  },
  name: 'Heading 5'
}`,...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var j,D,S;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    level: 6,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute()
  },
  name: 'Heading 6'
}`,...(S=(D=p.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var E,_,C;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    appearance: 5,
    attributes: new DrupalAttribute()
  },
  name: 'Heading 5 (in appearance)'
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const Q=["TwigHeading1","TwigHeading2","TwigHeading3","TwigHeading4","TwigHeading5","TwigHeading6","TwigHeading5Appearance"];export{s as TwigHeading1,a as TwigHeading2,r as TwigHeading3,n as TwigHeading4,o as TwigHeading5,l as TwigHeading5Appearance,p as TwigHeading6,Q as __namedExportsOrder,P as default};
