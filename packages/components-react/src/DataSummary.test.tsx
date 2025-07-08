import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { DataSummary } from './DataSummary';

describe('DataSummary', () => {
  it('renders a visible element', () => {
    const { container } = render(<DataSummary />);
    const dataSummary = container.querySelector(':only-child');
    expect(dataSummary).toBeInTheDocument();
    expect(dataSummary).toBeVisible();
  });

  it('should add the correct class when appearance is set to column', () => {
    const { container } = render(<DataSummary appearance="column" />);
    const dataSummary = container.querySelector(':only-child');
    expect(dataSummary).toHaveClass('rhc-data-summary--column');
  });

  it('should add the correct class when appearance is set to row', () => {
    const { container } = render(<DataSummary appearance="row" />);
    const dataSummary = container.querySelector(':only-child');
    expect(dataSummary).toHaveClass('rhc-data-summary--row');
  });
});

afterEach(() => cleanup());
