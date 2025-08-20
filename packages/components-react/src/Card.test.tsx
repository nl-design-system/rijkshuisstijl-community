import '@testing-library/jest-dom/vitest';

import { cleanup, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Card } from './Card';

const linkTest = (component: ReactElement, href: string, title: string) => {
  const { getByRole } = render(component);
  const link = getByRole('link');
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', href);
  expect(link).toHaveAttribute('title', title);
};

describe('Card', () => {
  it('renders a visible element', () => {
    const { container } = render(<Card description="Description" heading="Heading" href="#" subheading="Subheading" />);
    const card = container.querySelector('.rhc-card');
    expect(card).toBeInTheDocument();
    expect(card).toBeVisible();
  });

  it('renders a link with the correct href and title', () => {
    linkTest(
      <Card
        description="Description"
        heading="Heading"
        href="/example"
        subheading="Subheading"
        title="Example Title"
      />,
      '/example',
      'Example Title',
    );
  });
});

afterEach(() => cleanup());
