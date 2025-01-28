import {
  // ActionGroup,
  // BadgeList, //TODO: waarvandaan?
  Card, //TODO: waarvandaan?
  // DataBadge, //TODO: import uit NLDS?
  Heading,
  HeadingGroup,
  Hero,
  Icon,
  Link,
  // Paragraph,
  // PreHeading,
  // Section, //TODO: Section Component RHC/NLDS?
  // Subtitle, //TODO:
} from '@rijkshuisstijl-community/components-react';
import { DataBadge } from '@utrecht/component-library-react';
// import { ColumnLayout } from '@utrecht/component-library-react';

export default function DevOvhHomepage() {
  return (
    <>
      <section className={'rhc-page-main-content'}>
        <Hero
          heading="Developer Portal van de Nederlandse Overheid" //default is H3, kan dit ook H1 zijn?
          imageAlt="Sterrenhemel"
          imageSrc="https://media.istockphoto.com/id/1369277204/vector/turquoise-green-starry-sky-illustration.jpg?s=612x612&w=0&k=20&c=zt_-oaVq_8yNHVe61pZQZ2nQXY6j0QiY6u09oScn8xU="
          subHeading="Eén centrale plek voor de developer die voor of met de overheid ontwikkelt" //is p, kan dit ook Subheading (ToDo status) zijn?
        ></Hero>

        <section className="rhc-templates-card-container">
          <Card
            description="Ga in gesprek met andere developers en vind hier getting started guides, tutorials en tools."
            heading="Onze community"
            href="#"
            imageAlt="Placeholder Image"
            imageSrc="./placeholder.jpg" //kan dit ook een SVG zijn?
            linkLabel="Naar community"
            metadata="Metadata"
            title="Onze community"
          ></Card>

          <Card
            description="Bekijk welke API's er allemaal zijn en kom er achter hoe je jouw oplossing hier op kan laten aansluiten."
            heading="Vind een API"
            href="#"
            imageAlt="Placeholder Image"
            imageSrc="./placeholder.jpg" //kan dit ook een SVG zijn?
            linkLabel="Zoek API's"
            metadata="Metadata"
            title="Vind een API"
          ></Card>

          <Card
            description="Vind bestaande repositories om bij aan te haken en ontdek wat er binnen welke organisatie beschikbaar is."
            heading="Vind een repository"
            href="#"
            imageAlt="Placeholder Image"
            imageSrc="./placeholder.jpg" //kan dit ook een SVG zijn?
            linkLabel="Zoek repositories"
            metadata="Metadata"
            title="Vind een repository"
          ></Card>
        </section>

        <section>
          <HeadingGroup>
            <Heading level={2}>
              <Icon icon={'pijl-naar-rechts'} />
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
                <Icon icon={'pijl-naar-rechts'} /> Developer Overheid
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
                <Icon icon={'pijl-naar-rechts'} /> Developer Overheid
              </DataBadge>
            </Card>

            <Card
              appearance="full-bleed"
              description="Overheidsorganisaties ontwikkelen veel API’s om allerlei data snel en efficient te delen met andere overheidsorganisaties en andere partijen die met de overheid werken. In deze post leer je hoe je zelf deze API’s kan gebruiken."
              heading="Gebruik API's van de overheid"
              href="#"
              imageAlt="Placeholder Image" //background color ipv image mogelijk?
              imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
              metadata=""
              title="Gebruik API's van de overheid"
            >
              <DataBadge className="rhc-templates-databadge">
                <Icon icon={'pijl-naar-rechts'} /> Kadaster
              </DataBadge>
            </Card>

            <Card
              appearance="full-bleed"
              description="NL Design System is een set van richtlijnen, componenten en tools."
              heading="Samen werken aan web-componenten met NL Design System"
              href="#"
              imageAlt="Placeholder Image" //background color ipv image mogelijk?
              imageSrc="https://media.istockphoto.com/id/1095286208/nl/foto/licht-blauw-papierkleur-met-textuur-voor-achtergrond.jpg?s=612x612&w=0&k=20&c=M74rYkw4zXl2yf1OGhXR_Ronao8a4_3mxomHfU4z2Jk="
              metadata=""
              title="Samen werken aan web-componenten met NL Design System"
            >
              <DataBadge className="rhc-templates-databadge">
                <Icon icon={'pijl-naar-rechts'} /> Kadaster
              </DataBadge>
            </Card>
          </div>

          <div>
            <Heading level={3}> Ontwerp een API</Heading>
            <DataBadge className="rhc-templates-databadge">hoihoi</DataBadge>
          </div>

          <div></div>
          <div></div>
        </section>
      </section>
    </>
  );
}
