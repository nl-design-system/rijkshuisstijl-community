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
import { BadgeList, DataBadge } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
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

export default function Componenten() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  const filteredComponents = useMemo(
    () => filterComponents(allComponentsData, debouncedSearchTerm, selectedFrameworks),
    [debouncedSearchTerm, selectedFrameworks],
  );

  const handleFrameworkChange = useCallback((framework: string) => {
    setSelectedFrameworks((prev) =>
      prev.includes(framework) ? prev.filter((f) => f !== framework) : [...prev, framework],
    );
  }, []);
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
          />

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
                            <FormFieldCheckboxOption label={option} onChange={() => handleFrameworkChange(option)} />
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
