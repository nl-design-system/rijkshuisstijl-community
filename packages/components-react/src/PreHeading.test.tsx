import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Heading, PreHeading } from '.';

describe('PreHeading', () => {
  it('renders both the heading and pre-heading elements', () => {
    render(<PreHeading heading={<Heading level={1}>heading</Heading>}>pre-heading</PreHeading>);

    const preHeading = screen.getByText(/pre-Heading/i);
    const heading = screen.getByText(/^heading$/i);

    expect(preHeading).toBeInTheDocument();
    expect(preHeading).toBeVisible();

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });
});
