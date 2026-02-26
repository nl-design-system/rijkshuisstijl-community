import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormSummary } from '.';

describe('FormSummary', () => {
  it('renders a visible element', () => {
    const { container } = render(<FormSummary />);

    const formSummary = container.querySelector(':only-child');

    expect(formSummary).toBeInTheDocument();
    expect(formSummary).toBeVisible();
  });
});

afterEach(() => cleanup());
