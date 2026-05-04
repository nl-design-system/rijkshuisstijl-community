import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { SideNav } from './SideNav';

describe('SideNav', () => {
  it('renders children correctly', () => {
    const testContent = 'Test SideNav Content';
    render(
      <SideNav>
        <div>{testContent}</div>
      </SideNav>,
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLElement>();
    render(<SideNav ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('applies custom class name', () => {
    const testClassName = 'test-class';
    render(<SideNav className={testClassName} data-testid="test-id" />);

    expect(screen.getByTestId('test-id')).toHaveClass(testClassName);
  });

  describe('with heading', () => {
    it('renders rich text content in the heading', () => {
      const testId = 'test-id';
      render(<SideNav heading={<span data-testid={testId}>Submenu</span>} />);

      expect(screen.getByTestId('test-id')).toBeInTheDocument();
    });

    it('renders a heading that does not appear in the accessibility tree', () => {
      const headingText = 'Submenu';
      render(<SideNav heading={headingText} />);

      try {
        expect(screen.getByRole('heading', { name: headingText })).toBeInTheDocument();
      } catch (e) {
        expect(e).toBeDefined();
        return;
      }
      expect(true).toBe(false);
    });

    it('renders an h2 element', () => {
      const headingText = 'Submenu';
      const { container } = render(<SideNav heading={headingText} />);

      expect(container.querySelector('h2')).toBeInTheDocument();
    });
  });
});

afterEach(() => cleanup());
