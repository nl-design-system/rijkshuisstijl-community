import { forwardRef, HTMLAttributes } from 'react';
import { Heading } from './Heading';

export interface SummaryListProps extends HTMLAttributes<HTMLDivElement> {
  'aria-label': string;
  'list-item-key': string;
  'list-item-value': string;
  'list-item-action'?: string;
}

export const SummaryList = forwardRef<HTMLDivElement, SummaryListProps>((props) => {
  return (
    <>
      <SummaryListItem
        aria-label="test"
        list-item-action={props['list-item-action']}
        list-item-key={props['list-item-key']}
        list-item-value={props['list-item-value']}
      />
      <SummaryListItem
        aria-label="test"
        list-item-key={props['list-item-key']}
        list-item-value={props['list-item-value']}
      />
    </>
  );
});

export const SummaryListItem = forwardRef<HTMLDivElement, SummaryListProps>((props, ref) => {
  return (
    <>
      <div className="rhc-summary-list-item">
        <Heading data-testid="list-item-key" level={5}>
          {props['list-item-key']}
        </Heading>
        <span className="rhc-summary-list-item__key" data-testid="list-item-value" ref={ref} {...props}>
          {props['list-item-value']}
        </span>

        {props['list-item-action'] && (
          <a className="rhc-summary-list-item__action" href="#">
            {props['list-item-action']}
          </a>
        )}
      </div>
    </>
  );
});

SummaryList.displayName = 'SummaryList';
SummaryListItem.displayName = 'SummaryListItem';
