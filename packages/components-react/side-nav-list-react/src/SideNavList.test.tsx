import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { SideNavList } from './SideNavList';

describe('SideNavList', () => {
  it('renders children correctly', () => {
    render(
      <SideNavList>
        <li>Item 1</li>
      </SideNavList>,
    );

    const item = screen.getByText('Item 1');
    expect(item).toBeTruthy();
    expect(document.body.contains(item)).toBe(true);
  });
  it('applies the correct CSS class', () => {
    render(<SideNavList />);

    const list = screen.getByRole('list');
    expect(list.className).toContain('rhc-side-nav__list');
  });

  it('merges custom className with default class', () => {
    render(<SideNavList className="custom-class" />);

    const list = screen.getByRole('list');
    expect(list.className).toContain('rhc-side-nav__list');
    expect(list.className).toContain('custom-class');
  });

  it('forwards ref to the ul element', () => {
    render(<SideNavList />);

    const list = screen.getByRole('list');
    expect(list).toBeInstanceOf(HTMLUListElement);
  });
});

afterEach(() => cleanup());
