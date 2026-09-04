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

  it('renders the rhc classname on the navigation element', () => {
    const { container } = render(
      <PageNumberNavigation linkTemplate={(page: number) => `/${page}`} page={1} totalPages={10} />,
    );

    expect(container.firstChild).toHaveClass('rhc-page-number-navigation');
  });

  it('merges a custom className with the rhc classname', () => {
    const { container } = render(
      <PageNumberNavigation
        className="custom-class"
        linkTemplate={(page: number) => `/${page}`}
        page={1}
        totalPages={10}
      />,
    );

    expect(container.firstChild).toHaveClass('rhc-page-number-navigation');
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('marks the current page with aria-current', () => {
    const { getByRole } = render(
      <PageNumberNavigation linkTemplate={(page: number) => `/${page}`} page={3} totalPages={10} />,
    );

    const currentLink = getByRole('link', { name: 'Pagina 3' });

    expect(currentLink).toHaveAttribute('aria-current', 'page');
  });
});
