import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ExpandableCheckboxGroup } from './ExpandableCheckboxGroup';

describe('ExpandableCheckboxGroup', () => {
  const testOptions = [
    { value: 'value', label: 'React' },
    { value: 'value2', label: 'CSS' },
    { value: 'value3', label: 'Angular' },
    { value: 'value4', label: 'Web Component' },
    { value: 'value5', label: 'Vue' },
  ];
  it('renders successfully', () => {
    const { container } = render(
      <ExpandableCheckboxGroup
        legend="Test"
        maxVisible={3}
        options={testOptions}
        selectedOptions={[]}
        onOptionChange={vi.fn()}
      />,
    );
    const expandableCheckboxGroup = container.querySelector('details');
    expect(expandableCheckboxGroup).toBeInTheDocument();
  });

  // test: can have an expanded state
  it('can be expanded when summary is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <ExpandableCheckboxGroup
        legend="Test"
        maxVisible={3}
        options={testOptions}
        selectedOptions={[]}
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

  // test: can use custom classnames
  it('applies custom classnames', async () => {
    const { container } = render(
      <ExpandableCheckboxGroup
        className={'rhc-custom-classname'}
        legend="Test"
        maxVisible={3}
        options={testOptions}
        selectedOptions={[]}
        onOptionChange={vi.fn()}
      />,
    );

    const expandableCheckboxGroup = container.querySelector('details');
    expect(expandableCheckboxGroup).toBeInTheDocument();

    expect(expandableCheckboxGroup).toHaveClass('rhc-custom-classname');
  });

  // test: only shows maxVisible options when not expanded
  it('shows only maxVisible options when collapsed', () => {
    const { container } = render(
      <ExpandableCheckboxGroup
        className={'rhc-custom-classname'}
        legend="Test"
        maxVisible={3}
        options={testOptions}
        selectedOptions={[]}
        onOptionChange={vi.fn()}
      />,
    );

    const details = container.querySelector('details');
    expect(details).not.toHaveAttribute('open');

    const allCheckboxes = container.querySelectorAll('input[type="checkbox"]');
    expect(allCheckboxes).toHaveLength(testOptions.length);

    expect(allCheckboxes[0]).toBeVisible();
    expect(allCheckboxes[allCheckboxes.length - 1]).not.toBeVisible();
  });
});
