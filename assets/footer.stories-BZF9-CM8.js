import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{m as x}from"./merge-markdown-DQEtknEV.js";import{F as w}from"./Footer-CRW2wpC7.js";import{P as s}from"./paragraph-BPMh_CvG.js";import{g as d,L as l,C as p}from"./index-Br7sdzbe.js";import{I as S}from"./Icon-DwW4mLi4.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";import"./Heading-CljAu67s.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./index-BJzegUt9.js";import"./IconCheck-BO4gZjWf.js";const T=`# Rijkshuisstijl Community Footer component

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
`,N={title:"Footer",id:"rhc-footer",component:w,parameters:{status:{type:"UNSTABLE"},docs:{description:{component:x([T])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Footer.tsx",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam PageFooter), met HTML aanpassingen en styling van de Rijkshuisstijl Community."},argTypes:{appearanceLevel:{description:"Het uiterlijk van de heading in de footer.",defaultValue:3,control:{type:"select"},options:[1,2,3,4,5,6],table:{type:{summary:"number"}}},background:{description:"De achtergrondkleur van de footer.",control:{type:"select"},options:["primary-filled","primary-outlined"],table:{type:{summary:"string"}}},backtotop:{description:'Toon de "Terug naar boven" knop.',control:{type:"boolean"},table:{type:{summary:"boolean"}}},preFooter:{description:"Het balkje die boven de footer wordt getoond.",control:{type:"boolean"},table:{type:{summary:"boolean"}}},preFooterMessage:{description:"De tekst die in het balkje boven de footer wordt getoond.",defaultValue:"",control:{type:"text"},if:{arg:"preFooter",eq:!0},table:{type:{summary:"string"}}}}};function a(O){return e.jsx(d,{children:O.map(z=>e.jsx(l,{href:"#",icon:e.jsx(S,{icon:"chevron-right"}),children:z}))})}const n={args:{heading:"Footer heading",appearanceLevel:3,background:"primary-filled",backtotop:!0,preFooter:!1,subFooter:e.jsx(d,{children:e.jsx(l,{href:"#",children:"Privacy"})}),columns:[{heading:"Service",appearanceLevel:3,children:a(["Contact","Abonneren","RSS","Vacatures","Sitemap","Help","Archief"])},{heading:"Over deze site",appearanceLevel:3,children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Een behulpzame paragraaf."}),a(["Over deze organisatie","Wetten en regelingen","Copyright","Privacy","Cookies","Toegankelijkheid","Open data","Kwetsbaarheid melden"])]})}]}},r={args:{heading:"Footer heading",appearanceLevel:3,background:"primary-outlined",preFooterMessage:"",preFooter:!0,children:e.jsxs(p,{children:[e.jsx(s,{children:"Een behulpzame paragraaf."}),a(["Over deze organisatie","Wetten en regelingen","Copyright","Privacy","Cookies","Toegankelijkheid","Open data","Kwetsbaarheid melden"])]})}},i={args:{heading:"Footer heading",appearanceLevel:3,background:"primary-outlined",preFooterMessage:"Kwaliteit, vertrouwen en duurzaamheid",preFooter:!0,subFooter:e.jsx(d,{className:"rhc-subfooter-details",children:e.jsx(l,{href:"#",children:"Privacy"})}),children:e.jsxs(p,{children:[e.jsx(s,{children:"Een behulpzame paragraaf."}),a(["Over deze organisatie","Wetten en regelingen","Copyright","Privacy","Cookies","Toegankelijkheid","Open data","Kwetsbaarheid melden"])]})}},t={args:{heading:"Footer heading",appearanceLevel:3,background:"primary-filled",children:e.jsxs(p,{children:[e.jsx(s,{children:"Een behulpzame paragraaf."}),a(["Over deze organisatie","Wetten en regelingen","Copyright","Privacy","Cookies","Toegankelijkheid","Open data","Kwetsbaarheid melden"])]})}},o={args:{background:"primary-filled",columns:[{heading:"First heading",appearanceLevel:3,children:a(["List item 1","List item 2","List item 3"])},{heading:"Second heading",appearanceLevel:3,children:a(["List item 1","List item 2","List item 3"])},{heading:"Third heading",appearanceLevel:3,children:a(["List item 1","List item 2","List item 3"])},{heading:"Fourth heading",appearanceLevel:3,children:a(["List item 1","List item 2","List item 3"])}]}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      children: <>
            <Paragraph>Een behulpzame paragraaf.</Paragraph>
            {_toLinkList(['Over deze organisatie', 'Wetten en regelingen', 'Copyright', 'Privacy', 'Cookies', 'Toegankelijkheid', 'Open data', 'Kwetsbaarheid melden'])}
          </>
    }]
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,u,L;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    heading: 'Footer heading',
    appearanceLevel: 3,
    background: 'primary-outlined',
    preFooterMessage: '',
    preFooter: true,
    children: <ColumnLayout>
        <Paragraph>Een behulpzame paragraaf.</Paragraph>
        {_toLinkList(['Over deze organisatie', 'Wetten en regelingen', 'Copyright', 'Privacy', 'Cookies', 'Toegankelijkheid', 'Open data', 'Kwetsbaarheid melden'])}
      </ColumnLayout>
  }
}`,...(L=(u=r.parameters)==null?void 0:u.docs)==null?void 0:L.source}}};var k,v,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        <Paragraph>Een behulpzame paragraaf.</Paragraph>
        {_toLinkList(['Over deze organisatie', 'Wetten en regelingen', 'Copyright', 'Privacy', 'Cookies', 'Toegankelijkheid', 'Open data', 'Kwetsbaarheid melden'])}
      </ColumnLayout>
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,F,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    heading: 'Footer heading',
    appearanceLevel: 3,
    background: 'primary-filled',
    children: <ColumnLayout>
        <Paragraph>Een behulpzame paragraaf.</Paragraph>
        {_toLinkList(['Over deze organisatie', 'Wetten en regelingen', 'Copyright', 'Privacy', 'Cookies', 'Toegankelijkheid', 'Open data', 'Kwetsbaarheid melden'])}
      </ColumnLayout>
  }
}`,...(f=(F=t.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var j,C,P;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(C=o.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const U=["DefaultFooter","PrimaryOutlinedFooter","PrimaryOutlinedFooterSubFooter","ColumnLayoutFooter","CustomHeadingFooter"];export{t as ColumnLayoutFooter,o as CustomHeadingFooter,n as DefaultFooter,r as PrimaryOutlinedFooter,i as PrimaryOutlinedFooterSubFooter,U as __namedExportsOrder,N as default};
