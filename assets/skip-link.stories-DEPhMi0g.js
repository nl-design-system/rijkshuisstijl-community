import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{a9 as z,aa as C}from"./index.esm-B6n1CpzP.js";import{m as A}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";const G=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Skip Link component

_Skip links_ zijn belangrijk om te gebruiken op de meeste websites omdat voor sommige gebruikers het hierdoor niet onnodig veel tijd kost om je website te gebruiken. Met een _skip link_ ga je naar een andere plek op dezelfde pagina, zodat je bijvoorbeeld gelijk een artikel kan lezen en links daarin kunt aanklikken, zonder tijd te besteden aan de hoofdnavigatie.

_Skip links_ zijn meestal onzichtbaar als je de pagina opent, maar ze zijn wel makkelijk vindbaar voor deze gebruikers. Met het toetsenbord vindt je een _skip link_ door op \`Tab\` te drukken wanneer je de pagina hebt geladen. (Voor macOS gebruikers is het nodig om de standaard-instellingen aan te passen voordat dit werkt.)

Maak skip links naar de drie belangrijkste onderdelen op de pagina, in deze volgorde:

1. _main content_: vaak een link naar een \`<main>\` of \`<article>\` element
2. _main navigation_: als je een _main navigation component_ hebt, link dan hier naar als je het niet al de volgende link is in de tabvolgorde.
3. _search form_: als je een zoekveld hebt om vanuit deze pagina de zoeken, gebruik deze _skip link_ als laatste.

Als je de skip link gaat gebruiken op een website, begin dan consistent elke pagina met de skip link zodat de navigatie op een voorspelbare manier werkt ([WCAG 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation)).

Skip links zijn niet nodig op een simpele pagina waar alleen tekst staat en geen navigatie. Een startpagina van een zoekmachine heeft bijvoorbeeld wel een navigatie én een zoekformulier, maar door het gebruik van \`autofocus\` voor het zoekveld heeft het geen zin om een skip link te gebruiken.

## HTML

- plaats de _skip link_ als allereerste interactieve element van de pagina, bijvoorbeeld als eerste HTML-element in \`<body>\`.
- plaats de _skip link_ voor landmarks zoals het \`<header>\` element van de _page header component_.
- gebruik een \`<div>\` of \`<p>\` om de link in de plaatsen, gebruik niet een losse \`<a>\`, zodat de link ook duidelijk is als CSS niet geladen is.
- gebruik geen \`<nav>\` element voor skip links.

## Hoe het niet moet

### Skip links onnodig in een \`<nav>\` HTML-element

Het is belangrijk dan gebruikers snel bij de _navigation landmark_ voor het hoofdmenu komen kunnen komen, het zou niet handig zijn als je altijd eerst de _navigation landmark_ met skip links moet overslaan.

Niet:

\`\`\`html
<nav class="skip-links">…</nav>
\`\`\`

Wel:

\`\`\`html
<div class="skip-links">…</div>
\`\`\`

De pagina is beter leesbaar wanneer de CSS niet is geladen als je een _block-level_ HTML-element gebruikt zoals \`div\` of \`p\` met daarin de skip links, dan komt de HTML die volgt na de skip links netjes op een eigen regel te staan.

### Skip link onleesbaar door overlap met achtergrond

Als je de skip link een vaste locatie geeft met CSS \`position\`, dan kan de link over de inhoud van de pagina heen staan. Gebruik daarom een achtergrondkleur voor de _skip link_, zodat de link-tekst altijd leesbaar is.

### Onnodig scrollen bij focus

Niet:

\`\`\`css
.rhc-skip-link {
  position: absolute;
  /* … */
}
\`\`\`

Wel:

\`\`\`css
.rhc-skip-link {
  position: fixed;
  /* … */
}
\`\`\`

## Privacy

Het moet voor skip link gebruikers duidelijk zijn als er een _cookie consent_ is op de pagina, je wilt niet dat deze belangrijke functionaliteit wordt overgeslagen.

## Links

- [WCAG 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): een \`link\` role wordt gebruikt, het liefst door het \`a\` HTML-element met een _fragment identifier_ URL: \`<a href="#target">\`. Gebruik niet \`button\`.
- [WCAG 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence): een _cookie consent_ formulier moet als eerste komen, de skip link als tweede.
- [WCAG 2.4.1](https://www.w3.org/TR/WCAG21/#bypass-blocks): gebruik een _skip link_ op alle pagina's waar voor de unieke inhoud van die pagina er herhalende informatie staat, zoals een header of navigatie.
- [WCAG 2.4.3](https://www.w3.org/TR/WCAG21/#focus-order): een _cookie consent_ moet als eerste focus krijgen, direct daarna de skip links. Zet de HTML van de _skip link_ vooraan in het document. Gebruik niet \`tabindex\` om de gewenste focus volgorde te bereiken, want dat kan problemen opleveren met bijvoorbeeld _cookie consent_ formulieren.
- [WCAG 2.4.7](https://www.w3.org/TR/WCAG21/#focus-visible): de _skip link_ is zichtbaar wanneer die focus heeft. Het visueel ontwerp maakt duidelijk dat het element focus heeft, doordat de stijl consistent is met andere links wanneer ze focus hebben. De skip link mag ook altijd zichtbaar zijn, het is niet verplicht ze standaard te verbergen.
- [WCAG 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation): een skip link moet geactiveerd worden bij \`click\`, niet bij \`mousedown\`.
- [WCAG 2.5.2](https://www.w3.org/TR/WCAG21/#label-in-name)
- [WCAG 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): skip link afmeting is ten minste 44×44px.
- [WCAG 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation): skip link wordt consistent gebruikt op elke pagina.
- [WCAG 3.1.3](https://www.w3.org/TR/WCAG21/#unusual-words): gebruik duidelijke taal voor het label. Bijvoorbeeld niet: "Direct naar de secundaire content met widgets".
- [WCAG 3.2.4](https://www.w3.org/TR/WCAG21/#consistent-identification): gebruik dezelfde labels voor de _skip link_ op alle pagina's. Bijvoorbeeld niet: "Navigatie overslaan" op een gedeelte van de site, en "Naar de inhoud" op andere pagina's.
`,o=({visibility:e,visibleOnFocus:S,...y})=>_.jsx(z,{className:C({"rhc-skip-link--visible-on-focus":S,"rhc-skip-link--hidden":e==="hidden","rhc-skip-link--visible":e==="visible"}),...y}),x={title:"Rijkshuisstijl/Skip link",id:"rijkshuisstijl-skip-link",component:o,argTypes:{children:{description:"Link text",type:{name:"string",required:!1}},href:{description:"Target URL",type:{name:"string",required:!0}},visibility:{description:"Visibilty",options:["","hidden","visible"]},visibleOnFocus:{description:"Visible on focus",control:"boolean"}},args:{children:"",href:"",visibility:"",visibleOnFocus:!1},parameters:{status:{type:"STABLE"},docs:{description:{component:A([G])}}},render:o},n={args:{href:"#main",children:"Skip to main content",visibility:"visible"},parameters:{docs:{description:{story:"Styling met de `.rhc-skip-link` en `.rhc-skip-link--visible-on-focus` class naam."}},componentOrigin:"Dit component is overgenomen vanuit de NL-Design system candidate repo.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/SkipLink.tsx"}},i={args:{href:"#main",children:"Skip to main content",visibleOnFocus:!0},name:"Visible on focus",parameters:{chromatic:{disableSnapshot:!0},docs:{description:{story:"Styling met de `.rhc-skip-link--visible-on-focus` class naam. Standaard niet zichtbaar, wordt zichtbaar wanneer je met het toetsenbord er naar toe tabt."}}}},t={args:{href:"#main",children:"تخطي إلى المحتوى الرئيسي",visibility:"visible"},name:"Right-to-left",decorators:[e=>_.jsx("div",{dir:"rtl",lang:"ar",children:e()})],parameters:{docs:{description:{story:"Skip link in right-to-left script."}}}},s={args:{href:"#main",children:"Skip to main content"},name:"Focus",parameters:{docs:{description:{story:"Styling met de `.rhc-skip-link--focus` class naam."}},pseudo:{focus:!0}}},a={args:{href:"#main",children:"Skip to main content"},name:"Focus visible",parameters:{docs:{description:{story:"Styling met de `.rhc-skip-link--focus-visible` class naam."}},pseudo:{focus:!0,focusVisible:!0}}};var r,l,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    href: '#main',
    children: 'Skip to main content',
    visibility: 'visible'
  },
  parameters: {
    docs: {
      description: {
        story: \`Styling met de \\\`.rhc-skip-link\\\` en \\\`.rhc-skip-link--visible-on-focus\\\` class naam.\`
      }
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin: 'Dit component is overgenomen vanuit de NL-Design system candidate repo.',
    github: 'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/SkipLink.tsx'
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,k,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    href: '#main',
    children: 'Skip to main content',
    visibleOnFocus: true
  },
  name: 'Visible on focus',
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    docs: {
      description: {
        story: 'Styling met de \`.rhc-skip-link--visible-on-focus\` class naam. Standaard niet zichtbaar, wordt zichtbaar wanneer je met het toetsenbord er naar toe tabt.'
      }
    }
  }
}`,...(p=(k=i.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var m,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    href: '#main',
    children: 'تخطي إلى المحتوى الرئيسي',
    visibility: 'visible'
  },
  name: 'Right-to-left',
  decorators: [Story => <div dir="rtl" lang="ar">
        {Story()}
      </div>],
  parameters: {
    docs: {
      description: {
        story: \`Skip link in right-to-left script.\`
      }
    }
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,b,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    href: '#main',
    children: 'Skip to main content'
  },
  name: 'Focus',
  parameters: {
    docs: {
      description: {
        story: \`Styling met de \\\`.rhc-skip-link--focus\\\` class naam.\`
      }
    },
    pseudo: {
      focus: true
    }
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,w,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    href: '#main',
    children: 'Skip to main content'
  },
  name: 'Focus visible',
  parameters: {
    docs: {
      description: {
        story: \`Styling met de \\\`.rhc-skip-link--focus-visible\\\` class naam.\`
      }
    },
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
}`,...(j=(w=a.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const O=["Default","VisibleOnFocus","RightToLeft","Focus","FocusVisible"];export{n as Default,s as Focus,a as FocusVisible,t as RightToLeft,i as VisibleOnFocus,O as __namedExportsOrder,x as default};
