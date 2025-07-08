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

  it('renders a visible link', () => {
    const { container } = render(
      <DataSummaryItem href="#" itemKey="Key" itemValue="Value">
        Link
      </DataSummaryItem>,
    );
    const dataSummaryItem = container.querySelector(':only-child');
    expect(dataSummaryItem).toBeInTheDocument();
    expect(dataSummaryItem).toBeVisible();
    expect(dataSummaryItem).toBeTruthy();
    if (dataSummaryItem) {
      const link = dataSummaryItem.querySelector('a');
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent('Link');
    }
  });
});

afterEach(() => cleanup());
