import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

describe('CheckboxGroup', () => {
  it('renders successfully', () => {
    render(
      <CheckboxGroup>
        <Checkbox />
      </CheckboxGroup>,
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <CheckboxGroup className="custom-class">
        <Checkbox />
      </CheckboxGroup>,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders multiple checkboxes', () => {
    render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>,
    );
    expect(screen.getAllByRole('checkbox')).toHaveLength(3);
  });

  it('sets role="group" when there are multiple children', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>,
    );
    expect(container.firstChild).toHaveAttribute('role', 'group');
  });

  it('does not set role="group" when there is only one child', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
      </CheckboxGroup>,
    );
    expect(container.firstChild).not.toHaveAttribute('role');
  });

  it('passes through additional props', () => {
    render(
      <CheckboxGroup data-testid="test-group">
        <Checkbox />
      </CheckboxGroup>,
    );
    expect(screen.getByTestId('test-group')).toBeInTheDocument();
  });
});
