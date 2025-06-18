import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, Ref } from 'react';
import { Link } from './Link';

export interface DataSummaryItemProps extends HTMLAttributes<HTMLDivElement> {
  itemKey: string;
  itemValue: string;
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop';
  actionLabel?: string;
  ref?: Ref<HTMLDivElement>;
}

export function DataSummaryItem({
  ref,
  className,
  itemKey,
  itemValue,
  href,
  target = '_self',
  actionLabel,
  ...restProps
}: PropsWithChildren<DataSummaryItemProps>) {
  return (
    <div className={clsx('rhc-data-summary__item', className)} ref={ref} {...restProps}>
      <dt className="rhc-data-summary__item-key">{itemKey}</dt>
      <dd className="rhc-data-summary__item-value">{itemValue}</dd>
      {href && target && actionLabel && (
        <Link className="rhc-data-summary__item-action" href={href} target={target}>
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
