import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Heading, PreHeading } from '.';

describe('PreHeading', () => {
  it('renders a visible element', () => {
    const { container } = render(<PreHeading heading={<Heading level={1}>heading</Heading>}>pre-heading</PreHeading>);

    const preHeading = container.querySelector(':only-child');

    expect(preHeading).toBeInTheDocument();
    expect(preHeading).toBeVisible();
  });

  it('elements have correct grid area placement', () => {
    render(<PreHeading heading={<Heading level={1}>heading</Heading>}>pre-heading</PreHeading>);

    const preHeading = screen.getByText('pre-Heading');
    const heading = screen.getByText('heading');

    const preHeadingStyle = window.getComputedStyle(preHeading);
    const headingStyle = window.getComputedStyle(heading);

    expect(preHeadingStyle.gridArea).toBe('pre-heading');
    expect(headingStyle.gridArea).toBe('heading');

    expect(preHeading).toBeInTheDocument();
    expect(preHeading).toBeVisible();
  });
});
