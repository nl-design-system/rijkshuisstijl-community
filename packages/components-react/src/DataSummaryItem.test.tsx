import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { DataSummaryItem } from './DataSummaryItem';

describe('DataSummaryItem', () => {
  it('renders a visible element', () => {
    const { container } = render(<DataSummaryItem itemKey="Key" itemValue="Value" />);
    const dataSummaryItem = container.querySelector(':only-child');
    expect(dataSummaryItem).toBeInTheDocument();
    expect(dataSummaryItem).toBeVisible();
  });
});

afterEach(() => cleanup());
