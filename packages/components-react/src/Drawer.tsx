import React from 'react';
import { Drawer as UtrechtDrawer } from '@utrecht/component-library-react';
export { type DrawerProps } from '@utrecht/component-library-react';

export const Drawer: React.FC<React.ComponentProps<typeof UtrechtDrawer>> = (props) => {
  return <UtrechtDrawer {...props} tabIndex={0} />;
};

Drawer.displayName = 'Drawer';
