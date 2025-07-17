import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ExpandableCheckboxGroup } from './ExpandableCheckboxGroup';

// groups all tests
describe('ExpandableCheckboxGroup', () => {
  it('renders successfully', () => {
    const { container } = render(
      <ExpandableCheckboxGroup
        legend="Test"
        maxVisible={3}
        selectedOptions={[]}
        options={[
          { value: 'value', label: 'React' },
          { value: 'value2', label: 'CSS' },
          { value: 'value3', label: 'Angular' },
          { value: 'value4', label: 'Web Component' },
          { value: 'value5', label: 'Vue' },
        ]}
        onOptionChange={vi.fn()}
      />,
    );
    const expandableCheckboxGroup = container.querySelector('details');
    expect(expandableCheckboxGroup).toBeInTheDocument();
  });

  // screen.debug();

  // test: can have an expanded state
  it('can be expanded when summary is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <ExpandableCheckboxGroup
        legend="Test"
        maxVisible={3}
        selectedOptions={[]}
        options={[
          { value: 'value', label: 'React' },
          { value: 'value2', label: 'CSS' },
          { value: 'value3', label: 'Angular' },
          { value: 'value4', label: 'Web Component' },
          { value: 'value5', label: 'Vue' },
        ]}
        onOptionChange={vi.fn()}
      />,
    );

    const summary = container.querySelector('summary');

    if (summary) {
      await user.click(summary);
    }

    const details = container.querySelector('details');
    expect(details).toHaveAttribute('open');
  });

  // can use custom classnames
  it('applies custom classnames', async () => {
    const { container } = render(
      <ExpandableCheckboxGroup
        className={'rhc-custom-classname'}
        legend="Test"
        maxVisible={3}
        selectedOptions={[]}
        options={[
          { value: 'value', label: 'React' },
          { value: 'value2', label: 'CSS' },
          { value: 'value3', label: 'Angular' },
          { value: 'value4', label: 'Web Component' },
          { value: 'value5', label: 'Vue' },
        ]}
        onOptionChange={vi.fn()}
      />,
    );

    const expandableCheckboxGroup = container.querySelector('details');
    expect(expandableCheckboxGroup).toBeInTheDocument();

    expect(expandableCheckboxGroup).toHaveClass('rhc-custom-classname');
  });
});
