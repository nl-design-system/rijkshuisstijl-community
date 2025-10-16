import{t as R,D as e,a as C,T as O}from"./twig-g-qzNykG.js";import{e as M}from"./iframe-DlkZjL_t.js";import{m as B}from"./mergeMarkdown-wst0O_Fj.js";import{r as q}from"./heading-CC03DnXs.js";import"./preload-helper-Dp1pzeXC.js";C(O);O.cache(!1);const d=i=>M.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),z=(i={})=>{const c=R.twig({id:"/home/runner/work/rijkshuisstijl-community/rijkshuisstijl-community/packages/components-twig/src/Heading.twig",data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"level",match:["level"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:0,end:25},output:[{type:"logic",token:{type:"Twig.logic.type.set",key:"level",expression:[{type:"Twig.expression.type.number",value:1,match:["1",null]}],position:{start:26,end:47}},position:{start:26,end:47}}]},position:{open:{start:0,end:25},close:{start:48,end:61}}},{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"nl-heading"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"rhc-heading"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:62,end:113}},position:{start:62,end:113}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"appearance",match:["appearance"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:114,end:148},output:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.filter",value:"merge",match:["|merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"nl-heading--level-"},{type:"Twig.expression.type.variable",value:"appearance",match:["appearance"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:149,end:221}},position:{start:149,end:221}}]},position:{open:{start:114,end:148},close:{start:222,end:234}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:222,end:234},output:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.filter",value:"merge",match:["|merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"nl-heading--level-"},{type:"Twig.expression.type.variable",value:"level",match:["level"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:235,end:302}},position:{start:235,end:302}}]},position:{open:{start:222,end:234},close:{start:303,end:316}}},{type:"raw",value:"<h",position:{start:317,end:319}},{type:"output",position:{start:319,end:330},stack:[{type:"Twig.expression.type.variable",value:"level",match:["level"],position:{start:319,end:330}}]},{type:"output",position:{start:330,end:364},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:330,end:364}},{type:"Twig.expression.type.key.period",position:{start:330,end:364},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:330,end:364},expression:!0,params:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"],position:{start:330,end:364}}]}]},{type:"raw",value:">",position:{start:364,end:365}},{type:"output",position:{start:365,end:379},stack:[{type:"Twig.expression.type.variable",value:"children",match:["children"],position:{start:365,end:379}}]},{type:"raw",value:"</h",position:{start:379,end:382}},{type:"output",position:{start:382,end:393},stack:[{type:"Twig.expression.type.variable",value:"level",match:["level"],position:{start:382,end:393}}]},{type:"raw",value:`>
`,position:{start:393,end:393}}],precompiled:!0});c.options.allowInlineIncludes=!0;try{let t=i.defaultAttributes?i.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),d(c.render({attributes:new e(t),...i}))}catch(t){return d("An error occurred whilst rendering /home/runner/work/rijkshuisstijl-community/rijkshuisstijl-community/packages/components-twig/src/Heading.twig: "+t.toString())}};/* @license CC0-1.0 */const P={title:"Heading",id:"rhc-twig-heading",component:z,argTypes:{level:{description:"Heading level",control:{type:"select"},options:[1,2,3,4,5]},appearance:{description:"Appearance",control:{type:"select"},options:[void 0,"level-1","level-2","level-3","level-4","level-5","level-6"]}},parameters:{status:{type:"STABLE"},docs:{description:{component:B([q])}},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Heading.twig"}},s={args:{level:1,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 1"},a={args:{level:2,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 2"},r={args:{level:3,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 3"},n={args:{level:4,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 4"},o={args:{level:5,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 5"},p={args:{level:6,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:new e},name:"Heading 6"},l={args:{level:1,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",appearance:5,attributes:new e},name:"Heading 5 (in appearance)"};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute()
  },
  name: 'Heading 1'
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,w,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute()
  },
  name: 'Heading 2'
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var h,T,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute()
  },
  name: 'Heading 3'
}`,...(b=(T=r.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var x,H,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(D=p.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var E,_,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    appearance: 5,
    attributes: new DrupalAttribute()
  },
  name: 'Heading 5 (in appearance)'
}`,...(I=(_=l.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const Q=["TwigHeading1","TwigHeading2","TwigHeading3","TwigHeading4","TwigHeading5","TwigHeading6","TwigHeading5Appearance"];export{s as TwigHeading1,a as TwigHeading2,r as TwigHeading3,n as TwigHeading4,o as TwigHeading5,l as TwigHeading5Appearance,p as TwigHeading6,Q as __namedExportsOrder,P as default};
