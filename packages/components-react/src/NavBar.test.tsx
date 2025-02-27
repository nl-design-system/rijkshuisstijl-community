import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { NavBar } from '.';

describe('NavBar', () => {
  it('renders a visible element', () => {
    const { container } = render(<NavBar items={[]} />);

    const navBar = container.querySelector(':only-child');

    expect(navBar).toBeInTheDocument();
    expect(navBar).toBeVisible();
  });
});

afterEach(() => cleanup());
