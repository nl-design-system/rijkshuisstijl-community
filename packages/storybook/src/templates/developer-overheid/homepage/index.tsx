import {
  Card,
  Figure,
  Footer,
  Icon,
  // Heading,
  // HeadingGroup,
  // Hero,
  // Icon,
  Image,
  LinkList,
  LinkListLink,
  // LinkListCard,
  // Link,
  Logo,
  NavBar,
  PageContent,
  PageHeader,
  TextInput,
} from '@rijkshuisstijl-community/components-react';
import {} from // IconArrowRight,
// IconClipboardCheck,
// IconFolders,
// IconJetpack,
// IconPrompt, //Placeholder Dev.Ovh logo
// IconTerminal2,
'@tabler/icons-react';
// import { Paragraph } from '@utrecht/component-library-react';
// import { Heading, Heading1, Paragraph } from '@utrecht/component-library-react';
// import { BadgeList, DataBadge } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react';
// TODO: DataBadge, Heading, Link NL Design System Candidate gebruiken (+ RHC styling)

export default function DevOvhHomepage() {
  return (
    <>
      <PageHeader>
        <Figure>
          <Logo organisation={undefined}>
            <Image alt="Rijksoverheid Logo" src="https://developer.overheid.nl/img/logo-rijksoverheid.svg" />
          </Logo>

          <Logo organisation="developer.overheid.nl" subtitle="Ontwikkelaarsportaal van de Nederlandse overheid">
            <Image
              alt="Developer Overheid logo"
              height={25}
              src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
              width={25}
            />
          </Logo>
        </Figure>

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
        ></NavBar>

        <TextInput aria-label="text-input-label" name="subject" placeholder="Zoek"></TextInput>
      </PageHeader>

      <PageBody className="rhc-templates-main-content">
        <div>
          <PageContent className="rhc-templates-page-content">
            {/* <Hero
              aspectRatio="16 / 9"
              heading="Informatie, bronnen en tools van de overheid voor ontwikkelaars door Kennisplatform API's, Digilab, Opensourcewerken, Binnenlandse Zaken, Geonovum, Belastingdienst, Kadaster en andere overheidsinstanties."
              headingLevel={1}
              imageAlt="Sterrenhemel"
              imageSrc="https://media.istockphoto.com/id/1369277204/vector/turquoise-green-starry-sky-illustration.jpg?s=612x612&w=0&k=20&c=zt_-oaVq_8yNHVe61pZQZ2nQXY6j0QiY6u09oScn8xU="
              subHeading="Eén centrale plek voor de developer die voor of met de overheid ontwikkelt"
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
        </div>
      </PageBody>

      <Footer
        appearanceLevel={4}
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        columns={[
          {
            heading: 'Community',
            children: [
              <LinkList key="1">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Contact
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Abonneren
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  RSS
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Vacatures
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Sitemap
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Help
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Archief
                </LinkListLink>
              </LinkList>,
            ],
          },
          {
            heading: 'Overig',
            children: (
              <LinkList key="2">
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Over deze organisatie
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
                  Wetten en regelingen
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
