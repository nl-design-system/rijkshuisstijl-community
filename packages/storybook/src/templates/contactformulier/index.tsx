import {
  Alert,
  Button,
  Footer,
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
import { Hero } from './Hero';
import { Main } from '../shared/Main';
import SharedMainPageContent from '../shared/main-page-content';
import './index.css';

// Contactformulier voorbeeldpagina (#2650). Puur uit RHC-componenten samengesteld; gaten t.o.v. Figma staan in de PR.
export default function Contactformulier({
  showErrors = false,
  showNotification = true,
}: Readonly<{ showErrors?: boolean; showNotification?: boolean }>) {
  return (
    <>
      <PageHeader className="rhc-example-contactformulier-page">
        <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
          Ga naar hoofdinhoud
        </SkipLink>
        <Logo organisation="Rijksoverheid">
          <Icon icon="nederland-map" />
        </Logo>
      </PageHeader>
      <PageBody className="rhc-example-contactformulier-page">
        <Main>
          {/* Titel, intro en de informatieve melding zitten in de custom hero (zie Hero.tsx). */}
          <Hero showNotification={showNotification} />
          <SharedMainPageContent>
            <form className="rhc-example-contactformulier__form">
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

              {/* GAP: de Form Field-componenten exposen het input-id niet (een eigen id landt op de wrapper, bij FormFieldSelect breekt het zelfs de label-koppeling). */}
              {/* De error-summary-links landen daarom op focusbare wrapper-divs (tabIndex -1) naast het veld, niet in de control zelf. */}
              {/* GAP: geen placeholder-API en `required` wordt niet doorgegeven aan de native <select>; verplicht-select-patroon kan niet volledig via de component. */}
              <div id="wat-is-uw-situatie" tabIndex={-1}>
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
              <div id="e-mailadres" tabIndex={-1}>
                <FormFieldTextInput
                  defaultValue={showErrors ? 'jan.jansen@voorbeeld' : undefined}
                  errorMessage="Dit is geen geldig e-mailadres. Vul een geldig e-mailadres in."
                  invalid={showErrors}
                  label="E-mailadres"
                  type="email"
                />
              </div>
              {/* GAP: Form Field heeft geen label-suffix-API; het "(Niet verplicht)"-suffix uit Figma staat hier als platte tekst in het label. */}
              <FormFieldTextInput label="Telefoonnummer (Niet verplicht)" type="tel" />

              {/* GAP: een Form Field rond een checkbox met titel + beschrijving + inline link bestaat niet kant-en-klaar. */}
              {/* Groepeer titel, beschrijving en checkbox als één veld, zoals in de Figma. */}
              <div className="rhc-example-contactformulier__consent">
                {/* Geen Heading: in Figma is dit een bold veld-label (bijna zwart), niet een lintblauwe kop. */}
                <Paragraph>
                  <strong>Verwerking van uw persoonsgegevens</strong>
                </Paragraph>
                <Paragraph>
                  Wij gebruiken uw gegevens om uw vraag te beantwoorden. Voor trainingsdoeleinden worden uw gegevens 12
                  maanden bewaard. Uw informatie wordt niet met derden gedeeld.{' '}
                  <Link inline href="#privacy">
                    <strong>Meer informatie over uw privacy.</strong>
                  </Link>
                </Paragraph>
                <div id="ik-begrijp-het" tabIndex={-1}>
                  <FormFieldCheckboxOption
                    errorMessage="U heeft nog geen akkoord gegeven. Vink 'Ik begrijp het' aan."
                    invalid={showErrors}
                    label="Ik begrijp het"
                  />
                </div>
              </div>

              <Button iconEnd={<Icon icon="pijl-naar-rechts" />} label="Verzenden" purpose="primary" type="submit" />
            </form>
          </SharedMainPageContent>
        </Main>
      </PageBody>
      <Footer tagline="NederlandWereldwijd" variant="compact">
        <Link href="#over-nederlandwereldwijd">Over NederlandWereldwijd</Link>
        <Link href="#over-de-website">Over de website</Link>
      </Footer>
    </>
  );
}
