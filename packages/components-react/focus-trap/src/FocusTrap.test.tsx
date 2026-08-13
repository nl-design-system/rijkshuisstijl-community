import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import { FocusTrap } from './FocusTrap';

describe('FocusTrap', () => {
  it('renders children', () => {
    render(
      <FocusTrap>
        <button>Click me</button>
      </FocusTrap>,
    );

    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('traps Tab focus within the container', async () => {
    const user = userEvent.setup();

    render(
      <FocusTrap>
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
      </FocusTrap>,
    );

    const first = screen.getByRole('button', { name: 'First' });
    const third = screen.getByRole('button', { name: 'Third' });

    third.focus();
    await user.tab();

    expect(first).toHaveFocus();
  });

  it('traps Shift+Tab focus within the container', async () => {
    const user = userEvent.setup();

    render(
      <FocusTrap>
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
      </FocusTrap>,
    );

    const first = screen.getByRole('button', { name: 'First' });
    const third = screen.getByRole('button', { name: 'Third' });

    first.focus();
    await user.tab({ shift: true });

    expect(third).toHaveFocus();
  });

  it('does not trap focus when active is false', async () => {
    const user = userEvent.setup();

    render(
      <>
        <FocusTrap active={false}>
          <button>Inside</button>
        </FocusTrap>
        <button>Outside</button>
      </>,
    );

    const inside = screen.getByRole('button', { name: 'Inside' });
    const outside = screen.getByRole('button', { name: 'Outside' });

    inside.focus();
    await user.tab();

    expect(outside).toHaveFocus();
  });

  it('passes additional HTML attributes to the container div', () => {
    render(
      <FocusTrap data-testid="trap-container" className="my-trap">
        <button>Button</button>
      </FocusTrap>,
    );

    const container = screen.getByTestId('trap-container');
    expect(container).toHaveClass('my-trap');
  });
});

afterEach(() => cleanup());
