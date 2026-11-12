import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { NavBar, NavBarIdentity, NavBarItem, NavBarMegaMenu } from '.';

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
      <NavBar
        endItems={<NavBarItem href="#" id="end" label="End Item" />}
        startItems={<NavBarItem href="#" id="start" label="Start Item" />}
      />,
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
    render(<NavBar startItems={<NavBarItem className="custom-class" href="#" id="item" label="Item" />} />);

    expect(screen.getByRole('listitem')).toHaveClass('rhc-nav-bar__item', 'custom-class');
  });

  it('marks the identity as persistent by default', () => {
    render(<NavBar startItems={<NavBarIdentity href="/">Identity</NavBarIdentity>} />);

    expect(screen.getByRole('listitem')).toHaveClass('rhc-nav-bar__item--persistent');
  });

  it('marks a nav bar item as persistent when requested', () => {
    render(<NavBar startItems={<NavBarItem persistent href="#" id="item" label="Item" />} />);

    expect(screen.getByRole('listitem')).toHaveClass('rhc-nav-bar__item--persistent');
  });

  it('renders a mega menu with a trigger targeting its panel', () => {
    const { container } = render(
      <NavBar startItems={<NavBarMegaMenu label="Onderwerpen">Mega menu content</NavBarMegaMenu>} />,
    );

    const panel = container.querySelector('.rhc-nav-bar__megamenu-panel');
    expect(panel).toHaveAttribute('popover', 'auto');
    expect(panel).toHaveTextContent('Mega menu content');

    const trigger = screen.getByRole('button', { name: 'Onderwerpen' });
    expect(trigger).toHaveAttribute('popovertarget', panel?.id);
  });
});

afterEach(() => cleanup());
