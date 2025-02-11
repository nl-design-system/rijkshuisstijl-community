import { ChangeEvent, ComponentPropsWithRef, KeyboardEvent, PropsWithChildren, useRef } from 'react';
import { CodeInput, CodeInputProps } from './CodeInput';
import { Fieldset } from './Fieldset';

export interface CodeInputGroupProps extends Omit<CodeInputProps, 'ref' | 'onChange'> {
  numberOfDigits: number;
  inValid?: boolean;
  // TODO: figure out why disabling is needed; works fine in editor but not in lint script for some reason
  // eslint-disable-next-line no-unused-vars
  onChange?: (code: string) => void;
  ref?: ComponentPropsWithRef<typeof Fieldset>['ref'];
}

export const CodeInputGroup = ({
  children,
  numberOfDigits,
  inValid,
  onChange,
  ref,
  ...restProps
}: PropsWithChildren<CodeInputGroupProps>) => {
  const values = new Array<string>();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.dataset.key);
    const input = event.target.value;
    const regex = /^[a-zA-Z0-9]$/;

    if (regex.test(input)) {
      values.splice(index, values[index] === undefined ? 0 : 1, input);
    } else if (input === '') {
      values.splice(index, 1, input);
    }

    if (event.target.value && index < numberOfDigits - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (onChange) {
      onChange(values.join(''));
    }
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    const allowedKeys = /^[a-zA-Z0-9]$/; // Letters and numbers
    if (!allowedKeys.test(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
      event.preventDefault();
    }
    if (event.key === 'Backspace' && index > 0) {
      event.currentTarget.value = '';
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Fieldset ref={ref}>
      <div className={'rhc-code-input-group'}>
        {[...Array(numberOfDigits)].map((_, i) => (
          <CodeInput
            {...restProps}
            data-key={`${i}`}
            data-testid={`rhc-code-input-${i}`}
            invalid={inValid}
            key={`${i}`}
            ref={(el) => (inputRefs.current[i] = el)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
            onFocus={(e) => e.target.select()}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => onKeyDownHandler(e, i)}
          />
        ))}
        {children}
      </div>
    </Fieldset>
  );
};

CodeInputGroup.displayName = 'CodeInputGroup';
