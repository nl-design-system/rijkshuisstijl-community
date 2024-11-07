import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { PageHeader } from '.';

describe('PageHeader', () => {
  it('renders a visible element', () => {
    const { container } = render(<PageHeader />);

    const pageHeader = container.querySelector(':only-child');

    expect(pageHeader).toBeInTheDocument();
    expect(pageHeader).toBeVisible();
  });
});
