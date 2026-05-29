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

/**
 * Voorbeeldpagina "NederlandWereldwijd | Contactformulier" (issue #2650).
 *
 * Doel: aantonen welke componenten samen een contactformulier-pagina vormen en
 * waar de gaten in de bibliotheek zitten t.o.v. het Norday Figma-ontwerp.
 * Bewust GEEN eigen CSS/HTML-styling: de pagina is puur samengesteld uit
 * bestaande RHC-componenten. De visuele verschillen met Figma zijn de gaten.
 *
 * Bekende gaten t.o.v. Figma (zie PR-omschrijving):
 * - Hero: `Hero` vereist een afbeelding en heeft geen primary-tint banner-variant
 *   zonder beeld, geen SiteNameContainer (NederlandWereldwijd-branding) en geen
 *   action-button-balk (met `<nav>`-groepering) in de hero. Hier samengesteld als
 *   Heading + Paragraph + Alert + losse Buttons.
 * - Verplicht-indicatie: er is geen component-markup voor "verplicht / niet verplicht"
 *   bij een veldlabel. Bewust weggelaten i.p.v. als (schrijfwijzer-onvriendelijke) tekst
 *   tussen haakjes in het label te zetten.
 * - Error-summary <-> veld-koppeling: `FormFieldTextInput` accepteert een eigen `id`
 *   (link landt op de input), maar `FormFieldSelect` houdt een interne id voor de
 *   `<select>` en exposet die niet, dus de link landt daar op de wrapper.
 * - Checkbox-Form Field met titel + beschrijving + inline link bestaat niet kant-en-klaar.
 * - Page Footer Compact bestaat nog niet als component; hier een kale footer-landmark.
 */
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
                      <Link href="#e-mailadres">E-mailadres is verplicht</Link>
                    </UnorderedListItem>
                  </UnorderedList>
                </Alert>
              ) : null}

              {/* GAP: het id landt op de FormField-wrapper; FormFieldSelect exposet de <select>-id niet. */}
              {/* GAP: geen placeholder-API (placeholder hier als disabled optie + defaultValue="") en de
                  `required`-prop wordt wel getypeerd maar niet doorgegeven aan de native <select>, dus
                  het toegankelijke verplicht-select-patroon (value="" + required + zichtbaar label) kan
                  nu niet volledig via de component. */}
              <FormFieldSelect
                defaultValue=""
                errorMessage="U heeft geen keuze gemaakt. Maak een keuze."
                id="wat-is-uw-situatie"
                invalid={showErrors}
                label="Wat is uw situatie?"
              >
                <SelectOption disabled value="">
                  Kies een van de situaties
                </SelectOption>
                <SelectOption value="reizen">Ik heb een vraag over reizen</SelectOption>
                <SelectOption value="documenten">Ik heb een vraag over documenten</SelectOption>
                <SelectOption value="consulair">Ik heb consulaire hulp nodig</SelectOption>
                <SelectOption value="overig">Overig</SelectOption>
              </FormFieldSelect>
              <FormFieldTextInput defaultValue={showErrors ? 'Aruba' : undefined} label="Om welke plek gaat het?" />
              <FormFieldTextInput
                defaultValue={showErrors ? 'Mijn vlucht is geannuleerd' : undefined}
                label="Wat wilt u precies weten?"
              />
              <FormFieldTextInput
                errorMessage="U heeft niets ingevuld. Vul uw e-mailadres in."
                id="e-mailadres"
                invalid={showErrors}
                label="E-mailadres"
                type="email"
              />
              <FormFieldTextInput label="Telefoonnummer" type="tel" />

              {/* GAP: een Form Field rond een checkbox met titel + beschrijving + inline link bestaat niet kant-en-klaar. */}
              <Paragraph>Verwerking van uw persoonsgegevens</Paragraph>
              <Paragraph>
                Wij gebruiken uw gegevens om uw vraag te beantwoorden. Voor trainingsdoeleinden worden uw gegevens 12
                maanden bewaard. Uw informatie wordt niet met derden gedeeld.{' '}
                <Link inline href="#privacy">
                  Meer informatie over uw privacy.
                </Link>
              </Paragraph>
              <FormFieldCheckboxOption defaultChecked={showErrors} label="Ik begrijp het" />

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
