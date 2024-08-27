'use client';

import {
  AccordionProvider,
  Button,
  Heading,
  Link,
  Logo,
  Paragraph,
  LinkList,
  LinkListLink,
} from '@rijkshuisstijl-community/components-react';
import { FormLabel } from '@utrecht/component-library-react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  Checkbox,
  Fieldset,
  FieldsetLegend,
  FormField,
  PageContent,
  PageFooter,
  PageHeader,
  RadioButton,
  Textarea,
  Textbox,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { DateInput, FileInput } from '@amsterdam/design-system-react';

export default function Form() {
  return (
    <main>
      <div className="unfinished">
        <PageHeader>
          <Logo organisation="Voorbeeld organisatie" subtitle="Voorbeeld sub-title"></Logo>
        </PageHeader>
      </div>
      <PageContent className="container page-content">
        <div className="unstarted">
          <BreadcrumbNav>
            <BreadcrumbNavLink href="/" rel="home" index={0}>
              Home
            </BreadcrumbNavLink>
            <BreadcrumbNavLink href="/a/" index={1}>
              Niveau 1
            </BreadcrumbNavLink>
            <BreadcrumbNavLink href="/a/b/" rel="up" index={2}>
              Niveau 2
            </BreadcrumbNavLink>
          </BreadcrumbNav>
        </div>
        <Heading level={1}>Formulier voor vragen over Sisa</Heading>
        <Paragraph>Heeft u vragen over Single information, Single audit (SiSa)?</Paragraph>
        <Paragraph>Gebruik dan het formulier hieronder.</Paragraph>
        <br />
        <Paragraph>Mogelijke vragen:</Paragraph>
        <div className="unstarted">
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
        <br />
        <Paragraph>
          Lees verder over de <Link href="#">verantwoordingsmethode SiSa</Link>.
        </Paragraph>
        <form>
          <div className="unstarted">
            <FormField label="Naam">
              <Textbox required></Textbox>
            </FormField>
          </div>
          <div className="unstarted">
            <FormField label="Organisatie">
              <Textbox></Textbox>
            </FormField>
          </div>
          <div className="unstarted">
            <FormField label="E-mailadres">
              <Textbox type="email"></Textbox>
            </FormField>
          </div>
          <div className="unstarted">
            <FormField label="Telefoonnummer">
              <Textbox type="tel"></Textbox>
            </FormField>
          </div>
          <div className="unstarted">
            <FormField label="Organisatie">
              <DateInput></DateInput>
            </FormField>
          </div>
          <div className="unstarted">
            <FormField label="Om welke uitkering gaat het?">
              <Paragraph>Bijvoorbeeld E27B</Paragraph>
              <Textbox></Textbox>
            </FormField>
          </div>
          <div className="unstarted">
            <FormField label="">
              <Paragraph className="utrecht-form-field__label">Om welke indicator gaat het?</Paragraph>
              <Paragraph className="utrecht-form-field__optional">Niet verplicht</Paragraph>
              <Paragraph className="utrecht-form-field__helptext">Bijvoorbeeld E27B</Paragraph>
              <Paragraph className="utrecht-form-field__input">
                <Textbox></Textbox>
              </Paragraph>
            </FormField>
          </div>
          <div className="unstarted">
            <FormField label="Stel hier uw vraag">
              <Textarea rows={6} cols={40}></Textarea>
            </FormField>
          </div>
          <div className="unstarted">
            <Fieldset>
              <FieldsetLegend>Label</FieldsetLegend>
              <div>
                <div className="unstarted">
                  <FormField label="Label" description="Description">
                    <div className="rhc-radio-button__group">
                      <RadioButton></RadioButton>
                      <FormLabel>Label</FormLabel>
                      <RadioButton></RadioButton>
                      <FormLabel>Label</FormLabel>
                      <RadioButton></RadioButton>
                      <FormLabel>Label</FormLabel>
                      <RadioButton></RadioButton>
                      <FormLabel>Label</FormLabel>
                    </div>
                  </FormField>
                </div>
              </div>
            </Fieldset>
          </div>
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
          <div className="unstarted">
            <Fieldset>
              <FieldsetLegend>Akkoordverklaring</FieldsetLegend>
              <FormField label="Ik heb gelezen en begrepen wat er met mijn persoonsgegevens wordt gedaan">
                <Checkbox></Checkbox>
              </FormField>
            </Fieldset>
          </div>
          <Button type="submit" appearance="primary-action-button">
            Ga verder
          </Button>
        </form>
      </PageContent>
      <div className="unstarted">
        <PageFooter>
          <Heading level={1} appearance="utrecht-heading-2">
            De Rijksoverheid. Voor Nederland
          </Heading>
          <div className="left-column">
            <Heading level={2} appearance="utrecht-heading-4">
              Service
            </Heading>
            <LinkList>
              <LinkListLink href="#">Contact</LinkListLink>
              <LinkListLink href="#">Abonneren</LinkListLink>
              <LinkListLink href="#">RSS</LinkListLink>
              <LinkListLink href="#">Vacatures</LinkListLink>
              <LinkListLink href="#">Sitemap</LinkListLink>
              <LinkListLink href="#">Help</LinkListLink>
              <LinkListLink href="#">Archief</LinkListLink>
            </LinkList>
          </div>
          <div className="right-column">
            <Heading level={2} appearance="utrecht-heading-4">
              Service
            </Heading>
            <LinkList>
              <LinkListLink href="#">Over Rijksoverheid.nl</LinkListLink>
              <LinkListLink href="#">Wetten en regelingen</LinkListLink>
              <LinkListLink href="#">Copyright</LinkListLink>
              <LinkListLink href="#">Privacy</LinkListLink>
              <LinkListLink href="#">Cookies</LinkListLink>
              <LinkListLink href="#">Toegankelijkheid</LinkListLink>
              <LinkListLink href="#">Open data</LinkListLink>
              <LinkListLink href="#">Kwetsbaarheid melden</LinkListLink>
            </LinkList>
          </div>
        </PageFooter>
      </div>
    </main>
  );
}
