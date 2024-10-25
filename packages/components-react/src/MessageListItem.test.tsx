import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageListItem } from './MessageListItem';

describe('MessageListItem', () => {
  it('renders children correctly', () => {
    render(<MessageListItem description={'Description'} href={'#'} label={'Label'}></MessageListItem>);

    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('applies custom class name', () => {
    const testClassName = 'test-class';
    render(<MessageListItem className={testClassName} description={'Description'} href={'#'} label={'Label'} />);

    expect(screen.getByRole('link')).toHaveClass(testClassName);
  });
});
