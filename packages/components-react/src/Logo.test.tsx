import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';
import '@testing-library/jest-dom';

describe('Logo', () => {
  it('renders a logo role element', () => {
    render(<Logo organisation="Voorbeeld organisatie" subtitle="Voorbeeld sub-title"></Logo>);

    const logo = screen.getByText('Voorbeeld organisatie');

    expect(logo).toBeInTheDocument();
    expect(logo).toBeVisible();
  });
});
