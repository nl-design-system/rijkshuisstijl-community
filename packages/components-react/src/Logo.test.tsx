import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders a logo role element', () => {
    render(<Logo organisation="Voorbeeld organisatie" subtitle="Voorbeeld sub-title"></Logo>);

    const logo = screen.getByText('Voorbeeld organisatie');

    expect(logo).toBeInTheDocument();
    expect(logo).toBeVisible();
  });
});
