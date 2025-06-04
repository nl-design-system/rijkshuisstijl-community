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
import { BadgeList, ButtonLink, DataBadge, Icon } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';
import { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react';
import React from 'react';
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

export default function Componenten() {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState('');
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [stagedFrameworks, setStagedFrameworks] = useState<string[]>([]);

  const resultsRef = useRef<HTMLDivElement>(null);

  const filteredComponents = useMemo(
    () => filterComponents(allComponentsData, submittedSearchTerm, selectedFrameworks),
    [submittedSearchTerm, selectedFrameworks],
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

  const handleFrameworkChange = useCallback((framework: string) => {
    setStagedFrameworks((prev) =>
      prev.includes(framework) ? prev.filter((f) => f !== framework) : [...prev, framework],
    );
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
                    onOptionChange={handleFrameworkChange}
                  />
                  <Button appearance="secondary-action-button" type="submit">
                    Filter
                  </Button>
                </form>
              </search>
            </aside>

            <div aria-atomic="true" aria-live="polite" className="rhc-grid-container__right">
              <div className="rhc-componenten-toevoegen">
                {/* TODO: change to correct href */}
                <ButtonLink appearance="secondary-action-button" href="/">
                  <Icon>
                    <IconPlus />
                  </Icon>
                  Component toevoegen
                </ButtonLink>
              </div>

              <div className="rhc-grid-container__right" ref={resultsRef} tabIndex={-1}>
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
                                <DataBadge className="rhc-templates-databadge" key={framework}>
                                  {framework}
                                </DataBadge>
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
          </div>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
