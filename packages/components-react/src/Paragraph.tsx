/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */
import {
  Paragraph as NlParagraph,
  type ParagraphPurpose as NlParagraphPurpose,
} from '@nl-design-system-candidate/paragraph-react';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  purpose?: NlParagraphPurpose;
}

export const Paragraph = ({ className, ...restProps }: ParagraphProps) => {
  return <NlParagraph className={clsx('rhc-paragraph', className)} {...restProps} />;
};

Paragraph.displayName = 'Paragraph';
