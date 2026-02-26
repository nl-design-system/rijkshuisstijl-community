import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { afterEach, describe, expect, it } from 'vitest';
import { NavigationListItem } from './NavigationListItem';

const label = 'label';
const description = 'description';

describe('NavigationListItem', () => {
  it('renders a NavigationListItem', () => {
    render(<NavigationListItem description={description} href={'#'} icon={'chevron-right'} label={label} />);
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    render(<NavigationListItem description={description} href={'#'} icon={'chevron-right'} label={label} />);

    expect(screen.getByRole('listitem')).toBeInstanceOf(HTMLLIElement);
  });

  it('applies custom class name', () => {
    const testClassName = 'test-class';
    render(
      <NavigationListItem
        className={testClassName}
        description={description}
        href={'#'}
        icon={'chevron-right'}
        label={label}
      />,
    );

    expect(screen.getByRole('link')).toHaveClass(testClassName);
  });
});

afterEach(() => cleanup());
