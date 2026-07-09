import { Alert, Heading, Link, Paragraph } from '@rijkshuisstijl-community/components-react';
import './rijkshuisstijl-disclaimer.css';

export default function SharedRijkshuisstijlDisclaimer() {
  return (
    <Alert className="rhc-shared-disclaimer" type="warning">
      <Heading appearanceLevel={5} level={2}>
        Deze pagina toont nog niet de juiste rijkshuisstijl
      </Heading>
      <Paragraph>
        Het Rijkshuisstijl Community Design System bevat op dit moment nog geen rijksfonts, rijkslogo&apos;s en
        rijksiconen. Swap deze assets via de{' '}
        <Link href="https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/README.md" target="_blank">
          beschreven stappen
        </Link>{' '}
        voordat je het design systeem gebruikt.
      </Paragraph>
    </Alert>
  );
}
