'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import {
  AccordionProvider,
  Article,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  ButtonLink,
  Card,
  Figure,
  FigureCaption,
  Heading,
  Hero,
  Icon,
  IconButton,
  Image,
  Link,
  OrderedList,
  OrderedListItem,
  PageBody,
  Paragraph,
  Separator,
} from '@rijkshuisstijl-community/components-react';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';
import './index.css';

const stappenplan = [
  {
    label: '1. Laat een asbestinventarisatie uitvoeren',
    expanded: true,
    body: (
      <Paragraph>
        Ligt er asbestbedekking op jouw schuur of stal? Asbest op een bedrijfspand mag je nooit zelf weghalen. Laat
        eerst een asbestinventarisatie uitvoeren door een gecertificeerd asbestinventarisatiebedrijf. Dit rapport is 3
        jaar geldig.{' '}
        <Link inline href="#">
          Vind een gecertificeerd bedrijf bij jou in de buurt.
        </Link>
      </Paragraph>
    ),
  },
  {
    label: '2. Regel in het buitengebied een flora-en-fauna-onderzoek',
    expanded: false,
    body: (
      <Paragraph>
        In het buitengebied kan een flora-en-fauna-onderzoek nodig zijn voordat je begint. Zo weet je zeker dat
        beschermde dieren of planten geen gevaar lopen tijdens de werkzaamheden.
      </Paragraph>
    ),
  },
  {
    label: '3. Vraag offertes aan bij verschillende asbestverwijderingsbedrijven',
    expanded: false,
    body: (
      <Paragraph>
        Vraag offertes op bij meerdere gecertificeerde asbestverwijderingsbedrijven, zodat je prijzen en voorwaarden
        kunt vergelijken.
      </Paragraph>
    ),
  },
  {
    label: '4. Regel je financiën',
    expanded: false,
    body: (
      <Paragraph>
        Bekijk welke kosten je kunt verwachten en of er subsidies of leningen beschikbaar zijn om de verwijdering te
        betalen.
      </Paragraph>
    ),
  },
  {
    label:
      '5. Kies welk bedrijf jouw dak gaat verwijderen en welke partij de sloop uitvoert of het nieuwe dak gaat leggen',
    expanded: false,
    body: (
      <Paragraph>
        Maak een keuze voor het verwijderingsbedrijf en, als dat van toepassing is, voor de partij die de sloop uitvoert
        of het nieuwe dak legt.
      </Paragraph>
    ),
  },
  {
    label: '6. Meld de verwijdering online bij het Omgevingsloket',
    expanded: false,
    body: (
      <Paragraph>
        Meld de verwijdering ruim van tevoren online bij het Omgevingsloket. Houd rekening met de wettelijke
        meldingstermijn.
      </Paragraph>
    ),
  },
  {
    label: '7. Laat het asbestdak verwijderen',
    expanded: false,
    body: (
      <Paragraph>Het gecertificeerde bedrijf verwijdert het asbestdak volgens de geldende veiligheidsregels.</Paragraph>
    ),
  },
  {
    label: '8. Laat de eindcontrole doen',
    expanded: false,
    body: (
      <Paragraph>
        Na de verwijdering vindt een eindcontrole plaats. Pas daarna is de locatie officieel asbestvrij.
      </Paragraph>
    ),
  },
];

const faq = [
  {
    label: 'Hoe vind ik een asbestverwijderingsbedrijf?',
    expanded: true,
    body: (
      <Paragraph>
        Ligt er asbestbedekking op jouw schuur of stal? Asbest op een bedrijfspand mag je nooit zelf weghalen. Laat
        eerst een asbestinventarisatie uitvoeren door een gecertificeerd asbestinventarisatiebedrijf. Dit rapport is 3
        jaar geldig.{' '}
        <Link inline href="#">
          Vind een gecertificeerd bedrijf bij jou in de buurt.
        </Link>
      </Paragraph>
    ),
  },
  {
    label: 'Wat zijn de kosten voor het verwijderen van asbest?',
    expanded: false,
    body: (
      <Paragraph>
        De kosten hangen af van de oppervlakte van het dak, de bereikbaarheid en de manier van afvoeren. Vraag offertes
        op om een goede inschatting te maken.
      </Paragraph>
    ),
  },
  {
    label: 'Zijn er leningen, subsidies of fiscale voordelen voor het verwijderen van asbest?',
    expanded: false,
    body: (
      <Paragraph>
        Per provincie en gemeente verschillen de regelingen. Controleer of er subsidies of leningen beschikbaar zijn
        voor het verwijderen van asbest of het verduurzamen van je dak.
      </Paragraph>
    ),
  },
  {
    label: 'Kan ik mijn asbestdak nog verzekeren?',
    expanded: false,
    body: (
      <Paragraph>
        Niet elke verzekeraar dekt schade door of aan een asbestdak. Informeer bij je verzekeraar wat wel en niet onder
        de dekking valt.
      </Paragraph>
    ),
  },
];

