import '@testing-library/jest-dom/vitest';
import { Heading } from '@rijkshuisstijl-community/components-react';
import { Paragraph } from '@rijkshuisstijl-community/components-react';
import { cleanup, render, screen } from '@testing-library/react';
import { AlertType } from '@utrecht/component-library-react';
import { afterEach, describe, expect, it, test } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  it('should render successfully', () => {
    render(
      <Alert type="info">
        <Heading level={3}>Heading</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Paragraph>
      </Alert>,
    );
    const alert = screen.getByRole('status');
    expect(alert).toBeInTheDocument();
  });

  it.each([
    ['info', 'status'],
    ['ok', 'status'],
    ['warning', 'alert'],
    ['error', 'alert'],
  ])('should set role="%s" when type is %s', (type, expectedRole) => {
    render(
      <Alert type={type as AlertType}>
        <Heading level={3}>Heading</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Paragraph>
      </Alert>,
    );
    const alert = screen.getByRole(expectedRole);
    expect(alert).toBeInTheDocument();
    cleanup();
  });

  test.each([['info'], ['ok'], ['warning'], ['error']])(
    'should apply the correct class based on the type prop: %s',
    (type) => {
      const { container } = render(
        <Alert type={type as AlertType}>
          <Heading level={3}>Heading</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Paragraph>
        </Alert>,
      );

      const alert = container.querySelector('.utrecht-alert');
      expect(alert).toHaveClass(`utrecht-alert--${type}`);
    },
  );
  afterEach(() => cleanup());
});
