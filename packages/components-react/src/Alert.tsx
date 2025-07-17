import { Alert as UtrechtAlert, type AlertType as UtrechtAlertType } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';
import { Heading, type HeadingLevel } from './Heading';
import { Icon, type RHCIconID } from './Icon';
import { Paragraph } from './Paragraph';
export interface AlertProps {
  ref?: Ref<HTMLDivElement>;
  type: UtrechtAlertType;
  heading?: ReactNode;
  headingLevel?: HeadingLevel;
  headingAppearanceLevel?: HeadingLevel;
  textContent?: ReactNode;
}
const iconMap: Record<UtrechtAlertType, RHCIconID> = {
  info: 'info-circle',
  ok: 'circle-check',
  warning: 'let-op',
  error: 'alert-circle',
};
const defaultIcon: RHCIconID = 'alert-circle';
export const Alert = ({
  ref,
  type,
  heading,
  headingLevel = 3,
  headingAppearanceLevel = 5,
  textContent,
  children,
  ...restProps
}: PropsWithChildren<AlertProps>) => {
  return (
    <UtrechtAlert className="rhc-alert" ref={ref} type={type} {...restProps}>
      <div
        className={clsx('rhc-alert__icon-container', {
          [`rhc-alert__icon-container--${type}`]: Object.keys(iconMap).includes(type),
        })}
      >
        <Icon icon={iconMap[type] || defaultIcon} />
      </div>
      <div>
        {heading && (
          <Heading appearanceLevel={headingAppearanceLevel} level={headingLevel}>
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
