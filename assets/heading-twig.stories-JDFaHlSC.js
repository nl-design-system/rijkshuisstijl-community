import{c as S}from"./TwigRenderer-BgRtXhm_.js";import{m as k}from"./merge-markdown-BtgmYwh_.js";import{r as _}from"./heading-BhZlH--z.js";import"./jsx-runtime-D_zvdyIk.js";import"./twig-CNzy8fQX.js";import"./_commonjsHelpers-C932wzq6.js";const C=`{% from "attributes.twig" import parse_attributes %}
{%- set attributes = attributes|default({'class': []})|merge({
  'class': attributes.class|default([]),
}) -%}
{%- if appearance is not empty -%}
  {% set attributes = attributes|merge({'appearance': appearance}) %}
{%- endif -%}
{%- if level is empty -%}
  {% set level = 1 %}
{%- endif -%}
<h{{ level }}{{ parse_attributes(attributes) }}>{{ children }}</h{{ level }}>
`;/* @license CC0-1.0 */const j=S(C),M={title:"Twig Components/Heading",id:"rhc-twig-heading",component:j,argTypes:{level:{description:"Heading level",control:{type:"select"},options:[1,2,3,4,5]},appearance:{description:"Appearance",control:{type:"select"},options:[void 0,"level-1","level-2","level-3","level-4","level-5","level-6"]}},parameters:{status:{type:"STABLE"},docs:{description:{component:k([_])}},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},e={args:{level:1,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",attributes:{class:["my-heading-1"]},appearance:"utrecht-heading-3"},name:"Heading 1"},i={args:{level:2,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 2"},s={args:{level:3,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 3"},a={args:{level:4,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 4"},r={args:{level:5,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 5"},n={args:{level:6,children:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},name:"Heading 6"};var t,o,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: {
      class: ['my-heading-1']
    },
    appearance: 'utrecht-heading-3'
  },
  name: 'Heading 1'
}`,...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,m,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 2'
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,p,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 3'
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var H,v,h;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 4'
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var w,T,L;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 5'
}`,...(L=(T=r.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var b,f,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    level: 6,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  },
  name: 'Heading 6'
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const R=["TwigHeading1","TwigHeading2","TwigHeading3","TwigHeading4","TwigHeading5","TwigHeading6"];export{e as TwigHeading1,i as TwigHeading2,s as TwigHeading3,a as TwigHeading4,r as TwigHeading5,n as TwigHeading6,R as __namedExportsOrder,M as default};
