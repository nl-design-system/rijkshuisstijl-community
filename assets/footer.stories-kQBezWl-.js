import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{k,I as e}from"./index.esm-T83ddQPv.js";import{m as d}from"./merge-markdown-BtgmYwh_.js";import{a as r,L as n}from"./index-C4jjA_3H.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./heading-BJGfgtDt.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-DKyXVfeP.js";import"./index-CgpWq_u8.js";const g=`# Rijkshuisstijl Community Footer component

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
`,C={title:"Rijkshuisstijl/Footer",id:"rhc-footer",component:k,parameters:{status:{type:"UNSTABLE"},docs:{description:{component:d([g])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam PageFooter), met HTML aanpassingen en styling van de Rijkshuisstijl Community."},argTypes:{appearanceLevel:{description:"Het uiterlijk van de heading in de footer.",control:{type:"select"},options:["level-1","level-2","level-3","level-4","level-5","level-6"],table:{type:{summary:"string"}}}}},o={args:{heading:"Footer heading",appearanceLevel:"level-1",background:"primary-filled",columns:[{heading:"Service",appearanceLevel:"level-3",children:i.jsxs(r,{children:[i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Contact"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Abonneren"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"RSS"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Vacatures"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Sitemap"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Help"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Archief"})]})},{heading:"Over deze site",appearanceLevel:"level-3",children:i.jsxs(r,{children:[i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Over deze organisatie"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Wetten en regelingen"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Copyright"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Privacy"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Cookies"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Toegankelijkheid"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Open data"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"Kwetsbaarheid melden"})]})}]}},t={args:{background:"primary-filled",columns:[{heading:"First heading",appearanceLevel:"level-3",children:i.jsxs(r,{children:[i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 1"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 2"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 3"})]})},{heading:"Second heading",appearanceLevel:"level-3",children:i.jsxs(r,{children:[i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 1"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 2"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 3"})]})},{heading:"Third heading",appearanceLevel:"level-3",children:i.jsxs(r,{children:[i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 1"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 2"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 3"})]})},{heading:"Fourth heading",appearanceLevel:"level-3",children:i.jsxs(r,{children:[i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 1"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 2"}),i.jsx(n,{href:"#",icon:i.jsx(e,{icon:"chevron-right"}),children:"List item 3"})]})}]}};var c,h,s;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    heading: 'Footer heading',
    appearanceLevel: 'level-1',
    background: 'primary-filled',
    columns: [{
      heading: 'Service',
      appearanceLevel: 'level-3',
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
      appearanceLevel: 'level-3',
      children: <LinkList>
            <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
              Over deze organisatie
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
}`,...(s=(h=o.parameters)==null?void 0:h.docs)==null?void 0:s.source}}};var L,a,l;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    background: 'primary-filled',
    columns: [{
      heading: 'First heading',
      appearanceLevel: 'level-3',
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
      heading: 'Second heading',
      appearanceLevel: 'level-3',
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
      heading: 'Third heading',
      appearanceLevel: 'level-3',
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
      heading: 'Fourth heading',
      appearanceLevel: 'level-3',
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const w=["DefaultFooter","CustomHeadingFooter"];export{t as CustomHeadingFooter,o as DefaultFooter,w as __namedExportsOrder,C as default};
