import{j as i}from"./jsx-runtime-BoFrXSaA.js";import{U as h}from"./index.esm-CkaAH-Mq.js";import{A as b}from"./index-CBWbXZ7Z.js";import"./index-WI1YhYyJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-BeNflsVP.js";import"./iframe-e3cE5MT0.js";import"../sb-preview/runtime.js";import"./clsx-B-dksMZM.js";import"./index-CnPPJwQN.js";const k=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community accordion component

Je kunt een accordion gebruiken lange pagina's korter te maken zodat de gebruiker niet lang moet scrollen om de relevante informatie te vinden.

De inhoud verbergen heeft als nadeel dat "zoeken in pagina" geen resultaten oplevert de inhoud die verborgen is. Als je weet op welke zoekterm de gebruiker heeft gezocht om op de pagina met accordion te komen, dan kun je de sections die de zoekterm bevatten automatisch _expanded_ maken.

## Tekst

Het is belangrijk duidelijke koppen te hebben, omdat de gebruiker niet de verborgen inhoud kan "scannen" om relevante informatie te vinden.

## HTML

Gebruik een \`<button>\` element waarmee je de inhoud van de section kunt weergeven en verbergen. Gebruik altijd het \`aria-expanded\` attribuut zodat duidelijk wat het effect is van de button activeren. Gebruik \`aria-expanded="true"\` wanneer de inhoud beschikbaar is, gebruik \`aria-expanded="false"\` wanneer de inhoud verborgen is.

Plaats de button in de heading, zodat gebruikers die via een overzicht van headings door de pagina navigeren de informatie makkelijk kunnen vinden.

Plaats de inhoud van de _expandable region_ in een \`<section>\` element, zodat gebruikers die via een overzicht van _landmarks_ door de pagina navigeren de informatie makkelijk kunnen vinden (het \`section\` element maakt een \`region\` landmark). Gebruik \`aria-labelledby\` om de \`section\` te koppelen aan de heading, omdat het is belangrijk dat de landmark een duidelijk label heeft. Zonder label is de _landmark navigation_ onduidelijk omdat er meerdere regions zijn zonder naam, waarvan niet duidelijk is wat de inhoud is.

Zelfs de inhoud van een verborgen _expandable region_ moet in de HTML-code staan, wanneer je _server-side rendering_ gebruikt zodat zoekmachines dan toch toegang hebben tot de volledige inhoud. De inhoud van een verborgen _expandable region_ kan met CSS onzichtbaar gemaakt worden.

Wanneer je accordion heel veel onderdelen heeft, dan kunnen gebruikers van _landmark navigation_ moeilijker andere landmarks in de pagina vinden. Om bij de \`contentinfo\` landmark te komen (de page footer), moet de gebruiker eerst alle accordion onderdelen overslaan. Gebruik voor een accordion met heel veel onderdelen een \`<div>\` of \`<section role="presentation">\` element in plaats van het \`<section>\` element zodat het geen landmark wordt. Gebruikers kunnen de informatie dan nog wel vinden via _heading navigation_.

### Zo moet het niet

Verwijder het \`aria-expanded\` attribuut niet, want \`aria-expanded="false"\` is niet hetzelfde als geen \`aria-expanded\` attribuut hebben. "_Boolean attributes_" van ARIA werken niet hetzelfde als _boolean attributes_ van HTML. ([Boolean attributes in HTML and ARIA: what's the difference? — Hidde de Vries](https://hidde.blog/boolean-attributes-in-html-and-aria-whats-the-difference/)).

Plaats niet de heading in de button in plaats van andersom, omdat de heading dan niet toegankelijk is voor hulpmiddelen die een overzicht maken van alle headings op een pagina.

Wacht niet met het plaatsen van de inhoud van de _expandable region_ tot de gebruiker de button activeert, want zoekmachines gebruiken alleen de initiële inhoud van de pagina zonder op buttons te gebruiken.

## Visueel ontwerp

De icoon plaatsen vóór de heading is meest duidelijk. Als het icoon voor _expanded_ of _not expanded_ uitgelijnd is aan het eind van de regel, dan is het minder duidelijk dat de heading een button is die voor inklappen en uitklappen zorgt. Sommige gebruikers met een beperkt gezichtsveld kunnen het icoon bijvoorbeeld niet zien wanneer ze naar naar de heading kijken, als er grote afstand zit tussen de heading en het icoon.

## Relevante WCAG eisen

De WCAG eisen voor de button component en de heading component gelden ook voor de accordion header.

Let extra op voor deze onderdelen:

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): de _heading level_ van de accordion sections is afhankelijk van waar in de pagina de accordion is geplaatst, dit kan per pagina verschillen.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose): gebruik \`aria-controls\` voor de button, en gebruik een \`region\` landmark voor de _expandable region_ (gebruik daarvoor het HTML-element \`<section>\`)
- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): contrast tussen tekst en achtergrond en tussen icoon en achtergrond is voldoende in alle varianten, alle interactieve statussen en alle mogelijke combinaties.
- [WCAG eis 3.2.1](https://www.w3.org/TR/WCAG21/#on-focus): maak de accordion niet automatisch _expanded_ als de button focus krijgt.
- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): ondersteun ook de optionele toetsen: \`Down Arrow\`, \`Up Arrow\`, \`Home\` en \`End\`. \`Space\` moet de button activeren, niet de pagina scrollen (gebruik \`keypressEvt.preventDefault()\`).
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst die zowel wordt gebruikt als heading en als label voor de button moet duidelijk zijn, omdat de inhoud niet altijd zichtbaar is.
- [WCAG eis 2.4.10](https://www.w3.org/TR/WCAG21/#section-headings): accordions die onderdeel vormen van de lopende tekst moeten section headings gebruiken.

## Relevante info

- [Accordion (Sections With Show/Hide Functionality) - W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
`,v=({expanded:a,label:u,body:c,appearance:m,icon:p,sections:g})=>i.jsx(b,{appearance:m,icon:p,sections:g||[{expanded:a,label:u,body:c}]}),D={title:"Rijkshuisstijl/Accordion",id:"rhc-accordion",args:{label:"",body:"",expandedAccordion:!1,appearance:"",icon:void 0},argTypes:{label:{name:"label",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},body:{name:"body",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},expandedAccordion:{name:"expandedAccordion",type:{name:"boolean",required:!1},table:{defaultValue:{summary:""},category:"API"}},appearance:{description:"Appearance",control:{type:"select"},options:["","utrecht"]},icon:{name:"icon",description:"Icon at the start",control:{type:"select"},options:["",null,"utrecht-icon-chevron-down"],mapping:{"":void 0,null:null,"utrecht-icon-chevron-down":i.jsx(h,{})}}},parameters:{tokensPrefix:"utrecht-accordion",status:{type:"STABLE"},docs:{description:{component:k}}},render:v},w={label:'ما هو "لوريم إيبسوم" ؟',body:' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.'},f=[{label:"Lorem ipsum 1",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!0},{label:"Lorem ipsum 2",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!1},{label:"Lorem ipsum 3",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!1}],e={args:{sections:f}},n={args:w,decorators:[a=>i.jsx("div",{dir:"rtl",lang:"ar",children:a()})],name:"Right-to-left"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    sections: accordionData
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var d,s,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: accordionDefaultDataAR,
  decorators: [Story => <div dir="rtl" lang="ar">
        {Story()}
      </div>],
  name: 'Right-to-left'
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const T=["Default","RTL"];export{e as Default,n as RTL,T as __namedExportsOrder,D as default};
