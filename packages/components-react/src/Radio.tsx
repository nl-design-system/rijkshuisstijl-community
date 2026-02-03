/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import{ RadioButton, type RadioButtonProps } from '@utrecht/component-library-react';
import clsx from 'clsx';

export type { RadioButtonProps } from  '@utrecht/component-library-react';

export const Radio = ( {className, ...restProps } : RadioButtonProps) => {
  return <RadioButton className={clsx('rhc-radio', className)} {...restProps}/>;
};

Radio.displayName = 'Radio';