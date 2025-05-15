import {
  Button,
  Card,
  Footer,
  Heading,
  Hero,
  Icon,
  LinkList,
  LinkListCard,
  LinkListLink,
  Logo,
  NavBar,
  PageContent,
  PageHeader,
  Paragraph,
  SkipLink,
} from '@rijkshuisstijl-community/components-react';
import { IconArrowUp } from '@tabler/icons-react';
import { ScrollLink, SpotlightSection } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';

export default function Page() {
  return (
    <>
      <PageHeader>
        <Logo organisation="Rijkshuisstijl Community">
          <Icon className={'dutch-map'} icon={'nederland-map'} />
        </Logo>
        <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
          Ga naar hoofdinhoud
        </SkipLink>
        <NavBar
          items={[
            { id: '1', href: '/rich-text', label: 'Rich Text' },
            { id: '2', href: '/form', label: 'Form' },
            { id: '3', href: '/details', label: 'Details' },
            { id: '4', href: '/collage', label: 'Collage' },
            { id: '5', href: '/mijn-omgeving', label: 'Mijn Omgeving' },
            { id: '6', href: '/', label: 'Zoekresultaten' },
            { id: '', href: '/', label: 'Homepage' },
          ]}
        ></NavBar>
      </PageHeader>
      <PageBody className="rhc-templates-page">
        <div className="rhc-templates-main-content" id="main">
          <PageContent className="rhc-templates-page-content rhc-templates-background-color-white">
            <SpotlightSection type="info">
              <Heading level={3}>Let op, dit is een voorbeeldpagina!</Heading>
              <Paragraph>
                De inhoud is uitsluitend bedoeld ter illustratie van het gebruik van RHC componenten binnen een bepaalde
                pagina. Deze pagina vertegenwoordigt geen officiële informatie en functionaliteiten werken misschien
                niet altijd zoals verwacht.{' '}
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
          </PageContent>
        </div>
      </PageBody>
      <ScrollLink appearance="subtle-button" href="#top">
        Terug naar boven <IconArrowUp />
      </ScrollLink>

      <Footer
        appearanceLevel={4}
        heading="Let op: Dit is geen officiële website van de Rijkshuisstijl. Deze website is een community-initiatief en wordt niet ondersteund door de officiële Rijkshuisstijl."
        columns={[
          {
            heading: 'Service',
            children: [
              <LinkList key="1">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Contact
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Item
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Item
                </LinkListLink>
              </LinkList>,
            ],
          },
          {
            heading: 'Over deze site',
            children: (
              <LinkList key="2">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Over deze organisatie
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Copyright
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Privacy
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Cookies
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Toegankelijkheid
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Open data
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Kwetsbaarheid melden
                </LinkListLink>
              </LinkList>
            ),
          },
        ]}
      />
    </>
  );
}
