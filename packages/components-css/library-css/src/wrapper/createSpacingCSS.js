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
      const { prefix } = spacing;
      return entries
        .map(([sibling, space]) => {
          const spacing = spaceMap[space];
          return spacing && { component, sibling, spacing, prefix };
        })
        .filter(Boolean);
    })
    .filter((arr) => arr.length);
};

const getSpacingMixins = (components) =>
  components.map((mixinGroup) => {
    const componentName = mixinGroup[0].component;
    const prefix = mixinGroup[0].prefix;

    const mixins = mixinGroup.map(({ component, sibling, spacing }) => {
      return `.${component}:has(+ .${sibling}) {
  --${prefix}-margin-block-end: var(--utrecht-rich-text-${spacing}-margin-block-end);
}`;
    });

    return `@mixin ${componentName} {
  .${componentName}:first-child {
    --${prefix}-margin-block-start: 0;
  }
  ${mixins.join('\n  ')}
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
