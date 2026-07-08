/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Drawer as UtrechtDrawer } from '@utrecht/component-library-react';
import React from 'react';

export { type DrawerProps } from '@utrecht/component-library-react';

export const Drawer: React.FC<React.ComponentProps<typeof UtrechtDrawer>> = (props) => {
  // De scroll-container is de `.utrecht-drawer__body` (die krijgt in de markup
  // een `tabIndex` voor toetsenbord-scrollen); de drawer zelf hoeft geen tab-stop
  // te zijn.
  return <UtrechtDrawer {...props} />;
};

Drawer.displayName = 'Drawer';
