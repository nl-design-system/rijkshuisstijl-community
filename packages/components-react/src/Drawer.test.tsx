import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Drawer } from './Drawer';

describe('Drawer testcases', () => {
  it('should render successfully', () => {
    render(<Drawer open={true}/>);
    const drawer = screen.getByRole('dialog');
    expect(drawer).toBeInTheDocument();
  });
});

afterEach(() => cleanup());
