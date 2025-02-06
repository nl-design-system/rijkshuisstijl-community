import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  it('renders successfully', () => {
    render(
      <RadioGroup>
        <Radio />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <RadioGroup className="custom-class">
        <Radio />
      </RadioGroup>,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders multiple radios', () => {
    render(
      <RadioGroup>
        <Radio />
        <Radio />
        <Radio />
      </RadioGroup>,
    );
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('sets role="group" when there are multiple children', () => {
    const { container } = render(
      <RadioGroup>
        <Radio />
        <Radio />
      </RadioGroup>,
    );
    expect(container.firstChild).toHaveAttribute('role', 'group');
  });

  it('does not set role="group" when there is only one child', () => {
    const { container } = render(
      <RadioGroup>
        <Radio />
      </RadioGroup>,
    );
    expect(container.firstChild).not.toHaveAttribute('role');
  });

  it('passes through additional props', () => {
    render(
      <RadioGroup data-testid="test-group">
        <Radio />
      </RadioGroup>,
    );
    expect(screen.getByTestId('test-group')).toBeInTheDocument();
  });
});
