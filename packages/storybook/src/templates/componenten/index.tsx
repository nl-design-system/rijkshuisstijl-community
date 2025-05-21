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
} from '@rijkshuisstijl-community/components-react';
import { BadgeList, DataBadge } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { allComponentsData } from './components-data';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';
import './index.css';

export default function Componenten() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [filteredComponents, setFilteredComponents] = useState(allComponentsData);
  const [resultCount, setResultCount] = useState(filteredComponents.length);

  const frameworkOptions = ['CSS', 'React', 'Angular', 'Web Components', 'Twig'];

  const handleFrameworkChange = (framework: string) => {
    setSelectedFrameworks((prevSelectedFrameworks) =>
      prevSelectedFrameworks.includes(framework)
        ? prevSelectedFrameworks.filter((f) => f !== framework)
        : [...prevSelectedFrameworks, framework],
    );
  };

  useEffect(() => {
    let componentsToFilter = allComponentsData;

    if (debouncedSearchTerm) {
      componentsToFilter = componentsToFilter.filter(
        (component) =>
          component.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          component.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
      );
    }

    if (selectedFrameworks.length > 0) {
      componentsToFilter = componentsToFilter.filter((component) =>
        selectedFrameworks.some((framework) => component.frameworks.includes(framework)),
      );
    }

    setFilteredComponents(componentsToFilter);
    setResultCount(componentsToFilter.length);
  }, [debouncedSearchTerm, selectedFrameworks]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 200);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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
          ></FormFieldTextInput>

          <div className="rhc-container">
            <form>
              <div className="rhc-grid-container__left">
                <aside>
                  <Fieldset>
                    <FieldsetLegend>Framework</FieldsetLegend>
                    <FormFieldCheckboxGroup>
                      {frameworkOptions.length > 0 &&
                        frameworkOptions.map((option) => (
                          <FormFieldCheckboxOption
                            key={option}
                            label={option}
                            onChange={() => handleFrameworkChange(option)}
                          ></FormFieldCheckboxOption>
                        ))}
                    </FormFieldCheckboxGroup>
                  </Fieldset>
                </aside>
              </div>
            </form>

            <div aria-atomic="true" aria-live="polite" className="rhc-grid-container__right">
              {resultCount === 0 ? (
                <>
                  <Heading appearanceLevel={3} level={2}>
                    Geen resultaten gevonden
                  </Heading>
                  <Paragraph>Probeer andere zoektermen of filters.</Paragraph>
                </>
              ) : (
                <>
                  <Heading appearanceLevel={3} level={2}>
                    Zoekresultaten ({resultCount} componenten gevonden)
                  </Heading>

                  <ol className="rhc-ordered-list">
                    {filteredComponents.length > 0 &&
                      filteredComponents.map((component) => (
                        <li key={component.heading}>
                          <Card
                            className="rhc-templates-card"
                            description={component.description}
                            heading={component.heading}
                            href={component.href}
                            linkLabel={component.linkLabel}
                            target="_blank"
                            title={component.title}
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
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
