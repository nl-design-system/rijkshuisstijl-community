import { Card, Heading, Hero } from '@rijkshuisstijl-community/components-react';
import { Paragraph } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';

export default function Page() {
  return (
    <>
      <SharedHeader />
      <PageBody className="rhc-templates-page rhc-templates-background-color-white">
        <SharedMainPageContent>
          <Hero
            heading="Rijkshuisstijl Community"
            headingLevel={1}
            imageAlt="Tullip field"
            imageSrc="/placeholder.jpg"
            subHeading="De Rijkshuisstijl Community (RHC) maakt deel uit van een samenwerkingsverband om NL Design System-componenten te gebruiken voor projecten die moeten voldoen aan de Rijkshuisstijl. De community bestaat uit organisaties van de centrale overheid van Nederland en degenen die door hen zijn ingehuurd voor het ontwikkelen van websites en apps."
          />
          {/* Dit worden Marwa's improved cards */}
          <section className="rhc-cards-container">
            <Card
              appearance="default"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              heading="Altijd webtoegankelijk"
              href="#"
              imageAlt="TODO:alt word optioneel met andere PR"
              imageSrc="/placeholder.jpg"
              title="cardtitlee"
            />
            <Card
              appearance="default"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              heading="Samen Open Source"
              href="#"
              imageAlt="TODO:alt word optioneel met andere PR"
              imageSrc="/placeholder.jpg"
              title="cardtitlee"
            />
            <Card
              appearance="default"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              heading="Consistent en efficiënt"
              href="#"
              imageAlt="TODO:alt word optioneel met andere PR"
              imageSrc="/placeholder.jpg"
              title="cardtitlee"
            />
          </section>

          <section>
            <Heading level={2}>In de praktijk</Heading>
            <Paragraph>
              Klaar om er direct van start te gaan? Hieronder vind je de README&apos;s van de beschikbare tools en
              frameworks. Voor een dieper begrip en uitgebreide documentatie verwijzen we je graag naar de &quot;lees en
              leer&quot; section.
            </Paragraph>
            <div className="rhc-cards-container">
              <Card
                appearance="horizontal"
                heading="Aan de slag"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/README.md"
                imageAlt="TODO:alt word optioneel met andere PR"
                imageSrc="/placeholder.jpg"
                title="Lees hoe je in het algemeen van start gaat met de Rijkshuisstijl Community"
              />
              <Card
                appearance="horizontal"
                heading="CSS"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md"
                imageAlt="TODO:alt word optioneel met andere PR"
                imageSrc="/placeholder.jpg"
                title="Lees hoe je enkel de CSS van de Rijkshuisstijl Community kunt gebruiken"
              />
              <Card
                appearance="horizontal"
                heading="React"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/README.md"
                imageAlt="TODO:alt word optioneel met andere PR"
                imageSrc="/placeholder.jpg"
                title="Lees hoe je de React-componenten van de Rijkshuisstijl Community kunt gebruiken"
              />
              <Card
                appearance="horizontal"
                heading="Web Components"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md"
                imageAlt="TODO:alt word optioneel met andere PR"
                imageSrc="/placeholder.jpg"
                title="Lees hoe je de Web Components van de Rijkshuisstijl Community kunt gebruiken"
              />
              <Card
                appearance="horizontal"
                heading="Angular"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-angular/README.md"
                imageAlt="TODO:alt word optioneel met andere PR"
                imageSrc="/placeholder.jpg"
                title="Lees hoe je de Angular-componenten van de Rijkshuisstijl Community kunt gebruiken"
              />
              <Card
                appearance="horizontal"
                heading="Twig"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md"
                imageAlt="TODO:alt word optioneel met andere PR"
                imageSrc="/placeholder.jpg"
                title="Lees hoe je de Twig-componenten van de Rijkshuisstijl Community kunt gebruiken"
              />
              <Card
                appearance="horizontal"
                heading="Design Tokens"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/README.md"
                imageAlt="TODO:alt word optioneel met andere PR"
                imageSrc="/placeholder.jpg"
                title="Lees hoe je de Design Tokens van de Rijkshuisstijl Community kunt gebruiken"
              />
            </div>
          </section>

          <section>
            <Heading level={2}>Lees en leer</Heading>
            <div className="rhc-cards-container">
              <Card
                description="Storybook is een overzicht van al onze componenten in verschillende frameworks, handig voor zowel designers als developers om snel te zien hoe iets eruitziet en werkt."
                heading="Rijkshuisstijl Community Storybook"
                href="https://rijkshuisstijl-community.vercel.app/"
                linkLabel="Bekijk de Rijkshuisstijl Community Storybook"
              />
              <Card
                description="We werken toe naar één centrale JSON met design tokens, waarmee je eenvoudig componenten uit het NL Design System kunt stijlen volgens jouw Rijkshuisstijl-deelidentiteit. Voor het inzichtelijker maken van designkeuzes, gebruiken we GitHub Discussions. Feedback op de hierin voorgestelde keuzes (ook bijv. een korte 'akkoord') is zeer welkom. Het delen van reeds zelfgemaakte designkeuzes wordt ook gewaardeerd."
                heading="Rijkshuisstijl styling implementatie GitHub discussies"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/discussions/1505"
                linkLabel="Ga naar de Rijkshuisstijl styling implementatie GitHub discussies"
              />
              <Card
                description="Wij leggen de Rijkshuisstijl ontwerpkeuzes vast in herbruikbaar en schaalbaar formaat, welke je kan gebruiken voor jouw eigen thema, componenten, etc"
                heading="Design Tokens"
                href="https://www.nldesignsystem.nl/handboek/design-tokens/"
                linkLabel="Lees alles over design tokens"
              />
              <Card
                description="Mee designen aan het NL Design System of gebruik maken van bestaande Figma componenten? Als designer vind je hier alle documentatie die je nodig hebt."
                heading="Designer Handboek"
                href="https://www.nldesignsystem.nl/handboek/designer/overzicht"
                linkLabel="Lees hoe je mee ontwerpt aan het NL Design System"
              />
              <Card
                description="Mee ontwikkelen aan NL Design System of gebruik maken van bestaande componenten? Als developer vind je hier alle documentatie die je nodig hebt om te beginnen."
                heading="Developer Handboek"
                href="https://www.nldesignsystem.nl/handboek/developer/overzicht"
                linkLabel="Lees hoe je mee ontwikkelt aan het de Rijkshuisstijl Community"
              />
              <Card
                description="Vanuit het NL Design System bieden we deze Figma bibliotheek met componenten aan. De componenten worden ontwikkeld op basis van het estafettemodel. Help Wanted componenten zijn nog niet in code beschikbaar. Maar daar kan jij met jouw organisatie verandering in brengen! Ga je als organisatie een component ontwikkelen? Laat dan een comment achter. Zo kan iedereen zien wie waar mee bezig is."
                heading="Figma: NL Design System Rijkshuisstijl Bibliotheek"
                href="https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?m=auto"
                linkLabel="Bekijk de Rijkshuisstijl bibliotheek in Figma"
              />
              <Card
                description="Dit is de lokale bibliotheek van het NL Design System, voorzien van het Voorbeeld thema. Vrijwel alle componenten hier zijn ‘Experimental’. Dat betekend dat ze vooralsnog geen onderdeel uit maken van de componenten die worden ontwikkeld op basis van het estafettemodel. Gebruik deze componenten dus enkel ter inspiratie."
                heading="Figma: Local Rijkshuisstijl Bibliotheek"
                href="https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?m=auto"
                linkLabel="Bekijk de Rijkshuisstijl lokale bibliotheek in Figma"
              />
              <Card
                description="Templates (en patronen), gebaseerd op het Voorbeeld thema en opgebouwd met componenten uit de Voorbeeld Bibliotheek (Local en NL Design System). Deze templates zijn in ontwikkeling, gebruik ze alleen ter inspiratie voor je prototypes en onderzoek. Het delen van jouw inzichten helpt ons deze templates beter te maken."
                heading="Figma: NL Design System Rijkshuisstijl Templates"
                href="https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NLDS---Rijkshuisstijl---Templates?m=auto&t=3Q7KyAIW8lqYHupW-6"
                linkLabel="Bekijk de Rijkshuisstijl Community templates in Figma"
              />
              <Card
                description="Met deze aanpak maken we de beste en meest bruikbare componenten, patronen en richtlijnen te maken. Elk nieuw onderdeel volgt het estafette model en beweegt zich in een samenwerking tussen het kernteam en de community van begin tot eind door dit model."
                heading="Estafettemodel"
                href="https://www.nldesignsystem.nl/handboek/estafettemodel/"
                linkLabel="Lees over het estafettemodel van NL Design System"
              />
            </div>
          </section>

          <section>
            <Heading level={2}>Kom in contact</Heading>
            <div className="rhc-cards-container">
              <Card
                appearance="full-bleed"
                description="Volg en neem deel aan de slowchat van de huidige sprint op Code for NL Slack in #nl-design-system-developers"
                heading="Slack"
                href="https://praatmee.codefor.nl/"
                imageAlt="TODO:alt word optioneel met andere PR"
                imageSrc="/placeholder.jpg"
              />
              <Card
                appearance="full-bleed"
                description="Neem deel aan de Rijkshuisstijl styling discussies etc etc."
                heading="GitHub Discussies"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/discussions/1505"
                imageAlt="TODO:alt word optioneel met andere PR"
                imageSrc="/placeholder.jpg"
              />
              <Card
                appearance="full-bleed"
                description="Neem contact op met de contributors op GitHub etc etc."
                heading="GitHub Contributors"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/graphs/contributors"
                imageAlt="TODO:alt word optioneel met andere PR"
                imageSrc="/placeholder.jpg"
              />
              <Card
                appearance="full-bleed"
                description="Of neem contact op met het NL Design System kernteam."
                heading="Kernteam"
                href="https://nldesignsystem.nl/project/kernteam/"
                imageAlt="TODO:alt word optioneel met andere PR"
                imageSrc="/placeholder.jpg"
              />
            </div>
          </section>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
