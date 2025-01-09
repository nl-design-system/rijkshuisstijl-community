import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{Q as V,I as c}from"./index.esm-CS39ZVPw.js";import{m as _}from"./merge-markdown-CQvfZ6M6.js";import{a as G,I as H}from"./IconCalendarEvent-B-APzZ5A.js";import{c as M}from"./index-DoNj3aom.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-CgpWq_u8.js";const O=`<!-- @license CC0-1.0 -->

# Button

Een button biedt de mogelijkheid om een actie uit te voeren.
`,P="<!-- @license CC0-1.0 -->\n\n# Anatomie\n\n## Terminologie\n\n- **button**: van het `<button>` HTML element, `role=\"button\"` in ARIA.\n- **appearance**: van de [CSS `appearance` property](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance) (bijvoorbeeld: `appearance: push-button`).\n\n## States\n\n- `normal`\n- `active`: de gebruiker activeert de button op dit moment. Bijvoorbeeld door er op te klikken. De `active` state duurt maar heel kort.\n- `pressed`: een ingedrukte button, bijvoorbeeld de _bold button_ in een toolbar van een rich text editor, of de button van een date picker popup. Een button kan lange tijd `pressed` zijn, in tegenstelling tot `active`.\n- `hover`: de gebruiker heeft de aanwijzer boven de button. Bijvoorbeeld door met de muiscursor er over te 'zweven'.\n- `focus`\n- `focus` en `focus-visible`: de link heeft de focus door de `Tab` knop van het keyboard.\n- `disabled`\n- `disabled` en `focus-visible`: als een button disabled is (zeker een _primary action button_), dan moet wel duidelijk zijn dat de button er is en wat je kunt doen om verder te komen. Screen reader gebruikers moeten daarom focus kunnen hebben op een disabled button, om de bijbehorende uitleg te horen.\n",J='<!-- @license CC0-1.0 -->\n\n# HTML\n\nGebruik het `<button type="button">` element in HTML om een button te maken.\n\nEen alternatief op `<button>` is bijvoorbeeld `<input type="button">`, maar die heeft minder mogelijkheden voor de inhoud van de button. Je kunt er bijvoorbeeld geen SVG icon in plaatsen. Nog een alternatief is `<div role="button" tabindex="0">`, maar `<button>` heeft het voordeel dat die ook werkt zonder CSS en zonder JavaScript.\n\n## Formulieren verzenden\n\nVoor formulieren verzenden gebruik je `<button type="submit">`. Gebruik ook de `submit` event van een formulier en niet alleen de `click` event van de button, zodat je ook vanuit een formulierveld op `Enter` kan drukken om het formulier te verzenden.\n',U=`<!-- @license CC0-1.0 -->

# Visueel ontwerp

Maak elke button 44×44px of groter ([WCAG-succescriterium 2.5.5](https://nldesignsystem.nl/wcag/2.5.5/)).
`,q='<!-- @license CC0-1.0 -->\n\n# Relevante WCAG-succescriteria\n\n- [WCAG-succescriterium 2.1.2 Geen toetsenbordval](https://nldesignsystem.nl/wcag/2.1.2/): Het is mogelijk met `Tab` en `Shift+Tab` de button focus uit de button te verplaatsen.\n- [WCAG-succescriterium 2.1.3 Toetsenbord (geen uitzondering)](https://nldesignsystem.nl/wcag/2.1.3/):\n  - Je kan de button activeren met `Enter` of `Space`.\n  - Het is mogelijk met `Tab` de button te focussen.\n  - `Space` gebruiken heeft dan niet het effect dat de pagina scrollt.\n- [WCAG-succescriterium 2.4.6 Koppen en labels](https://nldesignsystem.nl/wcag/2.4.6/): de label van de button moet duidelijk zijn\n- [WCAG-succescriterium 2.5.2 Aanwijzerannulering](https://nldesignsystem.nl/wcag/2.5.2/):\n  - gebruik niet de `mousedown` event om de button te activeren, gebruik liever de `click` event\n  - `mousedown` mag alleen gebruikt worden als `mouseup` het effect weer ongedaan maakt, bijvoorbeeld een "_fast foward_" button om audio of video door te spoelen.\n- [WCAG-succescriterium 2.5.5 Grootte van het aanwijsgebied (uitgebreid)](https://nldesignsystem.nl/wcag/2.5.5/): de button moet groot genoeg zijn om aan te klikken, en kleine buttons moeten niet te dicht op een andere button staan.\n',d=({appearance:R,children:T,iconLeft:D,iconRight:E,...W})=>e.jsxs(M,{appearance:R,...W,children:[D&&e.jsx(c,{children:e.jsx(G,{})}),T,E&&e.jsx(c,{children:e.jsx(H,{})})]}),te={title:"Rijkshuisstijl/Button",id:"rhc-button",component:d,argTypes:{appearance:{description:"Button appearance",control:{type:"select"},options:["","primary-action-button","secondary-action-button","subtle-button"],table:{category:"Property"},defaultValue:""},children:{description:"Button text - default webcomponent slot",type:{name:"string",required:!0},table:{category:"Webcomponent Slot"},defaultValue:""},disabled:{table:{category:"Property"},defaultValue:!1},iconLeft:{description:"Icon Left",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1},iconRight:{description:"Icon Right",type:{name:"boolean"},table:{category:"Demo"},defaultValue:!1}},args:{children:"",appearance:"",disabled:!1,iconLeft:!1,iconRight:!1},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:_([O,P,U,J,q])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen (voor de IconButton) en styling van de Rijkshuisstijl Community."},render:d},n={args:{children:"Label"}},t={args:{children:"Label",appearance:"primary-action-button"}},o={args:{children:"Label",appearance:"secondary-action-button"}},r={args:{children:"Label",appearance:"subtle-button"}},a={args:{children:"Label",appearance:"secondary-action-button",iconLeft:!0}},i={args:{children:"Label",appearance:"primary-action-button",iconRight:!0}},s={render:()=>e.jsx(V,{label:"calendar",children:e.jsx(c,{children:e.jsx(G,{})})})};var l,u,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Label'
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,b,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button'
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,v,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button'
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var k,y,j;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'subtle-button'
  }
}`,...(j=(y=r.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,C,L;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
    iconLeft: true
  }
}`,...(L=(C=a.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var w,I,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
    iconRight: true
  }
}`,...(A=(I=i.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var x,z,B;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <IconButton label="calendar">
      <Icon>
        <IconCalendarEvent></IconCalendarEvent>
      </Icon>
    </IconButton>
}`,...(B=(z=s.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const oe=["Default","PrimaryAction","SecondaryAction","Subtle","IconLeft","IconRight","IconOnly"];export{n as Default,a as IconLeft,s as IconOnly,i as IconRight,t as PrimaryAction,o as SecondaryAction,r as Subtle,oe as __namedExportsOrder,te as default};
