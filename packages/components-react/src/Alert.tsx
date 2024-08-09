import {
  RhcIconError,
  RhcIconInfo,
  RhcIconSuccess,
  RhcIconWarning,
} from '@rijkshuisstijl-community/web-components-react';
import { Heading, Icon, Paragraph, Alert as UAlert } from '@utrecht/component-library-react/dist/css-module';
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
export const Alert = forwardRef(
  (
    { type, icon, heading, headingLevel, textContent, ...restProps }: PropsWithChildren<any>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <UAlert ref={ref} {...restProps} type={type} role="alert">
        <div
          style={{
            display: 'flex',
          }}
        >
          <div>
            {icon && (
              <Icon
                style={{
                  color:
                    type === 'ok'
                      ? 'var(--rhc-color-feedback-success-default)'
                      : type === 'error'
                        ? 'var(--rhc-color-feedback-error-default)'
                        : type === 'warning'
                          ? 'var(--rhc-color-feedback-warning-default)'
                          : 'var(--rhc-color-feedback-info-default)',
                  inlineSize: 'var(--rhc-space-200)',
                  paddingInlineEnd: 'var(--rhc-space-100)',
                }}
              >
                <RhcIcon icon={icon} />
              </Icon>
            )}
          </div>
          <div>
            <Heading level={headingLevel}>{heading}</Heading>
            <Paragraph>{textContent}</Paragraph>
          </div>
        </div>
      </UAlert>
    );
  },
);

Alert.displayName = 'Alert';
