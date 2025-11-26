import { CardAsLink, Heading } from '@rijkshuisstijl-community/components-react';
import './KomInContact.css';

export function KomInContact() {
  return (
    <>
      <Heading appearanceLevel={1} level={1}>
        Kom in contact
      </Heading>
      <div className='card-contact'>
        <CardAsLink
          appearance="full-bleed"
          description="This card has a background image."
          heading="Slack"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="/src/placeholder.jpg"
          metadata="Metadata"
          title="Card Title"
        />

        <CardAsLink
          appearance="full-bleed"
          description="This card has a background image."
          heading="Contributers"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="/src/placeholder.jpg"
          metadata="Metadata"
          title="Card Title"
        />

        <CardAsLink
          appearance="full-bleed"
          description="This card has a background image."
          heading="Kernteam"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="/src/placeholder.jpg"
          metadata="Metadata"
          title="Card Title"
        />

        <CardAsLink
          appearance="full-bleed"
          description="This card has a background image."
          heading="GitHub Discussies"
          href="#"
          imageAlt="Placeholder Image"
          imageSrc="/src/placeholder.jpg"
          metadata="Metadata"
          title="Card Title"
        />
      </div>
    </>
  );
}
