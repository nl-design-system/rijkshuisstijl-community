import { ChangeEvent, forwardRef, KeyboardEvent, PropsWithChildren } from 'react';
import { CodeInput } from './CodeInput';
import { Fieldset } from './Fieldset';

export interface CodeInputGroupProps {
  numberOfDigits: number;
  inValid?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: any) => void;
}

export const CodeInputGroup = forwardRef(
  ({ numberOfDigits, inValid, onChange, ...restProps }: PropsWithChildren<CodeInputGroupProps>) => {
    const valueArr = new Array<string>();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const index = Number(e.target.dataset.key);
      const input = e.target.value;
      const regex = /^[a-zA-Z0-9]$/;

      if (regex.test(input)) {
        valueArr.splice(index, valueArr[index] === undefined ? 0 : 1, input);
      } else if (input === '') {
        valueArr.splice(index, 1, input);
      }

      if (onChange) {
        onChange([...valueArr]);
      }
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      const allowedKeys = /^[a-zA-Z0-9]$/; // Letters and numbers
      if (!allowedKeys.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
        e.preventDefault();
      }
    };

    return (
      <Fieldset>
        <div className={'rhc-code-input-group'}>
          {[...Array(numberOfDigits)].map((_, i) => (
            <CodeInput
              {...restProps}
              data-key={`${i}`}
              invalid={inValid}
              key={`${i}`}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
              onKeyDown={onKeyDownHandler}
            />
          ))}
        </div>
      </Fieldset>
    );
  },
);

CodeInputGroup.displayName = 'CodeInputGroup';
