import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { LinkListCard } from '.';

describe('LinkListCard', () => {
  it('renders a visible element', () => {
    const { container } = render(<LinkListCard heading="Heading" headingLevel={1} />);

    const linkListCard = container.querySelector(':only-child');

    expect(linkListCard).toBeInTheDocument();
    expect(linkListCard).toBeVisible();
  });
  it('renders heading with correct level and text', () => {
    render(<LinkListCard heading="Mijn heading" headingLevel={2} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Mijn heading');
  });

  it('renders children inside the link list', () => {
    render(
      <LinkListCard heading="Links" headingLevel={3}>
        <a href="/test">Test Link</a>
      </LinkListCard>,
    );
    const link = screen.getByRole('link', { name: 'Test Link' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });
});

afterEach(() => cleanup());
