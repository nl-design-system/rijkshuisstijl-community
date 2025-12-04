import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LinkButton } from './LinkButton';

describe('LinkButton', () => {
  it('renders a visible button', () => {
    // Arrange & Act
    render(<LinkButton>test button</LinkButton>);

    // Assert
    expect(screen.getByRole('button'));
  });
});
