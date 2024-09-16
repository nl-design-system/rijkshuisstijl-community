import { cleanup, render, screen } from '@testing-library/react';
import { Alert } from './Alert';
import '@testing-library/jest-dom';

describe('Alert', () => {
  it('should render successfully', () => {
    render(
      <Alert
        heading="Heading"
        textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
        type="info"
      />,
    );
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});

test.each([['info'], ['ok'], ['warning'], ['error']])(
  'should apply the correct class based on the type prop: %s',
  (type) => {
    render(
      <Alert heading="Test Heading" textContent="Test content" type={type as 'info' | 'ok' | 'warning' | 'error'} />,
    );

    const alert = screen.getByRole('alert');
    const iconContainer = alert.querySelector('.rhc-alert__icon-container');

    expect(iconContainer).toHaveClass(`rhc-alert__icon-container-${type}`);

    cleanup();
  },
);
