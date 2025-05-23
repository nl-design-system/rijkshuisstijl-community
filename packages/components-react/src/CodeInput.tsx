import { TextboxProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef } from 'react';
import { TextInput } from './TextInput';

export interface CodeInputProps extends TextboxProps {
  capitalize?: boolean;
  ref: ForwardedRef<HTMLInputElement>;
}

export const CodeInput = ({ capitalize = false, ref, className, ...restProps }: CodeInputProps) => {
  return (
    <TextInput
      {...restProps}
      className={clsx('rhc-code-input', { 'rhc-code-input--capitalized': capitalize }, className)}
      ref={ref}
      type="text"
    />
  );
};

CodeInput.displayName = 'CodeInput';
