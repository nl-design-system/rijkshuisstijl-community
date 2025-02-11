import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { NavigationList } from './NavigationList';

describe('NavigationList', () => {
  it('renders children correctly', () => {
    const testContent = 'Test NavigationList Content';
    render(
      <NavigationList>
        <div>{testContent}</div>
      </NavigationList>,
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    render(<NavigationList />);

    expect(screen.getByRole('list')).toBeInstanceOf(HTMLUListElement);
  });

  it('applies custom class name', () => {
    const testClassName = 'test-class';
    render(<NavigationList className={testClassName} />);

    expect(screen.getByRole('list')).toHaveClass(testClassName);
  });
});
