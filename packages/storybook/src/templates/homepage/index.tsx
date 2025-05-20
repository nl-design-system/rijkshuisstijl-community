'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import { Card, ColumnLayout, Heading, Hero, Paragraph } from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';

export default function Page() {
  return (
    <>
      <SharedHeader />
      <PageBody className="rhc-templates-page">
        <SharedMainPageContent>
          <Hero
            heading="Onofficieel Rijkshuisstijl Design System"
            headingLevel={1}
            imageAlt="Tullip field"
            imageSrc="/placeholder.jpg"
          />
          <ColumnLayout>
            <Paragraph>
              De Rijkshuisstijl Community (RHC) maakt deel uit van een samenwerkingsverband om NL Design
              System-componenten te gebruiken voor projecten die moeten voldoen aan de Rijkshuisstijl.
            </Paragraph>
            <Paragraph>
              De community bestaat uit organisaties van de centrale overheid van Nederland en degenen die door hen zijn
              ingehuurd voor het ontwikkelen van websites en apps.
            </Paragraph>
          </ColumnLayout>
          {/* Dit worden Marwa's improved cards */}
          <div className="rhc-card-group">
            <Card
              appearance="default"
              description="Een uitgebreide bibliotheek van herbruikbare componenten. Platform-onafhankelijk met de nieuwe Rijkshuisstijl."
              heading="Efficiënt"
            />
            <Card
              appearance="default"
              description="De community deelt regelmatig kennis, ervaring, updates en verbeteringen."
              heading="Breed gedragen"
            />
            <Card
              appearance="default"
              description="Consistente gebruikservaring met herbruikbare voorbeeldpagina's"
              heading="Gebruiksvriendelijk"
            />
          </div>

          <section>
            <Heading level={2}>In de praktijk</Heading>
            <Paragraph>
              Klaar om er direct van start te gaan? Hieronder vind je de README&apos;s van de beschikbare tools en
              frameworks. Voor een dieper begrip en uitgebreide documentatie verwijzen we je graag naar de &quot;lees en
              leer&quot; section.
            </Paragraph>
            <div className="rhc-card-group">
              <Card
                appearance="horizontal"
                heading="Aan de slag"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je in het algemeen van start gaat met de Rijkshuisstijl Community"
              />
              <Card
                appearance="horizontal"
                heading="CSS"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je enkel de CSS van de Rijkshuisstijl Community kunt gebruiken"
              />
              <Card
                appearance="horizontal"
                heading="React"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je de React-componenten van de Rijkshuisstijl Community kunt gebruiken"
              />
              <Card
                appearance="horizontal"
                heading="Web Components"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je de Web Components van de Rijkshuisstijl Community kunt gebruiken"
              />
              <Card
                appearance="horizontal"
                heading="Angular"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-angular/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je de Angular-componenten van de Rijkshuisstijl Community kunt gebruiken"
              />
              <Card
                appearance="horizontal"
                heading="Twig"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je de Twig-componenten van de Rijkshuisstijl Community kunt gebruiken"
              />
              <Card
                appearance="horizontal"
                heading="Design Tokens"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je de Design Tokens van de Rijkshuisstijl Community kunt gebruiken"
              />
            </div>
          </section>

          <section>
            <Heading level={2}>Lees en leer</Heading>
            <div className="rhc-card-group">
              <Card
                description="Storybook is een overzicht van al onze componenten en templates in verschillende frameworks, handig voor zowel designers als developers om snel te zien hoe iets eruitziet en werkt."
                heading="Rijkshuisstijl Community Storybook"
                href="https://rijkshuisstijl-community.vercel.app/"
                linkLabel="Bekijk de Rijkshuisstijl Community Storybook"
                target="_blank"
              />
              <Card
                description="Voor het inzichtelijker maken van designkeuzes, gebruiken we GitHub Discussions. Feedback op de hierin voorgestelde keuzes (ook bijv. een korte 'akkoord') is zeer welkom. Het delen van reeds zelfgemaakte designkeuzes wordt ook gewaardeerd."
                heading="Rijkshuisstijl styling implementatie GitHub discussies"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/discussions/1505"
                linkLabel="Ga naar de Rijkshuisstijl styling implementatie GitHub discussies"
                target="_blank"
              />
              <Card
                description="We werken toe naar één centrale JSON met design tokens, waarmee je eenvoudig componenten uit het NL Design System kunt stijlen volgens jouw Rijkshuisstijl-deelidentiteit."
                heading="Design Tokens"
                href="https://www.nldesignsystem.nl/handboek/design-tokens/"
                linkLabel="Lees alles over design tokens"
                target="_blank"
              />
              <Card
                description="Mee designen aan het NL Design System of gebruik maken van bestaande Figma componenten? Als designer vind je hier alle documentatie die je nodig hebt."
                heading="Designer Handboek"
                href="https://www.nldesignsystem.nl/handboek/designer/overzicht"
                linkLabel="Lees hoe je mee ontwerpt aan het NL Design System"
                target="_blank"
              />
              <Card
                description="Mee ontwikkelen aan NL Design System of gebruik maken van bestaande componenten? Als developer vind je hier alle documentatie die je nodig hebt om te beginnen."
                heading="Developer Handboek"
                href="https://www.nldesignsystem.nl/handboek/developer/overzicht"
                linkLabel="Lees hoe je mee ontwikkelt aan het de Rijkshuisstijl Community"
                target="_blank"
              />
              <Card
                description="Een duplicaat van de Voorbeeld bibliotheek van het NL Design System, waarin de design tokens van het RHC-project zijn toegepast. Deze setup maakt het mogelijk om stijlkeuzes te testen en inzichtelijk te maken. Door de design tokens via Token Studio in te laden, kun je tussen thema's schakelen en beoordelen of de stijl aansluit bij jouw organisatie."
                heading="NL Design System Rijkshuisstijl Figma Bibliotheek"
                href="https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?m=auto"
                linkLabel="Bekijk de NL Design System Rijkshuisstijl Bibliotheek in Figma"
                target="_blank"
              />
              <Card
                description="Een kopie van de NLDS-bibliotheek met RHC-design tokens, om stijlkeuzes te testen en inzichtelijk te maken. Vrijwel alle componenten hier zijn 'Experimental'. Dat betekend dat ze vooralsnog geen onderdeel uit maken van de componenten die worden ontwikkeld op basis van het estafettemodel. Gebruik deze componenten dus ter inspiratie."
                heading="Rijkshuisstijl Figma Bibliotheek"
                href="https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?m=auto"
                linkLabel="Bekijk de Rijkshuisstijl Bibliotheek in Figma"
                target="_blank"
              />
              <Card
                description="Beide bibliotheken zijn gekoppeld aan dit Figma bestand met templates en patronen voor gehele pagina's. Bestaande overheidswebsites zijn nagebouwd met NLDS-componenten en RHC-tokens, om te toetsen of stijl en componenten aansluiten bij de praktijk."
                heading="Rijkshuisstijl Figma Templates"
                href="https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NLDS---Rijkshuisstijl---Templates?m=auto&t=3Q7KyAIW8lqYHupW-6"
                linkLabel="Bekijk de Rijkshuisstijl Templates in Figma"
                target="_blank"
              />
              <Card
                description="Met deze aanpak maken we de beste en meest bruikbare componenten, patronen en richtlijnen te maken. Elk nieuw onderdeel volgt het estafette model en beweegt zich in een samenwerking tussen het kernteam en de community van begin tot eind door dit model."
                heading="Estafettemodel"
                href="https://www.nldesignsystem.nl/handboek/estafettemodel/"
                linkLabel="Lees over het estafettemodel van NL Design System"
                target="_blank"
              />
            </div>
          </section>

          <section>
            <Heading level={2}>Kom in contact</Heading>
            <div className="rhc-card-group">
              <Card
                appearance="full-bleed"
                description="Volg en neem deel aan de slowchat van de huidige sprint op Code for NL Slack in #nl-design-system-developers"
                heading="Slack"
                href="https://praatmee.codefor.nl/"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
              />
              <Card
                appearance="full-bleed"
                description="Neem deel aan de Rijkshuisstijl styling discussies etc etc."
                heading="GitHub Discussies"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/discussions/1505"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
              />
              <Card
                appearance="full-bleed"
                description="Neem contact op met de contributors op GitHub etc etc."
                heading="GitHub Contributors"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/graphs/contributors"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
              />
              <Card
                appearance="full-bleed"
                description="Of neem contact op met het NL Design System kernteam."
                heading="Kernteam"
                href="https://nldesignsystem.nl/project/kernteam/"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
              />
            </div>
          </section>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
