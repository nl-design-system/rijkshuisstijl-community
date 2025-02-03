import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{n as g,V as u,I as h,t as I}from"./index.esm-T83ddQPv.js";import{i as j}from"./icon-set-CEqqac1X.js";import{m as f}from"./merge-markdown-BtgmYwh_.js";/* empty css              */import"./index-C4jjA_3H.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-DKyXVfeP.js";import"./clsx-B-dksMZM.js";import"./heading-BJGfgtDt.js";import"./index-CgpWq_u8.js";/**
 * @license @tabler/icons-react v3.28.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var k=g("outline","brand-x","IconBrandX",[["path",{d:"M4 4l11.733 16h4.267l-11.733 -16z",key:"svg-0"}],["path",{d:"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772",key:"svg-1"}]]);const v=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community icon component

Dit component is een wrapper om een React Node SVG element. Door dit component te gebruiken heeft deze constant dezelfde styling en grootte.

# Usage

Dit component kan op verschillende manieren worden gebruikt. Hieronder staan de verschillende manieren beschreven, beginnend met de makkelijkste manier.

- Standaard worden is er de optie om een icon property mee te geven met dit component, wat staat voor een van de ondersteunde icon IDs uit de [icon set](?path=/docs/rhc-templates-default-icon-set--docs) van de Rijkshuisstijl Community.

\`\`\`tsx
import { Icon } from from '@rijkshuisstijl-community/components-react';

<Icon icon="home" />
\`\`\`

- Als tweede optie is het mogelijk om een SVG element/React Node mee te geven, dit hoeft dus geen icoon uit een icon set te zijn.

\`\`\`tsx
import { Icon } from from '@rijkshuisstijl-community/components-react';
import { IconBrandX } from '@tabler/icons-react';

<Icon><IconBrandX /></Icon>
\`\`\`

- Als je veel eigen icons hebt kan je eigen icons toevoegen aan de icon set. Als deze hetzelfde icon ID hebben als een bestaande uit de [Rijkshuisstijl community icon set](?path=/docs/rhc-templates-default-icon-set--docs), wordt deze overschreven met je eigen icon.

\`\`\`tsx
import { Icon, registerIconSet } from from '@rijkshuisstijl-community/components-react';
import { MijnEigenIcon, NogEenIcon, EnEenDerdeIcon } from 'mijn-icon-package';

registerIconSet({
  'mijn-eigen-icon': <MijnEigenIcon />,
  'nog-een-icon': <NogEenIcon />,
  'en-een-derde-icon': <EnEenDerdeIcon />,
});

<Icon icon="mijn-eigen-icon" />
<Icon icon="nog-een-icon" />
<Icon icon="en-een-derde-icon" />

\`\`\`
`;u(j);const A={title:"Rijkshuisstijl/Icon",id:"rhc-icon",component:h,argTypes:{icon:{control:{type:"select"},options:Object.keys(I())}},parameters:{docs:{description:{component:f([v])}},status:{type:"STABLE"},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met extra functionaliteit voor het gebruiken van de iconenset van de Rijkshuisstijl Community."}},e={args:{icon:"home"}},n={args:{children:l.jsx(k,{})}},o={args:{icon:"nl-flag"}};var t,i,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    icon: 'home'
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var s,c,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <IconBrandX />
  }
}`,...(a=(c=n.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: 'nl-flag'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const N=["Default","CustomIcon","FromDifferentIconSet"];export{n as CustomIcon,e as Default,o as FromDifferentIconSet,N as __namedExportsOrder,A as default};
