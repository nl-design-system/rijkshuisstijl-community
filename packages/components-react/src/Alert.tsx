import { Heading, Icon, Paragraph, Alert as UtrechtAlert } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './icons';
const RhcIcon = ({ type }: { type: string }) =>
  type === 'info' ? (
    <InfoIcon></InfoIcon>
  ) : type === 'ok' ? (
    <SuccessIcon></SuccessIcon>
  ) : type === 'warning' ? (
    <WarningIcon></WarningIcon>
  ) : type === 'error' ? (
    <ErrorIcon></ErrorIcon>
  ) : (
    <></>
  );
export interface AlertProps {
  type: 'info' | 'ok' | 'warning' | 'error';
  heading?: string;
  headingLevel?: number;
  textContent?: string;
}
export const Alert = forwardRef(
  (
    { type, children, heading, headingLevel, textContent, ...restProps }: PropsWithChildren<AlertProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <UtrechtAlert ref={ref} role="alert" type={type} {...restProps}>
        {children ? (
          children
        ) : (
          <div className="rhc-alert-container">
            <div
              className={clsx({
                'rhc-alert-container__icon': true,
                'rhc-alert-container__icon-ok': type === 'ok',
                'rhc-alert-container__icon-error': type === 'error',
                'rhc-alert-container__icon-warning': type === 'warning',
                'rhc-alert-container__icon-info': type === 'info',
              })}
            >
              <Icon>
                <RhcIcon type={type} />
              </Icon>
            </div>
            <div>
              <Heading level={headingLevel || 3}>{heading}</Heading>
              <Paragraph>{textContent}</Paragraph>
            </div>
          </div>
        )}
      </UtrechtAlert>
    );
  },
);

Alert.displayName = 'Alert';
