import{j as e}from"./iframe-DJvW-n7q.js";import{m as b}from"./mergeMarkdown-BplYUDBy.js";import{r as g}from"./replaceMarkdown-BheJ9lhZ.js";import{M as k,n}from"./index-D9jALIvX.js";import"./Button-BX1DV1Pg.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DVKtt-m1.js";import"./IconCheck-DvOJrJig.js";const v=`<!-- @license CC0-1.0 -->

# Button group

De _button group_ is een container voor een aantal buttons, of voor een losstaande button.

## Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **group**: van \`role="group"\` in ARIA.

## Verticale variant

Voor smalle schermen bij plaatsing in smalle panelen (zoals een sidebar) is er een variant waar buttons onder elkaar staan, in plaats van naast elkaar. Gebruik deze variant niet wanneer er voldoende ruimte is voor de standaard variant. Je kunt bijvoorbeeld CSS media queries gebruiken om deze variant toe te passen voor kleine schermen.
`,h=`<!-- @license CC0-1.0 -->

# Richtlijnen

- Plaatsing: De action group wordt meestal horizontaal weergegeven, maar kan ook verticaal worden weergegeven als er onvoldoende ruimte is (bijvoorbeeld op mobiele apparaten of in smalle vensters).
- Gebruik van knoppen: Wanneer een actie belangrijker is dan de andere, geef de belangrijkste actie een prominente stijl (bijvoorbeeld een primaire knop).
- ARIA-rol: De role="group" is van toepassing op de container, om aan te geven dat de acties samen horen. Elke individuele actie heeft de role="button" voor knoppen, of role="link" voor links.

## Anatomie

De \`ActionGroup\` component bestaat uit de volgende elementen:

- Container (ActionGroup): Dit is de container van de groep, die alle actie-elementen bevat en bepaalt hoe de acties gepositioneerd worden (horizontaal of verticaal).
- Acties (Buttons): Elke actie binnen de groep is een knop (Button).
- Appearance: Elke knop moet een duidelijke stijl hebben. Primaire acties krijgen een opvallende stijl, terwijl secundaire acties een minder prominente stijl hebben.

## Voorbeelden met verkeerde implementatie

Hier zijn enkele veelvoorkomende fouten bij het implementeren van ActionGroup en hoe deze kunnen worden vermeden:

- Niet gerelateerde acties groeperen: Plaats geen acties samen die geen verband met elkaar hebben.

\`\`\`jsx
<ActionGroup direction="row">
  <Button appearance="primary-action-button">Save</Button>
  <Button appearance="secondary-action-button">Delete User</Button>
</ActionGroup>
\`\`\`

- Verkeerde children gebruiken

\`\`\`jsx
// Verkeerd
<ActionGroup direction="row">
  <div>Ongeldig element</div>
  <Button appearance="primary-action-button">Save</Button>
</ActionGroup>

// Correct
<ActionGroup direction="row">
  <Button appearance="primary-action-button">Save</Button>
  <Button appearance="secondary-action-button">Cancel</Button>
</ActionGroup>
\`\`\`

- Acties zonder duidelijke appearance: Elke actie moet een duidelijke stijl hebben zodat gebruikers het belang van de actie kunnen herkennen.

\`\`\`jsx
// Verkeerd
<ActionGroup direction="row">
  <Button>Save</Button>
  <Button>Cancel</Button>
</ActionGroup>

// Correct
<ActionGroup direction="row">
  <Button appearance="primary-action-button">Save</Button>
  <Button appearance="secondary-action-button">Cancel</Button>
</ActionGroup>
\`\`\`
`,C={title:"Action Group",id:"rhc-action-group",component:k,argTypes:{direction:{description:"Layout of the action group",control:"select",options:["column","row","column-stretch"]}},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:g(b([v,h]),"Button Group","Action Group")}},nldesignsystem:"https://www.nldesignsystem.nl/action-group/",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/ActionGroup.tsx",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=4626-10492&p=f&t=MHYw4lXBHCryrwek-0",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community."}},t={args:{children:[e.jsx(n,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),e.jsx(n,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]}},o={args:{direction:"column",children:[e.jsx(n,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),e.jsx(n,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]}},a={args:{direction:"column-stretch",children:[e.jsx(n,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),e.jsx(n,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]}};var r,i,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>]
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var s,u,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>]
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,l,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    direction: 'column-stretch',
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>]
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const x=["Row","Column","ColumnStretch"];export{o as Column,a as ColumnStretch,t as Row,x as __namedExportsOrder,C as default};
