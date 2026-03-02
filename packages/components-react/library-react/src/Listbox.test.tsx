import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Listbox } from './Listbox';

describe('Listbox', () => {
  it('renders a visible listbox', () => {
    // Arrange & Act
    render(<Listbox />);

    // Assert
    expect(screen.getByRole('listbox'));
  });
});
