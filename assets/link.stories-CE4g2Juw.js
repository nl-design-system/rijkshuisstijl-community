import{j as e}from"./jsx-runtime-8Jttx2DA.js";import{r as N}from"./index.esm-Tj8qSLCD.js";import{I as d}from"./index-CgFCBr0q.js";import{c as B}from"./clsx-B-dksMZM.js";import{I as q,a as O}from"./IconCalendarEvent-OFWcTUS_.js";import"./index-BzhKaBtb.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */import"./index-DYgQ_QFa.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-BhpIufNd.js";const U=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community link component

Met de link maak je navigatie mogelijk naar een gerelateerde pagina.

## Activeren met _touch_

Veel gebruikers activeren de link door te klikken op een _touch screen_. Deze gebruikers zien niet de _hover_ state van een link, dus een link moet ook duidelijk herkenbaar zijn zonder ooit het design van de _hover_ state te zien.

## Activeren met toetsenbord

Sommige gebruikers gebruiken het toetsenbord om telkens met één druk op de knop naar de volgende link te gaan. De \`focus-visible\` variant moet daarom opvallend zijn, zodat je weet welke link je kunt activeren met \`Enter\`. Links moet je kunnen activeren met \`Enter\`, maar niet met \`Space\`.

## Activeren met een muis

Gebuikers met een muis kunnen de _hover_ state zien wanneer de muisaanwezer over de link heen beweegt. Links met een \`title\` attribuut kunnen dan een tooltip tonen die in de weg zit (gebruik daarom geen \`title\` attribuut).

Gebruikers die zowel toetsenbord als muis gebruiken moeten kunnen onderscheiden welke link focus heeft, en welke de _hover_ state heeft.

## Activeren met een _screen reader_

Sommige gebruikers gebruiken een lijst van alle links op een pagina, en kiezen een link uit op basis van de link-tekst. Deze gebruikers bekijken niet de hele pagina, en zien niet altijd de link in de context van de omliggende tekst. Daarom is het belangrijk dat de link-tekst op zichzelf duidelijk maakt welke pagina je opent. Om de juiste link te kunnen kiezen, is het ook belangrijk dat niet dezelfde link-tekst wordt gebruikt voor verschillende links. Gebruik dus niet "Lees meer" als link-tekst, die tekst is meestal niet uniek op een pagina en is onduidelijk zonder context.

## Terug met de _Back button_

Na het activeren van een link, moet een gebruiker weer terug kunnen naar de vorige pagina. Gebruikers doen dat met bijvoorbeeld de _back button_ van de browser, of met een _swipe gesture_ op een _touch screen_.

Als je gewoon \`<a href="...">\` in HTML gebruikt dan werkt de back button zoals het hoort. Met extra code kun je de back button onbedoeld kapot maken. Als je het \`target\` attribuut gebruikt, dan werkt de _back button_ niet (bijvoorbeeld: \`target="_blank"\`).

Als je een _single page app_ maakt moet je goed testen dat de back button nog goed werkt. Wanneer je de \`click\` event van de link stopt met \`event.preventDefault()\` en met script een eigen navigatie maakt, dan moet je de [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) gebruiken om een even goede ervaring te bieden als gewone links in HTML.

## Link versus button

Links worden vooral gebruikt om te navigeren en verschijnen dan ook in of direct na een zin.

Buttons worden gebruikt voor acties, zoals 'toevoegen', 'sluiten' of 'opslaan'.

### Relevante WCAG regels

- [WCAG 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): een link is niet voor iedereen duidelijk herkenbaar wanneer je alleen kleur gebruikt. Gebruik ook onderstreping om de link duidelijk te maken.
- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- [WCAG 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
- [WCAG 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name)
- [WCAG 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts)
`,u=({href:E,children:V,iconLeft:P,iconRight:F,external:c,className:H,...M})=>e.jsxs(N,{external:c,href:E,className:B({"utrecht-link--external":c},H),...M,children:[P&&e.jsx(d,{children:e.jsx(q,{})}),V,F&&e.jsx(d,{children:e.jsx(O,{})})]}),ae={title:"Rijkshuisstijl/Link",id:"rhc-link",component:u,argTypes:{href:{description:"Url to link to",type:{name:"string",required:!0},table:{category:"Property"}},external:{description:"Whether the link is external",type:{name:"boolean"},table:{category:"Property"}},externalLabel:{description:"SR only label for external link icon",type:{name:"string"},table:{category:"Property"}},children:{description:"Link text - default webcomponent slot",type:{name:"string",required:!0},table:{category:"Webcomponent Slot"},defaultValue:""},iconLeft:{description:"Icon Left",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1},iconRight:{description:"Icon Right",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1}},args:{children:""},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:U}}},render:u},n={args:{href:"#",children:"Label"}},r={args:{href:"#",children:"Label",iconLeft:!0}},t={args:{href:"#",children:"Label",iconRight:!0}},a={args:{href:"#",children:"Label",external:!0,externalLabel:"example external label"}},o={parameters:{pseudo:{active:!0}},args:{href:"#",children:"Label"}},i={parameters:{pseudo:{focus:!0}},args:{href:"#",children:"Label"}},s={parameters:{},args:{href:"#",children:"Label",className:"utrecht-link--focus-visible"}},l={parameters:{pseudo:{visited:!0}},args:{href:"https://example.com/",children:"Label"}};var m,p,k;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Label'
  }
}`,...(k=(p=n.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Label',
    iconLeft: true
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,v,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Label',
    iconRight: true
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,L,x;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Label',
    external: true,
    externalLabel: 'example external label'
  }
}`,...(x=(L=a.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var _,A,z;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    href: '#',
    children: 'Label'
  }
}`,...(z=(A=o.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var y,R,G;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    href: '#',
    children: 'Label'
  }
}`,...(G=(R=i.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var S,C,W;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {},
  args: {
    href: '#',
    children: 'Label',
    className: 'utrecht-link--focus-visible'
  }
}`,...(W=(C=s.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var I,T,D;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      visited: true
    }
  },
  args: {
    href: 'https://example.com/',
    children: 'Label'
  }
}`,...(D=(T=l.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const oe=["Default","IconLeft","IconRight","External","Active","Focus","FocusVisible","Visited"];export{o as Active,n as Default,a as External,i as Focus,s as FocusVisible,r as IconLeft,t as IconRight,l as Visited,oe as __namedExportsOrder,ae as default};
