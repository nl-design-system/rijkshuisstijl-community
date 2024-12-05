import { forwardRef, HTMLAttributes } from 'react';
import { Heading } from './Heading';

export interface FormSummaryProps extends HTMLAttributes<HTMLDivElement> {
  'aria-label': string;
  'list-item-key': string;
  'list-item-value': string;
  'list-item-action'?: string;
}

export const FormSummary = forwardRef<HTMLDivElement, FormSummaryProps>((props, ref) => {
  return (
    <>
      <Heading level={5}>Hello world</Heading>
      <p data-testid="paragraph" ref={ref} {...props}>
        Hello world!
      </p>
    </>
  );
});

FormSummary.displayName = 'FormSummary';
