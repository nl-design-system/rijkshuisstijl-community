'use client';

import {
  AccordionProvider,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  Fieldset,
  FieldsetLegend,
  Footer,
  FormFieldTextarea,
  FormFieldTextbox,
  Heading,
  Link,
  LinkList,
  LinkListLink,
  PageContent,
  Paragraph,
  RadioButton,
  Textbox,
  FormField,
  Checkbox,
  FormLabel,
  Article,
  FormFieldRadioOption,
} from '@rijkshuisstijl-community/components-react';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
// import { DateInput, FileInput } from '@amsterdam/design-system-react';

export default function Form() {
  return (
    <>
      <div className="rhc-main-content">
        <PageContent className="container page-content rhc-page-content rhc-background-color-white">
          <Article>
            <BreadcrumbNav>
              <BreadcrumbNavLink href="/" rel="home" index={0}>
                Home
              </BreadcrumbNavLink>
              <BreadcrumbNavSeparator>
                <UtrechtIconChevronRight />
              </BreadcrumbNavSeparator>
              <BreadcrumbNavLink href="/a/" index={1}>
                Niveau 1
              </BreadcrumbNavLink>
              <BreadcrumbNavSeparator>
                <UtrechtIconChevronRight />
              </BreadcrumbNavSeparator>
              <BreadcrumbNavLink href="/a/b/" rel="up" index={2}>
                Niveau 2
              </BreadcrumbNavLink>
            </BreadcrumbNav>
            <Heading level={1}>Formulier voor vragen over Sisa</Heading>
            <Paragraph>Heeft u vragen over Single information, Single audit (SiSa)?</Paragraph>
            <Paragraph>Gebruik dan het formulier hieronder.</Paragraph>
            <br />
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
            <br />
            <Paragraph>
              Lees verder over de <Link href="#">verantwoordingsmethode SiSa</Link>.
            </Paragraph>
            <form>
              <FormFieldTextbox label="Naam" required></FormFieldTextbox>
              <FormFieldTextbox label="Organisatie"></FormFieldTextbox>
              <FormFieldTextbox type="email" label="E-mailadres"></FormFieldTextbox>
              <FormFieldTextbox label="Telefoonnummer" type="tel"></FormFieldTextbox>
              {/*
    <div className="unstarted">
      <FormField label="Datum">
        <DateInput></DateInput>
      </FormField>
    </div>
    */}
              <FormFieldTextbox description="Bijvoorbeeld E27B" label="Om welke uitkering gaat het?"></FormFieldTextbox>
              <FormFieldTextarea label="Stel hier uw vraag" rows={6} cols={40}></FormFieldTextarea>
              <Fieldset>
                <FieldsetLegend>Label</FieldsetLegend>
                <div>
                  <FormFieldRadioOption label="Label" />
                  <FormFieldRadioOption label="Label" />
                  <FormFieldRadioOption label="Label" />
                  <FormFieldRadioOption label="Label" />
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
                Wij gebruiken gegevens die u heeft ingevuld om uw vraag te beantwoorden. Daarna worden ze volgens in de
                archiefwet tijdelijk bewaard in de daarvoor bestemde archiefsystemen. Deze zijn van het Ministerie van
                Binnenlandse Zaken & Koninkrijksrelaties (BZK).
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
                <FormField label="Ik heb gelezen en begrepen wat er met mijn persoonsgegevens wordt gedaan">
                  <Checkbox></Checkbox>
                </FormField>
              </Fieldset>
              <Button type="submit" appearance="primary-action-button">
                Ga verder
              </Button>
            </form>
          </Article>
        </PageContent>
      </div>
      <Footer
        heading="De Rijksoverheid. Voor Nederland"
        headingLevel={4}
        columns={[
          {
            heading: 'Service',
            children: [
              <LinkList key="1">
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Contact
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Abonneren
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  RSS
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Vacatures
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Sitemap
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Help
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Archief
                </LinkListLink>
              </LinkList>,
            ],
          },
          {
            heading: 'Over deze site',
            children: (
              <LinkList key="2">
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Over Rijksoverheid.nl
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Wetten en regelingen
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Copyright
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Privacy
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Cookies
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Toegankelijkheid
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Open data
                </LinkListLink>
                <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
                  Kwetsbaarheid melden
                </LinkListLink>
              </LinkList>
            ),
          },
        ]}
      ></Footer>
    </>
  );
}
