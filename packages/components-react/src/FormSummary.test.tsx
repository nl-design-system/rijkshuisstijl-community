import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormSummary } from './FormSummary';

describe('FormSummary', () => {
  it('renders without crashing', () => {
    render(<FormSummary aria-label={'test'} />);
    const formSummary = screen.getByTestId('paragraph');
    expect(formSummary).toBeInTheDocument();
  });
  it('applies correct aria-label', () => {
    render(<FormSummary aria-label={'test'} />);
    const formSummary = screen.getByTestId('paragraph');
    expect(formSummary).toHaveAttribute('aria-label', 'test');
  });
});
