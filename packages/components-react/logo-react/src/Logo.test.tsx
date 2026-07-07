import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders a logo element', () => {
    render(<Logo organisation="Organisatie" subtitle="Ondertitel"></Logo>);

    const text = screen.getByText('Organisatie');

    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });
});

afterEach(() => cleanup());
