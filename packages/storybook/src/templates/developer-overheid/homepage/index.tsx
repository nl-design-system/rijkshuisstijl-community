import {
  Card,
  Figure,
  Footer,
  Icon,
  Image,
  LinkList,
  LinkListLink,
  Logo,
  NavBar,
  PageContent,
  PageHeader,
  SkipLink,
  // TextInput,
} from '@rijkshuisstijl-community/components-react';
import { IconArrowUp, IconSearch } from '@tabler/icons-react';
import { Button, Heading, Paragraph, ScrollLink } from '@utrecht/component-library-react';
// import { BadgeList, DataBadge } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';

<html lang="nl" />;

export default function DevOvhHomepage() {
  return (
    <>
      <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
        Ga naar hoofdinhoud
      </SkipLink>
      <PageHeader className="rhc-header-wrapper">
        <title>Developer Overheid - Homepage</title>
        <Figure>
          <Logo organisation="" subtitle="">
            <Icon icon="nederland-map" />
          </Logo>

          <div className="rhc-logo-container">
            <div className="rhc-logo-heading">
              <Image
                alt="Developer Overheid logo"
                height={35}
                src="https://developer.overheid.nl/img/logo-don.svg"
                width={35}
              ></Image>
              <Heading className="rhc-logo-main-heading" level={1}>
                developers.overheid.nl
              </Heading>
            </div>
            <Paragraph className="rhc-logo-paragraph">Ontwikkelaarsportaal van de Nederlandse overheid</Paragraph>
          </div>
        </Figure>
      </PageHeader>

      <NavBar
        endItems={[
          { id: '1', href: '/', label: 'Forum' },
          { id: '2', href: '/', label: 'APIs' },
          { id: '3', href: '/', label: 'Open Source' },
          { id: '4', href: '/', label: 'Open Data' },
          { id: '5', href: '/', label: 'Geodata' },
        ]}
        items={[
          { id: '1', href: '/developer-overheid/homepage', label: 'Home' },
          { id: '2', href: '/', label: 'Kennisbank' },
          { id: '3', href: '/', label: 'Communities' },
          { id: '4', href: '/', label: 'Blog' },
        ]}
      >
        <Button appearance="">
          <IconSearch></IconSearch>
        </Button>
        {/* <TextInput aria-label="text-input-label" name="subject" placeholder="Zoek"></TextInput> */}
      </NavBar>

      <PageBody className="rhc-templates-main-content rhc-templates-page-body">
        <main id="main">
          <PageContent className="rhc-templates-page-content">
            {/* <Hero
              aspectRatio="16 / 9"
              heading="Informatie, bronnen en tools van de overheid voor ontwikkelaars door Kennisplatform API's, Digilab, Opensourcewerken, Binnenlandse Zaken, Geonovum, Belastingdienst, Kadaster en andere overheidsinstanties.."
              headingLevel={1}
              imageAlt="Sterrenhemel"
              imageSrc=""
            ></Hero> */}

            {/* <Hero
              imageAlt="Tullip field"
              imageSrc="https://media.istockphoto.com/id/1369277204/vector/turquoise-green-starry-sky-illustration.jpg?s=612x612&w=0&k=20&c=zt_-oaVq_8yNHVe61pZQZ2nQXY6j0QiY6u09oScn8xU="
            >
              <LinkListCard
                heading="Informatie, bronnen en tools van de overheid voor ontwikkelaars door Kennisplatform API's, Digilab, Opensourcewerken, Binnenlandse Zaken, Geonovum, Belastingdienst, Kadaster en andere overheidsinstanties."
                headingLevel={2}
              ></LinkListCard>
              <Heading level={1}>
                Informatie, bronnen en tools van de overheid voor ontwikkelaars door Kennisplatform APIs, Digilab,
                Opensourcewerken, Binnenlandse Zaken, Geonovum, Belastingdienst, Kadaster en andere overheidsinstanties.
              </Heading>
            </Hero> */}

            <section className="rhc-cards-container">
              <Card
                className="rhc-card-box"
                description="Tutorials, tools, code voorbeelden en meer. Alles wat je nodig hebt om aan de slag te gaan met software van en voor de overheid."
                heading="Kennisbank"
                href="#"
                imageAlt="Een open boek"
                imageSrc="	https://developer.overheid.nl/img/boek-opengeslagen.svg"
                linkLabel="Ga naar de kennisbank"
                metadata=""
                title="Kennisbank"
              ></Card>
              <Card
                className="rhc-card-box"
                description="Ga in gesprek met andere developers en vind hier getting started guides, tutorials en tools."
                heading="Onze community"
                href="#"
                imageAlt="Twee praat wolkjes die symbool staan voor in gesprek gaan met elkaar"
                imageSrc="https://don.apps.digilab.network/img/tekstballonnen-met-punten.svg"
                linkLabel="Ga naar het forum"
                metadata=""
                title="Onze community"
              ></Card>
              <Card
                className="rhc-card-box"
                description="Bekijk welke API‘s er allemaal zijn en kom er achter hoe je jouw oplossing hier op kan laten aansluiten."
                heading="Vind een API"
                href="#"
                imageAlt="Een wereld bol met daarbinnen connected dots, dit staat stymbool voor aansluiten"
                imageSrc="https://don.apps.digilab.network/img/ict.svg"
                linkLabel="Ga naar het API register"
                metadata=""
                title="Vind een API"
              ></Card>
              <Card
                className="rhc-card-box"
                description="Vind bestaande repositories om bij aan te haken en ontdek wat er binnen welke organisatie beschikbaar is."
                heading="Vind een repository"
                href="#"
                imageAlt="Een beeldscherm met een HTML closing tag, symbool voor computer code"
                imageSrc="https://don.apps.digilab.network/img/computercode.svg"
                linkLabel="Ga naar het OSS register"
                metadata=""
                title="Vind een repository"
              ></Card>
            </section>
          </PageContent>
        </main>
        <ScrollLink appearance="subtle-button" href="#top">
          Terug naar boven <IconArrowUp />
        </ScrollLink>
      </PageBody>

      <Footer
        // backtotop
        appearanceLevel={4}
        background="primary-filled"
        heading="Mede mogelijk gemaakt door:"
        columns={[
          {
            appearanceLevel: 4,
            heading: 'Community',
            children: [
              <LinkList key="1">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Discourse
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Slack
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  GitHub
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Mastodon
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  LinkedIn
                </LinkListLink>
              </LinkList>,
            ],
          },
          {
            appearanceLevel: 4,
            heading: 'Overig',
            children: (
              <LinkList key="2">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Bijdragen
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Implementatie ondersteuning{' '}
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Contact
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Privacyverklaring
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Toegankelijkheids verklaring
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Sitearchief
                </LinkListLink>
              </LinkList>
            ),
          },
        ]}
      />
    </>
  );
}
