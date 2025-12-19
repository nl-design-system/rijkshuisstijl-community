'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import { CardAsLink, ColumnLayout, Heading, Hero, Link, Paragraph } from '@rijkshuisstijl-community/components-react';
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
            heading="Rijkshuisstijl Community Design System"
            headingLevel={1}
            imageAlt="Tullip field"
            imageSrc="/placeholder.jpg"
          />
          <ColumnLayout>
            <Paragraph>
              De Rijkshuisstijl Community is een samenwerkingsverband om{' '}
              <Link href="https://www.nldesignsystem.nl/componenten/">NL Design System-componenten</Link> te gebruiken
              voor projecten die moeten voldoen aan de Rijkshuisstijl.
            </Paragraph>
            <Paragraph>
              De community bestaat uit organisaties van de centrale overheid van Nederland en leveranciers die zijn
              ingehuurd voor het ontwikkelen van websites en apps. Doe jij ook mee?
            </Paragraph>
          </ColumnLayout>
          {/* Dit worden Marwa's improved cards */}
          <div className="rhc-card-as-link-group">
            <CardAsLink
              className="rhc-card-as-link-no-link"
              heading={
                <Heading appearanceLevel={4} level={2}>
                  Efficiënt
                </Heading>
              }
            >
              <Paragraph>
                Een uitgebreide bibliotheek van herbruikbare componenten. Platform-onafhankelijk met de nieuwe
                Rijkshuisstijl.
              </Paragraph>
            </CardAsLink>
            <CardAsLink
              className="rhc-card-as-link-no-link"
              heading={
                <Heading appearanceLevel={4} level={2}>
                  Breed gedragen
                </Heading>
              }
            >
              <Paragraph>De community deelt regelmatig kennis, ervaring, updates en verbeteringen.</Paragraph>
            </CardAsLink>
            <CardAsLink
              className="rhc-card-as-link-no-link"
              heading={
                <Heading appearanceLevel={4} level={2}>
                  Gebruiksvriendelijk
                </Heading>
              }
            >
              <Paragraph>Consistente gebruikservaring met herbruikbare voorbeeldpagina&apos;s</Paragraph>
            </CardAsLink>
          </div>

          <section className="rhc-templates-spacing-1">
            <Heading level={2}>In de praktijk</Heading>
            <Paragraph>
              Klaar om er direct van start te gaan? Hieronder vind je de README&apos;s van de beschikbare tools en
              frameworks. Voor een dieper begrip en uitgebreide documentatie verwijzen we je graag naar de &quot;lees en
              leer&quot; section.
            </Paragraph>
            <div className="rhc-card-as-link-group">
              <CardAsLink
                appearance="horizontal"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je in het algemeen van start gaat met de Rijkshuisstijl Community"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Aan de slag
                  </Heading>
                }
              />
              <CardAsLink
                appearance="horizontal"
                href="https://github.com/orgs/nl-design-system/projects/59"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Bekijk het Sprint Bord van de Rijkshuisstijl Community op GitHub"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Sprint bord
                  </Heading>
                }
              />
              <CardAsLink
                appearance="horizontal"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je enkel de CSS van de Rijkshuisstijl Community kunt gebruiken"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    CSS
                  </Heading>
                }
              />
              <CardAsLink
                appearance="horizontal"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je de React-componenten van de Rijkshuisstijl Community kunt gebruiken"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    React
                  </Heading>
                }
              />
              <CardAsLink
                appearance="horizontal"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je de Web Components van de Rijkshuisstijl Community kunt gebruiken"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Web Components
                  </Heading>
                }
              />
              <CardAsLink
                appearance="horizontal"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-angular/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je de Angular-componenten van de Rijkshuisstijl Community kunt gebruiken"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Angular
                  </Heading>
                }
              />
              <CardAsLink
                appearance="horizontal"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je de Twig-componenten van de Rijkshuisstijl Community kunt gebruiken"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Twig
                  </Heading>
                }
              />
              <CardAsLink
                appearance="horizontal"
                href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/README.md"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Lees hoe je de Design Tokens van de Rijkshuisstijl Community kunt gebruiken"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Design Tokens
                  </Heading>
                }
              />
            </div>
          </section>

          <section className="rhc-templates-spacing-1">
            <Heading level={2}>Lees en leer</Heading>
            <div className="rhc-card-as-link-group">
              <CardAsLink
                href="https://rijkshuisstijl-community.vercel.app/"
                linkLabel="Bekijk de Rijkshuisstijl Community Storybook"
                target="_blank"
                description={
                  <Paragraph>
                    Storybook is een overzicht van al onze componenten en templates in verschillende frameworks, handig
                    voor zowel designers als developers om snel te zien hoe iets eruitziet en werkt.
                  </Paragraph>
                }
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Rijkshuisstijl Community Storybook
                  </Heading>
                }
              />
              <CardAsLink
                href="https://github.com/nl-design-system/rijkshuisstijl-community/discussions/1505"
                linkLabel="Ga naar de Rijkshuisstijl styling implementatie GitHub discussies"
                target="_blank"
                description={
                  <Paragraph>
                    Voor het inzichtelijker maken van designkeuzes, gebruiken we GitHub Discussions. Feedback op de
                    hierin voorgestelde keuzes (ook bijv. een korte &apos;akkoord&apos;) is zeer welkom. Het delen van
                    reeds zelfgemaakte designkeuzes wordt ook gewaardeerd.
                  </Paragraph>
                }
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Rijkshuisstijl styling implementatie GitHub discussies
                  </Heading>
                }
              />
              <CardAsLink
                href="https://www.nldesignsystem.nl/handboek/design-tokens/"
                linkLabel="Lees alles over design tokens"
                target="_blank"
                description={
                  <Paragraph>
                    We werken toe naar één centrale JSON met design tokens, waarmee je eenvoudig componenten uit het NL
                    Design System kunt stijlen volgens jouw Rijkshuisstijl-deelidentiteit.
                  </Paragraph>
                }
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Design Tokens
                  </Heading>
                }
              />
              <CardAsLink
                href="https://www.nldesignsystem.nl/handboek/designer/overzicht"
                linkLabel="Lees hoe je mee ontwerpt aan het NL Design System"
                target="_blank"
                description={
                  <Paragraph>
                    Mee designen aan het NL Design System of gebruik maken van bestaande Figma componenten? Als designer
                    vind je hier alle documentatie die je nodig hebt.
                  </Paragraph>
                }
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Designer Handboek
                  </Heading>
                }
              />
              <CardAsLink
                href="https://www.nldesignsystem.nl/handboek/developer/overzicht"
                linkLabel="Lees hoe je mee ontwikkelt aan het de Rijkshuisstijl Community"
                target="_blank"
                description={
                  <Paragraph>
                    Mee ontwikkelen aan NL Design System of gebruik maken van bestaande componenten? Als developer vind
                    je hier alle documentatie die je nodig hebt om te beginnen.
                  </Paragraph>
                }
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Developer Handboek
                  </Heading>
                }
              />
              <CardAsLink
                href="https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/NL-Design-System---Bibliotheek---Rijkshuisstijl-Community"
                linkLabel="Bekijk de NL Design System Rijkshuisstijl Bibliotheek in Figma"
                target="_blank"
                description={
                  <Paragraph>
                    Een duplicaat van de Voorbeeld bibliotheek van het NL Design System, waarin de design tokens van het
                    RHC-project zijn toegepast. Deze setup maakt het mogelijk om stijlkeuzes te testen en inzichtelijk
                    te maken. Door de design tokens via Token Studio in te laden, kun je tussen thema&apos;s schakelen
                    en beoordelen of de stijl aansluit bij jouw organisatie.
                  </Paragraph>
                }
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    NL Design System Rijkshuisstijl Figma Bibliotheek
                  </Heading>
                }
              />
              <CardAsLink
                href="https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NL-Design-System---Templates---Rijkshuisstijl"
                linkLabel="Bekijk de Rijkshuisstijl Templates in Figma"
                target="_blank"
                description={
                  <Paragraph>
                    Beide bibliotheken zijn gekoppeld aan dit Figma bestand met templates en patronen voor gehele
                    pagina&apos;s. Bestaande overheidswebsites zijn nagebouwd met NLDS-componenten en RHC-tokens, om te
                    toetsen of stijl en componenten aansluiten bij de praktijk.
                  </Paragraph>
                }
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    NL Design System Rijkshuisstijl Figma Templates
                  </Heading>
                }
              />
              <CardAsLink
                href="https://www.nldesignsystem.nl/handboek/estafettemodel/"
                linkLabel="Lees over het estafettemodel van NL Design System"
                target="_blank"
                description={
                  <Paragraph>
                    Met deze aanpak maken we de beste en meest bruikbare componenten, patronen en richtlijnen te maken.
                    Elk nieuw onderdeel volgt het estafette model en beweegt zich in een samenwerking tussen het
                    kernteam en de community van begin tot eind door dit model.
                  </Paragraph>
                }
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Estafettemodel
                  </Heading>
                }
              />
            </div>
          </section>

          <section className="rhc-templates-spacing-1">
            <Heading level={2}>Kom in contact</Heading>
            <div className="rhc-card-as-link-group">
              <CardAsLink
                appearance="full-bleed"
                href="https://praatmee.codefor.nl/"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Volg en neem deel aan de slowchat van de huidige sprint op Slack"
                description={
                  <Paragraph>
                    Volg en neem deel aan de slowchat van de huidige sprint op Code for NL Slack in
                    #nl-design-system-developers
                  </Paragraph>
                }
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Slack
                  </Heading>
                }
              />
              <CardAsLink
                appearance="full-bleed"
                description={<Paragraph>Neem deel aan de Rijkshuisstijl styling discussies</Paragraph>}
                href="https://github.com/nl-design-system/rijkshuisstijl-community/discussions/1505"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Neem deel aan de Rijkshuisstijl styling discussies"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    GitHub Discussies
                  </Heading>
                }
              />
              <CardAsLink
                appearance="full-bleed"
                description={<Paragraph>Neem contact op met de contributors op GitHub.</Paragraph>}
                href="https://github.com/nl-design-system/rijkshuisstijl-community/graphs/contributors"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Neem contact op met de contributors op GitHub"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    GitHub Contributors
                  </Heading>
                }
              />
              <CardAsLink
                appearance="full-bleed"
                description={<Paragraph>Of neem contact op met het NL Design System kernteam.</Paragraph>}
                href="https://nldesignsystem.nl/project/kernteam/"
                imageAlt=""
                imagePresentation={true}
                imageSrc="/placeholder.jpg"
                target="_blank"
                title="Neem contact op met het NL Design System kernteam"
                heading={
                  <Heading appearanceLevel={4} level={3}>
                    Kernteam
                  </Heading>
                }
              />
            </div>
          </section>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
