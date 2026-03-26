import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Body } from './entrypoint';

describe('Body', () => {
  it('renders a visible element', () => {
    const { container } = render(<Body Component="div" />);

    const body = container.querySelector(':only-child');

    expect(body).toBeInTheDocument();
    expect(body).toBeVisible();
  });
});

afterEach(() => cleanup());
