import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { afterEach, describe, expect, it } from 'vitest';
import { MessageList } from './MessageList';

describe('MessageList', () => {
  it('renders without crashing', () => {
    render(<MessageList />);
    const messageList = screen.getByRole('list');
    expect(messageList).toBeInTheDocument();
  });
  it('applies custom class name', () => {
    render(<MessageList className="custom-class" />);
    const messageList = screen.getByRole('list');
    expect(messageList).toHaveClass('custom-class');
  });
});

afterEach(() => cleanup());
