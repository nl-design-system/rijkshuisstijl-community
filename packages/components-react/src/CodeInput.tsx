import { TextboxProps } from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef } from 'react';
import { Textbox } from './Textbox';

export const CodeInput = forwardRef(({ ...restProps }: TextboxProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <Textbox {...restProps} className={'rhc-code-input'} maxLength={1} ref={ref} type="text" />;
});

CodeInput.displayName = 'CodeInput';
