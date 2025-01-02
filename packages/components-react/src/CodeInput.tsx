import clsx from 'clsx';
import { ChangeEvent, ForwardedRef, forwardRef, KeyboardEvent, PropsWithChildren, useRef, useState } from 'react';
import { TextInput } from './TextInput';
import { VisuallyHidden } from './VisuallyHidden';

export interface CodeInputGroupProps {
  numberOfDigits: number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
  inValid?: boolean;
  privateMode?: boolean;
}

export const CodeInput = forwardRef(
  (
    { numberOfDigits, onChange, inValid, privateMode, ...restProps }: PropsWithChildren<CodeInputGroupProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
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

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newInputVal = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters.
      if (newInputVal.length <= numberOfDigits) {
        setValues(newInputVal);
        onChange?.(newInputVal);
      }
    };

    return (
      <div className={'rhc-code-input-container'} data-testid={'code-input-container'} ref={ref} {...restProps}>
        <VisuallyHidden>
          <TextInput
            aria-label="code-input"
            autoComplete="one-time-code"
            data-testid={'hidden-input'}
            inputMode="numeric"
            maxLength={numberOfDigits}
            ref={inputRef}
            value={values}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              setActive(false);
            }}
            onFocus={() => {
              setActive(true);
            }}
            onSelect={(e) => {
              const val = e.currentTarget.value; // currentTarget is strongly typed
              e.currentTarget.setSelectionRange(val.length, val.length);
            }}
          />
        </VisuallyHidden>

        <div className={'rhc-code-input-group'}>
          {[...Array(numberOfDigits)].map((_, i) => (
            <TextInput
              aria-label={`code-input-${i}`}
              data-testid={`input-item`}
              invalid={inValid}
              key={`input-${i}`}
              maxLength={1}
              ref={ref}
              tabIndex={-1}
              type="text"
              value={privateMode && values[i] ? '*' : values[i] || ''}
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
