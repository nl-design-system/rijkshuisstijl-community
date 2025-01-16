import { getIconSet, Icon, Link, Paragraph } from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import './index.css';

export default function IconSet() {
  return (
    <>
      <PageBody>
        <Paragraph>
          Onderstaande iconen zijn beschikbaar in de Rijkshuisstijl Community en bruikbaar in het{' '}
          <Link href="/?path=/docs/rhc-icon--docs">Icon</Link> component. De iconen zijn afkomstig uit de open source{' '}
          <Link href="https://tabler.io/icons">Tabler Icons</Link> icon set of handmatig geïmplementeerd door
          contributors van de Rijkshuisstijl Community. Om een icon die hieronder staat te gebruiken, kan de icon ID
          toegewezen worden aan de icon property van de <Link href="/?path=/docs/rhc-icon--docs">Icon</Link> component.
          Er kunnen eigen iconen worden toegevoegd aan de standaard icon set, zie hiervoor de instructies op de{' '}
          <Link href="/?path=/docs/rhc-icon--docs">storybook pagina van de Icon component</Link>
        </Paragraph>
        <div className="rhc-icon-set">
          {Object.keys(getIconSet())
            .sort()
            .map((iconID, index) => (
              <div className="rhc-icon-set-item" key={index}>
                <Icon icon={iconID}></Icon>
                <span>{iconID}</span>
              </div>
            ))}
        </div>
      </PageBody>
    </>
  );
}
