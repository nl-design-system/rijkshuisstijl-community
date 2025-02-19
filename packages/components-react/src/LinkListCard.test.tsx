import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Heading, LinkListCard } from '.';

describe('LinkListCard', () => {
  it('renders a visible element', () => {
    const heading = <Heading level={1}></Heading>;
    const { container } = render(<LinkListCard heading={heading} headingLevel={1} />);

    const linkListCard = container.querySelector(':only-child');

    expect(linkListCard).toBeInTheDocument();
    expect(linkListCard).toBeVisible();
  });
});

afterEach(() => cleanup());
