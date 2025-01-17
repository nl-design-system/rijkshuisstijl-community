import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{j as d,I as n}from"./index.esm-CI7cNGQk.js";import{m as l}from"./merge-markdown-CQvfZ6M6.js";import{a as r,L as e}from"./index-DoNj3aom.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-CgpWq_u8.js";const g=`# Rijkshuisstijl Community Footer component

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
`,y={title:"Rijkshuisstijl/Footer",id:"rhc-footer",component:d,parameters:{status:{type:"UNSTABLE"},docs:{description:{component:l([g])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam PageFooter), met HTML aanpassingen en styling van de Rijkshuisstijl Community."},argTypes:{appearanceLevel:{description:"Het uiterlijk van de heading in de footer.",control:{type:"select"},options:[1,2,3,4,5],table:{type:{summary:"number"}}}}},o={args:{heading:"De Rijksoverheid. Voor Nederland",appearanceLevel:1,background:"primary-filled",columns:[{heading:"Service",appearanceLevel:3,children:i.jsxs(r,{children:[i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Contact"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Abonneren"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"RSS"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Vacatures"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Sitemap"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Help"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Archief"})]})},{heading:"Over deze site",appearanceLevel:3,children:i.jsxs(r,{children:[i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Over Rijksoverheid.nl"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Wetten en regelingen"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Copyright"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Privacy"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Cookies"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Toegankelijkheid"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Open data"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"Kwetsbaarheid melden"})]})}]}},t={args:{background:"primary-filled",columns:[{heading:"Heading 1",appearanceLevel:3,children:i.jsxs(r,{children:[i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 1"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 2"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 3"})]})},{heading:"Heading 2",appearanceLevel:3,children:i.jsxs(r,{children:[i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 1"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 2"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 3"})]})},{heading:"Heading 3",appearanceLevel:3,children:i.jsxs(r,{children:[i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 1"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 2"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 3"})]})},{heading:"Heading 4",appearanceLevel:3,children:i.jsxs(r,{children:[i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 1"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 2"}),i.jsx(e,{href:"#",icon:i.jsx(n,{icon:"chevron-right"}),children:"List item 3"})]})}]}};var c,h,s;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    heading: 'De Rijksoverheid. Voor Nederland',
    appearanceLevel: 1,
    background: 'primary-filled',
    columns: [{
      heading: 'Service',
      appearanceLevel: 3,
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
      appearanceLevel: 3,
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
}`,...(s=(h=o.parameters)==null?void 0:h.docs)==null?void 0:s.source}}};var L,a,k;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    background: 'primary-filled',
    columns: [{
      heading: 'Heading 1',
      appearanceLevel: 3,
      children: <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 1
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 2
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 3
            </LinkListLink>
          </LinkList>
    }, {
      heading: 'Heading 2',
      appearanceLevel: 3,
      children: <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 1
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 2
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 3
            </LinkListLink>
          </LinkList>
    }, {
      heading: 'Heading 3',
      appearanceLevel: 3,
      children: <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 1
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 2
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 3
            </LinkListLink>
          </LinkList>
    }, {
      heading: 'Heading 4',
      appearanceLevel: 3,
      children: <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 1
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 2
            </LinkListLink>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              List item 3
            </LinkListLink>
          </LinkList>
    }]
  }
}`,...(k=(a=t.parameters)==null?void 0:a.docs)==null?void 0:k.source}}};const H=["DefaultFooter","CustomHeadingFooter"];export{t as CustomHeadingFooter,o as DefaultFooter,H as __namedExportsOrder,y as default};
