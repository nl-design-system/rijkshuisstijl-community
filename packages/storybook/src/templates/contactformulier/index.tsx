import {
  Alert,
  Button,
  FormFieldCheckboxOption,
  FormFieldSelect,
  FormFieldTextInput,
  Heading,
  Icon,
  Link,
  Logo,
  PageBody,
  PageHeader,
  Paragraph,
  SelectOption,
  SkipLink,
  UnorderedList,
  UnorderedListItem,
} from '@rijkshuisstijl-community/components-react';
import { Main } from '../shared/Main';
import SharedMainPageContent from '../shared/main-page-content';

// Contactformulier voorbeeldpagina (#2650). Puur uit RHC-componenten samengesteld; gaten t.o.v. Figma staan in de PR.
export default function Contactformulier({ showErrors = false }: Readonly<{ showErrors?: boolean }>) {
  return (
    <>
      <PageHeader>
        <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
          Ga naar hoofdinhoud
        </SkipLink>
        <Logo organisation="Ministerie van Buitenlandse Zaken" />
        {/* GAP: hero action-balk (outline "Contact" + filled "Menu") bestaat niet als component. */}
        <Button appearance="secondary-action-button">
          <Icon icon="telefoon" />
          Contact
        </Button>
        <Button appearance="primary-action-button">
          <Icon icon="menu" />
          Menu
        </Button>
      </PageHeader>
      <PageBody>
        <Main>
          <SharedMainPageContent>
            {/* GAP: geen primary-tint hero-banner zonder afbeelding + geen SiteNameContainer. */}
            <Heading level={1}>Contactformulier</Heading>
            <Paragraph>
              U kunt uw vraag aan NederlandWereldwijd stellen via het contactformulier. We proberen binnen 5 dagen
              antwoord te geven.
            </Paragraph>
            <Alert type="info">
              <Paragraph>
                Door de situatie in het Midden-Oosten kan het tot 14 dagen duren voordat wij uw mail beantwoorden.
              </Paragraph>
            </Alert>

            <form>
              {showErrors ? (
                <Alert type="error">
                  <Heading level={2}>Dit formulier bevat meerdere fouten:</Heading>
                  <UnorderedList>
                    <UnorderedListItem>
                      <Link href="#wat-is-uw-situatie">Wat is uw situatie? is verplicht</Link>
                    </UnorderedListItem>
                    <UnorderedListItem>
                      <Link href="#e-mailadres">E-mailadres is ongeldig</Link>
                    </UnorderedListItem>
                    <UnorderedListItem>
                      <Link href="#ik-begrijp-het">Ik begrijp het is niet aangevinkt</Link>
                    </UnorderedListItem>
                  </UnorderedList>
                </Alert>
              ) : null}

              {/* GAP: de Form Field-componenten exposen het input-id niet, dus de error-summary-links kunnen de focus niet naar het veld verplaatsen. */}
              {/* GAP: FormFieldSelect accepteert zelfs geen eigen id: dat overschrijft alleen de htmlFor van het label en breekt de label-koppeling (select-name). Kale div als anchor-doel. */}
              {/* GAP: geen placeholder-API en `required` wordt niet doorgegeven aan de native <select>; verplicht-select-patroon kan niet volledig via de component. */}
              <div id="wat-is-uw-situatie">
                <FormFieldSelect
                  defaultValue=""
                  errorMessage="U heeft geen keuze gemaakt. Maak een keuze."
                  invalid={showErrors}
                  label="Wat is uw situatie?"
                >
                  <SelectOption disabled value="">
                    Kies een van de situaties...
                  </SelectOption>
                  <SelectOption value="reizen">Ik heb een vraag over reizen</SelectOption>
                  <SelectOption value="documenten">Ik heb een vraag over documenten</SelectOption>
                  <SelectOption value="consulair">Ik heb consulaire hulp nodig</SelectOption>
                  <SelectOption value="overig">Overig</SelectOption>
                </FormFieldSelect>
              </div>
              <FormFieldTextInput defaultValue={showErrors ? 'Aruba' : undefined} label="Om welke plek gaat het?" />
              <FormFieldTextInput
                defaultValue={showErrors ? 'Mijn vlucht is geannuleerd' : undefined}
                label="Wat wilt u precies weten?"
              />
              <FormFieldTextInput
                defaultValue={showErrors ? 'jan.jansen@voorbeeld' : undefined}
                errorMessage="Dit is geen geldig e-mailadres. Vul een geldig e-mailadres in."
                id="e-mailadres"
                invalid={showErrors}
                label="E-mailadres"
                type="email"
              />
              {/* GAP: Form Field heeft geen label-suffix-API; het "(Niet verplicht)"-suffix uit Figma staat hier als platte tekst in het label. */}
              <FormFieldTextInput label="Telefoonnummer (Niet verplicht)" type="tel" />

              {/* GAP: een Form Field rond een checkbox met titel + beschrijving + inline link bestaat niet kant-en-klaar. */}
              <Paragraph>Verwerking van uw persoonsgegevens</Paragraph>
              <Paragraph>
                Wij gebruiken uw gegevens om uw vraag te beantwoorden. Voor trainingsdoeleinden worden uw gegevens 12
                maanden bewaard. Uw informatie wordt niet met derden gedeeld.{' '}
                <Link inline href="#privacy">
                  Meer informatie over uw privacy.
                </Link>
              </Paragraph>
              <FormFieldCheckboxOption
                errorMessage="U heeft nog geen akkoord gegeven. Vink 'Ik begrijp het' aan."
                id="ik-begrijp-het"
                invalid={showErrors}
                label="Ik begrijp het"
              />

              <Button appearance="primary-action-button" type="submit">
                Verzenden
                <Icon icon="pijl-naar-rechts" />
              </Button>
            </form>
          </SharedMainPageContent>
        </Main>
      </PageBody>
      {/* GAP: Page Footer Compact (sitenaam + 2 links) bestaat nog niet als component. */}
      <footer>
        <SharedMainPageContent>
          <Paragraph>NederlandWereldwijd</Paragraph>
          <Link href="#over-nederlandwereldwijd">Over NederlandWereldwijd</Link>
          <Link href="#over-de-website">Over de website</Link>
        </SharedMainPageContent>
      </footer>
    </>
  );
}
