import { Alert, Heading, Paragraph } from '@rijkshuisstijl-community/components-react';

export default function SharedRijkshuisstijlDisclaimer() {
  return (
    <Alert type="info">
      <Heading appearanceLevel={5} level={2}>
        Deze pagina toont nog niet de juiste rijkshuisstijl
      </Heading>
      <Paragraph>
        Het Rijkshuisstijl Community Design System bevat op dit moment nog geen rijksfonts, rijkslogo&apos;s en
        rijksiconen. Swap deze assets via de beschreven stappen voordat je het design systeem gebruikt.
      </Paragraph>
    </Alert>
  );
}
