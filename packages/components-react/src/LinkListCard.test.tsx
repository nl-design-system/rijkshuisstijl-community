import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Heading, LinkListCard } from '.';

describe('LinkListCard', () => {
  it('renders a visible element', () => {
    const heading = <Heading level={0}></Heading>;
    const { container } = render(<LinkListCard heading={heading} headingLevel={0} />);

    const linkListCard = container.querySelector(':only-child');

    expect(linkListCard).toBeInTheDocument();
    expect(linkListCard).toBeVisible();
  });
});
