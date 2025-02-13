import type { ParagraphPurpose } from '@nl-design-system-candidate/paragraph-react';
import { HTMLAttributes } from 'react';
export { Paragraph } from '@nl-design-system-candidate/paragraph-react';
export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  purpose?: ParagraphPurpose;
}
