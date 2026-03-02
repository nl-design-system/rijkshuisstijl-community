/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { RadioButton } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ComponentProps } from 'react';

export type { RadioButtonProps as RadioProps } from '@utrecht/component-library-react';

export const Radio = ({ className, ...restProps }: ComponentProps<typeof RadioButton>) => {
  return <RadioButton className={clsx('rhc-radio', className)} {...restProps} />;
};

Radio.displayName = 'Radio';
