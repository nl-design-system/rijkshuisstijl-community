'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import {
  Button,
  Card,
  FormFieldTextInput,
  Heading,
  HeadingGroup,
  NumberBadge,
  Paragraph,
} from '@rijkshuisstijl-community/components-react';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { BadgeList, ButtonLink, Icon } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';
import React, { ChangeEvent, FC, useCallback, useMemo, useRef, useState } from 'react';
import { DataBadgeButton } from './DataBadgeButton';
import { allComponentsData, ComponentData } from './components-data';
import { ExpandableCheckboxGroup } from './expandableCheckboxGroup';
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
    <div aria-labelledby="actieve-filters-heading" className="rhc-active-filters" role="region">
      <div className="rhc-active-filters__header">
        <Heading appearanceLevel={5} id="actieve-filters-heading" level={3}>
          Actieve filters
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
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState('');
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [stagedFrameworks, setStagedFrameworks] = useState<string[]>([]);

  const resultsRef = useRef<HTMLDivElement>(null);

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
    () => filterComponents(allComponentsData, submittedSearchTerm, allSelectedFrameworks),
    [submittedSearchTerm, allSelectedFrameworks],
  );

  const frameworkCounts: { [key: string]: number } = useMemo(
    () =>
      frameworkOptions.reduce(
        (counts, framework) => {
          counts[framework] = allComponentsData.filter((component) => component.frameworks.includes(framework)).length;
          return counts;
        },
        {} as { [key: string]: number },
      ),
    [frameworkOptions, allComponentsData],
  );
  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmittedSearchTerm(searchTerm);
    if (resultsRef.current) {
      resultsRef.current.focus({ preventScroll: true });
    }
  };

  const getStatusText = (count: number): string => {
    if (count === 0) {
      return 'Geen componenten gevonden, probeer andere zoektermen of filters.';
    } else if (count === 1) {
      return '1 component gevonden';
    } else {
      return `${count} componenten gevonden`;
    }
  };

  // Handle checkbox changes (doesn't affect active filters)
  const handleCheckboxChange = useCallback((framework: string) => {
    setStagedFrameworks((prev) =>
      prev.includes(framework) ? prev.filter((f) => f !== framework) : [...prev, framework],
    );
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

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      setSelectedFrameworks(stagedFrameworks);
      if (resultsRef.current) {
        resultsRef.current.focus({ preventScroll: true });
      }
    },
    [stagedFrameworks],
  );

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

  return (
    <>
      <SharedHeader />
      <PageBody className="rhc-templates-page">
        <SharedMainPageContent>
          <HeadingGroup>
            <Heading id="main-heading" level={1}>
              Componenten overzicht
            </Heading>
            <Paragraph>
              Filter op zoekterm en framework om componenten uit de Rijkshuisstijl Community te vinden. Bekijk direct de
              component in Storybook door de link in het zoekresultaat te volgen.
            </Paragraph>
          </HeadingGroup>

          <search>
            <form className="rhc-search-form" onSubmit={handleSearchSubmit}>
              <FormFieldTextInput
                id="componentSearchInput"
                label="Voer een zoekterm in"
                name="q"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Button aria-label="Zoeken" className="rhc-search-button" type="submit">
                <IconSearch />
              </Button>
            </form>
          </search>

          <ActiveFiltersBadgeList selectedFrameworks={activeFilters} onRemoveFilter={handleRemoveActiveFilter} />

          <div className="rhc-container">
            <aside>
              <search>
                <form onSubmit={handleFilterSubmit}>
                  <ExpandableCheckboxGroup
                    legend="Framework"
                    maxVisible={3}
                    selectedOptions={selectedFrameworks}
                    options={frameworkOptions.map((option) => ({
                      label: (
                        <>
                          {option}
                          <NumberBadge
                            aria-label={`${option} (${frameworkCounts[option]} ${frameworkCounts[option] === 1 ? 'component' : 'componenten'})`}
                            className="rhc-checkbox-number-badge"
                          >
                            {frameworkCounts[option]}
                          </NumberBadge>
                        </>
                      ),
                      value: option,
                    }))}
                    onOptionChange={handleCheckboxChange}
                  />
                  <Button appearance="secondary-action-button" type="submit">
                    Filter
                  </Button>
                </form>
              </search>
            </aside>

            <div className="rhc-grid-container__end">
              <div className="rhc-componenten-toevoegen">
                {/* TODO: change to correct href */}
                <ButtonLink appearance="secondary-action-button" href="/">
                  <Icon>
                    <IconPlus />
                  </Icon>
                  Component toevoegen
                </ButtonLink>
              </div>

              <div className="rhc-grid-container__end" ref={resultsRef} tabIndex={-1}>
                <HeadingGroup>
                  <Heading appearanceLevel={3} level={2}>
                    Zoekresultaten
                  </Heading>
                  <Paragraph role="status">{getStatusText(filteredComponents.length)}</Paragraph>
                </HeadingGroup>

                {filteredComponents.length > 0 && (
                  <ol className="rhc-ordered-list">
                    {filteredComponents.map((component, index, array) => (
                      <li aria-posinset={index + 1} aria-setsize={array.length} key={component.heading}>
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
                )}
              </div>
            </div>
          </div>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
