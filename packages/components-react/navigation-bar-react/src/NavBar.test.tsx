import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  NavBar,
  NavBarEnd,
  NavBarIdentity,
  NavBarItem,
  NavBarMegaMenu,
  NavBarMegaMenuClose,
  NavBarMegaMenuPanel,
  NavBarMegaMenuSeparator,
  NavBarMegaMenuTagline,
  NavBarMegaMenuTrigger,
  NavBarStart,
} from '.';

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
        <NavBarStart>
          <NavBarItem href="#" id="start" label="Start Item" />
        </NavBarStart>
        <NavBarEnd>
          <NavBarItem href="#" id="end" label="End Item" />
        </NavBarEnd>
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
        <NavBarStart>
          <NavBarItem className="custom-class" href="#" id="item" label="Item" />
        </NavBarStart>
      </NavBar>,
    );

    expect(screen.getByRole('listitem')).toHaveClass('rhc-nav-bar__item', 'custom-class');
  });

  it('marks the identity as persistent by default', () => {
    render(
      <NavBar>
        <NavBarStart>
          <NavBarIdentity href="/">Identity</NavBarIdentity>
        </NavBarStart>
      </NavBar>,
    );

    expect(screen.getByRole('listitem')).toHaveClass('rhc-nav-bar__item--persistent');
  });

  it('marks a nav bar item as persistent when requested', () => {
    render(
      <NavBar>
        <NavBarStart>
          <NavBarItem persistent href="#" id="item" label="Item" />
        </NavBarStart>
      </NavBar>,
    );

    expect(screen.getByRole('listitem')).toHaveClass('rhc-nav-bar__item--persistent');
  });

  it('wires a mega menu trigger and close button to the panel by id', () => {
    const { container } = render(
      <NavBar>
        <NavBarStart>
          <NavBarMegaMenu>
            <NavBarMegaMenuTrigger target="onderwerpen">Onderwerpen</NavBarMegaMenuTrigger>
            <NavBarMegaMenuPanel id="onderwerpen">
              <NavBarMegaMenuTagline>Mega menu content</NavBarMegaMenuTagline>
              <NavBarMegaMenuSeparator />
              <NavBarMegaMenuClose target="onderwerpen" />
            </NavBarMegaMenuPanel>
          </NavBarMegaMenu>
        </NavBarStart>
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

  it('closes the open mega menu panel when keyboard focus leaves it', () => {
    const { container } = render(
      <NavBar>
        <NavBarStart>
          <NavBarMegaMenu>
            <NavBarMegaMenuTrigger target="onderwerpen">Onderwerpen</NavBarMegaMenuTrigger>
            <NavBarMegaMenuPanel id="onderwerpen">
              <a href="#binnen">Binnen</a>
            </NavBarMegaMenuPanel>
          </NavBarMegaMenu>
        </NavBarStart>
        <NavBarEnd>
          <NavBarItem href="#buiten" id="buiten" label="Buiten" />
        </NavBarEnd>
      </NavBar>,
    );

    const panel = container.querySelector<HTMLElement>('#onderwerpen')!;
    // jsdom heeft geen Popover API: simuleer een open paneel.
    panel.matches = (selector: string) => selector === ':popover-open';
    panel.hidePopover = vi.fn();

    const inside = screen.getByRole('link', { name: 'Binnen' });

    fireEvent.focusOut(inside, { relatedTarget: screen.getByRole('button', { name: 'Onderwerpen' }) });
    expect(panel.hidePopover).not.toHaveBeenCalled();

    fireEvent.focusOut(inside, { relatedTarget: screen.getByRole('link', { name: 'Buiten' }) });
    expect(panel.hidePopover).toHaveBeenCalledTimes(1);
  });
});

afterEach(() => cleanup());
