import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ColumnLayout } from './ColumnLayout';

describe('ColumnLayout', () => {
  it('renders a visible element', () => {
    const { container } = render(<ColumnLayout />);
    const columnLayout = container.querySelector(':only-child');
    expect(columnLayout).toBeInTheDocument();
    expect(columnLayout).toBeVisible();
  });
});

afterEach(() => cleanup());
