import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { LinkList, LinkListLink } from '.';

describe('LinkList', () => {
  it('renders a visible element', () => {
    const { container } = render(<LinkList />);

    const linkList = container.querySelector(':only-child');

    expect(linkList).toBeInTheDocument();
    expect(linkList).toBeVisible();
  });

  it('renders the correct number of LinkListLink elements', () => {
    const { getAllByRole } = render(
      <LinkList>
        <LinkListLink href="#">Link 1</LinkListLink>
        <LinkListLink href="#">Link 2</LinkListLink>
        <LinkListLink href="#">Link 3</LinkListLink>
      </LinkList>,
    );

    const links = getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  it('renders an empty LinkList when no children are passed', () => {
    const { container } = render(<LinkList />);

    const linkList = container.querySelector('ul');
    expect(linkList).toBeEmptyDOMElement();
  });
});

afterEach(() => cleanup());
