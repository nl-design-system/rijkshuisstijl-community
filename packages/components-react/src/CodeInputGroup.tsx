import { ChangeEvent, ComponentPropsWithRef, KeyboardEvent, PropsWithChildren, useRef } from 'react';
import { CodeInput } from './CodeInput';
import { Fieldset } from './Fieldset';

export interface CodeInputGroupProps {
  numberOfDigits: number;
  inValid?: boolean;
  // TODO: figure out why disabling is needed; works fine in editor but not in lint script for some reason
  // eslint-disable-next-line no-unused-vars
  onChange?: (currentValue: string[]) => void;
  ref?: ComponentPropsWithRef<typeof Fieldset>['ref'];
}

export const CodeInputGroup = ({
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
      onChange([...values]);
    }
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    const allowedKeys = /^[a-zA-Z0-9]$/; // Letters and numbers
    if (!allowedKeys.test(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
      event.preventDefault();
    }
    if (event.key === 'Backspace' && !event.currentTarget.value && index > 0) {
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
            invalid={inValid}
            key={`${i}`}
            ref={(el) => (inputRefs.current[i] = el)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => onKeyDownHandler(e, i)}
          />
        ))}
      </div>
    </Fieldset>
  );
};

CodeInputGroup.displayName = 'CodeInputGroup';
