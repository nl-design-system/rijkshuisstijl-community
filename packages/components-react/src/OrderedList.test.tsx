import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { OrderedList } from '.';

describe('OrderedList', () => {
  it('renders a visible element', () => {
    const { container } = render(<OrderedList />);

    const orderedList = container.querySelector(':only-child');

    expect(orderedList).toBeInTheDocument();
    expect(orderedList).toBeVisible();
  });
});
