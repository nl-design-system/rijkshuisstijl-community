import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { NavBar, NavBarItem } from '.';

describe('NavBar', () => {
  it('renders a visible element', () => {
    const { container } = render(<NavBar items={[]} />);

    const navBar = container.querySelector(':only-child');

    expect(navBar).toBeInTheDocument();
    expect(navBar).toBeVisible();
  });

  it('renders a nav bar item element', () => {
    render(
      <NavBar
        items={[
          {
            id: 'test-item',
            href: '#',
            label: 'Test Item',
          },
        ]}
      />,
    );

    const navBarItem = screen.getByRole('link', {
      name: /test item/i,
    });
    expect(navBarItem).toBeVisible();
  });

  it('renders a nav bar end item element', () => {
    render(<NavBar endItems={<NavBarItem href="#" id="test-end-item" label="Test End Item" />} items={[]} />);

    const navBarItem = screen.getByRole('link', {
      name: /test end item/i,
    });
    expect(navBarItem).toBeVisible();
  });

  it('renders a nav bar item with a custom class', () => {
    render(
      <NavBar
        items={[
          {
            id: 'test-item',
            href: '#',
            label: 'Test Item',
            className: 'custom-class',
          },
        ]}
      />,
    );
    const navBarItem = screen.getByRole('listitem');
    expect(navBarItem).toHaveClass('custom-class');
  });
});
afterEach(() => cleanup());
