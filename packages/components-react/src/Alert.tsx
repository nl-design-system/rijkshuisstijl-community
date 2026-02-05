/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */

import {
  Alert as UtrechtAlert,
  AlertProps as UtrechtAlertProps,
  type AlertType as UtrechtAlertType,
} from '@utrecht/component-library-react';
import { PropsWithChildren } from 'react';
import { Icon, type RHCIconID } from './Icon';
export interface AlertProps extends UtrechtAlertProps {
  type?: UtrechtAlertType;
  icon?: RHCIconID;
}

const iconMap: Record<UtrechtAlertType, RHCIconID> = {
  info: 'info-circle',
  ok: 'circle-check',
  warning: 'let-op',
  error: 'alert-circle',
};

export const Alert = ({ type, icon, ...restProps }: PropsWithChildren<AlertProps>) => {
  const rhcIcon = icon ? <Icon icon={icon} /> : type ? <Icon icon={iconMap[type]} /> : undefined;
  return <UtrechtAlert {...restProps} icon={rhcIcon} type={type} />;
};

Alert.displayName = 'Alert';
