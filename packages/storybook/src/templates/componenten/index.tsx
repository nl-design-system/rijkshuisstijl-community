'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import { PageNumberNavigation } from '@rijkshuisstijl-community/components-react';
import {
  Button,
  Card,
  DataBadgeButton,
  ExpandableCheckboxGroup,
  FormFieldTextInput,
  Heading,
  HeadingGroup,
  NumberBadge,
  Paragraph,
} from '@rijkshuisstijl-community/components-react';
import { IconCheck, IconPlus, IconSearch } from '@tabler/icons-react';
import { BadgeList, ButtonLink, Icon } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';
import React, {
  AnchorHTMLAttributes,
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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

const ActiveFiltersBadgeList = ({ onRemoveFilter, selectedFrameworks }: ActiveFiltersBadgeListProps) => {
  if (selectedFrameworks.length === 0) return null;

  return (
    <div aria-labelledby="actieve-filters-heading" className="rhc-active-filters" role="region">
      <div className="rhc-active-filters__header">
        <Heading appearanceLevel={5} id="actieve-filters-heading" level={3}>
          Actieve filters
        </Heading>
      </div>
      <BadgeList aria-labelledby="actieve-filters-heading" className="rhc-active-filters__list" role="group">
        {selectedFrameworks.map((framework) => (
          <DataBadgeButton
            aria-label={`${framework} filter verwijderen`}
            className="rhc-active-filters__badge"
            helperText="- Klik om filter te verwijderen"
            icon={<IconCheck />}
            iconAlign={'end'}
            key={`active-${framework}`}
            pressed={true}
            value={framework}
            onClick={() => onRemoveFilter(framework)}
          >
            {framework}
          </DataBadgeButton>
        ))}
      </BadgeList>
    </div>
  );
};

export default function Componenten() {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState('');
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [stagedFrameworks, setStagedFrameworks] = useState<string[]>([]);
  const [announceMessage, setAnnounceMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  // Memoize LinkComponent to prevent unnecessary re-renders
  const LinkComponent = useCallback(
    (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} onClick={onPaginationLinkClick} />,
    [],
  );

  const resultsRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);

  const filteredComponents = useMemo(
    () => filterComponents(allComponentsData, submittedSearchTerm, selectedFrameworks),
    [submittedSearchTerm, selectedFrameworks],
  );

  const maxComponentsPerPage = 5;

  const onPaginationLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const pageNumber = href.substring(href.lastIndexOf('/') + 1, href.length);
    setCurrentPage(parseInt(pageNumber, 10) - 1);
  }, []);

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

  // Announce changes to screen readers
  const announceChange = useCallback((message: string) => {
    setAnnounceMessage(message);
    // Clear the message after a short delay to allow for re-announcements
    setTimeout(() => setAnnounceMessage(''), 100);
  }, []);

  // Announce filter changes
  useEffect(() => {
    if (selectedFrameworks.length === 0) {
      announceChange('Alle filters verwijderd. Alle componenten worden getoond.');
    } else {
      const filterText = selectedFrameworks.join(', ');
      const resultCount = filteredComponents.length;
      announceChange(
        `Filters toegepast: ${filterText}. ${resultCount} ${resultCount === 1 ? 'component' : 'componenten'} gevonden.`,
      );
    }
  }, [selectedFrameworks, filteredComponents.length, announceChange]);

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmittedSearchTerm(searchTerm);

    // Announce search results
    setTimeout(() => {
      const resultCount = filterComponents(allComponentsData, searchTerm, selectedFrameworks).length;
      if (searchTerm.trim()) {
        announceChange(
          `Zoekopdracht "${searchTerm}" uitgevoerd. ${resultCount} ${resultCount === 1 ? 'component' : 'componenten'} gevonden.`,
        );
      }
    }, 100);

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

  // Handle checkbox changes (stages the selection, doesn't apply filters immediately)
  const handleCheckboxChange = useCallback(
    (framework: string): void => {
      setStagedFrameworks((prev) => {
        const isRemoving = prev.includes(framework);
        const newStaged = isRemoving ? prev.filter((f) => f !== framework) : [...prev, framework];

        // Announce the staging change
        const action = isRemoving ? 'gedeselecteerd' : 'geselecteerd';
        announceChange(`${framework} ${action} voor filtering. Klik op Filter knop om toe te passen.`);

        return newStaged;
      });
    },
    [announceChange],
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Apply the staged framework selections when filter button is clicked
  const handleFilterSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();

      const previousCount = selectedFrameworks.length;
      const newCount = stagedFrameworks.length;

      // Apply staged frameworks to selectedFrameworks
      setSelectedFrameworks([...stagedFrameworks]);

      // Announce the filter application
      if (newCount !== previousCount) {
        if (newCount === 0) {
          announceChange('Alle filters verwijderd.');
        } else {
          announceChange(`Filters toegepast: ${stagedFrameworks.join(', ')}.`);
        }
      }

      if (resultsRef.current) {
        resultsRef.current.focus({ preventScroll: true });
      }
    },
    [stagedFrameworks, selectedFrameworks, announceChange],
  );

  // Handle DataBadge clicks (immediate filtering)
  const handleDataBadgeClick = useCallback(
    (framework: string): void => {
      const isActive = selectedFrameworks.includes(framework);

      if (isActive) {
        // Remove from both active and staged
        const newSelected = selectedFrameworks.filter((f) => f !== framework);
        setSelectedFrameworks(newSelected);
        setStagedFrameworks((prev) => prev.filter((f) => f !== framework));

        announceChange(`${framework} filter verwijderd.`);
      } else {
        // Add to both active and staged
        const newSelected = [...selectedFrameworks, framework];
        setSelectedFrameworks(newSelected);
        setStagedFrameworks((prev) => {
          // Add to staged if not already there
          if (!prev.includes(framework)) {
            return [...prev, framework];
          }
          return prev;
        });

        announceChange(`${framework} filter toegevoegd.`);
      }
    },
    [selectedFrameworks, announceChange],
  );

  // Remove filter and sync with all states
  const handleRemoveActiveFilter = useCallback(
    (framework: string): void => {
      const newSelected = selectedFrameworks.filter((f) => f !== framework);
      setSelectedFrameworks(newSelected);
      setStagedFrameworks((prev) => prev.filter((f) => f !== framework));

      announceChange(`${framework} filter verwijderd.`);
    },
    [selectedFrameworks, announceChange],
  );

  return (
    <>
      <SharedHeader />
      <PageBody className="rhc-templates-page">
        <SharedMainPageContent>
          {/* Screen reader announcements */}
          <div className="rhc-sr-only" ref={announcementRef} role="status">
            {announceMessage}
          </div>

          <HeadingGroup>
            <Heading id="main-heading" level={1}>
              Componenten overzicht
            </Heading>
            <Paragraph>
              Filter op zoekterm en framework om componenten uit de Rijkshuisstijl Community te vinden. Bekijk direct de
              component in Storybook door de link in het zoekresultaat te volgen.
            </Paragraph>
          </HeadingGroup>

          <div className="rhc-search-container">
            <search aria-labelledby="search-heading" role="search">
              <h2 className="rhc-sr-only" id="search-heading">
                Zoeken
              </h2>
              <form className="rhc-search-form" onSubmit={handleSearchSubmit}>
                <FormFieldTextInput
                  aria-describedby="search-help"
                  className="rhc-search-form__label"
                  id="componentSearchInput"
                  label="Voer een zoekterm in"
                  name="q"
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="rhc-sr-only" id="search-help">
                  Zoek in componentnamen en beschrijvingen. Druk op Enter om te zoeken.
                </div>
                <Button aria-label="Zoeken" className="rhc-search-button" type="submit">
                  <Icon>
                    <IconSearch />
                  </Icon>
                </Button>
              </form>
            </search>
            <div className="rhc-componenten-toevoegen">
              <ButtonLink appearance="secondary-action-button" href="/">
                <Icon>
                  <IconPlus />
                </Icon>
                Component toevoegen
              </ButtonLink>
            </div>
          </div>

          <ActiveFiltersBadgeList selectedFrameworks={selectedFrameworks} onRemoveFilter={handleRemoveActiveFilter} />

          <div className="rhc-container">
            <aside aria-labelledby="filters-heading">
              <h2 className="rhc-sr-only" id="filters-heading">
                Filters
              </h2>
              <search aria-labelledby="framework-filter-heading" role="search">
                <h3 className="rhc-sr-only" id="framework-filter-heading">
                  Framework filters
                </h3>
                <form aria-describedby="filter-help" onSubmit={handleFilterSubmit}>
                  <div className="rhc-sr-only" id="filter-help">
                    Selecteer frameworks en klik op Filter om de resultaten te beperken.
                  </div>
                  <ExpandableCheckboxGroup
                    closeText="Toon minder frameworks"
                    expandText="Toon meer frameworks"
                    extraOptionsText="Extra framework opties"
                    legend="Framework"
                    maxVisible={3}
                    selectedOptions={stagedFrameworks}
                    options={frameworkOptions.map((option) => ({
                      label: (
                        <>
                          {option}
                          <NumberBadge
                            aria-label={`${frameworkCounts[option]} ${frameworkCounts[option] === 1 ? 'component' : 'componenten'}`}
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
                  <Button appearance="secondary-action-button" aria-describedby="filter-button-help" type="submit">
                    Filter
                  </Button>
                  <div className="rhc-sr-only" id="filter-button-help">
                    Pas de geselecteerde framework filters toe op de zoekresultaten.
                  </div>
                </form>
              </search>
            </aside>

            <div className="rhc-grid-container__end" ref={resultsRef} tabIndex={-1}>
              <HeadingGroup>
                <Heading appearanceLevel={3} id="results-heading" level={2}>
                  Zoekresultaten
                </Heading>
                <Paragraph role="status">{getStatusText(filteredComponents.length)}</Paragraph>
              </HeadingGroup>

              {filteredComponents.length > 0 && (
                <ol aria-labelledby="results-heading" className="rhc-ordered-list">
                  {filteredComponents
                    .slice(
                      currentPage * maxComponentsPerPage,
                      currentPage * maxComponentsPerPage + maxComponentsPerPage,
                    )
                    .map((component, index, array) => (
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
                          <BadgeList
                            aria-label={`Framework opties voor ${component.heading}`}
                            className="rhc-templates-badgelist"
                            role="group"
                          >
                            {component.frameworks.map((framework) => (
                              <DataBadgeButton
                                aria-label={`${framework} filter ${selectedFrameworks.includes(framework) ? 'verwijderen' : 'toevoegen'}`}
                                helperText={`- Klik om filter te ${selectedFrameworks.includes(framework) ? 'verwijderen' : 'toevoegen'}`}
                                key={framework}
                                pressed={selectedFrameworks.includes(framework)}
                                value={framework}
                                onClick={() => handleDataBadgeClick(framework)}
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

              <PageNumberNavigation
                linkComponent={LinkComponent}
                maxVisiblePages={5}
                page={currentPage + 1}
                totalPages={Math.ceil(filteredComponents.length / maxComponentsPerPage)}
                linkTemplate={function Xs(pageNumber) {
                  return '/' + pageNumber;
                }}
              />
            </div>
          </div>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
