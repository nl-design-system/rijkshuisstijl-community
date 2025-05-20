import {
  Card,
  Fieldset,
  FieldsetLegend,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
  FormFieldTextInput,
  Heading,
  HeadingGroup,
  PageContent,
  PageHeader,
  Paragraph,
} from '@rijkshuisstijl-community/components-react';
import { BadgeList, DataBadge } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { allComponentsData } from './components-data';

export default function Componenten() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [filteredComponents, setFilteredComponents] = useState(allComponentsData);

  const frameworkOptions = ['CSS', 'React', 'Angular', 'Web Components', 'Twig'];

  const handleFrameworkChange = (framework: string) => {
    console.log(framework);
    setSelectedFrameworks((prevSelectedFrameworks) =>
      prevSelectedFrameworks.includes(framework)
        ? prevSelectedFrameworks.filter((f) => f !== framework)
        : [...prevSelectedFrameworks, framework],
    );
  };

  useEffect(() => {
    let componentsToFilter = allComponentsData;

    if (searchTerm) {
      componentsToFilter = componentsToFilter.filter(
        (component) =>
          component.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          component.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedFrameworks.length > 0) {
      componentsToFilter = componentsToFilter.filter((component) =>
        selectedFrameworks.some((framework) => component.frameworks.includes(framework)),
      );
    }

    setFilteredComponents(componentsToFilter);
  }, [searchTerm, selectedFrameworks]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <PageHeader>
        <title>Componenten</title>
      </PageHeader>

      <PageBody className="rhc-templates-page rhc-templates-main-content">
        <PageContent className="rhc-templates-page-content">
          <HeadingGroup>
            <Heading level={1}>Componenten</Heading>
            <Paragraph>
              De componenten van NL Design System worden met een estafette aanpak gemaakt en kunnen dus verschillende
              statussen hebben.
            </Paragraph>
          </HeadingGroup>

          <FormFieldTextInput
            className="rhc-textinput-spacing"
            id="componentSearchInput"
            label="Zoek componenten"
            name="Zoek componenten"
            placeholder=""
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
          ></FormFieldTextInput>

          <section className="rhc-container">
            <form>
              <div className="rhc-grid-container__left">
                <aside>
                  <Fieldset>
                    <FieldsetLegend>Framework</FieldsetLegend>
                    <FormFieldCheckboxGroup>
                      {frameworkOptions.length > 0 &&
                        frameworkOptions.map((option) => (
                          <>
                            <FormFieldCheckboxOption
                              label={option}
                              onChange={() => handleFrameworkChange(option)}
                            ></FormFieldCheckboxOption>
                            <></>
                          </>
                        ))}
                    </FormFieldCheckboxGroup>
                  </Fieldset>
                </aside>
              </div>
            </form>

            <div className="rhc-grid-container__right">
              <ol className="rhc-ordered-list">
                {filteredComponents.length > 0 &&
                  filteredComponents.map((component) => (
                    <>
                      <li>
                        <Card
                          className="rhc-templates-card"
                          description={component.description}
                          heading={component.heading}
                          href="#"
                          metadata=""
                          title={component.title}
                        >
                          <BadgeList>
                            <DataBadge className="rhc-templates-databadge">Community</DataBadge>
                          </BadgeList>
                        </Card>
                      </li>
                    </>
                  ))}
              </ol>
            </div>
          </section>
        </PageContent>
      </PageBody>
    </>
  );
}
