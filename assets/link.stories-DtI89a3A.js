import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{W as d,I as R,P as B}from"./index.esm-Depn5b2h.js";import{r as C,i as E,u as G,a as K,v as M,c as q,b as Q,t as U,p as X,f as Y,d as Z,e as J,g as $,h as ee,j as ne,k as re,w as ae}from"./wcag.nl-DO89JAHl.js";import{r as se,m as oe}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const te=`# Icon en inline

Standaard ondersteunt de link een icoon links of rechts van de tekst - zie voorbeelden 'Icon Left' en 'Icon Right'.

Om het icoon goed uit te lijnen is een \`display: inline-flex\` instelling nodig, die weer niet goed werkt als de link in lopende tekst (een paragraaf) wordt gebruikt. Zodoende wordt helaas het gebruik van een icoon in een link in lopende tekst _niet_ ondersteund.

## Niet

Link in een lopende tekst _met_ icoon

\`\`\`jsx
<Paragraph>
  Het was in het voorjaar 1345, dat ...
  <Link inline href="ekstern.com">
    ekstern <Icon icon="external" />
  </Link>
  ...Onder die steden, welke vanouds aan de grafelijke kroon...
</Paragraph>
\`\`\`

## Wel

Link in een lopende tekst zonder icoon

\`\`\`jsx
<Paragraph>
  Het was in het voorjaar 1345, dat ...
  <Link inline href="ekstern.com">
    ekstern
  </Link>
  ...Onder die steden, welke vanouds aan de grafelijke kroon...
</Paragraph>
\`\`\`

Losse link

\`\`\`jsx
<Link inline href="ekstern.com">
  ekstern <Icon icon="external" />
</Link>
\`\`\`
`,he={title:"Link",id:"rhc-link",component:d,argTypes:{href:{description:"Waar de link naartoe leidt",type:{name:"string",required:!0}},children:{description:"Klikbaar deel van de link, dus een tekst of afbeelding",type:{name:"string",required:!0},defaultValue:""},className:{description:"Eigen classnames om toe te voegen aan de standaard-classnames van het component",type:"string"},inline:{description:"Of de link onderdeel uitmaakt van lopende tekst",type:"boolean",defaultValue:!1}},args:{children:""},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:se(oe([C,E,G,K,M,q,Q,U,X,Y,Z,J,$,ee,ne,re,ae,te]),"utrecht","rhc",!0).replace("utrecht","rhc")}},figma:"https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/-WIP--NL-Design-System---Bibliotheek?node-id=197-664&p=f&t=nB0V3gAhWfpilaKv-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Link.tsx",nldesignsystem:"https://nldesignsystem.nl/link",componentOrigin:"Dit component is overgenomen van het NL Design System, met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},n={args:{href:"#",children:"Label"}},r={args:{href:"#",children:[e.jsx(R,{icon:"kalender"}),"Nieuwe afspraak"]},argTypes:{children:{control:!1}}},a={args:{href:"#",children:["Verder",e.jsx(R,{icon:"pijl-naar-rechts"})]},argTypes:{children:{control:!1}}},s={parameters:{pseudo:{active:!0}},args:{href:"#",children:"Label"}},o={parameters:{pseudo:{hover:!0}},args:{href:"#",children:"Label"}},t={parameters:{pseudo:{focus:!0}},args:{href:"#",children:"Label"}},i={parameters:{},args:{href:"#",children:"Label",className:"nl-link--focus-visible"}},c={parameters:{pseudo:{visited:!0}},args:{href:"https://example.com/",children:"Label"}},l={args:{href:"https://example.com/"},render({href:p}){return e.jsxs(B,{style:{width:"423px"},children:["Het was in het voorjaar 1345, dat een talrijk aantal van naburen en vreemdelingen naar Haarlem was toegestroomd, ter bijwoning van een plechtig feest, hetwelk binnen zijn muren door Graaf Willem den Vierden stond gegeven te worden. In deze paragraaf staat een"," ",e.jsx(d,{inline:!0,href:p,children:"link naar een voorbeeldsite"})," ","en nog een"," ",e.jsx(d,{inline:!0,href:p,children:"link zonder icoon"}),". Onder die steden, welke vanouds aan de grafelijke kroon van Holland gelijk zoovele edelgesteenten flonkerden, en wier macht en rijkdom tot een hechten steun verstrekten aan des Landsheer gezag, was Haarlem, gelijk genoeg bekend is, een der voornaamste."]})}};var m,g,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Label'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,k,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: [<Icon icon="kalender" />, 'Nieuwe afspraak']
  },
  argTypes: {
    children: {
      control: false
    }
  }
}`,...(f=(k=r.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var v,L,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: ['Verder', <Icon icon="pijl-naar-rechts" />]
  },
  argTypes: {
    children: {
      control: false
    }
  }
}`,...(b=(L=a.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var j,w,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    href: '#',
    children: 'Label'
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var x,D,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    href: '#',
    children: 'Label'
  }
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var H,S,z;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    href: '#',
    children: 'Label'
  }
}`,...(z=(S=t.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var N,P,V;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {},
  args: {
    href: '#',
    children: 'Label',
    className: 'nl-link--focus-visible'
  }
}`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var O,T,W;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      visited: true
    }
  },
  args: {
    href: 'https://example.com/',
    children: 'Label'
  }
}`,...(W=(T=c.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var _,A,F;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com/'
  },
  render({
    href
  }) {
    return <Paragraph style={{
      width: '423px'
    }}>
        Het was in het voorjaar 1345, dat een talrijk aantal van naburen en vreemdelingen naar Haarlem was toegestroomd,
        ter bijwoning van een plechtig feest, hetwelk binnen zijn muren door Graaf Willem den Vierden stond gegeven te
        worden. In deze paragraaf staat een{' '}
        <Link inline href={href}>
          link naar een voorbeeldsite
        </Link>{' '}
        en nog een{' '}
        <Link inline href={href}>
          link zonder icoon
        </Link>
        . Onder die steden, welke vanouds aan de grafelijke kroon van Holland gelijk zoovele edelgesteenten flonkerden,
        en wier macht en rijkdom tot een hechten steun verstrekten aan des Landsheer gezag, was Haarlem, gelijk genoeg
        bekend is, een der voornaamste.
      </Paragraph>;
  }
}`,...(F=(A=l.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const ue=["Default","IconLeft","IconRight","Active","Hover","Focus","FocusVisible","Visited","LinkInParagraph"];export{s as Active,n as Default,t as Focus,i as FocusVisible,o as Hover,r as IconLeft,a as IconRight,l as LinkInParagraph,c as Visited,ue as __namedExportsOrder,he as default};
