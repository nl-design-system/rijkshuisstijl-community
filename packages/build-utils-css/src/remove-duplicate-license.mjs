import { Comment } from 'postcss';
import { isLicenseComment } from './remove-comments.mjs';

const transformCss = (css) => {
  // Add all licenses to a `Map`, to deduplicate the license declarations.
  const licenses = new Map();
  css.walkComments((node) => {
    if (isLicenseComment(node.text)) {
      node.remove();

      if (!licenses.has(node.text)) {
        licenses.set(
          node.text,
          new Comment({
            text: node.text,
            raws: {
              left: node.raws.left,
              right: node.raws.right,
            },
          }),
        );
      }
    }
  });
  /* eslint-disable-next-line unicorn/no-array-for-each */
  licenses.forEach((license) => {
    css.prepend(license);
  });
};
export const mergeLicenseComments = () => {
  return transformCss;
};
