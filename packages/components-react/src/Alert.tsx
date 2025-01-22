import { Heading, Paragraph, Alert as UtrechtAlert } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, RefObject } from 'react';
import { Icon } from './Icon';

export interface AlertProps {
  ref?: RefObject<HTMLDivElement>;
  type: 'info' | 'ok' | 'warning' | 'error';
  heading?: ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  textContent?: ReactNode;
}
export const Alert = ({
  ref,
  type,
  heading,
  headingLevel,
  textContent,
  children,
  ...restProps
}: PropsWithChildren<AlertProps>) => {
  return (
    <UtrechtAlert className="rhc-alert" ref={ref} type={type} {...restProps}>
      <div
        className={clsx('rhc-alert__icon-container', {
          'rhc-alert__icon-container--ok': type === 'ok',
          'rhc-alert__icon-container--error': type === 'error',
          'rhc-alert__icon-container--warning': type === 'warning',
          'rhc-alert__icon-container--info': type === 'info',
        })}
      >
        <Icon
          icon={
            type === 'info'
              ? 'info-circle'
              : type === 'ok'
                ? 'circle-check'
                : type === 'warning'
                  ? 'let-op'
                  : 'alert-circle'
          }
        />
      </div>
      <div>
        {heading && (
          <Heading appearance="utrecht-heading-5" level={headingLevel || 3}>
            {heading}
          </Heading>
        )}
        <Paragraph>{textContent}</Paragraph>
        {children}
      </div>
    </UtrechtAlert>
  );
};

Alert.displayName = 'Alert';
