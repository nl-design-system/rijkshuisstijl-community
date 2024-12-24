import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as a,h as S,i as _}from"./index.esm-BUwJCeCq.js";import{c as o}from"./clsx-B-dksMZM.js";/* empty css              */import"./index-CAwm5Aak.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-CgpWq_u8.js";const x='<!-- @license CC0-1.0 -->\n\n# Rijkshuisstijl Community Fieldset component\n\n## States\n\n### `disabled`\n\nEen veldengroep waar alle velden `disabled` zijn.\n\n### `invalid`\n\nEen veldengroep die niet valide is. Gebruik deze voor veldengroepen de als geheel gevalideerd worden, bijvoorbeeld een _radio group_ of een _checkbox group_. Gebruik `invalid` niet voor veldengroepen waar één los onderdeel invalide is, bijvoorbeeld: als één van de vragen nog niet beantwoord is.\n\n## HTML\n\nIn HTML kun je de `<fieldset>` en `<legend>` elementen gebruiken, die worden automatisch gekoppeld aan radio buttons en checkboxes.\n\nVoor een radio button group gebruik je `<fieldset role="radiogroup">`, dat maakt het extra duidelijk voor screen reader gebruikers. `<fieldset>` heeft als default `role="group"` en daarom hoef je nooit `<fieldset role="group">` te gebruiken.\n\nDe bijzondere browser default stylesheet voor `<fieldset>` en `<legend>` maken het erg moeilijk om CSS te gebruiken voor deze elementen, maar voor toegankelijkheid is het echter zeker de moeite waarde deze elementen toch te gebruiken. Gebruik de reset CSS voor fieldset en legend om geen default styles te gebruiken.\n\nGebruik een extra `<div>` om je `<fieldset>` zodat het mogelijk wordt een `background-color` of `border` in te stellen, door de browser default stylesheet is dat voor `<fieldset>` niet goed mogelijk.\n\n### HTML attributen\n\nDeze attributen moet je kunnen gebruiken in de fieldset component van een framework:\n\n- `class`\n- [`disabled`](https://html.spec.whatwg.org/multipage/form-elements.html#dom-fieldset-disabled)\n- `hidden`: om een _conditional fieldset_ te maken moet je het `hidden` attribuut kunnen gebruiken\n- `role`: het moet mogelijk zijn `role="radiogroup"` in te stellen\n- `aria-describedby`: gebruik bij voorkeur `<legend>`\n- `aria-invalid`\n\nDeze attributen willen mensen soms ook gebruiken:\n\n- `aria-label`: gebruik bij voorkeur `<legend>`\n- `aria-labelledby`: gebruik bij voorkeur `<legend>`\n- `aria-disabled`: gebruik bij voorkeur `disabled`, behalve als je _client-side form validation_ gebruikt om `aria-disabled` te maken.\n- [`form`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fae-form)\n- [`name`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fe-name)\n\n## CSS\n\nDe tokens voor `background-color` en `border` werken niet goed als alleen een `<fieldset>` wordt gebruikt. Voor goed resultaat is een extra `div` nodig. De HTML component heeft daarom geen goede ondersteuning voor `background-color` en `border`.\n\n## Relevante WCAG regels\n\n- [WCAG eis 1.3.5](https://www.w3.org/TR/WCAG21/#identify-input-purpose)\n  - voor een _radio group_ en _checkbox group_ is fieldset een goede manier het doel van de groep aan te geven\n',s=({children:f,legend:i,legendId:k,section:v,disabled:j,invalid:w,...y})=>e.jsxs(S,{className:o({"utrecht-form-fieldset--section":v}),...y,children:[i&&e.jsx(_,{id:k,className:o({"utrecht-form-fieldset__legend--disabled":j,"utrecht-form-fieldset__legend--invalid":w}),children:i}),f]}),H={title:"Rijkshuisstijl/Fieldset",id:"rhc-fieldset",component:s,args:{disabled:!1,invalid:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Field A"}),e.jsx(a,{label:"Field B"}),e.jsx(a,{label:"Field C"})]}),legend:"Legend"},parameters:{status:{type:"STABLE"},docs:{description:{component:x}}},render:s},n={parameters:{docs:{description:{story:"Markup using the `<fieldset>` and `<legend>` HTML elements, wrapped in `<div>` element to support full CSS styling. Styling via `utrecht-form-fieldset` class name.\n\n  `<fieldset>` is preferred as markup, because the automatic labelling via `<legend>` is less likely to break than `aria-labelledby`, and when the CSS can not be loaded, the visual representation is still clear to the user."}}}},r={args:{disabled:!0},name:"Disabled",parameters:{docs:{description:{story:"Styling via the `.utrecht-form-fieldset__legend--disabled` class names."}}}},t={args:{...n.args,invalid:!0},name:"Invalid",parameters:{docs:{description:{story:"Styling via the `.utrecht-form-fieldset__legend--invalid` class names."}}}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `Markup using the \\`<fieldset>\\` and \\`<legend>\\` HTML elements, wrapped in \\`<div>\\` element to support full CSS styling. Styling via \\`utrecht-form-fieldset\\` class name.\n\n  \\`<fieldset>\\` is preferred as markup, because the automatic labelling via \\`<legend>\\` is less likely to break than \\`aria-labelledby\\`, and when the CSS can not be loaded, the visual representation is still clear to the user.`\n      }\n    }\n  }\n}",...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the \`.utrecht-form-fieldset__legend--disabled\` class names.'
      }
    }
  }
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var p,b,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    invalid: true
  },
  name: 'Invalid',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the \`.utrecht-form-fieldset__legend--invalid\` class names.'
      }
    }
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const I=["Default","Disabled","Invalid"];export{n as Default,r as Disabled,t as Invalid,I as __namedExportsOrder,H as default};
