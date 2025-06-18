import {
  Fieldset,
  FieldsetLegend,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
} from '@rijkshuisstijl-community/components-react';
import './expandable-checkbox-group.css';
import React, { ReactNode, useState } from 'react';

interface Option {
  value: string;
  label: ReactNode;
}
interface ExpandableCheckboxGroupProps {
  options: Option[];
  selectedOptions: string[];
  // eslint-disable-next-line no-unused-vars
  onOptionChange: (_option: string) => void;
  maxVisible?: number;
  legend: ReactNode;
}

export function ExpandableCheckboxGroup({
  options,
  selectedOptions,
  onOptionChange,
  maxVisible = Infinity,
  legend,
}: ExpandableCheckboxGroupProps) {
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
      <FormFieldCheckboxGroup>
        <div>
          {actualVisibleOptions.map((option) => renderCheckboxOption(option))}

          {actualShowExpandable && (
            <details className="rhc-expandable-checkbox-group__details" onToggle={handleToggle}>
              <summary
                aria-expanded={isExpanded}
                className="rhc-expandable-checkbox-group__summary"
                aria-label={
                  isExpanded
                    ? `Minder opties - klik om ${actualExtraOptions.length} extra framework opties te verbergen`
                    : `Meer opties - klik om ${actualExtraOptions.length} extra framework opties te tonen`
                }
              >
                {isExpanded ? `Minder opties` : `Meer opties (${actualExtraOptions.length})`}
              </summary>
              <div
                aria-label="Extra framework opties"
                className="rhc-expandable-checkbox-group__extra-list"
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
}
