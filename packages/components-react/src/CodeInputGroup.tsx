import { ChangeEvent, ComponentPropsWithRef, KeyboardEvent, PropsWithChildren, useRef } from 'react';
import { CodeInput, CodeInputProps } from './CodeInput';
import { Fieldset } from './Fieldset';

export interface CodeInputGroupProps extends Omit<CodeInputProps, 'ref' | 'onChange'> {
  codeLength: number;
  invalid?: boolean;
  // TODO: figure out why disabling is needed; works fine in editor but not in lint script for some reason
  // eslint-disable-next-line no-unused-vars
  onChange?: (code: string) => void;
  ref?: ComponentPropsWithRef<typeof Fieldset>['ref'];
}

export const CodeInputGroup = ({
  children,
  codeLength,
  invalid,
  onChange,
  pattern = '[a-zA-Z0-9]',
  capitalize = false,
  ref,
  ...restProps
}: PropsWithChildren<CodeInputGroupProps>) => {
  const values = new Array<string>();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const regex = new RegExp(`^${pattern}$`);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.dataset.key);
    const input = event.target.value;

    if (regex.test(input)) {
      values.splice(index, values[index] === undefined ? 0 : 1, input);
    } else if (input === '') {
      values.splice(index, 1, input);
    }

    if (event.target.value && index < codeLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (onChange) {
      const processedValue = capitalize ? values.join('').toUpperCase() : values.join('');
      onChange(processedValue);
    }
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (!regex.test(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
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
        {[...Array(codeLength)].map((_, i) => (
          <CodeInput
            {...restProps}
            aria-label={`${i + 1}/${codeLength}`}
            capitalize={capitalize}
            data-key={`${i}`}
            data-testid={`rhc-code-input-${i}`}
            invalid={invalid}
            key={`${i}`}
            pattern={pattern}
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
