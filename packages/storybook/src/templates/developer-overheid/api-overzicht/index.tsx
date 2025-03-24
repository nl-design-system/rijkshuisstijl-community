import {
  ActionGroup,
  Article,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  Card,
  Fieldset,
  FieldsetLegend,
  Footer,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
  FormFieldTextarea,
  Heading,
  HeadingGroup,
  Icon,
  LinkList,
  LinkListLink,
  PageContent,
  Paragraph,
} from '@rijkshuisstijl-community/components-react';
import { IconArrowDown, IconPlus } from '@tabler/icons-react';
import { BadgeList, DataBadge } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';

export default function DevOvhAPIoverzicht() {
  return (
    <>
      <PageBody className="rhc-templates-page rhc-templates-main-content">
        <PageContent className="rhc-templates-page-content">
          <Article>
            <div className="rhc-margin-block-end-wrapper">
              <BreadcrumbNav>
                <BreadcrumbNavLink href="/" index={0} rel="home">
                  Home
                </BreadcrumbNavLink>
                <BreadcrumbNavSeparator>
                  <Icon icon={'chevron-right'} />
                </BreadcrumbNavSeparator>
                <BreadcrumbNavLink href="/" index={1}>
                  Zoek APIs
                </BreadcrumbNavLink>
              </BreadcrumbNav>
            </div>
          </Article>
          <HeadingGroup>
            <Heading level={1}>Zoek APIs</Heading>
            <Paragraph>Overzicht van open APIs van Nederlandse overheidsorganisatie</Paragraph>
          </HeadingGroup>

          <FormFieldTextarea
            className="rhc-textarea-spacing"
            description="Voer een zoekterm in"
            label="Vind APIs"
            name="Zoek APIs"
          ></FormFieldTextarea>

          <section className="rhc-container">
            <form>
              <div className="rhc-grid-container__left">
                <aside>
                  <Fieldset>
                    <FieldsetLegend>API type</FieldsetLegend>
                    <FormFieldCheckboxGroup>
                      <FormFieldCheckboxOption label="GraphQL (1)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="OData (4)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="REST/JSON (87)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="REST/XML (19)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="Onbekend (4)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="WFS (3)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="WMS (1)"></FormFieldCheckboxOption>
                    </FormFieldCheckboxGroup>
                    <FieldsetLegend>Organisatie</FieldsetLegend>
                    <FormFieldCheckboxGroup>
                      <FormFieldCheckboxOption label="Algemeene Zaken (1)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="Binnenlandse Zaken en Koninkrijksrelaties (5)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="Buitenlandse Zaken (1)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="Centraal Bureau voor de Statistiek (1)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="Centraal Justitieel Incassobureau (1)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="Coöperatie Servicehuis Parkeer en Verblijfsrechten UA (1)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="Dienst voor het kadaster en de openbare registers (1)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="Gemeente Amsterdam (1)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="Gemeente Eindhover (1)"></FormFieldCheckboxOption>
                      <FormFieldCheckboxOption label="Gemeente Enschede (1)"></FormFieldCheckboxOption>
                    </FormFieldCheckboxGroup>
                  </Fieldset>

                  <ActionGroup className="rhc-templates-button">
                    <Button appearance="primary-action-button">
                      Meer opties
                      <Icon>
                        <IconArrowDown />
                      </Icon>
                    </Button>
                    <Button type="submit">Filter</Button>
                  </ActionGroup>
                </aside>
              </div>
            </form>

            <div className="rhc-grid-container__right">
              <div className="rhc-api-toevoegen">
                <Paragraph>119 APIs</Paragraph>
                <Button>
                  <Icon>
                    <IconPlus />
                  </Icon>
                  API toevoegen
                </Button>
              </div>
              <ol className="rhc-ordered-list">
                <li>
                  <Card
                    className="rhc-templates-card"
                    description="Centraal Bureau voor de Statistiek."
                    heading="CBS Cijfers Open Data"
                    href="#"
                    metadata="Alle Nederlandstailige Statistieken van CBS ontsloten via oData versie 4"
                    title="CBS Cijfers Open Data"
                  >
                    <BadgeList>
                      <DataBadge className="rhc-templates-databadge">OData</DataBadge>
                    </BadgeList>
                  </Card>
                </li>
                <li>
                  <Card
                    className="rhc-templates-card"
                    description="Centraal Bureau voor de Statistiek"
                    heading="CBS Content Open Data"
                    href="#"
                    metadata="Met behulp van de CBS Open Data API kun je Articles, Pages, Figures, Events en Flash content van de CBS"
                    title="CBS Content Open Data"
                  >
                    <BadgeList>
                      <DataBadge className="rhc-templates-databadge">OData</DataBadge>
                    </BadgeList>
                  </Card>
                </li>
                <li>
                  <Card
                    className="rhc-templates-card"
                    description="Centraal Bureau voor de Statistiek"
                    heading="CBS Search Engine"
                    href="#"
                    metadata="De zoekmachine van het CBS helpt je om artikelen en tabellen te vinden op de website van het CBS."
                    title="Card Title"
                  >
                    <BadgeList>
                      <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
                    </BadgeList>
                  </Card>
                </li>
                <li>
                  <Card
                    className="rhc-templates-card"
                    description="Centraal Justitieel Incassobureau"
                    heading="VO Rijk (Citizen financial Claims Process)"
                    href="#"
                    metadata="API waarmee burgers een overzicht van hun financiële verplichtingen bij een (overheids) organisatie kunnen opvragen"
                    title="Card Title"
                  >
                    <BadgeList>
                      <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
                    </BadgeList>
                  </Card>
                </li>
                <li>
                  <Card
                    className="rhc-templates-card"
                    description="Uitvoeringsorganisatie Bedrijfsvoering Rijk"
                    heading="CSO Vacature API"
                    href="#"
                    metadata="De functionaliteit van de Vacature-API bestaat uit het tellen, ophalen en filteren van het vacature-aanbod, het ophalen van data met betrekking tot het gebruikte vacatureformaat en het opslaan van nieuwe vacatures van de website WerkenvoorNederland.nl, WerkenbijdeOverheid.nl en Mobiliteitbank.nl"
                    title="Card Title"
                  >
                    <BadgeList>
                      <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
                    </BadgeList>
                  </Card>
                </li>
                <li>
                  <Card
                    className="rhc-templates-card"
                    description="De Nederlandsche Bank"
                    heading="DNB API Services"
                    href="#"
                    metadata="DNB API Services maakt het mogelijk om verschillende APIs van de Nederlandsche Bank te benaderen."
                    title="Card Title"
                  >
                    <BadgeList>
                      <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
                    </BadgeList>
                  </Card>
                </li>
                <li>
                  <Card
                    className="rhc-templates-card"
                    description="Dienst voor het kadaster en de openbare registers"
                    heading="Behandeldienst configuratie beheren"
                    href="#"
                    metadata="Een REST API voor het beheren van de behandeldienstconfiguraties. Hierin kan een bevoegd gezag een activiteit waarvoor zij verantwoordelijk is koppelen aan een behandeldienst."
                    title="Card Title"
                  >
                    <BadgeList className="rhc-badge-space">
                      <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
                      <DataBadge className="rhc-templates-databadge">dso</DataBadge> {/* ANDERE DATABADGE */}
                    </BadgeList>
                  </Card>
                </li>
                <li>
                  <Card
                    className="rhc-templates-card"
                    description="Dienst voor het kadaster en de openbare registers"
                    heading="Catalogus opvargen"
                    href="#"
                    metadata="Met deze REST API kunnen begrippen en definities worden opgevraagd uit de stelselcatalogus."
                    title="Card Title"
                  >
                    <BadgeList className="rhc-badge-space">
                      <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
                      <DataBadge className="rhc-templates-databadge">dso</DataBadge> {/* ANDERE DATABADGE */}
                    </BadgeList>
                  </Card>
                </li>
                <li>
                  <Card
                    className="rhc-templates-card"
                    description="Dienst voor het kadaster en de openbare registers"
                    heading="Geo-validatieservice"
                    href="#"
                    metadata="Met deze REST API kunnen geometrische gegevens (werkingsgebieden of locaties) gevalideerd worden tegen GML 3.2.2 SF2."
                    title="Card Title"
                  >
                    <BadgeList className="rhc-badge-space">
                      <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
                      <DataBadge className="rhc-templates-databadge">dso</DataBadge> {/* ANDERE DATABADGE */}
                      <DataBadge className="rhc-templates-databadge">geo</DataBadge> {/* ANDERE DATABADGE */}
                    </BadgeList>
                  </Card>
                </li>
                <li>
                  <Card
                    className="rhc-templates-card"
                    description="Dienst voor het kadaster en de openbare registers"
                    heading="Omgevingsdocument downloaden"
                    href="#"
                    metadata="Met deze REST API kan de vigerende regelingversie van een Omgevingsdocument uit het Digitaal Stelsel Omgevingswet (DSO) in een zip bestand worden gedownload met daarin de juridische tekst, de GIO’s en de OW-objecten."
                    title="Card Title"
                  >
                    <BadgeList className="rhc-badge-space">
                      <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
                      <DataBadge className="rhc-templates-databadge">dso</DataBadge> {/* ANDERE DATABADGE */}
                    </BadgeList>
                  </Card>
                </li>
              </ol>
            </div>
          </section>
        </PageContent>
      </PageBody>

      {/* FOOTER INFO KLOPT NIET */}

      <Footer
        appearanceLevel={4}
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        columns={[
          {
            heading: 'Service',
            children: [
              <LinkList key="1">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Contact
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Abonneren
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  RSS
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Vacatures
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Sitemap
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Help
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Archief
                </LinkListLink>
              </LinkList>,
            ],
          },
          {
            heading: 'Over deze site',
            children: (
              <LinkList key="2">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Over deze organisatie
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Wetten en regelingen
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Copyright
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Privacy
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Cookies
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Toegankelijkheid
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Open data
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Kwetsbaarheid melden
                </LinkListLink>
              </LinkList>
            ),
          },
        ]}
      />
    </>
  );
}
