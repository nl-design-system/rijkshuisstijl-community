import { CardAsLink, Heading, Paragraph } from '@rijkshuisstijl-community/components-react';
import './InDePraktijk.css';

export function InDePraktijk() {
  return (
    <>
      <Heading level={2}>
        In de praktijk
      </Heading>
      <Paragraph className="rhc-paragraph__padding">
        Klaar om er direct van start te gaan? Hieronder vind je de README&apos;s van de beschikbare tools en frameworks. Voor
        een dieper begrip en uitgebreide documentatie verwijzen we je graag naar de &quot;lees en leer&quot; section.
      </Paragraph>
      <div className="rhc-card-praktijk">
        <CardAsLink
          appearance="horizontal"
          heading="React"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="src/assets/placeholder.jpg"
          title="Lees hoe je de React-componenten van Rijkshuisstijl Community kunt gebruiken"
        />
        <CardAsLink
          appearance="horizontal"
          heading="CSS"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="src/assets/placeholder.jpg"
          title="Lees hoe je enkel de CSS van Rijkshuisstijl Community kunt gebruiken"
        />
        <CardAsLink
          appearance="horizontal"
          heading="Web Components"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="src/assets/placeholder.jpg"
          title="Lees hoe je Web Components van Rijkshuisstijl Community kunt gebruiken"
        />

        <CardAsLink
          appearance="horizontal"
          heading="Design Tokens"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="src/assets/placeholder.jpg"
          title="Lees hoe je Design Tokens van Rijkshuisstijl Community kunt gebruiken"
        />

        <CardAsLink
          appearance="horizontal"
          heading="Sprint bord"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="src/assets/placeholder.jpg"
          title="Bekijk het Sprint Bord van Rijkshuisstijl Community on Github"
        />
      </div>
    </>
  );
}
