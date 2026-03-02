/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { type CheckboxProps, Checkbox as UtrechtCheckbox } from '@utrecht/component-library-react';
import clsx from 'clsx';

export type { CheckboxProps } from '@utrecht/component-library-react';

export const Checkbox = (props: CheckboxProps) => {
  return <UtrechtCheckbox {...props} className={clsx('rhc-checkbox', props['className'])} />;
};
