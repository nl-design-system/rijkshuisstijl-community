import '@testing-library/jest-dom/vitest';
import { Pagination } from '@rijkshuisstijl-community/components-react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

describe('Pagination', () => {
  afterEach(() => cleanup());

  it('renders pagination with correct number of links', () => {
    const { getAllByRole } = render(
      <Pagination linkTemplate={(page) => `/${page}`} maxVisiblePages={5} page={1} totalPages={10} />,
    );

    const links = getAllByRole('link');

    expect(links.length).toBeLessThanOrEqual(5);
    expect(links[0]).toBeVisible();
  });

  it('includes a link to the second page', () => {
    const { getByRole } = render(
      <Pagination linkTemplate={(page) => `/${page}`} maxVisiblePages={5} page={1} totalPages={10} />,
    );

    const page2Link = getByRole('link', { name: '2' });

    expect(page2Link).toBeInTheDocument();
    expect(page2Link).toHaveAttribute('href', '/2');
  });
});
