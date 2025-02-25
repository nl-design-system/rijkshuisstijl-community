import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { getIconSet, Icon, registerIconSet } from './Icon';
import { iconSet } from './icon-sets/default-icons/icon-set';
import '@testing-library/jest-dom/vitest';

describe('Icon', () => {
  it('renders the icon component with the provided icon', () => {
    render(<Icon data-testid="icon" icon="chevron-right" />);

    const icon = screen.getByTestId('icon');

    expect(icon.querySelector('svg')).toBeInTheDocument();
  });

  it('renders the icon component with the provided icon and custom class', () => {
    render(<Icon className="custom-class" data-testid="icon" icon="chevron-right" />);

    const icon = screen.getByTestId('icon');

    expect(icon).toHaveClass('custom-class');
    expect(icon.querySelector('svg')).toBeInTheDocument();
  });

  it('renders the icon component with the provided children', () => {
    render(
      <Icon data-testid="icon">
        <svg>
          <path />
        </svg>
      </Icon>,
    );

    const icon = screen.getByTestId('icon');

    expect(icon).toContainHTML('<svg><path></path></svg>');
  });

  it('renders the icon component without an icon', () => {
    render(<Icon data-testid="icon" />);

    const icon = screen.getByTestId('icon');

    expect(icon).toBeEmptyDOMElement();
  });

  it('renders the icon component with a non-existent icon', () => {
    render(<Icon data-testid="icon" icon="non-existent-icon" />);

    const icon = screen.getByTestId('icon');

    expect(icon).toBeEmptyDOMElement();
  });

  it('registers a new icon set and renders an icon from it', () => {
    const newIconSet = {
      'new-icon': (
        <svg>
          <circle cx="10" cy="10" r="10" />
        </svg>
      ),
    };
    registerIconSet(newIconSet);

    render(<Icon data-testid="icon" icon="new-icon" />);

    const icon = screen.getByTestId('icon');

    expect(icon).toContainHTML('<svg><circle cx="10" cy="10" r="10"></circle></svg>');
    expect(getIconSet()).toEqual({ ...iconSet, ...newIconSet });
  });
});

afterEach(() => cleanup());
