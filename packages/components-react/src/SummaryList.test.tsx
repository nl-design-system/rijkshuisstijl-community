import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SummaryList } from './SummaryList';

describe('SummaryList component', () => {
  it('renders without crashing', () => {
    render(<SummaryList aria-label={'test'} list-item-key="What he said" list-item-value="I am a potato" />);
    const formSummary = screen.getByTestId('paragraph');
    expect(formSummary).toBeInTheDocument();
  });

  it('applies correct aria-label', () => {
    render(<SummaryList aria-label={'test'} list-item-key="What he said" list-item-value="I am a potato" />);
    const formSummary = screen.getByTestId('paragraph');
    expect(formSummary).toHaveAttribute('aria-label', 'test');
  });
});
