import clsx from 'clsx';
import { ChangeEvent, ForwardedRef, forwardRef, KeyboardEvent, useRef, useState } from 'react';
import { Textbox } from './Textbox';

export interface CodeInputGroupProps {
  numberOfDigits: number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
}

export const CodeInput = forwardRef(
  ({ numberOfDigits, onChange }: CodeInputGroupProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [values, setValues] = useState<string>('');
    const [isActive, setActive] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
      }
    };

    const handleCodeInputClick = () => {
      inputRef.current?.focus();
    };

    const isInputSelected = (i: number) => {
      return (values.length === i || (values.length === i + 1 && numberOfDigits === i + 1)) && isActive;
    };
    const isInputFilled = (i: number) => values.length > i;
    const isInputInactive = (i: number) => values.length < i;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newInputVal = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters.
      if (newInputVal.length <= numberOfDigits) {
        setValues(newInputVal);
        onChange?.(newInputVal);
      }
    };

    return (
      <div className={'rhc-code-input-container'} ref={ref}>
        <Textbox
          aria-label="code-input"
          className={'rhc-code-input--hidden'}
          ref={inputRef}
          value={values}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setActive(true);
          }}
        />

        <div className={'rhc-code-input-group'}>
          {[...Array(numberOfDigits)].map((_, i) => (
            <Textbox
              aria-label={`code-input-${i}`}
              disabled={!isInputFilled(i) && isInputInactive(i)}
              maxLength={1}
              ref={ref}
              type="text"
              value={values[i] || ''}
              className={clsx('rhc-code-input', {
                'utrecht-textbox--focus-visible': isInputSelected(i),
              })}
              onClick={handleCodeInputClick}
            />
          ))}
        </div>
      </div>
    );
  },
);

CodeInput.displayName = 'CodeInput';
