import { type AlertType, Alert as UtrechtAlert } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';
import { Icon, type RHCIconID } from './Icon';
export interface AlertProps {
  ref?: Ref<HTMLDivElement>;
  type: AlertType;
}
const iconMap: Record<AlertType, RHCIconID> = {
  info: 'info-circle',
  ok: 'circle-check',
  warning: 'let-op',
  error: 'alert-circle',
};
const defaultIcon: RHCIconID = 'alert-circle';
export const Alert = ({ ref, type, children, ...restProps }: PropsWithChildren<AlertProps>) => {
  return (
    <UtrechtAlert className="rhc-alert" ref={ref} type={type} {...restProps}>
      <div className={clsx('rhc-alert__icon-container', `rhc-alert__icon-container--${type}`)}>
        <Icon icon={iconMap[type] || defaultIcon} />
      </div>
      <div>{children}</div>
    </UtrechtAlert>
  );
};

Alert.displayName = 'Alert';