const ervaringsverhalen = [
  {
    heading: "Van oude varkensschuur met asbest naar veilige plek voor Klaas' hobby",
    imageAlt: 'Verbouwde schuur in een landelijke omgeving',
  },
  {
    heading: 'Melkveehouder Christiaan pakte het asbestdak op zijn oude schuur aan',
    imageAlt: 'Boer bij een schuur met nieuw dak',
  },
  {
    heading: 'Wat als het misgaat? Erna en Johan delen hun verhaal',
    imageAlt: 'Houten dakconstructie van een schuur',
  },
];

export default function Page() {
  return (
    <>
      <SharedHeader hideNav invertedLogo />
      <PageBody>
        <Hero
          className="rhc-templates-content-artikel__hero"
          imageAlt="Agrariër voor een schuur met een asbestdak"
          imageSrc="/content-artikel-hero.png"
        >
          <div className="rhc-templates-content-artikel__breadcrumb">
            <BreadcrumbNav label="Kruimelpad">
              <BreadcrumbNavLink current href="#" index={0} rel="home">
                <Icon icon="home" />
                Asbestvrijdak
              </BreadcrumbNavLink>
              <BreadcrumbNavSeparator>
                <Icon icon="chevron-right" />
              </BreadcrumbNavSeparator>
              <BreadcrumbNavLink href="#" index={1}>
                Ik heb een stal of boerenschuur
              </BreadcrumbNavLink>
            </BreadcrumbNav>
          </div>
          <IconButton aria-label="Zoeken" className="rhc-templates-content-artikel__search" icon="zoek" />
        </Hero>
        <div className="rhc-templates-content-artikel__title">
          <Link className="rhc-templates-content-artikel__back" href="#">
            <Icon icon="chevron-left" />
            Ik heb een stal of boerenschuur
          </Link>
          <Heading appearanceLevel={2} level={1}>
            Ik ben geen agrariër (meer)
          </Heading>
        </div>
        <SharedMainPageContent>
          <Article className="rhc-templates-content-artikel__article">
            <Paragraph purpose="lead">
              Heb jij nog een asbestdak op je erf? Dit is een goed moment om daar een plan voor te maken. Want jouw
              asbestdak ligt al meer dan 30 jaar in de buitenlucht en is daardoor aan het slijten. En dat zorgt voor
              risico&apos;s.
            </Paragraph>
            <div className="rhc-templates-spacing-2">
              <Heading level={2}>Waarom is het slim om je asbestdak te verwijderen?</Heading>
              <Paragraph>
                Asbest is jarenlang gebruikt in daken van schuren en stallen. Sinds 2024 is een asbestdak niet meer
                toegestaan. Een asbestdak verweert door de jaren heen en kan dan gevaarlijke vezels verspreiden. Op tijd
                verwijderen voorkomt gezondheidsrisico&apos;s en hoge opruimkosten later.
              </Paragraph>
              <Paragraph>
                Het verwijderen van een asbestdak kost geld, maar levert ook voordelen op. Je dak is daarna veilig, je
                voorkomt boetes en je kunt het moment gebruiken om je schuur te verduurzamen.{' '}
                <Link inline href="#">
                  Lees meer over de regels rond asbestdaken.
                </Link>
              </Paragraph>
            </div>

            <div className="rhc-templates-spacing-2">
              <Heading level={2}>Maak een plan</Heading>
              <Paragraph>
                Het verwijderen van jouw asbestdak is een flinke klus. De eerste stap is om een plan te maken. Geef in
                het plan antwoord op de volgende vragen:
              </Paragraph>
              <OrderedList>
                <OrderedListItem>
                  <strong>Bevat mijn dak asbest?</strong> Check eerst of je asbest hebt en om hoeveel vierkante meter
                  het ongeveer gaat. Is jouw schuur v&oacute;&oacute;r 1994 gebouwd? Dan kan er asbest in de
                  dakbedekking zitten. Een asbestdak van maximaal 35 vierkante meter mag je als particulier, onder
                  voorwaarden, eenmalig zelf verwijderen. Is jouw dak groter? Schakel dan een asbestverwijderingsbedrijf
                  in.{' '}
                  <Link inline href="#">
                    Lees hoe je je asbestdak kunt herkennen.
                  </Link>
                </OrderedListItem>
                <OrderedListItem>
                  <strong>Wat zijn jouw plannen met de oude schuur?</strong> Wil je de schuur slopen, opknappen of een
                  nieuwe functie geven? Als je toch al met de oude schuur aan de slag gaat, kun je het verwijderen van
                  het asbestdak daarin meenemen. Controleer bij jouw gemeente wat de mogelijkheden zijn.
                </OrderedListItem>
                <OrderedListItem>
                  <strong>Welke ruimtelijke regelingen zijn er?</strong> Sommige gemeenten hebben bijvoorbeeld de
                  rood-voor-rood-regeling (of: ruimte-voor-ruimte-regeling). Daarmee kun je oude boerderijen of schuren
                  ombouwen of nieuwe woningen realiseren na sloop. Overleg hierover vooraf met de gemeente, want zulke
                  trajecten kosten tijd.
                </OrderedListItem>
                <OrderedListItem>
                  <strong>Zijn er in jouw provincie of gemeente subsidies of leningen beschikbaar?</strong> Controleer
                  of er regelingen zijn voor het verwijderen van asbest of het verduurzamen van je dak. Lees onderaan de
                  pagina meer over leningen en subsidies.
                </OrderedListItem>
                <OrderedListItem>
                  <strong>Wat zijn de kosten?</strong> Maak een kosteninschatting en bedenk hoe je het wilt betalen.
                  Bepaal het beste moment om het asbest te verwijderen en of het slim is om de verwijdering te
                  combineren met aanpassingen, zoals isolatie of zonnepanelen.
                </OrderedListItem>
              </OrderedList>
              <Figure>
                <Image alt="Verweerd asbestdak op een schuur" height="430" src="/placeholder.jpg" width="640" />
                <FigureCaption>Caption bij de afbeelding</FigureCaption>
              </Figure>
            </div>

            <div className="rhc-templates-spacing-2">
              <Heading level={2}>Aan de slag</Heading>
              <AccordionProvider headingLevel={3} sections={stappenplan} />
            </div>

            <div className="rhc-templates-spacing-2">
              <Heading level={2}>Vraag en antwoord</Heading>
              <AccordionProvider headingLevel={3} sections={faq} />
              <Paragraph>
                Meer weten? Ga naar de pagina{' '}
                <Link inline href="#">
                  &apos;Contact&apos;
                </Link>{' '}
                voor antwoorden op alle veelgestelde vragen en contactmogelijkheden.
              </Paragraph>
            </div>

            <div className="rhc-templates-spacing-2">
              <Heading level={2}>Maak een plan</Heading>
              <Paragraph>
                Heb jij ook een asbestdak op jouw erf? Maak een plan om het te laten verwijderen! Lees meer op de pagina
                Ik ben een agrari&euml;r.
              </Paragraph>
              <ButtonLink appearance="primary-action-button" href="#">
                Lees meer
              </ButtonLink>
            </div>

            <Separator />

            <div className="rhc-templates-spacing-2">
              <Heading level={2}>Ervaringsverhalen</Heading>
              <div className="rhc-card-as-link-group">
                {ervaringsverhalen.map((verhaal) => (
                  <Card
                    heading={verhaal.heading}
                    headingLevel={3}
                    image={<Image alt={verhaal.imageAlt} height="200" src="/placeholder.jpg" width="360" />}
                    key={verhaal.heading}
                  >
                    <ButtonLink appearance="secondary-action-button" href="#">
                      Lees verder
                    </ButtonLink>
                  </Card>
                ))}
              </div>
            </div>
          </Article>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
