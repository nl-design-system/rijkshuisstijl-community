import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { NavBar } from '.';

describe('NavBar', () => {
  it('renders a navigation landmark with a default label', () => {
    render(<NavBar />);

    expect(screen.getByRole('navigation', { name: 'Hoofdnavigatie' })).toBeInTheDocument();
  });

  it('accepts a custom aria-label and className on the root', () => {
    render(<NavBar aria-label="Dataregister" className="custom-class" />);

    expect(screen.getByRole('navigation', { name: 'Dataregister' })).toHaveClass('rhc-nav-bar', 'custom-class');
  });

  it('renders start and end items in separate lists', () => {
    render(
      <NavBar>
        <NavBar.Start>
          <NavBar.Item href="#" id="start" label="Start Item" />
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item href="#" id="end" label="End Item" />
        </NavBar.End>
      </NavBar>,
    );

    const [startList, endList] = screen.getAllByRole('list');
    expect(startList).toHaveClass('rhc-nav-bar__list--start');
    expect(startList).toContainElement(screen.getByRole('link', { name: 'Start Item' }));
    expect(endList).toHaveClass('rhc-nav-bar__list--end');
    expect(endList).toContainElement(screen.getByRole('link', { name: 'End Item' }));
  });

  it('renders a menu toggle that targets the menu popover', () => {
    const { container } = render(<NavBar toggleLabel="Open menu" />);

    const menu = container.querySelector('.rhc-nav-bar__menu');
    expect(menu).toHaveAttribute('popover', 'auto');

    const toggle = screen.getByRole('button', { name: 'Open menu' });
    expect(toggle).toHaveAttribute('popovertarget', menu?.id);
  });

  it('passes className to a nav bar item', () => {
    render(
      <NavBar>
        <NavBar.Start>
          <NavBar.Item className="custom-class" href="#" id="item" label="Item" />
        </NavBar.Start>
      </NavBar>,
    );

    expect(screen.getByRole('listitem')).toHaveClass('rhc-nav-bar__item', 'custom-class');
  });

  it('marks the identity as persistent by default', () => {
    render(
      <NavBar>
        <NavBar.Start>
          <NavBar.Identity href="/">Identity</NavBar.Identity>
        </NavBar.Start>
      </NavBar>,
    );

    expect(screen.getByRole('listitem')).toHaveClass('rhc-nav-bar__item--persistent');
  });

  it('marks a nav bar item as persistent when requested', () => {
    render(
      <NavBar>
        <NavBar.Start>
          <NavBar.Item persistent href="#" id="item" label="Item" />
        </NavBar.Start>
      </NavBar>,
    );

    expect(screen.getByRole('listitem')).toHaveClass('rhc-nav-bar__item--persistent');
  });

  it('wires a mega menu trigger and close button to the panel by id', () => {
    const { container } = render(
      <NavBar>
        <NavBar.Start>
          <NavBar.MegaMenu>
            <NavBar.MegaMenu.Trigger target="onderwerpen">Onderwerpen</NavBar.MegaMenu.Trigger>
            <NavBar.MegaMenu.Panel id="onderwerpen">
              <NavBar.MegaMenu.Tagline>Mega menu content</NavBar.MegaMenu.Tagline>
              <NavBar.MegaMenu.Separator />
              <NavBar.MegaMenu.Close target="onderwerpen" />
            </NavBar.MegaMenu.Panel>
          </NavBar.MegaMenu>
        </NavBar.Start>
      </NavBar>,
    );

    const panel = container.querySelector('#onderwerpen');
    expect(panel).toHaveClass('rhc-nav-bar__megamenu-panel');
    expect(panel).toHaveAttribute('popover', 'auto');
    expect(panel).toHaveTextContent('Mega menu content');
    expect(panel?.querySelector('.rhc-nav-bar__megamenu-separator')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Onderwerpen' })).toHaveAttribute('popovertarget', 'onderwerpen');

    const close = screen.getByRole('button', { name: 'Sluiten' });
    expect(close).toHaveAttribute('popovertarget', 'onderwerpen');
    expect(close).toHaveAttribute('popovertargetaction', 'hide');
  });
});

afterEach(() => cleanup());
