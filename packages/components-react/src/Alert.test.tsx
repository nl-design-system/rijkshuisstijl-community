import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, test } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Alert type="info">Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Alert>,
    );
    const alert = container.querySelector('.rhc-alert');
    expect(alert).toBeInTheDocument();
  });

  it.each([
    ['info', 'status'],
    ['ok', 'status'],
    ['warning', 'alert'],
    ['error', 'alert'],
  ])('should set role="%s" when type is %s', (type, expectedRole) => {
    render(
      <Alert type={type as 'info' | 'ok' | 'warning' | 'error'}>
        Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
      </Alert>,
    );
    const alert = screen.getByRole(expectedRole);
    expect(alert).toBeInTheDocument();
    cleanup();
  });

  test.each([['info'], ['ok'], ['warning'], ['error']])(
    'should apply the correct class based on the type prop: %s',
    (type) => {
      const { container } = render(<Alert type={type as 'info' | 'ok' | 'warning' | 'error'}>Test content</Alert>);

      const alert = container.querySelector('.rhc-alert');
      const iconContainer = alert?.querySelector('.rhc-alert__icon-container');

      expect(iconContainer).toHaveClass(`rhc-alert__icon-container`);
      expect(iconContainer).toHaveClass(`rhc-alert__icon-container--${type}`);

      cleanup();
    },
  );

  afterEach(() => cleanup());
});
