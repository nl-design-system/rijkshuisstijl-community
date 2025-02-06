import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { SideNavItem } from './SideNavItem';

describe('SideNaveItem', () => {
  it('renders children correctly', () => {
    const testContent = 'Test SideNavItem Content';
    render(
      <SideNavItem>
        <div>{testContent}</div>
      </SideNavItem>,
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLLIElement>();
    render(<SideNavItem ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLLIElement);
  });

  it('applies custom class name', () => {
    const testClassName = 'test-class';
    render(<SideNavItem className={testClassName} data-testid="test-id" />);

    expect(screen.getByTestId('test-id')).toHaveClass(testClassName);
  });
});
