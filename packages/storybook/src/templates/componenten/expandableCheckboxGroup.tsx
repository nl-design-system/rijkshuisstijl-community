import {
  Fieldset,
  FieldsetLegend,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
} from '@rijkshuisstijl-community/components-react';
import './expandable-checkbox-group.css';
import { ReactNode } from 'react';

interface ExpandableCheckboxGroupProps {
  options: string[];
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
  const actualMaxVisible = Math.max(Math.min(maxVisible, options.length), 0);

  const actualVisibleOptions = options.slice(0, actualMaxVisible);
  const actualExtraOptions = options.slice(actualMaxVisible);
  const actualShowExpandable = actualExtraOptions.length >= 1;

  const renderCheckboxOption = (option: string) => (
    <div key={option}>
      <FormFieldCheckboxOption
        checked={selectedOptions.includes(option)}
        label={option}
        onChange={() => onOptionChange(option)}
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
            <details className="rhc-expandable-checkbox-group__details">
              <summary className="rhc-expandable-checkbox-group__summary">
                Meer opties ({actualExtraOptions.length})
              </summary>
              <div className="rhc-expandable-checkbox-group__extra-list">
                {actualExtraOptions.map((option) => renderCheckboxOption(option))}
              </div>
            </details>
          )}
        </div>
      </FormFieldCheckboxGroup>
    </Fieldset>
  );
}
