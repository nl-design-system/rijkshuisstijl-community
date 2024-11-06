import{j as n}from"./jsx-runtime-BoFrXSaA.js";import{j as s,I as i}from"./index.esm-BoJrDoda.js";import{a as r,L as e}from"./index.esm-C4p8kHu0.js";import"./index-WI1YhYyJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css              */import"./objectWithoutProperties-BJfzkg-c.js";const L=`# Rijkshuisstijl Community Footer component

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
  heading="De Rijksoverheid. Voor Nederland"
\`\`\`
`,m={title:"Rijkshuisstijl/Footer",id:"rhc-footer",component:s,parameters:{status:{type:"UNSTABLE"},docs:{description:{component:L}}}},o={args:{heading:"De Rijksoverheid. Voor Nederland",headingLevel:4,background:"primary-filled",columns:[{heading:"Service",children:n.jsxs(r,{children:[n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Contact"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Abonneren"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"RSS"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Vacatures"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Sitemap"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Help"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Archief"})]})},{heading:"Over deze site",children:n.jsxs(r,{children:[n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Over Rijksoverheid.nl"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Wetten en regelingen"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Copyright"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Privacy"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Cookies"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Toegankelijkheid"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Open data"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Kwetsbaarheid melden"})]})}]}};var t,c,h;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    heading: 'De Rijksoverheid. Voor Nederland',
    headingLevel: 4,
    background: 'primary-filled',
    columns: [{
      heading: 'Service',
      children: <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Contact
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Abonneren
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              RSS
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Vacatures
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Sitemap
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Help
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Archief
            </LinkListLink>
          </LinkList>
    }, {
      heading: 'Over deze site',
      children: <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Over Rijksoverheid.nl
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Wetten en regelingen
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Copyright
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Privacy
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Cookies
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Toegankelijkheid
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Open data
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Kwetsbaarheid melden
            </LinkListLink>
          </LinkList>
    }]
  }
}`,...(h=(c=o.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const f=["DefaultFooter"];export{o as DefaultFooter,f as __namedExportsOrder,m as default};
