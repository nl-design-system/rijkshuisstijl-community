import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { SideNav, SideNavItem, SideNavLink, SideNavLinkLabel, SideNavList } from '.';

describe('SideNav', () => {
  it('renders a navigation structure with a link', () => {
    render(
      <SideNav>
        <SideNavList>
          <SideNavItem>
            <SideNavLink href="/#">
              <SideNavLinkLabel>Overzicht</SideNavLinkLabel>
            </SideNavLink>
          </SideNavItem>
        </SideNavList>
      </SideNav>,
    );

    const link = screen.getByRole('link', { name: 'Overzicht' });

    expect(link).toBeInTheDocument();
    expect(link).toBeVisible();
  });

  it('marks the current page link with aria-current', () => {
    render(
      <SideNav>
        <SideNavList>
          <SideNavItem>
            <SideNavLink current href="/#">
              <SideNavLinkLabel>Overzicht</SideNavLinkLabel>
            </SideNavLink>
          </SideNavItem>
        </SideNavList>
      </SideNav>,
    );

    expect(screen.getByRole('link', { name: 'Overzicht' })).toHaveAttribute('aria-current', 'page');
  });
});

afterEach(() => cleanup());
