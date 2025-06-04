'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import {
  Card,
  Fieldset,
  FieldsetLegend,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
  FormFieldTextInput,
  Heading,
  HeadingGroup,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@rijkshuisstijl-community/components-react';
import { BadgeList } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import { DataBadgeButton } from './DataBadgeButton';
import { allComponentsData, ComponentData } from './components-data';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';
import './index.css';

const frameworkOptions: string[] = ['CSS', 'React', 'Angular', 'Web Components', 'Twig'];

const filterComponents = (data: ComponentData[], searchTerm: string, frameworks: string[]) => {
  return data.filter((component) => {
    const searchMatch =
      component.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase());

    const frameworkMatch = frameworks.length === 0 || frameworks.some((f) => component.frameworks.includes(f));

    return searchMatch && frameworkMatch;
  });
};

interface ActiveFiltersBadgeListProps {
  // eslint-disable-next-line no-unused-vars
  onRemoveFilter: (framework: string) => void;
  selectedFrameworks: string[];
}

const ActiveFiltersBadgeList: FC<ActiveFiltersBadgeListProps> = ({ onRemoveFilter, selectedFrameworks }) => {
  if (selectedFrameworks.length === 0) return null;

  return (
    <div aria-label="Actieve filters" className="rhc-active-filters" role="region">
      <div className="rhc-active-filters__header">
        <Heading appearanceLevel={4} level={3}>
          Actieve filters:
        </Heading>
      </div>
      <BadgeList className="rhc-active-filters__list">
        {selectedFrameworks.map((framework) => (
          <DataBadgeButton
            className="rhc-active-filters__badge"
            key={`active-${framework}`}
            pressed={true}
            value={framework}
            onClick={onRemoveFilter}
          >
            {framework}
          </DataBadgeButton>
        ))}
      </BadgeList>
    </div>
  );
};

export default function Componenten() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  // Combine both checkbox selections and active filters for component filtering
  const allSelectedFrameworks = useMemo(() => {
    const combined = [...selectedFrameworks, ...activeFilters];
    const unique = [...new Set(combined)]; // Remove duplicates
    console.log('Debug - selectedFrameworks:', selectedFrameworks);
    console.log('Debug - activeFilters:', activeFilters);
    console.log('Debug - combined frameworks:', unique);
    return unique;
  }, [selectedFrameworks, activeFilters]);

  const filteredComponents = useMemo(
    () => filterComponents(allComponentsData, debouncedSearchTerm, allSelectedFrameworks),
    [debouncedSearchTerm, allSelectedFrameworks],
  );

  // Handle checkbox changes (doesn't affect active filters)
  const handleCheckboxChange = useCallback((framework: string) => {
    setSelectedFrameworks((prev) => {
      const isCurrentlySelected = prev.includes(framework);
      if (isCurrentlySelected) {
        // If unchecking, also remove from active filters
        setActiveFilters((activePrev) => activePrev.filter((f) => f !== framework));
        return prev.filter((f) => f !== framework);
      } else {
        // If checking, also add to active filters
        setActiveFilters((activePrev) => (activePrev.includes(framework) ? activePrev : [...activePrev, framework]));
        return [...prev, framework];
      }
    });
  }, []);

  // Handle DataBadge clicks (creates active filters and syncs checkboxes)
  const handleDataBadgeClick = useCallback((framework: string) => {
    setActiveFilters((prev) => {
      const isCurrentlyActive = prev.includes(framework);
      if (isCurrentlyActive) {
        // Remove from active filters
        return prev.filter((f) => f !== framework);
      } else {
        // Add to active filters
        return [...prev, framework];
      }
    });

    // Also sync the checkbox state
    setSelectedFrameworks((prev) => {
      const isCurrentlySelected = prev.includes(framework);
      if (isCurrentlySelected) {
        return prev.filter((f) => f !== framework);
      } else {
        return [...prev, framework];
      }
    });
  }, []);

  const handleRemoveActiveFilter = useCallback((framework: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== framework));
    // Also uncheck the corresponding checkbox
    setSelectedFrameworks((prev) => prev.filter((f) => f !== framework));
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 200);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  return (
    <>
      <SharedHeader />
      <PageBody className="rhc-templates-page">
        <SharedMainPageContent>
          <HeadingGroup>
            <Heading level={1}>Componenten overzicht</Heading>
            <Paragraph>
              Filter op zoekterm en framework om componenten uit de Rijkshuisstijl Community te vinden. Bekijk direct de
              component in Storybook door de link in het zoekresultaat te volgen.
            </Paragraph>
          </HeadingGroup>

          <FormFieldTextInput
            id="componentSearchInput"
            label="Voer een zoekterm in"
            name="Zoek componenten"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          <ActiveFiltersBadgeList selectedFrameworks={activeFilters} onRemoveFilter={handleRemoveActiveFilter} />

          <div className="rhc-container">
            <form>
              <div className="rhc-grid-container__left">
                <aside>
                  <Fieldset>
                    <FieldsetLegend>Framework</FieldsetLegend>
                    <FormFieldCheckboxGroup>
                      <UnorderedList>
                        {frameworkOptions.map((option) => (
                          <UnorderedListItem key={option}>
                            <FormFieldCheckboxOption
                              checked={selectedFrameworks.includes(option)}
                              label={option}
                              onChange={() => handleCheckboxChange(option)}
                            />
                          </UnorderedListItem>
                        ))}
                      </UnorderedList>
                    </FormFieldCheckboxGroup>
                  </Fieldset>
                </aside>
              </div>
            </form>

            <div aria-atomic="true" aria-live="polite" className="rhc-grid-container__right">
              {filteredComponents.length === 0 ? (
                <>
                  <Heading appearanceLevel={3} level={2}>
                    Geen resultaten gevonden
                  </Heading>
                  <Paragraph>Probeer andere zoektermen of filters.</Paragraph>
                </>
              ) : (
                <>
                  <Heading appearanceLevel={3} level={2}>
                    Zoekresultaten ({filteredComponents.length} componenten gevonden)
                  </Heading>
                  <ol className="rhc-ordered-list">
                    {filteredComponents.map((component) => (
                      <li key={component.heading}>
                        <Card
                          className="rhc-templates-card"
                          description={<Paragraph>{component.description}</Paragraph>}
                          href={component.href}
                          linkLabel={component.linkLabel}
                          target="_blank"
                          title={component.title}
                          heading={
                            <Heading appearanceLevel={4} level={2}>
                              {component.heading}
                            </Heading>
                          }
                        >
                          <BadgeList className="rhc-templates-badgelist">
                            {component.frameworks.map((framework) => (
                              <DataBadgeButton
                                key={framework}
                                pressed={activeFilters.includes(framework)}
                                value={framework}
                                onClick={handleDataBadgeClick}
                              >
                                {framework}
                              </DataBadgeButton>
                            ))}
                          </BadgeList>
                        </Card>
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </div>
          </div>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
