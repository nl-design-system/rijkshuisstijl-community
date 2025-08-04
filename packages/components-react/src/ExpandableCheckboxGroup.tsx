import clsx from 'clsx';
import React, { PropsWithChildren, ReactNode, useState } from 'react';
import { Fieldset, FieldsetLegend } from './Fieldset';
import { FormFieldCheckboxGroup, FormFieldCheckboxGroupProps } from './FormFieldCheckboxGroup';
import { FormFieldCheckboxOption } from './FormFieldCheckboxOption';

interface Option {
  value: string;
  label: ReactNode;
}
export interface ExpandableCheckboxGroupProps extends FormFieldCheckboxGroupProps {
  options: Option[];
  selectedOptions: string[];
  // eslint-disable-next-line no-unused-vars
  onOptionChange: (_option: string) => void;
  maxVisible?: number;
  legend: ReactNode;
  expandText?: string;
  closeText?: string;
  extraOptionsText?: string;
}

export const ExpandableCheckboxGroup = ({
  expandText = 'Meer opties',
  extraOptionsText = 'Extra opties',
  closeText = 'Minder opties',
  options,
  selectedOptions,
  onOptionChange,
  maxVisible = Infinity,
  legend,
  className,
  ...restProps
}: PropsWithChildren<ExpandableCheckboxGroupProps>) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const actualMaxVisible = Math.max(Math.min(maxVisible, options.length), 0);
  const actualVisibleOptions = options.slice(0, actualMaxVisible);
  const actualExtraOptions = options.slice(actualMaxVisible);
  const actualShowExpandable = actualExtraOptions.length >= 1;
  const handleToggle = (event: React.SyntheticEvent<HTMLDetailsElement>) => {
    setIsExpanded(event.currentTarget.open);
  };

  const renderCheckboxOption = ({ label, value }: Option) => (
    <div key={value}>
      <FormFieldCheckboxOption
        checked={selectedOptions.includes(value)}
        label={label}
        onChange={() => onOptionChange(value)}
      />
    </div>
  );

  return (
    <Fieldset>
      <FieldsetLegend>{legend}</FieldsetLegend>
      <FormFieldCheckboxGroup {...restProps}>
        <div>
          {actualVisibleOptions.map((option) => renderCheckboxOption(option))}

          {actualShowExpandable && (
            <details className={clsx('rhc-expandable-checkbox-group__details', className)} onToggle={handleToggle}>
              <summary
                aria-expanded={isExpanded}
                aria-label={isExpanded ? closeText : `${expandText} (${actualExtraOptions.length})`}
                className={clsx('rhc-expandable-checkbox-group__summary', className)}
              >
                {isExpanded ? closeText : `${expandText} (${actualExtraOptions.length})`}
              </summary>
              <div
                aria-label={extraOptionsText}
                className={clsx('rhc-expandable-checkbox-group__extra-list', className)}
                role="group"
              >
                {actualExtraOptions.map((option) => renderCheckboxOption(option))}
              </div>
            </details>
          )}
        </div>
      </FormFieldCheckboxGroup>
    </Fieldset>
  );
};

ExpandableCheckboxGroup.displayName = 'ExpandableCheckboxGroup';
