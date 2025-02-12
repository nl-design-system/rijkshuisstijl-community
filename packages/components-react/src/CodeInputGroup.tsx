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
  let values = new Array<string>();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const regex = new RegExp(`^${pattern}$`);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.dataset.key);
    const input = event.target.value;

    if (regex.test(input)) {
      values.splice(index, values[index] === undefined ? 0 : 1, input);
    } else if (input === '') {
      values.splice(index, 1, input);
    } else if (index === 0 && input.length > 1 && new RegExp(`^${pattern}{${codeLength}}$`).test(input.trim())) {
      // If the input is pasted or auto-completed and the pattern is correct, fill the inputs
      values = input.split('');
      inputRefs.current.forEach((inputRef, i) => {
        if (inputRef) inputRef.value = values[i];
      });
      delayedFocus(inputRefs.current[codeLength - 1]);
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

    if (regex.test(event.key) && index < codeLength - 1) {
      delayedFocus(inputRefs.current[index + 1]);
    }

    if (event.key === 'Backspace' && index > 0) {
      event.currentTarget.value = '';
      values.splice(index, 1, '');
      delayedFocus(inputRefs.current[index - 1]);
    }
  };

  const delayedFocus = (inputRef: HTMLInputElement | null) => {
    setTimeout(() => {
      if (inputRef) inputRef.focus();
    });
  };

  return (
    <Fieldset ref={ref}>
      <div className={'rhc-code-input-group'}>
        {[...Array(codeLength)].map((_, i) => (
          <CodeInput
            {...restProps}
            aria-label={`${i + 1}/${codeLength}`}
            autoComplete={i === 0 ? 'one-time-code' : 'off'}
            capitalize={capitalize}
            data-key={`${i}`}
            data-testid={`rhc-code-input-${i}`}
            invalid={invalid}
            key={`${i}`}
            maxLength={i === 0 ? codeLength : 1}
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
