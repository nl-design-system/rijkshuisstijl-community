'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file
import {
  ActionGroup,
  Button,
  CheckboxGroup,
  Fieldset,
  FieldsetLegend,
  FormFieldCheckboxOption,
  FormFieldTextInput,
  Heading,
  SideNav,
} from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import { sideNav, useSideNav } from '../mijn-omgeving';
import SharedDisclaimer from '../shared/disclaimer';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';
import '../mijn-omgeving/index.css';

export default function MijnOmgeving() {
  return (
    <>
      <SharedHeader />
      <PageBody className="utrecht-page-body--rhc-mijn-omgeving">
        <SharedMainPageContent>
          <SharedDisclaimer />
          <SideNav className="rhc-side-nav" heading="Submenu" {...useSideNav({ items: sideNav })} />
          <section className={'rhc-page-main-content'}>
            <Heading level={1}>Mijn Instellingen</Heading>
            <div>
              <Heading level={2}>E-mailadres</Heading>
              <form method="POST">
                <FormFieldTextInput label="E-mailadres" value="demo@mijn.overheid.nl"></FormFieldTextInput>
                <ActionGroup>
                  <Button appearance="primary-action-button">Opslaan</Button>
                </ActionGroup>
              </form>
            </div>
            <div>
              <Heading level={2}>Meldingen</Heading>
              <Fieldset>
                <FieldsetLegend>Berichtenbox</FieldsetLegend>
                <CheckboxGroup>
                  <FormFieldCheckboxOption label="Melding als er nieuwe post is." />
                  <FormFieldCheckboxOption label="Herinnering als u post niet hebt geopend." />
                </CheckboxGroup>
              </Fieldset>
              <Fieldset>
                <FieldsetLegend>Lopende zaken</FieldsetLegend>
                <CheckboxGroup>
                  <FormFieldCheckboxOption label="Melding bij een statuswijziging." />
                </CheckboxGroup>
              </Fieldset>
            </div>
          </section>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter isLightTheme={true} />
    </>
  );
}
