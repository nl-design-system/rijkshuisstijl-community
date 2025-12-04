'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import {
  AccordionProvider,
  Article,
  Button,
  Fieldset,
  FieldsetLegend,
  FormFieldCheckboxOption,
  FormFieldRadio,
  FormFieldTextarea,
  FormFieldTextInput,
  Heading,
  Link,
  Paragraph,
} from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import SharedDisclaimer from '../shared/disclaimer';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';

export default function Form() {
  return (
    <>
      <SharedHeader />
      <PageBody className="rhc-templates-page rhc-templates-background-color-white">
        <SharedMainPageContent>
          <SharedDisclaimer />
          <Article>
            <div className="rhc-margin-block-end-wrapper">
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
                  de archiefwet tijdelijk bewaard in de daarvoor bestemde archiefsystemen. Deze zijn van het Ministerie
                  van Binnenlandse Zaken & Koninkrijksrelaties (BZK).
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
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
