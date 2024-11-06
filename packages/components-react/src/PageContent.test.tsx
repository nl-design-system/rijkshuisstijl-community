import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { PageContent } from '.';

describe('PageContent', () => {
  it('renders a visible element', () => {
    const { container } = render(<PageContent />);

    const pageContent = container.querySelector(':only-child');

    expect(pageContent).toBeInTheDocument();
    expect(pageContent).toBeVisible();
  });
});
