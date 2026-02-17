/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Alert } from '@rijkshuisstijl-community/alert-react';
import clsx from 'clsx';
import { DetailsHTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react';
import { Icon } from './Icon';
import { Paragraph } from './Paragraph';

export interface ToggletipProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  ref?: Ref<HTMLDetailsElement>;
}

const ToggletipContent = ({ children, ref }: { children: ReactNode; ref?: Ref<HTMLDivElement> }) => {
  return (
    <div className="rhc-toggletip__content" ref={ref}>
      <Alert className="rhc-toggletip__alert" type="info">
        <Paragraph>{children}</Paragraph>
      </Alert>
    </div>
  );
};

ToggletipContent.displayName = 'ToggletipContent';

export const Toggletip = ({ children, className, ...restProps }: PropsWithChildren<ToggletipProps>) => {
  return (
    <details className={clsx('rhc-toggletip', className)} {...restProps}>
      <summary aria-label="tooltip-content" className="rhc-toggletip__summary rhc-toggletip__button">
        <Icon className="rhc-toggletip__icon" icon="info" />
      </summary>
      <ToggletipContent>{children}</ToggletipContent>
    </details>
  );
};

Toggletip.displayName = 'Toggletip';
