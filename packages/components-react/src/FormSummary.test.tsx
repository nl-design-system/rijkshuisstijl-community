import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormSummary } from './FormSummary';

describe('FormSummary', () => {
  it('renders without crashing', () => {
    render(<FormSummary aria-label={'test'} />);
    const formSummary = screen.getByRole('status');
    expect(formSummary).toBeInTheDocument();
  });
  it('applies correct aria-label', () => {
    render(<FormSummary aria-label={'test'} />);
    const formSummary = screen.getByRole('status');
    expect(formSummary).toHaveAttribute('aria-label', 'test');
  });
  it('applies correct role', () => {
    render(<FormSummary aria-label={'test'} role={'status'} />);
    const formSummary = screen.getByRole('status');
    expect(formSummary).toHaveAttribute('role', 'status');
  });
});
