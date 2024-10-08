import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
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
    const ref = { current: null };
    render(<SideNavItem ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLLIElement);
  });

  it('applies custom class name', () => {
    const testClassName = 'test-class';
    render(<SideNavItem className={testClassName} />);

    expect(screen.getByRole('listitem')).toHaveClass(testClassName);
  });
});
