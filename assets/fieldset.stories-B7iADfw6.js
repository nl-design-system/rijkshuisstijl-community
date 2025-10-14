import{j as e}from"./iframe-CLJWzYSL.js";import{m as _}from"./merge-markdown-D8Eslh9D.js";import{F as y}from"./Fieldset-dJFUM73T.js";import{F as n}from"./FormFieldTextInput-CqC9bn0U.js";import"./preload-helper-Dp1pzeXC.js";import"./index-GfqW3cb2.js";const I='<!-- @license CC0-1.0 -->\n\n# Rijkshuisstijl Community Fieldset component\n\n## States\n\n### `disabled`\n\nEen veldengroep waar alle velden `disabled` zijn.\n\n### `invalid`\n\nEen veldengroep die niet valide is. Gebruik deze voor veldengroepen de als geheel gevalideerd worden, bijvoorbeeld een _radio group_ of een _checkbox group_. Gebruik `invalid` niet voor veldengroepen waar één los onderdeel invalide is, bijvoorbeeld: als één van de vragen nog niet beantwoord is.\n\n## HTML\n\nIn HTML kun je de `<fieldset>` en `<legend>` elementen gebruiken, die worden automatisch gekoppeld aan radio buttons en checkboxes.\n\nVoor een radio button group gebruik je `<fieldset role="radiogroup">`, dat maakt het extra duidelijk voor screen reader gebruikers. `<fieldset>` heeft als default `role="group"` en daarom hoef je nooit `<fieldset role="group">` te gebruiken.\n\nDe bijzondere browser default stylesheet voor `<fieldset>` en `<legend>` maken het erg moeilijk om CSS te gebruiken voor deze elementen, maar voor toegankelijkheid is het echter zeker de moeite waarde deze elementen toch te gebruiken. Gebruik de reset CSS voor fieldset en legend om geen default styles te gebruiken.\n\nGebruik een extra `<div>` om je `<fieldset>` zodat het mogelijk wordt een `background-color` of `border` in te stellen, door de browser default stylesheet is dat voor `<fieldset>` niet goed mogelijk.\n\n### HTML attributen\n\nDeze attributen moet je kunnen gebruiken in de fieldset component van een framework:\n\n- `class`\n- [`disabled`](https://html.spec.whatwg.org/multipage/form-elements.html#dom-fieldset-disabled)\n- `hidden`: om een _conditional fieldset_ te maken moet je het `hidden` attribuut kunnen gebruiken\n- `role`: het moet mogelijk zijn `role="radiogroup"` in te stellen\n- `aria-describedby`: gebruik bij voorkeur `<legend>`\n- `aria-invalid`\n\nDeze attributen willen mensen soms ook gebruiken:\n\n- `aria-label`: gebruik bij voorkeur `<legend>`\n- `aria-labelledby`: gebruik bij voorkeur `<legend>`\n- `aria-disabled`: gebruik bij voorkeur `disabled`, behalve als je _client-side form validation_ gebruikt om `aria-disabled` te maken.\n- [`form`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fae-form)\n- [`name`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fe-name)\n\n## CSS\n\nDe tokens voor `background-color` en `border` werken niet goed als alleen een `<fieldset>` wordt gebruikt. Voor goed resultaat is een extra `div` nodig. De HTML component heeft daarom geen goede ondersteuning voor `background-color` en `border`.\n\n## Voorbeelden met verkeerde implementatie\n\n- Verkeerd gebruik van niet ondersteunde elementen\n\n```jsx\n// Verkeerd\n<Fieldset>\n  <span>Ongeldig element</span>\n</Fieldset>\n\n// Correct\n<Fieldset legend="Persoonlijke gegevens">\n  <input type="text" placeholder="Naam" />\n</Fieldset>\n```\n\n- Vergeten van een `legend`\n\n```jsx\n// Verkeerd\n<Fieldset>\n  <input type="checkbox" />\n</Fieldset>\n\n// Correct\n<Fieldset legend="Voorwaarden">\n  <input type="checkbox" />\n</Fieldset>\n```\n\n## Relevante WCAG regels\n\n- [WCAG eis 1.3.5](https://www.w3.org/TR/WCAG21/#identify-input-purpose)\n  - voor een _radio group_ en _checkbox group_ is fieldset een goede manier het doel van de groep aan te geven\n',B={title:"Fieldset",id:"rhc-fieldset",component:y,args:{disabled:!1,invalid:!1,legend:"Legend"},parameters:{status:{type:"STABLE"},docs:{description:{component:_([I])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=16708-112&p=f&t=eVuza9JCLr8AObbU-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Fieldset.tsx",nldesignsystem:"https://nldesignsystem.nl/fieldset",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met alleen overgeschreven design tokens van de Rijkshuisstijl Community."}},i={args:{disabled:!1,invalid:!1,legend:"Legend",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Field A"}),e.jsx(n,{label:"Field B"}),e.jsx(n,{label:"Field C"})]})},render:l=>e.jsxs(y,{disabled:l.disabled,legend:l.legend,children:[e.jsx(n,{disabled:l.disabled,invalid:l.invalid,label:"Field A"}),e.jsx(n,{disabled:l.disabled,invalid:l.invalid,label:"Field B"}),e.jsx(n,{disabled:l.disabled,invalid:l.invalid,label:"Field C"})]})},d={args:{...i.args,disabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{disabled:!0,label:"Field A"}),e.jsx(n,{disabled:!0,label:"Field B"}),e.jsx(n,{disabled:!0,label:"Field C"})]})},name:"Invalid",parameters:{docs:{description:{story:"Styling via the `.utrecht-form-fieldset__legend--disabled` class names."}}}},a={args:{...i.args,disabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{disabled:!0,label:"Field A"}),e.jsx(n,{label:"Field B"}),e.jsx(n,{label:"Field C"})]})},name:"Partially Invalid",parameters:{docs:{description:{story:"Styling via the `.utrecht-form-fieldset__legend--disabled` class names."}}}},r={args:{...i.args,invalid:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{invalid:!0,label:"Field A"}),e.jsx(n,{invalid:!0,label:"Field B"}),e.jsx(n,{invalid:!0,label:"Field C"})]})},parameters:{docs:{description:{story:"Styling via the `.utrecht-form-fieldset__legend--invalid` class names."}}}},t={args:{...i.args,invalid:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{invalid:!0,label:"Field A"}),e.jsx(n,{label:"Field B"}),e.jsx(n,{label:"Field C"})]})},parameters:{docs:{description:{story:"Styling via the `.utrecht-form-fieldset__legend--invalid` class names."}}}};var s,o,m;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    disabled: false,
    invalid: false,
    legend: 'Legend',
    children: <>
        <FormFieldTextInput label="Field A" />
        <FormFieldTextInput label="Field B" />
        <FormFieldTextInput label="Field C" />
      </>
  },
  render: args => <Fieldset disabled={args.disabled} legend={args.legend}>
      <FormFieldTextInput disabled={args.disabled} invalid={args.invalid} label="Field A" />
      <FormFieldTextInput disabled={args.disabled} invalid={args.invalid} label="Field B" />
      <FormFieldTextInput disabled={args.disabled} invalid={args.invalid} label="Field C" />
    </Fieldset>
}`,...(m=(o=i.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var g,b,u;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    children: <>
        <FormFieldTextInput disabled label="Field A" />
        <FormFieldTextInput disabled label="Field B" />
        <FormFieldTextInput disabled label="Field C" />
      </>
  },
  name: 'Invalid',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the \`.utrecht-form-fieldset__legend--disabled\` class names.'
      }
    }
  }
}`,...(u=(b=d.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var c,p,F;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    children: <>
        <FormFieldTextInput disabled label="Field A" />
        <FormFieldTextInput label="Field B" />
        <FormFieldTextInput label="Field C" />
      </>
  },
  name: 'Partially Invalid',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the \`.utrecht-form-fieldset__legend--disabled\` class names.'
      }
    }
  }
}`,...(F=(p=a.parameters)==null?void 0:p.docs)==null?void 0:F.source}}};var v,h,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    invalid: true,
    children: <>
        <FormFieldTextInput invalid label="Field A" />
        <FormFieldTextInput invalid label="Field B" />
        <FormFieldTextInput invalid label="Field C" />
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via the \`.utrecht-form-fieldset__legend--invalid\` class names.'
      }
    }
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,x,j;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    invalid: true,
    children: <>
        <FormFieldTextInput invalid label="Field A" />
        <FormFieldTextInput label="Field B" />
        <FormFieldTextInput label="Field C" />
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via the \`.utrecht-form-fieldset__legend--invalid\` class names.'
      }
    }
  }
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const z=["Default","Disabled","PartiallyDisabled","Invalid","PartiallyInvalid"];export{i as Default,d as Disabled,r as Invalid,a as PartiallyDisabled,t as PartiallyInvalid,z as __namedExportsOrder,B as default};
