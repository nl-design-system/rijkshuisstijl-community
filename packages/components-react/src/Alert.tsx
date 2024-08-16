import {
  RhcIconError,
  RhcIconInfo,
  RhcIconSuccess,
  RhcIconWarning,
} from '@rijkshuisstijl-community/web-components-react';
import { Heading, Icon, Paragraph, Alert as UAlert } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
const RhcIcon = ({ icon }: { icon: string }) =>
  icon === 'info' ? (
    <RhcIconInfo></RhcIconInfo>
  ) : icon === 'ok' ? (
    <RhcIconSuccess></RhcIconSuccess>
  ) : icon === 'warning' ? (
    <RhcIconWarning></RhcIconWarning>
  ) : icon === 'error' ? (
    <RhcIconError></RhcIconError>
  ) : (
    <></>
  );
interface AlertProps {
  type?: 'info' | 'ok' | 'warning' | 'error';
  icon?: string;
  heading?: string;
  headingLevel?: number;
  textContent?: string;
}
export const Alert = forwardRef(
  (
    { type, children, icon, heading, headingLevel, textContent, ...restProps }: PropsWithChildren<AlertProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <UAlert ref={ref} {...restProps} type={type} role="alert">
        {children ? (
          children
        ) : (
          <div className="rhc-alert-container">
            <div>
              {icon && (
                <Icon
                  className={clsx({
                    'rhc-alert-container__icon': true,
                    'rhc-alert-container__icon-ok': type === 'ok',
                    'rhc-alert-container__icon-error': type === 'error',
                    'rhc-alert-container__icon-warning': type === 'warning',
                    'rhc-alert-container__icon-info': type === 'info',
                  })}
                >
                  <RhcIcon icon={icon} />
                </Icon>
              )}
            </div>
            <div>
              <Heading level={headingLevel || 3}>{heading}</Heading>
              <Paragraph>{textContent}</Paragraph>
            </div>
          </div>
        )}
      </UAlert>
    );
  },
);

Alert.displayName = 'Alert';
