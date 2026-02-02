import{RadioProps, Radio as RadioButton } from '@utrecht/component-library-react';
import clsx from 'clsx';

export type { RadioButtonProps } from  '@utrecht/component-library-react';


export const Radio = ({ className, ...restProps }: RadioProps) => {
  return <RadioButton className={clsx('rhc-radio', className)} {...restProps} />;
};

Radio.displayName = 'Radio';