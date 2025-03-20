import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{ag as b,I as f}from"./index.esm-CU0E2Tpa.js";import{m as j}from"./merge-markdown-566X0PcZ.js";import"./index-4CZSx3OK.js";import"./_commonjsHelpers-D6-XlEtG.js";const g="#fff",m="#154273",d="#154273",v=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community logo component

Omdat buiten officiële Rijksoverheids-media het logo van de Rijksoverheid niet mag worden gebruik, wordt op deze pagina het icoon met id \`nederland-map\` gebruikt, met een witte achtergrond.

## Usage

Als je dit component gebruikt is het goed om met het volgende rekening te houden:

1. Dit component heeft van zichzelf niet het officiële logo van de Rijksoverheid, deze moet dus handmatig worden toegevoegd.
2. Dit component heeft van zichzelf niet de officiële kleuren van het lint van de Rijksoverheid, deze moeten via tokens worden ingesteld.

In de praktijk zal dat er dan zo uit zien:

### CSS

(als je tokens in CSS overschrijft)

\`\`\`css
:root {
  /* Lint kleur */
  --logo-image-background-color: var(--rhc-color-lintblauw-500); /* #154273 */

  /* Embleem kleur */
  --logo-image-color: var(--rhc-color-wit); /* #FFFFFF */
}
\`\`\`

### JSON

(als je tokens in JSON overschrijft)

\`\`\`json
{
  "logo": {
    "image": {
      "background-color": "#154273",
      "color": "#fff"
    }
  }
}
\`\`\`

### TSX/JSX

\`\`\`tsx
import { Logo } from '@rijkshuisstijl-community/components-react';

<Logo
  organisation="Rijkshuisstijl-community"
  subtitle="Een community voor open source componenten"
>
  <img src="embleem.png">
</Logo>
\`\`\`
`,r=({imageBackgroundColor:u,textColor:h,imageIconColor:p,...k})=>o.jsx(o.Fragment,{children:o.jsx(b,{...k,style:{"--rhc-logo-color":h||d,"--rhc-logo-image-background-color":u||g,"--rhc-logo-image-color":p||m},children:o.jsx(f,{icon:"nederland-map"})})}),z={title:"Rijkshuisstijl/Logo",id:"rhc-logo",component:r,args:{organisation:"",subtitle:"",imageBackgroundColor:g,imageIconColor:m,textColor:d},argTypes:{organisation:{name:"organisation",type:{name:"string",required:!0}},subtitle:{name:"subtitle",type:{name:"string",required:!1}},imageBackgroundColor:{name:"--rhc-logo-image-background-color",control:"color",description:"Changes background color of the image",table:{category:"Design tokens"}},imageIconColor:{name:"--rhc-logo-image-color",control:"color",description:"Changes color of the image icon",table:{category:"Design tokens"}},textColor:{name:"--rhc-logo-color",control:"color",description:"Changes text color",table:{category:"Design tokens"}}},parameters:{docs:{description:{component:j([v])}},status:{type:"STABLE"},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."},render:r},e={args:{organisation:"Voorbeeld organisatie"}},n={args:{organisation:"Voorbeeld organisatie",subtitle:"Voorbeeld sub-title"}};var t,i,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    organisation: 'Voorbeeld organisatie'
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,c,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    organisation: 'Voorbeeld organisatie',
    subtitle: 'Voorbeeld sub-title'
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const w=["Default","WithSubtitle"];export{e as Default,n as WithSubtitle,w as __namedExportsOrder,z as default};
