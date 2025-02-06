import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Toggletip } from '.';

describe('Toggletip', () => {
  it('renders a visible element', () => {
    const { container } = render(<Toggletip />);

    const toggletip = container.querySelector(':only-child');
    expect(toggletip).toBeInTheDocument();
  });
});
