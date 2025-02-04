import {
  ActionGroup,
  Article,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  Card,
  //   Fieldset,
  FieldsetLegend,
  Footer,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
  //   CheckboxGroup,
  //   DataBadge,
  //   Donutchart,
  //   Form,
  //   FormField,
  Heading,
  //   HeadingGroup,
  Icon,
  LinkList,
  LinkListLink,
  //   LinkButton,
  //   Logo,
  //   NavBar,
  PageContent,
  PageHeader,
  //   PageNumberNavigation,
  Paragraph,
  Textarea,
  //   Textarea,
  //   Subtitle,
  //   SunmitButton,
  //   ToggleButton,
} from '@rijkshuisstijl-community/components-react';
import { IconArrowDown, IconPlus } from '@tabler/icons-react';
import { DataBadge } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';
// import { UtrechtButtonGroup } from '@utrecht/web-component-library-react';

export default function Page() {
  return (
    <>
      <PageHeader>
        {/* <Logo organisation="Rijkshuisstijl Community">
          <Icon className={'dutch-map'} icon={'nederland-map'} />
        </Logo>
        <NavBar
          items={[
            { id: '1', href: '/', label: 'Rich Text' },
            { id: '2', href: '/form', label: 'Form' },
            { id: '3', href: '/details', label: 'Details' },
            { id: '4', href: '/collage', label: 'Collage' },
            { id: '5', href: '/mijn-omgeving', label: 'Mijn Omgeving' },
          ]}
        ></NavBar> */}
      </PageHeader>

      <PageBody className="rhc-templates-page">
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
          <Heading level={1}>Zoek APIs</Heading>
          <Paragraph>Overzicht van open APIs van Nederlandse overheidsorganisatie</Paragraph>
          <Paragraph>Vind APIs</Paragraph>
          <Textarea aria-label="textarea-label" name="subject" placeholder="Voer een zoekterm in"></Textarea>
          <FieldsetLegend>API type</FieldsetLegend>
          <FormFieldCheckboxGroup>
            <FormFieldCheckboxOption label="GraphQL"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="OData"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="REST/JSON"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="REST/XML"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="Onbekend"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="WFS"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="WMS"></FormFieldCheckboxOption>
          </FormFieldCheckboxGroup>
          <FieldsetLegend>Organisatie</FieldsetLegend>
          <FormFieldCheckboxGroup>
            <FormFieldCheckboxOption label="Algemeene Zaken"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="Binnenlandse Zaken en Koninkrijksrelaties"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="Buitenlandse Zaken"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="Centraal Bureau voor de Statistiek"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="Centraal Justitieel Incassobureau"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="Coöperatie Servicehuis Parkeer en Verblijfsrechten UA"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="Dienst voor het kadaster en de openbare registers"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="Gemeente Amsterdam"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="Gemeente Eindhover"></FormFieldCheckboxOption>
            <FormFieldCheckboxOption label="Gemeente Enschede"></FormFieldCheckboxOption>
          </FormFieldCheckboxGroup>{' '}
          {/* MISSEN NOG MEER WIP */}
          <ActionGroup className="rhc-templates-button">
            <Button appearance="primary-action-button">
              Meer opties
              <Icon>
                <IconArrowDown />
              </Icon>
            </Button>
            <Button type="submit">Filter</Button>
            <Paragraph>119 APIs</Paragraph>
            <Button>
              <Icon>
                <IconPlus />
              </Icon>
              API toevoegen
            </Button>
          </ActionGroup>
          <ActionGroup></ActionGroup>
          <section className="rhc-templates-card">
            <Card
              description="Centraal Bureau voor de Statistiek"
              heading="CBS Cijfers Open Data"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="./placeholder.jpg"
              metadata="Alle Nederlandstailige Statistieken van CBS ontsloten via oData versie 4"
              title="Card Title"
            >
              <DataBadge className="rhc-templates-databadge">OData</DataBadge>
            </Card>

            <Card
              description="Centraal Bureau voor de Statistiek"
              heading="CBS Content Open Data"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="./placeholder.jpg"
              metadata="Met behulp van de CBS Open Data API kun je Articles, Pages, Figures, Events en Flash content van de CBS"
              title="Card Title"
            >
              <DataBadge className="rhc-templates-databadge">OData</DataBadge>
            </Card>
            <Card
              description="Centraal Bureau voor de Statistiek"
              heading="CBS Search Engine"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="./placeholder.jpg"
              metadata="De zoekmachine van het CBS helpt je om artikelen en tabellen te vinden op de website van het CBS."
              title="Card Title"
            >
              <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
            </Card>
            <Card
              description="Centraal Justitieel Incassobureau"
              heading="VO Rijk (Citizen financial Claims Process)"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="./placeholder.jpg"
              metadata="API waarmee burgers een overzicht van hun financiële verplichtingen bij een (overheids) organisatie kunnen opvragen"
              title="Card Title"
            >
              <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
            </Card>
            <Card
              description="Uitvoeringsorganisatie Bedrijfsvoering Rijk"
              heading="CSO Vacature API"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="./placeholder.jpg"
              metadata="De functionaliteit van de Vacature-API bestaat uit het tellen, ophalen en filteren van het vacature-aanbod, het ophalen van data met betrekking tot het gebruikte vacatureformaat en het opslaan van nieuwe vacatures van de website WerkenvoorNederland.nl, WerkenbijdeOverheid.nl en Mobiliteitbank.nl"
              title="Card Title"
            >
              <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
            </Card>
            <Card
              description="De Nederlandsche Bank"
              heading="DNB API Services"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="./placeholder.jpg"
              metadata="DNB API Services maakt het mogelijk om verschillende APIs van de Nederlandsche Bank te benaderen."
              title="Card Title"
            >
              <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
            </Card>
            <Card
              description="Dienst voor het kadaster en de openbare registers"
              heading="Behandeldienst configuratie beheren"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="./placeholder.jpg"
              metadata="Een REST API voor het beheren van de behandeldienstconfiguraties. Hierin kan een bevoegd gezag een activiteit waarvoor zij verantwoordelijk is koppelen aan een behandeldienst."
              title="Card Title"
            >
              <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
              <DataBadge className="rhc-templates-databadge">dso</DataBadge> {/* ANDERE DATABADGE */}
            </Card>
            <Card
              description="Dienst voor het kadaster en de openbare registers"
              heading="Catalogus opvargen"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="./placeholder.jpg"
              metadata="Met deze REST API kunnen begrippen en definities worden opgevraagd uit de stelselcatalogus."
              title="Card Title"
            >
              <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
              <DataBadge className="rhc-templates-databadge">dso</DataBadge> {/* ANDERE DATABADGE */}
            </Card>
            <Card
              description="Dienst voor het kadaster en de openbare registers"
              heading="Geo-validatieservice"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="./placeholder.jpg"
              metadata="Met deze REST API kunnen geometrische gegevens (werkingsgebieden of locaties) gevalideerd worden tegen GML 3.2.2 SF2."
              title="Card Title"
            >
              <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
              <DataBadge className="rhc-templates-databadge">dso</DataBadge> {/* ANDERE DATABADGE */}
              <DataBadge className="rhc-templates-databadge">geo</DataBadge> {/* ANDERE DATABADGE */}
            </Card>
            <Card
              description="Dienst voor het kadaster en de openbare registers"
              heading="Omgevingsdocument downloaden"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="./placeholder.jpg"
              metadata="Met deze REST API kan de vigerende regelingversie van een Omgevingsdocument uit het Digitaal Stelsel Omgevingswet (DSO) in een zip bestand worden gedownload met daarin de juridische tekst, de GIO’s en de OW-objecten."
              title="Card Title"
            >
              <DataBadge className="rhc-templates-databadge">REST/JSON</DataBadge>
              <DataBadge className="rhc-templates-databadge">dso</DataBadge> {/* ANDERE DATABADGE */}
            </Card>
          </section>
          <Heading level={2}>Praat mee in onze developer community</Heading>
          <Paragraph>
            In onze developer community kan je in gesprek gaan over de vraagstukken die jou bezig houden en vind je
            richtlijnen, tutorials en tools
          </Paragraph>
          <Button appearance="primary-action-button">Community</Button>
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
