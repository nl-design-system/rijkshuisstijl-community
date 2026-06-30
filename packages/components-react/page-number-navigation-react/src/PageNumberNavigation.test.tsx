import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { PageNumberNavigation } from '.';

describe('Pagination', () => {
  afterEach(() => cleanup());

  it('renders pagination with correct number of links', () => {
    const { getAllByRole } = render(
      <PageNumberNavigation linkTemplate={(page: number) => `/${page}`} maxVisiblePages={5} page={1} totalPages={10} />,
    );

    const links = getAllByRole('link');

    expect(links.length).toBeLessThanOrEqual(5);
    expect(links[0]).toBeVisible();
  });

  it('includes a link to the second page', () => {
    const { getByRole } = render(
      <PageNumberNavigation linkTemplate={(page: number) => `/${page}`} maxVisiblePages={5} page={1} totalPages={10} />,
    );

    const page2Link = getByRole('link', { name: 'Ga naar pagina 2' });

    expect(page2Link).toBeInTheDocument();
    expect(page2Link).toHaveAttribute('href', '/2');
  });
});
