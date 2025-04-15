import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{K as S,q as s,n as d,I as P,z as l}from"./index.esm-BD7UEvQU.js";import{m as x}from"./merge-markdown-566X0PcZ.js";import"./index-F0AouRE7.js";import"./_commonjsHelpers-D6-XlEtG.js";const z=`# Rijkshuisstijl Community Footer component

De footer bestaat uit kolommen met als eerste de titel en daarna \`LinkList\` componenten met handige bronnen.

De kolommen lijsten kunnen worden toegevoegd door middel van properties aan het \`<Footer>\` component.

## level

De heading kolom is de titel level +1, omdat deze een subsectie vormt van de titel. Hierdoor staan de kolomtitels altijd één niveau hoger dan de titel. Echter, wanneer de heading niveau 6 bereikt, wordt er geen niveau 7 gebruikt. In dat geval blijven zowel de titel als de kolommen op niveau 6.

### Belangrijkste punten

De heading kolom heeft altijd een niveau meer dan de titel.
Dit geldt voor alle niveaus behalve niveau 6.
Bij niveau 6 worden zowel de titel als de kolommen op niveau 6 gehouden.
Er bestaat geen niveau 7 heading in HTML.

\`\`\`tsx
columns={[
    {
      children: <LinkList><LinkListLink href="#" icon={<UtrechtIconChevronRight />}>Contact</LinkListLink> etc...</LinkList>,
      heading: 'Service'
    }
  ]}
  heading="Footer heading"
\`\`\`
`,M={title:"Rijkshuisstijl/Footer",id:"rhc-footer",component:S,parameters:{status:{type:"UNSTABLE"},docs:{description:{component:x([z])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam PageFooter), met HTML aanpassingen en styling van de Rijkshuisstijl Community."},argTypes:{appearanceLevel:{description:"Het uiterlijk van de heading in de footer.",defaultValue:3,control:{type:"select"},options:[1,2,3,4,5,6],table:{type:{summary:"number"}}},background:{description:"De achtergrondkleur van de footer.",control:{type:"select"},options:["primary-filled","primary-outlined"],table:{type:{summary:"string"}}},backtotop:{description:'Toon de "Terug naar boven" knop.',control:{type:"boolean"},table:{type:{summary:"boolean"}}},preFooter:{description:"Het balkje die boven de footer wordt getoond.",control:{type:"boolean"},table:{type:{summary:"boolean"}}},preFooterMessage:{description:"De tekst die in het balkje boven de footer wordt getoond.",defaultValue:"",control:{type:"text"},if:{arg:"preFooter",eq:!0},table:{type:{summary:"string"}}}}};function n(O){return e.jsx(s,{children:O.map(w=>e.jsx(d,{href:"#",icon:e.jsx(P,{icon:"chevron-right"}),children:w}))})}const i={args:{heading:"Footer heading",appearanceLevel:3,background:"primary-filled",backtotop:!0,preFooter:!1,subFooter:e.jsx(s,{children:e.jsx(d,{href:"#",children:"Privacy"})}),columns:[{heading:"Service",appearanceLevel:3,children:n(["Contact","Abonneren","RSS","Vacatures","Sitemap","Help","Archief"])},{heading:"Over deze site",appearanceLevel:3,children:n(["Over deze organisatie","Wetten en regelingen","Copyright","Privacy","Cookies","Toegankelijkheid","Open data","Kwetsbaarheid melden"])}]}},t={args:{heading:"Footer heading",appearanceLevel:3,background:"primary-outlined",preFooterMessage:"",preFooter:!0,children:e.jsx(l,{children:n(["Over deze organisatie","Wetten en regelingen","Copyright","Privacy","Cookies","Toegankelijkheid","Open data","Kwetsbaarheid melden"])})}},r={args:{heading:"Footer heading",appearanceLevel:3,background:"primary-outlined",preFooterMessage:"Kwaliteit, vertrouwen en duurzaamheid",preFooter:!0,subFooter:e.jsx(s,{className:"rhc-subfooter-details",children:e.jsx(d,{href:"#",children:"Privacy"})}),children:e.jsx(l,{children:n(["Over deze organisatie","Wetten en regelingen","Copyright","Privacy","Cookies","Toegankelijkheid","Open data","Kwetsbaarheid melden"])})}},a={args:{heading:"Footer heading",appearanceLevel:3,background:"primary-filled",children:e.jsx(l,{children:n(["Over deze organisatie","Wetten en regelingen","Copyright","Privacy","Cookies","Toegankelijkheid","Open data","Kwetsbaarheid melden"])})}},o={args:{background:"primary-filled",columns:[{heading:"First heading",appearanceLevel:3,children:n(["List item 1","List item 2","List item 3"])},{heading:"Second heading",appearanceLevel:3,children:n(["List item 1","List item 2","List item 3"])},{heading:"Third heading",appearanceLevel:3,children:n(["List item 1","List item 2","List item 3"])},{heading:"Fourth heading",appearanceLevel:3,children:n(["List item 1","List item 2","List item 3"])}]}};var c,p,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    heading: 'Footer heading',
    appearanceLevel: 3,
    background: 'primary-filled',
    backtotop: true,
    preFooter: false,
    subFooter: <LinkList>
        <LinkListLink href="#">Privacy</LinkListLink>
      </LinkList>,
    columns: [{
      heading: 'Service',
      appearanceLevel: 3,
      children: _toLinkList(['Contact', 'Abonneren', 'RSS', 'Vacatures', 'Sitemap', 'Help', 'Archief'])
    }, {
      heading: 'Over deze site',
      appearanceLevel: 3,
      children: _toLinkList(['Over deze organisatie', 'Wetten en regelingen', 'Copyright', 'Privacy', 'Cookies', 'Toegankelijkheid', 'Open data', 'Kwetsbaarheid melden'])
    }]
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    heading: 'Footer heading',
    appearanceLevel: 3,
    background: 'primary-outlined',
    preFooterMessage: '',
    preFooter: true,
    children: <ColumnLayout>
        {_toLinkList(['Over deze organisatie', 'Wetten en regelingen', 'Copyright', 'Privacy', 'Cookies', 'Toegankelijkheid', 'Open data', 'Kwetsbaarheid melden'])}
      </ColumnLayout>
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var L,k,v;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    heading: 'Footer heading',
    appearanceLevel: 3,
    background: 'primary-outlined',
    preFooterMessage: 'Kwaliteit, vertrouwen en duurzaamheid',
    preFooter: true,
    subFooter: <LinkList className="rhc-subfooter-details">
        <LinkListLink href="#">Privacy</LinkListLink>
      </LinkList>,
    children: <ColumnLayout>
        {_toLinkList(['Over deze organisatie', 'Wetten en regelingen', 'Copyright', 'Privacy', 'Cookies', 'Toegankelijkheid', 'Open data', 'Kwetsbaarheid melden'])}
      </ColumnLayout>
  }
}`,...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var y,b,F;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    heading: 'Footer heading',
    appearanceLevel: 3,
    background: 'primary-filled',
    children: <ColumnLayout>
        {_toLinkList(['Over deze organisatie', 'Wetten en regelingen', 'Copyright', 'Privacy', 'Cookies', 'Toegankelijkheid', 'Open data', 'Kwetsbaarheid melden'])}
      </ColumnLayout>
  }
}`,...(F=(b=a.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var f,j,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    background: 'primary-filled',
    columns: [{
      heading: 'First heading',
      appearanceLevel: 3,
      children: _toLinkList(['List item 1', 'List item 2', 'List item 3'])
    }, {
      heading: 'Second heading',
      appearanceLevel: 3,
      children: _toLinkList(['List item 1', 'List item 2', 'List item 3'])
    }, {
      heading: 'Third heading',
      appearanceLevel: 3,
      children: _toLinkList(['List item 1', 'List item 2', 'List item 3'])
    }, {
      heading: 'Fourth heading',
      appearanceLevel: 3,
      children: _toLinkList(['List item 1', 'List item 2', 'List item 3'])
    }]
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const W=["DefaultFooter","PrimaryOutlinedFooter","PrimaryOutlinedFooterSubFooter","ColumnLayoutFooter","CustomHeadingFooter"];export{a as ColumnLayoutFooter,o as CustomHeadingFooter,i as DefaultFooter,t as PrimaryOutlinedFooter,r as PrimaryOutlinedFooterSubFooter,W as __namedExportsOrder,M as default};
