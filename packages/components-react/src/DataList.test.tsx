import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { DataList } from '.';

describe('DataList', () => {
  it('renders a visible element', () => {
    const { container } = render(<DataList />);

    const dataList = container.querySelector(':only-child');

    expect(dataList).toBeInTheDocument();
    expect(dataList).toBeVisible();
  });
});

afterEach(() => cleanup());
