import { PropsWithChildren } from 'react';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = ({ children, isOpen, onClose, ...restProps }: PropsWithChildren<DrawerProps>) => {
  return (
    <div
      aria-orientation="vertical"
      className={`drawer ${isOpen ? 'open' : ''}`}
      data-testid="rhc-drawer"
      role="menubar"
      {...restProps}
    >
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      {children}
    </div>
  );
};

Drawer.displayName = 'Drawer';
