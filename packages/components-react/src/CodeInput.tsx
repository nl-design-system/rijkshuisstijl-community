import { TextboxProps } from '@utrecht/component-library-react';
import { ForwardedRef } from 'react';
import { TextInput } from './TextInput';

export interface CodeInputProps extends TextboxProps {
  ref: ForwardedRef<HTMLInputElement>;
}

export const CodeInput = ({ ref, ...restProps }: CodeInputProps) => {
  return <TextInput {...restProps} className={'rhc-code-input'} maxLength={1} ref={ref} type="text" />;
};

CodeInput.displayName = 'CodeInput';
