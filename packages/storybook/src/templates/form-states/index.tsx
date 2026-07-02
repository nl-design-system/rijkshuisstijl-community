'use client';
import {
  Alert,
  Article,
  Button,
  Fieldset,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
  FormFieldSelect,
  FormFieldTextInput,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import SharedMainPageContent from '../shared/main-page-content';

/**
 * Voorbeeldpagina "Form" (Figma node 4131:79328): toont de states van de
 * form-componenten zoals ontworpen, van error-summary tot verzendknop.
 */
export default function FormStates() {
  return (
    <PageBody>
      <SharedMainPageContent>
        <Article>
          <div className="rhc-margin-block-end-wrapper">
            <form>
              <Alert type="error">
                <Paragraph>Dit formulier bevat meerdere fouten:</Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Wat is uw situatie? is verplicht</UnorderedListItem>
                  <UnorderedListItem>E-mailadres is verplicht</UnorderedListItem>
                </UnorderedList>
              </Alert>
              <FormFieldTextInput defaultValue="Test" description="Description" label="Label" />
              <FormFieldTextInput label="Text area" />
              <Fieldset legend="Datum invoer">
                <Paragraph>Description</Paragraph>
                <FormFieldTextInput label="Dag" size={2} />
                <FormFieldSelect label="Maand" options={['Selecteer']} />
                <FormFieldTextInput label="Jaar" size={4} />
              </Fieldset>
              <FormFieldTextInput label="Form field met text field" />
              <FormFieldSelect label="Form field met select field" options={['Selecteer een optie']} />
              <FormFieldSelect
                invalid
                errorMessage="Error message"
                label="Invalid form field"
                options={['Selecteer een optie']}
              />
              <FormFieldCheckboxGroup description="Description" label="Form field met select field (Niet verplicht)">
                <FormFieldCheckboxOption defaultChecked label="Checked" />
                <FormFieldCheckboxOption label="Default" />
                <FormFieldCheckboxOption disabled label="Disabled" />
              </FormFieldCheckboxGroup>
              <FormFieldTextInput
                invalid
                errorMessage="Geef je voorkeur aan, selecteer minimaal 1 item."
                label="Invalid form field"
              />
              <FormFieldTextInput label="Radiobutton group" />
              <Button appearance="primary-action-button" type="submit">
                Verzenden
              </Button>
              <FormFieldCheckboxOption label="Schrijf me in voor de nieuwsbrief" />
            </form>
          </div>
        </Article>
      </SharedMainPageContent>
    </PageBody>
  );
}
