/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Textbox , type TextboxProps as TextInputProps} from '@utrecht/component-library-react';
import clsx from 'clsx';

export type { TextboxProps as TextInputProps } from '@utrecht/component-library-react';

export const TextInput= ({className, ...restProps } : TextInputProps ) => {
    return <Textbox className={clsx('rhc-text-input', className )} {...restProps} />;
};

TextInput.displayName = 'TextInput';
