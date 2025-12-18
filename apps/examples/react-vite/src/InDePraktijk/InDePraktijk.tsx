import { CardAsLink, Heading, Paragraph } from '@rijkshuisstijl-community/components-react';
import './InDePraktijk.css';

export function InDePraktijk() {
  return (
    <>
      <Heading appearanceLevel={2} level={2}>
        In de praktijk
      </Heading>
      <Paragraph className="paragraph__padding">
        Klaar om er direct van start te gaan? Hieronder vind je de README's van de beschikbare tools en frameworks. Voor
        een dieper begrip en uitgebreide documentatie verwijzen we je graag naar de "lees en leer" section.
      </Paragraph>
      <div className="card-praktijk">
        <CardAsLink
          appearance="horizontal"
          heading="React"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="src/assets/placeholder.jpg"
          title="Card Title"
        />
        <CardAsLink
          appearance="horizontal"
          heading="CSS"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="src/assets/placeholder.jpg"
          title="Card Title"
        />
        <CardAsLink
          appearance="horizontal"
          heading="Web Components"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="src/assets/placeholder.jpg"
          title="Card Title"
        />

        <CardAsLink
          appearance="horizontal"
          heading="Design Tokens"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="src/assets/placeholder.jpg"
          title="Card Title"
        />

        <CardAsLink
          appearance="horizontal"
          heading="Spring bord"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="src/assets/placeholder.jpg"
          title="Card Title"
        />
      </div>
    </>
  );
}
