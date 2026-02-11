/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Textarea as UtrechtTextArea } from '@utrecht/component-library-react'; 
import { TextareaProps } from '@utrecht/component-library-react';
import clsx from 'clsx';

export type { TextareaProps } from '@utrecht/component-library-react'; 
export const Textarea = ({ className,  ...restProps } : TextareaProps ) => {
    return <UtrechtTextArea className = {clsx('rhc-textarea', className )}{...restProps} />;
};

Textarea.displayName = 'Textarea';
