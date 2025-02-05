import {
  // ActionGroup,
  Card, //TODO: aanpassen naar Dev Ovh opbouw?
  Footer,
  Heading,
  HeadingGroup,
  Hero,
  Icon, //TODO: afmetingen aanpassen (is nu erg klein naast h2)
  Image,
  Link,
  Logo,
  NavBar,
  PageContent,
  PageHeader,
  // Paragraph,
  // PreHeading,
  // Section, //? Section Component RHC/NLDS?
  // Subtitle, //TODO: toevoegen aan Hero?
} from '@rijkshuisstijl-community/components-react';
import {
  // IconAffiliate, //TODO: moet in 2e card
  IconArrowRight,
  IconClipboardCheck,
  // IconCode, //TODO: moet in 3e card
  IconFolders,
  IconJetpack,
  // IconMessages, //TODO: moet in 1e card
  // IconPrompt, //Placeholder Dev.Ovh logo
  IconTerminal2,
} from '@tabler/icons-react';
import { BadgeList, DataBadge } from '@utrecht/component-library-react'; //? of DataBadge uit NLDS?
import { PageBody } from '@utrecht/page-body-react';
// import { ColumnLayout } from '@utrecht/component-library-react';

export default function DevOvhHomepage() {
  return (
    <>
      <PageHeader>
        <Logo organisation="Developer Overheid">
          <Image
            alt="Developer Overheid logo"
            height={25}
            src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
            width={25}
          />
        </Logo>
        <NavBar
          items={[
            { id: '1', href: '/', label: 'API‘s' },
            { id: '2', href: '/form', label: 'Repositories' },
            { id: '3', href: '/details', label: 'Kennisbank' },
            { id: '4', href: '/collage', label: 'Community' },
          ]}
        ></NavBar>
      </PageHeader>

      <PageBody className="rhc-templates-page .rhc-templates-page-container">
        <div className="rhc-templates-background-color-white rhc-templates-main-content">
          <PageContent className="rhc-templates-page-content rhc-templates-background-color-white">
            <Hero
              heading="Developer Portal van de Nederlandse Overheid"
              headingLevel={1}
              imageAlt="Sterrenhemel"
              imageSrc="https://media.istockphoto.com/id/1369277204/vector/turquoise-green-starry-sky-illustration.jpg?s=612x612&w=0&k=20&c=zt_-oaVq_8yNHVe61pZQZ2nQXY6j0QiY6u09oScn8xU="
              subHeading="Eén centrale plek voor de developer die voor of met de overheid ontwikkelt" //?is p, kan dit ook Subheading (ToDo status) zijn?
            ></Hero>

            <section className="rhc-templates-card-container">
              <Card
                description="Ga in gesprek met andere developers en vind hier getting started guides, tutorials en tools."
                heading="Onze community"
                href="#"
                imageAlt="Twee praat wolkjes"
                imageSrc="./placeholder.jpg" //? kan dit ook een SVG/Icon zijn? (IconMessages)
                linkLabel="Naar community" //? IconArrowRight toevoegen aan link?
                metadata="Metadata"
                title="Onze community"
              ></Card>

              <Card
                description="Bekijk welke API‘s er allemaal zijn en kom er achter hoe je jouw oplossing hier op kan laten aansluiten."
                heading="Vind een API"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="./placeholder.jpg" //? kan dit ook een SVG/Icon zijn? (IconAffiliate)
                linkLabel="Zoek API‘"
                metadata="Metadata"
                title="Vind een API"
              ></Card>

              <Card
                description="Vind bestaande repositories om bij aan te haken en ontdek wat er binnen welke organisatie beschikbaar is."
                heading="Vind een repository"
                href="#"
                imageAlt="Placeholder Image"
                imageSrc="./placeholder.jpg" //? kan dit ook een SVG zijn? (IconCode)
                linkLabel="Zoek repositories"
                metadata="Metadata"
                title="Vind een repository"
              ></Card>
            </section>

            <section>
              <HeadingGroup>
                <Heading level={2}>
                  <Icon>
                    <IconJetpack />
                  </Icon>
                  Aan de slag
                </Heading>
              </HeadingGroup>

              <div className="rhc-templates-card-container">
                <Card
                  appearance="full-bleed"
                  heading="Ontwerp een API"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Ontwerp een API"
                  description="Hier leggen we uit welke stappen je kunt doorlopen om snel en efficient een
                        nieuwe REST API te ontwikkelen. We gaan hierbij uit van een design first aanpak, dus we starten 
                        met het API design."
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
                      width={16}
                    />
                    Developer Overheid
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description="Open Source werken heeft veel voordelen. Maar hoe ziet de codebase van een gezond Open Source project er uit? En waar moet je nog meer rekening mee houden? Antwoorden daarop krijg je in dit artikel."
                  heading="Start een Open Source project"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Start een Open Source project"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
                      width={16}
                    />
                    Developer Overheid
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description="Overheidsorganisaties ontwikkelen veel API‘s om allerlei data snel en efficient te delen met andere overheidsorganisaties en andere partijen die met de overheid werken. In deze post leer je hoe je zelf deze API’s kan gebruiken."
                  heading="Gebruik API‘s van de overheid"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Gebruik API‘s van de overheid"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Kadaster logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo-kadaster.22b0c6f65ecd.svg "
                      width={16}
                    />
                    Kadaster
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description="Binnen Open Source projecten wordt Git veelal op een specifiek manier ingezet. Zo worden bijdragen vanuit de community toegelaten, of niet. "
                  heading="Git: hoe gebruik ik Git in een Open Source project?"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Git: hoe gebruik ik Git in een Open Source project?"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Kadaster logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo-kadaster.22b0c6f65ecd.svg "
                      width={16}
                    />
                    Kadaster
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description="NL Design System is een set van richtlijnen, componenten en tools."
                  heading="Samen werken aan web-componenten met NL Design System" //een label hiertussen?
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Samen werken aan web-componenten met NL Design System"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="NL Design System logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo_nld.2c563404d848.png "
                      width={16}
                    />
                    NL Design System
                  </DataBadge>
                  <BadgeList className="rhc-badgelist">
                    <DataBadge className="rhc-badgelist-databadge">open-source</DataBadge>
                    <DataBadge className="rhc-badgelist-databadge">front-end</DataBadge>
                    <DataBadge className="rhc-badgelist-databadge">community</DataBadge>
                    <DataBadge className="rhc-badgelist-databadge">nl-design-system</DataBadge>
                    <DataBadge className="rhc-badgelist-databadge">design-system</DataBadge>
                  </BadgeList>
                </Card>
              </div>

              <div>
                <Link>
                  <Icon>
                    <IconArrowRight />
                  </Icon>
                  Meer handleidingen
                </Link>
              </div>
            </section>

            <section>
              <HeadingGroup>
                <Heading level={2}>
                  <Icon>
                    <IconClipboardCheck />
                  </Icon>
                  Richtlijnen
                </Heading>
              </HeadingGroup>

              <div className="rhc-templates-card-container">
                <Card
                  appearance="full-bleed"
                  description="De standaard Digitoegankelijk is een lijst van succescriteria die ervoor zorgt dat websites en applicaties toegankelijk zijn voor alle burgers. "
                  heading="Standaard Digitoegankelijk"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Standaard Digitoegankelijk"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
                      width={16}
                    />
                    Developer Overheid
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description="Om een open source project inzichtelijk te maken is het belangrijk dat bepaalde metadata beschikbaar is. Hiervoor is de publiccode.yml standaard in het leven geroepen."
                  heading="Publiccode.yml"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Publiccode.yml"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
                      width={16}
                    />
                    Developer Overheid
                  </DataBadge>
                  <BadgeList>
                    <DataBadge className="rhc-templates-databadge">open-source</DataBadge>
                    <DataBadge className="rhc-templates-databadge">publiccode.yml</DataBadge>
                    <DataBadge className="rhc-templates-databadge">metadata</DataBadge>
                  </BadgeList>
                </Card>

                <Card
                  appearance="full-bleed"
                  heading="OpenAPI Specification (OAS)"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="OpenAPI Specification (OAS)"
                  description="De OpenAPI Specification (OAS) is een open standaard om REST API‘s te 
"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
                      width={16}
                    />
                    Developer Overheid
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  heading="REST API Design Rules (ADR)"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="REST API Design Rules (ADR)"
                  description="De REST API Design Rules (ADR) schrijven voor waar een REST API van de overheid 
                        aan moet voldoen. Deze regels zijn verplicht gesteld door Forum Standaardisatie, waardoor elke 
                        overheid hieraan moet voldoen."
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Kennisplatform API‘s logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo_icon_kpa.1787d5b5302a.png"
                      width={16}
                    />
                    Kennisplatform API‘s
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description="De security.txt standaard zorgt ervoor dat ethische hackers laagdrempelig kwetsbaarheden kunnen melden bij de eigenaar/ beheerder van een applicatie."
                  heading="Security.txt"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Security.txt"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
                      width={16}
                    />
                    Developer Overheid
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description="De standaard voor publieke code is een gids die beoogt handvatten te geven bij het werken aan Open Source Software in de publieke sector."
                  heading="Standaard voor publieke code" //een label hiertussen?
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Standaard voor publieke code"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
                      width={16}
                    />
                    Developer Overheid
                  </DataBadge>
                  <BadgeList>
                    <DataBadge className="rhc-templates-databadge">open-source</DataBadge>
                    <DataBadge className="rhc-templates-databadge">public-code</DataBadge>
                    <DataBadge className="rhc-templates-databadge">documentatie</DataBadge>
                    <DataBadge className="rhc-templates-databadge">handleiding</DataBadge>
                  </BadgeList>
                </Card>
              </div>

              <div>
                <Link>
                  <Icon>
                    <IconArrowRight />
                  </Icon>
                  Meer richtlijnen
                </Link>
              </div>
            </section>

            <section>
              <HeadingGroup>
                <Heading level={2}>
                  <Icon>
                    <IconTerminal2 />
                  </Icon>
                  Tools
                </Heading>
              </HeadingGroup>

              <div className="rhc-templates-card-container">
                <Card
                  appearance="full-bleed"
                  description=" OpenKAT is ontwikkeld om de (beveiligings-)status van informatiesystemen te monitoren, analyseren en op te slaan.  "
                  heading="OpenKat - Kwetsbaarheden Analyse Tool"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="OpenKat - Kwetsbaarheden Analyse Tool"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo-vws.dd2102c1b8a4.jpg"
                      width={16}
                    />
                    Ministerie van Volksgezondheid
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description=" Met deze beslisboom ontdekt je welke ICT-standaarden van de 'Pas toe of leg uit'-lijst relevant zijn voor jouw situatie.  "
                  heading="Beslisboom Open Standaarden"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Beslisboom Open Standaarden"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="VWS logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/rijksictgilde_logo.67d4c5088eb6.jpeg"
                      width={16}
                    />
                    Forum Standaardisatie
                  </DataBadge>
                  <BadgeList>
                    <DataBadge className="rhc-templates-databadge">open-standaarden</DataBadge>
                    <DataBadge className="rhc-templates-databadge">beslisboom</DataBadge>
                    <DataBadge className="rhc-templates-databadge">development</DataBadge>
                  </BadgeList>
                </Card>

                <Card
                  appearance="full-bleed"
                  description=" Quality-time is een open source tool die je kan helpen de kwaliteit van je maatwerksoftware te bewaken en technische schuld te beheren. "
                  heading="Quality Time - Software quality monitoring"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Quality Time - Software quality monitoring"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="ICTU logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/ictu_logo.0b81bb28a73f.jpg"
                      width={16}
                    />
                    ICTU
                  </DataBadge>
                  <BadgeList>
                    <DataBadge className="rhc-templates-databadge">quality</DataBadge>
                    <DataBadge className="rhc-templates-databadge">software-development</DataBadge>
                    <DataBadge className="rhc-templates-databadge">metrics</DataBadge>
                    <DataBadge className="rhc-templates-databadge">software-maintanance</DataBadge>
                  </BadgeList>
                </Card>

                <Card
                  appearance="full-bleed"
                  description="De OAS Generator genereert een OAS boilerplate op basis van minimale configuratie. "
                  heading="OpenAPI Specification Generator"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="OpenAPI Specification Generator"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
                      width={16}
                    />
                    Developer Overheid
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description="De API Design Rules (ADR) Validator is een command line interface die gebruikt kan worden om te valideren of een API zicht gedraagt conform de NL API Strategie."
                  heading="API Design Rules Validator"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="API Design Rules Validator"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
                      width={16}
                    />
                    Developer Overheid
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description="De ADR Linter controleert of een OpenAPI Specificatie compliant is met de API Design Rules. De linter is gebaseerd op het Open Source project Spectral."
                  heading="API Design Rules Linter" //een label hiertussen?
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="API Design Rules Linter"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
                      width={16}
                    />
                    Developer Overheid
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description=" Federatieve Service Connectivity (FSC) is een standaard voor veilige digitale gegevensuitwisseling. "
                  heading="FSC - Rego policy builder" //een label hiertussen?
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="FSC - Rego policy builder"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Digilab logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/digilab.fc627bf9e625.svg"
                      width={16}
                    />
                    Digilab
                  </DataBadge>
                </Card>

                <Card
                  appearance="full-bleed"
                  description="  Met deze web-editor kan je laagdrempelig een publiccode.yml bestand genereren.  "
                  heading="Publiccode.yml Editor " //een label hiertussen?
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Publiccode.yml Editor "
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Italia logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo-it.8dc3d8b7d75e.png"
                      width={16}
                    />
                    Developer Italia
                  </DataBadge>

                  <BadgeList>
                    <DataBadge className="rhc-templates-databadge">open-source</DataBadge>
                    <DataBadge className="rhc-templates-databadge">publiccode.yml</DataBadge>
                    <DataBadge className="rhc-templates-databadge">metadata</DataBadge>
                  </BadgeList>
                </Card>
              </div>

              <div>
                <Link>
                  <Icon>
                    <IconArrowRight />
                  </Icon>
                  Meer tools
                </Link>
              </div>
            </section>

            <section>
              <HeadingGroup>
                <Heading level={2}>
                  <Icon>
                    <IconFolders />
                  </Icon>
                  Templates
                </Heading>
              </HeadingGroup>

              <div className="rhc-templates-card-container">
                <Card
                  appearance="full-bleed"
                  description=" Python Project Template voor het opzetten van een Python project. "
                  heading="Python Project Template"
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Python Project Template"
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Rijks ICT Gilde logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/rijksictgilde_logo.67d4c5088eb6.jpeg"
                      width={16}
                    />
                    Rijks ICT Gilde
                  </DataBadge>
                  <BadgeList>
                    <DataBadge className="rhc-templates-databadge">python</DataBadge>
                    <DataBadge className="rhc-templates-databadge">template</DataBadge>
                    <DataBadge className="rhc-templates-databadge">.editorconfig</DataBadge>
                    <DataBadge className="rhc-templates-databadge">VS Code</DataBadge>
                    <DataBadge className="rhc-templates-databadge">Poetry package manager</DataBadge>
                  </BadgeList>
                </Card>

                <Card
                  appearance="full-bleed"
                  description=" Voorbeeld van een vooringevulde publiccode.yml. "
                  heading="Publiccode.yml " //een label hiertussen?
                  href="#"
                  imageAlt="Placeholder Image" //background color ipv image mogelijk?
                  imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
                  metadata=""
                  title="Publiccode.yml "
                >
                  <DataBadge className="rhc-templates-databadge">
                    <Image
                      alt="Developer Overheid logo"
                      height={16}
                      src=" https://developer.overheid.nl/static/images/logo.e5300da726cb.svg"
                      width={16}
                    />
                    Developer Overheid
                  </DataBadge>

                  <BadgeList>
                    <DataBadge className="rhc-templates-databadge">open-source</DataBadge>
                    <DataBadge className="rhc-templates-databadge">publiccode.yml</DataBadge>
                    <DataBadge className="rhc-templates-databadge">metadata</DataBadge>
                    <DataBadge className="rhc-templates-databadge">example</DataBadge>
                  </BadgeList>
                </Card>
              </div>

              <div>
                <Link>
                  <Icon>
                    <IconArrowRight />
                  </Icon>
                  Meer templates
                </Link>
              </div>
            </section>
          </PageContent>
        </div>
      </PageBody>
      <Footer></Footer>
    </>
  );
}
