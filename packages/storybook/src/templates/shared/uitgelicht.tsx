import { CardAsLink, Heading } from '@rijkshuisstijl-community/components-react';

export default () => (
  <>
    <Heading level={2}>Uitgelicht</Heading>
    <div className="rhc-card-as-link-group">
      <CardAsLink
        heading="Bijbaan, vakantiewerk en stage door jongeren"
        href="#"
        imageAlt="Tulip field"
        imageSrc="/placeholder.jpg"
        linkLabel="Lees meer"
        title="Tekst over de link"
      />
      <CardAsLink
        heading="Vakantiedagen en vakantiegeld"
        href="#"
        imageAlt="Tulip field"
        imageSrc="/placeholder.jpg"
        linkLabel="Lees meer"
        title="Tekst over de link"
      />
    </div>
  </>
);
