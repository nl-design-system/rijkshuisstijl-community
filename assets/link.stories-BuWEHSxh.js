import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as p,I as q,P as B}from"./index.esm-DHClOm0h.js";import{r as M,i as O,u as U,a as z,v as W,c as _,b as K,t as X,p as J,f as Q,d as Y,e as Z,g as $,h as ee,j as re,k as ae,w as se}from"./wcag.nl-DO89JAHl.js";import{m as ne}from"./merge-markdown-566X0PcZ.js";import{I as te}from"./IconCalendarEvent-BKe3pAeK.js";import"./index-DeTAkU8q.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./createReactComponent-I5Fczs9E.js";const he={title:"Rijkshuisstijl/Link",id:"rhc-link",component:p,argTypes:{href:{description:"Url to link to",type:{name:"string",required:!0},table:{category:"Property"}},external:{description:"Whether the link is external",type:{name:"boolean"},table:{category:"Property"}},externalLabel:{description:"SR only label for external link icon",type:{name:"string"},table:{category:"Property"}},children:{description:"Link text - default webcomponent slot",type:{name:"string",required:!0},table:{category:"Webcomponent Slot"},defaultValue:""}},args:{children:""},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:ne([M,O,U,z,W,_,K,X,J,Q,Y,Z,$,ee,re,ae,se])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=153-1056&p=f&t=Vqau7APnb0CBKrLh-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Link.tsx",nldesignsystem:"https://nldesignsystem.nl/link",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community."},render:p},r={args:{href:"#",children:"Label"}},a={args:{href:"#",children:[e.jsx(te,{}),"Label"]}},s={args:{href:"#",children:["Label",e.jsx(q,{icon:"pijl-naar-rechts"})]}},n={args:{href:"#",children:"Label",external:!0,externalLabel:"example external label"}},t={parameters:{pseudo:{active:!0}},args:{href:"#",children:"Label"}},o={parameters:{pseudo:{focus:!0}},args:{href:"#",children:"Label"}},c={parameters:{},args:{href:"#",children:"Label",className:"utrecht-link--focus-visible nl-link--focus-visible"}},i={parameters:{pseudo:{visited:!0}},args:{href:"https://example.com/",children:"Label"}},l={args:{href:"https://example.com/"},render({href:m}){return e.jsxs(B,{children:["In deze paragraaf staat een ",e.jsx(p,{href:m,children:"link naar een voorbeeldsite"})," en"," ",e.jsxs(p,{href:m,children:[e.jsx(q,{icon:"pijl-naar-rechts"}),"link met een icoon"]}),"."]})}};var d,u,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Label'
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: [<IconCalendarEvent />, 'Label']
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var L,k,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: ['Label', <Icon icon={'pijl-naar-rechts'} />]
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var y,j,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Label',
    external: true,
    externalLabel: 'example external label'
  }
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var D,I,S;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    href: '#',
    children: 'Label'
  }
}`,...(S=(I=t.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var P,F,R;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    href: '#',
    children: 'Label'
  }
}`,...(R=(F=o.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var w,C,E;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {},
  args: {
    href: '#',
    children: 'Label',
    className: 'utrecht-link--focus-visible nl-link--focus-visible'
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var N,V,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      visited: true
    }
  },
  args: {
    href: 'https://example.com/',
    children: 'Label'
  }
}`,...(A=(V=i.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var G,H,T;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com/'
  },
  render({
    href
  }) {
    return <Paragraph>
        In deze paragraaf staat een <Link href={href}>link naar een voorbeeldsite</Link> en{' '}
        <Link href={href}>
          <Icon icon={'pijl-naar-rechts'} />
          link met een icoon
        </Link>
        .
      </Paragraph>;
  }
}`,...(T=(H=l.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const ge=["Default","IconLeft","IconRight","External","Active","Focus","FocusVisible","Visited","LinkInParagraph"];export{t as Active,r as Default,n as External,o as Focus,c as FocusVisible,a as IconLeft,s as IconRight,l as LinkInParagraph,i as Visited,ge as __namedExportsOrder,he as default};
