import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, Ref } from 'react';

export interface DataSummaryProps extends HTMLAttributes<HTMLDListElement> {
  appearance?: 'column' | 'row';
  ref?: Ref<HTMLDListElement>;
}

export function DataSummary({
  ref,
  className,
  children,
  appearance = 'column',
  ...restProps
}: PropsWithChildren<DataSummaryProps>) {
  return (
    <dl className={clsx('rhc-data-summary', `rhc-data-summary--${appearance}`, className)} ref={ref} {...restProps}>
      {children}
    </dl>
  );
}
