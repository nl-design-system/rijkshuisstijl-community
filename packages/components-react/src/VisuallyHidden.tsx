/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { PropsWithChildren } from 'react';

export const VisuallyHidden = ({ children }: PropsWithChildren) => {
  return <span className={'rhc-visually-hidden'}>{children}</span>;
};
