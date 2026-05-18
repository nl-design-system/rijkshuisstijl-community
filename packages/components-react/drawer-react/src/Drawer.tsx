/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Drawer as UtrechtDrawer } from '@utrecht/component-library-react';
import React from 'react';

export { type DrawerProps } from '@utrecht/component-library-react';

export const Drawer: React.FC<React.ComponentProps<typeof UtrechtDrawer>> = (props) => {
  return <UtrechtDrawer {...props} tabIndex={0} />;
};

Drawer.displayName = 'Drawer';
