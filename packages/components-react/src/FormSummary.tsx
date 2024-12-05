import { forwardRef, HTMLAttributes } from 'react';

export interface FormSummaryProps extends HTMLAttributes<HTMLDivElement> {
  'aria-label': string;
}

export const FormSummary = forwardRef<HTMLDivElement, FormSummaryProps>((props, ref) => {
  return (
    <p data-testid="paragraph" ref={ref} {...props}>
      Hello world!
    </p>
  );
});

FormSummary.displayName = 'FormSummary';
