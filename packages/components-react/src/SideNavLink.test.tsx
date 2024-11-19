import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createRef } from 'react';
import { SideNavLink } from './SideNavLink';

describe('SideNavLink', () => {
  it('renders children correctly', () => {
    const testContent = 'Test SideNavLink Content';
    render(<SideNavLink>{testContent}</SideNavLink>);

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(<SideNavLink ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });

  it('applies custom class name', () => {
    const testClassName = 'test-class';
    render(<SideNavLink className={testClassName} />);

    expect(screen.getByRole('link')).toHaveClass(testClassName);
  });

  it('sets aria-current attribute when current prop is true', () => {
    render(<SideNavLink current={true} />);

    expect(screen.getByRole('link')).toHaveAttribute('aria-current', 'page');
  });

  it('does not set aria-current attribute when current prop is false', () => {
    render(<SideNavLink current={false} />);

    expect(screen.getByRole('link')).not.toHaveAttribute('aria-current');
  });
});
