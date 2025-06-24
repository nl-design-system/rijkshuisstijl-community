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
});

afterEach(() => cleanup());
