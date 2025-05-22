import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it, test } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Alert
        heading="Heading"
        textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
        type="info"
      />,
    );
    const alert = container.querySelector('.rhc-alert');
    expect(alert).toBeInTheDocument();
  });
});

test.each([['info'], ['ok'], ['warning'], ['error']])(
  'should apply the correct class based on the type prop: %s',
  (type) => {
    const { container } = render(
      <Alert heading="Test Heading" textContent="Test content" type={type as 'info' | 'ok' | 'warning' | 'error'} />,
    );

    const alert = container.querySelector('.rhc-alert');
    const iconContainer = alert?.querySelector('.rhc-alert__icon-container');

    expect(iconContainer).toHaveClass(`rhc-alert__icon-container`);
    expect(iconContainer).toHaveClass(`rhc-alert__icon-container--${type}`);

    cleanup();
  },
);

afterEach(() => cleanup());
