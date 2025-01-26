import fs from 'fs';
import path from 'path';
const spacingMatrix = JSON.parse(fs.readFileSync('./src/wrapper/spacing-matrix.json'));

const spaceMap = {
  NVT: undefined,
  Onbekenden: 'stranger',
  Kennissen: 'acquaintance',
  Vrienden: 'friend',
  Besties: 'best-friend',
  Kind: 'confidant',
};

const getSpacings = (spacingMatrix) => {
  return spacingMatrix
    .map((spacing) => {
      const entries = Object.entries(spacing);
      const [, component] = entries.shift();
      return entries
        .map(([sibling, space]) => {
          const spacing = spaceMap[space];
          return spacing && { component, sibling, spacing };
        })
        .filter(Boolean);
    })
    .filter((arr) => arr.length);
};
const prefixMap = spacingMatrix.map(({ prefix }) => prefix);
const getSpacingMixins = (components) =>
  components.map((mixinGroup, index) => {
    const componentName = mixinGroup[0].component;
    const prefix = prefixMap[index];
    console.log(prefix);
    const mixins = mixinGroup.map(({ component, sibling, spacing }) => {
      if (component.includes('heading')) {
        return `.${component}:has(+ .${sibling}) {
  --${prefix}-margin-block-end: var(--utrecht-rich-text-${spacing}-margin-block-end);
}`;
      } else {
        return `.${component}:has(+ .${sibling}) {
  --${componentName}-margin-block-end: var(--utrecht-rich-text-${spacing}-margin-block-end);
}`;
      }
    });
    return `@mixin ${componentName} {
  .${componentName}:first-child {
    --${componentName}-margin-block-start: 0;
  }
 ${mixins.join(';\n')}
}`;
  });

const getRichTextStyles = (components) => `
/**
 * @license EUPL-1.2
 * Copyright (c) 2024-2025 Gemeente Utrecht
 * Copyright (c) 2024-2025 Frameless B.V.
 */

@use "./mixin";

.rhc-margin-block-end-wrapper {
--utrecht-space-around: 1;
${components.map((mixinGroup) => `@include mixin.${mixinGroup[0].component}`).join(';\n')}
}`;

const spacings = getSpacings(spacingMatrix);

fs.writeFileSync(path.resolve('./src/wrapper/_mixin.scss'), getSpacingMixins(spacings).join('\n'), {
  override: true,
});

fs.writeFileSync(path.resolve('./src/wrapper/index.scss'), getRichTextStyles(spacings), {
  override: true,
});
