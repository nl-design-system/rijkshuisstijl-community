import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Textarea } from '.';

describe('Textarea', () => {
  it('renders a visible element', () => {
    const { container } = render(<Textarea />);

    const textarea = container.querySelector(':only-child');

    expect(textarea).toBeInTheDocument();
    expect(textarea).toBeVisible();
  });
});
