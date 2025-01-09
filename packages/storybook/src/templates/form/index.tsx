import {
  AccordionProvider,
  Article,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  Fieldset,
  FieldsetLegend,
  Footer,
  FormFieldCheckboxOption,
  FormFieldRadio,
  FormFieldTextarea,
  FormFieldTextInput,
  Heading,
  Icon,
  Link,
  LinkList,
  LinkListLink,
  Logo,
  NavBar,
  PageContent,
  PageHeader,
  Paragraph,
} from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';

export default function Form() {
  return (
    <>
      <PageHeader>
        <Logo organisation="Rijkshuisstijl Community">
          <Icon className={'dutch-map'} icon={'nederland-map'} />
        </Logo>
        <NavBar
          aria-label="navbar-label"
          items={[
            { id: '1', href: '/', label: 'Rich Text' },
            { id: '2', href: '/form', label: 'Form' },
            { id: '3', href: '/details', label: 'Details' },
            { id: '4', href: '/collage', label: 'Collage' },
            { id: '5', href: '/mijn-omgeving', label: 'Mijn Omgeving' },
          ]}
        ></NavBar>
      </PageHeader>
      <PageBody className="rhc-templates-page">
        <div className="rhc-templates-background-color-white rhc-templates-main-content">
          <PageContent className="rhc-templates-page-content rhc-templates-background-color-white">
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
                    Home 1
                  </BreadcrumbNavLink>
                  <BreadcrumbNavSeparator>
                    <Icon icon={'chevron-right'} />
                  </BreadcrumbNavSeparator>
                  <BreadcrumbNavLink href="/" index={2} rel="up">
                    Home 2
                  </BreadcrumbNavLink>
                </BreadcrumbNav>
                <Heading level={1}>Formulier voor vragen over Sisa</Heading>
                <Paragraph>Heeft u vragen over Single information, Single audit (SiSa)?</Paragraph>
                <Paragraph>Gebruik dan het formulier hieronder.</Paragraph>
                {/*
              <div className="unstarted">
                <FormField label="Bestand toevoegen">
                  <UnorderedList>
                    <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
                    <UnorderedListItem>U mag maximaal 10 Mb aan bestanden toevoegen.</UnorderedListItem>
                    <UnorderedListItem>
                      Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bpm en gif.
                    </UnorderedListItem>
                  </UnorderedList>
                  <FileInput multiple></FileInput>
                </FormField>
                <UnorderedList>
                  <UnorderedListItem>Hoe moet ik extra regels toevoegen bij de macro-versie?</UnorderedListItem>
                  <UnorderedListItem>Er zitten fouten in het Excel bestand of de macro-versie?</UnorderedListItem>
                  <UnorderedListItem>Macro bestand werkt niet</UnorderedListItem>
                  <UnorderedListItem>Hierziene aanleveringen</UnorderedListItem>
                  <UnorderedListItem>Tabel van fouten en onzekerheden</UnorderedListItem>
                  <UnorderedListItem>Inloggegevens CBS</UnorderedListItem>
                  <UnorderedListItem>Aanlevering CBS</UnorderedListItem>
                  <UnorderedListItem>Controle verklaring</UnorderedListItem>
                  <UnorderedListItem>Hoe leg ik verantwoording af?</UnorderedListItem>
                </UnorderedList>
              </div>
            */}
                <Paragraph>
                  Lees verder over de <Link href="#">verantwoordingsmethode SiSa</Link>.
                </Paragraph>
                <form>
                  <FormFieldTextInput required label="Naam"></FormFieldTextInput>
                  <FormFieldTextInput label="Organisatie"></FormFieldTextInput>
                  <FormFieldTextInput label="E-mailadres" type="email"></FormFieldTextInput>
                  <FormFieldTextInput label="Telefoonnummer" type="tel"></FormFieldTextInput>
                  {/*
                <div className="unstarted">
                  <FormField label="Datum">
                    <DateInput></DateInput>
                  </FormField>
                </div>
              */}
                  <FormFieldTextInput
                    description="Bijvoorbeeld E27B"
                    label="Om welke uitkering gaat het?"
                  ></FormFieldTextInput>
                  <FormFieldTextarea cols={40} label="Stel hier uw vraag" rows={6}></FormFieldTextarea>
                  <Fieldset>
                    <FieldsetLegend>Label</FieldsetLegend>
                    <div className="rhc-radio-group">
                      <FormFieldRadio label="Label" name="name" />
                      <FormFieldRadio label="Label" name="name" />
                      <FormFieldRadio label="Label" name="name" />
                      <FormFieldRadio label="Label" name="name" />
                    </div>
                  </Fieldset>
                  {/*
                <div className="unstarted">
                  <FormField label="Bestand toevoegen">
                    <UnorderedList>
                      <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
                      <UnorderedListItem>U mag maximaal 10 Mb aan bestanden toevoegen.</UnorderedListItem>
                      <UnorderedListItem>
                        Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bpm en gif.
                      </UnorderedListItem>
                    </UnorderedList>
                    <FileInput multiple></FileInput>
                  </FormField>
                </div>
              */}
                  <Heading level={1}>Informatie over de verwerking van uw persoonsgegevens</Heading>
                  <Paragraph>
                    Wij gebruiken gegevens die u heeft ingevuld om uw vraag te beantwoorden. Daarna worden ze volgens in
                    de archiefwet tijdelijk bewaard in de daarvoor bestemde archiefsystemen. Deze zijn van het
                    Ministerie van Binnenlandse Zaken & Koninkrijksrelaties (BZK).
                  </Paragraph>
                  <AccordionProvider
                    sections={[
                      {
                        label: 'Toon extra informatie over de verwerking van uw persoonsgegevens',
                        body: 'Dit is extra informatie',
                      },
                    ]}
                  ></AccordionProvider>
                  <Fieldset>
                    <FieldsetLegend>Akkoordverklaring</FieldsetLegend>
                    <FormFieldCheckboxOption label="Ik heb gelezen en begrepen wat er met mijn persoonsgegevens wordt gedaan"></FormFieldCheckboxOption>
                  </Fieldset>
                  <Button appearance="primary-action-button" type="submit">
                    Ga verder
                  </Button>
                </form>
              </div>
            </Article>
          </PageContent>
        </div>
      </PageBody>
      <Footer
        appearanceLevel={4}
        heading="De Rijksoverheid. Voor Nederland"
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
                  Over Rijksoverheid.nl
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
