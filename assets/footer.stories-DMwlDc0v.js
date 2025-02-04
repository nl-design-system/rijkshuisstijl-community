import{j as a}from"./jsx-runtime-CLpGMVip.js";import{l as v,I as u}from"./index.esm-BwflJe8k.js";import{m as k}from"./merge-markdown-BtgmYwh_.js";import{a as y,L as f,C as j}from"./index-BLZjEvYy.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-Be-aV6DI.js";import"./index-D5-rbeG3.js";const C=`# Rijkshuisstijl Community Footer component

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
`,H={title:"Rijkshuisstijl/Footer",id:"rhc-footer",component:v,parameters:{status:{type:"UNSTABLE"},docs:{description:{component:k([C])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam PageFooter), met HTML aanpassingen en styling van de Rijkshuisstijl Community."},argTypes:{appearanceLevel:{description:"Het uiterlijk van de heading in de footer.",control:{type:"select"},options:["level-1","level-2","level-3","level-4","level-5","level-6"],table:{type:{summary:"string"}}}}};function e(h){return a.jsx(y,{children:h.map(L=>a.jsx(f,{href:"#",icon:a.jsx(u,{icon:"chevron-right"}),children:L}))})}const n={args:{heading:"Footer heading",appearanceLevel:"level-1",background:"primary-filled",columns:[{heading:"Service",appearanceLevel:"level-3",children:e(["Contact","Abonneren","RSS","Vacatures","Sitemap","Help","Archief"])},{heading:"Over deze site",appearanceLevel:"level-3",children:e(["Over deze organisatie","Wetten en regelingen","Copyright","Privacy","Cookies","Toegankelijkheid","Open data","Kwetsbaarheid melden"])}]}},i={args:{heading:"Footer heading",appearanceLevel:"level-1",background:"primary-filled",children:a.jsx(j,{children:e(["Over deze organisatie","Wetten en regelingen","Copyright","Privacy","Cookies","Toegankelijkheid","Open data","Kwetsbaarheid melden"])})}},t={args:{background:"primary-filled",columns:[{heading:"First heading",appearanceLevel:"level-3",children:e(["List item 1","List item 2","List item 3"])},{heading:"Second heading",appearanceLevel:"level-3",children:e(["List item 1","List item 2","List item 3"])},{heading:"Third heading",appearanceLevel:"level-3",children:e(["List item 1","List item 2","List item 3"])},{heading:"Fourth heading",appearanceLevel:"level-3",children:e(["List item 1","List item 2","List item 3"])}]}};var r,o,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    heading: 'Footer heading',
    appearanceLevel: 'level-1',
    background: 'primary-filled',
    columns: [{
      heading: 'Service',
      appearanceLevel: 'level-3',
      children: _toLinkList(['Contact', 'Abonneren', 'RSS', 'Vacatures', 'Sitemap', 'Help', 'Archief'])
    }, {
      heading: 'Over deze site',
      appearanceLevel: 'level-3',
      children: _toLinkList(['Over deze organisatie', 'Wetten en regelingen', 'Copyright', 'Privacy', 'Cookies', 'Toegankelijkheid', 'Open data', 'Kwetsbaarheid melden'])
    }]
  }
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var s,d,m;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    heading: 'Footer heading',
    appearanceLevel: 'level-1',
    background: 'primary-filled',
    children: <ColumnLayout>
        {_toLinkList(['Over deze organisatie', 'Wetten en regelingen', 'Copyright', 'Privacy', 'Cookies', 'Toegankelijkheid', 'Open data', 'Kwetsbaarheid melden'])}
      </ColumnLayout>
  }
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    background: 'primary-filled',
    columns: [{
      heading: 'First heading',
      appearanceLevel: 'level-3',
      children: _toLinkList(['List item 1', 'List item 2', 'List item 3'])
    }, {
      heading: 'Second heading',
      appearanceLevel: 'level-3',
      children: _toLinkList(['List item 1', 'List item 2', 'List item 3'])
    }, {
      heading: 'Third heading',
      appearanceLevel: 'level-3',
      children: _toLinkList(['List item 1', 'List item 2', 'List item 3'])
    }, {
      heading: 'Fourth heading',
      appearanceLevel: 'level-3',
      children: _toLinkList(['List item 1', 'List item 2', 'List item 3'])
    }]
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const R=["DefaultFooter","ColumnLayoutFooter","CustomHeadingFooter"];export{i as ColumnLayoutFooter,t as CustomHeadingFooter,n as DefaultFooter,R as __namedExportsOrder,H as default};
