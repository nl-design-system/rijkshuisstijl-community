import{j as e}from"./iframe-CYk8V2d0.js";import{m as T}from"./mergeMarkdown-B56Gr9e6.js";import{D as t}from"./DataBadgeButton-xGgCCoYM.js";import{I as c}from"./IconCheck-DhxAl1tC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DwYygznx.js";const z=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Data Badge Button component

De \`DataBadgeButton\` is een interactieve variant van de \`DataBadge\` die gebruikt wordt voor het selecteren en filteren van data.

Het **doel** van de component is het mogelijk maken om data-elementen te markeren en tegelijkertijd als klikbare filter te gebruiken. In tegenstelling tot de standaard Data Badge die alleen informatief is, kan de Data Badge Button worden geselecteerd om filtering toe te passen.

Je kunt deze bijvoorbeeld gebruiken als je:

- Filteropties wilt aanbieden die visueel duidelijk zijn
- Selecteerbare labels nodig hebt binnen een interface
- Interactieve badges wilt implementeren voor data-filtering

Je kunt deze bijvoorbeeld toepassen binnen:

- Card components voor het filteren van gerelateerde content
- Data-overzichten waar filtering per label gewenst is

Meerdere Data Badge Buttons kun je binnen een Badge List component plaatsen. (Wanneer je Badge List binnen Card as Link gebruikt is het nodig om de z-index te verhogen zodat de Data Badge Buttons klikbaar worden)

## States

Data Badge Button bevat verschillende states:

- Default: de normale, niet-geselecteerde staat waarin de Data Badge Button beschikbaar is voor interactie
- Default Hover: de state die zichtbaar wordt wanneer gebruikers over de button hoveren
- Pressed: de geselecteerde staat die toont dat de filter actief is
- Pressed Hover: de state die zichtbaar wordt wanneer gebruikers over de button hoveren tijdens actieve filter

Deze twee states zijn nog niet geïmplementeerd:

- Disabled: De inactieve staat wanneer de button tijdelijk niet beschikbaar is (TO DO)
- Active: Wanneer de gebruiker de Data Badge Button inklikt maar nog niet losgelaten heeft en deze nog niet de pressed state krijgt. (TO DO?)
`,M={title:"Data Badge Button",id:"rhc-data-badge-button",component:t,argTypes:{children:{description:"Data Badge Button text content",type:{name:"string",required:!0},table:{category:"Content"},defaultValue:"Label"},pressed:{description:"Of de Data Badge Button pressed/actief is",type:{name:"boolean"},table:{category:"Props"},defaultValue:!1},icon:{description:"Icon om in de Data Badge Button te plaatsen",control:!1,table:{category:"Props"}},iconAlign:{description:"Icon positie - voor of na de tekst (alleen relevant wanneer Icon gebruikt wordt)",control:{type:"select"},options:["start","end"],table:{category:"Props"}},helperText:{description:"Toegankelijke helper tekst voor screen readers",type:{name:"string"}}},args:{children:"Filter Label",pressed:!1},tags:["autodocs"],parameters:{status:{type:"UNSTABLE"},docs:{description:{component:T([z])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/DataBadgeButton.tsx"}},n={args:{children:"Filter Label"}},a={args:{children:"With Icon Before",pressed:!0,icon:e.jsx(c,{}),iconAlign:"start"}},r={args:{children:"With Icon After",pressed:!0,icon:e.jsx(c,{}),iconAlign:"end"}},o={args:{children:"Category",helperText:"Klik om te filteren op categorie"}},s={args:{children:"With Focus"},parameters:{pseudo:{focusVisible:!0}}},i={args:{children:"Hover State"},parameters:{pseudo:{hover:!0}}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(t,{children:"All Items"}),e.jsx(t,{children:"Videos "}),e.jsx(t,{pressed:!0,icon:e.jsx(c,{}),children:"Documents"}),e.jsx(t,{children:"Images"}),e.jsx(t,{helperText:"Filter op recente uploads"})]})};var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Filter Label'
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,m,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'With Icon Before',
    pressed: true,
    icon: <IconCheck />,
    iconAlign: 'start'
  }
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var B,b,f;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'With Icon After',
    pressed: true,
    icon: <IconCheck />,
    iconAlign: 'end'
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var k,D,v;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Category',
    helperText: 'Klik om te filteren op categorie'
  }
}`,...(v=(D=o.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var j,x,I;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'With Focus'
  },
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
}`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var w,y,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Hover State'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(W=(y=i.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var A,C,S;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <DataBadgeButton>All Items</DataBadgeButton>
      <DataBadgeButton>Videos </DataBadgeButton>
      <DataBadgeButton pressed icon={<IconCheck />}>
        Documents
      </DataBadgeButton>
      <DataBadgeButton>Images</DataBadgeButton>
      <DataBadgeButton helperText="Filter op recente uploads"></DataBadgeButton>
    </div>
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const E=["Default","WithIconBefore","WithIconAfter","WithHelperText","FocusVisible","Hover","MultipleButtons"];export{n as Default,s as FocusVisible,i as Hover,d as MultipleButtons,o as WithHelperText,r as WithIconAfter,a as WithIconBefore,E as __namedExportsOrder,M as default};
