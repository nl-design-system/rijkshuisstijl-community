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
});

afterEach(() => cleanup());
