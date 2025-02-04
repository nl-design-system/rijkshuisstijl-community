import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { ColumnLayout } from './ColumnLayout';

describe('ColumnLayout', () => {
  test('renders a visible element', () => {
    const { container } = render(<ColumnLayout />);
    const columnLayout = container.querySelector(':only-child');
    expect(columnLayout).toBeInTheDocument();
    expect(columnLayout).toBeVisible();
  });
});
