import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Drawer } from './Drawer';

describe.only('Drawer', () => {
  it('renders without crashing', () => {
    render(<Drawer isOpen={true} onClose={() => {}} />);
    const drawer = screen.getByRole('menubar');
    expect(drawer).toBeInTheDocument();
  });
  // it('applies correct screen reader label', () => {
  //   render(<Drawer label={'test'} />);
  //   const DrawerLabel = screen.getByTestId('rhc-dot-badge__sr-label');
  //   expect(DrawerLabel).toHaveTextContent('test');
  // });
  // it('applies correct role', () => {
  //   render(<Drawer label={'test'} role={'status'} />);
  //   const Drawer = screen.getByRole('status');
  //   expect(Drawer).toHaveAttribute('role', 'status');
  // });
});

afterEach(() => cleanup());
