import { Button, Card, Heading, Hero, LinkListCard, Paragraph } from '@rijkshuisstijl-community/components-react';
import { SpotlightSection } from '@utrecht/component-library-react';
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
          <SpotlightSection type="info">
            <Heading level={3}>Let op, dit is een voorbeeldpagina!</Heading>
            <Paragraph>
              De inhoud is uitsluitend bedoeld ter illustratie van het gebruik van RHC componenten binnen een bepaalde
              pagina. Deze pagina vertegenwoordigt geen officiële informatie en functionaliteiten werken misschien niet
              altijd zoals verwacht.{' '}
            </Paragraph>
          </SpotlightSection>
          <Hero
            heading="Rijkshuisstijl Community"
            headingLevel={1}
            imageAlt="Tullip field"
            imageSrc="/placeholder.jpg"
            subHeading="Samen bouwen aan de toekomst"
          >
            <LinkListCard heading="Okeeee, let's goOoo" headingLevel={2}>
              <Button>Start hier</Button>
            </LinkListCard>
          </Hero>
          {/* Dit worden Marwa's improved cards */}
          <div className="rhc-cards-container">
            <Card
              appearance="default"
              description="Een community van ontwerpers en ontwikkelaars die gezamenlijk componenten en kennis delen voor de toepassing van de Rijkshuisstijl, voortbouwend op het NL Design System."
              heading="Wat is RHC?"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="/placeholder.jpg"
              title="Card Title"
            />
            <Card
              appearance="default"
              description="Een betrokken, actieve community waarmee meerdere overheidsorganisaties van elkaar kunnen leren en elkaars werk kunnen hergebruiken."
              heading="Samen met NL Design System"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="/placeholder.jpg"
              title="Card Title"
            />
            <Card
              appearance="default"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              heading="Open Source werken"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="/placeholder.jpg"
              title="Card Title"
            />
          </div>
          <div>
            <Heading level={2}>Tools en Frameworks</Heading>
            <div className="rhc-cards-container">
              <Card
                appearance="horizontal"
                heading="Vanilla HTML"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                title="Card Title"
              />
              <Card
                appearance="horizontal"
                heading="CSS"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                title="Card Title"
              />
              <Card
                appearance="horizontal"
                heading="React"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                title="Card Title"
              />
              <Card
                appearance="horizontal"
                heading="Vue"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                title="Card Title"
              />
              <Card
                appearance="horizontal"
                heading="Angular"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                title="Card Title"
              />
              <Card
                appearance="horizontal"
                heading="Web Components"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                title="Card Title"
              />
              <Card
                appearance="horizontal"
                heading="Figma"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                title="Card Title"
              />
              <Card
                appearance="horizontal"
                heading="Design Tokens"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                title="Card Title"
              />
              <Card
                appearance="horizontal"
                heading="Start Thema"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                title="Card Title"
              />
            </div>
          </div>

          <div>
            <Heading level={2}>Aan de slag als developer of designer</Heading>
            <div className="rhc-cards-container">
              <Card
                appearance="full-bleed"
                description="This card has a background image."
                heading="Full Bleed Card"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                metadata="Metadata"
                title="Card Title"
              />
              <Card
                appearance="full-bleed"
                description="This card has a background image."
                heading="Full Bleed Card"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                metadata="Metadata"
                title="Card Title"
              />
              <Card
                appearance="full-bleed"
                description="This card has a background image."
                heading="Full Bleed Card"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="/placeholder.jpg"
                metadata="Metadata"
                title="Card Title"
              />
            </div>
            <Card
              appearance="full-bleed"
              description="This card has a background image."
              heading="Full Bleed Card"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="/placeholder.jpg"
              metadata="Metadata"
              title="Card Title"
            />
          </div>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
