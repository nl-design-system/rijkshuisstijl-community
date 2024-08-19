import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';
import '@testing-library/jest-dom';

describe('Alert', () => {
  it('should render successfully', () => {
    render(
      <Alert
        type="info"
        icon=""
        heading="Heading"
        headingLevel={3}
        textContent="Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *"
      />,
    );
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});